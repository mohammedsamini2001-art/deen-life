import { quranFoundationFetch } from './quran-foundation.js'

export interface QuranFoundationTranslation {
  id: number
  name: string
  authorName: string | null
  languageName: string | null
  languageCode: string | null
  direction: 'ltr' | 'rtl' | null
}

export interface QuranTranslationSurah {
  index: number
  ayahs: Array<{
    index: number
    text: string
  }>
}

interface RawTranslation {
  id?: unknown
  name?: unknown
  author_name?: unknown
  authorName?: unknown
  language_name?: unknown
  languageName?: unknown
  language_code?: unknown
  languageCode?: unknown
  direction?: unknown
}

interface RawCatalogueResponse {
  translations?: unknown
}

interface RawTranslationRow {
  resource_id?: unknown
  id?: unknown
  text?: unknown
  verse_key?: unknown
  verse_number?: unknown
  chapter_id?: unknown
}

interface RawSurahResponse {
  translations?: unknown
  pagination?: {
    current_page?: unknown
    next_page?: unknown
    total_pages?: unknown
    total_records?: unknown
  }
}

function asString(value: unknown): string | null {
  return typeof value === 'string' && value.trim()
    ? value
    : null
}

function normalizeTranslation(
  value: unknown,
): QuranFoundationTranslation | null {
  if (!value || typeof value !== 'object') {
    return null
  }

  const raw = value as RawTranslation

  if (
    typeof raw.id !== 'number' ||
    !Number.isInteger(raw.id)
  ) {
    return null
  }

  const name = asString(raw.name)

  if (!name) {
    return null
  }

  const direction =
    raw.direction === 'ltr' || raw.direction === 'rtl'
      ? raw.direction
      : null

  return {
    id: raw.id,
    name,
    authorName:
      asString(raw.author_name) ??
      asString(raw.authorName),
    languageName:
      asString(raw.language_name) ??
      asString(raw.languageName),
    languageCode:
      asString(raw.language_code) ??
      asString(raw.languageCode),
    direction,
  }
}

export async function getTranslationCatalogue(): Promise<
  QuranFoundationTranslation[]
> {
  const response = await quranFoundationFetch(
    '/resources/translations',
  )

  if (!response.ok) {
    throw new Error(
      `Quran Foundation translations request failed: ${response.status}`,
    )
  }

  const data =
    (await response.json()) as RawCatalogueResponse

  if (!Array.isArray(data.translations)) {
    throw new Error(
      'Invalid Quran Foundation translation response.',
    )
  }

  return data.translations
    .map(normalizeTranslation)
    .filter(
      (
        translation,
      ): translation is QuranFoundationTranslation =>
        translation !== null,
    )
}

function normalizeTranslationRow(
  value: unknown,
  surahIndex: number,
): { index: number; text: string } | null {
  if (!value || typeof value !== 'object') {
    return null
  }

  const raw = value as RawTranslationRow

  if (
    typeof raw.chapter_id !== 'number' ||
    raw.chapter_id !== surahIndex
  ) {
    return null
  }

  if (
    typeof raw.verse_number !== 'number' ||
    !Number.isInteger(raw.verse_number) ||
    raw.verse_number < 1
  ) {
    return null
  }

  if (
    typeof raw.text !== 'string' ||
    raw.text.length === 0
  ) {
    return null
  }

  return {
    index: raw.verse_number,
    text: raw.text,
  }
}

export async function getTranslationSurah(
  resourceId: number,
  surahIndex: number,
): Promise<QuranTranslationSurah> {
  const ayahs = new Map<
    number,
    { index: number; text: string }
  >()

  let page = 1

  while (true) {
    const response = await quranFoundationFetch(
      `/resources/translations/${resourceId}/${surahIndex}?${new URLSearchParams({
        page: String(page),
        per_page: '50',
        fields:
          'text,chapter_id,verse_number,verse_key,resource_id,id',
      }).toString()}`,
    )

    if (!response.ok) {
      throw new Error(
        `Quran Foundation translation request failed: ${response.status}`,
      )
    }

    const data =
      (await response.json()) as RawSurahResponse

    if (!Array.isArray(data.translations)) {
      throw new Error(
        'Invalid Quran Foundation translation response.',
      )
    }

    for (const row of data.translations) {
      const normalized = normalizeTranslationRow(
        row,
        surahIndex,
      )

      if (!normalized) {
        throw new Error(
          'Invalid Quran translation ayah data.',
        )
      }

      const existing = ayahs.get(normalized.index)

      if (existing && existing.text !== normalized.text) {
        throw new Error(
          'Duplicate Quran translation ayah detected.',
        )
      }

      ayahs.set(normalized.index, normalized)
    }

    const pagination = data.pagination

    const nextPage =
      typeof pagination?.next_page === 'number'
        ? pagination.next_page
        : null

    if (!nextPage) {
      break
    }

    if (nextPage <= page) {
      throw new Error(
        'Invalid Quran translation pagination.',
      )
    }

    page = nextPage
  }

  const ordered = [...ayahs.values()].sort(
    (a, b) => a.index - b.index,
  )

  if (ordered.length === 0) {
    throw new Error(
      'Quran translation returned no ayahs.',
    )
  }

  for (let i = 0; i < ordered.length; i += 1) {
    const expectedIndex = i + 1

    if (ordered[i].index !== expectedIndex) {
      throw new Error(
        `Quran translation ayah sequence is incomplete at ayah ${expectedIndex}.`,
      )
    }
  }

  return {
    index: surahIndex,
    ayahs: ordered,
  }
}
