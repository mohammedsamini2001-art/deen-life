import { TAHAWIYYAH_CURRICULUM, TAHAWIYYAH_SOURCE_UNITS } from './source/tahawiyyah-curriculum'
import { TAHAWIYYAH_LESSON_MAP } from './source/tahawiyyah-lesson-map'

export default function TawheedAqidahScreen({
  onBack,
}: {
  onBack: () => void
}) {
  return (
    <section className="learning-screen">
      <button className="secondary" onClick={onBack}>← Learning</button>

      <p className="eyebrow">TAWHEED & AQIDAH</p>
      <h2>{TAHAWIYYAH_CURRICULUM.source.titleEnglish}</h2>
      <p>
        {TAHAWIYYAH_CURRICULUM.source.titleArabic}
        <br />
        {TAHAWIYYAH_CURRICULUM.source.authorEnglish}
      </p>

      {TAHAWIYYAH_LESSON_MAP.map((lesson) => (
        <article key={lesson.lesson} className="learning-card">
          <p className="eyebrow">LESSON {lesson.lesson}</p>
          <h3>{lesson.teachingTitle}</h3>

          {lesson.sourceUnits.map((unitId) => {
            const unit = TAHAWIYYAH_SOURCE_UNITS.find(
              (sourceUnit) => sourceUnit.id === unitId,
            )

            if (!unit) return null

            return (
              <div key={unit.id} className="source-text">
                <p dir="rtl" lang="ar">{unit.arabic}</p>
              </div>
            )
          })}
        </article>
      ))}
    </section>
  )
}
