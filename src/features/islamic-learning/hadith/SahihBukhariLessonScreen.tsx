import { SAHIH_BUKHARI_SOURCE } from './source/sahih-bukhari-source'
import { SAHIH_BUKHARI_ENGLISH_SOURCE } from './source/sahih-bukhari-english-source'
import { SAHIH_BUKHARI_BOOK_1_KISWAHILI } from './source/sahih-bukhari-book-1-kiswahili'

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

  const source =
    language === 'en'
      ? SAHIH_BUKHARI_ENGLISH_SOURCE
      : SAHIH_BUKHARI_SOURCE

  const kiswahiliBook1 =
    language === 'sw' && bookNumber === 1
      ? {
          bookNumber: 1,
          hadiths: SAHIH_BUKHARI_BOOK_1_KISWAHILI,
        }
      : null

  const book =
    kiswahiliBook1 ??
    source.books.find(
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
            {text.book} {book.bookNumber}
          </h3>
        </header>

        {book.hadiths.map((hadith) => {
          const hadithText =
            'text' in hadith
              ? hadith.text
              : hadith.translations.find(
                  (translation) => translation.language === language,
                )?.text ?? ''

          return (
            <section
              key={hadith.hadithNumber}
              className="tawheed-aqidah-source-unit"
            >
              <small>
                {text.hadith} {hadith.hadithNumber}
              </small>

              <p dir={language === 'ar' ? 'rtl' : 'ltr'} lang={language}>
                {hadithText}
              </p>
            </section>
          )
        })}
      </article>
    </section>
  )
}
