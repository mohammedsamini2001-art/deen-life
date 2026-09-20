import { useState } from 'react'
import {
  ISLAMIC_LEARNING_LANGUAGES,
  ISLAMIC_LEARNING_SUBJECTS,
} from './islamic-learning-data'

interface IslamicLearningScreenProps {
  onBack: () => void
  onOpenSubject: (slug: string, language: string) => void
}

export default function IslamicLearningScreen({
  onBack,
  onOpenSubject,
}: IslamicLearningScreenProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null)
  const [hasContinued, setHasContinued] = useState(false)

  if (!hasContinued) {
    return (
      <section className="duas-reader islamic-learning-page">
        <div className="quran-toolbar">
          <button className="back" onClick={onBack}>
            ← Premium
          </button>
          <span className="eyebrow">PREMIUM LEARNING</span>
        </div>

        <header className="duas-category-header knowledge-hero">
          <span className="eyebrow">STEP 1</span>
          <h2>Choose your learning language</h2>
          <p>
            Select the language you want to use for your Islamic learning
            journey.
          </p>
        </header>

        <div className="islamic-learning-language-grid">
          {ISLAMIC_LEARNING_LANGUAGES.map((language) => (
            <button
              key={language.code}
              className={
                selectedLanguage === language.code
                  ? 'islamic-learning-language-card selected'
                  : 'islamic-learning-language-card'
              }
              onClick={() => setSelectedLanguage(language.code)}
            >
              <span className="islamic-learning-language-native">
                {language.nativeName}
              </span>

              <span className="islamic-learning-language-name">
                {language.name}
              </span>

              <small>
                {language.role === 'original'
                  ? 'Original source'
                  : 'Translation / explanation'}
              </small>

              {selectedLanguage === language.code && (
                <span className="islamic-learning-language-check">
                  ✓
                </span>
              )}
            </button>
          ))}
        </div>

        <button
          className="islamic-learning-continue"
          disabled={!selectedLanguage}
          onClick={() => setHasContinued(true)}
        >
          Continue →
        </button>
      </section>
    )
  }

  return (
    <section className="duas-reader islamic-learning-page">
      <div className="quran-toolbar">
        <button
          className="back"
          onClick={() => setHasContinued(false)}
        >
          ← Language
        </button>
        <span className="eyebrow">PREMIUM LEARNING</span>
      </div>

      <header className="duas-category-header knowledge-hero">
        <span className="eyebrow">STEP 2</span>
        <h2>Islamic Learning Library</h2>
        <p>
          Choose an Islamic science and continue your structured learning
          journey.
        </p>
      </header>

      <div className="islamic-learning-subject-list">
        {ISLAMIC_LEARNING_SUBJECTS.map((subject, index) => (
          <button
            key={subject.slug}
            className="islamic-learning-subject-card"
            onClick={() => onOpenSubject(subject.slug, selectedLanguage ?? 'en')}
          >
            <span className="islamic-learning-subject-number">
              {index + 1}
            </span>

            <span className="islamic-learning-subject-info">
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
