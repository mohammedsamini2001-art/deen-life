export interface IslamicLearningLanguage {
  code: string
  name: string
  nativeName: string
  role: 'original' | 'translation'
}

export const ISLAMIC_LEARNING_LANGUAGES: IslamicLearningLanguage[] = [
  {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    role: 'original',
  },
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    role: 'translation',
  },
  {
    code: 'sw',
    name: 'Kiswahili',
    nativeName: 'Kiswahili',
    role: 'translation',
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    role: 'translation',
  },
]

export interface IslamicLearningSubject {
  slug: string
  title: string
  description: string
}

export const ISLAMIC_LEARNING_SUBJECTS: IslamicLearningSubject[] = [
  {
    slug: 'tawheed-aqidah',
    title: 'Tawheed & Aqidah',
    description: 'Study Al-Aqidah al-Tahawiyyah from its verified classical Arabic source.',
  },


  {
    slug: 'hadith',
    title: 'Hadith',
    description: 'Study the sayings, actions, and teachings of Prophet Muhammad ﷺ.',
  },
  {
    slug: 'fiqh',
    title: 'Fiqh',
    description: 'Study Islamic rulings and practical guidance for worship and daily life.',
  },
  {
    slug: 'seerah',
    title: 'Seerah',
    description: 'Study the life, mission, character, and teachings of Prophet Muhammad ﷺ.',
  },
  {
    slug: 'tafsir',
    title: 'Tafsir',
    description: 'Study explanations and meanings of the Qur’an.',
  },
  {
    slug: 'akhlaq-adab',
    title: 'Akhlaq & Adab',
    description: 'Develop Islamic character, manners, conduct, and good qualities.',
  },
  {
    slug: 'duas-dhikr',
    title: 'Duas & Dhikr',
    description: 'Study supplications and remembrance of Allah from reliable sources.',
  },
  {
    slug: 'islamic-history',
    title: 'Islamic History',
    description: 'Explore important people, places, events, and periods in Islamic history.',
  },
  {
    slug: 'arabic-language',
    title: 'Arabic Language',
    description: 'Build Arabic knowledge to help you understand Islamic texts and the Qur’an.',
  },
  {
    slug: 'usul-al-fiqh',
    title: 'Usul al-Fiqh',
    description: 'Learn the principles and methods used in understanding Islamic jurisprudence.',
  },
  {
    slug: 'hadith-methodology',
    title: 'Hadith Methodology',
    description: 'Learn how scholars study, classify, and evaluate Hadith reports.',
  },
  {
    slug: 'islamic-studies',
    title: 'Islamic Studies',
    description: 'Explore additional Islamic sciences and connected areas of knowledge.',
  },
]
