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
    publisher: 'Maison d’Ennour',
    sourceUrl: 'https://catalogue.bnf.fr/ark:/12148/cb41136161b',
    translationNote:
      'Arabic-French bilingual edition recorded by the Bibliothèque nationale de France. Translation attribution must be preserved.',
  },
] satisfies SahihBukhariTranslationSource[]
