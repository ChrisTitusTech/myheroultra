import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const guides = defineCollection({
  loader: glob({
    base: './src/content/guides',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['beginner', 'character', 'combo', 'unlock', 'currency', 'system']),
    characterId: z.enum(['star-and-stripe', 'all-might', 'hawks', 'mt-lady']).optional(),
    tags: z.array(z.string()).default([]),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
    publishedAt: z.coerce.date(),
    lastUpdated: z.coerce.date(),
    seasonCreated: z.number().int().positive(),
    patchReviewed: z.string().nullable(),
    sourceUrls: z.array(z.url()).default([]),
    needsVerification: z.boolean().default(false),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { guides };
