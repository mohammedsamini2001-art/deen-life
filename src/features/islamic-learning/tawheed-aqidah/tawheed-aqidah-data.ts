export type TawheedLanguage = 'ar' | 'en' | 'sw' | 'fr'

export interface TawheedSourceSection {
  arabicTitle: string
  arabicText: string[]
  translations: Partial<Record<'en' | 'sw' | 'fr', string[]>>
}

export interface TawheedLessonSource {
  arabicTitle: string
  arabicIntroduction?: string[]
  sections: TawheedSourceSection[]
  keyTerms?: {
    arabicTerm: string
    arabicMeaning: string
    translations: Partial<Record<'en' | 'sw' | 'fr', string>>
  }[]
  reviewQuestions?: {
    arabic: string
    translations: Partial<Record<'en' | 'sw' | 'fr', string>>
  }[]
  sources: {
    type: 'quran' | 'hadith' | 'scholarly'
    reference: string
  }[]
}

export interface TawheedLesson {
  slug: string
  number: number
  title?: string
  source?: TawheedLessonSource
  translations?: Partial<Record<'en' | 'sw' | 'fr', {
    title: string
  }>>
  content?: Partial<Record<TawheedLanguage, {
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
  }>>
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
          number: 1,
          source: {
            arabicTitle: 'ما هي العقيدة؟',
            arabicIntroduction: [
              'العقيدة هي ما يعقد عليه القلب ويؤمن به إيمانًا جازمًا. وفي الإسلام تتعلق العقيدة بأصول الإيمان التي أخبر الله بها في كتابه، وبيّنها رسول الله ﷺ في سنته الصحيحة.',
              'والإيمان الصحيح يقوم على التصديق بما جاء عن الله ورسوله ﷺ، ومن ذلك الإيمان بالله وملائكته وكتبه ورسله واليوم الآخر والقدر.',
            ],
            sections: [
              {
                arabicTitle: 'معنى العقيدة',
                arabicText: [
                  'العقيدة مأخوذة من العقد، وهو الربط والإحكام. ويقصد بها ما يعقد الإنسان عليه قلبه ويستقر فيه من اعتقاد.',
                  'وعقيدة المسلم ليست مجرد أفكار أو معلومات، بل هي إيمان راسخ بما يجب اعتقاده في الله تعالى، وفي أصول الإيمان التي جاء بها الوحي.',
                ],
                translations: {
                  en: [
                    'Aqidah refers to what a person firmly holds and believes in their heart. In Islamic studies, it refers to the foundational beliefs established by revelation.',
                    'A Muslim’s Aqidah is not merely a collection of ideas or information. It is firm belief in what must be believed about Allah and the foundations of faith taught by revelation.',
                  ],
                  sw: [
                    'Aqidah inahusu mambo ambayo mtu anayashikilia na kuyaamini kwa yakini moyoni. Katika elimu ya Kiislamu, inahusu misingi ya imani iliyowekwa na wahyi.',
                    'Aqidah ya Muislamu si mkusanyiko wa mawazo au taarifa tu. Ni imani thabiti katika yale yanayopaswa kuaminiwa kuhusu Allah na misingi ya imani iliyofundishwa na wahyi.',
                  ],
                  fr: [
                    'La Aqida désigne ce que la personne tient fermement dans son cœur et croit avec certitude. Dans les études islamiques, elle désigne les fondements de la croyance établis par la révélation.',
                    'La Aqida du musulman n’est pas simplement un ensemble d’idées ou d’informations. Elle est une croyance ferme en ce qui doit être cru au sujet d’Allah et des fondements de la foi enseignés par la révélation.',
                  ],
                },
              },
              {
                arabicTitle: 'مصادر العقيدة الإسلامية',
                arabicText: [
                  'مصدر العقيدة الإسلامية هو الوحي الذي أنزله الله تعالى، وفي مقدمة ذلك القرآن الكريم، وما صح عن رسول الله ﷺ من السنة.',
                  'وقد بيّن النبي ﷺ أصول الإيمان في حديث جبريل، فذكر الإيمان بالله وملائكته وكتبه ورسله واليوم الآخر والقدر.',
                ],
                translations: {
                  en: [
                    'The foundation of Islamic belief is revelation from Allah, foremost the Qur’an and what has been authentically transmitted from the Sunnah of the Messenger of Allah ﷺ.',
                    'The Prophet ﷺ explained the foundations of Iman in the Hadith of Jibril, mentioning belief in Allah, His angels, His Books, His messengers, the Last Day, and divine decree.',
                  ],
                  sw: [
                    'Msingi wa itikadi ya Kiislamu ni wahyi kutoka kwa Allah, hasa Qur’ani na yale yaliyothibiti kwa usahihi kutoka katika Sunnah ya Mtume wa Allah ﷺ.',
                    'Mtume ﷺ alieleza misingi ya Imani katika Hadith ya Jibril, akataja kumuamini Allah, Malaika Wake, Vitabu Vyake, Mitume Wake, Siku ya Mwisho na Qadar.',
                  ],
                  fr: [
                    'Le fondement de la croyance islamique est la révélation d’Allah, en premier lieu le Coran et ce qui est authentiquement transmis de la Sunna du Messager d’Allah ﷺ.',
                    'Le Prophète ﷺ a expliqué les fondements de la foi dans le hadith de Jibril, en mentionnant la foi en Allah, Ses anges, Ses Livres, Ses messagers, le Jour dernier et le destin.',
                  ],
                },
              },
              {
                arabicTitle: 'أهمية العقيدة',
                arabicText: [
                  'العقيدة الصحيحة هي أساس عبادة المسلم وفهمه لدينه؛ فمن خلالها يعرف المسلم ربَّه، وما يجب له من التوحيد والعبادة، ويعرف أصول الإيمان التي يقوم عليها دينه.',
                  'ولهذا يبدأ تعلم العقيدة بمعرفة أصول الإيمان، ثم يتدرج في دراسة التوحيد وسائر مسائل الاعتقاد على ضوء القرآن والسنة الصحيحة.',
                ],
                translations: {
                  en: [
                    'Sound belief is a foundation for a Muslim’s worship and understanding of Islam. Through it, a Muslim learns about their Lord, what is due to Him in worship and Tawheed, and the foundations of faith upon which the religion is established.',
                    'For this reason, the study of Aqidah begins with the foundations of faith and then progresses to Tawheed and other matters of belief in light of the Qur’an and authentic Sunnah.',
                  ],
                  sw: [
                    'Itikadi sahihi ni msingi wa ibada ya Muislamu na uelewa wake wa Uislamu. Kupitia Aqidah, Muislamu humjua Mola wake, anayostahiki katika Tawheed na ibada, na misingi ya imani ambayo dini imejengwa juu yake.',
                    'Kwa sababu hiyo, kujifunza Aqidah huanza kwa misingi ya imani, kisha kuendelea katika Tawheed na masuala mengine ya itikadi kwa mwanga wa Qur’ani na Sunnah sahihi.',
                  ],
                  fr: [
                    'Une croyance saine constitue une base pour l’adoration du musulman et sa compréhension de l’Islam. Par elle, le musulman apprend à connaître son Seigneur, ce qui Lui revient en matière de tawhid et d’adoration, ainsi que les fondements de la foi sur lesquels repose la religion.',
                    'C’est pourquoi l’étude de la Aqida commence par les fondements de la foi, puis progresse vers le tawhid et les autres questions de croyance à la lumière du Coran et de la Sunna authentique.',
                  ],
                },
              },
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
          translations: {
            en: {
              title: 'What is Aqidah?',
            },
            sw: {
              title: 'Aqidah ni nini?',
            },
            fr: {
              title: 'Qu’est-ce que la Aqida ?',
            },
          },
        },
        {
          slug: 'sources-of-islamic-belief',
          number: 2,
          source: {
            arabicTitle: 'مصادر العقيدة الإسلامية',
            arabicIntroduction: [
              'العقيدة الإسلامية مبناها على الوحي الذي أنزله الله تعالى، فلا تُؤخذ أصول الإيمان من الآراء المجردة، وإنما تُعرف بما جاء في كتاب الله وما صح عن رسول الله ﷺ.',
              'والقرآن الكريم هو كلام الله تعالى، والسنة الصحيحة تبين ما جاء في القرآن وتفصل معانيه وأحكامه، ومن مجموعهما يعرف المسلم أصول عقيدته.',
            ],
            sections: [
              {
                arabicTitle: 'القرآن الكريم',
                arabicText: [
                  'القرآن الكريم هو المصدر الأول للعقيدة الإسلامية؛ ففيه يخبر الله تعالى عن نفسه، وعن أسمائه وصفاته، وعن ملائكته وكتبه ورسله واليوم الآخر والقدر، وغير ذلك من أصول الإيمان.',
                  'قال الله تعالى: «آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ».',
                ],
                translations: {
                  en: [
                    'The Qur’an is the primary source of Islamic belief. It teaches about Allah, His names and attributes, His angels, Books, messengers, the Last Day, divine decree, and other foundations of faith.',
                    'Allah says that the Messenger and the believers believe in Allah, His angels, His Books, and His messengers.',
                  ],
                  sw: [
                    'Qur’ani Tukufu ni chanzo cha kwanza cha itikadi ya Kiislamu. Inafundisha kuhusu Allah, majina na sifa Zake, Malaika Wake, Vitabu Vyake, Mitume Wake, Siku ya Mwisho, Qadar na misingi mingine ya imani.',
                    'Allah anaeleza kwamba Mtume na Waumini wanaamini Allah, Malaika Wake, Vitabu Vyake na Mitume Wake.',
                  ],
                  fr: [
                    'Le Coran est la première source de la croyance islamique. Il enseigne au sujet d’Allah, de Ses noms et attributs, de Ses anges, de Ses Livres, de Ses messagers, du Jour dernier, du destin et des autres fondements de la foi.',
                    'Allah dit que le Messager et les croyants croient en Allah, en Ses anges, en Ses Livres et en Ses messagers.',
                  ],
                },
              },
              {
                arabicTitle: 'السنة النبوية الصحيحة',
                arabicText: [
                  'السنة الصحيحة هي ما ثبت عن النبي ﷺ من قول أو فعل أو تقرير أو صفة. وهي تبين القرآن وتوضح كثيرًا من معانيه، ولذلك فهي من أصول معرفة الدين والعقيدة.',
                  'ومن أوضح الأمثلة حديث جبريل عليه السلام، الذي بيّن فيه النبي ﷺ مراتب الدين وذكر أصول الإيمان الستة.',
                ],
                translations: {
                  en: [
                    'The authentic Sunnah includes what is authentically established from the Prophet ﷺ of his sayings, actions, approvals, and descriptions. It explains the Qur’an and clarifies many of its meanings, making it an essential source for understanding Islam and its beliefs.',
                    'A clear example is the Hadith of Jibril, in which the Prophet ﷺ explained the levels of the religion and mentioned the six foundations of Iman.',
                  ],
                  sw: [
                    'Sunnah sahihi ni yale yaliyothibiti kutoka kwa Mtume ﷺ katika kauli, vitendo, maamuzi ya kukubali, au sifa zake. Inaeleza Qur’ani na kufafanua maana zake nyingi, hivyo ni chanzo muhimu cha kuifahamu dini na itikadi.',
                    'Mfano wazi ni Hadith ya Jibril, ambapo Mtume ﷺ alieleza daraja za dini na akataja misingi sita ya Imani.',
                  ],
                  fr: [
                    'La Sunna authentique comprend ce qui est authentiquement établi du Prophète ﷺ parmi ses paroles, ses actes, ses approbations et ses descriptions. Elle explique le Coran et en clarifie de nombreux sens ; elle constitue donc une source essentielle pour comprendre l’Islam et la croyance.',
                    'Un exemple clair est le hadith de Jibril, dans lequel le Prophète ﷺ a expliqué les degrés de la religion et mentionné les six fondements de la foi.',
                  ],
                },
              },
              {
                arabicTitle: 'فهم الوحي على الوجه الصحيح',
                arabicText: [
                  'لا يكفي أن ينسب الإنسان قولًا إلى القرآن أو السنة، بل لا بد من فهم النصوص فهمًا صحيحًا، والرجوع إلى ما صح من السنة وإلى فهم أهل العلم المعتبرين.',
                  'ولهذا تُبنى دراسة العقيدة في هذا المنهج على القرآن والسنة الصحيحة، مع التمييز بين نصوص الوحي وبين الشرح والتفسير والتعليم.',
                ],
                translations: {
                  en: [
                    'It is not enough to attribute a statement to the Qur’an or Sunnah; the texts must be understood correctly, authentic Sunnah must be distinguished from what is not established, and recognized scholarship should be consulted for sound understanding.',
                    'For this reason, this course bases its study of Aqidah on the Qur’an and authentic Sunnah while clearly distinguishing revealed texts from educational explanation and interpretation.',
                  ],
                  sw: [
                    'Haitoshi kumhusisha mtu kauli na Qur’ani au Sunnah; matini zinapaswa kueleweka kwa usahihi, Sunnah sahihi itofautishwe na yasiyothibiti, na kurejea kwa wanazuoni wanaotambulika kwa uelewa sahihi.',
                    'Kwa sababu hiyo, kozi hii inajenga masomo ya Aqidah juu ya Qur’ani na Sunnah sahihi, huku ikitofautisha wazi matini za wahyi na maelezo na ufafanuzi wa kielimu.',
                  ],
                  fr: [
                    'Il ne suffit pas d’attribuer une parole au Coran ou à la Sunna ; les textes doivent être compris correctement, la Sunna authentique doit être distinguée de ce qui n’est pas établi, et il convient de se référer aux savants reconnus pour une compréhension sûre.',
                    'C’est pourquoi ce cours fonde l’étude de la Aqida sur le Coran et la Sunna authentique, tout en distinguant clairement les textes révélés de l’explication et de l’interprétation pédagogiques.',
                  ],
                },
              },
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
          translations: {
            en: {
              title: 'Sources of Islamic Belief',
            },
            sw: {
              title: 'Misingi ya Itikadi ya Kiislamu',
            },
            fr: {
              title: 'Les sources de la croyance islamique',
            },
          },
        },
        {
          slug: 'islam-iman-ihsan',
          number: 3,
          source: {
            arabicTitle: 'الإسلام والإيمان والإحسان',
            arabicIntroduction: [
              'الإسلام والإيمان والإحسان مراتب عظيمة من الدين، وقد بينها النبي ﷺ في حديث جبريل عليه السلام، فذكر أصول الإسلام، ثم أصول الإيمان، ثم الإحسان.',
              'وتبين هذه المراتب علاقة العمل الظاهر بالإيمان الباطن وبحسن العبادة ومراقبة الله تعالى.',
            ],
            sections: [
              {
                arabicTitle: 'الإسلام',
                arabicText: [
                  'الإسلام هو الاستسلام لله تعالى بالتوحيد، والانقياد له بالطاعة، والبراءة من الشرك وأهله.',
                  'وقد بيّن النبي ﷺ الإسلام في حديث جبريل بخمس خصال: شهادة أن لا إله إلا الله وأن محمدًا رسول الله، وإقام الصلاة، وإيتاء الزكاة، وصوم رمضان، وحج البيت لمن استطاع إليه سبيلًا.',
                ],
                translations: {
                  en: [
                    'Islam means submitting to Allah through Tawhid, obeying Him, and rejecting shirk.',
                    'In the Hadith of Jibril, the Prophet ﷺ explained Islam through five major practices: bearing witness that there is no deity worthy of worship except Allah and that Muhammad is the Messenger of Allah, establishing prayer, giving Zakah, fasting Ramadan, and performing Hajj for whoever is able.',
                  ],
                  sw: [
                    'Uislamu ni kujisalimisha kwa Allah kwa Tawhid, kumtii Yeye, na kujiepusha na shirki.',
                    'Katika Hadith ya Jibril, Mtume ﷺ alieleza Uislamu kupitia mambo matano: kushuhudia kuwa hakuna anayestahiki kuabudiwa kwa haki isipokuwa Allah na kwamba Muhammad ni Mtume wa Allah, kusimamisha Swala, kutoa Zaka, kufunga Ramadhani, na kuhiji kwa mwenye uwezo.',
                  ],
                  fr: [
                    'L’Islam signifie se soumettre à Allah par le Tawhid, Lui obéir et se préserver du shirk.',
                    'Dans le hadith de Jibril, le Prophète ﷺ a expliqué l’Islam par cinq pratiques majeures : attester qu’il n’y a aucune divinité digne d’adoration en dehors d’Allah et que Muhammad est le Messager d’Allah, accomplir la prière, donner la Zakat, jeûner Ramadan et accomplir le Hajj pour celui qui en a la capacité.',
                  ],
                },
              },
              {
                arabicTitle: 'الإيمان',
                arabicText: [
                  'الإيمان هو التصديق الجازم بما أخبر الله تعالى به ورسوله ﷺ، ويشمل أصول الإيمان التي بينها النبي ﷺ في حديث جبريل.',
                  'وهي الإيمان بالله، وملائكته، وكتبه، ورسله، واليوم الآخر، والقدر خيره وشره.',
                ],
                translations: {
                  en: [
                    'Iman is firm faith in what Allah and His Messenger ﷺ have informed us of, including the foundations of faith explained by the Prophet ﷺ in the Hadith of Jibril.',
                    'These foundations are belief in Allah, His angels, His Books, His messengers, the Last Day, and divine decree, both its good and its difficult aspects.',
                  ],
                  sw: [
                    'Imani ni kuamini kwa yakini yale ambayo Allah na Mtume Wake ﷺ wametufahamisha, ikiwemo misingi ya imani ambayo Mtume ﷺ aliieleza katika Hadith ya Jibril.',
                    'Misingi hiyo ni kumuamini Allah, Malaika Wake, Vitabu Vyake, Mitume Wake, Siku ya Mwisho, na Qadar pamoja na yale yanayoonekana kuwa mema au magumu kwake mwanadamu.',
                  ],
                  fr: [
                    'La foi (Iman) est la conviction ferme de ce qu’Allah et Son Messager ﷺ nous ont enseigné, notamment les fondements de la foi expliqués par le Prophète ﷺ dans le hadith de Jibril.',
                    'Ces fondements sont la foi en Allah, en Ses anges, en Ses Livres, en Ses messagers, au Jour dernier et au destin, dans ce qui nous paraît bon comme dans ce qui nous paraît difficile.',
                  ],
                },
              },
              {
                arabicTitle: 'الإحسان',
                arabicText: [
                  'الإحسان هو أن تعبد الله كأنك تراه، فإن لم تكن تراه فإنه يراك.',
                  'وهو مقام عظيم من العبادة، يقوم على استحضار مراقبة الله تعالى، وإخلاص العبادة له، وتحسين العمل وإتقانه.',
                ],
                translations: {
                  en: [
                    'Ihsan is to worship Allah as though you see Him, and if you do not see Him, then know that He sees you.',
                    'It is a high level of worship based on awareness that Allah is watching, sincerity to Him, and striving to perform deeds well and correctly.',
                  ],
                  sw: [
                    'Ihsani ni kumuabudu Allah kana kwamba unamuona; na ikiwa humuoni, basi ujue kwamba Yeye anakuona.',
                    'Ni daraja ya juu ya ibada inayojengwa juu ya kutambua kuwa Allah anatuangalia, kuwa na ikhlasi Kwake, na kujitahidi kufanya matendo kwa ubora na usahihi.',
                  ],
                  fr: [
                    'L’Ihsan consiste à adorer Allah comme si tu Le voyais ; et si tu ne Le vois pas, sache qu’Il te voit.',
                    'C’est un degré élevé de l’adoration fondé sur la conscience qu’Allah nous observe, la sincérité envers Lui et l’effort pour accomplir les œuvres avec excellence et justesse.',
                  ],
                },
              },
              {
                arabicTitle: 'العلاقة بين الإسلام والإيمان والإحسان',
                arabicText: [
                  'الإسلام والإيمان والإحسان ليست مفاهيم متعارضة، بل هي مراتب مترابطة من الدين.',
                  'فالعمل الظاهر من الإسلام، والإيمان بما في القلب من أصول الاعتقاد، والإحسان كمال في العبادة والمراقبة؛ ويجتمع ذلك كله في دين الله تعالى.',
                ],
                translations: {
                  en: [
                    'Islam, Iman, and Ihsan are not competing concepts; they are interconnected dimensions of the religion.',
                    'Islam includes outward practice, Iman concerns the foundations of belief in the heart, and Ihsan represents excellence in worship and awareness of Allah. Together they form a complete understanding of the religion.',
                  ],
                  sw: [
                    'Uislamu, Imani na Ihsani si dhana zinazopingana; ni vipengele vinavyohusiana vya dini.',
                    'Uislamu unahusisha matendo ya nje, Imani inahusu misingi ya itikadi moyoni, na Ihsani ni ubora katika ibada na kumtambua Allah kuwa anatuona. Vyote kwa pamoja vinaunda uelewa wa dini.',
                  ],
                  fr: [
                    'L’Islam, l’Iman et l’Ihsan ne sont pas des notions opposées ; ce sont des dimensions liées de la religion.',
                    'L’Islam comprend les pratiques extérieures, l’Iman concerne les fondements de la croyance dans le cœur, et l’Ihsan représente l’excellence dans l’adoration et la conscience d’Allah. Ensemble, ils donnent une compréhension complète de la religion.',
                  ],
                },
              },
            ],
            sources: [
              { type: 'quran', reference: 'Qur’an 49:14' },
              { type: 'quran', reference: 'Qur’an 2:285' },
              { type: 'hadith', reference: 'Sahih Muslim 8e — Hadith of Jibril' },
              { type: 'hadith', reference: 'Sahih al-Bukhari 50 — Hadith of Jibril' },
            ],
          },
          translations: {
            en: { title: 'Islam, Iman and Ihsan' },
            sw: { title: 'Uislamu, Imani na Ihsani' },
            fr: { title: 'Islam, Iman et Ihsan' },
          },
        },
        {
          slug: 'six-pillars-of-iman',
          number: 4,
          source: {
            arabicTitle: 'أركان الإيمان الستة',
            arabicIntroduction: [
              'الإيمان أصل عظيم من أصول الدين، وقد بيّن النبي ﷺ أركانه في حديث جبريل عليه السلام، وهي الإيمان بالله وملائكته وكتبه ورسله واليوم الآخر والقدر خيره وشره.',
              'وهذه الأركان مترابطة، وبها يعرف المسلم ما يجب عليه اعتقاده في الله تعالى، وفي عالم الغيب، والوحي والرسل، والمصير بعد الموت، وما يجري في هذا الكون.',
            ],
            sections: [
              {
                arabicTitle: 'الإيمان بالله',
                arabicText: [
                  'الإيمان بالله هو الإقرار بأنه سبحانه رب كل شيء ومليكه، وأنه وحده المستحق للعبادة، مع الإيمان بما أخبر به عن نفسه في كتابه وما صح عن رسوله ﷺ.',
                  'فالإيمان بالله هو أصل سائر أركان الإيمان؛ لأن المسلم يؤمن بالله خالقًا ومدبرًا، ويؤمن بوحيه وهدايته وحكمه.',
                ],
                translations: {
                  en: [
                    'Belief in Allah means affirming that He alone is the Lord and Owner of everything and that He alone deserves worship, while believing what He has revealed about Himself in the Qur’an and what is authentically reported from His Messenger ﷺ.',
                    'Belief in Allah is the foundation of the other pillars of faith because the Muslim believes in Allah as Creator, Sustainer, and Judge, and accepts His revelation and guidance.',
                  ],
                  sw: [
                    'Kumuamini Allah ni kukiri kwamba Yeye ndiye Mola na Mmiliki wa kila kitu na kwamba Yeye pekee ndiye anayestahiki kuabudiwa, pamoja na kuamini yale aliyojieleza katika Qur’an na yale yaliyothibiti kutoka kwa Mtume Wake ﷺ.',
                    'Kumuamini Allah ni msingi wa nguzo nyingine za imani kwa sababu Muislamu anamwamini Allah kuwa Muumba, Msimamizi na Mwenye kuhukumu, na anakubali wahyi na mwongozo Wake.',
                  ],
                  fr: [
                    'Croire en Allah signifie reconnaître qu’Il est le Seigneur et le Maître de toute chose et que Lui seul mérite l’adoration, tout en croyant ce qu’Il a révélé sur Lui-même dans le Coran et ce qui est authentiquement rapporté de Son Messager ﷺ.',
                    'La foi en Allah est le fondement des autres piliers de la foi, car le musulman croit en Allah comme Créateur, Maître et Juge, et accepte Sa révélation et Sa guidance.',
                  ],
                },
              },
              {
                arabicTitle: 'الإيمان بالملائكة',
                arabicText: [
                  'الملائكة خلق من خلق الله تعالى، خلقهم الله لعبادته وتنفيذ ما يأمرهم به. والإيمان بهم يكون بالتصديق بوجودهم وبما ثبت في الوحي من أخبارهم وصفاتهم وأعمالهم.',
                  'ولا يتجاوز المسلم في أمر الغيب ما جاء به الوحي، فلا يثبت للملائكة شيئًا إلا بدليل صحيح من القرآن أو السنة.',
                ],
                translations: {
                  en: [
                    'Angels are a creation of Allah whom He created to worship Him and carry out what He commands. Belief in them means affirming their existence and believing what revelation authentically tells us about them, their qualities, and their duties.',
                    'In matters of the unseen, a Muslim stays within what revelation establishes and does not attribute to the angels claims without sound evidence from the Qur’an or Sunnah.',
                  ],
                  sw: [
                    'Malaika ni miongoni mwa viumbe vya Allah, ambao amewaumba wamuabudu Yeye na kutekeleza yale anayowaamuru. Kuwaamini kunamaanisha kuthibitisha kuwepo kwao na kuamini yale yaliyothibiti katika wahyi kuhusu sifa na majukumu yao.',
                    'Katika mambo ya ghaibu, Muislamu hushikamana na yale yaliyothibitishwa na wahyi na hatowasifu Malaika kwa mambo yasiyokuwa na dalili sahihi kutoka Qur’an au Sunnah.',
                  ],
                  fr: [
                    'Les anges sont des créatures d’Allah qu’Il a créées pour L’adorer et exécuter Ses ordres. Croire en eux signifie affirmer leur existence et croire ce que la révélation authentique nous enseigne à leur sujet, leurs qualités et leurs fonctions.',
                    'Dans les questions relatives à l’invisible, le musulman s’en tient à ce que la révélation établit et n’attribue pas aux anges des faits sans preuve authentique du Coran ou de la Sunnah.',
                  ],
                },
              },
              {
                arabicTitle: 'الإيمان بالكتب',
                arabicText: [
                  'يؤمن المسلم بأن الله تعالى أنزل كتبًا على رسله هداية للناس، وأن ما أنزله الله من وحي حق من عنده.',
                  'والقرآن الكريم هو كتاب الله المنزل على محمد ﷺ، وهو آخر الكتب المنزلة، وقد حفظه الله، وهو الكتاب الذي يتبعه المسلمون في هدايتهم ودينهم.',
                ],
                translations: {
                  en: [
                    'A Muslim believes that Allah revealed scriptures to His messengers as guidance for people and that the revelation sent by Allah is true and from Him.',
                    'The Qur’an is the Book of Allah revealed to Muhammad ﷺ. It is the final revealed Book, preserved by Allah, and the Book Muslims follow for their guidance and religion.',
                  ],
                  sw: [
                    'Muislamu anaamini kwamba Allah aliwateremshia Mitume Wake Vitabu kuwa mwongozo kwa watu na kwamba wahyi ulioteremshwa na Allah ni wa kweli na unatoka Kwake.',
                    'Qur’an ni Kitabu cha Allah kilichoteremshwa kwa Muhammad ﷺ. Ni Kitabu cha mwisho kilichoteremshwa, ambacho Allah amekihifadhi, na ndicho wanachokifuata Waislamu katika mwongozo na dini yao.',
                  ],
                  fr: [
                    'Le musulman croit qu’Allah a révélé des Écritures à Ses messagers comme guidance pour les gens et que la révélation venant d’Allah est une vérité provenant de Lui.',
                    'Le Coran est le Livre d’Allah révélé à Muhammad ﷺ. C’est le dernier Livre révélé, préservé par Allah, et le Livre que les musulmans suivent pour leur guidance et leur religion.',
                  ],
                },
              },
              {
                arabicTitle: 'الإيمان بالرسل',
                arabicText: [
                  'أرسل الله تعالى رسله إلى الناس ليدعوهم إلى عبادته وحده واتباع هداه. والإيمان بالرسل هو تصديقهم فيما أخبروا به، والإيمان برسالتهم، واحترامهم من غير غلو ولا جفاء.',
                  'ويؤمن المسلم بجميع رسل الله، ولا يفرق بينهم في أصل التصديق برسالتهم، ويتبع خاتم الأنبياء والمرسلين محمدًا ﷺ.',
                ],
                translations: {
                  en: [
                    'Allah sent His messengers to people to call them to worship Him alone and follow His guidance. Belief in the messengers means accepting the truth of what they conveyed, believing in their missions, and respecting them without excess or disrespect.',
                    'A Muslim believes in all of Allah’s messengers and does not reject some while accepting others. Muslims follow Muhammad ﷺ as the final prophet and messenger.',
                  ],
                  sw: [
                    'Allah aliwatuma Mitume Wake kwa watu ili wawaite wamuabudu Yeye pekee na kufuata mwongozo Wake. Kuwaamini Mitume kunamaanisha kusadiki ukweli wa yale waliyofikisha, kuamini utume wao na kuwaheshimu bila kupindukia wala kupunguza heshima yao.',
                    'Muislamu huwaamini Mitume wote wa Allah na hawawakatai baadhi huku akiwaamini wengine. Waislamu humfuata Muhammad ﷺ kuwa Nabii na Mtume wa mwisho.',
                  ],
                  fr: [
                    'Allah a envoyé Ses messagers aux gens pour les appeler à L’adorer Lui seul et à suivre Sa guidance. Croire aux messagers signifie reconnaître la vérité de ce qu’ils ont transmis, croire en leur mission et les respecter sans excès ni négligence.',
                    'Le musulman croit en tous les messagers d’Allah et n’en rejette pas certains tout en en acceptant d’autres. Les musulmans suivent Muhammad ﷺ comme dernier prophète et messager.',
                  ],
                },
              },
              {
                arabicTitle: 'الإيمان باليوم الآخر',
                arabicText: [
                  'اليوم الآخر هو اليوم الذي يبعث الله فيه الخلق بعد الموت، ثم يحاسبهم على أعمالهم ويجازيهم عليها. والإيمان به يثبت في قلب المسلم أن الحياة الدنيا ليست نهاية الوجود.',
                  'ومن آثار الإيمان باليوم الآخر أن يستعد المسلم للقاء الله تعالى، فيحرص على الطاعة ويجتنب المعصية ويتذكر مسؤوليته عن أعماله.',
                ],
                translations: {
                  en: [
                    'The Last Day is the Day when Allah will resurrect creation after death, hold them accountable for their deeds, and recompense them. Belief in it teaches the Muslim that worldly life is not the end of existence.',
                    'One effect of believing in the Last Day is that a Muslim prepares to meet Allah by striving in obedience, avoiding sin, and remembering responsibility for their actions.',
                  ],
                  sw: [
                    'Siku ya Mwisho ni siku ambayo Allah atawafufua viumbe baada ya kifo, kisha atawahesabu kwa matendo yao na kuwalipa kwa hayo. Kuamini Siku hiyo humfundisha Muislamu kwamba maisha ya dunia si mwisho wa kuwepo.',
                    'Miongoni mwa athari za kuamini Siku ya Mwisho ni Muislamu kujiandaa kukutana na Allah kwa kujitahidi katika utiifu, kujiepusha na maasi na kukumbuka uwajibikaji wa matendo yake.',
                  ],
                  fr: [
                    'Le Jour dernier est le jour où Allah ressuscitera les créatures après la mort, les jugera selon leurs œuvres et les rétribuera. Croire en ce Jour enseigne au musulman que la vie terrestre n’est pas la fin de l’existence.',
                    'Parmi les effets de la foi au Jour dernier, le musulman se prépare à rencontrer Allah en s’efforçant d’obéir, en évitant le péché et en se rappelant sa responsabilité envers ses actes.',
                  ],
                },
              },
              {
                arabicTitle: 'الإيمان بالقدر',
                arabicText: [
                  'يؤمن المسلم بأن الله تعالى أحاط بكل شيء علمًا، وأن ما يكون في الكون لا يخرج عن علمه ومشيئته وقدرته، وأنه سبحانه قدّر الأشياء وخلقها.',
                  'ولا يعني الإيمان بالقدر ترك الأسباب أو إلغاء مسؤولية الإنسان؛ بل يعمل المسلم ويختار ويسعى في الخير، ثم يتوكل على الله فيما لا يملكه.',
                ],
                translations: {
                  en: [
                    'A Muslim believes that Allah has complete knowledge of everything and that nothing in creation occurs outside His knowledge, will, and power, and that He has decreed and created all things.',
                    'Belief in Qadar does not mean abandoning means or human responsibility. A Muslim acts, chooses, and strives for what is good, then relies upon Allah regarding what is beyond their control.',
                  ],
                  sw: [
                    'Muislamu anaamini kwamba Allah ana elimu kamili ya kila kitu na kwamba hakuna kinachotokea katika uumbaji nje ya elimu, matakwa na uwezo Wake, na kwamba Yeye amekadiria na kuumba vitu vyote.',
                    'Kuamini Qadar hakumaanishi kuacha kuchukua sababu au kuondoa uwajibikaji wa mwanadamu. Muislamu hutenda, huchagua na hujitahidi katika kheri, kisha humtegemea Allah katika yale yaliyo nje ya uwezo wake.',
                  ],
                  fr: [
                    'Le musulman croit qu’Allah possède une connaissance parfaite de toute chose et que rien dans la création ne se produit en dehors de Sa connaissance, de Sa volonté et de Sa puissance, et qu’Il a décrété et créé toute chose.',
                    'Croire au destin ne signifie pas abandonner les causes ni supprimer la responsabilité humaine. Le musulman agit, choisit et s’efforce dans le bien, puis s’en remet à Allah pour ce qui dépasse son contrôle.',
                  ],
                },
              },
              {
                arabicTitle: 'أثر أركان الإيمان في حياة المسلم',
                arabicText: [
                  'أركان الإيمان ليست معلومات تحفظ فقط، بل هي أصول تؤثر في عبادة المسلم وأخلاقه ونظرته إلى الحياة.',
                  'فالإيمان بالله يوجه العبادة، والإيمان بالوحي والرسل يثبت طريق الهداية، والإيمان باليوم الآخر يعظم المسؤولية، والإيمان بالقدر يعين على الصبر وبذل الأسباب والتوكل على الله.',
                ],
                translations: {
                  en: [
                    'The pillars of faith are not merely information to memorize; they are foundations that affect a Muslim’s worship, character, and understanding of life.',
                    'Belief in Allah directs worship, belief in revelation and messengers establishes the path of guidance, belief in the Last Day strengthens responsibility, and belief in Qadar helps a believer combine patience, effort, and reliance upon Allah.',
                  ],
                  sw: [
                    'Nguzo za Imani si taarifa za kukariri tu, bali ni misingi inayogusa ibada, tabia na namna Muislamu anavyoelewa maisha.',
                    'Kumuamini Allah huongoza ibada, kuamini wahyi na Mitume huimarisha njia ya mwongozo, kuamini Siku ya Mwisho huimarisha uwajibikaji, na kuamini Qadar humsaidia muumini kuchanganya subira, juhudi na kumtegemea Allah.',
                  ],
                  fr: [
                    'Les piliers de la foi ne sont pas seulement des informations à mémoriser ; ce sont des fondements qui influencent l’adoration, le caractère et la compréhension de la vie du musulman.',
                    'La foi en Allah oriente l’adoration, la foi en la révélation et aux messagers établit la voie de la guidance, la foi au Jour dernier renforce la responsabilité, et la foi au destin aide le croyant à réunir patience, effort et confiance en Allah.',
                  ],
                },
              },
            ],
            sources: [
              { type: 'quran', reference: 'Qur’an 2:285' },
              { type: 'quran', reference: 'Qur’an 4:136' },
              { type: 'quran', reference: 'Qur’an 54:49' },
              { type: 'quran', reference: 'Qur’an 76:29–30' },
              { type: 'hadith', reference: 'Sahih Muslim 8e — Hadith of Jibril' },
              { type: 'hadith', reference: 'Sahih al-Bukhari 50 — Hadith of Jibril' },
            ],
          },
          translations: {
            en: { title: 'The Six Pillars of Iman' },
            sw: { title: 'Nguzo Sita za Imani' },
            fr: { title: 'Les six piliers de la foi' },
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
      lessons: [
  {
    slug: 'allah-is-the-creator-and-lord',
    title: 'Allah Is the Creator and Lord',
    number: 1,
    content: {
      en: {
        objectives: [
          'Understand that Allah is the Creator, Lord, and Sustainer of all creation.',
          'Understand why recognizing Allah as Lord leads to worshipping Him alone.',
          'Learn to describe what is taught about Allah through revelation without relying on unsupported speculation.',
        ],
        sections: [
          {
            title: 'Allah is the Creator',
            paragraphs: [
              'Islam teaches that Allah created the heavens, the earth, and everything that exists. Creation is dependent on Him, while Allah is not dependent on His creation.',
              'Recognizing Allah as the Creator gives a Muslim a foundation for understanding who deserves ultimate gratitude, obedience, and worship.',
            ],
          },
          {
            title: 'Allah is the Lord',
            paragraphs: [
              'The Qur’an repeatedly describes Allah as the Lord of the worlds. The word Rabb carries meanings connected with lordship, ownership, authority, care, and sustaining creation.',
              'Allah’s lordship means that He alone has ultimate authority over creation. Muslims therefore turn to Him with trust, gratitude, and reliance while still taking responsible means in their lives.',
            ],
          },
          {
            title: 'The Creator alone deserves worship',
            paragraphs: [
              'Knowing that Allah is the Creator and Lord is closely connected to Tawheed in worship. The Qur’an calls people to worship their Lord who created them.',
              'A Muslim therefore directs acts of worship such as prayer, supplication, reliance, and sacrifice to Allah alone. Recognizing Allah as Lord is not merely a theoretical idea; it has consequences for worship.',
            ],
          },
          {
            title: 'Allah is unlike His creation',
            paragraphs: [
              'The Qur’an teaches that nothing is comparable to Allah. Muslims affirm what revelation teaches about Allah while avoiding descriptions that make Him like created things.',
              'This principle helps a learner approach knowledge of Allah with humility and care. What Allah has revealed about Himself is accepted without inventing details that revelation does not give.',
            ],
          },
          {
            title: 'Knowing Allah through revelation',
            paragraphs: [
              'Knowledge about Allah should be grounded in the Qur’an and the authentic Sunnah. Human reflection can recognize signs of creation and think about Allah’s greatness, but a Muslim does not invent beliefs about Allah without evidence from revelation.',
              'Learning about Allah is therefore a lifelong process of reading revelation, understanding its meanings, worshipping Allah sincerely, and allowing that knowledge to shape character and conduct.',
            ],
          },
        ],
        keyTerms: [
          {
            term: 'Rabb',
            meaning: 'A term describing Allah’s lordship, including His authority, ownership, care, and sustaining of creation.',
          },
          {
            term: 'Tawheed',
            meaning: 'Affirming Allah’s oneness in the ways taught by revelation, including directing worship to Allah alone.',
          },
          {
            term: 'Khalq',
            meaning: 'Creation; the act of bringing created things into existence.',
          },
          {
            term: 'Worship',
            meaning: 'Acts of devotion and obedience that are directed to Allah sincerely.',
          },
        ],
        reviewQuestions: [
          'Why is Allah described as the Creator and Lord of the worlds?',
          'What does the term Rabb communicate about Allah’s relationship to creation?',
          'Why does recognizing Allah as Lord lead to worshipping Him alone?',
          'What does the Qur’an teach about Allah being unlike His creation?',
          'Why should knowledge about Allah be grounded in revelation?',
        ],
        sources: [
          { type: 'quran', reference: 'Qur’an 1:2' },
          { type: 'quran', reference: 'Qur’an 6:102' },
          { type: 'quran', reference: 'Qur’an 20:50' },
          { type: 'quran', reference: 'Qur’an 42:11' },
          { type: 'quran', reference: 'Qur’an 112:1–4' },
        ],
      },
      sw: {
        objectives: [
          'Kuelewa kwamba Allah ndiye Muumba, Mola na Mlezi wa viumbe vyote.',
          'Kuelewa kwa nini kumtambua Allah kama Mola kunaelekeza katika kumuabudu Yeye pekee.',
          'Kujifunza kueleza yanayofundishwa kuhusu Allah kupitia wahyi bila kutegemea dhana zisizo na ushahidi.',
        ],
        sections: [
          {
            title: 'Allah ndiye Muumba',
            paragraphs: [
              'Uislamu unafundisha kwamba Allah aliumba mbingu, ardhi na kila kilichopo. Viumbe vinamtegemea Yeye, wakati Allah hahitaji viumbe vyake.',
              'Kumtambua Allah kama Muumba humpa Muislamu msingi wa kuelewa ni nani anayestahili shukrani, utiifu na ibada kwa kiwango cha juu kabisa.',
            ],
          },
          {
            title: 'Allah ndiye Mola',
            paragraphs: [
              'Qur’an mara nyingi inamtaja Allah kuwa Mola wa walimwengu. Neno Rabb lina maana zinazohusiana na ulezi, umiliki, mamlaka, uangalizi na kuendeleza uumbaji.',
              'Uola wa Allah unamaanisha kwamba Yeye ndiye mwenye mamlaka ya mwisho juu ya viumbe. Kwa hiyo Muislamu humtegemea Allah kwa matumaini na shukrani, huku pia akichukua sababu na hatua zenye kuwajibika katika maisha yake.',
            ],
          },
          {
            title: 'Muumba ndiye anayestahiki kuabudiwa',
            paragraphs: [
              'Kujua kwamba Allah ndiye Muumba na Mola kuna uhusiano wa karibu na Tawheed katika ibada. Qur’an inawaita watu wamuabudu Mola wao aliyewaumba.',
              'Kwa hiyo Muislamu humwelekea Allah pekee katika ibada kama Swala, dua, kumtegemea na kuchinja kwa ajili ya ibada. Kumtambua Allah kama Mola si wazo la kinadharia tu; kuna athari katika ibada.',
            ],
          },
          {
            title: 'Allah hafanani na viumbe Wake',
            paragraphs: [
              'Qur’an inafundisha kwamba hakuna chochote kinachofanana na Allah. Muislamu anakubali yale ambayo wahyi umefundisha kuhusu Allah bila kumfananisha na viumbe.',
              'Kanuni hii humsaidia mwanafunzi kujifunza kuhusu Allah kwa unyenyekevu na uangalifu. Yale ambayo Allah ameyafichua kuhusu Yeye yanakubaliwa bila kubuni maelezo ambayo wahyi haujayatoa.',
            ],
          },
          {
            title: 'Kumjua Allah kupitia wahyi',
            paragraphs: [
              'Maarifa kuhusu Allah yanapaswa kujengwa juu ya Qur’an na Sunnah sahihi. Tafakuri inaweza kumsaidia mtu kuona ishara za uumbaji na kutafakari ukuu wa Allah, lakini Muislamu habuni imani kuhusu Allah bila ushahidi kutoka katika wahyi.',
              'Kujifunza kuhusu Allah ni safari ya maisha yote ya kusoma wahyi, kuelewa maana zake, kumuabudu Allah kwa ikhlasi na kuruhusu elimu hiyo iathiri tabia na mwenendo.',
            ],
          },
        ],
        keyTerms: [
          {
            term: 'Rabb',
            meaning: 'Neno linaloeleza uola wa Allah, likihusisha mamlaka, umiliki, uangalizi na kulea uumbaji Wake.',
          },
          {
            term: 'Tawheed',
            meaning: 'Kuthibitisha upweke na upekee wa Allah kwa namna ilivyofundishwa na wahyi, ikiwemo kuelekeza ibada kwa Allah pekee.',
          },
          {
            term: 'Khalq',
            meaning: 'Uumbaji; kuleta viumbe katika uwepo.',
          },
          {
            term: 'Ibada',
            meaning: 'Matendo ya kujitolea kwa Allah na utiifu yanayofanywa kwa ikhlasi.',
          },
        ],
        reviewQuestions: [
          'Kwa nini Allah anatajwa kuwa Muumba na Mola wa walimwengu?',
          'Neno Rabb linaeleza nini kuhusu uhusiano wa Allah na viumbe?',
          'Kwa nini kumtambua Allah kama Mola kunaelekeza katika kumuabudu Yeye pekee?',
          'Qur’an inafundisha nini kuhusu Allah kutofanana na viumbe Wake?',
          'Kwa nini maarifa kuhusu Allah yanapaswa kujengwa juu ya wahyi?',
        ],
        sources: [
          { type: 'quran', reference: 'Qur’an 1:2' },
          { type: 'quran', reference: 'Qur’an 6:102' },
          { type: 'quran', reference: 'Qur’an 20:50' },
          { type: 'quran', reference: 'Qur’an 42:11' },
          { type: 'quran', reference: 'Qur’an 112:1–4' },
        ],
      },
    },
  },
],
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
