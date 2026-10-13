import { useState } from 'react'
import { FIQH_CURRICULUM, type FiqhLanguage } from './source/fiqh-curriculum'
import { FIQH_SOURCE_MANIFEST } from './source/source-manifest'

const UI_TEXT = {
  ar: {
    back: '← التعلّم',
    lessons: '← الدروس',
    section: 'الفقه',
    source: 'منهج فقهي موثق بالمصادر',
    intro: 'تعلم الطهارة والاستعداد للصلاة من الأدلة.',
    lessonCount: 'دروس',
    evidence: 'الأدلة والمراجع',
    quran: 'القرآن الكريم',
    hadith: 'الحديث',
    openSource: 'قراءة المصدر الأصلي ↗',
    caution: 'قد تختلف بعض الأحكام التفصيلية بين المذاهب الفقهية المعتمدة.',
  },
  en: {
    back: '← Learning',
    lessons: '← Lessons',
    section: 'FIQH',
    source: 'SOURCE-REFERENCED CURRICULUM',
    intro: 'Study purification and preparation for prayer through cited evidence.',
    lessonCount: 'lessons',
    evidence: 'Evidence and references',
    quran: 'Qur’an',
    hadith: 'Hadith',
    openSource: 'Read source ↗',
    caution: 'Some detailed rulings differ among recognized schools of Islamic jurisprudence.',
  },
  sw: {
    back: '← Kujifunza',
    lessons: '← Masomo',
    section: 'FIQH',
    source: 'MASOMO YENYE MAREJEO',
    intro: 'Jifunze twahara na maandalizi ya swala kupitia dalili zilizotajwa.',
    lessonCount: 'masomo',
    evidence: 'Dalili na marejeo',
    quran: 'Qur’ani',
    hadith: 'Hadithi',
    openSource: 'Soma chanzo ↗',
    caution: 'Baadhi ya hukumu za kina hutofautiana kati ya madhehebu ya fiqhi yanayotambulika.',
  },
  fr: {
    back: '← Apprentissage',
    lessons: '← Leçons',
    section: 'FIQH',
    source: 'PROGRAMME AVEC RÉFÉRENCES',
    intro: 'Étudiez la purification et la préparation à la prière à partir des sources citées.',
    lessonCount: 'leçons',
    evidence: 'Preuves et références',
    quran: 'Coran',
    hadith: 'Hadith',
    openSource: 'Lire la source ↗',
    caution: 'Certaines règles détaillées diffèrent entre les écoles reconnues de jurisprudence islamique.',
  },
} as const

export default function FiqhScreen({
  language,
  onBack,
}: {
  language: FiqhLanguage
  onBack: () => void
}) {
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null)
  const text = UI_TEXT[language]
  const selectedLesson = FIQH_CURRICULUM.find(
    (lesson) => lesson.id === selectedLessonId,
  )

  return (
    <section
      className="duas-reader islamic-learning-page fiqh-page"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
      lang={language}
    >
      <div className="quran-toolbar">
        <button
          className="back"
          onClick={() => {
            if (selectedLesson) {
              setSelectedLessonId(null)
            } else {
              onBack()
            }
          }}
        >
          {selectedLesson ? text.lessons : text.back}
        </button>
        <span className="eyebrow">{text.section}</span>
      </div>

      <header className="duas-category-header knowledge-hero">
        <span className="eyebrow">{text.source}</span>
        <h2>
          {language === 'ar'
            ? FIQH_SOURCE_MANIFEST.titleArabic
            : FIQH_SOURCE_MANIFEST.titleEnglish}
        </h2>
        <p>{text.intro}</p>
        {!selectedLesson && (
          <small>
            {FIQH_CURRICULUM.length} {text.lessonCount}
          </small>
        )}
      </header>

      {!selectedLesson ? (
        <div className="islamic-learning-subject-list">
          {FIQH_CURRICULUM.map((lesson, index) => (
            <button
              key={lesson.id}
              type="button"
              className="islamic-learning-subject-card"
              onClick={() => setSelectedLessonId(lesson.id)}
            >
              <span className="islamic-learning-subject-number">
                {index + 1}
              </span>
              <span className="islamic-learning-subject-info">
                <strong>{lesson.title[language]}</strong>
                <small>{lesson.summary[language]}</small>
              </span>
              <span className="continue-arrow">→</span>
            </button>
          ))}
        </div>
      ) : (
        <article className="tawheed-aqidah-source-card fiqh-lesson-detail">
          <h3>{selectedLesson.title[language]}</h3>
          <p>{selectedLesson.summary[language]}</p>

          <h3>{text.evidence}</h3>
          <div className="fiqh-evidence-list">
            {selectedLesson.evidence.map((item) => (
              <div className="fiqh-evidence-item" key={`${item.type}-${item.reference}`}>
                <strong>
                  {item.type === 'quran' ? text.quran : text.hadith}
                  {' · '}
                  {item.reference}
                </strong>
                <p>{item.note}</p>
                <a href={item.url} target="_blank" rel="noreferrer">
                  {text.openSource}
                </a>
              </div>
            ))}
          </div>

          <p className="fiqh-scholarly-note">{text.caution}</p>
        </article>
      )}
    </section>
  )
}
