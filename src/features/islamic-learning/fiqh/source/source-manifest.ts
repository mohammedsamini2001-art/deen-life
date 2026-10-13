export const FIQH_SOURCE_MANIFEST = {
  id: 'fiqh-foundations',
  titleEnglish: 'Foundations of Fiqh',
  titleArabic: 'أصول الفقه العملي',
  subject: 'Practical jurisprudence: purification and prayer preparation',
  sourceHierarchy: ['Topic', 'Lesson', 'Evidence'] as const,
  sourceRule:
    'Ground lessons in identifiable Quran verses and authenticated Hadith references. Distinguish direct evidence from scholarly interpretation.',
  differencesRule:
    'Do not present disputed rulings as unanimous. Identify recognized scholarly differences where they materially affect practice.',
  translationRule:
    'Arabic, English, Kiswahili and French lesson text must preserve the meaning of the cited evidence. Translations are not the original source.',
  initialScope: [
    'Purification and its purpose',
    'Wudu: Quranic foundations',
    'Wudu: prophetic practice',
    'When wudu is required',
    'Ghusl: ritual bathing',
    'Tayammum: dry purification',
    'Preparing for prayer',
  ],
} as const
