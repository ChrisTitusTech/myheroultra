import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  output: 'static',
  site: process.env.SITE_URL ?? 'https://myheroultra.com',
});
