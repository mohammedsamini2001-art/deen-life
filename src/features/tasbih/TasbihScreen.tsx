import { useState } from 'react'
import { isPremiumActive } from '../premium/premium-entitlement'

export default function TasbihScreen({ onBack, onOpenPremium }: { onBack: () => void; onOpenPremium: () => void }) {
  const [count, setCount] = useState(0)

  if (!isPremiumActive) {
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

      <span className="eyebrow">DEEN LIFE PREMIUM</span>
      <h2>Tasbih</h2>
      <p>Keep count of your dhikr with a simple digital tasbih.</p>

      <div className="tasbih-counter">
        <span className="eyebrow">COUNT</span>
        <strong>{count}</strong>
      </div>

      <button className="wide" onClick={increment}>
        Count Dhikr
      </button>

      <button className="secondary wide" onClick={reset}>
        Reset
      </button>
    </section>
  )
}
