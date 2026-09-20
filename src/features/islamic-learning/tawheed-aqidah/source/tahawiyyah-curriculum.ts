import type {
  TahawiyyahCurriculum,
  TahawiyyahSourceUnit,
} from './tahawiyyah-curriculum-types'

import sourceUnits from './tahawiyyah-source-units.json'

const units = sourceUnits as Array<{
  sourceParagraph: number
  arabic: string
}>

export const TAHAWIYYAH_SOURCE_UNITS: TahawiyyahSourceUnit[] =
  units.map((unit) => ({
    id: unit.sourceParagraph,
    arabic: unit.arabic,
  }))

export const TAHAWIYYAH_CURRICULUM: TahawiyyahCurriculum = {
  source: {
    id: 'al-aqidah-al-tahawiyyah',
    titleArabic: 'العقيدة الطحاوية',
    titleEnglish: 'Al-Aqidah al-Tahawiyyah',
    authorArabic: 'أبو جعفر أحمد بن محمد الطحاوي',
    authorEnglish: 'Abu Ja‘far Ahmad ibn Muhammad al-Tahawi',
    sourceUrl: 'https://islamhouse.com/ar/books/1899',
  },
  lessons: [],
}
