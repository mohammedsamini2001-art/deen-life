import { useMemo } from 'react'
import {
  TAHAWIYYAH_CURRICULUM,
  TAHAWIYYAH_ENGLISH_SOURCE,
  TAHAWIYYAH_SOURCE_UNITS,
} from './source/tahawiyyah-curriculum'
import { TAHAWIYYAH_LESSON_MAP } from './source/tahawiyyah-lesson-map'

type Language = 'ar' | 'en' | 'sw' | 'fr'

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
  language: Language
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
          TAHAWIYYAH_SOURCE_UNITS.find(
            (sourceUnit) => sourceUnit.id === unitId,
          ),
        )
        .filter(Boolean) ?? [],
    [lesson],
  )

  const englishParagraphs = useMemo(
    () =>
      lesson?.englishParagraphs
        .map((paragraphId) =>
          TAHAWIYYAH_ENGLISH_SOURCE.find(
            (paragraph) => paragraph.sourceParagraph === paragraphId,
          ),
        )
        .filter(Boolean) ?? [],
    [lesson],
  )

  if (!lesson) {
    return null
  }

  const showEnglish = language === 'en'
  const isArabic = language === 'ar'

  return (
    <section
      className="duas-reader islamic-learning-page tawheed-aqidah-page"
      dir={isArabic ? 'rtl' : 'ltr'}
      lang={language}
    >
      <div className="quran-toolbar">
        <button className="back" onClick={onBack}>
          {isArabic ? '← التوحيد والعقيدة' : '← Tawheed & Aqidah'}
        </button>
        <span className="eyebrow">
          {isArabic ? 'التوحيد والعقيدة' : 'TAWHEED & AQIDAH'}
        </span>
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
          <span className="eyebrow" dir={isArabic ? 'rtl' : 'ltr'} lang={language}>
            {showEnglish
              ? 'English — published translation'
              : 'العربية — المصدر الأصلي'}
          </span>

          <strong dir={isArabic ? 'rtl' : 'ltr'} lang={language}>
            {showEnglish
              ? TAHAWIYYAH_CURRICULUM.source.titleEnglish
              : TAHAWIYYAH_SOURCE_TITLE_ARABIC}
          </strong>

          <span>
            {showEnglish
              ? 'Translator: Suhaib Hasan AbdulGhaffar'
              : TAHAWIYYAH_SOURCE_AUTHOR_ARABIC}
          </span>
        </div>

        <p
          className="tawheed-aqidah-source-note"
          dir={isArabic ? 'rtl' : 'ltr'}
          lang={language}
        >
          {showEnglish
            ? 'English text is shown from the published source translation.'
            : 'النص العربي أدناه محفوظ من المصدر المحقق.'}
        </p>

        {showEnglish ? (
          <div className="tawheed-aqidah-source-list">
            {englishParagraphs.map((paragraph) =>
              paragraph ? (
                <div
                  key={paragraph.sourceParagraph}
                  className="tawheed-aqidah-source-unit"
                >
                  <span className="tawheed-aqidah-source-number">
                    {paragraph.sourceParagraph}
                  </span>
                  <p lang="en">{paragraph.text}</p>
                </div>
              ) : null,
            )}
          </div>
        ) : (
          <div className="tawheed-aqidah-source-list">
            {sourceUnits.map((unit) =>
              unit ? (
                <div
                  key={unit.id}
                  className="tawheed-aqidah-source-unit"
                >
                  <span
                    className="tawheed-aqidah-source-number"
                    dir="rtl"
                    lang="ar"
                  >
                    {String(unit.id).replace(
                      /[0-9]/g,
                      (digit) => ARABIC_SOURCE_NUMBERS[Number(digit)],
                    )}
                  </span>

                  <p dir="rtl" lang="ar">
                    {unit.arabic}
                  </p>
                </div>
              ) : null,
            )}
          </div>
        )}
      </article>
    </section>
  )
}
