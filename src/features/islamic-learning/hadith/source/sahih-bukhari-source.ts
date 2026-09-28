export interface SahihBukhariBook {
  bookNumber: number
  titleArabic: string
  titleEnglish: string
  hadithRange?: {
    start: number
    end: number
  }
}

export const SAHIH_BUKHARI_SOURCE = {
  id: 'sahih-al-bukhari',
  titleArabic: 'صحيح البخاري',
  titleEnglish: 'Sahih al-Bukhari',
  authorArabic: 'محمد بن إسماعيل البخاري',
  authorEnglish: 'Imam Muhammad ibn Isma‘il al-Bukhari',
  sourceName: 'Sunnah.com — Sahih al-Bukhari',
  sourceUrl: 'https://sunnah.com/bukhari',

  books: [
    {
      bookNumber: 1,
      titleArabic: 'بدء الوحي',
      titleEnglish: 'Revelation',
      hadithRange: {
        start: 1,
        end: 7,
      },
    },
  ] satisfies SahihBukhariBook[],
} as const
