import { characters } from './characters';
import type { CharacterRole } from './characters';

export interface CharacterTableEntry {
  id: string;
  slug: string;
  name: string;
  role: CharacterRole;
  tags: string[];
  stats: {
    hp: number;
    damage: number;
    mobility: number;
    range: number;
    teamUtility: number;
    difficulty: number;
  };
}

export const characterTableEntries: CharacterTableEntry[] = characters.map(
  ({ id, slug, name, role, tags, stats }) => ({
    id,
    slug,
    name,
    role,
    tags,
    stats,
  }),
);
