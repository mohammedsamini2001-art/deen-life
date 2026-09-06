export interface QuranBookmark {
  surahIndex: number
  ayahIndex: number
  createdAt: number
}

const STORAGE_KEY = 'deen-life:quran-bookmarks'

function readBookmarks(): QuranBookmark[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []

    const value: unknown = JSON.parse(raw)

    if (!Array.isArray(value)) return []

    return value.filter(item => {
      if (!item || typeof item !== 'object') return false

      const bookmark = item as Record<string, unknown>

      return (
        Number.isInteger(bookmark.surahIndex) &&
        (bookmark.surahIndex as number) >= 1 &&
        (bookmark.surahIndex as number) <= 114 &&
        Number.isInteger(bookmark.ayahIndex) &&
        (bookmark.ayahIndex as number) >= 1 &&
        typeof bookmark.createdAt === 'number'
      )
    }) as QuranBookmark[]
  } catch {
    return []
  }
}

export function getQuranBookmarks(): QuranBookmark[] {
  return readBookmarks()
}

export function isQuranBookmarked(
  surahIndex: number,
  ayahIndex: number,
): boolean {
  return readBookmarks().some(
    bookmark =>
      bookmark.surahIndex === surahIndex &&
      bookmark.ayahIndex === ayahIndex,
  )
}

export function toggleQuranBookmark(
  surahIndex: number,
  ayahIndex: number,
): QuranBookmark[] {
  const bookmarks = readBookmarks()

  const exists = bookmarks.some(
    bookmark =>
      bookmark.surahIndex === surahIndex &&
      bookmark.ayahIndex === ayahIndex,
  )

  const next = exists
    ? bookmarks.filter(
        bookmark =>
          !(
            bookmark.surahIndex === surahIndex &&
            bookmark.ayahIndex === ayahIndex
          ),
      )
    : [
        ...bookmarks,
        {
          surahIndex,
          ayahIndex,
          createdAt: Date.now(),
        },
      ]

  localStorage.setItem(STORAGE_KEY, JSON.stringify(next))

  return next
}
