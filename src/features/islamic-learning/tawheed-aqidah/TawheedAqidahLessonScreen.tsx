import { useMemo } from 'react'
import {
  TAHAWIYYAH_CURRICULUM,
  TAHAWIYYAH_ENGLISH_SOURCE,
  TAHAWIYYAH_SOURCE_UNITS,
} from './source/tahawiyyah-curriculum'
import { TAHAWIYYAH_LESSON_MAP } from './source/tahawiyyah-lesson-map'
import { TAHAWIYYAH_TRANSLATION_MAP } from './source/tahawiyyah-translation-map'
import {
  TAHAWIYYAH_ENGLISH_LESSON_1,
  TAHAWIYYAH_ENGLISH_LESSON_2,
  TAHAWIYYAH_ENGLISH_LESSON_3,
  TAHAWIYYAH_ENGLISH_LESSON_4,
  TAHAWIYYAH_ENGLISH_LESSON_5,
  TAHAWIYYAH_ENGLISH_LESSON_6,
  TAHAWIYYAH_ENGLISH_LESSON_7,
  TAHAWIYYAH_ENGLISH_LESSON_8,
  TAHAWIYYAH_ENGLISH_LESSON_9,
  TAHAWIYYAH_ENGLISH_LESSON_10,
  TAHAWIYYAH_ENGLISH_LESSON_11,
  TAHAWIYYAH_ENGLISH_LESSON_12,
  TAHAWIYYAH_ENGLISH_LESSON_13,
  TAHAWIYYAH_ENGLISH_LESSON_14,
  TAHAWIYYAH_ENGLISH_LESSON_15,
  TAHAWIYYAH_ENGLISH_LESSON_16,
  TAHAWIYYAH_ENGLISH_LESSON_17,
  TAHAWIYYAH_ENGLISH_LESSON_18,
  TAHAWIYYAH_ENGLISH_LESSON_19,
  TAHAWIYYAH_ENGLISH_LESSON_20,
} from './source/tahawiyyah-english-lessons'
import {
  TAHAWIYYAH_SWAHILI_LESSON_1,
  TAHAWIYYAH_SWAHILI_LESSON_2,
  TAHAWIYYAH_SWAHILI_LESSON_3,
  TAHAWIYYAH_SWAHILI_LESSON_4,
  TAHAWIYYAH_SWAHILI_LESSON_5,
  TAHAWIYYAH_SWAHILI_LESSON_6,
  TAHAWIYYAH_SWAHILI_LESSON_7,
  TAHAWIYYAH_SWAHILI_LESSON_8,
  TAHAWIYYAH_SWAHILI_LESSON_9,
  TAHAWIYYAH_SWAHILI_LESSON_10,
  TAHAWIYYAH_SWAHILI_LESSON_11,
  TAHAWIYYAH_SWAHILI_LESSON_12,
  TAHAWIYYAH_SWAHILI_LESSON_13,
  TAHAWIYYAH_SWAHILI_LESSON_14,
  TAHAWIYYAH_SWAHILI_LESSON_15,
  TAHAWIYYAH_SWAHILI_LESSON_16,
  TAHAWIYYAH_SWAHILI_LESSON_17,
  TAHAWIYYAH_SWAHILI_LESSON_18,
  TAHAWIYYAH_SWAHILI_LESSON_19,
  TAHAWIYYAH_SWAHILI_LESSON_20,
} from './source/tahawiyyah-swahili-lessons'
import {
  TAHAWIYYAH_FRENCH_LESSON_1,
  TAHAWIYYAH_FRENCH_LESSON_2,
  TAHAWIYYAH_FRENCH_LESSON_3,
  TAHAWIYYAH_FRENCH_LESSON_4,
  TAHAWIYYAH_FRENCH_LESSON_5,
  TAHAWIYYAH_FRENCH_LESSON_6,
  TAHAWIYYAH_FRENCH_LESSON_7,
  TAHAWIYYAH_FRENCH_LESSON_8,
  TAHAWIYYAH_FRENCH_LESSON_9,
  TAHAWIYYAH_FRENCH_LESSON_10,
  TAHAWIYYAH_FRENCH_LESSON_11,
  TAHAWIYYAH_FRENCH_LESSON_12,
  TAHAWIYYAH_FRENCH_LESSON_13,
  TAHAWIYYAH_FRENCH_LESSON_14,
  TAHAWIYYAH_FRENCH_LESSON_15,
  TAHAWIYYAH_FRENCH_LESSON_16,
  TAHAWIYYAH_FRENCH_LESSON_17,
  TAHAWIYYAH_FRENCH_LESSON_18,
  TAHAWIYYAH_FRENCH_LESSON_19,
  TAHAWIYYAH_FRENCH_LESSON_20,
} from './source/tahawiyyah-french-lessons'

const TAHAWIYYAH_SOURCE_TITLE_ARABIC =
  TAHAWIYYAH_CURRICULUM.source.titleArabic

const TAHAWIYYAH_SOURCE_AUTHOR_ARABIC =
  TAHAWIYYAH_CURRICULUM.source.authorArabic

const ARABIC_SOURCE_NUMBERS = '٠١٢٣٤٥٦٧٨٩'

export default function TawheedAqidahLessonScreen({
  lessonNumber,
  language,
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
          ← التوحيد والعقيدة
        </button>

      </div>

      <article className="tawheed-aqidah-source-card">
        <p className="eyebrow" dir="rtl" lang="ar">
          الدرس{' '}
          {String(lesson.lesson).replace(
            /[0-9]/g,
            (digit) => ARABIC_SOURCE_NUMBERS[Number(digit)],
          )}
        </p>



        <div className="tawheed-aqidah-source-list">
          {sourceUnits.map((sourceUnit) => {
            const englishLessons = {
              1: TAHAWIYYAH_ENGLISH_LESSON_1,
              2: TAHAWIYYAH_ENGLISH_LESSON_2,
              3: TAHAWIYYAH_ENGLISH_LESSON_3,
              4: TAHAWIYYAH_ENGLISH_LESSON_4,
              5: TAHAWIYYAH_ENGLISH_LESSON_5,
              6: TAHAWIYYAH_ENGLISH_LESSON_6,
              7: TAHAWIYYAH_ENGLISH_LESSON_7,
              8: TAHAWIYYAH_ENGLISH_LESSON_8,
              9: TAHAWIYYAH_ENGLISH_LESSON_9,
              10: TAHAWIYYAH_ENGLISH_LESSON_10,
              11: TAHAWIYYAH_ENGLISH_LESSON_11,
              12: TAHAWIYYAH_ENGLISH_LESSON_12,
              13: TAHAWIYYAH_ENGLISH_LESSON_13,
              14: TAHAWIYYAH_ENGLISH_LESSON_14,
  15: TAHAWIYYAH_ENGLISH_LESSON_15,
  16: TAHAWIYYAH_ENGLISH_LESSON_16,
              17: TAHAWIYYAH_ENGLISH_LESSON_17,
              18: TAHAWIYYAH_ENGLISH_LESSON_18,
              19: TAHAWIYYAH_ENGLISH_LESSON_19,
              20: TAHAWIYYAH_ENGLISH_LESSON_20,
            } as const

            const swahiliLessons = {
              1: TAHAWIYYAH_SWAHILI_LESSON_1,
              2: TAHAWIYYAH_SWAHILI_LESSON_2,
              3: TAHAWIYYAH_SWAHILI_LESSON_3,
              4: TAHAWIYYAH_SWAHILI_LESSON_4,
              5: TAHAWIYYAH_SWAHILI_LESSON_5,
              6: TAHAWIYYAH_SWAHILI_LESSON_6,
              7: TAHAWIYYAH_SWAHILI_LESSON_7,
              8: TAHAWIYYAH_SWAHILI_LESSON_8,
              9: TAHAWIYYAH_SWAHILI_LESSON_9,
              10: TAHAWIYYAH_SWAHILI_LESSON_10,
              11: TAHAWIYYAH_SWAHILI_LESSON_11,
              12: TAHAWIYYAH_SWAHILI_LESSON_12,
              13: TAHAWIYYAH_SWAHILI_LESSON_13,
              14: TAHAWIYYAH_SWAHILI_LESSON_14,
  15: TAHAWIYYAH_SWAHILI_LESSON_15,
  16: TAHAWIYYAH_SWAHILI_LESSON_16,
              17: TAHAWIYYAH_SWAHILI_LESSON_17,
              18: TAHAWIYYAH_SWAHILI_LESSON_18,
              19: TAHAWIYYAH_SWAHILI_LESSON_19,
              20: TAHAWIYYAH_SWAHILI_LESSON_20,
            } as const

            const frenchLessons = {
              1: TAHAWIYYAH_FRENCH_LESSON_1,
              2: TAHAWIYYAH_FRENCH_LESSON_2,
              3: TAHAWIYYAH_FRENCH_LESSON_3,
              4: TAHAWIYYAH_FRENCH_LESSON_4,
              5: TAHAWIYYAH_FRENCH_LESSON_5,
              6: TAHAWIYYAH_FRENCH_LESSON_6,
              7: TAHAWIYYAH_FRENCH_LESSON_7,
              8: TAHAWIYYAH_FRENCH_LESSON_8,
              9: TAHAWIYYAH_FRENCH_LESSON_9,
              10: TAHAWIYYAH_FRENCH_LESSON_10,
              11: TAHAWIYYAH_FRENCH_LESSON_11,
              12: TAHAWIYYAH_FRENCH_LESSON_12,
              13: TAHAWIYYAH_FRENCH_LESSON_13,
              14: TAHAWIYYAH_FRENCH_LESSON_14,
  15: TAHAWIYYAH_FRENCH_LESSON_15,
  16: TAHAWIYYAH_FRENCH_LESSON_16,
              17: TAHAWIYYAH_FRENCH_LESSON_17,
              18: TAHAWIYYAH_FRENCH_LESSON_18,
              19: TAHAWIYYAH_FRENCH_LESSON_19,
              20: TAHAWIYYAH_FRENCH_LESSON_20,
            } as const

            const englishUnit =
              englishLessons[lesson.lesson as 1 | 2 | 3 | 4]?.find(
                (unit) => unit.sourceUnit === sourceUnit.id,
              )
            const swahiliUnit =
              swahiliLessons[lesson.lesson as 1 | 2 | 3]?.find(
                (unit) => unit.sourceUnit === sourceUnit.id,
              )
            const frenchUnit =
              frenchLessons[lesson.lesson as 1 | 2 | 3]?.find(
                (unit) => unit.sourceUnit === sourceUnit.id,
              )

            return (
              <div
                key={sourceUnit.id}
                className="tawheed-aqidah-source-unit"
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

                <div className="tawheed-aqidah-source-content">
                  <p
                    className="tawheed-aqidah-reference-arabic"
                    dir="rtl"
                    lang="ar"
                  >
                    {sourceUnit.arabic}
                  </p>

                  {language === 'en' && englishUnit && (
                    <div className="tawheed-aqidah-translation-content">
                      <p
                        className="tawheed-aqidah-translation"
                        lang="en"
                      >
                        {englishUnit.translation}
                      </p>

                      <div className="tawheed-aqidah-explanation">
                        <span className="eyebrow">
                          EXPLANATION
                        </span>
                        <p lang="en">{englishUnit.explanation}</p>
                      </div>
                    </div>
                  )}

                  {language === 'sw' && swahiliUnit && (
                    <div className="tawheed-aqidah-translation-content">
                      <p
                        className="tawheed-aqidah-translation"
                        lang="sw"
                      >
                        {swahiliUnit.translation}
                      </p>

                      <div className="tawheed-aqidah-explanation">
                        <span className="eyebrow">
                          MAELEZO
                        </span>
                        <p lang="sw">{swahiliUnit.explanation}</p>
                      </div>
                    </div>
                  )}

                  {language === 'fr' && frenchUnit && (
                    <div className="tawheed-aqidah-translation-content">
                      <p
                        className="tawheed-aqidah-translation"
                        lang="fr"
                      >
                        {frenchUnit.translation}
                      </p>

                      <div className="tawheed-aqidah-explanation">
                        <span className="eyebrow">
                          EXPLICATION
                        </span>
                        <p lang="fr">{frenchUnit.explanation}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </article>
    </section>
  )
}
