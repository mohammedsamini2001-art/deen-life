const STORAGE_KEY = 'deen-life:quran-reciter'

export function getPreferredReciter(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

export function savePreferredReciter(reciterId: string): void {
  try {
    localStorage.setItem(STORAGE_KEY, reciterId)
  } catch {
    // Ignore storage failures (e.g. private browsing).
  }
}
