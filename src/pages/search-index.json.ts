import type { APIRoute } from 'astro';
import { KOREAN_NAMES } from '../data/names';

export const GET: APIRoute = () => {
  const compactIndex = KOREAN_NAMES.map((n) => ({
    s: n.slug,
    e: n.english,
    h: n.hangul,
    j: n.hanja,
    g: n.gender,
    m: n.overallMeaning,
    t: n.themes || [],
    c: n.syllableCount || 2,
    l: n.firstLetter || n.english.charAt(0).toLowerCase(),
  }));

  return new Response(JSON.stringify(compactIndex), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
    },
  });
};
