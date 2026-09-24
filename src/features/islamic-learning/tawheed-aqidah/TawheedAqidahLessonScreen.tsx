import { useMemo } from 'react'
import {
  TAHAWIYYAH_CURRICULUM,
  TAHAWIYYAH_ENGLISH_SOURCE,
  TAHAWIYYAH_SOURCE_UNITS,
} from './source/tahawiyyah-curriculum'
import { TAHAWIYYAH_LESSON_MAP } from './source/tahawiyyah-lesson-map'
import { TAHAWIYYAH_TRANSLATION_MAP } from './source/tahawiyyah-translation-map'
import { TAHAWIYYAH_ENGLISH_LESSON_1 } from './source/tahawiyyah-english-lessons'
import { TAHAWIYYAH_SWAHILI_LESSON_1 } from './source/tahawiyyah-swahili-lessons'

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
          <strong dir="rtl" lang="ar">
            {TAHAWIYYAH_SOURCE_TITLE_ARABIC}
          </strong>
          <span>{TAHAWIYYAH_SOURCE_AUTHOR_ARABIC}</span>
        </div>


        <div className="tawheed-aqidah-source-list">
          <section className="tawheed-aqidah-language-section">
            {sourceUnits.map((sourceUnit) => (
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
                  <p dir="rtl" lang="ar">
                    {sourceUnit.arabic}
                  </p>
                </div>
              </div>
            ))}
          </section>

          {lesson.lesson === 1 && (
            <>
              <section
                className="tawheed-aqidah-language-section"
                lang="en"
              >
                <div className="tawheed-aqidah-section-heading">
                  <span className="eyebrow">
                    ENGLISH TRANSLATION
                  </span>
                </div>

                {sourceUnits.map((sourceUnit) => {
                  const englishUnit =
                    TAHAWIYYAH_ENGLISH_LESSON_1.find(
                      (unit) => unit.sourceUnit === sourceUnit.id,
                    )

                  if (!englishUnit) return null

                  return (
                    <div
                      key={sourceUnit.id}
                      className="tawheed-aqidah-source-unit"
                    >
                      <span className="tawheed-aqidah-source-number">
                        {sourceUnit.id}
                      </span>

                      <div className="tawheed-aqidah-source-content">
                        <p
                          className="tawheed-aqidah-reference-arabic"
                          dir="rtl"
                          lang="ar"
                        >
                          {sourceUnit.arabic}
                        </p>

                        <div className="tawheed-aqidah-translation-content">
                          <p className="tawheed-aqidah-translation">
                            {englishUnit.translation}
                          </p>

                          <div className="tawheed-aqidah-explanation">
                            <span className="eyebrow">
                              EXPLANATION
                            </span>
                            <p>{englishUnit.explanation}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </section>

              <section
                className="tawheed-aqidah-language-section"
                lang="sw"
              >
                <div className="tawheed-aqidah-section-heading">
                  <span className="eyebrow">
                    TAFSIRI YA KISWAHILI
                  </span>
                </div>

                {sourceUnits.map((sourceUnit) => {
                  const swahiliUnit =
                    TAHAWIYYAH_SWAHILI_LESSON_1.find(
                      (unit) => unit.sourceUnit === sourceUnit.id,
                    )

                  if (!swahiliUnit) return null

                  return (
                    <div
                      key={sourceUnit.id}
                      className="tawheed-aqidah-source-unit"
                    >
                      <span className="tawheed-aqidah-source-number">
                        {sourceUnit.id}
                      </span>

                      <div className="tawheed-aqidah-source-content">
                        <p
                          className="tawheed-aqidah-reference-arabic"
                          dir="rtl"
                          lang="ar"
                        >
                          {sourceUnit.arabic}
                        </p>

                        <div className="tawheed-aqidah-translation-content">
                          <p className="tawheed-aqidah-translation">
                            {swahiliUnit.translation}
                          </p>

                          <div className="tawheed-aqidah-explanation">
                            <span className="eyebrow">
                              MAELEZO
                            </span>
                            <p>{swahiliUnit.explanation}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </section>

              <section
                className="tawheed-aqidah-language-section tawheed-aqidah-french-section"
                lang="fr"
              >
                <div className="tawheed-aqidah-section-heading">
                  <span className="eyebrow">
                    FRENCH TRANSLATION
                  </span>
                  <p className="tawheed-aqidah-section-placeholder">
                    French translation will be added from the Arabic source.
                  </p>
                </div>
              </section>

              <section className="tawheed-aqidah-explanations">
                <div className="tawheed-aqidah-section-heading">
                  <span className="eyebrow">
                    EXPLANATIONS
                  </span>
                </div>

                {sourceUnits.map((sourceUnit) => {
                  const englishUnit =
                    TAHAWIYYAH_ENGLISH_LESSON_1.find(
                      (unit) => unit.sourceUnit === sourceUnit.id,
                    )

                  if (!englishUnit) return null

                  return (
                    <div
                      key={sourceUnit.id}
                      className="tawheed-aqidah-explanation"
                    >
                      <span className="tawheed-aqidah-source-number">
                        {sourceUnit.id}
                      </span>
                      <p>{englishUnit.explanation}</p>
                    </div>
                  )
                })}
              </section>
            </>
          )}
        </div>
      </article>
    </section>
  )
}
