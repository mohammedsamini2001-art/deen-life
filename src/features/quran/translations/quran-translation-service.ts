export interface QuranTranslation {
  id: string
  providerId: number
  name: string
  language: string
  languageCode: string | null
  authorName: string | null
  description: string
  direction: 'ltr' | 'rtl' | null
  isPremium: boolean
}

export interface QuranTranslationAyah {
  index: number
  text: string
}

export interface QuranTranslationSurah {
  index: number
  ayahs: QuranTranslationAyah[]
}

interface TranslationCatalogueResponse {
  ok: boolean
  data?: Array<{
    id: number
    name: string
    authorName: string | null
    languageName: string | null
    languageCode: string | null
    direction: 'ltr' | 'rtl' | null
  }>
  error?: string
}

interface TranslationSurahResponse {
  ok: boolean
  data?: unknown
  error?: string
}

const TRANSLATION_API_BASE = '/api/quran/translations'

let cataloguePromise: Promise<QuranTranslation[]> | null = null

function normalizeTranslation(
  value: NonNullable<TranslationCatalogueResponse['data']>[number],
): QuranTranslation {
  return {
    id: `qf-${value.id}`,
    providerId: value.id,
    name: value.name,
    language: value.languageName ?? 'Unknown',
    languageCode: value.languageCode,
    authorName: value.authorName,
    description: value.authorName
      ? `${value.name} — ${value.authorName}`
      : value.name,
    direction: value.direction,
    isPremium: true,
  }
}

async function loadTranslationCatalogue(): Promise<QuranTranslation[]> {
  const response = await fetch(TRANSLATION_API_BASE)

  if (!response.ok) {
    throw new Error(
      `Failed to load Quran translation catalogue: ${response.status}`,
    )
  }

  const data = (await response.json()) as TranslationCatalogueResponse

  if (!data.ok || !Array.isArray(data.data)) {
    throw new Error(
      data.error ?? 'Invalid Quran translation catalogue.',
    )
  }

  return data.data.map(normalizeTranslation)
}

export async function getQuranTranslations(): Promise<QuranTranslation[]> {
  if (!cataloguePromise) {
    cataloguePromise = loadTranslationCatalogue()
  }

  return cataloguePromise
}

export async function getQuranTranslation(
  id: string,
): Promise<QuranTranslation | undefined> {
  const translations = await getQuranTranslations()

  return translations.find(translation => translation.id === id)
}

export function isPremiumTranslation(
  translation: QuranTranslation,
): boolean {
  return translation.isPremium
}

export async function getQuranTranslationSurah(
  translationId: string,
  surahIndex: number,
): Promise<QuranTranslationSurah> {
  const translation = await getQuranTranslation(translationId)

  if (!translation) {
    throw new Error('Unknown Quran translation.')
  }

  if (!Number.isInteger(surahIndex) || surahIndex < 1 || surahIndex > 114) {
    throw new Error('Quran surah index must be between 1 and 114.')
  }

  const response = await fetch(
    `/api/quran/translations/${translation.providerId}/${surahIndex}`,
  )

  if (!response.ok) {
    throw new Error(
      `Failed to load ${translation.name} translation: ${response.status}`,
    )
  }

  const data = (await response.json()) as TranslationSurahResponse

  if (!data.ok || !data.data) {
    throw new Error(
      data.error ?? 'Invalid Quran translation response.',
    )
  }

  if (!isTranslationSurah(data.data)) {
    throw new Error('Invalid Quran translation data.')
  }

  return data.data
}

function isTranslationSurah(
  value: unknown,
): value is QuranTranslationSurah {
  if (!value || typeof value !== 'object') {
    return false
  }

  const surah = value as Partial<QuranTranslationSurah>

  return (
    typeof surah.index === 'number' &&
    Number.isInteger(surah.index) &&
    surah.index >= 1 &&
    surah.index <= 114 &&
    Array.isArray(surah.ayahs) &&
    surah.ayahs.every(isTranslationAyah)
  )
}

function isTranslationAyah(
  value: unknown,
): value is QuranTranslationAyah {
  if (!value || typeof value !== 'object') {
    return false
  }

  const ayah = value as Partial<QuranTranslationAyah>

  return (
    typeof ayah.index === 'number' &&
    Number.isInteger(ayah.index) &&
    typeof ayah.text === 'string' &&
    ayah.text.length > 0
  )
}
