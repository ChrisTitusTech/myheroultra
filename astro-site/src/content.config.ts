import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { characterRoster } from './data/characterRoster';

const characterIds = new Set(characterRoster.map(({ id }) => id));

const guides = defineCollection({
  loader: glob({
    base: './src/content/guides',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['beginner', 'character', 'combo', 'unlock', 'currency', 'system']),
    characterId: z.string().refine((id) => characterIds.has(id), {
      message: 'characterId must match a roster record',
    }).optional(),
    tags: z.array(z.string()).default([]),
    difficulty: z.enum(['beginner', 'intermediate', 'expert']),
    publishedAt: z.coerce.date(),
    lastUpdated: z.coerce.date(),
    seasonCreated: z.number().int().positive(),
    patchReviewed: z.string().nullable(),
    sourceUrls: z.array(z.url()).default([]),
    needsVerification: z.boolean().default(false),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }).superRefine((guide, context) => {
    if (!guide.draft && guide.sourceUrls.length === 0) {
      context.addIssue({
        code: 'custom',
        path: ['sourceUrls'],
        message: 'Published guides must include at least one source URL',
      });
    }
  }),
});

export const collections = { guides };
