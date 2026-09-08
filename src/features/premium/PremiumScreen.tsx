import { useState } from 'react'

type Plan = 'monthly' | 'yearly'

interface PremiumScreenProps {
  onBack: () => void
}

const PLANS = {
  monthly: {
    name: 'Monthly',
    price: 'KSh 100',
    period: '/ month',
    description: 'Full Premium access, billed monthly.',
  },
  yearly: {
    name: 'Yearly',
    price: 'KSh 700',
    period: '/ year',
    description: 'Full Premium access for the year.',
  },
}

function PremiumScreen({ onBack }: PremiumScreenProps) {
  const [plan, setPlan] = useState<Plan>('yearly')

  return (
    <section className="card page-card premium-page">
      <button className="back" onClick={onBack}>← Back</button>

      <span className="eyebrow">DEEN LIFE PREMIUM</span>

      <h2>Go deeper with the Qur’an.</h2>

      <p>
        Unlock the Premium Quran experience with verified recitations,
        translations and future Premium learning features — without ads.
      </p>

      <div className="premium-plan-grid">
        {(Object.keys(PLANS) as Plan[]).map((key) => {
          const item = PLANS[key]

          return (
            <button
              key={key}
              className={plan === key ? 'premium-plan selected' : 'premium-plan'}
              onClick={() => setPlan(key)}
            >
              <span className="eyebrow">{item.name}</span>
              <strong>{item.price}</strong>
              <span>{item.period}</span>
              <small>{item.description}</small>
            </button>
          )
        })}
      </div>

      <div className="premium-features">
        <span className="eyebrow">INCLUDED WITH PREMIUM</span>

        <div className="premium-feature">
          <strong>🎧 Quran Audio</strong>
          <span>Access all verified available Arabic recitations.</span>
        </div>

        <div className="premium-feature">
          <strong>📖 Quran Translations</strong>
          <span>Access verified available text translation editions.</span>
        </div>

        <div className="premium-feature">
          <strong>⬇ Offline Premium Quran</strong>
          <span>Premium Quran resources can be prepared for offline use.</span>
        </div>
      </div>

      <button className="wide premium-checkout">
        Continue with {PLANS[plan].name} — {PLANS[plan].price}
      </button>

      <p className="premium-note">
        Secure subscription checkout will be connected to the DEEN LIFE
        payment backend.
      </p>
    </section>
  )
}

export default PremiumScreen
