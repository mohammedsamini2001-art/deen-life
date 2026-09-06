export interface QuranProgress {
  surahIndex: number
  ayahIndex: number
  updatedAt: number
}

const STORAGE_KEY = 'deen-life:quran-progress'

export function getQuranProgress(): QuranProgress | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null

    const value: unknown = JSON.parse(raw)

    if (!value || typeof value !== 'object') return null

    const progress = value as Record<string, unknown>

    if (
      !Number.isInteger(progress.surahIndex) ||
      (progress.surahIndex as number) < 1 ||
      (progress.surahIndex as number) > 114 ||
      !Number.isInteger(progress.ayahIndex) ||
      (progress.ayahIndex as number) < 1 ||
      typeof progress.updatedAt !== 'number'
    ) {
      return null
    }

    return {
      surahIndex: progress.surahIndex as number,
      ayahIndex: progress.ayahIndex as number,
      updatedAt: progress.updatedAt as number,
    }
  } catch {
    return null
  }
}

export function saveQuranProgress(
  surahIndex: number,
  ayahIndex: number,
): QuranProgress {
  const progress: QuranProgress = {
    surahIndex,
    ayahIndex,
    updatedAt: Date.now(),
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))

  return progress
}

export function clearQuranProgress(): void {
  localStorage.removeItem(STORAGE_KEY)
}
