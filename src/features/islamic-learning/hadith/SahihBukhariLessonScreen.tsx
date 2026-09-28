import { SAHIH_BUKHARI_SOURCE } from './source/sahih-bukhari-source'
import { SAHIH_BUKHARI_CURRICULUM, SAHIH_BUKHARI_SOURCE_UNITS } from './source/sahih-bukhari-curriculum'

type Language = 'ar' | 'en' | 'sw' | 'fr'

const UI_TEXT = {
  ar: {
    back: '← الحديث',
    source: 'المصدر الأصلي',
    chapter: 'الباب',
    hadith: 'الحديث',
    unavailable: 'النص المصدر لم يُضف بعد',
  },
  en: {
    back: '← Hadith',
    source: 'CLASSICAL HADITH SOURCE',
    chapter: 'Chapter',
    hadith: 'Hadith',
    unavailable: 'Source text has not been added yet',
  },
  sw: {
    back: '← Hadithi',
    source: 'CHANZO CHA HADITHI',
    chapter: 'Mlango',
    hadith: 'Hadithi',
    unavailable: 'Maandishi ya chanzo bado hayajaongezwa',
  },
  fr: {
    back: '← Hadith',
    source: 'SOURCE CLASSIQUE DU HADITH',
    chapter: 'Chapitre',
    hadith: 'Hadith',
    unavailable: 'Le texte source n’a pas encore été ajouté',
  },
} as const

export default function SahihBukhariLessonScreen({
  language,
  lessonNumber,
  onBack,
}: {
  language: Language
  lessonNumber: number
  onBack: () => void
}) {
  const text = UI_TEXT[language]
  const lesson = SAHIH_BUKHARI_CURRICULUM.lessons.find(
    (item) => item.number === lessonNumber,
  )

  if (!lesson) {
    return null
  }

  const sourceUnits = lesson.sourceUnitIds
    .map((id) => SAHIH_BUKHARI_SOURCE_UNITS.find((unit) => unit.id === id))
    .filter(Boolean)

  return (
    <section
      className="duas-reader islamic-learning-page hadith-page"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
      lang={language}
    >
      <div className="quran-toolbar">
        <button className="back" onClick={onBack}>
          {text.back}
        </button>
        <span className="eyebrow">{text.hadith}</span>
      </div>

      <header className="duas-category-header knowledge-hero">
        <span className="eyebrow">{text.source}</span>
        <h2>{SAHIH_BUKHARI_SOURCE.titleArabic}</h2>
        <p>{SAHIH_BUKHARI_SOURCE.authorArabic}</p>
        <small>{SAHIH_BUKHARI_SOURCE.titleEnglish}</small>
      </header>

      <article className="tawheed-aqidah-source">
        <header>
          <span className="eyebrow">
            {text.chapter} {lesson.number}
          </span>
          <h3>{lesson.teachingTitle}</h3>
        </header>

        {sourceUnits.map((unit) => (
          <section key={unit?.id} className="tawheed-aqidah-source-unit">
            <small>
              {text.hadith} {unit?.hadithNumber}
            </small>

            {unit?.arabic ? (
              <p dir="rtl" lang="ar">
                {unit.arabic}
              </p>
            ) : (
              <p>{text.unavailable}</p>
            )}
          </section>
        ))}
      </article>
    </section>
  )
}
