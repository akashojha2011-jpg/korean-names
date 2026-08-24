import type { ThemeCategory } from '../types/name';

export const THEME_CATEGORIES: ThemeCategory[] = [
  {
    slug: 'nature',
    name: 'Nature & Earth',
    koreanName: '자연과 대지',
    icon: '🌱',
    description: 'Names inspired by flowers, rivers, sky, stars, pine trees, and natural beauty.',
    seoDescription: 'Explore Korean names inspired by nature, river currents, stars, ocean breezes, and botanical grace.'
  },
  {
    slug: 'wisdom',
    name: 'Wisdom & Intellect',
    koreanName: '지혜와 총명',
    icon: '💡',
    description: 'Names symbolizing sharp intellect, deep knowledge, quick learning, and foresight.',
    seoDescription: 'Find Korean baby names that embody wisdom, scholarship, clear insight, and brilliant intelligence.'
  },
  {
    slug: 'brightness',
    name: 'Light & Sun',
    koreanName: '밝음과 빛',
    icon: '☀️',
    description: 'Names carrying radiant light, warmth, morning sun rays, and cheerful optimism.',
    seoDescription: 'Discover glowing Korean names meaning light, sunshine, radiant warmth, and joyful hope.'
  },
  {
    slug: 'grace',
    name: 'Grace & Elegance',
    koreanName: '은혜와 아름다움',
    icon: '✨',
    description: 'Names representing refined elegance, divine blessing, gentleness, and artistic beauty.',
    seoDescription: 'Beautiful Korean baby names denoting graceful charm, divine favour, and timeless elegance.'
  },
  {
    slug: 'strength',
    name: 'Strength & Valor',
    koreanName: '용기와 힘',
    icon: '🛡️',
    description: 'Names denoting courage, standing tall like a mountain, heroic spirit, and resilience.',
    seoDescription: 'Strong Korean names for boys and girls that signify courage, heroic integrity, and fortitude.'
  },
  {
    slug: 'k-pop',
    name: 'K-Pop & Idol Inspired',
    koreanName: 'K-POP 아이돌 스타일',
    icon: '🎵',
    description: 'Trending Korean names popularized by global K-Pop idols, actors, and modern pop icons.',
    seoDescription: 'Popular Korean names made famous by BTS, BLACKPINK, TWICE, NewJeans, and K-Drama stars.'
  },
  {
    slug: 'modern',
    name: 'Modern & Soft',
    koreanName: '세련된 현대식',
    icon: '🎨',
    description: 'Contemporary, soft-sounding Korean names favoured by young parents in Seoul today.',
    seoDescription: 'Top trending modern Korean baby names with stylish phonetics and contemporary charm.'
  },
  {
    slug: 'royal',
    name: 'Royal & Traditional',
    koreanName: '전통과 궁중',
    icon: '👑',
    description: 'Classic names rooted in Korean heritage, royal dynastic history, and Confucian virtue.',
    seoDescription: 'Traditional Korean names carrying royal history, honorable virtues, and rich cultural heritage.'
  },
  {
    slug: 'one-syllable',
    name: 'Single Syllable (외자)',
    koreanName: '외자 이름',
    icon: '⚡',
    description: 'Distinctive, punchy 1-syllable Korean names with deep singular character meanings.',
    seoDescription: 'Explore elegant one-syllable Korean names (Oeja) renowned for strong impact and clarity.'
  }
];

export function getCategoryBySlug(slug: string): ThemeCategory | undefined {
  return THEME_CATEGORIES.find(c => c.slug.toLowerCase() === slug.toLowerCase());
}
