import { defineCollection, z } from 'astro:content';

const categories = [
  'networking',
  'dns',
  'serverless',
  'storage',
  'containers',
  'iot',
  'tooling',
  'general',
] as const;

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    type: z.enum(['walkthrough', 'article']),
    category: z.enum(categories),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
    walkthrough_url: z.string().url().optional(),
    demo_url: z.string().url().optional(),
    article_url: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { guides };
export type GuideCategory = (typeof categories)[number];
export const GUIDE_CATEGORIES = categories;
