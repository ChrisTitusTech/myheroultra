import { characterRoster } from './characterRoster';
import { characterSkillBehaviors } from './characterSkillBehaviors';

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
  combatant: string;
  battleStyle: string;
  isAlternative: boolean;
  imageFile: string;
  role: CharacterRole;
  summary: string;
  playstyle: string;
  unlockMethod: string | null;
  stats: CharacterStatRatings;
  skills: CharacterSkill[];
  recommendedLevelOrder: string[];
  strengths: string[];
  weaknesses: string[];
  beginnerNotes: string[];
  tags: string[];
  releaseSeason: number;
  source: CharacterSource;
  needsVerification: boolean;
}

const featuredCharacters = [
  {
    id: 'star-and-stripe',
    slug: 'star-and-stripe',
    name: 'Star and Stripe',
    combatant: 'Star and Stripe',
    battleStyle: 'Original',
    isAlternative: false,
    imageFile: 'star-and-stripe.webp',
    role: 'Strike',
    summary: 'A ranged damage dealer built around space control, vacuum setups, and decisive chase tools.',
    playstyle: 'Create a favorable fight with Zero Air, then convert the opening with ranged pressure or Keraunos.',
    unlockMethod: 'Obtained from Rolls Season 16 Release2026-03-25 13:00:00 (JST)',
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
    recommendedLevelOrder: [
      'Zero Air to Lv. 4',
      'Keraunos to Lv. 4',
      'Zero Air to Lv. 9',
      'Diffusion Laser to Lv. 4',
      'Keraunos to Lv. 9',
      'Diffusion Laser to Lv. 9',
    ],
    strengths: ['Strong ranged pressure', 'Reliable setup for coordinated teams', 'Useful chase and repositioning'],
    weaknesses: ['Setup timing takes practice', 'Mistimed mobility can leave her exposed', 'Best value depends on clean follow-ups'],
    beginnerNotes: [
      'Use Zero Air to make enemy movement predictable instead of throwing it out without a follow-up.',
      'Keep one Keraunos charge available when possible so you still have an exit.',
    ],
    tags: ['ranged', 'setup', 'burst', 'teamfight'],
    releaseSeason: 16,
    source: {
      sourceUrl: 'https://ultrarumble.com/character/114',
      sourceName: 'UltraRumble.com',
      sourceNote: 'Role, HP, skill names, and move behavior checked against the public character database. Guide ratings and advice are editorial.',
      lastChecked: '2026-06-19',
    },
    needsVerification: true,
  },
  {
    id: 'all-might',
    slug: 'all-might',
    name: 'All Might',
    combatant: 'All Might',
    battleStyle: 'Original',
    isAlternative: false,
    imageFile: 'all-might.webp',
    role: 'Assault',
    summary: 'A durable all-rounder with ranged pressure, vertical mobility, and tools for disrupting close fights.',
    playstyle: 'Take strong positions early, pressure from mid-range, and use mobility to engage or rescue teammates.',
    unlockMethod: 'Obtained from the Special License. Season 1 Release2023-09-28 13:00:00 (JST)',
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
        id: 'texas-smash',
        slot: 'alpha',
        name: 'Texas Smash',
        summary: 'A ranged punch that sends a shock wave forward and can pressure enemies from the air.',
      },
      {
        id: 'united-states-of-smash',
        slot: 'beta',
        name: 'United States of Smash',
        summary: 'A forward rush that closes distance and hits with a powerful punch.',
      },
      {
        id: 'oklahoma-smash',
        slot: 'gamma',
        name: 'Oklahoma Smash',
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
    recommendedLevelOrder: [
      'Texas Smash to Lv. 4',
      'United States of Smash to Lv. 4',
      'Texas Smash to Lv. 9',
      'Oklahoma Smash to Lv. 4',
      'United States of Smash to Lv. 9',
      'Oklahoma Smash to Lv. 9',
    ],
    strengths: ['Flexible at multiple ranges', 'Excellent vertical mobility', 'Can rescue downed teammates'],
    weaknesses: ['Large silhouette is easy to track', 'Mobility cooldowns are important defensive resources', 'Aggressive dives can separate him from the team'],
    beginnerNotes: [
      'High Jump is valuable even when no enemy is nearby; use it to claim rooftops and scout safely.',
      'Do not spend every movement option entering a fight. Keep a route out.',
    ],
    tags: ['mobility', 'frontline', 'rescue'],
    releaseSeason: 1,
    source: {
      sourceUrl: 'https://ultrarumble.com/character/12',
      sourceName: 'UltraRumble.com',
      sourceNote: 'Role, HP, skill names, and move behavior checked against the public character database. Guide ratings and advice are editorial.',
      lastChecked: '2026-06-19',
    },
    needsVerification: true,
  },
  {
    id: 'hawks',
    slug: 'hawks',
    name: 'Hawks',
    combatant: 'Hawks',
    battleStyle: 'Original',
    isAlternative: false,
    imageFile: 'hawks.webp',
    role: 'Rapid',
    summary: 'A highly mobile scout and skirmisher who pressures from the air and chooses when fights begin.',
    playstyle: 'Use flight and tracking information to isolate targets, poke safely, and rotate before enemies can answer.',
    unlockMethod: 'Purchase with a Ticket Season 7 Release2024-09-25 13:00:00 (JST)',
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
        id: 'fierce-wings-transport',
        slot: 'special',
        name: 'Fierce Wings / Transport',
        summary: 'Carries a teammate during a fast aerial rotation.',
      },
      {
        id: 'fierce-wings-flight',
        slot: 'special',
        name: 'Fierce Wings / Flight',
        summary: 'Enables sustained flight for scouting, pursuit, and disengagement.',
      },
    ],
    recommendedLevelOrder: [
      'Wingbeat to Lv. 4',
      'Wind Cross to Lv. 4',
      'Wingbeat to Lv. 9',
      'Storm Wings to Lv. 4',
      'Wind Cross to Lv. 9',
      'Storm Wings to Lv. 9',
    ],
    strengths: ['Exceptional map mobility', 'Strong scouting and target tracking', 'Can transport a teammate'],
    weaknesses: ['Low HP leaves little room for mistakes', 'Flight management has a high skill ceiling', 'Can drift too far from team support'],
    beginnerNotes: [
      'Mobility is only useful if you know where your team can follow. Check their position before committing.',
      'Use height to gather information, not only to chase damage.',
    ],
    tags: ['airborne', 'scout', 'tracking', 'high-mobility'],
    releaseSeason: 7,
    source: {
      sourceUrl: 'https://ultrarumble.com/character/43',
      sourceName: 'UltraRumble.com',
      sourceNote: 'Role, HP, skill names, and move behavior checked against the public character database. Guide ratings and advice are editorial.',
      lastChecked: '2026-06-19',
    },
    needsVerification: true,
  },
  {
    id: 'mt-lady',
    slug: 'mt-lady',
    name: 'Mt. Lady',
    combatant: 'Mt. Lady',
    battleStyle: 'Original',
    isAlternative: false,
    imageFile: 'mt-lady.webp',
    role: 'Assault',
    summary: 'A straightforward brawler who controls close space and can become enormous for late-fight disruption.',
    playstyle: 'Stay near cover at normal size, punish enemies who enter your range, and save Gigantification for open team fights.',
    unlockMethod: 'Starter Character Season 1 Release2023-09-28 13:00:00 (JST)',
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
    recommendedLevelOrder: [
      'Spike Knuckle to Lv. 4',
      'Caldera Stomp to Lv. 4',
      'Spike Knuckle to Lv. 9',
      'Canyon Cannon to Lv. 4',
      'Caldera Stomp to Lv. 9',
      'Canyon Cannon to Lv. 9',
    ],
    strengths: ['Simple core game plan', 'Strong close-range control', 'Gigantification can reshape an open fight'],
    weaknesses: ['Limited safe pressure at long range', 'Giant form is highly visible', 'Buildings and tight terrain can reduce her special-action value'],
    beginnerNotes: [
      'Fight from the edge of cover so ranged teams cannot focus you for free.',
      'Gigantification is strongest in open space where enemies cannot immediately hide indoors.',
    ],
    tags: ['brawler', 'area-control', 'frontline'],
    releaseSeason: 1,
    source: {
      sourceUrl: 'https://ultrarumble.com/character/100',
      sourceName: 'UltraRumble.com',
      sourceNote: 'Role, HP, skill names, and move behavior checked against the public character database. Guide ratings and advice are editorial.',
      lastChecked: '2026-06-19',
    },
    needsVerification: true,
  },
] satisfies CharacterRecord[];

const featuredIds = new Set(featuredCharacters.map(({ id }) => id));

const roleDefaults: Record<
  CharacterRole,
  Omit<CharacterStatRatings, 'hp'>
> = {
  Assault: { damage: 7, mobility: 5, range: 5, teamUtility: 7, difficulty: 5 },
  Strike: { damage: 8, mobility: 5, range: 6, teamUtility: 4, difficulty: 6 },
  Rapid: { damage: 6, mobility: 9, range: 5, teamUtility: 5, difficulty: 7 },
  Technical: { damage: 6, mobility: 6, range: 6, teamUtility: 7, difficulty: 8 },
  Support: { damage: 5, mobility: 5, range: 6, teamUtility: 9, difficulty: 6 },
};

const roleNotes: Record<CharacterRole, {
  summary: string;
  strengths: string[];
  weaknesses: string[];
  tags: string[];
}> = {
  Assault: {
    summary: 'A durable frontline style built to contest space and absorb pressure.',
    strengths: ['Frontline durability', 'Reliable space control'],
    weaknesses: ['Mobility and range vary by matchup', 'Can be punished when frontline resources are spent carelessly'],
    tags: ['frontline', 'durable'],
  },
  Strike: {
    summary: 'A damage-focused style built to convert openings into direct pressure.',
    strengths: ['Strong damage pressure', 'Clear offensive win condition'],
    weaknesses: ['Defensive options vary by kit', 'Loses value when attacks are forced without a clean opening'],
    tags: ['damage', 'pressure'],
  },
  Rapid: {
    summary: 'A mobility-focused style built for rotations, pursuit, and disengagement.',
    strengths: ['High mobility', 'Strong repositioning potential'],
    weaknesses: ['Often punishing when movement resources are spent', 'Extended fights can expose limited staying power'],
    tags: ['mobility', 'skirmisher'],
  },
  Technical: {
    summary: 'A specialist style whose value depends on timing, setup, and matchup knowledge.',
    strengths: ['Flexible tactical tools', 'High outplay potential'],
    weaknesses: ['Higher learning curve', 'Mistimed setup tools can leave the kit without a clear follow-up'],
    tags: ['setup', 'specialist'],
  },
  Support: {
    summary: 'A team-oriented style built to create safer fights and enable allies.',
    strengths: ['Strong team utility', 'Useful fight control'],
    weaknesses: ['Solo pressure varies by kit', 'Works best when teammates are close enough to use the created opening'],
    tags: ['team-utility', 'support'],
  },
};

type LevelPriority = ['alpha' | 'beta' | 'gamma', 'alpha' | 'beta' | 'gamma', 'alpha' | 'beta' | 'gamma'];

const levelPriorities: Record<string, LevelPriority> = {
  'izuku-midoriya': ['alpha', 'beta', 'gamma'],
  'izuku-midoriya-full-bullet': ['beta', 'alpha', 'gamma'],
  'izuku-midoriya-ofa': ['gamma', 'beta', 'alpha'],
  'katsuki-bakugo': ['alpha', 'beta', 'gamma'],
  'katsuki-bakugo-machine-gun': ['alpha', 'beta', 'gamma'],
  'katsuki-bakugo-cluster': ['alpha', 'beta', 'gamma'],
  'ochaco-uraraka': ['beta', 'alpha', 'gamma'],
  'ochaco-uraraka-zero-satellites': ['beta', 'gamma', 'alpha'],
  'tenya-iida': ['beta', 'alpha', 'gamma'],
  'shoto-todoroki': ['alpha', 'gamma', 'beta'],
  'shoto-todoroki-ice-fang-wind-flame': ['gamma', 'alpha', 'beta'],
  'tsuyu-asui': ['beta', 'alpha', 'gamma'],
  'eijiro-kirishima': ['beta', 'gamma', 'alpha'],
  'eijiro-kirishima-red-drive': ['alpha', 'beta', 'gamma'],
  'momo-yaoyorozu': ['alpha', 'beta', 'gamma'],
  'fumikage-tokoyami': ['alpha', 'gamma', 'beta'],
  'denki-kaminari': ['gamma', 'alpha', 'beta'],
  'denki-kaminari-lightning': ['beta', 'alpha', 'gamma'],
  'neito-monoma': ['gamma', 'alpha', 'beta'],
  'itsuka-kendo': ['alpha', 'beta', 'gamma'],
  'itsuka-kendo-twin-palm-strike': ['beta', 'alpha', 'gamma'],
  'ibara-shiozaki': ['alpha', 'gamma', 'beta'],
  'mirio-togata': ['alpha', 'beta', 'gamma'],
  'mirio-togata-sheer-counter': ['gamma', 'alpha', 'beta'],
  'tamaki-amajiki': ['alpha', 'gamma', 'beta'],
  'nejire-hado': ['beta', 'alpha', 'gamma'],
  'nejire-hado-fairy': ['beta', 'gamma', 'alpha'],
  'hitoshi-shinso': ['gamma', 'alpha', 'beta'],
  'all-might': ['alpha', 'beta', 'gamma'],
  'all-might-gatling': ['alpha', 'gamma', 'beta'],
  'armored-all-might': ['gamma', 'alpha', 'beta'],
  'shota-aizawa': ['alpha', 'gamma', 'beta'],
  'shota-aizawa-flow-runner': ['beta', 'alpha', 'gamma'],
  'present-mic': ['alpha', 'beta', 'gamma'],
  'present-mic-d-j-board': ['beta', 'alpha', 'gamma'],
  cementoss: ['alpha', 'beta', 'gamma'],
  endeavor: ['alpha', 'beta', 'gamma'],
  'endeavor-inferno-fist': ['beta', 'alpha', 'gamma'],
  hawks: ['alpha', 'beta', 'gamma'],
  'hawks-slicing-wind': ['beta', 'alpha', 'gamma'],
  mirko: ['beta', 'alpha', 'gamma'],
  'star-and-stripe': ['beta', 'gamma', 'alpha'],
  'mt-lady': ['alpha', 'beta', 'gamma'],
  'tomura-shigaraki': ['alpha', 'beta', 'gamma'],
  'tomura-shigaraki-catastrophe': ['gamma', 'alpha', 'beta'],
  'tomura-shigaraki-thousand-hand-break': ['alpha', 'beta', 'gamma'],
  'all-for-one': ['alpha', 'gamma', 'beta'],
  'all-for-one-factor-fusion': ['alpha', 'beta', 'gamma'],
  'all-for-one-youth-age': ['alpha', 'beta', 'gamma'],
  dabi: ['alpha', 'gamma', 'beta'],
  'dabi-crazy-torch': ['beta', 'alpha', 'gamma'],
  'himiko-toga': ['beta', 'gamma', 'alpha'],
  'himiko-toga-sting-dance': ['beta', 'alpha', 'gamma'],
  twice: ['beta', 'gamma', 'alpha'],
  'mr-compress': ['alpha', 'gamma', 'beta'],
  kurogiri: ['beta', 'gamma', 'alpha'],
  'lady-nagant': ['alpha', 'gamma', 'beta'],
  overhaul: ['gamma', 'alpha', 'beta'],
  'overhaul-blighted-precipice': ['beta', 'alpha', 'gamma'],
};

function getSkillName(
  skills: Array<[SkillSlot, string]>,
  slot: LevelPriority[number],
) {
  const skill = skills.find(([skillSlot]) => skillSlot === slot);
  if (!skill) {
    throw new Error(`Missing ${slot} skill in roster data`);
  }

  return skill[1];
}

function getRecommendedLevelOrder(
  id: string,
  skills: Array<[SkillSlot, string]>,
) {
  const priority = levelPriorities[id];
  if (!priority) {
    throw new Error(`Missing level-up priority for ${id}`);
  }

  const [primary, secondary, tertiary] = priority.map((slot) => getSkillName(skills, slot));

  return [
    `${primary} to Lv. 4`,
    `${secondary} to Lv. 4`,
    `${primary} to Lv. 9`,
    `${tertiary} to Lv. 4`,
    `${secondary} to Lv. 9`,
    `${tertiary} to Lv. 9`,
  ];
}

function skillId(slot: SkillSlot, name: string) {
  return `${slot}-${name}`
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function getReleaseSeason(name: string, unlockMethod: string | null) {
  const seasonMatch = unlockMethod?.match(/\bSeason\s+(\d+)\b/);
  if (!seasonMatch) {
    throw new Error(`Missing release season in unlock data for ${name}`);
  }

  return Number(seasonMatch[1]);
}

const remainingCharacters = characterRoster
  .filter(({ id }) => !featuredIds.has(id))
  .map((seed): CharacterRecord => {
    const notes = roleNotes[seed.role];
    const isUpcoming = seed.id === 'shota-aizawa-flow-runner';
    const levelPriority = levelPriorities[seed.id];
    const skillBehaviors = characterSkillBehaviors[seed.id];
    if (!levelPriority) {
      throw new Error(`Missing editorial level priority for ${seed.id}`);
    }
    if (!skillBehaviors || skillBehaviors.length !== seed.skills.length) {
      throw new Error(`Missing skill behavior summaries for ${seed.id}`);
    }
    const styleLabel = seed.isAlternative
      ? `${seed.battleStyle} alternate battle style`
      : 'original battle style';

    return {
      id: seed.id,
      slug: seed.slug,
      name: seed.name,
      combatant: seed.combatant,
      battleStyle: seed.battleStyle,
      isAlternative: seed.isAlternative,
      imageFile: seed.imageFile,
      role: seed.role,
      summary: `${isUpcoming ? 'Upcoming: ' : ''}${seed.combatant}'s ${styleLabel}, centered on ${getSkillName(seed.skills, levelPriority[0])} with ${getSkillName(seed.skills, levelPriority[1])} as the supporting upgrade.`,
      playstyle: `${notes.summary} ${getSkillName(seed.skills, levelPriority[0])} ${skillBehaviors[seed.skills.findIndex(([slot]) => slot === levelPriority[0])]?.replace(/^[A-Z]/, (letter) => letter.toLowerCase())} Use ${getSkillName(seed.skills, levelPriority[1])} to support that plan, and preserve movement or defensive resources when committing.`,
      unlockMethod: seed.unlockMethod,
      stats: {
        hp: seed.hp,
        ...roleDefaults[seed.role],
      },
      skills: seed.skills.map(([slot, name], index) => ({
        id: skillId(slot, name),
        slot,
        name,
        summary: skillBehaviors[index]!,
      })),
      recommendedLevelOrder: getRecommendedLevelOrder(seed.id, seed.skills),
      strengths: notes.strengths,
      weaknesses: notes.weaknesses,
      beginnerNotes: [
        `Learn the timing and resource limits of ${seed.skills[0]?.[1] ?? 'the alpha skill'} before committing to long chases.`,
        `Follow the suggested early breakpoints before spending cards on ${getSkillName(seed.skills, levelPriority[2])}, the final upgrade priority.`,
      ],
      tags: [
        ...notes.tags,
        seed.role.toLowerCase(),
        ...(isUpcoming ? ['upcoming'] : []),
        ...(seed.isAlternative ? ['alternative-battle-style'] : ['original-battle-style']),
      ],
      releaseSeason: getReleaseSeason(seed.name, seed.unlockMethod),
      source: {
        sourceUrl: seed.sourceUrl,
        sourceName: 'UltraRumble.com',
        sourceNote: 'Role, HP, unlock note, artwork, skill names, and move behavior checked against the public character database. Ratings, skill priorities, and strategy advice are editorial.',
        lastChecked: '2026-06-19',
      },
      needsVerification: true,
    };
  });

export const characters: CharacterRecord[] = [
  ...featuredCharacters,
  ...remainingCharacters,
].sort((a, b) => {
  const combatantOrder = a.combatant.localeCompare(b.combatant);
  if (combatantOrder !== 0) return combatantOrder;
  if (a.isAlternative !== b.isAlternative) return a.isAlternative ? 1 : -1;
  return a.battleStyle.localeCompare(b.battleStyle);
});
