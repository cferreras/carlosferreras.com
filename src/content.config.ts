import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    lang: z.enum(['es', 'en']).default('es'),
    draft: z.boolean().optional().default(false),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { posts };
