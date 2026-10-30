export type SeerahVerificationStatus =
  | 'needs-review'
  | 'verified';

export interface SeerahSourceUnit {
  id: string;
  titleArabic: string;
  textArabic: string;
  volume: number | null;
  page: number | null;
  sourceName: string;
  verificationStatus: SeerahVerificationStatus;
}

export interface SeerahLesson {
  number: number;
  slug: string;
  titleArabic: string;
  summaryArabic: string;
  sourceUnitIds: string[];
  status: 'outline' | 'source-verified';
}

export interface SeerahCurriculum {
  sourceId: string;
  language: 'ar';
  lessons: SeerahLesson[];
}
