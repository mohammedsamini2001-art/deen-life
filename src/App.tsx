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
          <svg
            className="home-hero-scene"
            viewBox="0 0 900 520"
            preserveAspectRatio="xMidYMid slice"
            role="presentation"
          >
            <defs>
              <linearGradient id="heroSky" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#07140f" />
                <stop offset="55%" stopColor="#123728" />
                <stop offset="100%" stopColor="#087f5b" />
              </linearGradient>
              <radialGradient id="heroMoonGlow">
                <stop offset="0%" stopColor="#f0d58a" stopOpacity="0.32" />
                <stop offset="100%" stopColor="#f0d58a" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="heroGround" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0b241a" />
                <stop offset="100%" stopColor="#04100b" />
              </linearGradient>
            </defs>

            <rect width="900" height="520" fill="url(#heroSky)" />

            <circle cx="710" cy="125" r="105" fill="url(#heroMoonGlow)" />
            <circle cx="710" cy="125" r="42" fill="#f0d58a" opacity="0.92" />
            <circle cx="728" cy="112" r="42" fill="#123728" />

            <g fill="#f0d58a" opacity="0.72">
              <circle cx="590" cy="75" r="2" />
              <circle cx="655" cy="48" r="1.5" />
              <circle cx="780" cy="68" r="2" />
              <circle cx="835" cy="145" r="1.5" />
              <circle cx="625" cy="155" r="1.5" />
              <circle cx="810" cy="215" r="2" />
            </g>

            <g fill="#07140f" opacity="0.96">
              <path d="M480 365V285h35v80h28V245h34v120h27V275h35v90h28V215h38v150h28V285h34v80h28V245h34v120h35v45H480z" />
              <path d="M485 285h55l27-52 27 52h-109z" />
              <path d="M575 245h55l27-52 27 52h-109z" />
              <path d="M690 215h58l29-58 29 58h-116z" />
            </g>

            <g fill="#d4a84f" opacity="0.82">
              <path d="M605 193h4v45h-4z" />
              <path d="M720 154h4v61h-4z" />
              <circle cx="722" cy="151" r="4" />
              <circle cx="607" cy="190" r="3" />
            </g>

            <path
              d="M0 430 Q180 370 360 425 T720 415 T900 390 V520 H0Z"
              fill="url(#heroGround)"
            />

            <g fill="#087f5b" opacity="0.5">
              <path d="M80 450c12-45 20-45 32 0z" />
              <path d="M115 455c10-38 18-38 28 0z" />
              <path d="M830 445c12-50 21-50 33 0z" />
              <path d="M865 450c9-38 17-38 27 0z" />
            </g>
          </svg>
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
