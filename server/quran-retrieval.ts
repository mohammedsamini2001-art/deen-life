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
}

interface QuranSurah {
  index: number
  nameArabic: string
  ayahs: QuranAyah[]
}

const QURAN_DIR = join(process.cwd(), 'public', 'quran', 'surahs')

export async function searchQuran(
  query: string,
  limit = 5,
): Promise<QuranSearchResult[]> {
  const normalizedQuery = query.trim().toLowerCase()

  if (!normalizedQuery) {
    return []
  }

  const indexPath = join(QURAN_DIR, 'index.json')
  const indexData = JSON.parse(await readFile(indexPath, 'utf8')) as {
    surahs: Array<{
      index: number
      nameEnglish: string
      nameEnglishTranslation: string
      file: string
    }>
  }

  const results: QuranSearchResult[] = []

  for (const surah of indexData.surahs) {
    const surahPath = join(QURAN_DIR, surah.file)
    const data = JSON.parse(await readFile(surahPath, 'utf8')) as QuranSurah

    for (const ayah of data.ayahs) {
      const haystack = `${surah.nameEnglish} ${surah.nameEnglishTranslation} ${ayah.translation}`.toLowerCase()

      if (!haystack.includes(normalizedQuery)) {
        continue
      }

      results.push({
        type: 'quran',
        title: `${surah.nameEnglish} — ${surah.nameEnglishTranslation}`,
        reference: `Qur'an ${surah.index}:${ayah.index}`,
        excerpt: ayah.translation,
      })

      if (results.length >= limit) {
        return results
      }
    }
  }

  return results
}
