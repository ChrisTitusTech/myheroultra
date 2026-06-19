import type { CollectionEntry } from 'astro:content';

export const guideCategoryLabels = {
  beginner: 'Beginner',
  character: 'Character',
  combo: 'Combo',
  unlock: 'Unlock',
  currency: 'Currency',
  system: 'System',
} as const;

export const guideDifficultyLabels = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
} as const;

export function getGuideSlug(guide: CollectionEntry<'guides'>) {
  return guide.id.replace(/\.(md|mdx)$/, '');
}

export function formatGuideDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export function sortGuides(guides: CollectionEntry<'guides'>[]) {
  return [...guides].sort((a, b) => {
    if (a.data.featured !== b.data.featured) return Number(b.data.featured) - Number(a.data.featured);
    return b.data.lastUpdated.getTime() - a.data.lastUpdated.getTime();
  });
}

export function getRelatedGuides(
  current: CollectionEntry<'guides'>,
  guides: CollectionEntry<'guides'>[],
  limit = 3,
) {
  return guides
    .filter((guide) => guide.id !== current.id && !guide.data.draft)
    .map((guide) => {
      const sharedTags = guide.data.tags.filter((tag) => current.data.tags.includes(tag)).length;
      const sameCharacter =
        current.data.characterId &&
        guide.data.characterId === current.data.characterId
          ? 3
          : 0;
      const sameCategory = guide.data.category === current.data.category ? 1 : 0;

      return { guide, score: sharedTags + sameCharacter + sameCategory };
    })
    .sort((a, b) => b.score - a.score || b.guide.data.lastUpdated.getTime() - a.guide.data.lastUpdated.getTime())
    .slice(0, limit)
    .map(({ guide }) => guide);
}
