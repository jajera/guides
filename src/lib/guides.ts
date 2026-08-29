import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import { catalogueHooksBySlug } from './catalogue';

export type GuideEntry = CollectionEntry<'guides'> & {
  data: CollectionEntry<'guides'>['data'] & { summary: string };
};

/**
 * Published guides, newest first.
 * Catalogue `hook` overlays frontmatter `summary` when the slug matches
 * (shared copy with johna.kiwi Labs cards).
 */
export async function getPublishedGuides(): Promise<GuideEntry[]> {
  const entries = await getCollection('guides', ({ data }) => !data.draft);
  const hooks = await catalogueHooksBySlug();

  const overlaid = entries.map((entry) => {
    const hook = hooks.get(entry.slug);
    if (!hook || hook === entry.data.summary) {
      return entry as GuideEntry;
    }
    return {
      ...entry,
      data: { ...entry.data, summary: hook },
    } as GuideEntry;
  });

  return overlaid.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
}
