export type QuranRevelationType = 'Meccan' | 'Medinan'

export interface QuranSurahMetadata {
  index: number
  nameArabic: string
  nameEnglish: string
  nameEnglishTranslation: string
  ayahCount: number
  revelationType: QuranRevelationType
}
