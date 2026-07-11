import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jajera.github.io',
  base: '/guides/',
  integrations: [sitemap()],
});
