export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...init?.headers,
    },
  })

  const data = (await response.json()) as T & { ok?: boolean; error?: string }

  if (!response.ok || data.ok === false) {
    throw new Error(data.error || `Request to ${path} failed`)
  }

  return data
}
