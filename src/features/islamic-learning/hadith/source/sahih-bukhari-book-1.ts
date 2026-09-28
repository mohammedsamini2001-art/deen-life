export interface SahihBukhariChapter {
  chapterNumber: number
  titleArabic: string
  titleEnglish: string | null
  hadithNumbers: number[]
}

export interface SahihBukhariHadithReference {
  hadithNumber: number
  chapterNumber: number
}

export const SAHIH_BUKHARI_BOOK_1 = {
  bookNumber: 1,
  titleArabic: 'بدء الوحي',
  titleEnglish: 'Revelation',

  chapters: [
    {
      chapterNumber: 1,
      titleArabic: 'كيف كان بدء الوحي إلى رسول الله صلى الله عليه وسلم',
      titleEnglish:
        'How the Divine Revelation started being revealed to Allah’s Messenger',
      hadithNumbers: [1],
    },
    {
      chapterNumber: 2,
      titleArabic: 'باب',
      titleEnglish: null,
      hadithNumbers: [2],
    },
    {
      chapterNumber: 3,
      titleArabic: 'باب',
      titleEnglish: null,
      hadithNumbers: [3],
    },
    {
      chapterNumber: 4,
      titleArabic: 'باب',
      titleEnglish: null,
      hadithNumbers: [4],
    },
    {
      chapterNumber: 5,
      titleArabic: 'باب',
      titleEnglish: null,
      hadithNumbers: [5],
    },
    {
      chapterNumber: 6,
      titleArabic: 'باب',
      titleEnglish: null,
      hadithNumbers: [6, 7],
    },
  ] satisfies SahihBukhariChapter[],

  hadithReferences: [
    { hadithNumber: 1, chapterNumber: 1 },
    { hadithNumber: 2, chapterNumber: 2 },
    { hadithNumber: 3, chapterNumber: 3 },
    { hadithNumber: 4, chapterNumber: 4 },
    { hadithNumber: 5, chapterNumber: 5 },
    { hadithNumber: 6, chapterNumber: 6 },
    { hadithNumber: 7, chapterNumber: 6 },
  ] satisfies SahihBukhariHadithReference[],
} as const
