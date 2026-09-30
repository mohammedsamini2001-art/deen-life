import { SAHIH_BUKHARI_SOURCE } from './source/sahih-bukhari-source'

type Language = 'ar' | 'en' | 'sw' | 'fr'

const UI_TEXT = {
  ar: {
    back: '← الحديث',
    source: 'المصدر الأصلي',
    book: 'الكتاب',
    hadith: 'الحديث',
  },
  en: {
    back: '← Hadith',
    source: 'CLASSICAL HADITH SOURCE',
    book: 'Book',
    hadith: 'Hadith',
  },
  sw: {
    back: '← Hadithi',
    source: 'CHANZO CHA HADITHI',
    book: 'Kitabu',
    hadith: 'Hadithi',
  },
  fr: {
    back: '← Hadith',
    source: 'SOURCE CLASSIQUE DU HADITH',
    book: 'Livre',
    hadith: 'Hadith',
  },
} as const

export default function SahihBukhariLessonScreen({
  language,
  bookNumber,
  onBack,
}: {
  language: Language
  bookNumber: number
  onBack: () => void
}) {
  const text = UI_TEXT[language]

  const book = SAHIH_BUKHARI_SOURCE.books.find(
    (item) => item.bookNumber === bookNumber,
  )

  if (!book) {
    return null
  }

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
            {text.book} {book.bookNumber}
          </span>
          <h3>
            {book.titleArabic ?? `${text.book} ${book.bookNumber}`}
          </h3>
        </header>

        {book.hadiths.map((hadith) => (
          <section
            key={hadith.hadithNumber}
            className="tawheed-aqidah-source-unit"
          >
            <small>
              {text.hadith} {hadith.hadithNumber}
            </small>

            <p dir="rtl" lang="ar">
              {hadith.text}
            </p>
          </section>
        ))}
      </article>
    </section>
  )
}
