import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://guides.johna.kiwi',
  base: '/',
  integrations: [sitemap()],
  // Cursor + other IDE watchers often exhaust inotify (ENOSPC). Poll instead.
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 1000,
      },
    },
  },
});
