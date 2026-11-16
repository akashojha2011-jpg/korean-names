import type { APIRoute } from 'astro';
import { KOREAN_NAMES } from '../data/names';
import { SURNAMES } from '../data/surnames';
import { HANJA_ENTRIES } from '../data/hanja';
import { THEME_CATEGORIES } from '../data/categories';
import { EDUCATIONAL_GUIDES } from '../data/guides';

export const GET: APIRoute = () => {
  const siteUrl = 'https://www.korean-names.info';

  const canonicalStaticPages = [
    '',
    '/names',
    '/boy-names',
    '/girl-names',
    '/unisex-names',
    '/surname',
    '/hanja',
    '/name-generator',
    '/name-finder',
    '/name-comparison',
    '/certificate',
    '/favorites',
    '/learn',
    '/about',
    '/methodology',
    '/sources',
    '/names/meaning',
    '/sitemap',
    '/privacy',
    '/terms',
    // Backward-compatible legacy indexed routes
    '/gender/boy',
    '/gender/girl',
    '/gender/unisex',
    '/guides',
    '/tools/name-generator',
    '/tools/favorite-names',
  ];

  const letterPages = 'abcdefghijklmnopqrstuvwxyz'.split('').flatMap((l) => [
    `/names/letter/${l}`,
    `/letter/${l}`
  ]);
  const themePages = THEME_CATEGORIES.flatMap((c) => [
    `/names/meaning/${c.slug}`,
    `/theme/${c.slug}`
  ]);
  const guidePages = EDUCATIONAL_GUIDES.flatMap((g) => [
    `/learn/${g.slug}`,
    `/guides/${g.slug}`
  ]);
  const surnamePages = SURNAMES.map((s) => `/surname/${s.slug}`);
  const hanjaPages = HANJA_ENTRIES.flatMap((h) => [
    `/hanja/${encodeURIComponent(h.hangul)}`,
    ...(h.hanja && h.hanja !== h.hangul ? [`/hanja/${encodeURIComponent(h.hanja)}`] : [])
  ]);
  const namePages = KOREAN_NAMES.map((n) => `/name/${n.slug}`);

  const allPaths = Array.from(new Set([
    ...canonicalStaticPages,
    ...letterPages,
    ...themePages,
    ...guidePages,
    ...surnamePages,
    ...hanjaPages,
    ...namePages,
  ]));

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPaths
  .map(
    (path) => `  <url>
    <loc>${siteUrl}${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${path === '' ? '1.0' : path.startsWith('/name/') ? '0.8' : path === '/names' || path === '/boy-names' || path === '/girl-names' ? '0.9' : '0.6'}</priority>
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
