export interface SahihBukhariHadith {
  hadithNumber: number
  bookNumber: number
  chapterNumber: number

  original: {
    language: 'ar'
    text: string
  }

  translations: {
    language: 'en' | 'sw' | 'fr'
    text: string
    sourceName: string
    sourceUrl: string
  }[]

  references: {
    sourceName: string
    sourceUrl: string
  }[]
}
