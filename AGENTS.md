# AGENTS.md — My Hero Ultra Rumble Astro Fan Site Project

## Mission
Build a fast, SEO-friendly Astro fan site for My Hero Ultra Rumble content. The site should publish character guides, combo guides, stat tables, tier-list articles, banner/unlock guides, patch/update summaries, and beginner resources. Use Astro for static content and small client-side islands only where interactivity is needed.

The final site should feel sleek, modern, and gaming-focused: clean layouts, strong cards, polished stat displays, responsive tables, sharp typography, and fast page loads. Do not clone the official My Hero Ultra Rumble, Bandai Namco, or ultrarumble.com layouts. Use them only as source references for game data and allowed assets.

## Approved Reference and Asset Sources
Use these sites as the primary public references for game information and visual assets:

- https://ultrarumble.com/
- https://en.bandainamcoent.eu/my-hero-academia/my-hero-ultra-rumble

### Source Use Rules
- Treat these sources as references for character names, roles, skill names, official descriptions, images, announcements, and game-related metadata.
- Store the origin of imported or referenced assets in a source manifest.
- Do not hotlink images from external sites in production pages. Download approved assets into the project and serve them locally through Astro's asset pipeline.
- Do not bulk scrape aggressively. Fetch only the assets/data needed for the current task.
- Do not bypass access controls, rate limits, paywalls, or anti-bot protections.
- Do not copy long blocks of official text. Summarize or rewrite descriptions in original guide language unless the text is a short proper noun, skill name, role name, or official title.
- Do not use copyrighted logos, key art, or official images in a way that implies the site is official, endorsed, or affiliated.
- Include a visible disclaimer in the footer: this is an unofficial fan site and is not affiliated with Bandai Namco, Byking, Shueisha, Bones, or the My Hero Academia rights holders.

### Asset Storage Rules
Create and maintain this structure:

```text
src/assets/
  characters/
  skills/
  banners/
  ui/

src/data/
  assetSources.ts
```

Every external asset added to the repo should have a corresponding entry in `src/data/assetSources.ts`:

```ts
export const assetSources = [
  {
    id: "stars-and-stripe-portrait",
    file: "/src/assets/characters/stars-and-stripe.webp",
    sourceUrl: "https://ultrarumble.com/",
    sourceName: "UltraRumble.com",
    assetType: "character-image",
    lastChecked: "YYYY-MM-DD",
    usageNote: "Unofficial fan guide reference asset",
  },
];
```

Prefer optimized `.webp` or `.avif` files where practical. Keep original filenames descriptive and slug-safe.

## Visual Design Direction
Build a sleek, modern game-guide interface rather than a generic blog.

Prioritize:
- Dark-first responsive design with strong contrast.
- Modern card layouts for characters, guides, and skills.
- Character detail pages with hero sections, stat panels, skill cards, combo boxes, level-up order, strengths/weaknesses, and beginner notes.
- Sortable/filterable character tables with clean controls.
- Role badges, stat bars, guide tags, and difficulty indicators.
- Fast mobile usability.
- Clear navigation for Characters, Guides, Tier Lists, Combos, Unlocks, and Resources.

Avoid:
- Copying official site layouts or CSS.
- Overusing animation.
- Large UI libraries before the MVP is complete.
- Visual clutter that makes guides harder to read.
- Hydrating pages that do not need interactivity.

## Primary Stack
- Astro 5+
- TypeScript
- MDX or Astro Content Collections
- React islands only for sortable/filterable UI
- Cloudflare Pages deployment target
- Optional future backend: Cloudflare D1 / Workers / KV

## Build Priorities
This project is an Astro-first content website, not a full React application.

Prioritize:
1. Fast static pages
2. Clean content/data structure
3. SEO-friendly character and guide pages
4. Minimal JavaScript
5. Type-safe character, skill, guide, and asset-source data
6. Reusable Astro components
7. React only for interactive islands such as sorting, filtering, calculators, and tier tools
8. Sleek modern gaming UI without copying official designs

Avoid:
- Converting the entire site to React
- Adding a backend unless explicitly requested
- Adding authentication, accounts, comments, or user submissions in the first build
- Using large UI frameworks before the base site is complete
- Hardcoding character stats directly into page components
- Mixing data, layout, and styling in the same file when it can be avoided

## MVP Scope
The first working version should include:

- Home page
- Character index page
- Individual character detail page
- Guide index page
- At least 3 sample guide pages
- Sortable/filterable character table
- Example character data for Stars and Stripe, All Might, Hawks, and one beginner-friendly character
- Asset source manifest
- Footer disclaimer
- Basic responsive sleek/dark styling
- Build passing successfully

Do not start advanced features until the MVP builds cleanly.

## Data Accuracy Rules
Character stats, skill names, damage values, cooldowns, HP, roles, unlock information, banners, and patch-sensitive details should be stored in typed data files or Astro Content Collections.

If exact values are unknown or likely to change, mark them clearly with:

- `needsVerification: true`
- `sourceUrl`
- `sourceNote`
- `lastChecked`

Do not invent exact damage numbers, HP values, cooldowns, patch changes, or banner dates unless they are present in project data or explicitly provided by the user. Prefer placeholders over fabricated values.

## Content Model
Use Astro Content Collections or typed TypeScript data for:

- Characters
- Skills
- Combos
- Guides
- Patch notes
- Tier lists
- Unlock methods
- Currency/spending guides
- Asset source records

Each character should eventually support:

- Name
- Slug
- Role
- HP
- Difficulty rating
- Beginner rating
- Mobility rating
- Damage rating
- Range rating
- Team utility rating
- Alpha/Beta/Gamma skill data
- Special action
- Recommended level-up order
- Combos
- Matchup notes
- Pros/cons
- Source URL
- Last updated date

## Agent Roles

### 1. Product Planner Agent
Responsibilities:
- Turn roadmap items into actionable implementation tickets.
- Keep scope disciplined: content-first, static-first, interactive-only-where-useful.
- Maintain `/docs/ROADMAP.md`, `/docs/SPEC.md`, and issue-style tasks.
- Define acceptance criteria before implementation begins.
- Keep the MVP focused on character pages, guides, filtering, and core visual polish.

Output format:
- Task title
- User story
- Files affected
- Acceptance criteria
- Test notes

### 2. Astro Architect Agent
Responsibilities:
- Design Astro routes, layouts, content collections, components, and data schemas.
- Prefer static generation for character pages and guide pages.
- Use React islands only for sorting/filtering tools.
- Ensure Cloudflare Pages compatibility.
- Ensure assets are imported through Astro-supported image workflows where practical.

Important rules:
- Do not convert the entire site into a React SPA.
- Keep shared data in typed files or content collections.
- Character pages should be generated from content/data, not manually duplicated.
- Keep asset metadata and game data separate.

### 3. Content/Data Agent
Responsibilities:
- Maintain character records, skill records, stats, roles, unlock info, source URLs, and guide metadata.
- Separate factual game data from opinionated rankings.
- Mark uncertain or patch-sensitive data clearly.
- Keep data normalized enough that tables, pages, and filters reuse the same source.
- Maintain `src/data/assetSources.ts` for external asset attribution and auditability.

Data principles:
- One character ID per character.
- Role names should be consistent.
- Store numeric sortable stats separately from display text.
- Do not hard-code tier-list opinions into base character data.
- Include `lastChecked` for public web-derived game data.

### 4. Asset Intake Agent
Responsibilities:
- Collect only the necessary assets from approved sources.
- Save assets locally in `src/assets/` using slug-safe names.
- Convert oversized assets to optimized web formats when appropriate.
- Add an entry to `src/data/assetSources.ts` for every imported external asset.
- Add meaningful alt text for each asset when used in pages/components.

Asset rules:
- Do not hotlink assets in production pages.
- Do not import unnecessary full-size images when a smaller optimized image is enough.
- Do not remove source metadata.
- Do not imply official endorsement.
- Keep placeholder assets when source usage is uncertain.

### 5. UI Component Agent
Responsibilities:
- Build reusable components: cards, stat bars, role badges, skill tables, combo boxes, guide cards, comparison rows, hero sections, filter panels, and source badges.
- Keep components accessible and mobile-friendly.
- Build a sleek modern interface with polished spacing, typography, and responsive behavior.
- Avoid excessive animation or JavaScript.

Component rules:
- Astro components for static display.
- React components only for client-side state such as sorting/filtering.
- No global CSS hacks unless documented.
- Do not make visual components depend on hardcoded character names.

### 6. SEO/Performance Agent
Responsibilities:
- Add metadata, Open Graph fields, canonical URLs, sitemap, robots.txt, and structured content where appropriate.
- Optimize images and avoid shipping unnecessary JavaScript.
- Make guide pages readable and searchable.
- Ensure unofficial fan-site disclaimer is present and crawlable.

Performance rules:
- Lighthouse target: 90+ Performance, Accessibility, Best Practices, SEO.
- Images should have width/height and alt text.
- Avoid client hydration unless the page needs it.
- Use responsive image sizes for character cards and guide hero images.

### 7. QA Agent
Responsibilities:
- Run build, typecheck, lint, and smoke tests.
- Validate routes and content collection schemas.
- Check mobile layout and keyboard accessibility.
- Confirm tables sort/filter correctly.
- Confirm all local assets referenced by pages exist.
- Confirm every external asset has an `assetSources.ts` entry.

Commands to run:
```bash
npm install
npm run build
npm run astro check
npm run lint
```

If a command does not exist, either add it correctly or explain why it is not available.

## Coding Standards
- Use TypeScript for data and interactive components.
- Use descriptive IDs and slugs.
- Prefer small, composable components.
- Keep data, layout, and presentation separate.
- Avoid magic numbers in components; use named fields.
- Keep source metadata close to data/assets, not buried in page markup.
- Use semantic HTML before adding custom interactive behavior.

## Recommended Project Layout
```text
src/
  assets/
    characters/
    skills/
    banners/
    ui/
  components/
    CharacterCard.astro
    CharacterTable.tsx
    ComboBox.astro
    GuideCard.astro
    HeroSection.astro
    RoleBadge.astro
    SkillTable.astro
    SourceBadge.astro
    StatBar.astro
  content/
    characters/
    guides/
  data/
    assetSources.ts
    characters.ts
    tiers.ts
  layouts/
    BaseLayout.astro
    GuideLayout.astro
    CharacterLayout.astro
  pages/
    index.astro
    characters.astro
    characters/[slug].astro
    guides/index.astro
    guides/[slug].astro
    tier-list.astro
  styles/
    global.css
```

## Codex Workflow
Work in small logical steps.

For each major step:
1. Explain what will be changed.
2. Implement the change.
3. Run typecheck/build/lint where available.
4. Report any failing command and the exact error.
5. Do not continue piling changes on top of a broken build.

Default validation commands:
```bash
npm install
npm run build
npm run astro check
npm run lint
```

## Definition of Done
A feature is complete only when:
- It builds successfully.
- It has responsive styling.
- It uses shared data where appropriate.
- It has clear metadata.
- It does not introduce unnecessary hydration.
- It does not hotlink production images.
- It includes source metadata for imported external assets.
- It preserves the unofficial fan-site disclaimer.
- It has a short implementation note in the relevant roadmap/spec section when behavior changes.
