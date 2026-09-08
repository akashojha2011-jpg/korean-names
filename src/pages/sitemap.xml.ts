import type { APIRoute } from 'astro';
import { KOREAN_NAMES } from '../data/names';
import { SURNAMES } from '../data/surnames';
import { HANJA_ENTRIES } from '../data/hanja';
import { THEME_CATEGORIES } from '../data/categories';

export const GET: APIRoute = () => {
  const siteUrl = 'https://www.korean-names.info';

  const staticPages = [
    '',
    '/gender/boy',
    '/gender/girl',
    '/gender/unisex',
    '/surname',
    '/hanja',
    '/letter/a',
    '/tools/name-generator',
    '/tools/favorite-names',
    '/sitemap',
    '/acknowledgments',
    '/author',
    '/contact',
    '/privacy',
    '/terms',
  ];

  const letterPages = 'abcdefghijklmnopqrstuvwxyz'.split('').map((l) => `/letter/${l}`);
  const themePages = THEME_CATEGORIES.map((c) => `/theme/${c.slug}`);
  const surnamePages = SURNAMES.map((s) => `/surname/${s.slug}`);
  const hanjaPages = HANJA_ENTRIES.map((h) => `/hanja/${encodeURIComponent(h.hangul)}`);
  const namePages = KOREAN_NAMES.map((n) => `/name/${n.slug}`);

  const allPaths = [
    ...staticPages,
    ...letterPages,
    ...themePages,
    ...surnamePages,
    ...hanjaPages,
    ...namePages,
  ];

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPaths
  .map(
    (path) => `  <url>
    <loc>${siteUrl}${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${path === '' ? '1.0' : path.startsWith('/name/') ? '0.8' : '0.6'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xmlContent, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
