export type TawheedLanguage = 'ar' | 'en' | 'sw' | 'fr'

export interface TahawiyyahSourceUnit {
  id: number
  arabic: string
}

export interface TahawiyyahLesson {
  number: number
  slug: string
  topic: string
  sourceUnitIds: number[]
  title: Record<TawheedLanguage, string>
  explanation: Record<TawheedLanguage, string>
  quranReferences: string[]
  hadithReferences: string[]
  scholarlyReferences: string[]
}

export interface TahawiyyahCurriculum {
  source: {
    id: string
    titleArabic: string
    titleEnglish: string
    authorArabic: string
    authorEnglish: string
    sourceUrl: string
  }
  lessons: TahawiyyahLesson[]
}
