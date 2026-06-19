export type CharacterRole = 'Assault' | 'Strike' | 'Rapid' | 'Technical' | 'Support';
export type SkillSlot = 'alpha' | 'beta' | 'gamma' | 'special';

export interface CharacterSource {
  sourceUrl: string;
  sourceName: string;
  sourceNote: string;
  lastChecked: string;
}

export interface CharacterStatRatings {
  hp: number;
  damage: number;
  mobility: number;
  range: number;
  teamUtility: number;
  difficulty: number;
}

export interface CharacterSkill {
  id: string;
  slot: SkillSlot;
  name: string;
  summary: string;
}

export interface CharacterRecord {
  id: string;
  slug: string;
  name: string;
  role: CharacterRole;
  summary: string;
  playstyle: string;
  unlockMethod: string | null;
  beginnerRating: number;
  stats: CharacterStatRatings;
  skills: CharacterSkill[];
  recommendedLevelOrder: string[];
  strengths: string[];
  weaknesses: string[];
  beginnerNotes: string[];
  tags: string[];
  source: CharacterSource;
  needsVerification: boolean;
}

export const characters = [
  {
    id: 'star-and-stripe',
    slug: 'star-and-stripe',
    name: 'Star and Stripe',
    role: 'Strike',
    summary: 'A ranged damage dealer built around space control, vacuum setups, and decisive chase tools.',
    playstyle: 'Create a favorable fight with Zero Air, then convert the opening with ranged pressure or Keraunos.',
    unlockMethod: null,
    beginnerRating: 6,
    stats: {
      hp: 350,
      damage: 9,
      mobility: 7,
      range: 8,
      teamUtility: 8,
      difficulty: 7,
    },
    skills: [
      {
        id: 'diffusion-laser',
        slot: 'alpha',
        name: 'Diffusion Laser',
        summary: 'A piercing ranged attack that spreads damage around its impact point.',
      },
      {
        id: 'zero-air',
        slot: 'beta',
        name: 'Zero Air',
        summary: 'Places a vacuum that pulls enemies toward its center and creates follow-up opportunities.',
      },
      {
        id: 'keraunos',
        slot: 'gamma',
        name: 'Keraunos',
        summary: 'A directional rush that launches a target and completes with a large laser strike on hit.',
      },
      {
        id: 'invert-area',
        slot: 'special',
        name: 'Invert Area',
        summary: 'Creates a team utility zone that can protect and sustain allies during a fight.',
      },
    ],
    recommendedLevelOrder: ['Zero Air to Lv. 4', 'Keraunos to Lv. 4', 'Diffusion Laser to Lv. 9'],
    strengths: ['Strong ranged pressure', 'Reliable setup for coordinated teams', 'Useful chase and repositioning'],
    weaknesses: ['Setup timing takes practice', 'Mistimed mobility can leave her exposed', 'Best value depends on clean follow-ups'],
    beginnerNotes: [
      'Use Zero Air to make enemy movement predictable instead of throwing it out without a follow-up.',
      'Keep one Keraunos charge available when possible so you still have an exit.',
    ],
    tags: ['ranged', 'setup', 'burst', 'teamfight'],
    source: {
      sourceUrl: 'https://ultrarumble.com/character/114',
      sourceName: 'UltraRumble.com',
      sourceNote: 'Role, HP, and skill names checked against the public character database. Guide ratings and advice are editorial.',
      lastChecked: '2026-06-19',
    },
    needsVerification: true,
  },
  {
    id: 'all-might',
    slug: 'all-might',
    name: 'All Might',
    role: 'Assault',
    summary: 'A durable all-rounder with ranged pressure, vertical mobility, and tools for disrupting close fights.',
    playstyle: 'Take strong positions early, pressure from mid-range, and use mobility to engage or rescue teammates.',
    unlockMethod: null,
    beginnerRating: 8,
    stats: {
      hp: 350,
      damage: 8,
      mobility: 8,
      range: 7,
      teamUtility: 8,
      difficulty: 5,
    },
    skills: [
      {
        id: 'detroit-smash',
        slot: 'alpha',
        name: 'Detroit Smash',
        summary: 'A ranged punch that sends a shock wave forward and can pressure enemies from the air.',
      },
      {
        id: 'oklahoma-smash',
        slot: 'beta',
        name: 'Oklahoma Smash',
        summary: 'A forward rush that closes distance and hits with a powerful punch.',
      },
      {
        id: 'united-states-of-smash',
        slot: 'gamma',
        name: 'United States of Smash',
        summary: 'A spinning area attack that can deflect incoming projectiles while active.',
      },
      {
        id: 'high-jump',
        slot: 'special',
        name: 'High Jump',
        summary: 'Launches high into the air for fast rotations, disengages, and high-ground access.',
      },
      {
        id: 'carry-to-safety',
        slot: 'special',
        name: 'Carry to Safety',
        summary: 'Carries a downed ally and revives them after setting them down.',
      },
    ],
    recommendedLevelOrder: ['Detroit Smash to Lv. 4', 'Oklahoma Smash to Lv. 4', 'Detroit Smash to Lv. 9'],
    strengths: ['Flexible at multiple ranges', 'Excellent vertical mobility', 'Can rescue downed teammates'],
    weaknesses: ['Large silhouette is easy to track', 'Mobility cooldowns are important defensive resources', 'Aggressive dives can separate him from the team'],
    beginnerNotes: [
      'High Jump is valuable even when no enemy is nearby; use it to claim rooftops and scout safely.',
      'Do not spend every movement option entering a fight. Keep a route out.',
    ],
    tags: ['beginner-friendly', 'mobility', 'frontline', 'rescue'],
    source: {
      sourceUrl: 'https://ultrarumble.com/character/12',
      sourceName: 'UltraRumble.com',
      sourceNote: 'Role, HP, and skill names checked against the public character database. Guide ratings and advice are editorial.',
      lastChecked: '2026-06-19',
    },
    needsVerification: true,
  },
  {
    id: 'hawks',
    slug: 'hawks',
    name: 'Hawks',
    role: 'Rapid',
    summary: 'A highly mobile scout and skirmisher who pressures from the air and chooses when fights begin.',
    playstyle: 'Use flight and tracking information to isolate targets, poke safely, and rotate before enemies can answer.',
    unlockMethod: null,
    beginnerRating: 5,
    stats: {
      hp: 250,
      damage: 7,
      mobility: 10,
      range: 8,
      teamUtility: 8,
      difficulty: 8,
    },
    skills: [
      {
        id: 'wingbeat',
        slot: 'alpha',
        name: 'Wingbeat',
        summary: 'Fires feathers that can track targets while aiming down sights.',
      },
      {
        id: 'wind-cross',
        slot: 'beta',
        name: 'Wind Cross',
        summary: 'A forward rush that transitions into flight after connecting with an enemy.',
      },
      {
        id: 'storm-wings',
        slot: 'gamma',
        name: 'Storm Wings',
        summary: 'Creates a wind vortex that reveals affected enemies to the team.',
      },
      {
        id: 'fierce-wings',
        slot: 'special',
        name: 'Fierce Wings',
        summary: 'Enables flight and can carry a teammate during a rotation.',
      },
      {
        id: 'special-action-escape',
        slot: 'special',
        name: 'Special Action Escape',
        summary: 'Uses remaining special-action charge to recover from a knockback and reposition.',
      },
    ],
    recommendedLevelOrder: ['Wingbeat to Lv. 4', 'Wind Cross to Lv. 4', 'Wingbeat to Lv. 9'],
    strengths: ['Exceptional map mobility', 'Strong scouting and target tracking', 'Can transport a teammate'],
    weaknesses: ['Low HP leaves little room for mistakes', 'Flight management has a high skill ceiling', 'Can drift too far from team support'],
    beginnerNotes: [
      'Mobility is only useful if you know where your team can follow. Check their position before committing.',
      'Use height to gather information, not only to chase damage.',
    ],
    tags: ['airborne', 'scout', 'tracking', 'high-mobility'],
    source: {
      sourceUrl: 'https://ultrarumble.com/character/43',
      sourceName: 'UltraRumble.com',
      sourceNote: 'Role, HP, and skill names checked against the public character database. Guide ratings and advice are editorial.',
      lastChecked: '2026-06-19',
    },
    needsVerification: true,
  },
  {
    id: 'mt-lady',
    slug: 'mt-lady',
    name: 'Mt. Lady',
    role: 'Assault',
    summary: 'A straightforward brawler who controls close space and can become enormous for late-fight disruption.',
    playstyle: 'Stay near cover at normal size, punish enemies who enter your range, and save Gigantification for open team fights.',
    unlockMethod: null,
    beginnerRating: 9,
    stats: {
      hp: 350,
      damage: 8,
      mobility: 6,
      range: 5,
      teamUtility: 7,
      difficulty: 4,
    },
    skills: [
      {
        id: 'spike-knuckle',
        slot: 'alpha',
        name: 'Spike Knuckle',
        summary: 'Sends a shock wave forward from a punch for dependable mid-range pressure.',
      },
      {
        id: 'caldera-stomp',
        slot: 'beta',
        name: 'Caldera Stomp',
        summary: 'Creates an area shock wave around her that damages nearby enemies.',
      },
      {
        id: 'canyon-cannon',
        slot: 'gamma',
        name: 'Canyon Cannon',
        summary: 'Launches a flying kick in the aim direction for pursuit or repositioning.',
      },
      {
        id: 'gigantification',
        slot: 'special',
        name: 'Gigantification',
        summary: 'Temporarily becomes giant, changing her attacks and making her a major team-fight threat.',
      },
    ],
    recommendedLevelOrder: ['Spike Knuckle to Lv. 4', 'Caldera Stomp to Lv. 4', 'Spike Knuckle to Lv. 9'],
    strengths: ['Simple core game plan', 'Strong close-range control', 'Gigantification can reshape an open fight'],
    weaknesses: ['Limited safe pressure at long range', 'Giant form is highly visible', 'Buildings and tight terrain can reduce her special-action value'],
    beginnerNotes: [
      'Fight from the edge of cover so ranged teams cannot focus you for free.',
      'Gigantification is strongest in open space where enemies cannot immediately hide indoors.',
    ],
    tags: ['beginner-friendly', 'brawler', 'area-control', 'frontline'],
    source: {
      sourceUrl: 'https://ultrarumble.com/character/10',
      sourceName: 'UltraRumble.com',
      sourceNote: 'Role, HP, and skill names checked against the public character database. Guide ratings and advice are editorial.',
      lastChecked: '2026-06-19',
    },
    needsVerification: true,
  },
] satisfies CharacterRecord[];

export function getCharacterBySlug(slug: string) {
  return characters.find((character) => character.slug === slug);
}
