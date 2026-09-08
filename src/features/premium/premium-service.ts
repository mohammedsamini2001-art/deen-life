export type PremiumPlan = 'monthly' | 'yearly'

export interface PremiumEntitlement {
  active: boolean
  plan: PremiumPlan | null
  expiresAt: string | null
}

const STORAGE_KEY = 'deen-life-premium-entitlement'

const DEFAULT_ENTITLEMENT: PremiumEntitlement = {
  active: false,
  plan: null,
  expiresAt: null,
}

export function getPremiumEntitlement(): PremiumEntitlement {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)

    if (!raw) {
      return DEFAULT_ENTITLEMENT
    }

    const entitlement = JSON.parse(raw) as PremiumEntitlement

    if (!entitlement.active) {
      return DEFAULT_ENTITLEMENT
    }

    if (entitlement.expiresAt) {
      const expiry = new Date(entitlement.expiresAt).getTime()

      if (!Number.isNaN(expiry) && expiry <= Date.now()) {
        return DEFAULT_ENTITLEMENT
      }
    }

    return entitlement
  } catch {
    return DEFAULT_ENTITLEMENT
  }
}

export function isPremiumActive(): boolean {
  return getPremiumEntitlement().active
}

export function requirePremium(): void {
  if (!isPremiumActive()) {
    throw new Error('DEEN LIFE Premium subscription required.')
  }
}
