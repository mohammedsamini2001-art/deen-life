export type TawheedLanguage = 'ar' | 'en' | 'sw' | 'fr'

export interface TawheedLessonContent {
  objectives: string[]
  sections: {
    title: string
    paragraphs: string[]
  }[]
  keyTerms: {
    term: string
    meaning: string
  }[]
  reviewQuestions: string[]
  sources: {
    type: 'quran' | 'hadith' | 'scholarly'
    reference: string
  }[]
}

export interface TawheedLesson {
  slug: string
  title: string
  number: number
  content: Partial<Record<TawheedLanguage, TawheedLessonContent>>
}

export interface TawheedChapter {
  slug: string
  title: string
  number: number
  lessons: TawheedLesson[]
}

export const TAWHEED_AQIDAH_COURSE: {
  slug: string
  title: string
  description: string
  chapters: TawheedChapter[]
} = {
  slug: 'tawheed-aqidah',
  title: 'Tawheed & Aqidah',
  description:
    'A structured introduction to Islamic belief, Tawheed, Iman, and the foundations of Aqidah.',
  chapters: [
    {
      slug: 'foundations-of-aqidah',
      title: 'Foundations of Aqidah',
      number: 1,
      lessons: [
        {
          slug: 'what-is-aqidah',
          title: 'What is Aqidah?',
          number: 1,
          content: {
            en: {
              objectives: [
                'Understand what Aqidah means in Islamic studies.',
                'Recognize that Aqidah concerns the beliefs a Muslim holds.',
                'Identify the Qur’an and authentic Sunnah as the foundations of Islamic belief.',
              ],
              sections: [
                {
                  title: 'Aqidah means belief',
                  paragraphs: [
                    'Aqidah refers to the beliefs that a person firmly holds in their heart. In Islamic studies, it is used for the foundational beliefs that a Muslim accepts about Allah, His revelation, His messengers, the unseen, and the realities of faith.',
                    'Aqidah is therefore not simply a list of ideas. It concerns what a Muslim believes to be true and how those beliefs shape worship, understanding, and life.',
                  ],
                },
                {
                  title: 'The foundations of Islamic belief',
                  paragraphs: [
                    'The foundations of Islamic belief are taken from the Qur’an and the authentic teachings of the Messenger of Allah ﷺ. The Hadith of Jibril gives a central explanation of Iman by mentioning belief in Allah, His angels, His Books, His messengers, the Last Day, and divine decree.',
                    'These foundations will be studied progressively throughout this course rather than treated as isolated definitions.',
                  ],
                },
                {
                  title: 'Why we study Aqidah',
                  paragraphs: [
                    'A sound understanding of belief helps a Muslim understand why Allah is worshipped, what revelation teaches, and how faith relates to worship and character.',
                    'This course therefore begins with the foundations before moving into Tawheed, the articles of Iman, and related subjects.',
                  ],
                },
              ],
              keyTerms: [
                {
                  term: 'Aqidah',
                  meaning:
                    'Foundational matters of belief that a person firmly accepts.',
                },
                {
                  term: 'Iman',
                  meaning:
                    'Faith and belief; the Sunnah describes its foundational objects of belief.',
                },
                {
                  term: 'Tawheed',
                  meaning:
                    'Affirming the oneness and uniqueness of Allah in accordance with the Qur’an and Sunnah.',
                },
              ],
              reviewQuestions: [
                'What does Aqidah refer to?',
                'What are the two primary sources used for Islamic belief?',
                'Name the six foundational matters of Iman mentioned in the Hadith of Jibril.',
                'Why is studying Aqidah important for a Muslim?',
              ],
              sources: [
                {
                  type: 'quran',
                  reference: 'Qur’an 2:285',
                },
                {
                  type: 'quran',
                  reference: 'Qur’an 4:136',
                },
                {
                  type: 'hadith',
                  reference: 'Sahih Muslim 8e — Hadith of Jibril',
                },
                {
                  type: 'hadith',
                  reference: 'Sahih al-Bukhari 50 — Hadith of Jibril',
                },
              ],
            },

            sw: {
              objectives: [
                'Kuelewa maana ya Aqidah katika elimu ya Kiislamu.',
                'Kutambua kwamba Aqidah inahusu misingi ya imani ya Muislamu.',
                'Kutambua Qur’ani na Sunnah sahihi kama misingi ya itikadi ya Kiislamu.',
              ],
              sections: [
                {
                  title: 'Aqidah maana yake ni imani',
                  paragraphs: [
                    'Aqidah inahusu mambo ambayo mtu anayashikilia kwa yakini moyoni. Katika elimu ya Kiislamu, neno hili hutumika kuelezea misingi ya imani kuhusu Allah, wahyi Wake, Mitume Wake, mambo ya ghaibu, na mambo ya msingi ya imani.',
                    'Kwa hiyo, Aqidah si orodha ya mawazo tu. Inahusu mambo ambayo Muislamu anaamini kuwa ni ya kweli na jinsi imani hiyo inavyoathiri ibada, uelewa na maisha.',
                  ],
                },
                {
                  title: 'Misingi ya itikadi ya Kiislamu',
                  paragraphs: [
                    'Misingi ya itikadi ya Kiislamu inachukuliwa kutoka katika Qur’ani na mafundisho sahihi ya Mtume wa Allah ﷺ. Hadith ya Jibril inaeleza msingi wa Imani kwa kutaja kumuamini Allah, Malaika Wake, Vitabu Vyake, Mitume Wake, Siku ya Mwisho na Qadar.',
                    'Katika kozi hii, misingi hiyo itasomwa hatua kwa hatua badala ya kuishia katika ufafanuzi mfupi wa maneno.',
                  ],
                },
                {
                  title: 'Kwa nini tunasoma Aqidah?',
                  paragraphs: [
                    'Uelewa sahihi wa imani humsaidia Muislamu kuelewa kwa nini Allah anaabudiwa, kile ambacho wahyi unafundisha, na uhusiano kati ya imani, ibada na tabia.',
                    'Kwa hiyo, kozi hii inaanza na misingi kabla ya kuingia katika Tawheed, nguzo za Imani na mada zinazohusiana nazo.',
                  ],
                },
              ],
              keyTerms: [
                {
                  term: 'Aqidah',
                  meaning:
                    'Mambo ya msingi ya imani ambayo mtu anayakubali kwa yakini.',
                },
                {
                  term: 'Imani',
                  meaning:
                    'Kuamini; katika Sunnah imeelezwa kupitia mambo ya msingi ambayo muumini anapaswa kuyaamini.',
                },
                {
                  term: 'Tawheed',
                  meaning:
                    'Kuthibitisha upweke na upekee wa Allah kwa mujibu wa Qur’ani na Sunnah.',
                },
              ],
              reviewQuestions: [
                'Aqidah inahusu nini?',
                'Ni vyanzo gani viwili vya msingi vya itikadi ya Kiislamu?',
                'Taja mambo sita ya msingi ya Imani yaliyotajwa katika Hadith ya Jibril.',
                'Kwa nini kusoma Aqidah ni muhimu kwa Muislamu?',
              ],
              sources: [
                {
                  type: 'quran',
                  reference: 'Qur’an 2:285',
                },
                {
                  type: 'quran',
                  reference: 'Qur’an 4:136',
                },
                {
                  type: 'hadith',
                  reference: 'Sahih Muslim 8e — Hadith ya Jibril',
                },
                {
                  type: 'hadith',
                  reference: 'Sahih al-Bukhari 50 — Hadith ya Jibril',
                },
              ],
            },
          },
        },
        {
          slug: 'sources-of-islamic-belief',
          title: 'Sources of Islamic Belief',
          number: 2,
          content: {},
        },
        {
          slug: 'islam-iman-ihsan',
          title: 'Islam, Iman and Ihsan',
          number: 3,
          content: {},
        },
        {
          slug: 'six-pillars-of-iman',
          title: 'The Six Pillars of Iman',
          number: 4,
          content: {},
        },
        {
          slug: 'why-correct-belief-matters',
          title: 'Why Correct Belief Matters',
          number: 5,
          content: {},
        },
      ],
    },
    {
      slug: 'knowing-allah',
      title: 'Knowing Allah',
      number: 2,
      lessons: [],
    },
    {
      slug: 'understanding-tawheed',
      title: 'Understanding Tawheed',
      number: 3,
      lessons: [],
    },
    {
      slug: 'shirk-and-protecting-tawheed',
      title: 'Shirk and Protecting Tawheed',
      number: 4,
      lessons: [],
    },
    {
      slug: 'six-articles-of-iman',
      title: 'The Six Articles of Iman',
      number: 5,
      lessons: [],
    },
    {
      slug: 'prophethood-and-revelation',
      title: 'Prophethood and Revelation',
      number: 6,
      lessons: [],
    },
    {
      slug: 'aqidah-in-the-life-of-a-muslim',
      title: 'Aqidah in the Life of a Muslim',
      number: 7,
      lessons: [],
    },
  ],
}
