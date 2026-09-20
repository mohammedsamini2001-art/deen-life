import { useMemo } from 'react'
import {
  TAHAWIYYAH_CURRICULUM,
  TAHAWIYYAH_SOURCE_UNITS,
} from './source/tahawiyyah-curriculum'
import { TAHAWIYYAH_LESSON_MAP } from './source/tahawiyyah-lesson-map'

const TAHAWIYYAH_SOURCE_TITLE_ARABIC = TAHAWIYYAH_CURRICULUM.source.titleArabic
const TAHAWIYYAH_SOURCE_AUTHOR_ARABIC = TAHAWIYYAH_CURRICULUM.source.authorArabic

export default function TawheedAqidahLessonScreen({
  lessonNumber,
  onBack,
}: {
  lessonNumber: number
  onBack: () => void
}) {
  const lesson = useMemo(
    () => TAHAWIYYAH_LESSON_MAP.find((item) => item.lesson === lessonNumber),
    [lessonNumber],
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

  if (!lesson) {
    return null
  }

  return (
    <section className="duas-reader islamic-learning-page tawheed-aqidah-page">
      <div className="quran-toolbar">
        <button className="back" onClick={onBack}>
          ← Tawheed & Aqidah
        </button>
        <span className="eyebrow">TAWHEED & AQIDAH</span>
      </div>

      <article className="tawheed-aqidah-source-card">
        <p className="eyebrow">LESSON {lesson.lesson}</p>
        <h2>{lesson.teachingTitle}</h2>

        <div className="tawheed-aqidah-original-header">
          <span className="eyebrow">العربية — ORIGINAL SOURCE</span>
          <strong dir="rtl" lang="ar">
            {TAHAWIYYAH_SOURCE_TITLE_ARABIC}
          </strong>
          <span>{TAHAWIYYAH_SOURCE_AUTHOR_ARABIC}</span>
        </div>

        <p className="tawheed-aqidah-source-note">
          The Arabic text below is preserved from the verified source.
          Translation and explanation layers will be added separately.
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
    </section>
  )
}
