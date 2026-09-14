import { useState } from 'react'

export default function TasbihScreen({ onBack }: { onBack: () => void }) {
  const [count, setCount] = useState(0)

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
