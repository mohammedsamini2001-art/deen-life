export const HADITH_SOURCE_MANIFEST = {
  id: 'sahih-al-bukhari',
  titleArabic: 'صحيح البخاري',
  titleEnglish: 'Sahih al-Bukhari',
  authorArabic: 'محمد بن إسماعيل البخاري',
  authorEnglish: 'Imam Muhammad ibn Isma‘il al-Bukhari',
  sourceType: 'classical-hadith-collection',
  primaryLanguage: 'Arabic',
  sourceHierarchy: ['Book', 'Chapter', 'Hadith'] as const,
  sourceRule:
    'Lessons must be derived from the verified source text and its original collection structure; no invented Hadith wording, chapter structure, or doctrinal additions.',
  translationRule:
    'Translations must remain explicitly identified as translations and must never be presented as the original Arabic source.',
} as const
