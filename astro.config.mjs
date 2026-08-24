import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.korean-names.info',
  integrations: [sitemap()],
  output: 'static',
});
