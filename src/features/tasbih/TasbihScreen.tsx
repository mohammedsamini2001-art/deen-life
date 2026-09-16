import { useState } from 'react'
import { isPremiumActive } from '../premium/premium-entitlement'

export default function TasbihScreen({ onBack, onOpenPremium }: { onBack: () => void; onOpenPremium: () => void }) {
  const [count, setCount] = useState(0)

  if (!isPremiumActive()) {
    return (
      <section className="card page-card tasbih-page">
        <button className="back" onClick={onBack}>
          ← Back
        </button>

        <span className="eyebrow">DEEN LIFE PREMIUM</span>
        <h2>Tasbih</h2>
        <p>Tasbih is available with Premium.</p>

        <button className="wide" onClick={onOpenPremium}>
          Unlock Premium
        </button>
      </section>
    )
  }

  function increment() {
    setCount(current => current + 1)
  }

  function reset() {
    setCount(0)
  }

  return (
    <section className="card page-card tasbih-page">
      <button className="back" onClick={onBack}>
        ← Back
      </button>

      <div className="tasbih-header">
        <span className="eyebrow">DEEN LIFE PREMIUM</span>
        <h2>Tasbih</h2>
        <p>Keep count of your dhikr with a calm, simple digital tasbih.</p>
      </div>

      <div className="tasbih-actions">
        <button
          className="tasbih-counter"
          onClick={() => {
            increment()
            navigator.vibrate?.(18)
          }}
          aria-label={`Count dhikr, currently ${count}`}
          aria-live="polite"
        >
          <span className="eyebrow">TAP TO COUNT</span>
          <strong>{count}</strong>
          <span className="tasbih-label">Dhikr</span>
        </button>

        <button className="secondary tasbih-reset-button" onClick={reset}>
          Reset
        </button>
      </div>
    </section>
  )
}
