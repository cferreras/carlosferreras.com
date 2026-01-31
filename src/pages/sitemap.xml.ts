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
    };
  });

  // Combinar todas las URLs
  const allUrls = [...staticPages, ...postUrls];

  // Generar XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allUrls.map((page) => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''}
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="es" href="${SITE_URL}${page.lang === 'es' ? page.url : page.url.replace('/en/', '/')}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}${page.lang === 'en' ? page.url : '/en' + page.url}"/>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
