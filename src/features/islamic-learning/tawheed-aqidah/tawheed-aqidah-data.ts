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
          content: {
        en: {
          objectives: [
            'Identify the six articles of Iman described in the Qur’an and authentic Sunnah.',
            'Understand what belief in Allah, angels, revealed books, messengers, the Last Day, and divine decree means.',
            'Recognize how these beliefs shape a Muslim’s worship, responsibility, hope, and daily life.',
          ],
          sections: [
            {
              title: 'The six articles of Iman',
              paragraphs: [
                'Islamic sources describe six core matters that a believer affirms as part of Iman: belief in Allah, His angels, His revealed books, His messengers, the Last Day, and divine decree (Qadar). The Qur’an names these matters together, and the Hadith of Jibril gives a clear explanation of Iman.',
                'These articles are connected. They form a framework of belief about Allah, revelation, guidance, the future, and what occurs within Allah’s knowledge and will.',
              ],
            },
            {
              title: '1. Belief in Allah',
              paragraphs: [
                'Belief in Allah means affirming that Allah is the true Lord and the only One worthy of worship. It includes believing what He has revealed about Himself and worshipping Him sincerely.',
                'Belief in Allah is the foundation of the other articles of Iman because the believer accepts Allah as the source of creation, revelation, guidance, and judgment.',
              ],
            },
            {
              title: '2. Belief in the angels',
              paragraphs: [
                'Angels are part of the unseen creation that Allah has told us about. Believing in them means accepting their existence and the roles Allah has assigned to them, without adding claims that revelation has not established.',
                'Belief in the angels reminds a Muslim that creation includes realities beyond what can be seen and that Allah’s commands are carried out throughout His creation.',
              ],
            },
            {
              title: '3. Belief in the revealed books',
              paragraphs: [
                'A Muslim believes that Allah revealed guidance through scriptures to His messengers. The Qur’an teaches believers to affirm Allah’s revealed books and to believe in the revelation sent before the Qur’an.',
                'The Qur’an is the final revealed Book sent to Prophet Muhammad ﷺ. Muslims therefore follow the Qur’an as their revealed guidance while affirming the original revelation given to earlier messengers.',
              ],
            },
            {
              title: '4. Belief in the messengers',
              paragraphs: [
                'Allah sent messengers to guide people to worship Him and follow His guidance. Belief in the messengers includes accepting the truth of their message and respecting them as servants and messengers of Allah.',
                'The Qur’an teaches believers not to reject some messengers while accepting others. Muslims believe in Allah’s messengers as a connected chain of guidance and follow the final messenger, Muhammad ﷺ, according to the Qur’an and authentic Sunnah.',
              ],
            },
            {
              title: '5. Belief in the Last Day',
              paragraphs: [
                'Belief in the Last Day means accepting that earthly life is not the end. People will be raised, judged, and held accountable before Allah.',
                'This belief strengthens moral responsibility. A Muslim remembers that actions matter even when other people do not see them, because Allah knows and the final return is to Him.',
              ],
            },
            {
              title: '6. Belief in divine decree (Qadar)',
              paragraphs: [
                'Belief in Qadar means affirming that Allah has complete knowledge and authority over His creation and that what occurs does so within His knowledge and will. The Qur’an teaches that Allah created all things with measure.',
                'Belief in Qadar does not mean that a person should stop making choices or taking responsible action. A Muslim still chooses, acts, seeks what is beneficial, avoids wrongdoing, and is accountable for what they do.',
              ],
            },
            {
              title: 'How the six articles shape life',
              paragraphs: [
                'Belief changes how a person understands life. Belief in Allah gives worship a clear purpose. Belief in revelation and messengers gives guidance. Belief in the Last Day strengthens responsibility, while belief in Qadar helps a believer remain grounded in effort and trust in Allah.',
                'These beliefs are not only subjects to memorize. They are foundations that can shape worship, character, decisions, patience, gratitude, and hope.',
              ],
            },
          ],
          keyTerms: [
            {
              term: 'Iman',
              meaning: 'Faith and conviction in the core matters taught by Allah and His Messenger.',
            },
            {
              term: 'Mala’ikah',
              meaning: 'Angels, an unseen creation of Allah whom Muslims affirm as part of the unseen world.',
            },
            {
              term: 'Kutub',
              meaning: 'The revealed books and scriptures sent by Allah through His messengers.',
            },
            {
              term: 'Rusul',
              meaning: 'The messengers sent by Allah to convey His guidance to people.',
            },
            {
              term: 'Al-Yawm al-Akhir',
              meaning: 'The Last Day, when creation will be raised and judged by Allah.',
            },
            {
              term: 'Qadar',
              meaning: 'Divine decree: Allah’s complete knowledge and will concerning His creation and what occurs within it.',
            },
          ],
          reviewQuestions: [
            'What are the six articles of Iman?',
            'Why is belief in Allah the foundation of the other articles of faith?',
            'What does a Muslim believe about Allah’s revealed books?',
            'Why do Muslims believe in all of Allah’s messengers?',
            'How does belief in the Last Day affect a person’s sense of responsibility?',
            'What does belief in Qadar mean?',
            'Why does belief in Qadar not remove the need to make responsible choices and take action?',
          ],
          sources: [
            { type: 'quran', reference: 'Qur’an 2:285' },
            { type: 'quran', reference: 'Qur’an 4:136' },
            { type: 'quran', reference: 'Qur’an 54:49' },
            { type: 'quran', reference: 'Qur’an 76:29–30' },
            { type: 'hadith', reference: 'Sahih Muslim 8e — Hadith of Jibril' },
          ],
        },

        sw: {
          objectives: [
            'Tambua nguzo sita za Imani kama zinavyoelezwa katika Qur’an na Sunnah sahihi.',
            'Elewa maana ya kumuamini Allah, Malaika, Vitabu vilivyoteremshwa, Mitume, Siku ya Mwisho na Qadar.',
            'Tambua jinsi imani hizi zinavyounda ibada, uwajibikaji, matumaini na maisha ya kila siku ya Muislamu.',
          ],
          sections: [
            {
              title: 'Nguzo sita za Imani',
              paragraphs: [
                'Vyanzo vya Kiislamu vinaeleza mambo sita ya msingi ambayo muumini anayakubali katika Imani: kumuamini Allah, Malaika Wake, Vitabu Vyake vilivyoteremshwa, Mitume Wake, Siku ya Mwisho na Qadar. Qur’an inataja mambo haya pamoja, na Hadithi ya Jibril inaeleza Imani kwa uwazi.',
                'Nguzo hizi zimeungana. Zinaunda mfumo wa imani kuhusu Allah, wahyi, mwongozo, maisha ya baadaye na mambo yanayotokea ndani ya elimu na matakwa ya Allah.',
              ],
            },
            {
              title: '1. Kumuamini Allah',
              paragraphs: [
                'Kumuamini Allah ni kuthibitisha kwamba Allah ndiye Mola wa kweli na ndiye Mwenye kustahiki kuabudiwa. Inahusisha kuamini yale ambayo Allah amejieleza Mwenyewe na kumuabudu kwa ikhlasi.',
                'Kumuamini Allah ni msingi wa nguzo nyingine za Imani kwa sababu muumini humkubali Allah kuwa Muumba, Mwenye kuleta wahyi, Mwenye kutoa mwongozo na Mwenye kuhukumu.',
              ],
            },
            {
              title: '2. Kuwaamini Malaika',
              paragraphs: [
                'Malaika ni miongoni mwa viumbe vya ghaibu ambavyo Allah ametueleza. Kuwaamini kunamaanisha kukubali kuwepo kwao na majukumu ambayo Allah amewapa, bila kuongeza madai ambayo hayajathibitishwa na Wahyi.',
                'Imani juu ya Malaika humkumbusha Muislamu kwamba uumbaji una mambo ambayo hayaonekani kwa macho na kwamba amri za Allah zinatekelezwa katika uumbaji Wake.',
              ],
            },
            {
              title: '3. Kuamini Vitabu vilivyoteremshwa',
              paragraphs: [
                'Muislamu anaamini kwamba Allah aliteremsha mwongozo kupitia maandiko kwa Mitume Wake. Qur’an inawafundisha Waumini kuthibitisha Vitabu vya Allah na kuamini wahyi ulioteremshwa kabla ya Qur’an.',
                'Qur’an ni Kitabu cha mwisho kilichoteremshwa kwa Mtume Muhammad ﷺ. Kwa hiyo Waislamu wanaifuata Qur’an kama mwongozo ulioteremshwa huku wakithibitisha wahyi wa asili uliotolewa kwa Mitume waliotangulia.',
              ],
            },
            {
              title: '4. Kuwaamini Mitume',
              paragraphs: [
                'Allah aliwatuma Mitume ili kuwaongoza watu wamuabudu Yeye na kufuata mwongozo Wake. Kuwaamini Mitume kunahusisha kukubali ukweli wa ujumbe wao na kuwaheshimu kama waja na Mitume wa Allah.',
                'Qur’an inawafundisha Waumini kutowakataa baadhi ya Mitume huku wakiwakubali wengine. Waislamu huwaamini Mitume wa Allah kama mlolongo wa mwongozo na humfuata Mtume wa mwisho, Muhammad ﷺ, kwa mujibu wa Qur’an na Sunnah sahihi.',
              ],
            },
            {
              title: '5. Kuamini Siku ya Mwisho',
              paragraphs: [
                'Kuamini Siku ya Mwisho ni kukubali kwamba maisha ya duniani si mwisho. Watu watafufuliwa, watahukumiwa na watawajibishwa mbele ya Allah.',
                'Imani hii huimarisha uwajibikaji wa kimaadili. Muislamu hukumbuka kwamba matendo yana umuhimu hata kama watu wengine hawayaoni, kwa sababu Allah anayajua na marejeo ya mwisho ni Kwake.',
              ],
            },
            {
              title: '6. Kuamini Qadar',
              paragraphs: [
                'Kuamini Qadar ni kuthibitisha kwamba Allah ana elimu kamili na mamlaka juu ya uumbaji Wake na kwamba mambo hutokea ndani ya elimu na matakwa Yake. Qur’an inafundisha kwamba Allah ameumba kila kitu kwa kipimo.',
                'Kuamini Qadar hakumaanishi mtu aache kufanya maamuzi au kuchukua hatua kwa uwajibikaji. Muislamu bado huchagua, hutenda, hutafuta yaliyo na manufaa, hujiepusha na maovu na huwajibika kwa yale anayoyafanya.',
              ],
            },
            {
              title: 'Jinsi nguzo hizi zinavyounda maisha',
              paragraphs: [
                'Imani hubadilisha namna mtu anavyoona maisha. Kumuamini Allah huipa ibada kusudi. Kuamini wahyi na Mitume hutoa mwongozo. Kuamini Siku ya Mwisho huimarisha uwajibikaji, na kuamini Qadar humsaidia muumini kubaki na juhudi pamoja na kumtegemea Allah.',
                'Nguzo hizi si masomo ya kukariri tu. Ni misingi inayoweza kuunda ibada, tabia, maamuzi, subira, shukrani na matumaini.',
              ],
            },
          ],
          keyTerms: [
            {
              term: 'Imani',
              meaning: 'Kumuamini kwa yakini mambo ya msingi yaliyofundishwa na Allah na Mtume Wake.',
            },
            {
              term: 'Malaika',
              meaning: 'Viumbe vya ghaibu vya Allah ambavyo Muislamu anaamini kuwa vipo.',
            },
            {
              term: 'Vitabu',
              meaning: 'Vitabu na maandiko yaliyoteremshwa na Allah kupitia Mitume Wake.',
            },
            {
              term: 'Mitume',
              meaning: 'Wajumbe waliotumwa na Allah kufikisha mwongozo Wake kwa watu.',
            },
            {
              term: 'Siku ya Mwisho',
              meaning: 'Siku ambayo viumbe watafufuliwa na kuhukumiwa na Allah.',
            },
            {
              term: 'Qadar',
              meaning: 'Kadirio la Allah katika uumbaji Wake kwa mujibu wa elimu na matakwa Yake.',
            },
          ],
          reviewQuestions: [
            'Nguzo sita za Imani ni zipi?',
            'Kwa nini kumuamini Allah ni msingi wa nguzo nyingine za Imani?',
            'Muislamu anaamini nini kuhusu Vitabu vilivyoteremshwa na Allah?',
            'Kwa nini Waislamu wanawaamini Mitume wote wa Allah?',
            'Kuamini Siku ya Mwisho kunaathirije uwajibikaji wa mtu?',
            'Kuamini Qadar kunamaanisha nini?',
            'Kwa nini kuamini Qadar hakumwondolei mtu jukumu la kuchagua na kuchukua hatua kwa uwajibikaji?',
          ],
          sources: [
            { type: 'quran', reference: 'Qur’an 2:285' },
            { type: 'quran', reference: 'Qur’an 4:136' },
            { type: 'quran', reference: 'Qur’an 54:49' },
            { type: 'quran', reference: 'Qur’an 76:29–30' },
            { type: 'hadith', reference: 'Sahih Muslim 8e — Hadithi ya Jibril' },
          ],
        },
      },
        },
        {
          slug: 'why-correct-belief-matters',
          title: 'Why Correct Belief Matters',
          number: 5,
          content: {
  en: {
    objectives: [
      'Understand why Islamic belief is connected to worship, character, and daily choices.',
      'Recognize the importance of grounding belief in the Qur’an and authentic Sunnah.',
      'Understand how sound belief can guide a Muslim toward sincere worship, responsibility, hope, and good action.',
    ],
    sections: [
      {
        title: 'Belief is the foundation of worship',
        paragraphs: [
          'A Muslim’s actions are connected to what they believe about Allah, revelation, and the purpose of life. Belief in Allah gives worship its purpose: a Muslim worships Allah because He is the Creator and the One worthy of worship.',
          'The Qur’an repeatedly connects belief with righteous action. This shows that Aqidah is not only something to discuss or memorize; it should influence how a person worships and lives.',
        ],
      },
      {
        title: 'Correct belief needs reliable sources',
        paragraphs: [
          'Islamic belief should be learned from the Qur’an and the authentic Sunnah, rather than from unsupported claims, rumours, or personal speculation.',
          'When Muslims encounter a claim about belief, they should seek reliable evidence and ask qualified people when they need clarification. This helps protect a person from attributing ideas to Islam without sound evidence.',
        ],
      },
      {
        title: 'Belief shapes character and choices',
        paragraphs: [
          'Belief in Allah reminds a Muslim that Allah knows what people do and that actions have meaning. Belief in the Last Day strengthens awareness of accountability, while belief in revelation provides guidance for how to live.',
          'These beliefs can encourage honesty, patience, gratitude, responsibility, repentance, and kindness. They do not remove the need for effort; instead, they give effort a clear purpose and direction.',
        ],
      },
      {
        title: 'Avoiding extremes in matters of belief',
        paragraphs: [
          'Studying Aqidah should be approached with humility and care. A learner should distinguish between what the Qur’an and authentic Sunnah explicitly teach and explanations offered by later scholars.',
          'Muslims have differed in some theological interpretations throughout history. This course focuses on foundational beliefs supported by the Qur’an and authentic Sunnah and avoids presenting disputed details as though they are universally agreed upon.',
        ],
      },
      {
        title: 'Belief should lead to beneficial action',
        paragraphs: [
          'Sound belief is not meant to remain only in the mind. It should appear in worship, conduct, relationships, and responsible choices.',
          'The goal of learning Aqidah is therefore not simply to win arguments. It is to understand what Islam teaches, worship Allah sincerely, follow reliable guidance, and improve one’s actions.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Aqidah',
        meaning: 'The foundational beliefs that a Muslim holds about Allah and the matters of faith taught by revelation.',
      },
      {
        term: 'Dalil',
        meaning: 'Evidence or proof used to support a religious claim.',
      },
      {
        term: 'Sunnah',
        meaning: 'The guidance and example of Prophet Muhammad ﷺ as preserved through authentic reports and teachings.',
      },
      {
        term: 'Righteous action',
        meaning: 'A good deed performed in accordance with Islamic guidance and sincerely for Allah.',
      },
    ],
    reviewQuestions: [
      'Why is belief connected to worship?',
      'Why should Islamic beliefs be grounded in the Qur’an and authentic Sunnah?',
      'How can belief in the Last Day affect a person’s choices?',
      'Why should a learner distinguish between primary texts and later scholarly explanations?',
      'What does it mean for belief to lead to beneficial action?',
    ],
    sources: [
      { type: 'quran', reference: 'Qur’an 2:177' },
      { type: 'quran', reference: 'Qur’an 103:1–3' },
      { type: 'quran', reference: 'Qur’an 4:59' },
      { type: 'quran', reference: 'Qur’an 4:136' },
      { type: 'hadith', reference: 'Sahih Muslim 8e — Hadith of Jibril' },
    ],
  },
  sw: {
    objectives: [
      'Kuelewa kwa nini imani ya Kiislamu imeunganishwa na ibada, tabia na maamuzi ya kila siku.',
      'Kutambua umuhimu wa kujenga imani juu ya Qur’an na Sunnah sahihi.',
      'Kuelewa jinsi imani sahihi inaweza kumwelekeza Muislamu katika ibada ya ikhlasi, uwajibikaji, matumaini na matendo mema.',
    ],
    sections: [
      {
        title: 'Imani ni msingi wa ibada',
        paragraphs: [
          'Matendo ya Muislamu yana uhusiano na kile anachoamini kuhusu Allah, wahyi na kusudi la maisha. Kumuamini Allah huipa ibada kusudi: Muislamu humwabudu Allah kwa sababu Yeye ndiye Muumba na ndiye anayestahiki kuabudiwa.',
          'Qur’an mara nyingi huunganisha imani na matendo mema. Hii inaonyesha kwamba Aqidah si jambo la kujadili au kukariri tu; inapaswa kuathiri namna mtu anavyoabudu na kuishi.',
        ],
      },
      {
        title: 'Imani sahihi inahitaji vyanzo vya kuaminika',
        paragraphs: [
          'Imani ya Kiislamu inapaswa kujifunzwa kutoka katika Qur’an na Sunnah sahihi, badala ya madai yasiyo na ushahidi, uvumi au dhana binafsi.',
          'Muislamu anapokutana na dai kuhusu imani, anapaswa kutafuta ushahidi wa kuaminika na kuwauliza watu wenye elimu na sifa zinazofaa anapohitaji ufafanuzi. Hii humsaidia mtu kuepuka kuhusisha mawazo fulani na Uislamu bila ushahidi thabiti.',
        ],
      },
      {
        title: 'Imani huunda tabia na maamuzi',
        paragraphs: [
          'Kumuamini Allah humkumbusha Muislamu kwamba Allah anayajua matendo ya watu na kwamba matendo yana umuhimu. Kuamini Siku ya Mwisho huimarisha ufahamu wa uwajibikaji, huku kuamini wahyi kukitoa mwongozo wa namna ya kuishi.',
          'Imani hizi zinaweza kuhimiza ukweli, subira, shukrani, uwajibikaji, toba na wema. Haziondoi umuhimu wa juhudi; bali huipa juhudi kusudi na mwelekeo.',
        ],
      },
      {
        title: 'Kuepuka misimamo mikali katika masuala ya imani',
        paragraphs: [
          'Kujifunza Aqidah kunapaswa kufanywa kwa unyenyekevu na uangalifu. Mwanafunzi anapaswa kutofautisha kati ya yale ambayo Qur’an na Sunnah sahihi yanafundisha wazi na maelezo yaliyotolewa na wanazuoni wa baadaye.',
          'Waislamu wamekuwa na tofauti katika baadhi ya tafsiri za kiteolojia katika historia. Kozi hii inalenga misingi ya imani inayoungwa mkono na Qur’an na Sunnah sahihi na huepuka kuwasilisha mambo yenye khilafu kana kwamba yamekubaliwa na kila mtu.',
        ],
      },
      {
        title: 'Imani inapaswa kuzaa matendo yenye manufaa',
        paragraphs: [
          'Imani sahihi haikusudiwi kubaki katika fikra pekee. Inapaswa kuonekana katika ibada, tabia, mahusiano na maamuzi yenye uwajibikaji.',
          'Kwa hiyo, lengo la kujifunza Aqidah si kushinda mabishano tu. Ni kuelewa mafundisho ya Uislamu, kumuabudu Allah kwa ikhlasi, kufuata mwongozo wa kuaminika na kuboresha matendo.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Aqidah',
        meaning: 'Misingi ya imani ambayo Muislamu anaamini kuhusu Allah na mambo ya imani yaliyofundishwa kupitia wahyi.',
      },
      {
        term: 'Dalili',
        meaning: 'Ushahidi au hoja inayotumika kuunga mkono dai la kidini.',
      },
      {
        term: 'Sunnah',
        meaning: 'Mwongozo na mfano wa Mtume Muhammad ﷺ kama ulivyohifadhiwa kupitia riwaya na mafundisho sahihi.',
      },
      {
        term: 'Tendo jema',
        meaning: 'Tendo zuri linalofanywa kwa mujibu wa mwongozo wa Kiislamu na kwa ikhlasi kwa ajili ya Allah.',
      },
    ],
    reviewQuestions: [
      'Kwa nini imani imeunganishwa na ibada?',
      'Kwa nini imani ya Kiislamu inapaswa kujengwa juu ya Qur’an na Sunnah sahihi?',
      'Kuamini Siku ya Mwisho kunaweza kuathirije maamuzi ya mtu?',
      'Kwa nini mwanafunzi anatakiwa kutofautisha kati ya maandiko ya msingi na maelezo ya wanazuoni wa baadaye?',
      'Inamaanisha nini kusema kwamba imani inapaswa kuzaa matendo yenye manufaa?',
    ],
    sources: [
      { type: 'quran', reference: 'Qur’an 2:177' },
      { type: 'quran', reference: 'Qur’an 103:1–3' },
      { type: 'quran', reference: 'Qur’an 4:59' },
      { type: 'quran', reference: 'Qur’an 4:136' },
      { type: 'hadith', reference: 'Sahih Muslim 8e — Hadithi ya Jibril' },
    ],
  },
},
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
