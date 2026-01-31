# Etapa de build
FROM node:22-alpine AS builder

# Instalar pnpm
RUN npm install -g pnpm

# Directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package.json pnpm-lock.yaml ./

# Instalar dependencias
RUN pnpm install --frozen-lockfile

# Copiar el resto del código
COPY . .

# Build del sitio Astro
RUN pnpm build

# Etapa de producción - servidor estático ligero
FROM node:22-alpine

# Instalar serve
RUN npm install -g serve

# Directorio de trabajo
WORKDIR /app

# Copiar archivos estáticos desde el builder
COPY --from=builder /app/dist ./dist

# Exponer puerto 3000 (puerto por defecto de serve)
EXPOSE 3000

# Iniciar servidor estático
CMD ["serve", "dist", "-l", "3000"]
