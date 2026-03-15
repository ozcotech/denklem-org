import { defineCollection, z } from 'astro:content';

const announcements = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    lang: z.enum(['tr', 'en']),
    link: z.string().optional(),
    linkText: z.string().optional(),
    linkExternal: z.boolean().optional().default(false),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    lang: z.enum(['tr', 'en']),
  }),
});

export const collections = { announcements, blog };
