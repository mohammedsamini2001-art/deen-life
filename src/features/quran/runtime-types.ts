export interface QuranSurahIndexEntry {
  index: number
  nameArabic: string
  nameEnglish: string
  nameEnglishTranslation: string
  ayahCount: number
  revelationType: 'Meccan' | 'Medinan'
  file: string
}

export interface QuranRuntimeIndex {
  source: 'tanzil'
  version: string
  textType: 'uthmani'
  totalSurahs: number
  totalAyahs: number
  surahs: QuranSurahIndexEntry[]
}
