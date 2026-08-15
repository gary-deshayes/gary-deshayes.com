import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** Slug propre sans le dossier de langue ni l'extension */
export function slugOf(post: Post): string {
  return post.id.replace(/\.(md|mdx)$/, '').replace(/^(fr|en)\//, '');
}

export async function getPosts(lang?: 'fr' | 'en'): Promise<Post[]> {
  const posts = await getCollection('blog');
  return posts
    .filter((p) => (lang ? p.data.lang === lang : true) && !p.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
