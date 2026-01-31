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

# Etapa de producción - servidor estático
FROM node:22-alpine

# Instalar http-server (mejor manejo de rutas estáticas)
RUN npm install -g http-server

# Directorio de trabajo
WORKDIR /app

# Copiar archivos estáticos desde el builder
COPY --from=builder /app/dist ./dist

# Exponer puerto 8080
EXPOSE 8080

# Iniciar servidor estático
# -p 8080: puerto
# --gzip: compresión
# -c-1: sin cache (para desarrollo, quitar en prod si quieres cache)
# -s: modo silencioso (opcional)
CMD ["http-server", "dist", "-p", "8080", "--gzip", "-s"]
