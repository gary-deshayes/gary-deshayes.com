import rss from '@astrojs/rss';
import { getPosts, slugOf } from '../lib/posts';

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: 'Gary Deshayes — Blog',
    description: 'Développement web, SaaS, SEO et affiliation — les coulisses de mes projets.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/${post.data.lang === 'fr' ? '' : 'en/'}blog/${slugOf(post)}/`,
    })),
  });
}
