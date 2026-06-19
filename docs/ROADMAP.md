# ROADMAP.md — My Hero Fan Site

## Phase 0 — Project Bootstrap
Goal: Create the Astro foundation.

### Task: Establish the static Astro and Cloudflare Workers baseline

**User story:** As the site maintainer, I can install, validate, preview, and deploy a typed static Astro site through Cloudflare Workers without introducing an Astro server runtime.

**Files affected:**
- `astro-site/package.json`
- `astro-site/astro.config.mjs`
- `astro-site/tsconfig.json`
- `astro-site/eslint.config.js`
- `astro-site/.node-version`
- `astro-site/wrangler.jsonc`

**Acceptance criteria:**
- Astro 6 (satisfying the Astro 5+ requirement), TypeScript strict mode, and the React integration are installed with a lockfile.
- Astro remains in static output mode; no Cloudflare SSR adapter is added.
- Cloudflare Workers preview and deploy scripts publish `dist` through Static Assets.
- Node 22 is documented for local and Cloudflare builds.
- `npm run build`, `npm run check`, and `npm run lint` succeed.

**Test notes:**
- Run the Phase 0 validation commands from `astro-site/`.
- A real deployment requires Cloudflare authentication and a Worker project.

### Task: Create the shared shell and required source structure

**User story:** As a visitor, I see a responsive, dark-first site shell with useful navigation, metadata, and a clear unofficial-site disclaimer.

**Files affected:**
- `astro-site/src/layouts/BaseLayout.astro`
- `astro-site/src/styles/global.css`
- `astro-site/src/assets/`
- `astro-site/src/data/assetSources.ts`

**Acceptance criteria:**
- The home, character index, guide index, and tier-list routes render through the shared layout.
- Each page receives a title, description, and canonical URL.
- The footer contains the required affiliation disclaimer.
- Required asset directories and a typed asset-source manifest exist.
- No external production images are hotlinked.

**Test notes:**
- Inspect generated HTML for title, description, canonical link, navigation, and disclaimer.
- Confirm mobile navigation wraps without horizontal page overflow.

**Status:** Complete as of June 19, 2026.

**Implementation note:** Phase 0 established a static Astro 6 build, Node 22.12 baseline, React island support, Cloudflare Workers Static Assets preview/deploy scripts, canonical metadata for `myheroultra.com`, the required asset-source structure, and the unofficial fan-site disclaimer. Server rendering remains out of scope.

## Phase 1 — Data Model and Static Pages
Goal: Establish reusable character and guide content structure.

### Task: Normalize character and skill records

**User story:** As a maintainer, I can update factual game data separately from editorial guide ratings and advice.

**Files affected:**
- `astro-site/src/data/characters.ts`
- `astro-site/src/components/CharacterTable.tsx`

**Acceptance criteria:**
- The sample roster includes Star and Stripe, All Might, Hawks, and Mt. Lady.
- Character IDs, roles, skill slots, ratings, sources, and verification status are type-safe.
- Exact role, HP, and skill-name claims include source metadata and a `lastChecked` date.
- Editorial ratings and recommendations are identified as editorial.

### Task: Generate reusable static character guides

**User story:** As a player, I can open a polished guide for every sample character without requiring client-side JavaScript.

**Files affected:**
- `astro-site/src/layouts/CharacterLayout.astro`
- `astro-site/src/components/CharacterHero.astro`
- `astro-site/src/components/SkillGrid.astro`
- `astro-site/src/components/SourceBadge.astro`
- `astro-site/src/pages/characters/[slug].astro`

**Acceptance criteria:**
- `/characters/[slug]` generates from the shared typed data.
- Pages show role, HP, editorial ratings, skills, level order, strengths, weaknesses, beginner notes, and source status.
- Character detail pages remain fully static.
- Desktop and mobile layouts do not overflow.

### Task: Establish the guide content schema

**User story:** As a writer, I can add guide Markdown with validated metadata before it is published.

**Files affected:**
- `astro-site/src/content.config.ts`
- `astro-site/src/content/guides/`

**Acceptance criteria:**
- Guide entries validate title, description, category, tags, difficulty, update date, patch status, source URLs, verification status, and draft status.
- A draft schema example validates during the build but is not published.

**Status:** Complete as of June 19, 2026.

**Implementation note:** Phase 1 added four sourced sample character records, reusable static guide components, responsive character detail pages, an exercised Astro Content Collection schema for guides, and a compatibility redirect for the earlier pluralized Star and Stripe slug.

## Phase 2 — Interactive Character Browser
Goal: Add sortable and filterable roster UI.

Tasks:
- Add `CharacterTable.tsx` React component.
- Support sorting by name, HP, damage, mobility, range, team utility, and difficulty.
- Support ascending and descending sort directions.
- Support filtering by role, difficulty band, and playstyle tag.
- Add beginner-friendly toggle.
- Add mobile-friendly card/table layout.
- Add no-results state.
- Add result count and reset controls.

Acceptance criteria:
- Sorting works without page reload.
- Filtering works without page reload.
- Static page remains useful before hydration.
- Controls are keyboard accessible.

**Status:** Complete as of June 19, 2026.

**Implementation note:** Phase 2 completed the React roster island with explicit sort direction, role/difficulty/tag filters, a beginner-friendly filter defined as difficulty 5 or lower, a Gold Ticket filter derived from verified “Purchase with a Ticket” unlock data, live result counts, reset actions, an actionable no-results state, and a mobile card presentation that preserves the semantic table on larger screens. The redundant numeric beginner rating was removed in favor of difficulty plus practical beginner notes.

## Phase 3 — Guide System
Goal: Publish useful player guides.

Initial guide targets:
- Best crystal spending guide.
- Beginner Character Ticket guide that clarifies Gold is a separate resource.
- Star and Stripe level-up and combo guide.
- All Might unlock route.
- License leveling guide.

Tasks:
- Create GuideCard component.
- Add `/guides` listing page.
- Add `/guides/[slug]` route.
- Add guide frontmatter schema.
- Add tags and related guides.

Acceptance criteria:
- At least 5 guide pages exist.
- Guide listing links correctly.
- Metadata is populated for every guide.

**Status:** Complete as of June 19, 2026.

**Implementation note:** Phase 3 added five sourced Markdown guides, reusable guide cards and article layouts, static `/guides/[slug]` generation, featured guides on the home page, source and patch-sensitivity displays, tag-based related-guide selection, and character-to-guide links for Star and Stripe and All Might.

## Phase 4 — SEO and Polish
Goal: Make the site discoverable and professional.

Tasks:
- Maintain the sitemap and robots.txt added during the best-practices cleanup.
- Maintain Open Graph and canonical metadata in the shared layout.
- Add image optimization policy.
- Add JSON-LD where appropriate.
- Improve mobile layout.

Acceptance criteria:
- Lighthouse target: 90+ in Performance, Accessibility, Best Practices, SEO.
- Every major page has title and description.
- Images include alt text.

**Status:** Complete as of June 19, 2026.

**Implementation note:** Phase 4 added a local 1200×630 social card, Open Graph and Twitter image metadata, Article/WebPage/Breadcrumb JSON-LD, article publication dates, Cloudflare security and cache headers, an image optimization policy, explicit static-asset HTML handling, and a recorded Lighthouse audit. The home page, character browser, and representative guide each scored 100 in Performance, Accessibility, Best Practices, and SEO.

## Phase 5 — Advanced Tools
Goal: Add richer fan-site utilities after content foundation is stable.

Potential features:
- Damage/stat comparison tool.
- Interactive tier list viewer.
- Team composition planner.
- Character matchup notes.
- Patch history per character.
- Filterable combo database.
- URL query params for filters.

Acceptance criteria:
- Advanced tools do not bloat static guide pages.
- Interactive components are isolated islands.
- Shared data remains normalized.

### Task: Publish the Season 17 editorial tier list

**User story:** As a ranked player, I can scan a complete Season 17 battle-style ranking, understand the criteria, and open the recent community sources that informed it.

**Files affected:**
- `astro-site/src/data/tierLists.ts`
- `astro-site/src/pages/tier-list.astro`
- `astro-site/src/components/TierCharacterCard.astro`
- `astro-site/src/components/CharacterArtwork.astro`
- `astro-site/src/styles/global.css`
- `docs/SPEC.md`

**Acceptance criteria:**
- Every roster entry appears exactly once, with unreleased styles placed in an unranked watch section.
- The ranking is stored separately from factual character data.
- The page explains format, criteria, caveats, and contested placements.
- Reddit and YouTube sources are dated on or after May 27, 2026.
- Character art remains local and links to the corresponding static guide.
- The page is fully static, responsive, and introduces no client hydration.

**Test notes:**
- Run `npm run build`, `npm run check`, and `npm run lint`.
- Smoke-test `/tier-list` at desktop and mobile widths.

**Status:** Complete as of June 19, 2026.

**Implementation note:** Replaced the placeholder route with a complete 59-style Season 17 ranked-trios board, a typed and date-bounded Reddit/YouTube source set, methodology and caveat panels, live controversy notes, local character artwork, a separate watch section for the unreleased Flow Runner style, and a dedicated condensed tier-board social preview for shared links.

## Phase 6 — Optional Backend/CMS
Goal: Add managed content only if manual Markdown/data files become too limiting.

Options:
- Decap CMS with Git-backed content.
- Cloudflare D1 for structured data.
- Cloudflare KV for cached metadata.
- Workers API for community submissions.

Do not start this phase until static content workflow becomes a bottleneck.

## Maintenance — Astro Best-Practices Cleanup

**Status:** Complete as of June 19, 2026.

**Implementation note:** Centralized site metadata, added sitemap and robots generation, expanded Open Graph metadata, added 404 no-index handling and active navigation state, improved keyboard accessibility, standardized index routes, passed character data to static paths as typed props, and reduced the React island payload to table-only fields.

## Maintenance — Full Roster and Battle Styles

**Status:** Complete as of June 19, 2026.

**Implementation note:** Expanded the character browser from four samples to 59 roster records: 38 original entries and 21 alternate battle styles, including the source-listed upcoming Flow Runner style. Each record has a static route, sourced role/HP/skill names, battle-style metadata, locally optimized WebP artwork, an asset-source manifest entry, and an explicit verification state. The browser now filters originals and alternatives separately.

## Maintenance — Vibrant Visual Refresh

**Status:** Complete as of June 19, 2026.

**Implementation note:** Reworked the site into a brighter battle-guide identity using an original yellow/cyan/magenta palette, angular hazard accents, stronger navigation and cards, a responsive official-art home banner, gameplay showcase panels, and locally optimized source-tracked artwork. The composition remains distinct from both approved reference sites and retains the visible unofficial-site disclaimer.

## Maintenance — Season Provenance Tags

**Status:** Complete as of June 19, 2026.

**Implementation note:** Guide content retains typed `seasonCreated` provenance metadata. Character records use typed `releaseSeason` metadata derived from sourced release information, so roster and character-page badges show the season each character or alternate battle style debuted.

## Maintenance — Reddit Question Guide Expansion

**Task title:** Publish guides for recurring community questions

**User story:** As a new or solo player, I can find direct answers to the questions that repeatedly appear in the My Hero Ultra Rumble subreddit without piecing together old comment threads.

**Files affected:**
- `astro-site/src/content/guides/beginner-match-survival-guide.md`
- `astro-site/src/content/guides/revive-cards-team-recovery-guide.md`
- `astro-site/src/content/guides/roll-points-pity-guide.md`
- `astro-site/src/content/guides/solo-queue-ranked-guide.md`
- `docs/ROADMAP.md`
- `docs/SPEC.md`

**Acceptance criteria:**
- The guide library includes dedicated answers for beginner match flow, skill cards, revives, banner pity, and solo-queue ranked play.
- Each guide cites the Reddit threads that demonstrate recurring demand.
- Patch-sensitive mechanics and ranked scoring avoid unsupported exact claims and remain marked for verification.
- New pages use the existing static Content Collection and introduce no hydration.
- Build, Astro check, and lint succeed.

**Test notes:**
- Run `npm run build`, `npm run check`, and `npm run lint` from `astro-site/`.
- Confirm each new guide route is generated and included in the sitemap.

**Status:** Complete as of June 19, 2026.

**Implementation note:** Added four static, original-language guides based on recurring subreddit questions. The expansion covers match fundamentals and colored cards, team recovery, Roll Point pity planning, and solo-queue ranked decision-making, with Reddit demand sources and patch-sensitivity warnings attached to each article.

## Maintenance — Compact Layout Pass

**Status:** Complete as of June 19, 2026.

**Implementation note:** Tightened the shared layout rhythm across navigation, heroes, cards, tables, character guides, articles, tier-list sections, and mobile views. Reduced oversized minimum heights and vertical gaps while preserving readable type, touch-friendly controls, responsive stacking, and the existing visual identity.

## Maintenance — Full Roster Editorial Skill Pass

**Status:** Complete as of June 19, 2026.

**Implementation note:** Added an explicit level-up priority for every original character and alternate battle style, expanded each recommendation from early Lv. 4 breakpoints through the final Lv. 9 skill, replaced generated editorial placeholders with priority-aware skill guidance, and corrected the featured All Might and Hawks skill labels against the normalized roster data. The unreleased Flow Runner recommendation remains patch-sensitive through the existing verification badge.

## Maintenance — Published Content Quality Audit

**Status:** Complete as of June 19, 2026.

**Implementation note:** Replaced generic upgrade-priority text in the full roster with concise, source-checked explanations of what every Quirk Skill and Special Action does. Character summaries and playstyle introductions now name the style’s actual core tools, while the All Might unlock guide and Star and Stripe guide were synchronized with the current character records and site-wide level recommendations.
