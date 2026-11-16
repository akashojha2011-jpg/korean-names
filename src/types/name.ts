export type Gender = 'boy' | 'girl' | 'unisex';
export type ExtendedGender = 'boy' | 'girl' | 'unisex' | 'unclassified';

export type NameClassification =
  | 'sino-korean'          // Traditional Sino-Korean names with Hanja logograms
  | 'pure-korean'          // Native Soon-woori-mal (순우리말) names without Chinese characters
  | 'modern-coined'        // Contemporary Korean coined combinations
  | 'phonetic-adaptation'; // Transliterated adaptations of international names

export type DataConfidenceLevel =
  | 'verified-statutory'   // Supreme Court Registry / National Census confirmed
  | 'historical-documented'// Historical Joseon / Goryeo genealogical records
  | 'popular-usage'        // Widespread modern registered births
  | 'provisional';         // Emerging or candidate linguistic combination

export interface SubDefinition {
  term: string;
  definition: string;
}

export interface SyllableBreakdown {
  hangul: string;
  hanja: string;
  romanization: string;
  meaning: string;
  strokeCount?: number;
  radical?: string;
  subDefinitions?: SubDefinition[];
}

export interface HanjaCombinationSyllable {
  hangul: string;
  hanja: string;
  romanization?: string;
  meaning: string;
  strokeCount: number;
  radical?: string;
}

export interface HanjaCombination {
  combinationId: string;
  completeHanja: string;          // e.g. '敏俊'
  syllables: HanjaCombinationSyllable[];
  combinedInterpretation: string; // Detailed cultural synthesis
  culturalContext?: string;
  source?: string;
  isPopularVariant?: boolean;
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
  harmonyScore?: number;
  harmonyNote: string;
}

export interface FamousNamesake {
  name: string;
  role: string;
  note?: string;
}

export interface KoreanName {
  id?: string;
  slug: string;
  english: string;
  hangul: string;
  hanja: string;                 // Primary/Representative Hanja (or empty for pure Korean)
  gender: Gender;
  syllables: SyllableBreakdown[];
  overallMeaning: string;
  revisedRomanization: string;
  mccuneReischauer: string;
  ipaPhonetic?: string;
  popularityRank?: number;
  isTrending?: boolean;
  classification?: NameClassification;
  isPureKorean?: boolean;
  meaningDependsOnHanja?: boolean;
  hanjaCombinations?: HanjaCombination[]; // Multiple possible Hanja combinations (Part 5)
  themes: string[];              // ['nature', 'wisdom', 'brightness', etc.]
  syllableCount: number;         // 1, 2, or 3
  firstLetter: string;           // 'm', 'j', 's', etc.
  originStory?: string;
  nicknames?: string[];
  alternateHanjaList?: AlternateHanjaWriting[];
  famousNamesakes?: FamousNamesake[];
  surnameCombinations?: SurnameCombination[];
  relatedSlugs?: string[];
  confidenceLevel?: DataConfidenceLevel;
  lastReviewedDate?: string;
  references?: string[];
}

export interface SurnameClanSeat {
  clanName: string;              // e.g. 'Gimhae Kim (김해 김씨)'
  foundingAncestor: string;      // e.g. 'King Suro of Gaya'
  ancestralSeat: string;         // e.g. 'Gimhae, South Gyeongsang'
  historicalNotes: string;
}

export interface Surname {
  slug: string;
  english: string;
  hangul: string;
  hanja: string;
  standardRomanization?: string;
  alternativeRomanizations?: string[];
  percentageInKorea: number;     // e.g. 21.5 for Kim
  totalCensusCount?: string;     // e.g. '10,689,959 (2015 Census)'
  meaning: string;
  originClan: string;            // Primary historical clan seat
  clans?: SurnameClanSeat[];     // Granular historical clans
  description: string;
  historicalFigures?: string[];
  recommendedGivenSlugs: string[];
}

export interface ThemeCategory {
  slug: string;
  name: string;
  koreanName: string;
  icon: string;
  description: string;
  seoDescription: string;
  nameCount?: number;
}

export interface HanjaEntry {
  slug: string;                  // e.g. 'min'
  hangul: string;                // '민'
  hanja: string;                 // '敏'
  meaning: string;
  strokeCount: number;
  radical: string;
  radicalStrokeCount?: number;
  supremeCourtApproved?: boolean; // Certified in Supreme Court Registry
  approvalYear?: number;
  personalNameEligible?: boolean;
  readingVariants?: string[];
  commonNames: string[];         // Name slugs using this character
  historicalNotes?: string;
  sources?: string[];
}
