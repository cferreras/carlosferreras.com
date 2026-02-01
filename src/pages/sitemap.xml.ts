import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE_URL = 'https://carlosferreras.com';

export const GET: APIRoute = async () => {
  // Páginas estáticas
  const staticPages = [
    { url: '/', lang: 'es', priority: '1.0' },
    { url: '/blog', lang: 'es', priority: '0.8' },
    { url: '/en/', lang: 'en', priority: '1.0' },
    { url: '/en/blog', lang: 'en', priority: '0.8' },
  ];

  // Obtener posts del blog
  const posts = await getCollection('posts');

  // Crear un mapa de translationKey a posts
  const translationMap = new Map<string, { es?: string; en?: string }>();
  
  posts.forEach((post) => {
    const key = post.data.translationKey;
    if (key) {
      if (!translationMap.has(key)) {
        translationMap.set(key, {});
      }
      const slug = post.id.replace(/\.md$/, '');
      const path = post.data.lang === 'en' 
        ? `/en/blog/${slug}` 
        : `/blog/${slug}`;
      translationMap.get(key)![post.data.lang] = path;
    }
  });

  // Generar URLs de posts
  const postUrls = posts.map((post) => {
    const isEnglish = post.data.lang === 'en';
    // Eliminar la extensión .md del id
    const slug = post.id.replace(/\.md$/, '');
    const path = isEnglish 
      ? `/en/blog/${slug}` 
      : `/blog/${slug}`;
    
    return {
      url: path,
      lang: post.data.lang,
      priority: '0.6',
      lastmod: post.data.updatedDate?.toISOString() || post.data.pubDate.toISOString(),
      translationKey: post.data.translationKey,
    };
  });

  // Combinar todas las URLs
  const allUrls = [...staticPages, ...postUrls];

  // Función para generar enlaces alternativos
  const generateAlternateLinks = (page: typeof allUrls[0]) => {
    // Si es página estática
    if (!('translationKey' in page)) {
      const esUrl = page.lang === 'es' ? page.url : page.url.replace('/en/', '/');
      const enUrl = page.lang === 'en' ? page.url : '/en' + page.url;
      return `
    <xhtml:link rel="alternate" hreflang="es" href="${SITE_URL}${esUrl === '/en/' ? '/en/' : esUrl === '/en/blog' ? '/en/blog' : esUrl}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}${enUrl}"/>`;
    }

    // Si es un post con translationKey, usar las URLs relacionadas
    const key = page.translationKey;
    if (key && translationMap.has(key)) {
      const translations = translationMap.get(key)!;
      const esUrl = translations.es || '/blog/';
      const enUrl = translations.en || '/en/blog/';
      return `
    <xhtml:link rel="alternate" hreflang="es" href="${SITE_URL}${esUrl}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}${enUrl}"/>`;
    }

    // Si no tiene translationKey, solo mostrar el idioma actual
    return `
    <xhtml:link rel="alternate" hreflang="${page.lang}" href="${SITE_URL}${page.url}"/>`;
  };

  // Generar XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allUrls.map((page) => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''}
    <priority>${page.priority}</priority>${generateAlternateLinks(page)}
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
