import { useEffect, useState } from 'react'
import {
  PLAN_LABELS,
  PREMIUM_PLANS,
  confirmPremiumPayment,
  refreshPremiumStatus,
  startFreeTrial,
  startPremiumCheckout,
  type PremiumPlan,
  type PremiumStatus,
} from './premium-entitlement'

function formatExpiry(expiresAt?: string): string {
  if (!expiresAt) return ''
  return new Intl.DateTimeFormat(undefined, {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(expiresAt))
}

export default function PremiumScreen({ onOpenTasbih }: { onOpenTasbih: () => void }) {
  const [status, setStatus] = useState<PremiumStatus | null>(null)
  const [loading, setLoading] = useState(true)
  const [pendingPlan, setPendingPlan] = useState<PremiumPlan | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [verifyMessage, setVerifyMessage] = useState<string | null>(null)
  const [trialPending, setTrialPending] = useState(false)

  useEffect(() => {
    async function init() {
      const params = new URLSearchParams(window.location.search)
      const reference = params.get('reference') || params.get('trxref')

      if (reference) {
        try {
          const result = await confirmPremiumPayment(reference)
          setStatus(result)
          setVerifyMessage(
            result.isPremium
              ? 'Payment confirmed -- Premium is now active.'
              : 'We could not confirm that payment. If you were charged, contact support.',
          )
        } catch {
          setVerifyMessage('We could not confirm that payment. If you were charged, contact support.')
        }

        const cleanUrl = window.location.pathname
        window.history.replaceState({}, '', cleanUrl)
      } else {
        const result = await refreshPremiumStatus()
        setStatus(result)
      }

      setLoading(false)
    }

    init()
  }, [])

  async function handleStartTrial() {
    setError(null)
    setTrialPending(true)

    try {
      const result = await startFreeTrial()
      setStatus(result)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not start your free trial')
    } finally {
      setTrialPending(false)
    }
  }

  async function handleSubscribe(plan: PremiumPlan) {
    setError(null)
    setPendingPlan(plan)

    try {
      const authorizationUrl = await startPremiumCheckout(plan)
      window.location.href = authorizationUrl
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not start checkout')
      setPendingPlan(null)
    }
  }

  return (
    <section className="card page-card premium-page">
      <button className="back" onClick={() => history.back()}>
        ← Back
      </button>
      <span className="eyebrow">DEEN LIFE PREMIUM</span>
      <h2>More value, still no ads.</h2>
      <p>
        Premium unlocks Adhan alarms timed to your prayer schedule, with more
        features on the way.
      </p>

      {verifyMessage && <div className="premium-verify-message">{verifyMessage}</div>}

      {loading ? (
        <div className="status">Checking your subscription…</div>
      ) : status?.isPremium ? (
        <div className="premium-status premium-status-active">
          <strong>Premium is active</strong>
          <span>
            {status.plan ? PLAN_LABELS[status.plan] : ''} plan
            {status.expiresAt ? ` · renews ${formatExpiry(status.expiresAt)}` : ''}
          </span>
        </div>
      ) : (
        <div className="premium-plans">
          {status?.trialAvailable && (
            <div className="premium-plan-card premium-trial-card">
              <span className="eyebrow">NEW HERE?</span>
              <div className="price">Free</div>
              <small>1 month, no payment required</small>
              <button className="wide" disabled={trialPending} onClick={handleStartTrial}>
                {trialPending ? 'Starting…' : 'Start Free Trial'}
              </button>
            </div>
          )}

          <div className="premium-plan-card">
            <span className="eyebrow">MONTHLY</span>
            <div className="price">KES {PREMIUM_PLANS.monthly.amountKes}</div>
            <small>per month</small>
            <button
              className="wide"
              disabled={pendingPlan === 'monthly'}
              onClick={() => handleSubscribe('monthly')}
            >
              {pendingPlan === 'monthly' ? 'Redirecting…' : 'Subscribe Monthly'}
            </button>
          </div>

          <div className="premium-plan-card premium-plan-featured">
            <span className="eyebrow">YEARLY · 3 MONTHS FREE</span>
            <div className="price">KES {PREMIUM_PLANS.yearly.amountKes}</div>
            <small>per year — 15 months of access</small>
            <button
              className="wide"
              disabled={pendingPlan === 'yearly'}
              onClick={() => handleSubscribe('yearly')}
            >
              {pendingPlan === 'yearly' ? 'Redirecting…' : 'Subscribe Yearly'}
            </button>
          </div>
        </div>
      )}

      {error && <div className="premium-error">{error}</div>}
    </section>
  )
}
