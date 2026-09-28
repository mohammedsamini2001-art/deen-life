import type {
  SahihBukhariCurriculum,
  SahihBukhariChapterLesson,
} from './sahih-bukhari-curriculum-types'

import { SAHIH_BUKHARI_SOURCE_UNITS } from './sahih-bukhari-source-units'
import { SAHIH_BUKHARI_SOURCE } from './sahih-bukhari-source'
import { SAHIH_BUKHARI_BOOK_1 } from './sahih-bukhari-book-1'

const chapterLessons: SahihBukhariChapterLesson[] =
  SAHIH_BUKHARI_BOOK_1.chapters.map((chapter) => ({
    number: chapter.chapterNumber,
    slug: `chapter-${chapter.chapterNumber}`,
    teachingTitle: chapter.titleEnglish ?? chapter.titleArabic,
    sourceUnitIds: chapter.hadithNumbers,
    original: {
      language: 'ar',
      sourceUnitIds: chapter.hadithNumbers,
    },
    title: {
      en: chapter.titleEnglish ?? chapter.titleArabic,
      sw: chapter.titleArabic,
      fr: chapter.titleArabic,
    },
    translations: [],
    explanation: {
      en: '',
      sw: '',
      fr: '',
    },
    quranReferences: [],
    hadithReferences: chapter.hadithNumbers.map(
      (number) => `Sahih al-Bukhari ${number}`,
    ),
    scholarlyReferences: [],
  }))

export const SAHIH_BUKHARI_CURRICULUM: SahihBukhariCurriculum = {
  source: {
    id: SAHIH_BUKHARI_SOURCE.id,
    titleArabic: SAHIH_BUKHARI_SOURCE.titleArabic,
    titleEnglish: SAHIH_BUKHARI_SOURCE.titleEnglish,
    authorArabic: SAHIH_BUKHARI_SOURCE.authorArabic,
    authorEnglish: SAHIH_BUKHARI_SOURCE.authorEnglish,
    sourceUrl: SAHIH_BUKHARI_SOURCE.sourceUrl,
  },
  lessons: chapterLessons,
}

export { SAHIH_BUKHARI_SOURCE_UNITS }
