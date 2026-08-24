export type Gender = 'boy' | 'girl' | 'unisex';

export interface SubDefinition {
  term: string;
  definition: string;
}

export interface SyllableBreakdown {
  hangul: string;
  hanja: string;
  romanization: string;
  meaning: string;
  subDefinitions?: SubDefinition[];
}

export interface AlternateHanjaWriting {
  hanja: string;
  hangul: string;
  literalMeaning: string;
}

export interface SurnameCombination {
  surnameSlug: string;
  surnameEnglish: string;
  surnameHangul: string;
  fullEnglish: string;
  fullHangul: string;
  harmonyScore: number; // 1-100
  harmonyNote: string;
}

export interface FamousNamesake {
  name: string;
  role: string; // e.g., 'K-Pop Idol (BTS)', 'Actor', 'Historical King'
  note?: string;
}

export interface KoreanName {
  slug: string;
  english: string;
  hangul: string;
  hanja: string;
  gender: Gender;
  syllables: SyllableBreakdown[];
  overallMeaning: string;
  revisedRomanization: string;
  mccuneReischauer: string;
  popularityRank: number; // 1-100+
  isTrending?: boolean;
  themes: string[]; // e.g. ['nature', 'wisdom', 'brightness', 'k-pop', 'modern']
  syllableCount: number; // 1, 2, or 3
  firstLetter: string; // 'm', 'j', 's', etc.
  originStory: string;
  nicknames?: string[];
  alternateHanjaList?: AlternateHanjaWriting[];
  famousNamesakes: FamousNamesake[];
  surnameCombinations: SurnameCombination[];
  relatedSlugs: string[];
}

export interface Surname {
  slug: string;
  english: string;
  hangul: string;
  hanja: string;
  percentageInKorea: number; // e.g. 21.5% for Kim
  meaning: string;
  originClan: string; // e.g. 'Gimhae Kim clan', 'Jeonju Lee clan'
  description: string;
  recommendedGivenSlugs: string[];
}

export interface ThemeCategory {
  slug: string;
  name: string;
  koreanName: string;
  icon: string;
  description: string;
  seoDescription: string;
}

export interface HanjaEntry {
  slug: string; // e.g. 'min'
  hangul: string; // '민'
  hanja: string; // '敏'
  meaning: string;
  strokeCount: number;
  radical: string;
  commonNames: string[]; // name slugs
}
