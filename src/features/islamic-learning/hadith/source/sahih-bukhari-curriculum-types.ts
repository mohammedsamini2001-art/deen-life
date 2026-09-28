export type SahihBukhariLanguage = 'ar' | 'en' | 'sw' | 'fr'

export interface SahihBukhariChapterLesson {
  number: number
  slug: string
  teachingTitle: string
  sourceUnitIds: number[]
  original: {
    language: 'ar'
    sourceUnitIds: number[]
  }
  title: Record<Exclude<SahihBukhariLanguage, 'ar'>, string>
  translations: []
  explanation: Record<Exclude<SahihBukhariLanguage, 'ar'>, string>
  quranReferences: string[]
  hadithReferences: string[]
  scholarlyReferences: string[]
}

export interface SahihBukhariCurriculum {
  source: {
    id: string
    titleArabic: string
    titleEnglish: string
    authorArabic: string
    authorEnglish: string
    sourceUrl: string
  }
  lessons: SahihBukhariChapterLesson[]
}
