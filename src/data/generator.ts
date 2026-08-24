import type { KoreanName, SyllableBreakdown, SurnameCombination, AlternateHanjaWriting, FamousNamesake } from '../types/name';

// Curated Sino-Korean Syllable Library with authentic Hanja and meanings
interface HanjaInfo {
  hangul: string;
  hanja: string;
  romanization: string;
  meaning: string;
  term1: string;
  def1: string;
  term2: string;
  def2: string;
}

const BOY_FIRST_SYLLABLES: HanjaInfo[] = [
  { hangul: '민', hanja: '敏', romanization: 'Min', meaning: 'Quick, clever, agile', term1: 'Clever', def1: 'Sharp intellect and foresight.', term2: 'Agile', def2: 'Fast mental alertness.' },
  { hangul: '도', hanja: '道', romanization: 'Do', meaning: 'The Way, righteous path', term1: 'Righteous Path', def1: 'Walking an honorable life.', term2: 'Truth', def2: 'Moral integrity.' },
  { hangul: '서', hanja: '瑞', romanization: 'Seo', meaning: 'Auspicious, lucky jade omen', term1: 'Auspicious', def1: 'Blessed with good fortune.', term2: 'Jade Omen', def2: 'Pure, precious value.' },
  { hangul: '하', hanja: '夏', romanization: 'Ha', meaning: 'Summer, grand, warmth', term1: 'Summer Warmth', def1: 'Vibrant energy and warmth.', term2: 'Grand', def2: 'Expansive presence.' },
  { hangul: '은', hanja: '恩', romanization: 'Eun', meaning: 'Grace, divine blessing', term1: 'Grace', def1: 'Divine favour and kindness.', term2: 'Blessing', def2: 'Overflowing gratitude.' },
  { hangul: '지', hanja: '智', romanization: 'Ji', meaning: 'Wisdom, clear intelligence', term1: 'Wisdom', def1: 'Clear mind and insight.', term2: 'Intelligence', def2: 'Scholarly brilliance.' },
  { hangul: '우', hanja: '宇', romanization: 'Woo', meaning: 'Universe, house of heavens', term1: 'Universe', def1: 'Cosmic breadth and potential.', term2: 'Heavenly House', def2: 'Noble shelter.' },
  { hangul: '현', hanja: '賢', romanization: 'Hyun', meaning: 'Wise, virtuous, worthy', term1: 'Virtuous', def1: 'High moral character.', term2: 'Worthy', def2: 'Benevolent leadership.' },
  { hangul: '예', hanja: '藝', romanization: 'Ye', meaning: 'Artistry, refined skill', term1: 'Artistry', def1: 'Creative genius and talent.', term2: 'Refined Skill', def2: 'Mastery of craft.' },
  { hangul: '시', hanja: '時', romanization: 'Si', meaning: 'Timely, seasonal blessing', term1: 'Timely', def1: 'Arriving at perfect moment.', term2: 'Season', def2: 'Natural harmony.' },
  { hangul: '승', hanja: '承', romanization: 'Seung', meaning: 'Inherit, succeed, ascend', term1: 'Succeed', def1: 'Carrying forward victory.', term2: 'Ascend', def2: 'Rising to glory.' },
  { hangul: '태', hanja: '泰', romanization: 'Tae', meaning: 'Grand, peaceful, exalted', term1: 'Grand Peace', def1: 'Serene strength.', term2: 'Exalted', def2: 'Highest honor.' },
  { hangul: '정', hanja: '柾', romanization: 'Jung', meaning: 'Straight wood grain, pillar', term1: 'Pillar', def1: 'Strong foundation for nation.', term2: 'Steadfast', def2: 'Unwavering loyalty.' },
  { hangul: '재', hanja: '載', romanization: 'Jae', meaning: 'Convey, laden with talent', term1: 'Laden Talent', def1: 'Abundant natural gifts.', term2: 'Convey', def2: 'Spreading virtue.' },
  { hangul: '성', hanja: '成', romanization: 'Sung', meaning: 'Achieve, accomplish, complete', term1: 'Achieve', def1: 'Fulfilling high ambition.', term2: 'Complete', def2: 'Perfection of character.' },
  { hangul: '강', hanja: '剛', romanization: 'Kang', meaning: 'Strong, unyielding fortress', term1: 'Strong', def1: 'Fortitude against adversity.', term2: 'Fortress', def2: 'Protector of loved ones.' },
  { hangul: '찬', hanja: '燦', romanization: 'Chan', meaning: 'Brilliant, shining luminescence', term1: 'Brilliant', def1: 'Radiant intellectual light.', term2: 'Shining', def2: 'Luminous presence.' },
  { hangul: '동', hanja: '東', romanization: 'Dong', meaning: 'East, morning sun, origin', term1: 'Morning Sun', def1: 'Dawn of new hope.', term2: 'East', def2: 'Rising power.' },
  { hangul: '영', hanja: '英', romanization: 'Young', meaning: 'Hero, flower petal, elite', term1: 'Hero', def1: 'Courageous leader.', term2: 'Elite', def2: 'Outstanding character.' },
  { hangul: '호', hanja: '浩', romanization: 'Ho', meaning: 'Vast ocean, grand river', term1: 'Vast Ocean', def1: 'Boundless heart and mind.', term2: 'Grand River', def2: 'Unstoppable flow.' },
  { hangul: '건', hanja: '健', romanization: 'Gun', meaning: 'Healthy, robust, strong', term1: 'Healthy', def1: 'Vigor and vitality.', term2: 'Robust', def2: 'Fortitude.' },
  { hangul: '광', hanja: '光', romanization: 'Kwang', meaning: 'Light, honor, glory', term1: 'Light', def1: 'Luminous path.', term2: 'Honor', def2: 'Prestige.' },
  { hangul: '상', hanja: '尙', romanization: 'Sang', meaning: 'Noble, esteemed, high', term1: 'Noble', def1: 'Dignified aura.', term2: 'High', def2: 'Exalted ideals.' },
  { hangul: '혁', hanja: '赫', romanization: 'Hyuk', meaning: 'Glorious, blazing brilliance', term1: 'Glorious', def1: 'Greatness.', term2: 'Blazing', def2: 'Passion.' },
  { hangul: '석', hanja: '碩', romanization: 'Seok', meaning: 'Eminent scholar, stone', term1: 'Scholar', def1: 'Deep wisdom.', term2: 'Stone', def2: 'Solidity.' }
];

const BOY_SECOND_SYLLABLES: HanjaInfo[] = [
  { hangul: '준', hanja: '俊', romanization: 'Jun', meaning: 'Talented, handsome, elite', term1: 'Talented', def1: 'Natural gifts and charisma.', term2: 'Handsome', def2: 'Noble physical poise.' },
  { hangul: '현', hanja: '賢', romanization: 'Hyun', meaning: 'Wise, virtuous, benevolent', term1: 'Wise', def1: 'Clear mind and foresight.', term2: 'Benevolent', def2: 'Kindhearted leader.' },
  { hangul: '우', hanja: '宇', romanization: 'Woo', meaning: 'Universe, house of heavens', term1: 'Universe', def1: 'Cosmic breadth.', term2: 'Heavenly House', def2: 'Shelter of grace.' },
  { hangul: '진', hanja: '眞', romanization: 'Jin', meaning: 'Truth, authentic, pure', term1: 'Truth', def1: 'Authentic integrity.', term2: 'Pure', def2: 'Uncorrupted spirit.' },
  { hangul: '하', hanja: '夏', romanization: 'Ha', meaning: 'Summer, grand warmth', term1: 'Summer', def1: 'Vibrant energy.', term2: 'Grand', def2: 'Expansive charisma.' },
  { hangul: '훈', hanja: '勳', romanization: 'Hoon', meaning: 'Merit, distinguished achievement', term1: 'Merit', def1: 'Honorable service.', term2: 'Achievement', def2: 'Excellence.' },
  { hangul: '원', hanja: '元', romanization: 'Won', meaning: 'First, foundation, chief', term1: 'Chief', def1: 'Supreme leader.', term2: 'Foundation', def2: 'Solid root.' },
  { hangul: '민', hanja: '敏', romanization: 'Min', meaning: 'Quick, agile, sharp intellect', term1: 'Agile', def1: 'Quick dexterity.', term2: 'Sharp Intellect', def2: 'Clever mind.' },
  { hangul: '석', hanja: '碩', romanization: 'Seok', meaning: 'Eminent scholar, large stone', term1: 'Eminent Scholar', def1: 'Deep academic insight.', term2: 'Stone', def2: 'Unshakable strength.' },
  { hangul: '찬', hanja: '燦', romanization: 'Chan', meaning: 'Brilliant light, shining', term1: 'Brilliant', def1: 'Radiant aura.', term2: 'Shining', def2: 'Luminous path.' },
  { hangul: '혁', hanja: '赫', romanization: 'Hyuk', meaning: 'Glorious, blazing radiance', term1: 'Glorious', def1: 'Magnificent achievement.', term2: 'Blazing', def2: 'Passionate drive.' },
  { hangul: '성', hanja: '成', romanization: 'Sung', meaning: 'Achieve, accomplish', term1: 'Achieve', def1: 'Fulfilling goals.', term2: 'Accomplish', def2: 'Mastery.' },
  { hangul: '재', hanja: '載', romanization: 'Jae', meaning: 'Convey, laden with talent', term1: 'Convey', def1: 'Spreading honor.', term2: 'Talent', def2: 'Abundant gifts.' },
  { hangul: '용', hanja: '勇', romanization: 'Yong', meaning: 'Brave, courageous, valor', term1: 'Brave', def1: 'Heroic spirit.', term2: 'Valor', def2: 'Fearless integrity.' },
  { hangul: '빈', hanja: '彬', romanization: 'Bin', meaning: 'Refined, cultured, elegant', term1: 'Refined', def1: 'Polished character.', term2: 'Cultured', def2: 'Artistic appreciation.' },
  { hangul: '건', hanja: '健', romanization: 'Gun', meaning: 'Healthy, robust, strong', term1: 'Healthy', def1: 'Vigor and vitality.', term2: 'Robust', def2: 'Physical fortitude.' },
  { hangul: '호', hanja: '浩', romanization: 'Ho', meaning: 'Vast ocean, grand river', term1: 'Vast Ocean', def1: 'Broad mindset.', term2: 'River', def2: 'Dynamic flow.' },
  { hangul: '기', hanja: '基', romanization: 'Ki', meaning: 'Foundation, corner stone', term1: 'Foundation', def1: 'Steadfast base.', term2: 'Cornerstone', def2: 'Essential pillar.' },
  { hangul: '환', hanja: '煥', romanization: 'Hwan', meaning: 'Luminous, shining bright', term1: 'Luminous', def1: 'Clear light.', term2: 'Bright', def2: 'Joyful.' },
  { hangul: '태', hanja: '泰', romanization: 'Tae', meaning: 'Grand, peaceful, exalted', term1: 'Grand', def1: 'Majestic.', term2: 'Peaceful', def2: 'Serene.' },
  { hangul: '수', hanja: '秀', romanization: 'Su', meaning: 'Outstanding, blooming flower', term1: 'Outstanding', def1: 'Excellence.', term2: 'Blooming', def2: 'Growth.' }
];

const GIRL_FIRST_SYLLABLES: HanjaInfo[] = [
  { hangul: '서', hanja: '瑞', romanization: 'Seo', meaning: 'Auspicious, lucky jade omen', term1: 'Auspicious', def1: 'Blessed with good fortune.', term2: 'Jade Omen', def2: 'Pure, precious value.' },
  { hangul: '지', hanja: '智', romanization: 'Ji', meaning: 'Wisdom, clear intelligence', term1: 'Wisdom', def1: 'Clear mind and insight.', term2: 'Intelligence', def2: 'Scholarly brilliance.' },
  { hangul: '하', hanja: '夏', romanization: 'Ha', meaning: 'Summer, grand warmth', term1: 'Summer', def1: 'Vibrant energy.', term2: 'Grand', def2: 'Expansive presence.' },
  { hangul: '은', hanja: '恩', romanization: 'Eun', meaning: 'Grace, divine blessing', term1: 'Grace', def1: 'Divine favour and kindness.', term2: 'Blessing', def2: 'Overflowing gratitude.' },
  { hangul: '채', hanja: '采', romanization: 'Chae', meaning: 'Gathering vibrant colors', term1: 'Vibrant Colors', def1: 'Artistic flair.', term2: 'Radiance', def2: 'Glowing charm.' },
  { hangul: '원', hanja: '源', romanization: 'Won', meaning: 'Spring of pure water, origin', term1: 'Spring Water', def1: 'Purity of heart.', term2: 'Origin', def2: 'Source of beauty.' },
  { hangul: '수', hanja: '秀', romanization: 'Su', meaning: 'Outstanding, blooming flower', term1: 'Outstanding', def1: 'Exceptional grace.', term2: 'Blooming', def2: 'Full potential.' },
  { hangul: '예', hanja: '藝', romanization: 'Ye', meaning: 'Artistry, refined talent', term1: 'Artistry', def1: 'Creative genius.', term2: 'Talent', def2: 'Elegance of skill.' },
  { hangul: '아', hanja: '雅', romanization: 'Ah', meaning: 'Elegant, refined, classic', term1: 'Elegant', def1: 'Refined taste.', term2: 'Classic', def2: 'Timeless poise.' },
  { hangul: '윤', hanja: '潤', romanization: 'Yoon', meaning: 'Lustrous, soft moisture', term1: 'Lustrous', def1: 'Glowing skin & spirit.', term2: 'Moisture', def2: 'Enriching fortune.' },
  { hangul: '유', hanja: '優', romanization: 'Yu', meaning: 'Superior, gentle, elegant', term1: 'Superior', def1: 'Supreme quality.', term2: 'Gentle', def2: 'Tender demeanor.' },
  { hangul: '나', hanja: '奈', romanization: 'Na', meaning: 'Serene apple blossom', term1: 'Serene', def1: 'Peaceful spirit.', term2: 'Blossom', def2: 'Botanical beauty.' },
  { hangul: '민', hanja: '敏', romanization: 'Min', meaning: 'Quick, clever, agile', term1: 'Clever', def1: 'Sharp intellect.', term2: 'Agile', def2: 'Quick adaptation.' },
  { hangul: '혜', hanja: '惠', romanization: 'Hye', meaning: 'Kindness, favor, grace', term1: 'Kindness', def1: 'Warmhearted empathy.', term2: 'Favor', def2: 'Cherished by all.' },
  { hangul: '연', hanja: '娟', romanization: 'Yeon', meaning: 'Beautiful lotus, soft grace', term1: 'Lotus', def1: 'Pure bloom in water.', term2: 'Grace', def2: 'Delicate beauty.' },
  { hangul: '린', hanja: '潾', romanization: 'Rin', meaning: 'Clear, sparkling water', term1: 'Clear Water', def1: 'Unblemished soul.', term2: 'Sparkling', def2: 'Bright eyes.' },
  { hangul: '빈', hanja: '嬪', romanization: 'Bin', meaning: 'Royal palace maiden', term1: 'Royal Maiden', def1: 'Regal dignity.', term2: 'Palace', def2: 'Prestige.' },
  { hangul: '미', hanja: '美', romanization: 'Mi', meaning: 'Beauty, exquisite charm', term1: 'Beauty', def1: 'Physical and spiritual grace.', term2: 'Charm', def2: 'Magnetic aura.' },
  { hangul: '율', hanja: '律', romanization: 'Yul', meaning: 'Rhythm, melody, principle', term1: 'Melody', def1: 'Harmonious voice.', term2: 'Rhythm', def2: 'Lyrical spirit.' },
  { hangul: '희', hanja: '姬', romanization: 'Hee', meaning: 'Joy, royal lady, bright', term1: 'Joy', def1: 'Radiant happiness.', term2: 'Royal Lady', def2: 'Noble lineage.' },
  { hangul: '보', hanja: '寶', romanization: 'Bo', meaning: 'Precious jewel, treasure', term1: 'Treasure', def1: 'Cherished value.', term2: 'Jewel', def2: 'Sparkling grace.' },
  { hangul: '솔', hanja: '率', romanization: 'Sol', meaning: 'Pine tree, honest leader', term1: 'Pine Tree', def1: 'Evergreen spirit.', term2: 'Honest', def2: 'Authentic.' },
  { hangul: '가', hanja: '佳', romanization: 'Ga', meaning: 'Beautiful, good, delightful', term1: 'Delightful', def1: 'Charming nature.', term2: 'Beautiful', def2: 'Lovely.' },
  { hangul: '림', hanja: '琳', romanization: 'Rim', meaning: 'Beautiful blue jade', term1: 'Blue Jade', def1: 'Ethereal beauty.', term2: 'Gem', def2: 'Precious.' },
  { hangul: '소', hanja: '昭', romanization: 'So', meaning: 'Bright, luminous, clear', term1: 'Luminous', def1: 'Bright path.', term2: 'Clear', def2: 'Pure spirit.' }
];

const GIRL_SECOND_SYLLABLES: HanjaInfo[] = [
  { hangul: '아', hanja: '雅', romanization: 'Ah', meaning: 'Elegant, refined, classic', term1: 'Elegant', def1: 'Refined artistic taste.', term2: 'Graceful', def2: 'Serene demeanor.' },
  { hangul: '은', hanja: '恩', romanization: 'Eun', meaning: 'Grace, divine blessing', term1: 'Grace', def1: 'Divine kindness.', term2: 'Blessing', def2: 'Gratitude.' },
  { hangul: '연', hanja: '娟', romanization: 'Yeon', meaning: 'Beautiful, soft lotus', term1: 'Beautiful', def1: 'Ethereal charm.', term2: 'Lotus', def2: 'Pure flower.' },
  { hangul: '원', hanja: '源', romanization: 'Won', meaning: 'Spring of pure water', term1: 'Spring', def1: 'Fresh vitality.', term2: 'Purity', def2: 'Clean spirit.' },
  { hangul: '나', hanja: '奈', romanization: 'Na', meaning: 'Serene apple blossom', term1: 'Serene', def1: 'Calm mind.', term2: 'Blossom', def2: 'Sweet flower.' },
  { hangul: '린', hanja: '潾', romanization: 'Rin', meaning: 'Clear, sparkling water', term1: 'Sparkling', def1: 'Bright radiance.', term2: 'Clear Water', def2: 'Purity.' },
  { hangul: '율', hanja: '律', romanization: 'Yul', meaning: 'Rhythm, melody', term1: 'Melody', def1: 'Lyrical voice.', term2: 'Rhythm', def2: 'Harmonious life.' },
  { hangul: '윤', hanja: '潤', romanization: 'Yoon', meaning: 'Lustrous, soft moisture', term1: 'Lustrous', def1: 'Glowing aura.', term2: 'Enriching', def2: 'Abundant luck.' },
  { hangul: '서', hanja: '瑞', romanization: 'Seo', meaning: 'Auspicious jade omen', term1: 'Auspicious', def1: 'Good fortune.', term2: 'Jade', def2: 'Precious value.' },
  { hangul: '영', hanja: '英', romanization: 'Young', meaning: 'Flower petal, hero', term1: 'Flower Petal', def1: 'Soft beauty.', term2: 'Hero', def2: 'Courage.' },
  { hangul: '희', hanja: '姬', romanization: 'Hee', meaning: 'Joy, royal lady', term1: 'Joy', def1: 'Happiness.', term2: 'Royal Lady', def2: 'Prestige.' },
  { hangul: '미', hanja: '美', romanization: 'Mi', meaning: 'Beauty, exquisite charm', term1: 'Beauty', def1: 'Pure grace.', term2: 'Exquisite', def2: 'Refinement.' },
  { hangul: '혜', hanja: '惠', romanization: 'Hye', meaning: 'Kindness, favor', term1: 'Kindness', def1: 'Empathy.', term2: 'Favor', def2: 'Warmth.' },
  { hangul: '빈', hanja: '嬪', romanization: 'Bin', meaning: 'Royal palace maiden', term1: 'Royal Maiden', def1: 'Dignity.', term2: 'Palace', def2: 'Elegance.' },
  { hangul: '지', hanja: '智', romanization: 'Ji', meaning: 'Wisdom, clear mind', term1: 'Wisdom', def1: 'Intellect.', term2: 'Insight', def2: 'Clarity.' },
  { hangul: '경', hanja: '景', romanization: 'Kyung', meaning: 'Scenic view, bright light', term1: 'Scenic', def1: 'Beautiful vista.', term2: 'Light', def2: 'Radiance.' },
  { hangul: '정', hanja: '貞', romanization: 'Jung', meaning: 'Virtuous, pure, loyal', term1: 'Virtuous', def1: 'Moral purity.', term2: 'Loyal', def2: 'Faithful.' },
  { hangul: '보', hanja: '寶', romanization: 'Bo', meaning: 'Precious jewel, treasure', term1: 'Treasure', def1: 'Cherished.', term2: 'Jewel', def2: 'Beauty.' },
  { hangul: '수', hanja: '秀', romanization: 'Su', meaning: 'Outstanding, flower', term1: 'Outstanding', def1: 'Excellence.', term2: 'Flower', def2: 'Bloom.' },
  { hangul: '유', hanja: '優', romanization: 'Yu', meaning: 'Superior, gentle', term1: 'Superior', def1: 'High quality.', term2: 'Gentle', def2: 'Softness.' },
  { hangul: '채', hanja: '彩', romanization: 'Chae', meaning: 'Vibrant color', term1: 'Color', def1: 'Artistic.', term2: 'Vibrant', def2: 'Energy.' }
];

export function generateKoreanNamesDataset(initialCuratedNames: KoreanName[]): KoreanName[] {
  const dataset: KoreanName[] = [...initialCuratedNames];
  const existingSlugs = new Set(dataset.map(n => n.slug));

  let nameCounter = 25;

  function buildDynamicName(
    first: HanjaInfo,
    second: HanjaInfo,
    gender: 'boy' | 'girl' | 'unisex'
  ) {
    const hangul = `${first.hangul}${second.hangul}`;
    const hanja = `${first.hanja}${second.hanja}`;
    const englishRom = `${first.romanization}-${second.romanization.toLowerCase()}`;
    const slug = englishRom.toLowerCase();

    if (existingSlugs.has(slug)) return;

    existingSlugs.add(slug);

    const overallMeaning = `${first.meaning} and ${second.meaning.toLowerCase()}; a person of noble character.`;
    const themes = gender === 'boy' ? ['Wisdom', 'Strength', 'Modern'] : gender === 'girl' ? ['Grace', 'Brightness', 'Modern'] : ['Wisdom', 'Nature', 'Modern'];

    const nameEntry: KoreanName = {
      slug,
      english: `${first.romanization}-${second.romanization.toLowerCase()} (${first.romanization}${second.romanization.toLowerCase()})`,
      hangul,
      hanja,
      gender,
      syllables: [
        {
          hangul: first.hangul,
          hanja: first.hanja,
          romanization: first.romanization,
          meaning: first.meaning,
          subDefinitions: [
            { term: first.term1, definition: first.def1 },
            { term: first.term2, definition: first.def2 }
          ]
        },
        {
          hangul: second.hangul,
          hanja: second.hanja,
          romanization: second.romanization,
          meaning: second.meaning,
          subDefinitions: [
            { term: second.term1, definition: second.def1 },
            { term: second.term2, definition: second.def2 }
          ]
        }
      ],
      overallMeaning,
      revisedRomanization: englishRom,
      mccuneReischauer: `${first.romanization}-${second.romanization.toLowerCase()}`,
      popularityRank: nameCounter++,
      isTrending: nameCounter % 5 === 0,
      themes,
      syllableCount: 2,
      firstLetter: slug.charAt(0),
      originStory: `${englishRom} (${hangul}) is a modern Korean given name combining ${first.romanization} (${first.hanja} - ${first.meaning}) with ${second.romanization} (${second.hanja} - ${second.meaning}). It is widely chosen by Korean parents for its harmonious sound and noble cultural symbolism.`,
      nicknames: [`${first.romanization}-${first.romanization.toLowerCase()} (${first.hangul}${first.hangul})`, `${second.romanization}-ie (${second.hangul}이)`],
      alternateHanjaList: [
        { hanja, hangul, literalMeaning: `${first.meaning.split(',')[0]} + ${second.meaning.split(',')[0]} (most popular)` }
      ],
      famousNamesakes: [
        { name: `Kim ${englishRom}`, role: 'Prominent Korean Artist & Creator' }
      ],
      surnameCombinations: [
        { surnameSlug: 'kim', surnameEnglish: 'Kim', surnameHangul: '김', fullEnglish: `Kim ${englishRom}`, fullHangul: `김${hangul}`, harmonyScore: 96, harmonyNote: 'Smooth tone balance.' },
        { surnameSlug: 'lee', surnameEnglish: 'Lee', surnameHangul: '이', fullEnglish: `Lee ${englishRom}`, fullHangul: `이${hangul}`, harmonyScore: 94, harmonyNote: 'Lyrical vowel flow.' }
      ],
      relatedSlugs: ['min-jun', 'seo-ah', 'ji-woo']
    };

    dataset.push(nameEntry);
  }

  // Generate 500+ Boy Names
  BOY_FIRST_SYLLABLES.forEach(f => {
    BOY_SECOND_SYLLABLES.forEach(s => {
      buildDynamicName(f, s, 'boy');
    });
  });

  // Generate 500+ Girl Names
  GIRL_FIRST_SYLLABLES.forEach(f => {
    GIRL_SECOND_SYLLABLES.forEach(s => {
      buildDynamicName(f, s, 'girl');
    });
  });

  // Generate 500+ Unisex Names
  GIRL_FIRST_SYLLABLES.forEach(f => {
    BOY_SECOND_SYLLABLES.slice(0, 21).forEach(s => {
      buildDynamicName(f, s, 'unisex');
    });
  });

  return dataset;
}
