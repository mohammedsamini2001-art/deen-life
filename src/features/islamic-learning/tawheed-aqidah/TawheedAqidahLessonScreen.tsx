import { useMemo } from 'react'
import {
  TAHAWIYYAH_CURRICULUM,
  TAHAWIYYAH_ENGLISH_SOURCE,
  TAHAWIYYAH_SOURCE_UNITS,
} from './source/tahawiyyah-curriculum'
import { TAHAWIYYAH_LESSON_MAP } from './source/tahawiyyah-lesson-map'

const TAHAWIYYAH_SOURCE_TITLE_ARABIC =
  TAHAWIYYAH_CURRICULUM.source.titleArabic

const TAHAWIYYAH_SOURCE_AUTHOR_ARABIC =
  TAHAWIYYAH_CURRICULUM.source.authorArabic

const ARABIC_SOURCE_NUMBERS = '٠١٢٣٤٥٦٧٨٩'

export default function TawheedAqidahLessonScreen({
  lessonNumber,
  onBack,
}: {
  lessonNumber: number
  language: 'ar' | 'en' | 'sw' | 'fr'
  onBack: () => void
}) {
  const lesson = useMemo(
    () => TAHAWIYYAH_LESSON_MAP.find((item) => item.lesson === lessonNumber),
    [lessonNumber],
  )

  const sourcePairs = useMemo(() => {
    if (!lesson) return []

    return lesson.sourceUnits.map((unitId, index) => {
      const arabic = TAHAWIYYAH_SOURCE_UNITS.find(
        (sourceUnit) => sourceUnit.id === unitId,
      )

      const englishParagraphId = lesson.englishParagraphs[index]
      const english = TAHAWIYYAH_ENGLISH_SOURCE.find(
        (paragraph) => paragraph.sourceParagraph === englishParagraphId,
      )

      return {
        arabic,
        english,
      }
    })
  }, [lesson])

  if (!lesson) {
    return null
  }

  return (
    <section
      className="duas-reader islamic-learning-page tawheed-aqidah-page"
      dir="ltr"
      lang="en"
    >
      <div className="quran-toolbar">
        <button className="back" onClick={onBack}>
          ← Tawheed & Aqidah
        </button>
        <span className="eyebrow">TAWHEED & AQIDAH</span>
      </div>

      <article className="tawheed-aqidah-source-card">
        <p className="eyebrow" dir="rtl" lang="ar">
          الدرس{' '}
          {String(lesson.lesson).replace(
            /[0-9]/g,
            (digit) => ARABIC_SOURCE_NUMBERS[Number(digit)],
          )}
        </p>

        <h2>{lesson.teachingTitle}</h2>

        <div className="tawheed-aqidah-original-header">
          <span className="eyebrow" dir="rtl" lang="ar">
            العربية — المصدر الأصلي
          </span>
          <strong dir="rtl" lang="ar">
            {TAHAWIYYAH_SOURCE_TITLE_ARABIC}
          </strong>
          <span>{TAHAWIYYAH_SOURCE_AUTHOR_ARABIC}</span>
          <span>English translation: Suhaib Hasan AbdulGhaffar</span>
        </div>

        <p className="tawheed-aqidah-source-note">
          Arabic original followed by the published English translation.
        </p>

        <div className="tawheed-aqidah-source-list">
          {sourcePairs.map((pair, index) => (
            <div
              key={pair.arabic?.id ?? index}
              className="tawheed-aqidah-source-unit"
            >
              <span
                className="tawheed-aqidah-source-number"
                dir="rtl"
                lang="ar"
              >
                {String(pair.arabic?.id ?? index + 1).replace(
                  /[0-9]/g,
                  (digit) => ARABIC_SOURCE_NUMBERS[Number(digit)],
                )}
              </span>

              {pair.arabic ? (
                <p dir="rtl" lang="ar">
                  {pair.arabic.arabic}
                </p>
              ) : null}

              {pair.english ? (
                <p dir="ltr" lang="en">
                  {pair.english.text}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </article>
    </section>
  )
}
