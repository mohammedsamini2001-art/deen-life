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

        <div className="tasbih-header">
          <span className="eyebrow">DEEN LIFE PREMIUM</span>
          <h2>Tasbih</h2>
          <p>Tasbih is available with Premium.</p>
        </div>

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

      <div className="tasbih-content">
        <div className="tasbih-count-display" aria-live="polite">
          <span className="eyebrow">COUNT</span>
          <strong>{count}</strong>
        </div>

        <button
          className="tasbih-counter"
          onClick={() => {
            increment()
            navigator.vibrate?.(18)
          }}
          aria-label={`Tap to count dhikr, currently ${count}`}
        >
          <span className="tasbih-tap-icon" aria-hidden="true">◌</span>
          <span className="tasbih-tap-text">Tap to count</span>
          <span className="tasbih-tap-subtext">Dhikr</span>
        </button>

        <button className="secondary tasbih-reset-button" onClick={reset}>
          Reset
        </button>
      </div>
    </section>
  )
}
