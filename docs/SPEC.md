# SPEC.md — My Hero Fan Site

## 1. Product Goal
Create a fast, maintainable fan site focused on My Hero Ultra Rumble guides, character information, stats, combos, unlock advice, and beginner-friendly recommendations.

The site should be content-first and SEO-friendly, while supporting selective interactivity such as sortable character tables and filterable guide indexes.

## 2. Target Users
- New players looking for beginner-friendly characters and unlock priorities.
- Returning players checking character skills, combos, and level-up orders.
- Search visitors looking for specific guides such as “best Stars and Stripe combos” or “All Might unlock route.”
- Site maintainer adding patch updates and new guide pages quickly.

## 3. Core Requirements

### Static Content
The site must support:
- Home page
- Character index
- Individual character pages
- Guide index
- Individual guide pages
- Tier-list article page
- Character comparison tool
- Crystal-spending guide
- Unlock guide pages
- Patch/update notes, optional later

### Character Data
Each character should support these fields:

```ts
export type CharacterRole = 'Assault' | 'Strike' | 'Rapid' | 'Technical' | 'Support';

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
  slot: 'alpha' | 'beta' | 'gamma' | 'special';
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
  unlockMethod: string | null;
  stats: CharacterStatRatings;
  skills: CharacterSkill[];
  recommendedLevelOrder: string[];
  tags: string[];
  releaseSeason: number;
  source: {
    sourceUrl: string;
    sourceName: string;
    sourceNote: string;
    lastChecked: string;
  };
  needsVerification: boolean;
}
```

### Guides
Guide pages should support:
- Title
- Description
- Character association, optional
- Tags
- Difficulty
- Last updated date
- Patch reviewed field
- Body content in Markdown/MDX
- Featured state
- Source URLs and verification status

Guide difficulty uses exactly three levels:
- Beginner — green
- Intermediate — yellow
- Expert — red

Guide topic selection should also consider recurring community questions. When Reddit is used to identify demand:
- Cite representative question or discussion threads in `sourceUrls`.
- Treat comments as player experience and editorial input, not authoritative game data.
- Verify factual mechanics against the live game or approved game-data references where practical.
- Avoid exact ranked scoring, reward totals, or banner behavior when the current season has not been independently confirmed.

### Interactive Character Table
The character index should include a sortable/filterable table.

Required filters:
- Role
- Beginner-friendly
- Character Ticket eligibility
- Difficulty
- Tags

Required sorts:
- Name
- HP
- Damage
- Mobility
- Range
- Team utility
- Difficulty

Behavior:
- Sorting must work client-side.
- Filtering must work client-side.
- Sorting direction must be explicit and reversible.
- Active filters must provide a visible result count and reset action.
- Beginner-friendly filtering includes characters with a difficulty rating of 5 or lower.
- Character Ticket filtering includes roster entries whose verified unlock method is “Purchase with a Ticket.”
- The base page must still render useful static content without JavaScript.
- URL query params are optional for v1, recommended for v2.

### Character Comparison Tool
The `/compare` route should provide a focused interactive island for comparing battle styles.

Required behavior:
- Compare two to four unique roster entries.
- Reuse the normalized character-table projection of base character data.
- Display HP plus damage, mobility, range, team utility, and difficulty ratings.
- Distinguish sourced HP values from editorial ratings.
- Highlight the strongest displayed value, treating lower difficulty as easier.
- Persist selected character IDs in the `characters` URL query parameter.
- Link each comparison column to its static character guide.
- Keep the surrounding page static and provide a no-JavaScript path to the character index.

## 4. Pages

### `/`
Purpose: Landing page.
Sections:
- Featured guides
- Popular characters
- Beginner route
- Latest updates
- Link to character index

### `/characters`
Purpose: Roster browser.
Sections:
- Sortable/filterable character table
- Character and alternate-battle-style cards with local artwork
- Role explanations

### `/characters/[slug]`
Purpose: Individual character guide.
Sections:
- Overview
- Strengths/weaknesses
- Stats
- Skill table
- Recommended level order
- Combos
- Matchup/positioning tips
- Related guides

### `/guides`
Purpose: Guide library.
Sections:
- Guide cards with category, difficulty, update date, and verification state

### `/guides/[slug]`
Purpose: Guide article.
Sections:
- Article metadata
- Patch-sensitive warning where needed
- Source trail
- Related guides

### `/tier-list`
Purpose: Opinionated ranking article.
Rules:
- Tier list data must be separate from base character stats.
- Include date/patch reviewed.
- Explain criteria.
- Cite the community reference set and its publication window.
- Rank battle styles independently rather than collapsing alternate styles into one combatant.
- Keep unreleased styles outside the competitive tiers.

## 5. Content Rules
- Keep patch-sensitive claims marked with `lastReviewedPatch`.
- Separate objective data from recommendations.
- Avoid copying copyrighted game text wholesale.
- Use short summaries and original guide writing.
- Attribute official sources where required.

## 6. Technical Requirements
- Astro project with TypeScript.
- Content Collections for guide and character pages, or typed data files plus Markdown pages.
- React only for sortable/filterable interactive widgets.
- Static Astro output deployed from `astro-site/dist` with Cloudflare Workers Static Assets.
- Node.js 22 for local development and Cloudflare builds.
- Canonical production origin fixed to `https://myheroultra.com`.
- Sitemap and robots.txt.
- Open Graph and Twitter share metadata with a local 1200×630 image.
- JSON-LD for the site, guide articles, and breadcrumb trails.
- Security headers and immutable caching for fingerprinted build assets.
- Image intake and optimization rules documented in `docs/IMAGE_POLICY.md`.
- Responsive design.
- Accessible controls and semantic HTML.

### Phase 0 Architecture Decision

The site uses Astro's default static generation mode. The Cloudflare adapter is intentionally omitted because Phase 0 has no on-demand routes, server actions, or runtime bindings. Wrangler publishes `dist` through Workers Static Assets. If a later feature genuinely requires server rendering, that decision must be documented before adding the adapter.

## 7. Non-Goals for v1
- User login
- Comments
- Community submissions
- Database-backed CMS
- Damage calculator with frame-perfect values
- Real-time game API integration

## 8. Current Release Acceptance Criteria
- Home page exists and links to all major sections.
- Character index renders all 59 current roster and alternate-style records.
- Character table sorts by every displayed rating and filters by role, difficulty, style, tag, beginner suitability, and Character Ticket eligibility.
- Character comparison supports two to four unique roster entries with shareable URL state.
- Every roster record has a static detail route, local artwork, source metadata, skill summaries, and a complete level-up order.
- At least 9 sourced guide pages exist, with draft entries excluded from production routes.
- The guide library includes intermediate and expert coverage for movement, coordinated team fights, recovery i-frames, and outnumbered endgames.
- The Season 17 tier list covers every roster record exactly once, with unreleased styles outside competitive tiers.
- Every external asset has a matching source-manifest entry and production pages do not hotlink imagery.
- Build passes with no TypeScript errors.
- Site can deploy with Cloudflare Workers Static Assets.
