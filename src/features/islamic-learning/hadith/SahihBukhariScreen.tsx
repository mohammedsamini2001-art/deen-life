import { SAHIH_BUKHARI_SOURCE } from './source/sahih-bukhari-source'
import { SAHIH_BUKHARI_BOOK_1 } from './source/sahih-bukhari-book-1'

type Language = 'ar' | 'en' | 'sw' | 'fr'

const UI_TEXT = {
  ar: {
    back: '← التعلّم',
    section: 'الحديث',
    source: 'المصدر الأصلي',
    book: 'الكتاب',
    chapters: 'أبواب',
    hadiths: 'أحاديث',
  },
  en: {
    back: '← Learning',
    section: 'HADITH',
    source: 'CLASSICAL HADITH SOURCE',
    book: 'Book',
    chapters: 'Chapters',
    hadiths: 'Hadiths',
  },
  sw: {
    back: '← Kujifunza',
    section: 'HADITHI',
    source: 'CHANZO CHA HADITHI',
    book: 'Kitabu',
    chapters: 'Milango',
    hadiths: 'Hadithi',
  },
  fr: {
    back: '← Apprentissage',
    section: 'HADITH',
    source: 'SOURCE CLASSIQUE DU HADITH',
    book: 'Livre',
    chapters: 'Chapitres',
    hadiths: 'Hadiths',
  },
} as const

export default function SahihBukhariScreen({
  language,
  onBack,
  onOpenLesson,
}: {
  language: Language
  onBack: () => void
  onOpenLesson: (lessonNumber: number) => void
}) {
  const text = UI_TEXT[language]
  const book = SAHIH_BUKHARI_BOOK_1
  const hadithNumbers = book.hadithReferences.map((reference) => reference.hadithNumber)
  const hadithStart = Math.min(...hadithNumbers)
  const hadithEnd = Math.max(...hadithNumbers)

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
        <span className="eyebrow">{text.section}</span>
      </div>

      <header className="duas-category-header knowledge-hero">
        <span className="eyebrow">{text.source}</span>
        <h2>{SAHIH_BUKHARI_SOURCE.titleArabic}</h2>
        <p>{SAHIH_BUKHARI_SOURCE.authorArabic}</p>
        <small>{SAHIH_BUKHARI_SOURCE.titleEnglish}</small>
      </header>

      <div className="islamic-learning-subject-list">
        <div className="islamic-learning-subject-card">
          <span className="islamic-learning-subject-number">
            {book.bookNumber}
          </span>

          <span className="islamic-learning-subject-info">
            <strong>
              {text.book} {book.bookNumber}: {book.titleEnglish}
            </strong>
            <small>
              {book.titleArabic} · {hadithStart}–{hadithEnd}{' '}
              {text.hadiths}
            </small>
          </span>

          <span className="continue-arrow">→</span>
        </div>
      </div>

      <div className="islamic-learning-subject-list">
        {book.chapters.map((chapter) => (
          <button
            key={chapter.chapterNumber}
            type="button"
            className="islamic-learning-subject-card"
            onClick={() => onOpenLesson(chapter.chapterNumber)}
          >
            <span className="islamic-learning-subject-number">
              {chapter.chapterNumber}
            </span>

            <span className="islamic-learning-subject-info">
              <strong>
                {language === 'ar'
                  ? chapter.titleArabic
                  : chapter.titleEnglish ?? chapter.titleArabic}
              </strong>
              <small>
                {chapter.hadithNumbers.length} {text.hadiths}
              </small>
            </span>

            <span className="continue-arrow">→</span>
          </button>
        ))}
      </div>
    </section>
  )
}
