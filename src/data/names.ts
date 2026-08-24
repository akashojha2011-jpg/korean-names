import type { KoreanName } from '../types/name';
import { generateKoreanNamesDataset } from './generator';

const INITIAL_CURATED_NAMES: KoreanName[] = [
  // 1. Min-jun
  {
    slug: 'min-jun',
    english: 'Min-jun (Minjun)',
    hangul: '민준',
    hanja: '敏俊',
    gender: 'boy',
    syllables: [
      {
        hangul: '민',
        hanja: '敏',
        romanization: 'Min',
        meaning: 'Quick, clever, agile, and sharp-minded',
        subDefinitions: [
          { term: 'Clever', definition: 'Sharp intellect and quick understanding.' },
          { term: 'Agile', definition: 'Fast movement and mental alertness.' }
        ]
      },
      {
        hangul: '준',
        hanja: '俊',
        romanization: 'Jun',
        meaning: 'Talented, handsome, elite, and remarkable',
        subDefinitions: [
          { term: 'Talented', definition: 'Exceptional natural gifts and leadership.' },
          { term: 'Handsome', definition: 'Dignified physical grace and charm.' }
        ]
      }
    ],
    overallMeaning: 'Clever and handsome; a sharp-minded leader with exceptional talent.',
    revisedRomanization: 'Min-jun',
    mccuneReischauer: 'Min-chun',
    popularityRank: 1,
    isTrending: true,
    themes: ['Wisdom', 'Strength', 'Modern', 'K-Pop'],
    syllableCount: 2,
    firstLetter: 'm',
    originStory: 'Min-jun has consistently ranked as the #1 most popular baby boy name in South Korea for over a decade. It combines traditional Confucian scholarly intellect (Min) with modern nobility and physical grace (Jun).',
    nicknames: ['Min-min (민민)', 'Juu-nu (준우)', 'Minnie (민이)'],
    alternateHanjaList: [
      { hanja: '敏俊', hangul: '민준', literalMeaning: 'quick + handsome (most popular)' },
      { hanja: '民准', hangul: '민준', literalMeaning: 'people + standard' },
      { hanja: '珉俊', hangul: '민준', literalMeaning: 'precious jade + talented' },
      { hanja: '敏准', hangul: '민준', literalMeaning: 'clever + level (righteous)' }
    ],
    famousNamesakes: [
      { name: 'Kim Min-jun (Jun. K)', role: 'K-Pop Idol (2PM Singer & Producer)' },
      { name: 'Do Min-jun', role: 'Iconic Male Lead in K-Drama "My Love from the Star"' }
    ],
    surnameCombinations: [
      { surnameSlug: 'kim', surnameEnglish: 'Kim', surnameHangul: '김', fullEnglish: 'Kim Min-jun', fullHangul: '김민준', harmonyScore: 98, harmonyNote: 'Perfection in tone balance; smooth double nasal cadence.' },
      { surnameSlug: 'lee', surnameEnglish: 'Lee', surnameHangul: '이', fullEnglish: 'Lee Min-jun', fullHangul: '이민준', harmonyScore: 95, harmonyNote: 'Vowel-rich flow, soft and dignified.' },
      { surnameSlug: 'park', surnameEnglish: 'Park', surnameHangul: '박', fullEnglish: 'Park Min-jun', fullHangul: '박민준', harmonyScore: 94, harmonyNote: 'Strong plosive start resolving into lyrical elegance.' }
    ],
    relatedSlugs: ['seo-jun', 'ha-joon', 'ye-jun', 'ji-min']
  },

  // 2. Seo-ah
  {
    slug: 'seo-ah',
    english: 'Seo-ah (Seoah)',
    hangul: '서아',
    hanja: '瑞雅',
    gender: 'girl',
    syllables: [
      {
        hangul: '서',
        hanja: '瑞',
        romanization: 'Seo',
        meaning: 'Auspicious, lucky omen, jade crest',
        subDefinitions: [
          { term: 'Auspicious', definition: 'Blessed with divine fortune and good omens.' },
          { term: 'Jade Omen', definition: 'Pure, precious, and timeless value.' }
        ]
      },
      {
        hangul: '아',
        hanja: '雅',
        romanization: 'Ah',
        meaning: 'Elegant, refined, graceful, and classic',
        subDefinitions: [
          { term: 'Elegant', definition: 'Refined artistic taste and poetic grace.' },
          { term: 'Graceful', definition: 'Gentle, serene demeanor and beauty.' }
        ]
      }
    ],
    overallMeaning: 'Auspicious elegance; a blessed maiden graced with timeless beauty.',
    revisedRomanization: 'Seo-a',
    mccuneReischauer: 'Sŏ-a',
    popularityRank: 1,
    isTrending: true,
    themes: ['Grace', 'Brightness', 'Modern'],
    syllableCount: 2,
    firstLetter: 's',
    originStory: 'Seo-ah is currently the #1 most beloved baby girl name in Korea. The combination of "Seo" (auspicious fortune) and "Ah" (refined artistic grace) gives it an ethereal, gentle sound loved across generations.',
    nicknames: ['Seo-seo (서서)', 'Ah-chan (아짱)', 'Seo-y (서이)'],
    alternateHanjaList: [
      { hanja: '瑞雅', hangul: '서아', literalMeaning: 'auspicious + elegant (most popular)' },
      { hanja: '書雅', hangul: '서아', literalMeaning: 'calligraphy/book + graceful' },
      { hanja: '瑞娥', hangul: '서아', literalMeaning: 'lucky omen + beautiful woman' }
    ],
    famousNamesakes: [
      { name: 'Yoon Seo-ah', role: 'Acclaimed Korean Actress (Nevertheless, Kakao TV)' },
      { name: 'Lee Seo-ah', role: 'Celebrated Musical Prodigy & Pianist' }
    ],
    surnameCombinations: [
      { surnameSlug: 'kim', surnameEnglish: 'Kim', surnameHangul: '김', fullEnglish: 'Kim Seo-ah', fullHangul: '김서아', harmonyScore: 99, harmonyNote: 'Ultra-harmonious phonetic cadence; top pick among modern parents.' },
      { surnameSlug: 'lee', surnameEnglish: 'Lee', surnameHangul: '이', fullEnglish: 'Lee Seo-ah', fullHangul: '이서아', harmonyScore: 96, harmonyNote: 'Soft liquid transitions, incredibly poetic.' }
    ],
    relatedSlugs: ['ji-ah', 'seo-yeon', 'ha-eun', 'su-ah']
  },

  // 3. Ji-woo
  {
    slug: 'ji-woo',
    english: 'Ji-woo (Jiwon)',
    hangul: '지우',
    hanja: '智宇',
    gender: 'unisex',
    syllables: [
      {
        hangul: '지',
        hanja: '智',
        romanization: 'Ji',
        meaning: 'Wisdom, intellect, deep insight',
        subDefinitions: [
          { term: 'Wisdom', definition: 'Clear mind and high intelligence.' },
          { term: 'Insight', definition: 'Profound understanding of truth.' }
        ]
      },
      {
        hangul: '우',
        hanja: '宇',
        romanization: 'Woo',
        meaning: 'Universe, house of heavens, grand canopy',
        subDefinitions: [
          { term: 'Universe', definition: 'Cosmic breadth and boundless potential.' },
          { term: 'House', definition: 'Safe shelter and cosmic dignity.' }
        ]
      }
    ],
    overallMeaning: 'Universal wisdom; a boundless intellect that spans the cosmos.',
    revisedRomanization: 'Ji-u',
    mccuneReischauer: 'Chi-u',
    popularityRank: 3,
    isTrending: true,
    themes: ['Wisdom', 'Nature', 'Modern', 'K-Pop'],
    syllableCount: 2,
    firstLetter: 'j',
    originStory: 'Ji-woo is a quintessential gender-neutral Korean name. Its expansive meaning bridges individual human intelligence with the grand majesty of the universe.',
    nicknames: ['Ji-ji (지지)', 'Woo-woo (우우)', 'Chuu (츄)'],
    alternateHanjaList: [
      { hanja: '智宇', hangul: '지우', literalMeaning: 'wisdom + universe (most popular)' },
      { hanja: '志祐', hangul: '지우', literalMeaning: 'willpower + divine protection' },
      { hanja: '知雨', hangul: '지우', literalMeaning: 'knowing + spring rain' }
    ],
    famousNamesakes: [
      { name: 'Choi Ji-woo', role: 'Hallyu Legend & Lead Actress (Winter Sonata)' },
      { name: 'Kim Ji-woo (Chuu)', role: 'K-Pop Soloist & Former LOONA Idol' }
    ],
    surnameCombinations: [
      { surnameSlug: 'kim', surnameEnglish: 'Kim', surnameHangul: '김', fullEnglish: 'Kim Ji-woo', fullHangul: '김지우', harmonyScore: 97, harmonyNote: 'Resonant, melodious, and instantly memorable.' }
    ],
    relatedSlugs: ['eun-woo', 'si-woo', 'ji-ah', 'ji-min']
  }
];

export const KOREAN_NAMES: KoreanName[] = generateKoreanNamesDataset(INITIAL_CURATED_NAMES);

export function getKoreanNameBySlug(slug: string): KoreanName | undefined {
  return KOREAN_NAMES.find(n => n.slug.toLowerCase() === slug.toLowerCase());
}

export function getNamesByGender(gender: string): KoreanName[] {
  return KOREAN_NAMES.filter(n => n.gender === gender || (gender === 'unisex' && n.gender === 'unisex'));
}

export function getNamesByTheme(themeSlug: string): KoreanName[] {
  return KOREAN_NAMES.filter(n => n.themes.some(t => t.toLowerCase() === themeSlug.toLowerCase()));
}

export function getNamesByLetter(letter: string): KoreanName[] {
  return KOREAN_NAMES.filter(n => n.firstLetter.toLowerCase() === letter.toLowerCase());
}
