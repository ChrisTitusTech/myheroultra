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
    characterId: z.string().optional(),
    tags: z.array(z.string()).default([]),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
    lastUpdated: z.coerce.date(),
    patchReviewed: z.string().nullable(),
    sourceUrls: z.array(z.url()).default([]),
    needsVerification: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { guides };
