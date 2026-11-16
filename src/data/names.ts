import type { KoreanName } from '../types/name';
import { generateKoreanNamesDataset } from './generator';

const INITIAL_CURATED_NAMES: KoreanName[] = [
  // 1. Min-jun (Sino-Korean)
  {
    slug: 'min-jun',
    english: 'Min-jun (Minjun)',
    hangul: '민준',
    hanja: '敏俊',
    gender: 'boy',
    classification: 'sino-korean',
    isPureKorean: false,
    meaningDependsOnHanja: true,
    confidenceLevel: 'verified-statutory',
    ipaPhonetic: '[min.dʑun]',
    lastReviewedDate: '2026-01-15',
    syllables: [
      {
        hangul: '민',
        hanja: '敏',
        romanization: 'Min',
        meaning: 'Quick, clever, agile, and sharp-minded',
        strokeCount: 11,
        radical: '攵 (Tap)',
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
        strokeCount: 9,
        radical: '亻 (Man)',
        subDefinitions: [
          { term: 'Talented', definition: 'Exceptional natural gifts and leadership.' },
          { term: 'Handsome', definition: 'Dignified physical grace and charm.' }
        ]
      }
    ],
    hanjaCombinations: [
      {
        combinationId: 'min-jun-1',
        completeHanja: '敏俊',
        syllables: [
          { hangul: '민', hanja: '敏', meaning: 'Quick, clever, agile', strokeCount: 11, radical: '攵' },
          { hangul: '준', hanja: '俊', meaning: 'Talented, handsome, elite', strokeCount: 9, radical: '亻' }
        ],
        combinedInterpretation: 'Sharp-minded agility coupled with exceptional talent and handsome dignity; the canonical Joseon scholar-leader pairing.',
        culturalContext: 'The most popular registered Hanja combination for Min-jun under Supreme Court registry records.',
        source: 'Supreme Court Table of Hanja for Personal Names',
        isPopularVariant: true
      },
      {
        combinationId: 'min-jun-2',
        completeHanja: '珉俊',
        syllables: [
          { hangul: '민', hanja: '珉', meaning: 'Precious gem jade, pure stone', strokeCount: 9, radical: '玉' },
          { hangul: '준', hanja: '俊', meaning: 'Talented, handsome, noble', strokeCount: 9, radical: '亻' }
        ],
        combinedInterpretation: 'A brilliant talent as precious and untarnished as imperial white jade.',
        culturalContext: 'Favored by families seeking an aristocratic, precious aura for their son.',
        source: 'Supreme Court Table of Hanja for Personal Names',
        isPopularVariant: false
      },
      {
        combinationId: 'min-jun-3',
        completeHanja: '民准',
        syllables: [
          { hangul: '민', hanja: '民', meaning: 'The people, citizen, nation', strokeCount: 5, radical: '氏' },
          { hangul: '준', hanja: '准', meaning: 'Standard, level, rule of justice', strokeCount: 10, radical: '冫' }
        ],
        combinedInterpretation: 'A standard of justice and upright servant of the people.',
        culturalContext: 'Reflecting civic virtue, righteous governance, and community leadership.',
        source: 'Supreme Court Table of Hanja for Personal Names',
        isPopularVariant: false
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
    originStory: 'Min-jun has consistently ranked among the top baby boy names in South Korea for over a decade. It combines traditional Confucian scholarly intellect (Min) with modern nobility and physical grace (Jun).',
    nicknames: ['Min-min (민민)', 'Juu-nu (준우)', 'Minnie (민이)'],
    alternateHanjaList: [
      { hanja: '敏俊', hangul: '민준', literalMeaning: 'quick + handsome (most popular)' },
      { hanja: '珉俊', hangul: '민준', literalMeaning: 'precious jade + talented' },
      { hanja: '民准', hangul: '민준', literalMeaning: 'people + standard of justice' }
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
    relatedSlugs: ['seo-jun', 'ha-joon', 'ye-jun', 'ji-min'],
    references: [
      'Supreme Court Table of Hanja for Personal Names (대법원 인명용 한자표)',
      'National Institute of Korean Language (국립국어원) Revised Romanization Guide'
    ]
  },

  // 2. Seo-ah (Sino-Korean)
  {
    slug: 'seo-ah',
    english: 'Seo-ah (Seoah)',
    hangul: '서아',
    hanja: '瑞雅',
    gender: 'girl',
    classification: 'sino-korean',
    isPureKorean: false,
    meaningDependsOnHanja: true,
    confidenceLevel: 'verified-statutory',
    ipaPhonetic: '[sʰʌ̹.a̠]',
    lastReviewedDate: '2026-01-15',
    syllables: [
      {
        hangul: '서',
        hanja: '瑞',
        romanization: 'Seo',
        meaning: 'Auspicious, lucky omen, jade crest',
        strokeCount: 13,
        radical: '王 (Jade)',
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
        strokeCount: 12,
        radical: '隹 (Bird)',
        subDefinitions: [
          { term: 'Elegant', definition: 'Refined artistic taste and poetic grace.' },
          { term: 'Graceful', definition: 'Gentle, serene demeanor and beauty.' }
        ]
      }
    ],
    hanjaCombinations: [
      {
        combinationId: 'seo-ah-1',
        completeHanja: '瑞雅',
        syllables: [
          { hangul: '서', hanja: '瑞', meaning: 'Auspicious, lucky omen', strokeCount: 13, radical: '王' },
          { hangul: '아', hanja: '雅', meaning: 'Elegant, refined, graceful', strokeCount: 12, radical: '隹' }
        ],
        combinedInterpretation: 'Auspicious elegance; blessed with celestial good fortune and refined poetic grace.',
        culturalContext: 'Consistently ranks as the #1 registered Hanja combination for female births in Seoul.',
        source: 'Supreme Court Table of Hanja for Personal Names',
        isPopularVariant: true
      },
      {
        combinationId: 'seo-ah-2',
        completeHanja: '書雅',
        syllables: [
          { hangul: '서', hanja: '書', meaning: 'Book, calligraphy, learning', strokeCount: 10, radical: '曰' },
          { hangul: '아', hanja: '雅', meaning: 'Refined, elegant, lyrical', strokeCount: 12, radical: '隹' }
        ],
        combinedInterpretation: 'Scholarly elegance; an educated mind steeped in classical wisdom and arts.',
        culturalContext: 'Favored by scholarly and academic families.',
        source: 'Supreme Court Table of Hanja for Personal Names',
        isPopularVariant: false
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
    relatedSlugs: ['ji-ah', 'seo-yeon', 'ha-eun', 'su-ah'],
    references: [
      'Supreme Court Table of Hanja for Personal Names (대법원 인명용 한자표)',
      'Supreme Court Electronic Family Relationship Registration System'
    ]
  },

  // 3. Ji-woo (Sino-Korean Unisex)
  {
    slug: 'ji-woo',
    english: 'Ji-woo (Jiwon)',
    hangul: '지우',
    hanja: '智宇',
    gender: 'unisex',
    classification: 'sino-korean',
    isPureKorean: false,
    meaningDependsOnHanja: true,
    confidenceLevel: 'verified-statutory',
    ipaPhonetic: '[tɕi.u]',
    lastReviewedDate: '2026-01-15',
    syllables: [
      {
        hangul: '지',
        hanja: '智',
        romanization: 'Ji',
        meaning: 'Wisdom, intellect, deep insight',
        strokeCount: 12,
        radical: '日 (Sun)',
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
        strokeCount: 6,
        radical: '宀 (Roof)',
        subDefinitions: [
          { term: 'Universe', definition: 'Cosmic breadth and boundless potential.' },
          { term: 'House', definition: 'Safe shelter and cosmic dignity.' }
        ]
      }
    ],
    hanjaCombinations: [
      {
        combinationId: 'ji-woo-1',
        completeHanja: '智宇',
        syllables: [
          { hangul: '지', hanja: '智', meaning: 'Wisdom, intellect, insight', strokeCount: 12, radical: '日' },
          { hangul: '우', hanja: '宇', meaning: 'Universe, cosmos, grand canopy', strokeCount: 6, radical: '宀' }
        ],
        combinedInterpretation: 'Wisdom spanning the universe; boundless vision and cosmic intellect.',
        culturalContext: 'A universally respected unisex pairing in contemporary South Korea.',
        source: 'Supreme Court Table of Hanja for Personal Names',
        isPopularVariant: true
      },
      {
        combinationId: 'ji-woo-2',
        completeHanja: '志祐',
        syllables: [
          { hangul: '지', hanja: '志', meaning: 'Willpower, ambition, resolve', strokeCount: 7, radical: '心' },
          { hangul: '우', hanja: '祐', meaning: 'Divine help, celestial blessing', strokeCount: 9, radical: '示' }
        ],
        combinedInterpretation: 'Steadfast personal willpower blessed and guarded by divine fortune.',
        culturalContext: 'Traditional protective name combination for both boys and girls.',
        source: 'Supreme Court Table of Hanja for Personal Names',
        isPopularVariant: false
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
    relatedSlugs: ['eun-woo', 'si-woo', 'ji-ah', 'ji-min'],
    references: [
      'Supreme Court Table of Hanja for Personal Names (대법원 인명용 한자표)'
    ]
  },

  // 4. Ha-neul (Pure Korean - 하늘)
  {
    slug: 'ha-neul',
    english: 'Ha-neul (Haneul)',
    hangul: '하늘',
    hanja: '',
    gender: 'unisex',
    classification: 'pure-korean',
    isPureKorean: true,
    meaningDependsOnHanja: false,
    confidenceLevel: 'verified-statutory',
    ipaPhonetic: '[ha̠.nɯɭ]',
    lastReviewedDate: '2026-01-15',
    syllables: [
      {
        hangul: '하',
        hanja: '',
        romanization: 'Ha',
        meaning: 'First syllable of pure native Korean "Haneul" (sky/heaven)',
        subDefinitions: [
          { term: 'Sky', definition: 'The boundless azure heavens above.' }
        ]
      },
      {
        hangul: '늘',
        hanja: '',
        romanization: 'Neul',
        meaning: 'Second syllable echoing "always" (늘)',
        subDefinitions: [
          { term: 'Always', definition: 'Everlasting presence and boundless openness.' }
        ]
      }
    ],
    overallMeaning: 'Pure Native Korean for "Sky" or "Heaven"; broad-minded, expansive, and high-reaching.',
    revisedRomanization: 'Ha-neul',
    mccuneReischauer: 'Ha-nŭl',
    popularityRank: 12,
    isTrending: true,
    themes: ['Nature', 'Brightness', 'Modern'],
    syllableCount: 2,
    firstLetter: 'h',
    originStory: 'Ha-neul is one of the most famous and beloved Soon-woori-mal (순우리말, native pure Korean) names. It directly means the celestial sky or heavens, symbolizing boundless freedom, high aspirations, and an open heart that embraces all without prejudice.',
    nicknames: ['Neul-i (늘이)', 'Haneulie (하늘이)'],
    famousNamesakes: [
      { name: 'Kang Ha-neul', role: 'Beloved Award-Winning South Korean Actor (Dongju, Midnight Runners)' },
      { name: 'Kim Ha-neul', role: 'Celebrated Leading Actress (A Gentleman’s Dignity, Blind)' }
    ],
    surnameCombinations: [
      { surnameSlug: 'kang', surnameEnglish: 'Kang', surnameHangul: '강', fullEnglish: 'Kang Ha-neul', fullHangul: '강하늘', harmonyScore: 98, harmonyNote: 'Dynamic cadence, strong cultural resonance.' },
      { surnameSlug: 'kim', surnameEnglish: 'Kim', surnameHangul: '김', fullEnglish: 'Kim Ha-neul', fullHangul: '김하늘', harmonyScore: 96, harmonyNote: 'Smooth tone balance with gentle liquid ending.' }
    ],
    relatedSlugs: ['ba-da', 'bo-ram', 'i-seul', 'a-reum'],
    references: [
      'National Institute of Korean Language (국립국어원) Standard Korean Dictionary',
      'Supreme Court Electronic Family Relationship Registration System'
    ]
  },

  // 5. Ba-da (Pure Korean - 바다)
  {
    slug: 'ba-da',
    english: 'Ba-da (Bada)',
    hangul: '바다',
    hanja: '',
    gender: 'unisex',
    classification: 'pure-korean',
    isPureKorean: true,
    meaningDependsOnHanja: false,
    confidenceLevel: 'verified-statutory',
    ipaPhonetic: '[pa̠.da̠]',
    lastReviewedDate: '2026-01-15',
    syllables: [
      {
        hangul: '바',
        hanja: '',
        romanization: 'Ba',
        meaning: 'First syllable of pure Korean "Bada" (ocean/sea)'
      },
      {
        hangul: '다',
        hanja: '',
        romanization: 'Da',
        meaning: 'Second syllable echoing "all/everything" (다)'
      }
    ],
    overallMeaning: 'Pure Native Korean for "Sea" or "Ocean"; profound, generous, and endlessly deep.',
    revisedRomanization: 'Ba-da',
    mccuneReischauer: 'Pa-da',
    popularityRank: 24,
    isTrending: false,
    themes: ['Nature', 'Grace', 'Modern'],
    syllableCount: 2,
    firstLetter: 'b',
    originStory: 'A quintessential pure Korean nature name. Ba-da represents the vastness of the ocean, which receives all rivers without overflowing, symbolizing a generous, forgiving spirit and deep wisdom.',
    nicknames: ['Da-da (다다)', 'Bada-ya (바다야)'],
    famousNamesakes: [
      { name: 'Bada (Choi Sung-hee)', role: 'Pioneering 1st Generation K-Pop Idol & Legendary Vocalist (S.E.S.)' },
      { name: 'Bada Lee', role: 'Renowned Dancer & Street Woman Fighter 2 Winner' }
    ],
    surnameCombinations: [
      { surnameSlug: 'lee', surnameEnglish: 'Lee', surnameHangul: '이', fullEnglish: 'Lee Ba-da', fullHangul: '이바다', harmonyScore: 96, harmonyNote: 'Flows like rolling waves; soft and poetic.' }
    ],
    relatedSlugs: ['ha-neul', 'ga-ram', 'i-seul'],
    references: [
      'National Institute of Korean Language (국립국어원) Native Korean Nomenclature Study'
    ]
  },

  // 6. Bo-ram (Pure Korean - 보람)
  {
    slug: 'bo-ram',
    english: 'Bo-ram (Boram)',
    hangul: '보람',
    hanja: '',
    gender: 'girl',
    classification: 'pure-korean',
    isPureKorean: true,
    meaningDependsOnHanja: false,
    confidenceLevel: 'verified-statutory',
    ipaPhonetic: '[po.ɾa̠m]',
    lastReviewedDate: '2026-01-15',
    syllables: [
      {
        hangul: '보',
        hanja: '',
        romanization: 'Bo',
        meaning: 'Seeing, cherishing, precious'
      },
      {
        hangul: '람',
        hanja: '',
        romanization: 'Ram',
        meaning: 'Fruition, worth, lasting pride'
      }
    ],
    overallMeaning: 'Pure Native Korean for "Fruition", "Worthwhile", or "Pride in Achievement"; a life lived with deep purpose.',
    revisedRomanization: 'Bo-ram',
    mccuneReischauer: 'Po-ram',
    popularityRank: 35,
    isTrending: false,
    themes: ['Wisdom', 'Grace', 'Modern'],
    syllableCount: 2,
    firstLetter: 'b',
    originStory: 'In pure Korean, "boram" expresses the rewarding sense of worth and joy that comes from honest effort and loving devotion. Parents choose it wishing their child will live a fulfilling, meaningful life.',
    nicknames: ['Ram-i (람이)', 'Bo-bo (보보)'],
    famousNamesakes: [
      { name: 'Jeon Bo-ram', role: 'Singer & Actress, former member of popular K-pop group T-ara' }
    ],
    surnameCombinations: [
      { surnameSlug: 'park', surnameEnglish: 'Park', surnameHangul: '박', fullEnglish: 'Park Bo-ram', fullHangul: '박보람', harmonyScore: 95, harmonyNote: 'Lyrical rhythm ending on a soft bilabial nasal consonant.' }
    ],
    relatedSlugs: ['a-reum', 'da-som', 'ha-neul'],
    references: [
      'National Institute of Korean Language (국립국어원) Standard Korean Dictionary'
    ]
  },

  // 7. A-reum (Pure Korean - 아름)
  {
    slug: 'a-reum',
    english: 'A-reum (Areum)',
    hangul: '아름',
    hanja: '',
    gender: 'girl',
    classification: 'pure-korean',
    isPureKorean: true,
    meaningDependsOnHanja: false,
    confidenceLevel: 'verified-statutory',
    ipaPhonetic: '[a̠.ɾɯm]',
    lastReviewedDate: '2026-01-15',
    syllables: [
      {
        hangul: '아',
        hanja: '',
        romanization: 'A',
        meaning: 'First syllable from pure Korean "Areumdapda" (beautiful)'
      },
      {
        hangul: '름',
        hanja: '',
        romanization: 'Reum',
        meaning: 'Second syllable echoing armful measure and fullness'
      }
    ],
    overallMeaning: 'Pure Native Korean for "Beauty" or "An Armful of Blessings"; radiant inner grace.',
    revisedRomanization: 'A-reum',
    mccuneReischauer: 'A-rŭm',
    popularityRank: 28,
    isTrending: false,
    themes: ['Grace', 'Brightness', 'Modern'],
    syllableCount: 2,
    firstLetter: 'a',
    originStory: 'Derived from "areumdapda" (beautiful) and the ancient Korean measurement "areum" (an armful of flowers or grain). It conveys a person filled with beauty, warmth, and generous abundance.',
    nicknames: ['Reum-i (름이)', 'A-ru (아루)'],
    famousNamesakes: [
      { name: 'Han A-reum', role: 'South Korean Singer and Actress' }
    ],
    surnameCombinations: [
      { surnameSlug: 'kim', surnameEnglish: 'Kim', surnameHangul: '김', fullEnglish: 'Kim A-reum', fullHangul: '김아름', harmonyScore: 97, harmonyNote: 'Smooth vowel flow followed by soft resonating finals.' }
    ],
    relatedSlugs: ['bo-ram', 'da-som', 'i-seul'],
    references: [
      'National Institute of Korean Language (국립국어원) Pure Korean Etymology Series'
    ]
  },

  // 8. I-seul (Pure Korean - 이슬)
  {
    slug: 'i-seul',
    english: 'I-seul (Iseul / Yiseul)',
    hangul: '이슬',
    hanja: '',
    gender: 'girl',
    classification: 'pure-korean',
    isPureKorean: true,
    meaningDependsOnHanja: false,
    confidenceLevel: 'verified-statutory',
    ipaPhonetic: '[i.sʰɯɭ]',
    lastReviewedDate: '2026-01-15',
    syllables: [
      {
        hangul: '이',
        hanja: '',
        romanization: 'I',
        meaning: 'First syllable of pure Korean "Iseul" (dewdrop)'
      },
      {
        hangul: '슬',
        hanja: '',
        romanization: 'Seul',
        meaning: 'Dew, sparkling clarity'
      }
    ],
    overallMeaning: 'Pure Native Korean for "Morning Dew"; pristine purity, freshness, and crystalline clarity.',
    revisedRomanization: 'I-seul',
    mccuneReischauer: 'I-sŭl',
    popularityRank: 32,
    isTrending: false,
    themes: ['Nature', 'Grace', 'Modern'],
    syllableCount: 2,
    firstLetter: 'i',
    originStory: 'Like the first drop of morning dew on lotus leaves, "I-seul" represents untainted innocence, clear perception, and the silent revitalization of the natural world.',
    nicknames: ['Seul-i (슬이)', 'Dewy (듀이)'],
    famousNamesakes: [
      { name: 'Kim I-seul', role: 'Prominent Korean Model and Media Personality' }
    ],
    surnameCombinations: [
      { surnameSlug: 'jung', surnameEnglish: 'Jung', surnameHangul: '정', fullEnglish: 'Jung I-seul', fullHangul: '정이슬', harmonyScore: 95, harmonyNote: 'Gentle sibilant consonant and liquid vowel transition.' }
    ],
    relatedSlugs: ['ha-neul', 'ba-da', 'a-reum'],
    references: [
      'National Institute of Korean Language (국립국어원)'
    ]
  },

  // 9. On-yu (Pure Korean / Sino-Korean hybrid - 온유)
  {
    slug: 'on-yu',
    english: 'On-yu (Onew)',
    hangul: '온유',
    hanja: '溫柔',
    gender: 'unisex',
    classification: 'pure-korean',
    isPureKorean: true,
    meaningDependsOnHanja: false,
    confidenceLevel: 'verified-statutory',
    ipaPhonetic: '[o̞n.ju]',
    lastReviewedDate: '2026-01-15',
    syllables: [
      {
        hangul: '온',
        hanja: '溫',
        romanization: 'On',
        meaning: 'Warmth, tender gentleness'
      },
      {
        hangul: '유',
        hanja: '柔',
        romanization: 'Yu',
        meaning: 'Softness, gentleness, flexible strength'
      }
    ],
    overallMeaning: 'Gentleness and warmth; a soothing, kind spirit who brings comfort to others.',
    revisedRomanization: 'On-yu',
    mccuneReischauer: 'On-yu',
    popularityRank: 40,
    isTrending: true,
    themes: ['Grace', 'Wisdom', 'Modern'],
    syllableCount: 2,
    firstLetter: 'o',
    originStory: 'Celebrated both as a pure Korean virtue name meaning tender warmth and as a classical character pairing. It evokes a peaceful, considerate disposition.',
    nicknames: ['Onew (온유)', 'On-i (온이)'],
    famousNamesakes: [
      { name: 'Onew (Lee Jin-ki)', role: 'Leader and Main Vocalist of World-Renowned K-Pop Group SHINee' }
    ],
    surnameCombinations: [
      { surnameSlug: 'lee', surnameEnglish: 'Lee', surnameHangul: '이', fullEnglish: 'Lee On-yu', fullHangul: '이온유', harmonyScore: 96, harmonyNote: 'Warm and soothing acoustic quality.' }
    ],
    relatedSlugs: ['ha-neul', 'ji-woo', 'bo-ram'],
    references: [
      'Supreme Court Table of Hanja for Personal Names'
    ]
  },

  // 10. Han-byeol (Pure Korean - 한별)
  {
    slug: 'han-byeol',
    english: 'Han-byeol (Hanbyul)',
    hangul: '한별',
    hanja: '',
    gender: 'boy',
    classification: 'pure-korean',
    isPureKorean: true,
    meaningDependsOnHanja: false,
    confidenceLevel: 'verified-statutory',
    ipaPhonetic: '[ha̠n.bjʌ̹ɭ]',
    lastReviewedDate: '2026-01-15',
    syllables: [
      {
        hangul: '한',
        hanja: '',
        romanization: 'Han',
        meaning: 'Archaic pure Korean for "Great, Grand, One"'
      },
      {
        hangul: '별',
        hanja: '',
        romanization: 'Byeol',
        meaning: 'Pure Korean for "Star"'
      }
    ],
    overallMeaning: 'Pure Native Korean for "One Great Star" or "The Brightest Luminary"; guiding light.',
    revisedRomanization: 'Han-byeol',
    mccuneReischauer: 'Han-byŏl',
    popularityRank: 45,
    isTrending: true,
    themes: ['Brightness', 'Strength', 'Modern'],
    syllableCount: 2,
    firstLetter: 'h',
    originStory: 'Combines archaic Korean "han" (meaning big, grand, or one central) with "byeol" (star). It envisions someone who shines brightly like the North Star, guiding others through darkness.',
    nicknames: ['Star-boy (별이)', 'Han-i (한이)'],
    famousNamesakes: [
      { name: 'Jason Han-byul', role: 'Singer & Broadcaster (Former Led Apple frontman)' }
    ],
    surnameCombinations: [
      { surnameSlug: 'kim', surnameEnglish: 'Kim', surnameHangul: '김', fullEnglish: 'Kim Han-byeol', fullHangul: '김한별', harmonyScore: 97, harmonyNote: 'Strong rhythmic beats with clear phonetic projection.' }
    ],
    relatedSlugs: ['ha-neul', 'maru', 'ro-woon'],
    references: [
      'National Institute of Korean Language (국립국어원)'
    ]
  },

  // 11. Da-som (Pure Korean - 다솜)
  {
    slug: 'da-som',
    english: 'Da-som (Dasom)',
    hangul: '다솜',
    hanja: '',
    gender: 'girl',
    classification: 'pure-korean',
    isPureKorean: true,
    meaningDependsOnHanja: false,
    confidenceLevel: 'verified-statutory',
    ipaPhonetic: '[ta̠.sʰo̞m]',
    lastReviewedDate: '2026-01-15',
    syllables: [
      {
        hangul: '다',
        hanja: '',
        romanization: 'Da',
        meaning: 'Archaic pure Korean root for "love and affection"'
      },
      {
        hangul: '솜',
        hanja: '',
        romanization: 'Som',
        meaning: 'Pure Korean for warm cotton softness'
      }
    ],
    overallMeaning: 'Archaic Pure Korean for "Cherished Love" (옛말 사랑); pure, unconditional tenderness.',
    revisedRomanization: 'Da-som',
    mccuneReischauer: 'Ta-som',
    popularityRank: 38,
    isTrending: false,
    themes: ['Grace', 'Love', 'Modern'],
    syllableCount: 2,
    firstLetter: 'd',
    originStory: '"Dasom" is the beautiful Middle Korean word for "love" (사랑). It carries a deep sense of poetic historical nostalgia, treasured by parents who want a deeply rooted native Korean name.',
    nicknames: ['Som-i (솜이)', 'Dada (다다)'],
    famousNamesakes: [
      { name: 'Kim Da-som', role: 'Actress and Singer, former member of iconic K-Pop group SISTAR' }
    ],
    surnameCombinations: [
      { surnameSlug: 'kim', surnameEnglish: 'Kim', surnameHangul: '김', fullEnglish: 'Kim Da-som', fullHangul: '김다솜', harmonyScore: 97, harmonyNote: 'Warm, affectionate, and melodically soft.' }
    ],
    relatedSlugs: ['bo-ram', 'a-reum', 'na-rae'],
    references: [
      'National Institute of Korean Language (국립국어원) Historical Korean Lexicon'
    ]
  },

  // 12. Ga-ram (Pure Korean - 가람)
  {
    slug: 'ga-ram',
    english: 'Ga-ram (Garam)',
    hangul: '가람',
    hanja: '',
    gender: 'unisex',
    classification: 'pure-korean',
    isPureKorean: true,
    meaningDependsOnHanja: false,
    confidenceLevel: 'verified-statutory',
    ipaPhonetic: '[ka̠.ɾa̠m]',
    lastReviewedDate: '2026-01-15',
    syllables: [
      {
        hangul: '가',
        hanja: '',
        romanization: 'Ga',
        meaning: 'First syllable of archaic pure Korean "Garam" (river)'
      },
      {
        hangul: '람',
        hanja: '',
        romanization: 'Ram',
        meaning: 'Flowing waters, eternal stream'
      }
    ],
    overallMeaning: 'Archaic Pure Korean for "River" or "Flowing Waters"; steady, life-giving, and continuous.',
    revisedRomanization: 'Ga-ram',
    mccuneReischauer: 'Ka-ram',
    popularityRank: 42,
    isTrending: false,
    themes: ['Nature', 'Wisdom', 'Modern'],
    syllableCount: 2,
    firstLetter: 'g',
    originStory: '"Garam" is the traditional pure Korean word for a wide river. Like a perennial river that nourishes the land on its journey to the sea, this name signifies constant growth, adaptability, and life-giving energy.',
    nicknames: ['Ram-i (람이)', 'Gara (가라)'],
    famousNamesakes: [
      { name: 'Kim Ga-ram', role: 'South Korean singer and performer' }
    ],
    surnameCombinations: [
      { surnameSlug: 'park', surnameEnglish: 'Park', surnameHangul: '박', fullEnglish: 'Park Ga-ram', fullHangul: '박가람', harmonyScore: 95, harmonyNote: 'Strong rhythmic opening flowing into a resonant liquid final.' }
    ],
    relatedSlugs: ['ba-da', 'ha-neul', 'maru'],
    references: [
      'National Institute of Korean Language (국립국어원)'
    ]
  },

  // 13. Na-rae (Pure Korean - 나래)
  {
    slug: 'na-rae',
    english: 'Na-rae (Narae)',
    hangul: '나래',
    hanja: '',
    gender: 'girl',
    classification: 'pure-korean',
    isPureKorean: true,
    meaningDependsOnHanja: false,
    confidenceLevel: 'verified-statutory',
    ipaPhonetic: '[na̠.ɾɛ̝]',
    lastReviewedDate: '2026-01-15',
    syllables: [
      {
        hangul: '나',
        hanja: '',
        romanization: 'Na',
        meaning: 'I / Myself, emerging'
      },
      {
        hangul: '래',
        hanja: '',
        romanization: 'Rae',
        meaning: 'Wing of freedom, soaring'
      }
    ],
    overallMeaning: 'Pure Native Korean for "Wings"; soaring high with freedom, creativity, and boundless imagination.',
    revisedRomanization: 'Na-rae',
    mccuneReischauer: 'Na-rae',
    popularityRank: 48,
    isTrending: true,
    themes: ['Grace', 'Brightness', 'Modern'],
    syllableCount: 2,
    firstLetter: 'n',
    originStory: '"Narae" is an ancient poetic Korean term for wings. It represents a spirit unburdened by limits, capable of flying toward grand dreams with grace and courage.',
    nicknames: ['Rae-ya (래야)', 'Nana (나나)'],
    famousNamesakes: [
      { name: 'Park Na-rae', role: 'Celebrated Entertainer and Baeksang Arts Award Winner' }
    ],
    surnameCombinations: [
      { surnameSlug: 'park', surnameEnglish: 'Park', surnameHangul: '박', fullEnglish: 'Park Na-rae', fullHangul: '박나래', harmonyScore: 97, harmonyNote: 'Celebrated cultural combination with energetic cadence.' }
    ],
    relatedSlugs: ['da-som', 'bo-ram', 'a-reum'],
    references: [
      'National Institute of Korean Language (국립국어원)'
    ]
  },

  // 14. Maru (Pure Korean - 마루)
  {
    slug: 'maru',
    english: 'Maru (Sanmaru)',
    hangul: '마루',
    hanja: '',
    gender: 'boy',
    classification: 'pure-korean',
    isPureKorean: true,
    meaningDependsOnHanja: false,
    confidenceLevel: 'verified-statutory',
    ipaPhonetic: '[ma̠.ɾu]',
    lastReviewedDate: '2026-01-15',
    syllables: [
      {
        hangul: '마',
        hanja: '',
        romanization: 'Ma',
        meaning: 'Mountain peak summit'
      },
      {
        hangul: '루',
        hanja: '',
        romanization: 'Ru',
        meaning: 'Dignified ridge, pavilion'
      }
    ],
    overallMeaning: 'Pure Native Korean for "Mountain Ridge", "Summit", or "Top"; reaching the pinnacle of excellence.',
    revisedRomanization: 'Maru',
    mccuneReischauer: 'Maru',
    popularityRank: 52,
    isTrending: false,
    themes: ['Strength', 'Nature', 'Modern'],
    syllableCount: 2,
    firstLetter: 'm',
    originStory: '"Maru" in native Korean denotes the highest crest or ridge of a mountain (san-maru) or the central wooden floor of a traditional Hanok house. It represents nobility, centrality, and reaching the pinnacle of life.',
    nicknames: ['Maru-ya (마루야)', 'Ru-ru (루루)'],
    famousNamesakes: [
      { name: 'Kang Ma-ru', role: 'Iconic protagonist in K-Drama "The Innocent Man"' }
    ],
    surnameCombinations: [
      { surnameSlug: 'choi', surnameEnglish: 'Choi', surnameHangul: '최', fullEnglish: 'Choi Maru', fullHangul: '최마루', harmonyScore: 96, harmonyNote: 'Clean consonant-vowel alternating flow.' }
    ],
    relatedSlugs: ['han-byeol', 'ro-woon', 'ga-ram'],
    references: [
      'National Institute of Korean Language (국립국어원)'
    ]
  },

  // 15. Ro-woon (Pure Korean - 로운)
  {
    slug: 'ro-woon',
    english: 'Ro-woon (Rowoon)',
    hangul: '로운',
    hanja: '',
    gender: 'boy',
    classification: 'pure-korean',
    isPureKorean: true,
    meaningDependsOnHanja: false,
    confidenceLevel: 'verified-statutory',
    ipaPhonetic: '[ɾo̞.un]',
    lastReviewedDate: '2026-01-15',
    syllables: [
      {
        hangul: '로',
        hanja: '',
        romanization: 'Ro',
        meaning: 'From Korean adjective suffix "-roun" (possessing quality of)'
      },
      {
        hangul: '운',
        hanja: '',
        romanization: 'Woon',
        meaning: 'Fortune, cloud, harmonious flow'
      }
    ],
    overallMeaning: 'Pure Native Korean derived from "Seulgi-roun" (wise and thoughtful) or "Pyeonghwa-roun" (peaceful).',
    revisedRomanization: 'Ro-un',
    mccuneReischauer: 'Ro-un',
    popularityRank: 15,
    isTrending: true,
    themes: ['Wisdom', 'Grace', 'Modern', 'K-Pop'],
    syllableCount: 2,
    firstLetter: 'r',
    originStory: 'Taken from pure Korean descriptive adjectives like "ji-he-roun" (wise) and "jo-heun" (good). It symbolizes someone who naturally brings warmth, wisdom, and peace to everyone around them.',
    nicknames: ['Ronie (로니)', 'Woon-i (운이)'],
    famousNamesakes: [
      { name: 'Rowoon (Kim Seok-woo)', role: 'Top Korean Actor and Star (The King’s Affection, Extraordinary You)' }
    ],
    surnameCombinations: [
      { surnameSlug: 'kim', surnameEnglish: 'Kim', surnameHangul: '김', fullEnglish: 'Kim Ro-woon', fullHangul: '김로운', harmonyScore: 98, harmonyNote: 'Ultra-modern phonetic resonance and stage presence.' }
    ],
    relatedSlugs: ['han-byeol', 'min-jun', 'ha-neul'],
    references: [
      'Supreme Court Electronic Family Relationship Registration System'
    ]
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
