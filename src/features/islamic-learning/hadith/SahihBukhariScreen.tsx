import { SAHIH_BUKHARI_SOURCE } from './source/sahih-bukhari-source'

type Language = 'ar' | 'en' | 'sw' | 'fr'

const UI_TEXT = {
  ar: {
    back: '← التعلّم',
    section: 'الحديث',
    source: 'المصدر الأصلي',
    book: 'الكتاب',
    hadiths: 'أحاديث',
  },
  en: {
    back: '← Learning',
    section: 'HADITH',
    source: 'CLASSICAL HADITH SOURCE',
    book: 'Book',
    hadiths: 'Hadiths',
  },
  sw: {
    back: '← Kujifunza',
    section: 'HADITHI',
    source: 'CHANZO CHA HADITHI',
    book: 'Kitabu',
    hadiths: 'Hadithi',
  },
  fr: {
    back: '← Apprentissage',
    section: 'HADITH',
    source: 'SOURCE CLASSIQUE DU HADITH',
    book: 'Livre',
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
  const books = SAHIH_BUKHARI_SOURCE.books

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
        {books.map((book) => (
          <div
            key={book.bookNumber}
            className="islamic-learning-subject-card"
          >
            <span className="islamic-learning-subject-number">
              {book.bookNumber}
            </span>

            <span className="islamic-learning-subject-info">
              <strong>
                {text.book} {book.bookNumber}
              </strong>
              <small>
                {book.hadithCount} {text.hadiths}
              </small>
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
