import sourceUnits from './sahih-bukhari-book-1-source-units.json'

export interface SahihBukhariSourceUnit {
  id: number
  hadithNumber: number
  chapterNumber: number
  arabic: string
}

const units = sourceUnits as Array<{
  sourceHadith: number
  chapterNumber: number
  arabic: string
}>

export const SAHIH_BUKHARI_SOURCE_UNITS: SahihBukhariSourceUnit[] =
  units.map((unit) => ({
    id: unit.sourceHadith,
    hadithNumber: unit.sourceHadith,
    chapterNumber: unit.chapterNumber,
    arabic: unit.arabic,
  }))
