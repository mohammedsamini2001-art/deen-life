import { useEffect, useState } from 'react'
import QuranReader from './features/quran/QuranReader'
import PrayerTimes from './features/prayer/PrayerTimes'

type Page = 'home' | 'quran' | 'prayer' | 'duas' | 'qibla' | 'knowledge' | 'premium'

const pages: { id: Page; label: string; icon: string }[] = [
  { id: 'home', label: 'Home', icon: '⌂' },
  { id: 'quran', label: 'Quran', icon: '☾' },
  { id: 'prayer', label: 'Prayer', icon: '◷' },
  { id: 'duas', label: 'Duas', icon: '✦' },
  { id: 'qibla', label: 'Qibla', icon: '◎' },
  { id: 'knowledge', label: 'Learn', icon: '▤' },
]

const DAILY_MESSAGES = [
  'Make today meaningful.',
  'Guard your prayers.',
  'Begin your day with remembrance of Allah.',
  'Seek knowledge that benefits you.',
  'Be grateful for the blessings you already have.',
  'Do one good deed quietly.',
  'Let your character reflect your faith.',
  'Keep your heart connected to Allah.',
  'Choose patience when things become difficult.',
  'Make time for the Qur’an today.',
  'Speak with kindness.',
  'Trust Allah while doing your part.',
  'Small consistent deeds can become great deeds.',
  'Remember Allah in the moments between your plans.',
  'Use today as an opportunity to grow.',
  'Forgive where forgiveness brings goodness.',
  'Protect your tongue and purify your intention.',
  'Give someone hope today.',
  'Turn your worries into sincere dua.',
  'Let your actions carry your values.',
]

function getRandomMessage(current: string): string {
  const choices = DAILY_MESSAGES.filter(message => message !== current)
  return choices[Math.floor(Math.random() * choices.length)]
}

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
        {page === 'quran' && <QuranReader onBack={() => setPage('home')} />}
        {page === 'prayer' && <PrayerTimes onBack={() => setPage('home')} />}
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
  const [dailyMessage, setDailyMessage] = useState(DAILY_MESSAGES[0])

  useEffect(() => {
    const interval = window.setInterval(() => {
      setDailyMessage(current => getRandomMessage(current))
    }, 30_000)

    return () => window.clearInterval(interval)
  }, [])


  return (
    <div className="home-dashboard">
      <section className="home-hero">
        <div className="home-hero-art" aria-hidden="true">
          <div className="home-hero-glow" />
          <div className="home-hero-pattern" />
          <img
            className="home-hero-scene"
            src="/images/deen-life/home-hero.jpg"
            alt=""
          />
        </div>
        <div className="home-hero-content">
          <span className="eyebrow">ASSALAMU ALAIKUM</span>
          <h2 key={dailyMessage}>{dailyMessage}</h2>
          <p>Read, pray, remember and learn — one beautiful Muslim day at a time.</p>
          <button className="home-hero-action" onClick={() => onNavigate('quran')}>
            Continue your Qur’an journey →
          </button>
        </div>
      </section>

      <section className="dashboard-prayer card">
        <div>
          <span className="eyebrow">PRAYER</span>
          <h3>Prayer Times</h3>
          <p>Open Prayer Times to check your Salah schedule and prepare for the next prayer.</p>
        </div>
        <button className="dashboard-action" onClick={() => onNavigate('prayer')}>
          Open Prayer →
        </button>
      </section>

      <section className="continue-card card" onClick={() => onNavigate('quran')} role="button" tabIndex={0}>
        <div>
          <span className="eyebrow">THE QURAN</span>
          <h3>Read the Noble Qur’an</h3>
          <p>Open the verified Uthmani Arabic text and choose a surah to begin reading.</p>
        </div>
        <span className="continue-arrow">→</span>
      </section>

      <section className="dashboard-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">FOR YOUR DAY</span>
            <h3>Small moments, lasting benefit.</h3>
          </div>
        </div>

        <div className="content-rail">
          <button className="content-card" onClick={() => onNavigate('duas')}>
            <span className="content-icon">✦</span>
            <span className="eyebrow">DAILY DUA</span>
            <strong>Pause and remember Allah.</strong>
            <small>Explore Duas →</small>
          </button>

          <button className="content-card" onClick={() => onNavigate('knowledge')}>
            <span className="content-icon">▤</span>
            <span className="eyebrow">REFLECTION</span>
            <strong>Learn something beneficial today.</strong>
            <small>Open Learn →</small>
          </button>

          <button className="content-card" onClick={() => onNavigate('qibla')}>
            <span className="content-icon">◎</span>
            <span className="eyebrow">QIBLA</span>
            <strong>Find the direction for Salah.</strong>
            <small>Open Qibla →</small>
          </button>
        </div>
      </section>

      <section className="dashboard-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">QUICK ACCESS</span>
            <h3>Your essentials.</h3>
          </div>
        </div>

        <div className="quick-grid">
          <Feature title="Quran" icon="☾" onClick={() => onNavigate('quran')} />
          <Feature title="Prayer" icon="◷" onClick={() => onNavigate('prayer')} />
          <Feature title="Duas" icon="✦" onClick={() => onNavigate('duas')} />
          <Feature title="Qibla" icon="◎" onClick={() => onNavigate('qibla')} />
        </div>
      </section>

      <section className="journey-card card">
        <span className="eyebrow">YOUR DEEN LIFE</span>
        <h3>A companion that grows with you.</h3>
        <p>As DEEN LIFE connects more of its features, this space will become a personal place for your worship, learning and daily progress.</p>
        <button className="secondary dashboard-wide-action" onClick={() => onNavigate('knowledge')}>
          Explore Islamic Knowledge →
        </button>
      </section>
    </div>
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
