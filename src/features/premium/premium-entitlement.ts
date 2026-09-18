import { apiFetch } from '../../lib/api'
import { getDeviceToken } from './device-token'

export type PremiumPlan = 'monthly' | 'yearly'

export interface PremiumStatus {
  isPremium: boolean
  plan?: PremiumPlan
  expiresAt?: string
}

export const PREMIUM_PLANS: Record<PremiumPlan, { amountKes: number; label: string }> = {
  monthly: { amountKes: 29, label: 'Monthly' },
  yearly: { amountKes: 199, label: 'Yearly' },
}

const CACHE_KEY = 'deen-life:premium-status-cache'

function readCache(): PremiumStatus | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as PremiumStatus
  } catch {
    return null
  }
}

function writeCache(status: PremiumStatus): void {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(status))
  } catch {
    // Ignore storage failures.
  }
}

/**
 * Cached, synchronous check for gating UI (e.g. showing/hiding the Adhan
 * alarm toggles instantly on render). This can be briefly stale -- call
 * refreshPremiumStatus() on app load / Premium screen open to reconcile
 * with the server, which is the actual source of truth.
 */
export function isPremiumActive(): boolean {
  const cached = readCache()
  if (!cached?.isPremium || !cached.expiresAt) return false
  return new Date(cached.expiresAt) > new Date()
}

export async function refreshPremiumStatus(): Promise<PremiumStatus> {
  const deviceToken = getDeviceToken()

  try {
    const result = await apiFetch<PremiumStatus>(
      `/api/premium/status?deviceToken=${encodeURIComponent(deviceToken)}`,
    )
    writeCache(result)
    return result
  } catch {
    // Server unreachable -- fall back to the last known cached status
    // rather than silently revoking premium (e.g. brief network drop).
    return readCache() ?? { isPremium: false }
  }
}

export async function startPremiumCheckout(plan: PremiumPlan): Promise<string> {
  const deviceToken = getDeviceToken()

  const result = await apiFetch<{ authorizationUrl: string; reference: string }>(
    '/api/premium/pay',
    {
      method: 'POST',
      body: JSON.stringify({ deviceToken, plan }),
    },
  )

  return result.authorizationUrl
}

export async function confirmPremiumPayment(reference: string): Promise<PremiumStatus> {
  const result = await apiFetch<PremiumStatus>(
    `/api/premium/verify?reference=${encodeURIComponent(reference)}`,
  )
  writeCache(result)
  return result
}
