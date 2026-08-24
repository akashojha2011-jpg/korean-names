import type { HanjaEntry } from '../types/name';

export const HANJA_ENTRIES: HanjaEntry[] = [
  {
    slug: 'min',
    hangul: '민',
    hanja: '敏',
    meaning: 'Quick, clever, agile, and earnest',
    strokeCount: 11,
    radical: '攵 (Tap)',
    commonNames: ['min-jun', 'ji-min', 'min-ho', 'min-seo', 'min-ji']
  },
  {
    slug: 'jun',
    hangul: '준',
    hanja: '俊',
    meaning: 'Talented, handsome, elite, and outstanding',
    strokeCount: 9,
    radical: '亻 (Man)',
    commonNames: ['min-jun', 'seo-jun', 'ha-joon', 'ye-jun', 'do-jun']
  },
  {
    slug: 'seo',
    hangul: '서',
    hanja: '瑞',
    meaning: 'Auspicious, lucky omen, jade crest',
    strokeCount: 13,
    radical: '王 (Jade)',
    commonNames: ['seo-ah', 'seo-jun', 'seo-yeon', 'seo-jin', 'min-seo']
  },
  {
    slug: 'ah',
    hangul: '아',
    hanja: '雅',
    meaning: 'Elegant, refined, graceful, and classic',
    strokeCount: 12,
    radical: '隹 (Short-tailed bird)',
    commonNames: ['seo-ah', 'ji-ah', 'yura-ah', 'ha-ah', 'su-ah']
  },
  {
    slug: 'woo',
    hangul: '우',
    hanja: '宇',
    meaning: 'Universe, house of heavens, grand canopy',
    strokeCount: 6,
    radical: '宀 (Roof)',
    commonNames: ['ji-woo', 'eun-woo', 'si-woo', 'woo-jin', 'sun-woo']
  },
  {
    slug: 'ji',
    hangul: '지',
    hanja: '智',
    meaning: 'Wisdom, intellect, deep understanding',
    strokeCount: 12,
    radical: '日 (Sun)',
    commonNames: ['ji-woo', 'ji-ah', 'ji-min', 'ji-hoon', 'ji-won']
  },
  {
    slug: 'ha',
    hangul: '하',
    hanja: '夏',
    meaning: 'Summer, grand, vibrant warmth',
    strokeCount: 10,
    radical: '夂 (Go slowly)',
    commonNames: ['ha-joon', 'ha-eun', 'ha-neul', 'ha-rin', 'ha-yoon']
  },
  {
    slug: 'eun',
    hangul: '은',
    hanja: '恩',
    meaning: 'Grace, kindness, divine blessing, gratitude',
    strokeCount: 10,
    radical: '心 (Heart)',
    commonNames: ['eun-woo', 'ha-eun', 'eun-ji', 'eun-seo', 'eun-bi']
  },
  {
    slug: 'do',
    hangul: '도',
    hanja: '道',
    meaning: 'The Way, truth, path of righteousness',
    strokeCount: 12,
    radical: '⻌ (Walk)',
    commonNames: ['do-hyun', 'do-jun', 'do-young', 'do-jin', 'do-kyung']
  },
  {
    slug: 'hyun',
    hangul: '현',
    hanja: '賢',
    meaning: 'Wise, virtuous, worthy, benevolent',
    strokeCount: 15,
    radical: '貝 (Shell/Wealth)',
    commonNames: ['do-hyun', 'hyun-woo', 'seung-hyun', 'taeyang-hyun', 'so-hyun']
  },
  {
    slug: 'ye',
    hangul: '예',
    hanja: '藝',
    meaning: 'Art, talent, craft, refined skill',
    strokeCount: 19,
    radical: '艹 (Grass)',
    commonNames: ['ye-jun', 'ye-eun', 'ye-jin', 'ye-ji', 'ye-na']
  },
  {
    slug: 'yoon',
    hangul: '윤',
    hanja: '潤',
    meaning: 'Lustrous, soft moisture, enriching fortune',
    strokeCount: 15,
    radical: '氵 (Water)',
    commonNames: ['seo-yoon', 'ha-yoon', 'do-yoon', 'yoon-seo', 'yoon-ah']
  }
];

export function getHanjaBySlug(slug: string): HanjaEntry | undefined {
  return HANJA_ENTRIES.find(h => h.slug.toLowerCase() === slug.toLowerCase());
}
