# carlosferreras.com

Sitio web personal y blog desarrollado con [Astro](https://astro.build/), diseñado para ser rápido, moderno y multiidioma.

## 🚀 Tecnologías

- **[Astro](https://astro.build/)** v5 – Framework web moderno
- **[TailwindCSS](https://tailwindcss.com/)** v4 – Estilos utilitarios
- **[TypeScript](https://www.typescriptlang.org/)** – Tipado estático
- **[Fontsource](https://fontsource.org/)** – Geist Mono (fuente variable)
- **[Iconify](https://iconify.design/)** – Iconos (Lucide, Simple Icons)
- **Sitemap XML** – Generación automática de sitemap

## 📁 Estructura del Proyecto

```
├── public/              # Archivos estáticos
├── src/
│   ├── assets/          # Imágenes y recursos
│   ├── components/      # Componentes Astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── LanguageSwitcher.astro
│   │   ├── Links.astro
│   │   ├── PostList.astro
│   │   └── SEO.astro
│   ├── content/         # Contenido del blog (Markdown)
│   │   └── posts/
│   ├── i18n/            # Traducciones
│   │   └── translations.ts
│   ├── layouts/         # Layouts
│   │   └── Layout.astro
│   ├── pages/           # Rutas
│   │   ├── index.astro          # Página principal (ES)
│   │   ├── blog.astro           # Lista de posts (ES)
│   │   ├── blog/
│   │   │   └── [...slug].astro  # Post individual (ES)
│   │   ├── en/                  # Versión en inglés
│   │   │   ├── index.astro
│   │   │   ├── blog.astro
│   │   │   └── blog/
│   │   │       └── [...slug].astro
│   │   ├── 404.astro
│   │   └── sitemap.xml.ts
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── content.config.ts
└── package.json
```

## 🛠️ Scripts Disponibles

| Comando | Acción |
|---------|--------|
| `pnpm dev` | Inicia servidor de desarrollo |
| `pnpm build` | Construye el sitio para producción |
| `pnpm preview` | Previsualiza la build de producción |
| `pnpm astro` | CLI de Astro |

## 🌐 Multiidioma

El sitio soporta dos idiomas:
- **Español (ES)** – Ruta raíz `/`
- **Inglés (EN)** – Ruta `/en/`

Las traducciones se gestionan en `src/i18n/translations.ts`.

## 📝 Blog

Los posts del blog se escriben en Markdown y se almacenan en `src/content/posts/`.

### Frontmatter requerido

```yaml
---
title: "Título del post"
description: "Descripción breve"
pubDate: 2024-01-15
lang: "es"  # o "en"
---
```

## 🎨 Estilos

- **TailwindCSS v4** configurado con Vite
- **Geist Mono** como fuente monoespaciada
- Estilos globales en `src/styles/global.css`

## 📦 Instalación

```bash
# Clonar el repositorio
git clone <repo-url>
cd carlosferreras.com

# Instalar dependencias
pnpm install

# Iniciar desarrollo
pnpm dev
```

## 🚀 Despliegue

```bash
# Construir para producción
pnpm build

# La salida estará en la carpeta dist/
```

## 📄 Licencia

© Carlos Ferreras. Todos los derechos reservados.
