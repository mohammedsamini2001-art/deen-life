import kiswahiliSource from './sahih-bukhari-kiswahili-source.json'

export interface SahihBukhariKiswahiliHadith {
  id: number
  title: string
  kiswahili: string
  grade: string
  takhrij: string
  link: string
}

const source = kiswahiliSource as {
  source: {
    collection: string
    language: string
    attribution: string
    version: string
    sourceId: string
    sourceUrl: string
    downloadUrl: string
    recordCount: number
  }
  records: SahihBukhariKiswahiliHadith[]
}

export const SAHIH_BUKHARI_KISWAHILI_SOURCE = {
  id: 'sahih-al-bukhari-kiswahili-hadeethenc',
  title: 'Sahih al-Bukhari — Kiswahili',
  language: 'sw',
  sourceName: source.source.attribution,
  version: source.source.version,
  sourceId: source.source.sourceId,
  sourceUrl: source.source.sourceUrl,
  downloadUrl: source.source.downloadUrl,
  recordCount: source.source.recordCount,
  records: source.records,
} as const
