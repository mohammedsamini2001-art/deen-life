import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export interface QuranSearchResult {
  type: 'quran'
  title: string
  reference: string
  excerpt: string
}

interface QuranAyah {
  index: number
  text: string
  translation: string
  bismillah?: string
}

interface QuranSurah {
  index: number
  nameArabic: string
  ayahs: QuranAyah[]
}

const QURAN_DIR = join(process.cwd(), 'public', 'quran', 'surahs')

const STOP_WORDS = new Set([
  'a',
  'about',
  'an',
  'and',
  'are',
  'as',
  'at',
  'be',
  'can',
  'do',
  'does',
  'for',
  'from',
  'how',
  'i',
  'in',
  'is',
  'it',
  'of',
  'on',
  'or',
  'the',
  'that',
  'this',
  'to',
  'what',
  'which',
  'who',
  'why',
  'with',
])

const QUERY_ALIASES: Record<string, string[]> = {
  zina: ['zina', 'zinaa', 'adultery', 'fornication', 'immorality'],
  zinaa: ['zina', 'zinaa', 'adultery', 'fornication', 'immorality'],
  adultery: ['adultery', 'fornication', 'zina', 'zinaa'],
  fornication: ['fornication', 'adultery', 'zina', 'zinaa'],
  bismillah: ['bismillah', 'name of god', 'name of allah'],
  allah: ['allah', 'god', 'lord'],
  god: ['god', 'allah', 'lord'],
  prayer: ['prayer', 'worship'],
  salah: ['salah', 'prayer', 'worship'],
  swala: ['swala', 'prayer', 'salah'],
  fasting: ['fasting', 'fast'],
  ramadan: ['ramadan', 'fasting'],
  prophet: ['prophet', 'messenger'],
  prophets: ['prophets', 'prophet', 'messengers'],
}

function normalizeArabic(value: string): string {
  return value
    .normalize('NFKD')
    .replace(/[\u064B-\u065F\u0670]/g, '')
    .replace(/[إأٱآ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ؤ/g, 'و')
    .replace(/ئ/g, 'ي')
    .replace(/ة/g, 'ه')
    .toLowerCase()
}

function normalizeText(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function getQueryTerms(query: string): string[] {
  const normalized = normalizeText(query)
  const arabicNormalized = normalizeArabic(query)

  const terms = normalized
    .split(' ')
    .filter((term) => term.length >= 2 && !STOP_WORDS.has(term))

  const arabicTerms = arabicNormalized
    .split(/\s+/)
    .filter((term) => term.length >= 2)

  const expanded = new Set<string>([...terms, ...arabicTerms])

  for (const term of terms) {
    for (const alias of QUERY_ALIASES[term] ?? []) {
      expanded.add(alias)
    }
  }

  return [...expanded]
}

export async function searchQuran(
  query: string,
  limit = 5,
): Promise<QuranSearchResult[]> {
  const normalizedQuery = query.trim()

  if (!normalizedQuery) {
    return []
  }

  const queryTerms = getQueryTerms(normalizedQuery)

  if (queryTerms.length === 0) {
    return []
  }

  const indexPath = join(QURAN_DIR, 'index.json')
  const indexData = JSON.parse(await readFile(indexPath, 'utf8')) as {
    surahs: Array<{
      index: number
      nameArabic: string
      nameEnglish: string
      nameEnglishTranslation: string
      file: string
    }>
  }

  const scoredResults: Array<{
    score: number
    result: QuranSearchResult
  }> = []

  for (const surah of indexData.surahs) {
    const surahPath = join(QURAN_DIR, surah.file)
    const data = JSON.parse(await readFile(surahPath, 'utf8')) as QuranSurah

    const surahText = normalizeText(
      `${surah.nameEnglish} ${surah.nameEnglishTranslation}`,
    )
    const surahArabic = normalizeArabic(surah.nameArabic)

    for (const ayah of data.ayahs) {
      const translation = normalizeText(ayah.translation)
      const arabic = normalizeArabic(ayah.text)

      let score = 0

      for (const term of queryTerms) {
        const englishMatch = translation.includes(term)
        const surahMatch = surahText.includes(term)

        if (englishMatch) {
          score += 3
        }

        if (surahMatch) {
          score += 2
        }

        if (arabic.includes(term) || surahArabic.includes(term)) {
          score += 3
        }
      }

      if (score === 0) {
        continue
      }

      scoredResults.push({
        score,
        result: {
          type: 'quran',
          title: `${surah.nameEnglish} — ${surah.nameEnglishTranslation}`,
          reference: `Qur'an ${surah.index}:${ayah.index}`,
          excerpt: `${ayah.text}\n${ayah.translation}`,
        },
      })
    }
  }

  scoredResults.sort((a, b) => b.score - a.score)

  return scoredResults.slice(0, limit).map((item) => item.result)
}
