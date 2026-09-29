export interface SahihBukhariTranslationSource {
  language: 'en' | 'sw' | 'fr'
  title: string
  originalAuthor: string
  translator: string
  publisher: string
  sourceUrl: string
  translationNote: string
}

export const SAHIH_BUKHARI_TRANSLATION_SOURCES = [
  {
    language: 'en',
    title: 'Sahih al-Bukhari',
    originalAuthor: 'Imam Muhammad ibn Isma‘il al-Bukhari',
    translator: 'Dr. M. Muhsin Khan',
    publisher: 'Sunnah.com',
    sourceUrl: 'https://sunnah.com/bukhari:1',
    translationNote:
      'English translation attributed by Sunnah.com to Dr. M. Muhsin Khan. Translation attribution must be preserved.',
  },
  {
    language: 'fr',
    title: 'Le Sahîh al-Bukhârî',
    originalAuthor: 'Muhammad ibn Isma‘il al-Bukhari',
    translator: 'O. Houdas and W. Marçais',
    publisher: 'Maison d’Ennour (2007 edition)',
    sourceUrl: 'https://catalogue.bnf.fr/ark:/12148/cb41136161b',
    translationNote:
      'BnF records the 2007 Arabic-French bilingual edition translated by O. Houdas and W. Marçais, revised, corrected and annotated by Corentin Pabiot. Translation attribution must be preserved.',
  },
  {
    language: 'sw',
    title: 'Sahih Al-Bukhari: Swahili',
    originalAuthor: 'Muhammad ibn Isma‘il al-Bukhari',
    translator: 'Sheikh Abdullah Muhsin Al-Barwani',
    publisher: 'Not established from the verified catalog record',
    sourceUrl: 'https://www.noor-book.com/en/book/review/336018',
    translationNote:
      'Published Swahili translation identified in the available catalog record. Translator attribution is preserved; publisher details require further verification.',
  },
] satisfies SahihBukhariTranslationSource[]
