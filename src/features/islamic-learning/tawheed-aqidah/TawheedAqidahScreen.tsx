import { TAHAWIYYAH_CURRICULUM } from './source/tahawiyyah-curriculum'
import { TAHAWIYYAH_LESSON_MAP } from './source/tahawiyyah-lesson-map'

export default function TawheedAqidahScreen({
  onBack,
  onOpenLesson,
}: {
  onBack: () => void
  onOpenLesson: (lessonNumber: number) => void
}) {
  return (
    <section className="duas-reader islamic-learning-page tawheed-aqidah-page">
      <div className="quran-toolbar">
        <button className="back" onClick={onBack}>
          ← Learning
        </button>
        <span className="eyebrow">TAWHEED & AQIDAH</span>
      </div>

      <header className="duas-category-header knowledge-hero">
        <span className="eyebrow">CLASSICAL SOURCE</span>
        <h2>{TAHAWIYYAH_CURRICULUM.source.titleEnglish}</h2>
        <p>
          {TAHAWIYYAH_CURRICULUM.source.titleArabic}
          <br />
          {TAHAWIYYAH_CURRICULUM.source.authorEnglish}
        </p>
      </header>

      <div className="tawheed-aqidah-lessons">
        {TAHAWIYYAH_LESSON_MAP.map((item) => (
          <button
            key={item.lesson}
            className="tawheed-aqidah-lesson"
            onClick={() => onOpenLesson(item.lesson)}
          >
            <span>{item.lesson}</span>
            <strong>{item.teachingTitle}</strong>
            <small>{item.sourceUnits.length} source sections</small>
          </button>
        ))}
      </div>
    </section>
  )
}
