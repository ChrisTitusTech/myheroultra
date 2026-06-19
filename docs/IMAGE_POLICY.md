# Image Policy

## Purpose

Keep images fast, locally served, traceable, accessible, and clearly part of an unofficial fan project.

## Source and storage rules

- Only collect assets needed for an active page or feature.
- Use approved public references listed in `AGENTS.md`.
- Never hotlink production images.
- Store imported assets under the matching `src/assets/` folder.
- Add every externally sourced asset to `src/data/assetSources.ts`.
- Original site-created graphics do not need an external source-manifest record.

## Format and sizing

- Prefer AVIF for photographic artwork when browser output remains visually clean.
- Prefer WebP when AVIF creates artifacts or source transparency is important.
- Keep SVG for original icons and simple vector artwork.
- Do not ship original multi-megabyte artwork when a smaller display-sized derivative is sufficient.
- Create card, hero, and social-image variants instead of resizing one oversized file in CSS.

## Astro implementation

- Import local content images from `src/assets/` and render them with Astro's `<Image />` or `<Picture />`.
- Always provide meaningful `alt` text unless an image is purely decorative.
- Always preserve generated width and height attributes.
- Provide responsive `sizes` values that match the actual layout.
- Use `loading="lazy"` for below-the-fold images.
- Only prioritize the page's likely largest-contentful image.

## Review checklist

- No external image URLs appear in production markup.
- Every external file has an asset-source record.
- Width, height, alt text, and responsive sizing are present.
- The image does not imply official affiliation or endorsement.
- The page still reads correctly if the image fails to load.
