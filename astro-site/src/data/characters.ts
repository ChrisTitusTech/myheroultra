export type CharacterRole = 'Assault' | 'Strike' | 'Rapid' | 'Technical' | 'Support';

export interface CharacterStatRatings {
  hp: number;
  damage: number;
  mobility: number;
  range: number;
  defense: number;
  difficulty: number;
}

export interface CharacterSkill {
  key: 'alpha' | 'beta' | 'gamma' | 'special';
  name: string;
  displayName: string;
  summary: string;
  levelPriority?: number;
}

export interface CharacterRecord {
  id: string;
  slug: string;
  name: string;
  role: CharacterRole;
  unlockMethod?: string;
  beginnerRating: number;
  stats: CharacterStatRatings;
  skills: CharacterSkill[];
  recommendedLevelOrder?: string[];
  tags: string[];
  lastReviewedPatch?: string;
}

export const characters: CharacterRecord[] = [
  {
    id: 'stars-and-stripe',
    slug: 'stars-and-stripe',
    name: 'Stars and Stripe',
    role: 'Strike',
    unlockMethod: 'Character ticket or banner availability depending on current rotation',
    beginnerRating: 6,
    stats: { hp: 350, damage: 9, mobility: 7, range: 8, defense: 6, difficulty: 7 },
    recommendedLevelOrder: ['beta-4', 'gamma-4', 'alpha-4', 'alpha-9', 'gamma-9', 'beta-9'],
    skills: [
      { key: 'alpha', name: 'Diffusion Laser', displayName: 'Alpha: Diffusion Laser', summary: 'Primary ranged damage and follow-up tool.', levelPriority: 3 },
      { key: 'beta', name: 'Zero Air', displayName: 'Beta: Zero Air', summary: 'Vacuum setup used to pull enemies into follow-up damage.', levelPriority: 1 },
      { key: 'gamma', name: 'Keraunos', displayName: 'Gamma: Keraunos', summary: 'Mobility, chase, punish, and escape tool.', levelPriority: 2 },
      { key: 'special', name: 'Invert Area', displayName: 'Special: Invert Area', summary: 'Area utility for storm pressure, sustain, and team saves.' }
    ],
    tags: ['ranged', 'setup', 'burst', 'teamfight'],
    lastReviewedPatch: 'TBD'
  },
  {
    id: 'all-might',
    slug: 'all-might',
    name: 'All Might',
    role: 'Assault',
    beginnerRating: 8,
    stats: { hp: 350, damage: 8, mobility: 8, range: 6, defense: 8, difficulty: 5 },
    skills: [],
    tags: ['beginner-friendly', 'mobility', 'frontline'],
    lastReviewedPatch: 'TBD'
  }
];

export function getCharacterBySlug(slug: string) {
  return characters.find((character) => character.slug === slug);
}
