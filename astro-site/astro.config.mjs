import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [
    react(),
    sitemap({
      filter: (page) =>
        !page.endsWith('/404/') &&
        !page.endsWith('/404.html') &&
        !page.includes('/characters/stars-and-stripe'),
    }),
  ],
  output: 'static',
  site: 'https://myheroultra.com',
  redirects: {
    '/characters/stars-and-stripe': '/characters/star-and-stripe',
  },
});
