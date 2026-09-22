import { useMemo } from 'react'
import {
  TAHAWIYYAH_CURRICULUM,
  TAHAWIYYAH_ENGLISH_SOURCE,
  TAHAWIYYAH_SOURCE_UNITS,
} from './source/tahawiyyah-curriculum'
import { TAHAWIYYAH_LESSON_MAP } from './source/tahawiyyah-lesson-map'
import { TAHAWIYYAH_TRANSLATION_MAP } from './source/tahawiyyah-translation-map'

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

  const sourceUnits = useMemo(() => {
    if (!lesson) return []

    return lesson.sourceUnits
      .map((unitId) =>
        TAHAWIYYAH_SOURCE_UNITS.find(
          (sourceUnit) => sourceUnit.id === unitId,
        ),
      )
      .filter(
        (
          sourceUnit,
        ): sourceUnit is (typeof TAHAWIYYAH_SOURCE_UNITS)[number] =>
          Boolean(sourceUnit),
      )
  }, [lesson])

  const englishParagraphs = useMemo(() => {
    if (!lesson) return []

    const lessonUnitIds = new Set<number>(lesson.sourceUnits)
    const renderedMappings = new Set<number>()

    return lesson.sourceUnits.flatMap((unitId) => {
      const mappingIndex = TAHAWIYYAH_TRANSLATION_MAP.findIndex((entry) =>
        entry.arabicSourceUnits.includes(unitId),
      )

      if (mappingIndex === -1 || renderedMappings.has(mappingIndex)) {
        return []
      }

      const mapping = TAHAWIYYAH_TRANSLATION_MAP[mappingIndex]
      renderedMappings.add(mappingIndex)

      const mappedArabicUnits = mapping.arabicSourceUnits.filter((sourceUnitId) =>
        lessonUnitIds.has(sourceUnitId),
      )

      if (mappedArabicUnits.length === 0) {
        return []
      }

      return mapping.englishParagraphs
        .map((englishParagraphId) =>
          TAHAWIYYAH_ENGLISH_SOURCE.find(
            (paragraph) =>
              paragraph.sourceParagraph === englishParagraphId,
          ),
        )
        .filter(
          (
            paragraph,
          ): paragraph is (typeof TAHAWIYYAH_ENGLISH_SOURCE)[number] =>
            Boolean(paragraph),
        )
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
          <div className="tawheed-aqidah-arabic-section" dir="rtl" lang="ar">
            {sourceUnits.map((sourceUnit) => (
              <div
                key={sourceUnit.id}
                className="tawheed-aqidah-arabic-unit"
              >
                <span
                  className="tawheed-aqidah-source-number"
                  dir="rtl"
                  lang="ar"
                >
                  {String(sourceUnit.id).replace(
                    /[0-9]/g,
                    (digit) =>
                      ARABIC_SOURCE_NUMBERS[Number(digit)],
                  )}
                </span>
                <p dir="rtl" lang="ar">
                  {sourceUnit.arabic}
                </p>
              </div>
            ))}
          </div>

        </div>
      </article>
    </section>
  )
}
