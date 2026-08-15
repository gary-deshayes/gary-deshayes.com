import { getPosts, slugOf } from '../lib/posts';

export async function GET(context) {
  const site = context.site?.toString().replace(/\/$/, '') ?? 'https://gary-deshayes.com';
  const posts = await getPosts();
  const now = new Date().toISOString();

  const staticPages = [
    { path: '/', priority: '1.0' },
    { path: '/en/', priority: '1.0' },
    { path: '/blog', priority: '0.8' },
    { path: '/en/blog', priority: '0.8' },
    { path: '/cv', priority: '0.6' },
    { path: '/en/cv', priority: '0.6' },
  ];

  const urls = staticPages
    .map(
      (p) => `<url><loc>${site}${p.path}</loc><lastmod>${now}</lastmod><priority>${p.priority}</priority></url>`
    )
    .concat(
      posts.map((post) => {
        const path = `/${post.data.lang === 'fr' ? '' : 'en/'}blog/${slugOf(post)}/`;
        return `<url><loc>${site}${path}</loc><lastmod>${post.data.pubDate.toISOString()}</lastmod><priority>0.7</priority></url>`;
      })
    )
    .join('');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } }
  );
}
