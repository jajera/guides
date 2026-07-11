import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export async function getPublishedGuides() {
  const entries = await getCollection('guides', ({ data }) => !data.draft);
  return entries.sort(
    (a: CollectionEntry<'guides'>, b: CollectionEntry<'guides'>) =>
      b.data.date.valueOf() - a.data.date.valueOf(),
  );
}
