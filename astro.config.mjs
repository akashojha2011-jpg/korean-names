import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://korean-names.info',
  integrations: [sitemap()],
  output: 'static',
});
