const STORAGE_KEY = 'deen-life:device-token'

export function getDeviceToken(): string {
  try {
    const existing = localStorage.getItem(STORAGE_KEY)
    if (existing) return existing

    const token = crypto.randomUUID()
    localStorage.setItem(STORAGE_KEY, token)
    return token
  } catch {
    // localStorage unavailable (private browsing, etc.) -- fall back to a
    // session-only token so the app still functions for this visit.
    return crypto.randomUUID()
  }
}
