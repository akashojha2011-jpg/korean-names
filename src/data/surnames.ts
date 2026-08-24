import type { Surname } from '../types/name';
import { generate500KoreanSurnames } from './surname-generator';

export const SURNAMES: Surname[] = generate500KoreanSurnames();

export function getSurnameBySlug(slug: string): Surname | undefined {
  return SURNAMES.find(s => s.slug.toLowerCase() === slug.toLowerCase());
}
