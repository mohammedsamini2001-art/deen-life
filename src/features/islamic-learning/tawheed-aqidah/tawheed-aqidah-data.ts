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
          content: {
            en: {
              objectives: [
                'Understand the Qur’an and authentic Sunnah as foundational sources of Islamic belief.',
                'Understand how the Qur’an provides revelation and how the Sunnah explains and demonstrates it.',
                'Learn to approach claims about Islamic belief by referring back to reliable revealed sources.',
              ],
              sections: [
                {
                  title: 'The Qur’an',
                  paragraphs: [
                    'The Qur’an is the revelation of Allah and the primary revealed source for Islamic belief. It teaches Muslims about Allah, His names and attributes, the unseen, revelation, the messengers, the Last Day, and other matters of faith.',
                    'When studying Aqidah, Qur’anic evidence should be understood according to its context and in harmony with the established teachings of the Prophet ﷺ.',
                  ],
                },
                {
                  title: 'The authentic Sunnah',
                  paragraphs: [
                    'The Sunnah refers to the teachings, statements, actions, and approvals of the Messenger of Allah ﷺ. Authentic hadith preserve these teachings and help Muslims understand how revelation was explained and practiced.',
                    'The Sunnah clarifies matters of faith and worship and provides guidance for understanding and applying the Qur’an.',
                  ],
                },
                {
                  title: 'Using the sources carefully',
                  paragraphs: [
                    'A Muslim should not treat every statement found online or attributed to Islam as evidence. Claims about belief should be checked against the Qur’an and authentic Sunnah.',
                    'The Qur’an and Sunnah should be studied with sound scholarship, careful attention to context, and respect for the established methods of Islamic learning.',
                  ],
                },
              ],
              keyTerms: [
                {
                  term: 'Qur’an',
                  meaning:
                    'The revealed Book of Allah and the primary source of guidance and belief for Muslims.',
                },
                {
                  term: 'Sunnah',
                  meaning:
                    'The teachings, statements, actions, and approvals of the Messenger of Allah ﷺ.',
                },
                {
                  term: 'Hadith',
                  meaning:
                    'A report describing a statement, action, approval, or characteristic attributed to the Prophet ﷺ.',
                },
              ],
              reviewQuestions: [
                'What is the Qur’an’s role in Islamic belief?',
                'What does the term Sunnah refer to?',
                'Why are authentic hadith important when studying Aqidah?',
                'Why should claims about Islamic belief be checked against reliable sources?',
              ],
              sources: [
                {
                  type: 'quran',
                  reference: 'Qur’an 4:59',
                },
                {
                  type: 'quran',
                  reference: 'Qur’an 4:136',
                },
                {
                  type: 'hadith',
                  reference: 'Sahih Muslim 8a/8e — Hadith of Jibril',
                },
              ],
            },

            sw: {
              objectives: [
                'Kuelewa Qur’ani na Sunnah sahihi kama vyanzo vya msingi vya itikadi ya Kiislamu.',
                'Kuelewa jinsi Qur’ani inavyotoa wahyi na jinsi Sunnah inavyoufafanua na kuuonyesha kwa vitendo.',
                'Kujifunza kurejea vyanzo sahihi tunapochunguza mada za itikadi ya Kiislamu.',
              ],
              sections: [
                {
                  title: 'Qur’ani',
                  paragraphs: [
                    'Qur’ani ni wahyi wa Allah na chanzo kikuu cha wahyi katika itikadi ya Kiislamu. Inawafundisha Waislamu kuhusu Allah, majina na sifa Zake, mambo ya ghaibu, wahyi, Mitume, Siku ya Mwisho na mambo mengine ya imani.',
                    'Tunaposoma Aqidah, ushahidi wa Qur’ani unapaswa kueleweka kwa kuzingatia muktadha wake na mafundisho sahihi yaliyofundishwa na Mtume ﷺ.',
                  ],
                },
                {
                  title: 'Sunnah sahihi',
                  paragraphs: [
                    'Sunnah inahusu mafundisho, maneno, matendo na maafikiano ya Mtume wa Allah ﷺ. Hadith sahihi huhifadhi mafundisho hayo na hutusaidia kuelewa jinsi wahyi ulivyofafanuliwa na kutekelezwa.',
                    'Sunnah hufafanua mambo ya imani na ibada na hutoa mwongozo wa kuielewa na kuitumia Qur’ani.',
                  ],
                },
                {
                  title: 'Kutumia vyanzo kwa uangalifu',
                  paragraphs: [
                    'Muislamu hapaswi kuchukulia kila kauli inayopatikana mtandaoni au inayodaiwa kuwa ya Kiislamu kuwa ni ushahidi. Madai kuhusu itikadi yanapaswa kuchunguzwa kwa kurejea Qur’ani na Sunnah sahihi.',
                    'Qur’ani na Sunnah vinapaswa kusomwa kwa msaada wa elimu sahihi, kuzingatia muktadha, na kuheshimu misingi iliyothibitishwa ya elimu ya Kiislamu.',
                  ],
                },
              ],
              keyTerms: [
                {
                  term: 'Qur’ani',
                  meaning:
                    'Kitabu kilichoteremshwa na Allah na chanzo kikuu cha mwongozo na itikadi kwa Waislamu.',
                },
                {
                  term: 'Sunnah',
                  meaning:
                    'Mafundisho, maneno, matendo na maafikiano ya Mtume wa Allah ﷺ.',
                },
                {
                  term: 'Hadith',
                  meaning:
                    'Riwaya inayosimulia kauli, tendo, maafikiano au sifa iliyohusishwa na Mtume ﷺ.',
                },
              ],
              reviewQuestions: [
                'Qur’ani ina nafasi gani katika itikadi ya Kiislamu?',
                'Neno Sunnah linamaanisha nini?',
                'Kwa nini hadith sahihi ni muhimu tunaposoma Aqidah?',
                'Kwa nini madai kuhusu itikadi ya Kiislamu yanapaswa kuchunguzwa kwa vyanzo sahihi?',
              ],
              sources: [
                {
                  type: 'quran',
                  reference: 'Qur’an 4:59',
                },
                {
                  type: 'quran',
                  reference: 'Qur’an 4:136',
                },
                {
                  type: 'hadith',
                  reference: 'Sahih Muslim 8a/8e — Hadith ya Jibril',
                },
              ],
            },
          },
        },
        {
          slug: 'islam-iman-ihsan',
          title: 'Islam, Iman and Ihsan',
          number: 3,
          content: {
      en: {
        objectives: [
          'Explain the meanings of Islam, Iman, and Ihsan as described in the Qur’an and the Hadith of Jibril.',
          'Understand how belief, worship, and excellence in worship are connected.',
          'Recognize the six articles of Iman and the five practices described under Islam in the Hadith of Jibril.',
        ],
        sections: [
          {
            title: 'The three dimensions of the religion',
            paragraphs: [
              'The Hadith of Jibril presents Islam, Iman, and Ihsan together as connected dimensions of the religion. Islam includes outward acts of worship, Iman includes essential matters of belief, and Ihsan describes excellence and sincerity in worship.',
              'Together, these concepts help a Muslim understand practice, belief, and the quality of worship.',
            ],
          },
          {
            title: 'Islam: submission and practice',
            paragraphs: [
              'In the Hadith of Jibril, the Prophet Muhammad ﷺ explained Islam through five major practices: the testimony of faith, prayer, Zakah, fasting Ramadan, and Hajj for whoever is able.',
              'Islam therefore includes submitting to Allah through worship and obedience. These practices are outward expressions of submission to Allah.',
            ],
          },
          {
            title: 'Iman: faith and conviction',
            paragraphs: [
              'In the Hadith of Jibril, the Prophet ﷺ explained Iman through belief in Allah, His angels, His revealed books, His messengers, the Last Day, and divine decree.',
              'Iman is connected to what a Muslim believes and accepts as true. The Qur’an also teaches believers to have faith in Allah, His Messenger, His Book, and the revealed scriptures.',
            ],
          },
          {
            title: 'Ihsan: excellence in worship',
            paragraphs: [
              'The Prophet ﷺ described Ihsan as worshipping Allah as though you see Him; and if you do not see Him, knowing that He sees you.',
              'This teaches awareness of Allah, sincerity, carefulness, and excellence in worship. Ihsan is not simply doing more actions; it is striving to perform worship with conscious awareness of Allah.',
            ],
          },
          {
            title: 'How Islam, Iman, and Ihsan fit together',
            paragraphs: [
              'A Muslim learns Islam through worship and obedience, Iman through sound belief, and Ihsan through sincerity and excellence. These dimensions are connected rather than competing.',
              'The Hadith of Jibril is especially important because the Prophet ﷺ taught these three concepts together in one explanation of the religion.',
            ],
          },
        ],
        keyTerms: [
          {
            term: 'Islam',
            meaning: 'Submission to Allah expressed through belief, worship, and obedience; the Hadith of Jibril specifically describes five major practices.',
          },
          {
            term: 'Iman',
            meaning: 'Faith and conviction in Allah, His angels, His books, His messengers, the Last Day, and divine decree.',
          },
          {
            term: 'Ihsan',
            meaning: 'Excellence in worship through sincere awareness that Allah sees and knows us.',
          },
        ],
        reviewQuestions: [
          'What three concepts are presented together in the Hadith of Jibril?',
          'What five practices are described under Islam in the Hadith of Jibril?',
          'What six matters of belief are described under Iman?',
          'How did the Prophet ﷺ explain Ihsan?',
          'How are Islam, Iman, and Ihsan connected?',
        ],
        sources: [
          { type: 'quran', reference: 'Qur’an 49:14' },
          { type: 'quran', reference: 'Qur’an 2:285' },
          { type: 'hadith', reference: 'Sahih Muslim 8e — Hadith of Jibril' },
          { type: 'hadith', reference: 'Sahih al-Bukhari 50 — Hadith of Jibril' },
        ],
      },

      sw: {
        objectives: [
          'Eleza maana ya Uislamu, Imani na Ihsani kama zilivyoelezwa katika Qur’an na Hadithi ya Jibril.',
          'Elewa jinsi imani, ibada na kufanya ibada kwa ubora zinavyohusiana.',
          'Tambua misingi sita ya Imani na matendo matano yaliyoelezwa chini ya Uislamu katika Hadithi ya Jibril.',
        ],
        sections: [
          {
            title: 'Vipengele vitatu vya dini',
            paragraphs: [
              'Hadithi ya Jibril inawasilisha Uislamu, Imani na Ihsani pamoja kama vipengele vinavyohusiana vya dini. Uislamu unahusisha matendo ya ibada yanayoonekana, Imani inahusisha mambo ya msingi ya itikadi, na Ihsani inaeleza ubora na ikhlasi katika ibada.',
              'Kwa pamoja, dhana hizi zinamsaidia Muislamu kuelewa matendo, imani na ubora wa ibada.',
            ],
          },
          {
            title: 'Uislamu: kujisalimisha na kutenda',
            paragraphs: [
              'Katika Hadithi ya Jibril, Mtume Muhammad ﷺ alieleza Uislamu kupitia matendo matano makuu: shahada, Swala, Zaka, kufunga Ramadhani na Hija kwa mwenye uwezo.',
              'Uislamu unahusisha kujisalimisha kwa Allah kupitia ibada na utiifu. Matendo haya ni udhihirisho wa nje wa kujisalimisha kwa Allah.',
            ],
          },
          {
            title: 'Imani: kuamini na kuwa na yakini',
            paragraphs: [
              'Katika Hadithi ya Jibril, Mtume ﷺ alieleza Imani kwa kuamini Allah, Malaika Wake, Vitabu Vyake, Mitume Wake, Siku ya Mwisho na Qadar.',
              'Imani inahusiana na mambo ambayo Muislamu anaamini na kuyakubali kuwa ni ya kweli. Qur’an pia inawafundisha waumini kumuamini Allah, Mtume Wake, Kitabu Chake na vitabu vilivyoteremshwa.',
            ],
          },
          {
            title: 'Ihsani: ubora katika ibada',
            paragraphs: [
              'Mtume ﷺ alieleza Ihsani kuwa kumuabudu Allah kana kwamba unamuona; na ikiwa humuoni, ujue kwamba Yeye anakuona.',
              'Hili linafundisha kumtambua Allah, kuwa na ikhlasi na kufanya ibada kwa ubora. Ihsani si kufanya matendo mengi tu, bali ni kujitahidi kufanya ibada kwa kumtambua Allah.',
            ],
          },
          {
            title: 'Jinsi Uislamu, Imani na Ihsani zinavyohusiana',
            paragraphs: [
              'Muislamu hujifunza Uislamu kupitia ibada na utiifu, Imani kupitia itikadi sahihi, na Ihsani kupitia ikhlasi na ubora. Vipengele hivi vinahusiana.',
              'Hadithi ya Jibril ni muhimu kwa sababu Mtume ﷺ alifundisha dhana hizi tatu pamoja katika maelezo yake kuhusu dini.',
            ],
          },
        ],
        keyTerms: [
          {
            term: 'Uislamu',
            meaning: 'Kujisalimisha kwa Allah kupitia imani, ibada na utiifu; Hadithi ya Jibril inaeleza hasa matendo matano makuu.',
          },
          {
            term: 'Imani',
            meaning: 'Kumwamini na kuwa na yakini katika Allah, Malaika Wake, Vitabu Vyake, Mitume Wake, Siku ya Mwisho na Qadar.',
          },
          {
            term: 'Ihsani',
            meaning: 'Ubora katika ibada kupitia ikhlasi na kutambua kwamba Allah anatuona na anajua hali yetu.',
          },
        ],
        reviewQuestions: [
          'Ni dhana gani tatu zinazowasilishwa pamoja katika Hadithi ya Jibril?',
          'Ni matendo gani matano yaliyoelezwa chini ya Uislamu?',
          'Ni mambo gani sita ya Imani yaliyoelezwa katika hadithi?',
          'Mtume ﷺ alielezaje Ihsani?',
          'Uislamu, Imani na Ihsani vinahusianaje?',
        ],
        sources: [
          { type: 'quran', reference: 'Qur’an 49:14' },
          { type: 'quran', reference: 'Qur’an 2:285' },
          { type: 'hadith', reference: 'Sahih Muslim 8e — Hadithi ya Jibril' },
          { type: 'hadith', reference: 'Sahih al-Bukhari 50 — Hadithi ya Jibril' },
        ],
      },
    },
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
