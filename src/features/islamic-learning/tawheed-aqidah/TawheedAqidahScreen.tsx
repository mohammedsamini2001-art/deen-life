import { useMemo, useState } from 'react'
import {
  TAHAWIYYAH_CURRICULUM,
  TAHAWIYYAH_SOURCE_UNITS,
} from './source/tahawiyyah-curriculum'
import { TAHAWIYYAH_LESSON_MAP } from './source/tahawiyyah-lesson-map'

export default function TawheedAqidahScreen({
  onBack,
}: {
  onBack: () => void
}) {
  const [selectedLesson, setSelectedLesson] = useState(1)

  const lesson = useMemo(
    () => TAHAWIYYAH_LESSON_MAP.find((item) => item.lesson === selectedLesson),
    [selectedLesson],
  )

  const sourceUnits = useMemo(
    () =>
      lesson?.sourceUnits
        .map((unitId) =>
          TAHAWIYYAH_SOURCE_UNITS.find((sourceUnit) => sourceUnit.id === unitId),
        )
        .filter(Boolean) ?? [],
    [lesson],
  )

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
            className={
              selectedLesson === item.lesson
                ? 'tawheed-aqidah-lesson selected'
                : 'tawheed-aqidah-lesson'
            }
            onClick={() => setSelectedLesson(item.lesson)}
          >
            <span>{item.lesson}</span>
            <strong>{item.teachingTitle}</strong>
            <small>{item.sourceUnits.length} source sections</small>
          </button>
        ))}
      </div>

      {lesson && (
        <article className="tawheed-aqidah-source-card">
          <p className="eyebrow">LESSON {lesson.lesson}</p>
          <h3>{lesson.teachingTitle}</h3>

          <p className="tawheed-aqidah-source-note">
            Source text from Al-Aqidah al-Tahawiyyah. The lesson title is a
            DEEN LIFE teaching label; the Arabic text below is preserved from
            the verified source.
          </p>

          <div className="tawheed-aqidah-source-list">
            {sourceUnits.map((unit) =>
              unit ? (
                <div key={unit.id} className="tawheed-aqidah-source-unit">
                  <span className="tawheed-aqidah-source-number">
                    {unit.id}
                  </span>
                  <p dir="rtl" lang="ar">
                    {unit.arabic}
                  </p>
                </div>
              ) : null,
            )}
          </div>
        </article>
      )}
    </section>
  )
}
