import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const entries = await getCollection("guides", ({ data }) => !data.draft);
  const sorted = entries.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  return rss({
    title: "Guides",
    description:
      "Dated hub for articles and walkthroughs with categories linking to full GitHub Pages content.",
    site: context.site,
    items: sorted.map((entry) => ({
      title: entry.data.title,
      description: entry.data.summary,
      pubDate: entry.data.date,
      link: `/guides/${entry.slug}/`,
      categories: [
        entry.data.type,
        entry.data.category,
        ...(entry.data.tags ?? []),
      ],
    })),
  });
}
