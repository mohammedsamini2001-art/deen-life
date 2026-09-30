import arabicSource from './sahih-bukhari-arabic-source.json'

export interface SahihBukhariBookHadith {
  hadithNumber: number
  arabicNumber: number
  text: string
}

export interface SahihBukhariBook {
  bookNumber: number
  titleArabic: string | null
  titleEnglish: string | null
  hadithCount: number
  hadiths: SahihBukhariBookHadith[]
}

const source = arabicSource as {
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

export const SAHIH_BUKHARI_SOURCE = {
  id: 'sahih-al-bukhari',
  titleArabic: 'صحيح البخاري',
  titleEnglish: 'Sahih al-Bukhari',
  authorArabic: 'محمد بن إسماعيل البخاري',
  authorEnglish: 'Imam Muhammad ibn Isma‘il al-Bukhari',

  sourceName: source.source.attribution,
  sourceUrl: source.source.sourceUrl,
  license: source.source.license,
  licenseUrl: source.source.licenseUrl,

  books: source.books.map((book) => ({
    bookNumber: book.bookNumber,
    titleArabic: null,
    titleEnglish: null,
    hadithCount: book.hadiths.length,
    hadiths: book.hadiths,
  })) satisfies SahihBukhariBook[],
} as const
