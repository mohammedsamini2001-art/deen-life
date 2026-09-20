export type TawheedLanguage = 'ar' | 'en' | 'sw' | 'fr'

export interface TahawiyyahSourceUnit {
  id: number
  arabic: string
}

export interface TahawiyyahLesson {
  number: number
  slug: string
  teachingTitle: string
  sourceUnitIds: number[]

  original: {
    language: 'ar'
    sourceUnitIds: number[]
  }

  title: Record<Exclude<TawheedLanguage, 'ar'>, string>
  translation: Record<Exclude<TawheedLanguage, 'ar'>, string>
  explanation: Record<Exclude<TawheedLanguage, 'ar'>, string>

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
