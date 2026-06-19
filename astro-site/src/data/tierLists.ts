import { characters } from './characters';
import type { CharacterRecord } from './characters';

export type TierGrade = 'S' | 'A' | 'B' | 'C' | 'D' | 'Watch';
export type TierSourceKind = 'Reddit' | 'YouTube';

export interface TierListSource {
  id: string;
  kind: TierSourceKind;
  title: string;
  creator: string;
  url: string;
  publishedAt: string;
  sourceNote: string;
}

export interface TierRow {
  grade: TierGrade;
  label: string;
  summary: string;
  characterIds: string[];
}

export interface ResolvedTierRow extends Omit<TierRow, 'characterIds'> {
  characters: CharacterRecord[];
}

export const season17Sources: TierListSource[] = [
  {
    id: 'reddit-s17-tierlist',
    kind: 'Reddit',
    title: 'S17 TierList',
    creator: 'u/Comfortable_Cut_7334',
    url: 'https://www.reddit.com/r/MyHeroUltraRumble/comments/1tu5q43/s17_tierlist/',
    publishedAt: '2026-06-01',
    sourceNote:
      'Ordered community tier list with an extended debate around Strike All For One, Nagant, OFA Deku, and Fairy Nejire.',
  },
  {
    id: 'reddit-s17-one-week',
    kind: 'Reddit',
    title: 'Season 17 (1 week in tierlist)',
    creator: 'u/TheBubbanator',
    url: 'https://www.reddit.com/r/MyHeroUltraRumble/comments/1tvr72d/season_17_1_week_in_tierlist/',
    publishedAt: '2026-06-03',
    sourceNote:
      'Early-season list with written notes on Kendo buffs, Kurogiri nerfs, grab changes, and Mirko uncertainty.',
  },
  {
    id: 'youtube-wtsb-season-17',
    kind: 'YouTube',
    title: 'EVERY Character Ranked in My Hero Ultra Rumble — Season 17 Tier List',
    creator: 'WTSB — WhoTookSquidBoy',
    url: 'https://www.youtube.com/watch?v=1wSBpOZyw-c',
    publishedAt: '2026-06-04',
    sourceNote:
      'Full-roster video ranking used as a contrasting viewpoint, especially for Rapid Deku and lower-tier placements.',
  },
  {
    id: 'reddit-another-s17-list',
    kind: 'Reddit',
    title: 'Another day, another season 17 tierlist',
    creator: 'u/YakMoist1445',
    url: 'https://www.reddit.com/r/MyHeroUltraRumble/comments/1twr31w/another_day_another_season_17_tierlist/',
    publishedAt: '2026-06-04',
    sourceNote:
      'Player discussion emphasizing Tech Shigaraki tuning pressure, Assault Ochaco, and the divided view of Strike Bakugo.',
  },
  {
    id: 'reddit-midseason-s17',
    kind: 'Reddit',
    title: 'This is my mid season tier list for season 17!',
    creator: 'u/Fishyhans',
    url: 'https://www.reddit.com/r/MyHeroUltraRumble/comments/1u5aik8/this_is_my_mid_season_tier_list_for_season_17/',
    publishedAt: '2026-06-14',
    sourceNote:
      'Mid-season ranking and comment debate reinforcing Nagant, Aizawa, Rapid Mirio, and Armored All Might as high-impact picks.',
  },
  {
    id: 'youtube-vibin-hat-season-17',
    kind: 'YouTube',
    title: 'Season 17 Tier List | My Hero Ultra Rumble',
    creator: 'Vibin Hat',
    url: 'https://www.youtube.com/watch?v=vC4doQzTcRg',
    publishedAt: '2026-06-14',
    sourceNote:
      'Long-form Season 17 ranking used to compare creator reasoning against the shorter Reddit snapshots.',
  },
];

const tierRows: TierRow[] = [
  {
    grade: 'S',
    label: 'Meta setters',
    summary:
      'The styles most likely to shape how a ranked lobby moves, focuses targets, or builds around late-game team fights.',
    characterIds: [
      'lady-nagant',
      'izuku-midoriya-ofa',
      'nejire-hado-fairy',
      'tomura-shigaraki-thousand-hand-break',
      'mirio-togata-sheer-counter',
      'shota-aizawa',
      'eijiro-kirishima-red-drive',
    ],
  },
  {
    grade: 'A',
    label: 'High-impact contenders',
    summary:
      'Excellent ranked choices with strong win conditions, but slightly more matchup, execution, or team-dependence than S tier.',
    characterIds: [
      'all-might-gatling',
      'all-for-one',
      'all-for-one-youth-age',
      'all-for-one-factor-fusion',
      'fumikage-tokoyami',
      'tsuyu-asui',
      'itsuka-kendo',
      'ochaco-uraraka-zero-satellites',
      'mirio-togata',
      'armored-all-might',
      'overhaul-blighted-precipice',
      'katsuki-bakugo-cluster',
      'katsuki-bakugo',
      'ochaco-uraraka',
      'mirko',
      'shoto-todoroki-ice-fang-wind-flame',
      'mr-compress',
      'cementoss',
    ],
  },
  {
    grade: 'B',
    label: 'Strong with a plan',
    summary:
      'Capable of winning consistently when their player protects the kit’s core condition and avoids unfavorable tempo.',
    characterIds: [
      'all-might',
      'star-and-stripe',
      'hawks',
      'hawks-slicing-wind',
      'overhaul',
      'nejire-hado',
      'kurogiri',
      'momo-yaoyorozu',
      'hitoshi-shinso',
      'tamaki-amajiki',
      'neito-monoma',
      'himiko-toga-sting-dance',
      'himiko-toga',
      'itsuka-kendo-twin-palm-strike',
      'denki-kaminari',
      'denki-kaminari-lightning',
      'tomura-shigaraki-catastrophe',
      'izuku-midoriya-full-bullet',
      'ibara-shiozaki',
      'present-mic',
      'dabi',
    ],
  },
  {
    grade: 'C',
    label: 'Specialists and uphill picks',
    summary:
      'Playable and dangerous in practiced hands, but the current mobility and burst environment exposes clearer weaknesses.',
    characterIds: [
      'izuku-midoriya',
      'katsuki-bakugo-machine-gun',
      'tenya-iida',
      'shoto-todoroki',
      'eijiro-kirishima',
      'present-mic-d-j-board',
      'endeavor',
      'mt-lady',
      'tomura-shigaraki',
      'dabi-crazy-torch',
      'twice',
    ],
  },
  {
    grade: 'D',
    label: 'Needs help',
    summary:
      'The clearest Season 17 struggle: a kit whose current risk, consistency, and escape profile lag behind the field.',
    characterIds: ['endeavor-inferno-fist'],
  },
  {
    grade: 'Watch',
    label: 'Not ranked yet',
    summary:
      'Kept off the competitive board until the style is released and has meaningful live-match evidence.',
    characterIds: ['shota-aizawa-flow-runner'],
  },
];

const characterById = new Map(characters.map((character) => [character.id, character]));
const rankedIds = tierRows.flatMap((tier) => tier.characterIds);
const duplicateIds = rankedIds.filter((id, index) => rankedIds.indexOf(id) !== index);
const missingIds = characters
  .map((character) => character.id)
  .filter((id) => !rankedIds.includes(id));

if (duplicateIds.length > 0 || missingIds.length > 0) {
  throw new Error(
    `Season 17 tier list must cover every character once. Duplicates: ${duplicateIds.join(', ') || 'none'}. Missing: ${missingIds.join(', ') || 'none'}.`,
  );
}

export const season17TierRows: ResolvedTierRow[] = tierRows.map(
  ({ characterIds, ...tier }) => ({
    ...tier,
    characters: characterIds.map((id) => {
      const character = characterById.get(id);

      if (!character) {
        throw new Error(`Unknown Season 17 tier-list character: ${id}`);
      }

      return character;
    }),
  }),
);

export const season17TierList = {
  season: 17,
  title: 'Season 17 Ranked Trios Tier List',
  reviewedAt: '2026-06-19',
  sourceWindowStart: '2026-05-27',
  format: 'Ranked trios',
  platformNote: 'Cross-platform community synthesis; aim and lobby differences can move individual styles.',
  methodology:
    'Editorial synthesis of recent creator rankings and community debate. Placements weigh fight control, mobility, burst consistency, team utility, and how reliably a style converts an advantage in ranked trios.',
  caveat:
    'This is not a vote average or official ranking. Tuning builds, player mastery, platform, and team composition can move a style by a full tier.',
  controversies: [
    {
      title: 'Strike All For One is the fault line',
      body: 'Recent lists range from top-three praise to a firm B-tier ceiling. We split the difference at A because the ceiling is real, but the community does not agree on how consistently he reaches it.',
    },
    {
      title: 'Nagant still commands respect',
      body: 'Even lists that place her lower draw immediate pushback. Her slower opening was noted, but her maxed pressure and late-game control repeatedly support an S placement.',
    },
    {
      title: 'Kendo is the Season 17 riser',
      body: 'Assault Kendo received the clearest upward re-evaluation after her buffs. She lands in A here: meaningfully improved, but not yet supported as a consistent meta setter. Twin Palm Strike remains in B until its output translates more reliably across lobbies.',
    },
    {
      title: 'Mirko remains provisional',
      body: 'The new Season 17 character has obvious chase and disruption value, but the source set repeatedly calls for more time. Her A placement is the least settled on the board.',
    },
  ],
} as const;
