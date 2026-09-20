import { TAHAWIYYAH_CURRICULUM } from './source/tahawiyyah-curriculum'
import { TAHAWIYYAH_LESSON_MAP } from './source/tahawiyyah-lesson-map'

type Language = 'ar' | 'en' | 'sw' | 'fr'

const UI_TEXT = {
  ar: {
    back: '← التعلّم',
    section: 'التوحيد والعقيدة',
    source: 'المصدر الأصلي',
    lessonCount: 'دروس',
    sourceSections: 'مقاطع من المصدر',
  },
  en: {
    back: '← Learning',
    section: 'TAWHEED & AQIDAH',
    source: 'CLASSICAL SOURCE',
    lessonCount: 'Lessons',
    sourceSections: 'source sections',
  },
  sw: {
    back: '← Kujifunza',
    section: 'TAWHID NA AQIDA',
    source: 'CHANZO CHA KALE',
    lessonCount: 'Masomo',
    sourceSections: 'vipande vya chanzo',
  },
  fr: {
    back: '← Apprentissage',
    section: 'TAWHID ET AQIDA',
    source: 'SOURCE CLASSIQUE',
    lessonCount: 'Leçons',
    sourceSections: 'sections de la source',
  },
} as const

export default function TawheedAqidahScreen({
  language,
  onBack,
  onOpenLesson,
}: {
  language: Language
  onBack: () => void
  onOpenLesson: (lessonNumber: number) => void
}) {
  const text = UI_TEXT[language]

  return (
    <section
      className="duas-reader islamic-learning-page tawheed-aqidah-page"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
      lang={language}
    >
      <div className="quran-toolbar">
        <button className="back" onClick={onBack}>
          {text.back}
        </button>
        <span className="eyebrow">{text.section}</span>
      </div>

      <header className="duas-category-header knowledge-hero">
        <span className="eyebrow">{text.source}</span>
        <h2>{TAHAWIYYAH_CURRICULUM.source.titleArabic}</h2>
        <p>
          {TAHAWIYYAH_CURRICULUM.source.authorArabic}
        </p>
      </header>

      <div className="tawheed-aqidah-lessons">
        {TAHAWIYYAH_LESSON_MAP.map((item) => (
          <button
            key={item.lesson}
            className="tawheed-aqidah-lesson"
            onClick={() => onOpenLesson(item.lesson)}
          >
            <span>{item.lesson}</span>
            <strong>
              {language === 'ar'
                ? `الدرس ${item.lesson}`
                : item.teachingTitle}
            </strong>
            <small>
              {item.sourceUnits.length} {text.sourceSections}
            </small>
          </button>
        ))}
      </div>
    </section>
  )
}
