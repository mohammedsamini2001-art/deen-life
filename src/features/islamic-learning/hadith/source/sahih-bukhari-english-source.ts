import englishSource from './sahih-bukhari-english-source.json'

export interface SahihBukhariEnglishHadith {
  hadithNumber: number
  arabicNumber: number
  text: string
}

export interface SahihBukhariEnglishBook {
  bookNumber: number
  hadithCount: number
  hadiths: SahihBukhariEnglishHadith[]
}

const source = englishSource as {
  source: {
    collection: string
    language: string
    attribution: string
    license: string
    licenseUrl: string
    sourceId: string
    sourceUrl: string
  }
  books: Array<{
    bookNumber: number
    hadiths: Array<{
      hadithNumber: number
      arabicNumber: number
      text: string
    }>
  }>
}

export const SAHIH_BUKHARI_ENGLISH_SOURCE = {
  id: 'sahih-al-bukhari-english',
  titleEnglish: 'Sahih al-Bukhari',
  language: 'en',
  translator: source.source.attribution,

  sourceName: source.source.attribution,
  sourceUrl: source.source.sourceUrl,
  license: source.source.license,
  licenseUrl: source.source.licenseUrl,

  books: source.books.map((book) => ({
    bookNumber: book.bookNumber,
    hadithCount: book.hadiths.length,
    hadiths: book.hadiths,
  })) satisfies SahihBukhariEnglishBook[],
} as const
