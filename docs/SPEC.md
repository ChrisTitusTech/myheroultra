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

### Interactive Character Table
The character index should include a sortable/filterable table.

Required filters:
- Role
- Beginner-friendly
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
- The base page must still render useful static content without JavaScript.
- URL query params are optional for v1, recommended for v2.

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

## 8. Acceptance Criteria for MVP
- Home page exists and links to all major sections.
- Character index renders the four required sample characters.
- Character table sorts by damage, HP, mobility, difficulty, and name.
- Character table filters by role.
- At least 2 full character guide pages exist.
- At least 3 guide pages exist.
- Build passes with no TypeScript errors.
- Site can deploy with Cloudflare Workers Static Assets.
