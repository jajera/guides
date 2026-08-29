import rss from '@astrojs/rss';
import { getPublishedGuides } from '../lib/guides';
import { withBase } from '../lib/paths';

export async function GET(context) {
  const entries = await getPublishedGuides();

  return rss({
    title: 'guides.johna.kiwi',
    description:
      'Dated hub for articles and walkthroughs with categories linking to full guides.',
    site: context.site,
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.summary,
      pubDate: entry.data.date,
      link: withBase(`${entry.slug}/`),
      categories: [
        entry.data.type,
        entry.data.category,
        ...(entry.data.tags ?? []),
      ],
    })),
  });
}
