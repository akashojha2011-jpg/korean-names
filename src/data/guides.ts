export interface GuideArticle {
  slug: string;
  title: string;
  koreanTitle: string;
  subtitle: string;
  category: 'naming-culture' | 'linguistics' | 'history' | 'practical-guide';
  readTime: string;
  publishedDate: string;
  excerpt: string;
  content: {
    sectionHeading: string;
    paragraphs: string[];
    callout?: {
      title: string;
      body: string;
    };
  }[];
  references: {
    title: string;
    source: string;
    url?: string;
  }[];
  relatedGuides: string[]; // slugs
}

export const EDUCATIONAL_GUIDES: GuideArticle[] = [
  {
    slug: 'how-korean-names-work',
    title: 'Anatomy of a Korean Name: Structure, Surnames, and Syllables',
    koreanTitle: '한국 이름의 구조와 원리',
    subtitle: 'Understanding why Korean family names come first, how two-syllable given names function, and the historic tradition of generational markers (항렬).',
    category: 'naming-culture',
    readTime: '6 min read',
    publishedDate: 'Updated 2026',
    excerpt: 'Explore the fundamental structure of Korean names, including the universal family-name-first order, the mechanics of two-syllable given names, and the fading yet fascinating practice of Dollimja generational markers.',
    content: [
      {
        sectionHeading: '1. Family Name First: The Collective Priority',
        paragraphs: [
          'In Korean culture, a person\'s family name (성 - Seong) invariably precedes their given name (이름 - Ireum). When introducing oneself as "Kim Min-jun" (김민준), "Kim" is the ancestral surname inherited through the paternal lineage, while "Min-jun" represents the personal given name.',
          'This order reflects traditional Confucian philosophy, which places lineage, filial piety, and collective family identity above the individual. While many Koreans adopt Western name order ("Min-jun Kim") in international business settings, native Korean conventions and official national registries maintain the family name as the initial character.',
        ],
        callout: {
          title: 'Did You Know?',
          body: 'Korean married couples do not share surnames. A Korean woman historically keeps her maiden surname upon marriage, as her surname reflects her bloodline and ancestral clan (본관), which remains unchanged throughout life.',
        },
      },
      {
        sectionHeading: '2. The Standard Two-Syllable Given Name',
        paragraphs: [
          'The vast majority of modern Korean given names consist of exactly two syllables, making the typical full Korean name a three-syllable unit (e.g., 이-민-호, Lee Min-ho).',
          'Each syllable in a traditional Korean name is a distinct semantic unit, typically representing an individual Hanja (Chinese logogram) with its own specific dictionary definition. For instance, in the name "Do-yun" (도윤), "Do" (道) may signify "The Righteous Path," while "Yun" (潤) signifies "Abundance and Soft Moisture."',
          'While single-syllable given names (such as "Hyun" 賢 or "Joon" 俊) and three-syllable native names exist, they remain stylistic exceptions representing fewer than 5% of registered births according to the Supreme Court of Korea.',
        ],
      },
      {
        sectionHeading: '3. Dollimja (돌림자): Generational Markers in Family Lineage',
        paragraphs: [
          'Historically, many Korean clans adhered to the practice of Dollimja (돌림자, also known as Hangnyeol / 항렬). In this naming convention, siblings and same-generation cousins of the same paternal clan share one identical syllable in their given names.',
          'For example, three brothers in a family might be named Min-jun (민준), Min-hyuk (민혁), and Min-seok (민석), where "Min" serves as the generational anchor determined centuries earlier by clan genealogical registers (족보 - Jokbo).',
          'While fewer modern urban families strictly enforce Dollimja today—often opting for individual aesthetic preference—it remains deeply revered in clan councils and rural ancestral households across South Korea.',
        ],
      },
      {
        sectionHeading: '4. Legal Name Regulations in Modern South Korea',
        paragraphs: [
          'Under contemporary South Korean civil law, parents may register a child\'s given name up to five Hangul characters in length (excluding the surname), although names longer than two syllables remain uncommon.',
          'Furthermore, any Hanja characters selected for a child\'s birth certificate must appear on the Supreme Court\'s official registry of Hanja for Personal Names (대법원 인명용 한자). This registry was created in 1991 to prevent administrative errors caused by extremely rare, obscure, or non-standard characters.',
        ],
      },
    ],
    references: [
      { title: 'Civil Act of the Republic of Korea (Family Register Regulations)', source: 'Ministry of Justice of South Korea' },
      { title: 'Historical Development of Korean Clan Surnames and Genealogies', source: 'National Institute of Korean History' },
      { title: 'Statistics of Registered Given Names', source: 'Supreme Court of Korea Family Registry System (2024–2025)' },
    ],
    relatedGuides: ['hangul-vs-hanja', 'korean-surnames-and-clans', 'how-to-choose-a-korean-name'],
  },
  {
    slug: 'hangul-vs-hanja',
    title: 'Hangul vs. Hanja: Why One Korean Name Can Have 50 Different Meanings',
    koreanTitle: '한글과 한자: 동음이의어와 작명의 본질',
    subtitle: 'The linguistic distinction between phonetic Hangul pronunciation and Sino-Korean Hanja characters in personal names.',
    category: 'linguistics',
    readTime: '7 min read',
    publishedDate: 'Updated 2026',
    excerpt: 'Discover why hearing a Korean name spoken aloud tells only half the story. Learn how Sino-Korean homophones operate, how the Supreme Court regulates personal Hanja, and how parents choose specific characters for their child.',
    content: [
      {
        sectionHeading: '1. The Homophone Phenomenon in Korean Phonetics',
        paragraphs: [
          'Korean is a phonetically concise language. A single spoken syllable in Hangul can correspond to dozens of completely unrelated Hanja logograms, each with its own radical, stroke order, and historical definition.',
          'Consider the common name syllable "Min" (민). In Hangul, it is spelled with three phonemes: ㅁ (m) + ㅣ (i) + ㄴ (n). However, in the Supreme Court\'s registry of personal names, there are over 25 distinct Hanja characters read as "Min":',
          '• 敏: Quick, clever, and intellectually sharp\n• 玟: Precious jade stone\n• 旻: Autumn sky, celestial heaven\n• 愍: Compassion and mercy toward others\n• 珉: Pure stone resembling jade',
          'Consequently, two individuals who are both named "Min-jun" (민준) may possess radically different written names on their civil registries, embodying entirely different hopes chosen by their respective parents.',
        ],
        callout: {
          title: 'Key Linguistic Distinction',
          body: 'Hangul (한글) is a purely phonetic alphabet created by King Sejong the Great in 1443. Hanja (한자) refers to Chinese characters that were historically borrowed and adapted into the Korean linguistic system. A name\'s sound is written in Hangul; its deep philosophical root is captured in Hanja.',
        },
      },
      {
        sectionHeading: '2. The Supreme Court Registry of Hanja for Personal Names',
        paragraphs: [
          'Before 1991, South Korean parents could legally choose any Chinese character found in historical dictionaries. However, typographical confusion and bureaucratic friction led the Supreme Court of Korea to establish the Official Table of Hanja for Personal Names (대법원 인명용 한자).',
          'Originally containing 2,731 characters, the list has been methodically expanded over three decades and currently encompasses over 8,400 legally approved Hanja characters.',
          'If parents wish to register a character outside this recognized catalog, the registry office requires the name to be filed exclusively in Hangul without Chinese character representation.',
        ],
      },
      {
        sectionHeading: '3. Do All Korean Names Have Hanja?',
        paragraphs: [
          'No. A major misconception among non-Koreans is that every Korean name must possess Hanja characters. In reality, a significant portion of modern Korean names are "Pure Korean" (순우리말 - Soon-woori-mal) names.',
          'Names such as Haneul (하늘, "Sky"), Bada (바다, "Ocean"), Areum (아름, "Beauty"), and Iseul (이슬, "Morning Dew") are derived directly from native Korean vocabulary and have no corresponding Hanja. They are officially registered in phonetic Hangul alone.',
        ],
      },
    ],
    references: [
      { title: 'Table of Hanja for Personal Names (인명용 한자표)', source: 'Supreme Court of the Republic of Korea, Rule No. 2978' },
      { title: 'Sino-Korean Phonology and Lexical Development', source: 'National Institute of Korean Language (국립국어원)' },
    ],
    relatedGuides: ['how-korean-names-work', 'pure-korean-names', 'how-to-choose-a-korean-name'],
  },
  {
    slug: 'pure-korean-names',
    title: 'Pure Korean (Soon-woori-mal) Names: The Modern Renaissance',
    koreanTitle: '순우리말 이름: 한글의 고유한 아름다움',
    subtitle: 'Exploring native Korean given names that bypass Hanja in favor of poetic, nature-inspired indigenous words.',
    category: 'naming-culture',
    readTime: '5 min read',
    publishedDate: 'Updated 2026',
    excerpt: 'Learn about the growing movement of native Korean names (Soon-woori-mal). Discover popular unisex choices like Haneul, Areum, and Boram, their cultural significance, and legal registration nuances.',
    content: [
      {
        sectionHeading: '1. What are Soon-woori-mal (순우리말) Names?',
        paragraphs: [
          'For centuries during the Goryeo and Joseon dynasties, aristocratic naming culture was dominated by classical Chinese characters (Hanja). Commoners who did not possess scholarly educations often used native Korean monikers, but formal records were invariably kept in Sino-Korean script.',
          'Following the creation of the Hangul alphabet and particularly during the late 20th-century cultural awakening, South Korean linguists and modern parents began embracing "Soon-woori-mal" (순우리말)—authentic, native Korean vocabulary devoid of Chinese character roots.',
          'These names draw inspiration directly from the natural landscape, moral virtues, and poetic indigenous expressions.',
        ],
      },
      {
        sectionHeading: '2. Beloved Examples of Native Korean Names',
        paragraphs: [
          'Some of the most cherished pure Korean names include:',
          '• 하늘 (Haneul): "Sky" or "Heavens," symbolizing expansive vision and pure serenity.\n• 바다 (Bada): "Ocean" or "Sea," representing a broad, deep heart capable of embracing the world.\n• 아름 (Areum): Derived from "areumdapda" (아름답다), meaning "Beauty" and natural grace.\n• 보람 (Boram): "Fruitful worth" or "Fulfillment," embodying a purposeful and meaningful life.\n• 이슬 (Iseul): "Morning dew," symbolizing pristine clarity and unblemished character.\n• 온유 (Onyu): "Gentle warmth" and peaceful demeanor.\n• 한별 (Hanbyeol): "One bright star," signifying guidance and luminous distinction.',
        ],
        callout: {
          title: 'Unisex Fluidity',
          body: 'A unique characteristic of pure Korean names is their inherent gender neutrality. Unlike many traditional Hanja pairings that carry distinctly masculine or feminine connotations, names like Haneul, Bada, and Byeol are embraced equally for baby boys and girls.',
        },
      },
      {
        sectionHeading: '3. Legal Considerations for Pure Korean Names',
        paragraphs: [
          'Under the Republic of Korea\'s civil registry guidelines, native Korean names are recorded on the family register (가족관계등록부) with the Hanja field left blank. When applying for foreign visas or passports, the name is romanized strictly from its phonetic Hangul spelling.',
        ],
      },
    ],
    references: [
      { title: 'Dictionary of Native Korean Vocabulary and Cultural Expressions', source: 'National Institute of Korean Language' },
      { title: 'Trend Analysis of Given Names Registered in the 21st Century', source: 'Supreme Court Registry Statistics' },
    ],
    relatedGuides: ['hangul-vs-hanja', 'how-to-choose-a-korean-name'],
  },
  {
    slug: 'korean-surnames-and-clans',
    title: 'Korean Family Names and the Bon-gwan (본관) Clan System',
    koreanTitle: '한국의 성씨와 본관 제도: 김·이·박의 기원',
    subtitle: 'Why over half of all South Koreans share just five surnames, and how ancestral clan seats preserve unique heritage.',
    category: 'history',
    readTime: '8 min read',
    publishedDate: 'Updated 2026',
    excerpt: 'Uncover the fascinating history behind Korean surnames. Learn why millions share the names Kim, Lee, Park, Choi, and Jung, and how the ancient Bon-gwan clan seat distinguishes different genealogical lines.',
    content: [
      {
        sectionHeading: '1. The Concentration of Korean Family Names',
        paragraphs: [
          'A first-time visitor to South Korea will quickly notice an intriguing demographic reality: nearly every other person appears to be named Kim, Lee, or Park.',
          'According to official national census data released by Statistics Korea (통계청), approximately 54% of South Korea\'s entire population shares one of just five ancestral surnames:',
          '1. 김 (Kim) – ~21.5% of the national population\n2. 이 (Lee / Yi) – ~14.7%\n3. 박 (Park / Bak) – ~8.4%\n4. 최 (Choi / Choe) – ~4.7%\n5. 정 (Jung / Jeong) – ~4.4%',
          'Altogether, fewer than 300 distinct surnames exist across the entire Korean peninsula—in stark contrast to countries like Japan, which boasts over 100,000 distinct family names.',
        ],
      },
      {
        sectionHeading: '2. What is Bon-gwan (본관)? The Ancestral Clan Seat',
        paragraphs: [
          'Because millions of citizens share the identical surname "Kim," the surname alone is insufficient to establish kinship. Korean society historically solved this through the Bon-gwan (본관) system—the ancestral clan seat.',
          'A person\'s Bon-gwan designates the geographic origin where the clan\'s founding ancestor established their lineage. For example, two individuals with the surname Kim may belong to entirely different bloodlines:',
          '• Gimhae Kim (김해 김씨): Descended from King Suro, the legendary 1st-century founder of the ancient Gaya Confederacy.\n• Gyeongju Kim (경주 김씨): Traced to the royal ruling house of the ancient Silla Kingdom.\n• Andong Kim (안동 김씨): A powerful scholar-bureaucrat aristocratic clan during the late Joseon period.',
          'Traditionally, Koreans sharing both the same surname AND the same Bon-gwan considered one another extended family members belonging to the same genealogical book (족보 - Jokbo).',
        ],
        callout: {
          title: 'Historical Marriage Laws',
          body: 'Until 1997, South Korean civil law strictly prohibited marriage between men and women sharing the same surname and same Bon-gwan (동성동본 금혼). The Constitutional Court ruled this traditional restriction unconstitutional in 1997, modernizing marriage rights while keeping clan ancestry as a cultural touchstone.',
        },
      },
      {
        sectionHeading: '3. Why Did Korean Surnames Become So Concentrated?',
        paragraphs: [
          'During the Three Kingdoms period and early Goryeo dynasty, only royalty and top nobility possessed surnames. Over the centuries, particularly during the late Joseon dynasty and the 1894 Gabo Reforms, hereditary class divisions were dismantled.',
          'When commoners and formerly enslaved individuals gained the legal right to register family names, they overwhelmingly adopted prestigious aristocratic surnames associated with royalty and illustrious scholars, notably Kim, Lee, and Park.',
        ],
      },
    ],
    references: [
      { title: 'Population and Housing Census: Surname and Clan Statistics', source: 'Statistics Korea (통계청)' },
      { title: 'A History of Korean Social Structure and Clan Organization', source: 'Academy of Korean Studies' },
    ],
    relatedGuides: ['how-korean-names-work', 'how-to-choose-a-korean-name'],
  },
  {
    slug: 'how-to-choose-a-korean-name',
    title: 'How to Choose an Authentic Korean Name: Principles and Harmony',
    koreanTitle: '한국 이름 짓기의 원칙: 성명학과 음양오행',
    subtitle: 'A practical, respectful guide for parents, multicultural families, and learners seeking a culturally sound Korean name.',
    category: 'practical-guide',
    readTime: '7 min read',
    publishedDate: 'Updated 2026',
    excerpt: 'A comprehensive step-by-step guide to choosing a meaningful Korean name. Learn how Seongmyeonghak onomastics, five-element harmony, phonetic flow, and cultural connotations interact.',
    content: [
      {
        sectionHeading: '1. Clarify the Naming Philosophy: Sino-Korean vs. Pure Korean',
        paragraphs: [
          'The first step in choosing a Korean name is determining whether you wish to select a Sino-Korean name (grounded in Hanja logograms) or a Pure Korean name (drawn from native vocabulary).',
          'Sino-Korean names allow parents to embed precise philosophical aspirations through individual character selections—such as pairing "Virtue" (賢) with "Wisdom" (智). Pure Korean names offer soft, lyrical, nature-focused imagery that feels modern, approachable, and universally easy to pronounce.',
        ],
      },
      {
        sectionHeading: '2. Evaluating Phonetic Harmony with the Family Surname',
        paragraphs: [
          'In Korean phonology (발음오행), how the surname flows into the given name is paramount:',
          '• Beware of harsh consonant clusters: When a surname ends in an unreleased consonant stop (받침), such as "Park" (박) or "Baek" (백), following it with another harsh consonant (like ㄱ, ㄷ, ㅂ) can create uncomfortable vocal tension.',
          '• Consider natural liaison (연음): Surnames ending in nasals like "Kim" (김) or "Jung" (정) harmonize beautifully with initial open vowels (아, 은, 우, 예) or soft liquids (ㄹ).',
          '• Test in both languages: For international or multicultural families, select names that preserve authentic Korean meaning while remaining easily pronounceable in English without unintended phonetic puns.',
        ],
      },
      {
        sectionHeading: '3. Principles of Seongmyeonghak (성명학)',
        paragraphs: [
          'Traditional Korean professional namers (작명가 - Jakmyeongga) practice Seongmyeonghak (the scholarly study of names). Key traditional considerations include:',
          '• Yin-Yang Stroke Balance (음양 획수): Ensuring the total stroke counts of the surname and given name characters balance even (Yin) and odd (Yang) numbers.',
          '• Five Elements (오행 - Wood, Fire, Earth, Metal, Water): Harmonizing characters whose elemental associations complement the child\'s astrological birth chart (사주팔자 - Saju).',
          'While many modern parents prioritize aesthetics and practical clarity over rigid fortune-telling rules, awareness of these traditions enriches the depth and cultural respect behind any chosen name.',
        ],
        callout: {
          title: 'Golden Rule of Naming',
          body: 'Avoid choosing names simply by translating English words directly into Korean or borrowing obscure historical titles. An authentic Korean name feels natural to native speakers in contemporary Seoul, avoiding archaic, comedic, or grandiose overtones.',
        },
      },
    ],
    references: [
      { title: 'The Principles of Korean Onomastics (성명학 개론)', source: 'Korean Naming Culture Society' },
      { title: 'Linguistic Analysis of Modern Naming Trends in Seoul', source: 'The Korean Language and Literature Journal' },
    ],
    relatedGuides: ['how-korean-names-work', 'hangul-vs-hanja', 'korean-pronunciation-guide'],
  },
  {
    slug: 'korean-pronunciation-guide',
    title: 'Korean Pronunciation & Romanization Guide: Sounds, Letters, and Rules',
    koreanTitle: '한국어 이름의 발음과 로마자 표기법',
    subtitle: 'Master the phonetic sounds of Korean syllables, understand Revised Romanization vs. McCune-Reischauer, and avoid common pronunciation mistakes.',
    category: 'linguistics',
    readTime: '6 min read',
    publishedDate: 'Updated 2026',
    excerpt: 'Master the accurate pronunciation of Korean names. Understand why "Jeong" sounds like "Jung", why "Park" is written "Bak", and how batchim consonant rules alter spoken vowels.',
    content: [
      {
        sectionHeading: '1. Understanding the Romanization Disconnect',
        paragraphs: [
          'One of the most confusing aspects of Korean names for non-speakers is the discrepancy between English spelling and actual Korean pronunciation.',
          'For instance, the surname written in English as "Park" is pronounced in Korean as [Bak] (박), with no "r" sound whatsoever. Similarly, the surname "Choi" is pronounced closer to [Chwe] (최).',
          'These differences stem from historical romanization traditions, personal passport preferences, and changes in national transcription systems over the decades.',
        ],
      },
      {
        sectionHeading: '2. The Two Major Romanization Systems',
        paragraphs: [
          '• Revised Romanization of Korean (국어의 로마자 표기법): Enacted by South Korea\'s Ministry of Culture in 2000, this is the official national standard used for road signs, government documents, and modern dictionaries. It replaces older apostrophes and breves with clear vowel combinations (e.g., ㅓ is written as "eo", ㅡ as "eu").',
          '• McCune-Reischauer (MR): Created in 1937, this system relies heavily on diacritics (like ŏ and ŭ) and remains widely used in Western academic, historical, and library contexts.',
        ],
        callout: {
          title: 'Pronunciation Tip',
          body: 'When you see "eo" in a modern Korean romanized name (such as "Seo-jun" or "Hyeon"), it is NOT pronounced like "ee-oh". It represents the single open vowel sound [ʌ], similar to the "u" in the English word "sun" or "cup".',
        },
      },
      {
        sectionHeading: '3. Key Consonants to Master',
        paragraphs: [
          '• Plain vs. Aspirated vs. Tense: Korean distinguishes three levels of stop consonants (e.g., ㄱ /g, k/, ㅋ /kʰ/, ㄲ /k\'/). Given names often feature gentle, soft plain consonants that flow smoothly into subsequent syllables.',
          '• The Liquid Consonant (ㄹ - Rieul): At the start of a syllable or between vowels, ㄹ produces a light flap sound similar to the Spanish "r" or the flap in the American pronunciation of "water". At the end of a syllable (받침), it produces a clear "l" sound.',
        ],
      },
    ],
    references: [
      { title: 'The Revised Romanization of Korean', source: 'National Institute of Korean Language (국립국어원), Ministry of Culture, Sports and Tourism Notification No. 2000-8' },
      { title: 'Standard Korean Phonological Rules (표준어 규정: 표준 발음법)', source: 'National Institute of Korean Language' },
    ],
    relatedGuides: ['how-korean-names-work', 'how-to-choose-a-korean-name'],
  },
];

export function getGuideBySlug(slug: string): GuideArticle | undefined {
  return EDUCATIONAL_GUIDES.find((g) => g.slug === slug);
}
