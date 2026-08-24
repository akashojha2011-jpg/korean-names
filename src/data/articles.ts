import type { Article } from '../types/article';

export const ARTICLES: Article[] = [
  // 1. Introduction to Korean Names
  {
    slug: 'introduction-to-korean-names',
    title: "What's in a Korean name? Introduction to how Korean names work",
    subtitle: "Understanding family surnames, Sino-Korean Hanja, generation syllables (Dollimja), and modern pure Korean names.",
    category: 'basics',
    categoryLabel: 'The Basics of Korean Names',
    readTime: '10 min read',
    publishedDate: '2026-08-15',
    author: 'Min-Jun Park (Culture Editor)',
    summary: 'A comprehensive starter guide explaining the order of Korean names, family lineage, Sino-Korean Hanja logograms, and modern naming trends in South Korea.',
    toc: [
      { id: 'structure', heading: '1. Korean Name Structure (Surname First)', level: 2 },
      { id: 'hanja', heading: '2. The Role of Sino-Korean Hanja (漢字)', level: 2 },
      { id: 'dollimja', heading: '3. Generation Syllables (Dollimja 돌림자)', level: 2 },
      { id: 'pure-korean', heading: '4. Native Pure Korean Names (Sun-uri-mal)', level: 2 },
      { id: 'phonetic-rules', heading: '5. Phonetic Harmony & Five Elements Philosophy', level: 2 },
      { id: 'conclusion', heading: '6. Summary & Advice for Parents', level: 2 }
    ],
    sections: [
      {
        id: 'structure',
        heading: '1. Korean Name Structure (Surname First)',
        content: `
          <p>Unlike Western naming conventions where the given name precedes the family name, traditional Korean names place the family surname first, followed by a two-syllable given name (e.g. <strong>Kim Min-jun</strong>, where <em>Kim</em> is the surname and <em>Min-jun</em> is the given name).</p>
          <p>Over 85% of modern Korean given names consist of exactly two syllables, though one-syllable (외자 - Oeja) names like <em>Bit</em> (빛) and <em>Ren</em> (련) are also cherished for their punchy elegance.</p>
          <p>When married in Korea, individuals legally retain their birth surname throughout life. Children traditionally inherit their father's surname, though legal reforms now allow parents to register either surname upon mutual agreement.</p>
        `
      },
      {
        id: 'hanja',
        heading: '2. The Role of Sino-Korean Hanja (漢字)',
        content: `
          <p>While everyday writing in South Korea uses the phonetic Hangul alphabet (한글), parents select exact Sino-Korean Hanja logograms (漢字) when registering a child's birth at local registry offices.</p>
          <p>For example, two children named <strong>Min-jun</strong> (민준) sound identical, but one may be written with 敏 (quick, clever) and 俊 (handsome, elite), while another uses 民 (people) and 准 (level, standard). The Supreme Court of Korea maintains an official list of over 8,000 approved Hanja characters allowed for human names (인명용 한자표).</p>
        `
      },
      {
        id: 'dollimja',
        heading: '3. Generation Syllables (Dollimja 돌림자)',
        content: `
          <p>Traditionally, Korean clans maintain a generation book (족보 - Jokbo) specifying a shared generation syllable (돌림자 - Dollimja) for all siblings and cousins of the same branch.</p>
          <p>For instance, in a family using <strong>Min</strong> (민) as their generation marker, two brothers might be named <strong>Min-jun</strong> and <strong>Min-seo</strong>. While less strictly mandated in modern urban families, generation naming remains a proud ancestral link.</p>
        `
      },
      {
        id: 'pure-korean',
        heading: '4. Native Pure Korean Names (Sun-uri-mal)',
        content: `
          <p>In recent decades, modern parents frequently choose "Pure Korean" (순우리말 - Sun-uri-mal) names that do not use Chinese Hanja logograms. These names draw directly from native Korean vocabulary, nature, and poetic concepts:</p>
          <ul>
            <li><strong>Haneul (하늘)</strong> — Meaning "Clear Blue Sky", representing expansive freedom.</li>
            <li><strong>Bada (바다)</strong> — Meaning "Ocean", representing depth and tranquility.</li>
            <li><strong>Iseul (이슬)</strong> — Meaning "Dewdrop", signifying purity and morning freshness.</li>
            <li><strong>Bora (보라)</strong> — Meaning "Purple", signifying artistic warmth.</li>
          </ul>
        `
      },
      {
        id: 'phonetic-rules',
        heading: '5. Phonetic Harmony & Five Elements Philosophy',
        content: `
          <p>Traditional Korean naming philosophers (작명가 - Jakmyeong-ga) evaluate names according to the Five Elements (오행 - O-haeng: Metal, Wood, Water, Fire, Earth) and Yin-Yang balance (음양). The consonant sounds of the surname and given name are harmonized to avoid harsh vocal clashes and promote health, prosperity, and emotional balance throughout life.</p>
        `
      },
      {
        id: 'conclusion',
        heading: '6. Summary & Advice for Parents',
        content: `
          <p>Korean naming blends ancient philosophical harmony, ancestral family respect, and lyrical phonetic beauty. Whether selecting traditional Hanja or modern soft phonetics, evaluating meaning alongside surname harmony ensures a beautiful name that lasts a lifetime.</p>
        `
      }
    ],
    relatedNameSlugs: ['min-jun', 'seo-ah', 'ha-neul']
  },

  // 2. Mixed Nationality Couple Names
  {
    slug: 'mixed-nationality-korean-names',
    title: 'The popular names for children of mixed nationality couples',
    subtitle: 'Choosing Korean baby names that sound elegant in both Korean and Western languages.',
    category: 'basics',
    categoryLabel: 'The Basics of Korean Names',
    readTime: '9 min read',
    publishedDate: '2026-08-10',
    author: 'Seo-Ah Lee',
    summary: 'Discover cross-cultural Korean baby names like Eugene, Yuna, Mina, Daniel, and Hana that transition effortlessly between Korean and Western speech.',
    toc: [
      { id: 'why-bilingual', heading: '1. Why Bilingual Phonetics Matter', level: 2 },
      { id: 'top-bilingual-girls', heading: '2. Top Cross-Cultural Girl Names', level: 2 },
      { id: 'top-bilingual-boys', heading: '3. Top Cross-Cultural Boy Names', level: 2 },
      { id: 'spelling-tips', heading: '4. Passport & Registration Standards', level: 2 }
    ],
    sections: [
      {
        id: 'why-bilingual',
        heading: '1. Why Bilingual Phonetics Matter',
        content: `
          <p>For multicultural families living in Korea or abroad, finding a name that is easy to pronounce in both Korean and English/European languages ensures a smooth social identity across both cultural spheres.</p>
        `
      },
      {
        id: 'top-bilingual-girls',
        heading: '2. Top Cross-Cultural Girl Names',
        content: `
          <ul>
            <li><strong>Yuna (유나)</strong> — Sounds identical to Western "Yuna/Juna", meaning superior serene blossom in Korean (優奈).</li>
            <li><strong>Hana (하나)</strong> — Means "one/first" in Korean and "blossom" in Arabic/Japanese.</li>
            <li><strong>Mina (미나)</strong> — Universal girl name meaning exquisite beauty (美娜).</li>
            <li><strong>Su-ah (수아)</strong> — Soft vocalic cadence easily written as "Sua/Suah".</li>
            <li><strong>Lina (리나 / 리아)</strong> — Modern soft Korean flow with global appeal.</li>
          </ul>
        `
      },
      {
        id: 'top-bilingual-boys',
        heading: '3. Top Cross-Cultural Boy Names',
        content: `
          <ul>
            <li><strong>Eugene (유진 / Yu-jin)</strong> — Means "precious truth" in Korean (有眞) and "well-born" in Greek.</li>
            <li><strong>Daniel (다니엘)</strong> — Highly popular among Korean multicultural families.</li>
            <li><strong>Ji-woo (지우)</strong> — Easy international flow written as "Jiwoo" or "Jiwon".</li>
            <li><strong>Ian (이안)</strong> — Short 2-syllable name working smoothly in both English and Korean.</li>
          </ul>
        `
      },
      {
        id: 'spelling-tips',
        heading: '4. Passport & Registration Standards',
        content: `
          <p>Ensure the English spelling uses standard Revised Romanization without unusual hyphenation so birth certificates match across passports globally.</p>
        `
      }
    ],
    relatedNameSlugs: ['yuna', 'ji-woo', 'su-ah']
  },

  // 3. Comparing Korean Names in 1912 vs Modern
  {
    slug: 'comparing-korean-names-1912-vs-modern',
    title: 'Comparing Korean Names in 1912 with Modern Names',
    subtitle: 'How Korean naming trends evolved from Joseon Dynasty traditions through modern 2026 registry stats.',
    category: 'basics',
    categoryLabel: 'The Basics of Korean Names',
    readTime: '9 min read',
    publishedDate: '2026-08-08',
    author: 'Dr. Sung-Hoon Choi',
    summary: 'An empirical historical comparison between 1912 Japanese colonial-era censuses and modern 2026 Seoul baby registries.',
    toc: [
      { id: 'historical-context', heading: '1. Historical Context of 1912 Names', level: 2 },
      { id: '1912-popular-names', heading: '2. Top Names in 1912', level: 2 },
      { id: 'modern-shift', heading: '3. The Shift to Soft Modern Vocalics in 2026', level: 2 }
    ],
    sections: [
      {
        id: 'historical-context',
        heading: '1. Historical Context of 1912 Names',
        content: `
          <p>In 1912, following the end of the Joseon Dynasty, Korean names heavily reflected agricultural agrarian life, filial duty, and traditional Confucian virtues.</p>
        `
      },
      {
        id: '1912-popular-names',
        heading: '2. Top Names in 1912',
        content: `
          <p>For men in 1912, names ending in <em>-sub</em> (섭), <em>-sik</em> (식), and <em>-do</em> (도) dominated. For women, names ending in <em>-ja</em> (자 - 子, influenced by classic traditions) were common, such as <strong>Sun-ja</strong> and <strong>Young-ja</strong>.</p>
        `
      },
      {
        id: 'modern-shift',
        heading: '3. The Shift to Soft Modern Vocalics in 2026',
        content: `
          <p>Today, <em>-ja</em> endings have completely disappeared from baby registries. Modern 2026 choices prefer soft open vowels such as <strong>Seo-ah</strong>, <strong>Ha-eun</strong>, <strong>Min-jun</strong>, and <strong>Seo-jun</strong>.</p>
        `
      }
    ],
    relatedNameSlugs: ['min-jun', 'seo-ah', 'seo-jun']
  },

  // 4. How Korean Girl Names Work
  {
    slug: 'how-korean-girl-names-work',
    title: 'How Korean Girl Names Work: Hanja, Hangul & Sound Explained',
    subtitle: 'Exploring the soft vocalics, botanical meanings, and modern aesthetic trends in Korean feminine naming.',
    category: 'girl',
    categoryLabel: 'Girl Name Guides',
    readTime: '8 min read',
    publishedDate: '2026-08-01',
    author: 'Ji-Eun Yoon',
    summary: 'A deep dive into feminine Hanja characters meaning grace, lotus, jade, and light, alongside modern soft-sounding phonetic preferences in Seoul.',
    toc: [
      { id: 'aesthetic', heading: '1. Soft Phonetics & Vocalic Harmony', level: 2 },
      { id: 'popular-hanja', heading: '2. Most Cherished Feminine Hanja Characters', level: 2 },
      { id: 'kpop-influence', heading: '3. K-Pop Idol & Drama Influence', level: 2 }
    ],
    sections: [
      {
        id: 'aesthetic',
        heading: '1. Soft Phonetics & Vocalic Harmony',
        content: `
          <p>Modern Korean girl names heavily favor open vowel endings such as <em>-ah</em> (아), <em>-eun</em> (은), <em>-yeon</em> (연), and <em>-won</em> (원). These combinations create a lyrical, gentle cadence.</p>
        `
      },
      {
        id: 'popular-hanja',
        heading: '2. Most Cherished Feminine Hanja Characters',
        content: `
          <p>Popular characters include <strong>雅 (Ah)</strong> meaning elegance, <strong>恩 (Eun)</strong> meaning grace, <strong>瑞 (Seo)</strong> meaning auspicious jade, and <strong>采 (Chae)</strong> meaning radiant colors.</p>
        `
      },
      {
        id: 'kpop-influence',
        heading: '3. K-Pop Idol & Drama Influence',
        content: `
          <p>Icons like IVE's <strong>Wonyoung</strong>, LE SSERAFIM's <strong>Chaewon</strong>, and solo queen <strong>IU (Ji-eun)</strong> have inspired millions of global parents to adopt modern Korean girl names.</p>
        `
      }
    ],
    relatedNameSlugs: ['seo-ah', 'ha-eun', 'wonyoung', 'chae-won']
  },

  // 5. Most Popular Korean Girl Names in 2026
  {
    slug: 'most-popular-korean-girl-names-2026',
    title: 'Most Popular Korean Girl Names in 2026: Meanings, Hanja & Trends',
    subtitle: 'The definitive ranking of top baby girl names in South Korea based on national civil registry data.',
    category: 'girl',
    categoryLabel: 'Girl Name Guides',
    readTime: '8 min read',
    publishedDate: '2026-08-03',
    author: 'Seo-Ah Lee',
    summary: 'Discover the top 10 Korean baby girl names in 2026 including Seo-ah, Ha-eun, Ji-ah, Seo-yeon, and Su-ah with full Hanja breakdowns.',
    toc: [
      { id: 'top-rankings', heading: '1. Top 5 Girl Names Ranking', level: 2 },
      { id: 'meaning-analysis', heading: '2. Meaning & Hanja Character Analysis', level: 2 }
    ],
    sections: [
      {
        id: 'top-rankings',
        heading: '1. Top 5 Girl Names Ranking',
        content: `
          <ol>
            <li><strong>Seo-ah (서아)</strong> — #1 Most popular girl name for 4 consecutive years.</li>
            <li><strong>Ha-eun (하은)</strong> — #2 Summer grace and warmth.</li>
            <li><strong>Ji-ah (지아)</strong> — #3 Wise elegance.</li>
            <li><strong>Seo-yeon (서연)</strong> — #4 Auspicious lotus bloom.</li>
            <li><strong>Chae-won (채원)</strong> — #5 Source of radiant colors.</li>
          </ol>
        `
      },
      {
        id: 'meaning-analysis',
        heading: '2. Meaning & Hanja Character Analysis',
        content: `
          <p>These top ranked names reflect a parent's desire for their daughters to possess both intellectual clarity and serene artistic grace.</p>
        `
      }
    ],
    relatedNameSlugs: ['seo-ah', 'ha-eun', 'ji-ah', 'chae-won']
  },

  // 6. How Korean Boy Names Work
  {
    slug: 'how-korean-boy-names-work',
    title: 'How Korean Boy Names Work: Hanja, Tradition & Modern Trends',
    subtitle: 'Balancing Confucian scholarly virtues, strength, and contemporary K-Pop idol elegance.',
    category: 'boy',
    categoryLabel: 'Boy Name Guides',
    readTime: '8 min read',
    publishedDate: '2026-08-05',
    author: 'Do-Hyun Kim',
    summary: 'Explore masculine Korean Hanja meaning handsome, talented, pillar, and wise, alongside trends popularized by BTS and Hallyu actors.',
    toc: [
      { id: 'tradition', heading: '1. Traditional Virtues: Scholarly & Military Valor', level: 2 },
      { id: 'popular-boy-hanja', heading: '2. Top Masculine Hanja Characters', level: 2 },
      { id: 'modern-trends', heading: '3. Modern Trends in Seoul', level: 2 }
    ],
    sections: [
      {
        id: 'tradition',
        heading: '1. Traditional Virtues: Scholarly & Military Valor',
        content: `
          <p>Historically, Korean boy names emphasized righteous wisdom (智), moral duty (道), and physical fortitude (剛). Modern names retain these honorable meanings while streamlining sound harmony.</p>
        `
      },
      {
        id: 'popular-boy-hanja',
        heading: '2. Top Masculine Hanja Characters',
        content: `
          <p>Characters like <strong>俊 (Jun)</strong> meaning handsome talent, <strong>賢 (Hyun)</strong> meaning virtuous wisdom, and <strong>宇 (Woo)</strong> meaning cosmic heavens dominate national registries.</p>
        `
      },
      {
        id: 'modern-trends',
        heading: '3. Modern Trends in Seoul',
        content: `
          <p>Top modern choices include <strong>Min-jun</strong>, <strong>Seo-jun</strong>, <strong>Ha-joon</strong>, and <strong>Do-hyun</strong>, made globally famous by Hallyu actors Park Seo-jun and Lee Do-hyun.</p>
        `
      }
    ],
    relatedNameSlugs: ['min-jun', 'seo-jun', 'do-hyun', 'jungkook']
  },

  // 7. Most Popular Korean Boy Names in 2026
  {
    slug: 'most-popular-korean-boy-names-2026',
    title: 'Most Popular Korean Boy Names in 2026: Meanings & Trends',
    subtitle: 'The top 10 Korean boy names dominating birth registries across Seoul and South Korea.',
    category: 'boy',
    categoryLabel: 'Boy Name Guides',
    readTime: '8 min read',
    publishedDate: '2026-08-07',
    author: 'Do-Hyun Kim',
    summary: 'Discover the top 10 Korean baby boy names in 2026 including Min-jun, Seo-jun, Ha-joon, Do-hyun, and Eun-woo.',
    toc: [
      { id: 'boy-rankings', heading: '1. Top 5 Boy Names Ranking', level: 2 },
      { id: 'boy-meanings', heading: '2. Hanja Meanings Breakdown', level: 2 }
    ],
    sections: [
      {
        id: 'boy-rankings',
        heading: '1. Top 5 Boy Names Ranking',
        content: `
          <ol>
            <li><strong>Min-jun (민준)</strong> — #1 Longstanding favorite combining cleverness and talent.</li>
            <li><strong>Seo-jun (서준)</strong> — #2 Auspicious handsome warrior.</li>
            <li><strong>Ha-joon (하준)</strong> — #3 Summer brilliance and elite capability.</li>
            <li><strong>Do-hyun (도현)</strong> — #4 Walking the path of virtue.</li>
            <li><strong>Eun-woo (은우)</strong> — #5 Universal heavenly grace.</li>
          </ol>
        `
      },
      {
        id: 'boy-meanings',
        heading: '2. Hanja Meanings Breakdown',
        content: `
          <p>Each top boy name blends handsome physical charisma with strong Confucian moral character.</p>
        `
      }
    ],
    relatedNameSlugs: ['min-jun', 'seo-jun', 'ha-joon', 'do-hyun']
  },

  // 8. Korean Last Names 101
  {
    slug: 'korean-last-names-101',
    title: 'Korean Last Names 101: Meaning, Clan (Bon-gwan) & How They Work',
    subtitle: 'Why over half of Korea shares Kim, Lee, Park, Choi, and Jung, and how ancestral clan origin works.',
    category: 'surname',
    categoryLabel: 'Last Name Guides',
    readTime: '9 min read',
    publishedDate: '2026-07-28',
    author: 'Dr. Sung-Hoon Choi',
    summary: 'Everything you need to know about Korean family surnames, ancestral clan origin sites (Bon-gwan), royal dynastic roots, and population statistics.',
    toc: [
      { id: 'the-big-three', heading: '1. The Big Three: Kim, Lee & Park', level: 2 },
      { id: 'bon-gwan', heading: '2. Understanding Ancestral Clan Origins (Bon-gwan)', level: 2 },
      { id: 'surname-harmony', heading: '3. Matching Surnames with Given Names', level: 2 }
    ],
    sections: [
      {
        id: 'the-big-three',
        heading: '1. The Big Three: Kim, Lee & Park',
        content: `
          <p>Over 45% of the entire South Korean population bears one of three surnames: <strong>Kim (김 - 金)</strong>, <strong>Lee (이 - 李)</strong>, or <strong>Park (박 - 朴)</strong>. These surnames trace back to royal dynasties of Silla, Goryeo, and Joseon.</p>
        `
      },
      {
        id: 'bon-gwan',
        heading: '2. Understanding Ancestral Clan Origins (Bon-gwan)',
        content: `
          <p>To distinguish between families sharing the same surname, Koreans track their ancestral seat or origin clan (본관 - Bon-gwan). For example, a <em>Gimhae Kim</em> traces back to King Suro, whereas a <em>Gyeongju Kim</em> connects to ancient Silla royalty.</p>
        `
      },
      {
        id: 'surname-harmony',
        heading: '3. Matching Surnames with Given Names',
        content: `
          <p>When selecting a given name, parents evaluate phonetic flow with their surname to ensure smooth vocalic transitions and harmonious tone balance.</p>
        `
      }
    ],
    relatedNameSlugs: ['min-jun', 'seo-ah', 'tae-hyung']
  },

  // 9. Most Common Korean Last Names
  {
    slug: 'most-common-korean-last-names',
    title: 'Most Common Korean Last Names and Their Meanings',
    subtitle: 'A breakdown of top 10 Korean surnames, population percentages, and clan lineage.',
    category: 'surname',
    categoryLabel: 'Last Name Guides',
    readTime: '7 min read',
    publishedDate: '2026-07-30',
    author: 'Dr. Sung-Hoon Choi',
    summary: 'Statistical breakdown of the most common Korean surnames including Kim, Lee, Park, Choi, Jung, Kang, Cho, Yoon, Jang, and Lim.',
    toc: [
      { id: 'stats-table', heading: '1. Top Surnames Population Share', level: 2 },
      { id: 'surname-meanings', heading: '2. Meanings & History', level: 2 }
    ],
    sections: [
      {
        id: 'stats-table',
        heading: '1. Top Surnames Population Share',
        content: `
          <ul>
            <li><strong>Kim (김)</strong> — 21.5% of population (Gold / Royal Brightness)</li>
            <li><strong>Lee (이)</strong> — 14.7% of population (Plum Tree / Joseon Royalty)</li>
            <li><strong>Park (박)</strong> — 8.4% of population (Sacred Gourd / Silla Founder)</li>
            <li><strong>Choi (최)</strong> — 4.7% of population (Towering Mountain Peak)</li>
            <li><strong>Jung (정)</strong> — 4.4% of population (Righteous Governance)</li>
          </ul>
        `
      },
      {
        id: 'surname-meanings',
        heading: '2. Meanings & History',
        content: `
          <p>Korean surnames carry rich historic royal lineage dating back thousands of years.</p>
        `
      }
    ],
    relatedNameSlugs: ['kim', 'lee', 'park']
  },

  // 10. August Baby Names
  {
    slug: 'korean-names-born-in-august',
    title: 'A Naming Guide for Babies Born in August: The Height of Summer',
    subtitle: 'Botanical, summer warmth, and luminous Korean names for late summer babies.',
    category: 'new',
    categoryLabel: 'New Articles',
    readTime: '6 min read',
    publishedDate: '2026-08-01',
    author: 'Min-Jun Park',
    summary: 'Discover Korean names carrying the vibrant energy of August summer heat, sunflowers, and clear blue skies.',
    toc: [
      { id: 'august-themes', heading: '1. August Summer Naming Themes', level: 2 },
      { id: 'august-names', heading: '2. Recommended Names', level: 2 }
    ],
    sections: [
      {
        id: 'august-themes',
        heading: '1. August Summer Naming Themes',
        content: `
          <p>Babies born in August carry the radiant energy of midsummer. Popular Hanja include <strong>夏 (Ha)</strong> meaning summer and <strong>燦 (Chan)</strong> meaning brilliant luminescence.</p>
        `
      },
      {
        id: 'august-names',
        heading: '2. Recommended Names',
        content: `
          <p>Top picks for August babies: <strong>Ha-eun</strong>, <strong>Ha-joon</strong>, <strong>Ha-neul</strong>, and <strong>Ye-jun</strong>.</p>
        `
      }
    ],
    relatedNameSlugs: ['ha-eun', 'ha-joon', 'ha-neul']
  },

  // 11. Korean Given Names That Are Also Surnames
  {
    slug: 'korean-given-names-that-are-also-surnames',
    title: 'Korean Given Names That Are Also Surnames — A Cultural Guide',
    subtitle: 'Exploring Korean naming duality where given names overlap with family surnames.',
    category: 'new',
    categoryLabel: 'New Articles',
    readTime: '7 min read',
    publishedDate: '2026-07-25',
    author: 'Seo-Ah Lee',
    summary: 'Learn about Korean names like Kang, Jin, Min, and Cho that function seamlessly as both given names and family surnames.',
    toc: [
      { id: 'duality-concept', heading: '1. The Concept of Name Duality', level: 2 },
      { id: 'duality-examples', heading: '2. Common Overlapping Names', level: 2 }
    ],
    sections: [
      {
        id: 'duality-concept',
        heading: '1. The Concept of Name Duality',
        content: `
          <p>Certain Sino-Korean characters serve dual roles in Korean culture, acting both as prominent family surnames and as meaningful single-syllable given names.</p>
        `
      },
      {
        id: 'duality-examples',
        heading: '2. Common Overlapping Names',
        content: `
          <p>Examples include <strong>Kang (강)</strong>, <strong>Jin (진)</strong>, <strong>Min (민)</strong>, and <strong>Cho (조)</strong>.</p>
        `
      }
    ],
    relatedNameSlugs: ['min-jun', 'do-hyun', 'bogum']
  },

  // 12. July Baby Names
  {
    slug: 'korean-names-born-in-july',
    title: 'A Naming Guide for Babies Born in July: Star Festival & Summer',
    subtitle: 'Chilseok Star Festival themes, dew drops, and ocean breezed Korean names.',
    category: 'new',
    categoryLabel: 'New Articles',
    readTime: '6 min read',
    publishedDate: '2026-07-01',
    author: 'Min-Jun Park',
    summary: 'Find poetic Korean baby names inspired by July star festivals, summer rains, and clear sky breezes.',
    toc: [
      { id: 'july-themes', heading: '1. July Star & Rain Themes', level: 2 },
      { id: 'july-names', heading: '2. Top July Name Choices', level: 2 }
    ],
    sections: [
      {
        id: 'july-themes',
        heading: '1. July Star & Rain Themes',
        content: `
          <p>July in Korea marks the Chilseok star festival and early summer rain. Hanja like <strong>時雨 (Si-woo - timely rain)</strong> and <strong>宇 (Woo - heavens)</strong> are widely beloved.</p>
        `
      },
      {
        id: 'july-names',
        heading: '2. Top July Name Choices',
        content: `
          <p>Recommended July names: <strong>Si-woo</strong>, <strong>Ji-woo</strong>, <strong>Eun-woo</strong>.</p>
        `
      }
    ],
    relatedNameSlugs: ['si-woo', 'ji-woo', 'eun-woo']
  },

  // 13. New Hanja Registry Update
  {
    slug: 'new-hanja-for-korean-baby-names',
    title: 'A New Hanja for Korean Baby Names: Registry Updates',
    subtitle: 'Official Supreme Court registry updates expanding approved Hanja characters for Korean birth certificates.',
    category: 'new',
    categoryLabel: 'New Articles',
    readTime: '5 min read',
    publishedDate: '2026-06-15',
    author: 'Dr. Sung-Hoon Choi',
    summary: 'Overview of newly approved Sino-Korean Hanja characters added to the Supreme Court of Korea birth registration database.',
    toc: [
      { id: 'supreme-court-rules', heading: '1. Supreme Court Registry Rules', level: 2 },
      { id: 'new-characters', heading: '2. Newly Added Hanja Characters', level: 2 }
    ],
    sections: [
      {
        id: 'supreme-court-rules',
        heading: '1. Supreme Court Registry Rules',
        content: `
          <p>South Korean birth registration law requires that Hanja used in human names belong to the officially designated Supreme Court registry list to prevent obscure or problematic characters.</p>
        `
      },
      {
        id: 'new-characters',
        heading: '2. Newly Added Hanja Characters',
        content: `
          <p>Recent updates have expanded approved characters representing environmental conservation, modern artistic talent, and luminous celestial bodies.</p>
        `
      }
    ],
    relatedNameSlugs: ['min-jun', 'seo-ah']
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find(a => a.slug.toLowerCase() === slug.toLowerCase());
}
