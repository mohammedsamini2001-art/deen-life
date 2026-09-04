import type {
  QuranRevelationType,
  QuranSurahMetadata,
} from './metadata-types'

interface QuranMetadataSource {
  data?: unknown
}

interface QuranMetadataRecord {
  number?: unknown
  name?: unknown
  englishName?: unknown
  englishNameTranslation?: unknown
  numberOfAyahs?: unknown
  revelationType?: unknown
}

const TOTAL_SURAHS = 114

function isRevelationType(value: unknown): value is QuranRevelationType {
  return value === 'Meccan' || value === 'Medinan'
}

function parseMetadataRecord(value: unknown): QuranSurahMetadata {
  if (!value || typeof value !== 'object') {
    throw new Error('Invalid Qur’an metadata record.')
  }

  const record = value as QuranMetadataRecord

  if (
    typeof record.number !== 'number' ||
    !Number.isInteger(record.number) ||
    record.number < 1 ||
    record.number > TOTAL_SURAHS ||
    typeof record.name !== 'string' ||
    typeof record.englishName !== 'string' ||
    typeof record.englishNameTranslation !== 'string' ||
    typeof record.numberOfAyahs !== 'number' ||
    !Number.isInteger(record.numberOfAyahs) ||
    record.numberOfAyahs < 1 ||
    !isRevelationType(record.revelationType)
  ) {
    throw new Error('Invalid Qur’an surah metadata.')
  }

  return {
    index: record.number,
    nameArabic: record.name,
    nameEnglish: record.englishName,
    nameEnglishTranslation: record.englishNameTranslation,
    ayahCount: record.numberOfAyahs,
    revelationType: record.revelationType,
  }
}

export function parseQuranMetadata(value: unknown): QuranSurahMetadata[] {
  if (!value || typeof value !== 'object') {
    throw new Error('Invalid Qur’an metadata source.')
  }

  const source = value as QuranMetadataSource

  if (!Array.isArray(source.data) || source.data.length !== TOTAL_SURAHS) {
    throw new Error('Qur’an metadata must contain exactly 114 surahs.')
  }

  const metadata = source.data.map(parseMetadataRecord)

  for (let i = 0; i < metadata.length; i += 1) {
    if (metadata[i].index !== i + 1) {
      throw new Error('Qur’an metadata surah indices are not sequential.')
    }
  }

  return metadata
}

const QURAN_METADATA_PATH = '/quran/metadata/surahs.json'

interface QuranMetadataAsset {
  source: string
  metadataVersion: string
  totalSurahs: number
  surahs: QuranSurahMetadata[]
}

function assertMetadataAsset(value: unknown): asserts value is QuranMetadataAsset {
  if (!value || typeof value !== 'object') {
    throw new Error('Invalid Qur’an metadata asset.')
  }

  const asset = value as Partial<QuranMetadataAsset>

  if (
    typeof asset.source !== 'string' ||
    typeof asset.metadataVersion !== 'string' ||
    asset.totalSurahs !== TOTAL_SURAHS ||
    !Array.isArray(asset.surahs) ||
    asset.surahs.length !== TOTAL_SURAHS
  ) {
    throw new Error('Invalid Qur’an metadata asset structure.')
  }
}

export async function getQuranMetadata(): Promise<QuranSurahMetadata[]> {
  const response = await fetch(QURAN_METADATA_PATH)

  if (!response.ok) {
    throw new Error(
      `Failed to load Qur’an metadata: ${response.status}`
    )
  }

  const data: unknown = await response.json()

  assertMetadataAsset(data)

  return data.surahs
}
