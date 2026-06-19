import { characterRoster } from './characterRoster';

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
    unlockMethod: null,
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
    combatant: 'All Might',
    battleStyle: 'Original',
    isAlternative: false,
    imageFile: 'all-might.webp',
    role: 'Assault',
    summary: 'A durable all-rounder with ranged pressure, vertical mobility, and tools for disrupting close fights.',
    playstyle: 'Take strong positions early, pressure from mid-range, and use mobility to engage or rescue teammates.',
    unlockMethod: null,
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
    tags: ['mobility', 'frontline', 'rescue'],
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
    combatant: 'Hawks',
    battleStyle: 'Original',
    isAlternative: false,
    imageFile: 'hawks.webp',
    role: 'Rapid',
    summary: 'A highly mobile scout and skirmisher who pressures from the air and chooses when fights begin.',
    playstyle: 'Use flight and tracking information to isolate targets, poke safely, and rotate before enemies can answer.',
    unlockMethod: null,
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
    combatant: 'Mt. Lady',
    battleStyle: 'Original',
    isAlternative: false,
    imageFile: 'mt-lady.webp',
    role: 'Assault',
    summary: 'A straightforward brawler who controls close space and can become enormous for late-fight disruption.',
    playstyle: 'Stay near cover at normal size, punish enemies who enter your range, and save Gigantification for open team fights.',
    unlockMethod: null,
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
    tags: ['brawler', 'area-control', 'frontline'],
    source: {
      sourceUrl: 'https://ultrarumble.com/character/100',
      sourceName: 'UltraRumble.com',
      sourceNote: 'Role, HP, and skill names checked against the public character database. Guide ratings and advice are editorial.',
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
    weaknesses: ['Mobility and range vary by matchup', 'Detailed matchup notes need editorial review'],
    tags: ['frontline', 'durable'],
  },
  Strike: {
    summary: 'A damage-focused style built to convert openings into direct pressure.',
    strengths: ['Strong damage pressure', 'Clear offensive win condition'],
    weaknesses: ['Defensive options vary by kit', 'Detailed matchup notes need editorial review'],
    tags: ['damage', 'pressure'],
  },
  Rapid: {
    summary: 'A mobility-focused style built for rotations, pursuit, and disengagement.',
    strengths: ['High mobility', 'Strong repositioning potential'],
    weaknesses: ['Often punishing when movement resources are spent', 'Detailed matchup notes need editorial review'],
    tags: ['mobility', 'skirmisher'],
  },
  Technical: {
    summary: 'A specialist style whose value depends on timing, setup, and matchup knowledge.',
    strengths: ['Flexible tactical tools', 'High outplay potential'],
    weaknesses: ['Higher learning curve', 'Detailed matchup notes need editorial review'],
    tags: ['setup', 'specialist'],
  },
  Support: {
    summary: 'A team-oriented style built to create safer fights and enable allies.',
    strengths: ['Strong team utility', 'Useful fight control'],
    weaknesses: ['Solo pressure varies by kit', 'Detailed matchup notes need editorial review'],
    tags: ['team-utility', 'support'],
  },
};

function skillId(slot: SkillSlot, name: string) {
  return `${slot}-${name}`
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

const remainingCharacters = characterRoster
  .filter(({ id }) => !featuredIds.has(id))
  .map((seed): CharacterRecord => {
    const notes = roleNotes[seed.role];
    const isUpcoming = seed.id === 'shota-aizawa-flow-runner';
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
      summary: `${isUpcoming ? 'Upcoming: ' : ''}${seed.combatant}'s ${styleLabel}. ${notes.summary}`,
      playstyle: `${notes.summary} This roster entry has verified role, HP, and skill names; a full editorial strategy pass is still pending.`,
      unlockMethod: seed.unlockMethod,
      stats: {
        hp: seed.hp,
        ...roleDefaults[seed.role],
      },
      skills: seed.skills.map(([slot, name]) => ({
        id: skillId(slot, name),
        slot,
        name,
        summary: `${name} is this style's ${slot === 'special' ? 'special action' : `${slot} skill`}. Behavior details need an editorial verification pass.`,
      })),
      recommendedLevelOrder: ['Level-up order needs editorial review'],
      strengths: notes.strengths,
      weaknesses: notes.weaknesses,
      beginnerNotes: [
        `Learn the timing and resource limits of ${seed.skills[0]?.[1] ?? 'the alpha skill'} before committing to long chases.`,
        'Treat the displayed ratings as a provisional role baseline until this guide receives a dedicated editorial pass.',
      ],
      tags: [
        ...notes.tags,
        seed.role.toLowerCase(),
        ...(isUpcoming ? ['upcoming'] : []),
        ...(seed.isAlternative ? ['alternative-battle-style'] : ['original-battle-style']),
      ],
      source: {
        sourceUrl: seed.sourceUrl,
        sourceName: 'UltraRumble.com',
        sourceNote: 'Role, HP, unlock note, artwork, and skill names checked against the public character database. Ratings and general advice are provisional editorial baselines.',
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
