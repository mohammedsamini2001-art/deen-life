import { useState } from 'react'

type Page = 'home' | 'quran' | 'prayer' | 'duas' | 'qibla' | 'knowledge' | 'premium'

const pages: { id: Page; label: string; icon: string }[] = [
  { id: 'home', label: 'Home', icon: '⌂' },
  { id: 'quran', label: 'Quran', icon: '☾' },
  { id: 'prayer', label: 'Prayer', icon: '◷' },
  { id: 'duas', label: 'Duas', icon: '✦' },
  { id: 'qibla', label: 'Qibla', icon: '◎' },
  { id: 'knowledge', label: 'Learn', icon: '▤' },
]

function App() {
  const [page, setPage] = useState<Page>('home')

  return (
    <div className="app">
      <header className="topbar">
        <div>
          <span className="eyebrow">HIKMAH LABS</span>
          <h1>DEEN LIFE</h1>
        </div>
        <button className="premium-button" onClick={() => setPage('premium')}>Premium</button>
      </header>

      <main className="content">
        {page === 'home' && <Home onNavigate={setPage} />}
        {page === 'quran' && <Section title="Quran" text="Full Quran reading will be delivered as an offline-first feature module." />}
        {page === 'prayer' && <Section title="Prayer Times" text="Prayer calculations and location services will live in this isolated module." />}
        {page === 'duas' && <Section title="Daily Duas" text="Duas will be stored locally so the core experience remains available offline." />}
        {page === 'qibla' && <Section title="Qibla" text="The Qibla compass module will use device orientation when available." />}
        {page === 'knowledge' && <Section title="Islamic Knowledge" text="Lessons and educational content will become searchable offline modules." />}
        {page === 'premium' && <Premium />}
      </main>

      {page !== 'premium' && (
        <nav className="bottom-nav" aria-label="Main navigation">
          {pages.map(item => (
            <button key={item.id} className={page === item.id ? 'nav-item active' : 'nav-item'} onClick={() => setPage(item.id)}>
              <span>{item.icon}</span>
              <small>{item.label}</small>
            </button>
          ))}
        </nav>
      )}
    </div>
  )
}

function Home({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <>
      <section className="hero">
        <span className="badge">NO ACCOUNT · OFFLINE CORE</span>
        <h2>Your Muslim companion.</h2>
        <p>Quran, prayer, duas, Qibla and Islamic knowledge — designed for a simple, focused experience.</p>
        <div className="hero-actions">
          <button onClick={() => onNavigate('quran')}>Open Quran</button>
          <button className="secondary" onClick={() => onNavigate('prayer')}>Prayer Times</button>
        </div>
      </section>

      <section className="grid">
        <Feature title="Quran" icon="☾" onClick={() => onNavigate('quran')} />
        <Feature title="Prayer" icon="◷" onClick={() => onNavigate('prayer')} />
        <Feature title="Duas" icon="✦" onClick={() => onNavigate('duas')} />
        <Feature title="Qibla" icon="◎" onClick={() => onNavigate('qibla')} />
      </section>

      <section className="card">
        <span className="eyebrow">TODAY</span>
        <h3>Build your day around prayer.</h3>
        <p>The clean architecture keeps each feature modular so we can add production functionality without rebuilding the app shell.</p>
      </section>
    </>
  )
}

function Feature({ title, icon, onClick }: { title: string; icon: string; onClick: () => void }) {
  return (
    <button className="feature" onClick={onClick}>
      <span className="feature-icon">{icon}</span>
      <strong>{title}</strong>
      <span>Open →</span>
    </button>
  )
}

function Section({ title, text }: { title: string; text: string }) {
  return (
    <section className="card page-card">
      <button className="back" onClick={() => history.back()}>← Back</button>
      <span className="eyebrow">DEEN LIFE</span>
      <h2>{title}</h2>
      <p>{text}</p>
      <div className="status">MODULE READY</div>
    </section>
  )
}

function Premium() {
  return (
    <section className="card page-card premium-page">
      <span className="eyebrow">DEEN LIFE PREMIUM</span>
      <h2>More value, still no ads.</h2>
      <p>Premium infrastructure is reserved for secure Paystack checkout, entitlement tracking and future premium features.</p>
      <div className="price">$3.99 / month</div>
      <button className="wide">Payment integration comes after deployment setup</button>
    </section>
  )
}

export default App
