import { useMemo } from 'react'
import {
  TAHAWIYYAH_CURRICULUM,
  TAHAWIYYAH_SOURCE_UNITS,
} from './source/tahawiyyah-curriculum'
import { TAHAWIYYAH_LESSON_MAP } from './source/tahawiyyah-lesson-map'

const TAHAWIYYAH_SOURCE_TITLE_ARABIC = TAHAWIYYAH_CURRICULUM.source.titleArabic
const TAHAWIYYAH_SOURCE_AUTHOR_ARABIC = TAHAWIYYAH_CURRICULUM.source.authorArabic

const ARABIC_SOURCE_NUMBERS = '٠١٢٣٤٥٦٧٨٩'

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
          ← التوحيد والعقيدة
        </button>
        <span className="eyebrow">التوحيد والعقيدة</span>
      </div>

      <article className="tawheed-aqidah-source-card">
        <p className="eyebrow" dir="rtl" lang="ar">
          الدرس {String(lesson.lesson).replace(/[0-9]/g, (digit) => '٠١٢٣٤٥٦٧٨٩'[Number(digit)])}
        </p>
        <h2>{lesson.teachingTitle}</h2>

        <div className="tawheed-aqidah-original-header">
          <span className="eyebrow" dir="rtl" lang="ar">العربية — المصدر الأصلي</span>
          <strong dir="rtl" lang="ar">
            {TAHAWIYYAH_SOURCE_TITLE_ARABIC}
          </strong>
          <span>{TAHAWIYYAH_SOURCE_AUTHOR_ARABIC}</span>
        </div>

        <p className="tawheed-aqidah-source-note" dir="rtl" lang="ar">
          النص العربي أدناه محفوظ من المصدر المحقق.
        </p>

        <div className="tawheed-aqidah-source-list">
          {sourceUnits.map((unit) =>
            unit ? (
              <div key={unit.id} className="tawheed-aqidah-source-unit">
                <span className="tawheed-aqidah-source-number" dir="rtl" lang="ar">
                  {String(unit.id).replace(/[0-9]/g, (digit) => '٠١٢٣٤٥٦٧٨٩'[Number(digit)])}
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
