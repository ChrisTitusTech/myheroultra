# Ultra Rumble Field Notes

An unofficial, static-first My Hero Ultra Rumble guide site built with Astro and deployed to Cloudflare Pages.

## Local development

Requirements:

- Node.js 22.12 or newer
- npm

```bash
cd astro-site
npm install
npm run dev
```

Validation:

```bash
npm run build
npm run check
npm run lint
```

## Cloudflare Workers

This project produces static files and deploys them through Cloudflare Workers Static Assets. It does not require the Cloudflare Astro adapter because there is no server-rendered Astro code.

Cloudflare build settings:

- Root directory: `astro-site`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Version command: `npx wrangler versions upload`
- Production branch: `main`

The canonical production origin defaults to `https://myheroultra.com`. Set `SITE_URL` only when a different origin is needed for a build.

The Worker configuration in `astro-site/wrangler.jsonc` publishes the generated `dist` directory as static assets.

For local Cloudflare runtime testing:

```bash
cd astro-site
npm run preview
```

For an authenticated CLI deployment:

```bash
cd astro-site
npx wrangler login
npm run deploy
```
