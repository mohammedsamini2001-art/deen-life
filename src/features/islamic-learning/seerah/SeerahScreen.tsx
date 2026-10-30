import { SEERAH_CURRICULUM } from './source/seerah-curriculum'
import { SEERAH_SOURCE_MANIFEST } from './source/source-manifest'

type Language = 'ar' | 'en' | 'sw' | 'fr'

interface SeerahScreenProps {
  language: Language
  onBack: () => void
  onOpenLesson: (lessonNumber: number) => void
}

export default function SeerahScreen({
  language,
  onBack,
  onOpenLesson,
}: SeerahScreenProps) {
  return (
    <section className="duas-reader islamic-learning-page">
      <div className="quran-toolbar">
        <button className="back" onClick={onBack}>
          ← Islamic Learning
        </button>
        <span className="eyebrow">SEERAH</span>
      </div>

      <header className="duas-category-header knowledge-hero">
        <span className="eyebrow">السيرة النبوية</span>
        <h2>سيرة النبي محمد ﷺ</h2>
        <p>
          {SEERAH_SOURCE_MANIFEST.titleArabic}
        </p>
        <p>
          Arabic source curriculum. Translations will follow after the
          Arabic source lessons have been completed.
        </p>
        <small>
          Selected interface language: {language.toUpperCase()}
        </small>
      </header>

      <div className="seerah-source-notice">
        <strong>Source review in progress</strong>
        <p>
          The source passages are being checked against the scanned
          historical edition. Unverified passages are clearly labelled.
        </p>
      </div>

      <div className="islamic-learning-subject-list">
        {SEERAH_CURRICULUM.lessons.map(lesson => (
          <button
            key={lesson.slug}
            className="islamic-learning-subject-card"
            onClick={() => onOpenLesson(lesson.number)}
          >
            <span className="islamic-learning-subject-number">
              {lesson.number}
            </span>
            <span className="islamic-learning-subject-info">
              <strong dir="rtl">{lesson.titleArabic}</strong>
              <small dir="rtl">{lesson.summaryArabic}</small>
            </span>
            <span className="continue-arrow">→</span>
          </button>
        ))}
      </div>
    </section>
  )
}
