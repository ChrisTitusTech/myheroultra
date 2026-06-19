# ROADMAP.md — My Hero Fan Site

## Phase 0 — Project Bootstrap
Goal: Create the Astro foundation.

### Task: Establish the static Astro and Cloudflare Pages baseline

**User story:** As the site maintainer, I can install, validate, preview, and deploy a typed static Astro site through Cloudflare Workers without introducing an Astro server runtime.

**Files affected:**
- `astro-site/package.json`
- `astro-site/astro.config.mjs`
- `astro-site/tsconfig.json`
- `astro-site/eslint.config.js`
- `astro-site/.node-version`
- `astro-site/.env.example`
- `astro-site/wrangler.jsonc`

**Acceptance criteria:**
- Astro 6 (satisfying the Astro 5+ requirement), TypeScript strict mode, and the React integration are installed with a lockfile.
- Astro remains in static output mode; no Cloudflare SSR adapter is added.
- Cloudflare Workers preview and deploy scripts publish `dist` through Static Assets.
- Node 22 is documented for local and Cloudflare builds.
- `npm run build`, `npm run check`, and `npm run lint` succeed.

**Test notes:**
- Run the Phase 0 validation commands from `astro-site/`.
- A real deployment requires Cloudflare authentication and a Pages project.

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

Tasks:
- Create typed character data file.
- Add sample character records.
- Create CharacterCard component.
- Create StatBar component.
- Create RoleBadge component.
- Generate character detail pages.
- Create guide content collection or guide data model.

Acceptance criteria:
- Character data is imported from a central source.
- `/characters/[slug]` generates pages from character data.
- Character pages show stats, role, skills, and level order.

## Phase 2 — Interactive Character Browser
Goal: Add sortable and filterable roster UI.

Tasks:
- Add `CharacterTable.tsx` React component.
- Support sorting by name, HP, damage, mobility, range, defense, difficulty, beginner rating.
- Support filtering by role.
- Add beginner-friendly toggle.
- Add mobile-friendly card/table layout.
- Add no-results state.

Acceptance criteria:
- Sorting works without page reload.
- Filtering works without page reload.
- Static page remains useful before hydration.
- Controls are keyboard accessible.

## Phase 3 — Guide System
Goal: Publish useful player guides.

Initial guide targets:
- Best crystal spending guide.
- Beginner gold ticket unlock guide.
- Stars and Stripe level-up and combo guide.
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

## Phase 4 — SEO and Polish
Goal: Make the site discoverable and professional.

Tasks:
- Add sitemap.
- Add robots.txt.
- Add Open Graph metadata.
- Add canonical URLs.
- Add image optimization policy.
- Add JSON-LD where appropriate.
- Improve mobile layout.

Acceptance criteria:
- Lighthouse target: 90+ in Performance, Accessibility, Best Practices, SEO.
- Every major page has title and description.
- Images include alt text.

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

## Phase 6 — Optional Backend/CMS
Goal: Add managed content only if manual Markdown/data files become too limiting.

Options:
- Decap CMS with Git-backed content.
- Cloudflare D1 for structured data.
- Cloudflare KV for cached metadata.
- Workers API for community submissions.

Do not start this phase until static content workflow becomes a bottleneck.
