import { SEERAH_CURRICULUM } from './source/seerah-curriculum'
import { SEERAH_SOURCE_MANIFEST } from './source/source-manifest'
import { SEERAH_SOURCE_UNITS } from './source/source-units'

interface SeerahLessonScreenProps {
  lessonNumber: number
  onBack: () => void
}

export default function SeerahLessonScreen({
  lessonNumber,
  onBack,
}: SeerahLessonScreenProps) {
  const lesson = SEERAH_CURRICULUM.lessons.find(
    item => item.number === lessonNumber,
  )

  if (!lesson) {
    return (
      <section className="duas-reader islamic-learning-page">
        <div className="quran-toolbar">
          <button className="back" onClick={onBack}>
            ← Seerah
          </button>
        </div>
        <p>Lesson not found.</p>
      </section>
    )
  }

  const sourceUnits = lesson.sourceUnitIds
    .map(id => SEERAH_SOURCE_UNITS.find(unit => unit.id === id))
    .filter(unit => unit !== undefined)

  return (
    <section
      className="duas-reader islamic-learning-page"
      dir="rtl"
      lang="ar"
    >
      <div className="quran-toolbar">
        <button className="back" onClick={onBack}>
          ← الدروس
        </button>
        <span className="eyebrow">SEERAH · LESSON {lesson.number}</span>
      </div>

      <header className="duas-category-header knowledge-hero">
        <span className="eyebrow">السيرة النبوية</span>
        <h2>{lesson.titleArabic}</h2>
        <p>{lesson.summaryArabic}</p>
      </header>

      <div className="seerah-source-notice">
        <strong dir="ltr">Historical source — review required</strong>
        <p dir="rtl">
          هذه النصوص منقولة للمراجعة، ولم يتم بعد التحقق منها
          بمقابلتها مع صفحات النسخة المصورة.
        </p>
      </div>

      {sourceUnits.length === 0 ? (
        <div className="seerah-source-notice">
          <p>لم تتم إضافة نصوص المصدر لهذا الدرس بعد.</p>
        </div>
      ) : (
        <div className="seerah-source-list">
          {sourceUnits.map(unit => (
            <article className="seerah-source-card" key={unit.id}>
              <h3>{unit.titleArabic}</h3>
              <p className="seerah-source-text">{unit.textArabic}</p>
              <small dir="ltr">
                {SEERAH_SOURCE_MANIFEST.titleEnglish}
                {' · '}
                Volume {unit.volume ?? 'not recorded'}
                {' · '}
                Printed page {unit.page ?? 'not verified'}
              </small>
              <p className="seerah-review-status" dir="ltr">
                {unit.verificationStatus === 'verified'
                  ? 'Source transcription verified'
                  : 'Transcription needs verification against the scan'}
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
