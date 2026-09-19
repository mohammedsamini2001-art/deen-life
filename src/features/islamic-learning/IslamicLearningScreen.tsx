import { useState } from 'react'
import { ISLAMIC_LEARNING_LANGUAGES, ISLAMIC_LEARNING_SUBJECTS } from './islamic-learning-data'

interface IslamicLearningScreenProps {
  onBack: () => void
  onOpenSubject: (slug: string) => void
}

export default function IslamicLearningScreen({
  onBack,
  onOpenSubject,
}: IslamicLearningScreenProps) {
  const [selectedLanguage, setSelectedLanguage] = useState('en')

  return (
    <section className="duas-reader">
      <div className="quran-toolbar">
        <button className="back" onClick={onBack}>
          ← Premium
        </button>
        <span className="eyebrow">PREMIUM LEARNING</span>
      </div>

      <header className="duas-category-header knowledge-hero">
        <h2>Islamic Learning Library</h2>
        <p>
          A structured journey through the major Islamic sciences, designed
          for steady learning and continued progress.
        </p>
      </header>

      <div className="quran-surah-list">
        {ISLAMIC_LEARNING_LANGUAGES.map((language) => (
          <button
            key={language.code}
            className={selectedLanguage === language.code ? 'quran-surah-card active' : 'quran-surah-card'}
            onClick={() => setSelectedLanguage(language.code)}
          >
            <span className="quran-surah-number">
              {language.code === 'ar' ? 'ع' : language.code.toUpperCase()}
            </span>

            <span className="quran-surah-info">
              <strong>{language.nativeName}</strong>
              <small>
                {language.name} · {language.role === 'original' ? 'Original source' : 'Translation / explanation'}
              </small>
            </span>

            {selectedLanguage === language.code && (
              <span className="continue-arrow" aria-label="Selected">
                ✓
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="quran-surah-list">
        {ISLAMIC_LEARNING_SUBJECTS.map((subject, index) => (
          <button
            key={subject.slug}
            className="quran-surah-card"
            onClick={() => onOpenSubject(subject.slug)}
          >
            <span className="quran-surah-number">
              {index + 1}
            </span>

            <span className="quran-surah-info">
              <strong>{subject.title}</strong>
              <small>{subject.description}</small>
            </span>

            <span className="continue-arrow">→</span>
          </button>
        ))}
      </div>
    </section>
  )
}
