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
          number: 5,
          source: {
            arabicTitle: 'أهمية العقيدة الصحيحة',
            arabicIntroduction: [
              'العقيدة الصحيحة أساس عظيم في حياة المسلم؛ فهي تتعلق بما يؤمن به القلب عن الله تعالى والوحي وأصول الدين، وينبغي أن يظهر أثرها في العبادة والأخلاق والعمل.',
              'والعقيدة لا تُبنى على الظنون والمعلومات غير الموثوقة، بل تُعرف من القرآن الكريم والسنة الصحيحة، مع فهم النصوص فهمًا صحيحًا والرجوع إلى أهل العلم عند الحاجة.',
            ],
            sections: [
              {
                arabicTitle: 'العقيدة أساس العبادة',
                arabicText: [
                  'أعمال المسلم مرتبطة بما يؤمن به عن الله تعالى والوحي وغاية الحياة. فالإيمان بالله يجعل العبادة لله وحده، لأنه سبحانه الخالق المستحق للعبادة.',
                  'وقد قرن القرآن الكريم بين الإيمان والعمل الصالح في مواضع كثيرة، مما يبين أن العقيدة ليست معلومات تحفظ أو مسائل تناقش فقط، بل لها أثر في عبادة المسلم وحياته.',
                ],
                translations: {
                  en: [
                    'A Muslim’s actions are connected to what they believe about Allah, revelation, and the purpose of life. Belief in Allah directs worship to Him alone because He is the Creator and the One worthy of worship.',
                    'The Qur’an frequently connects faith with righteous action. This shows that Aqidah is not merely information to memorize or discuss; it should affect a Muslim’s worship and life.',
                  ],
                  sw: [
                    'Matendo ya Muislamu yana uhusiano na yale anayoamini kuhusu Allah, wahyi na kusudi la maisha. Kumuamini Allah huielekeza ibada Kwake Yeye pekee kwa kuwa Yeye ndiye Muumba na anayestahiki kuabudiwa.',
                    'Qur’an mara nyingi huunganisha imani na matendo mema. Hii inaonyesha kwamba Aqidah si taarifa za kukariri au kujadili tu; inapaswa kuathiri ibada na maisha ya Muislamu.',
                  ],
                  fr: [
                    'Les actes du musulman sont liés à ce qu’il croit au sujet d’Allah, de la révélation et du but de la vie. La foi en Allah oriente l’adoration vers Lui seul, puisqu’Il est le Créateur et Celui qui mérite l’adoration.',
                    'Le Coran associe fréquemment la foi aux bonnes œuvres. Cela montre que la Aqida n’est pas seulement un ensemble d’informations à mémoriser ou à discuter ; elle doit influencer l’adoration et la vie du musulman.',
                  ],
                },
              },
              {
                arabicTitle: 'العقيدة الصحيحة تحتاج إلى مصادر موثوقة',
                arabicText: [
                  'تُتعلم العقيدة الإسلامية من القرآن الكريم والسنة النبوية الصحيحة، ولا تُبنى أصول الاعتقاد على الشائعات أو الدعاوى التي لا دليل عليها أو الظنون المجردة.',
                  'وإذا عرضت للمسلم مسألة في الاعتقاد، فعليه أن يبحث عن الدليل الموثوق، وأن يرجع إلى أهل العلم المعتبرين عند الحاجة إلى البيان والتفصيل.',
                ],
                translations: {
                  en: [
                    'Islamic belief is learned from the Qur’an and authentic Sunnah. Foundational beliefs should not be built on rumours, unsupported claims, or mere speculation.',
                    'When a Muslim encounters a question of belief, they should seek reliable evidence and consult qualified scholars when clarification or further detail is needed.',
                  ],
                  sw: [
                    'Imani ya Kiislamu hujifunzwa kutoka Qur’an na Sunnah sahihi. Misingi ya itikadi haipaswi kujengwa juu ya uvumi, madai yasiyo na ushahidi au dhana tupu.',
                    'Muislamu anapokutana na suala la itikadi, anapaswa kutafuta ushahidi wa kuaminika na kuwauliza wanazuoni wenye sifa anapohitaji ufafanuzi au maelezo zaidi.',
                  ],
                  fr: [
                    'La croyance islamique s’apprend à partir du Coran et de la Sunnah authentique. Les fondements de la croyance ne doivent pas être construits sur des rumeurs, des affirmations sans preuve ou de simples spéculations.',
                    'Lorsqu’un musulman rencontre une question de croyance, il doit rechercher une preuve fiable et consulter des savants qualifiés lorsqu’il a besoin de clarification ou de détails supplémentaires.',
                  ],
                },
              },
              {
                arabicTitle: 'العقيدة تؤثر في الأخلاق والاختيارات',
                arabicText: [
                  'الإيمان بالله يذكر المسلم بأن الله يعلم أعمال العباد، والإيمان باليوم الآخر يقوي الشعور بالمسؤولية، والإيمان بالوحي يبين للإنسان طريق الهداية.',
                  'ومن آثار ذلك أن يسعى المسلم إلى الصدق والصبر والشكر والتوبة والرحمة وتحمل المسؤولية. فالعقيدة الصحيحة ينبغي أن يكون لها أثر ظاهر في سلوك الإنسان.',
                ],
                translations: {
                  en: [
                    'Belief in Allah reminds a Muslim that Allah knows the deeds of His servants. Belief in the Last Day strengthens awareness of accountability, while belief in revelation provides guidance.',
                    'These beliefs can encourage honesty, patience, gratitude, repentance, mercy, and responsibility. Sound belief should therefore have a visible effect on a person’s conduct.',
                  ],
                  sw: [
                    'Kumuamini Allah humkumbusha Muislamu kwamba Allah anayajua matendo ya waja. Kuamini Siku ya Mwisho huimarisha hisia ya uwajibikaji, huku kuamini wahyi kukitoa mwongozo.',
                    'Imani hizi zinaweza kuhimiza ukweli, subira, shukrani, toba, huruma na uwajibikaji. Kwa hiyo, itikadi sahihi inapaswa kuwa na athari inayoonekana katika mwenendo wa mtu.',
                  ],
                  fr: [
                    'La foi en Allah rappelle au musulman qu’Allah connaît les œuvres de Ses serviteurs. La foi au Jour dernier renforce le sens de la responsabilité, tandis que la foi en la révélation fournit la guidance.',
                    'Ces croyances peuvent encourager l’honnêteté, la patience, la gratitude, le repentir, la miséricorde et la responsabilité. Une croyance saine doit donc avoir un effet visible sur le comportement.',
                  ],
                },
              },
              {
                arabicTitle: 'التعلم في مسائل العقيدة يحتاج إلى علم وتواضع',
                arabicText: [
                  'ينبغي لطالب العقيدة أن يتعلم بتواضع وعناية، وأن يميز بين نصوص القرآن والسنة الصحيحة وبين الشروح والتفسيرات التي يذكرها أهل العلم.',
                  'وقد وقع اختلاف بين المسلمين في بعض المسائل الكلامية والتفصيلات العقدية عبر التاريخ، ولذلك ينبغي التفريق بين أصول الإيمان الثابتة وبين المسائل التي وقع فيها خلاف.',
                ],
                translations: {
                  en: [
                    'A student of Aqidah should learn with humility and care, distinguishing between the texts of the Qur’an and authentic Sunnah and the explanations and interpretations offered by scholars.',
                    'Muslims have differed historically on some theological questions and details of belief. It is therefore important to distinguish established foundations of faith from matters in which scholars have differed.',
                  ],
                  sw: [
                    'Mwanafunzi wa Aqidah anapaswa kujifunza kwa unyenyekevu na uangalifu, akitofautisha kati ya matini za Qur’an na Sunnah sahihi na maelezo na tafsiri zinazotolewa na wanazuoni.',
                    'Waislamu wamekuwa na tofauti katika baadhi ya masuala ya kiteolojia na maelezo ya itikadi katika historia. Kwa hiyo ni muhimu kutofautisha misingi ya imani iliyothibiti na masuala ambayo wanazuoni wametofautiana.',
                  ],
                  fr: [
                    'L’étudiant en Aqida doit apprendre avec humilité et attention, en distinguant les textes du Coran et de la Sunnah authentique des explications et interprétations données par les savants.',
                    'Les musulmans ont connu historiquement des divergences sur certaines questions théologiques et certains détails de croyance. Il est donc important de distinguer les fondements établis de la foi des questions faisant l’objet de divergences.',
                  ],
                },
              },
              {
                arabicTitle: 'العقيدة ينبغي أن تقود إلى العمل النافع',
                arabicText: [
                  'العقيدة الصحيحة ليست أمرًا يبقى في الذهن فقط، بل ينبغي أن يظهر أثرها في العبادة والأخلاق والعلاقات والاختيارات المسؤولة.',
                  'ولهذا فإن المقصود من تعلم العقيدة هو معرفة ما جاء به الإسلام، وعبادة الله بإخلاص، واتباع الهداية الموثوقة، والسعي إلى إصلاح العمل والسلوك.',
                ],
                translations: {
                  en: [
                    'Sound belief is not meant to remain only in the mind. Its effects should appear in worship, character, relationships, and responsible choices.',
                    'The purpose of learning Aqidah is to understand what Islam teaches, worship Allah sincerely, follow reliable guidance, and strive to improve one’s actions and conduct.',
                  ],
                  sw: [
                    'Itikadi sahihi haikusudiwi kubaki katika fikra pekee. Athari zake zinapaswa kuonekana katika ibada, tabia, mahusiano na maamuzi yenye uwajibikaji.',
                    'Lengo la kujifunza Aqidah ni kuelewa mafundisho ya Uislamu, kumuabudu Allah kwa ikhlasi, kufuata mwongozo wa kuaminika na kujitahidi kuboresha matendo na mwenendo.',
                  ],
                  fr: [
                    'La croyance saine n’est pas destinée à rester uniquement dans l’esprit. Ses effets doivent apparaître dans l’adoration, le caractère, les relations et les choix responsables.',
                    'Le but de l’apprentissage de la Aqida est de comprendre ce que l’Islam enseigne, d’adorer Allah avec sincérité, de suivre une guidance fiable et de s’efforcer d’améliorer ses actes et son comportement.',
                  ],
                },
              },
            ],
            sources: [
              { type: 'quran', reference: 'Qur’an 2:177' },
              { type: 'quran', reference: 'Qur’an 103:1–3' },
              { type: 'quran', reference: 'Qur’an 4:59' },
              { type: 'quran', reference: 'Qur’an 4:136' },
              { type: 'hadith', reference: 'Sahih Muslim 8e — Hadith of Jibril' },
            ],
          },
          translations: {
            en: { title: 'Why Correct Belief Matters' },
            sw: { title: 'Kwa Nini Itikadi Sahihi Ni Muhimu' },
            fr: { title: 'Pourquoi la croyance correcte est importante' },
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
    number: 1,
    source: {
      arabicTitle: 'الله هو الخالق والرب',
      arabicIntroduction: [
        'الله تعالى هو الخالق لكل شيء، وهو رب العالمين ومدبر أمرهم، وكل ما سواه من المخلوقات محتاج إليه سبحانه.',
        'ومعرفة الله تعالى بما أخبر به عن نفسه في القرآن، وما صح عن رسوله ﷺ، تقود المسلم إلى توحيده وإخلاص العبادة له.',
      ],
      sections: [
        {
          arabicTitle: 'الله هو الخالق',
          arabicText: [
            'الله تعالى خالق السماوات والأرض وما فيهما، وخالق كل شيء. والمخلوقات كلها محتاجة إليه، أما هو سبحانه فغني عن خلقه.',
            'ومعرفة الله بأنه الخالق تذكّر المسلم بأن النعم كلها من الله، وأنه سبحانه المستحق للحمد والشكر والطاعة.',
          ],
          translations: {
            en: [
              'Allah is the Creator of the heavens, the earth, and everything within them. All created things depend upon Him, while He is independent of His creation.',
              'Knowing Allah as the Creator reminds a Muslim that blessings come from Allah and that He deserves ultimate gratitude, obedience, and worship.',
            ],
            sw: [
              'Allah ndiye Muumba wa mbingu, ardhi na kila kilichomo ndani yake. Viumbe vyote vinamhitaji Yeye, wakati Yeye hahitaji viumbe vyake.',
              'Kumtambua Allah kuwa Muumba humkumbusha Muislamu kwamba neema zote zinatoka kwa Allah na kwamba Yeye ndiye anayestahiki shukrani, utiifu na ibada.',
            ],
            fr: [
              'Allah est le Créateur des cieux, de la terre et de tout ce qui s’y trouve. Toutes les créatures dépendent de Lui, tandis qu’Il Se suffit à Lui-même.',
              'Reconnaître Allah comme le Créateur rappelle au musulman que les bienfaits viennent d’Allah et qu’Il mérite la gratitude, l’obéissance et l’adoration.',
            ],
          },
        },
        {
          arabicTitle: 'الله هو الرب',
          arabicText: [
            'الله تعالى رب العالمين، والرب هو المالك والسيد والمدبر والمربي لخلقه بنعمه ورحمته.',
            'فربوبية الله تعالى تعني أنه وحده المتصرف في ملكه، وأن الخلق جميعًا تحت ملكه وتدبيره وحاجتهم إليه.',
          ],
          translations: {
            en: [
              'Allah is the Lord of the worlds. Rabb includes meanings of ownership, authority, care, and sustaining His creation.',
              'Allah’s lordship means that He alone has ultimate authority over His creation, and all created beings remain under His ownership and care.',
            ],
            sw: [
              'Allah ndiye Mola wa walimwengu. Neno Rabb linahusisha maana ya umiliki, mamlaka, uangalizi na kulea viumbe Vyake.',
              'Uola wa Allah unamaanisha kwamba Yeye ndiye mwenye mamlaka juu ya viumbe Vyake, na viumbe vyote viko chini ya umiliki na uangalizi Wake.',
            ],
            fr: [
              'Allah est le Seigneur des mondes. Le terme Rabb comprend les sens de possession, d’autorité, de soin et de préservation de Sa création.',
              'La seigneurie d’Allah signifie qu’Il détient l’autorité ultime sur Sa création et que toutes les créatures sont sous Sa possession et Sa protection.',
            ],
          },
        },
        {
          arabicTitle: 'الذي خلق هو المستحق للعبادة',
          arabicText: [
            'معرفة الله بأنه الخالق والرب تتعلق بتوحيد العبادة؛ فالذي خلق الخلق ويرزقهم ويدبر أمرهم هو المستحق لأن يُعبد وحده.',
            'ولهذا يخلص المسلم لله تعالى الصلاة والدعاء والاستعانة وسائر العبادات التي شرعها الله، ولا يجعل شيئًا منها لغيره.',
          ],
          translations: {
            en: [
              'Knowing Allah as the Creator and Lord is connected to Tawheed in worship. The One who created, provides for, and sustains creation is the One who deserves to be worshipped alone.',
              'A Muslim therefore directs prayer, supplication, seeking help, and all acts of worship legislated by Allah sincerely to Him, without directing worship to anyone else.',
            ],
            sw: [
              'Kumtambua Allah kuwa Muumba na Mola kunahusiana na Tawheed ya ibada. Yeye aliyeumba, anayetoa riziki na anayesimamia viumbe ndiye anayestahiki kuabudiwa peke Yake.',
              'Kwa hiyo Muislamu humwelekea Allah kwa Swala, dua, kuomba msaada na ibada zote alizoamrisha kwa ikhlasi, bila kuelekeza ibada kwa mwingine.',
            ],
            fr: [
              'Reconnaître Allah comme le Créateur et le Seigneur est lié au Tawhid dans l’adoration. Celui qui a créé, pourvoit et administre la création est Celui qui mérite d’être adoré seul.',
              'Le musulman adresse donc sincèrement à Allah la prière, l’invocation, la demande d’aide et les actes d’adoration qu’Allah a prescrits, sans les diriger vers un autre.',
            ],
          },
        },
        {
          arabicTitle: 'الله لا يشبه خلقه',
          arabicText: [
            'الله تعالى ليس كمثله شيء، ولا يجوز للمسلم أن يجعل صفات الخالق مثل صفات المخلوقين أو أن يتخيل كيفية ما أخبر الله به عن نفسه بلا دليل.',
            'ولهذا يتعلم المسلم ما أخبر الله به عن نفسه وما صح عن رسوله ﷺ، ويثبت ذلك على الوجه اللائق بالله، مع تنزيهه عن مشابهة خلقه.',
          ],
          translations: {
            en: [
              'Allah is not like His creation. A Muslim should not make the attributes of the Creator like the attributes of created beings or speculate about matters for which revelation gives no details.',
              'A Muslim therefore learns what Allah has revealed about Himself and what is authentically reported from the Prophet ﷺ, affirming it in a manner befitting Allah while declaring Him unlike His creation.',
            ],
            sw: [
              'Allah hafanani na viumbe Vyake. Muislamu hapaswi kuyafanya sifa za Muumba kuwa kama sifa za viumbe au kubuni namna ya mambo ambayo wahyi haujaeleza.',
              'Kwa hiyo Muislamu hujifunza yale ambayo Allah ameyafichua kuhusu Yeye na yale yaliyothibiti kutoka kwa Mtume ﷺ, akiyakubali kwa namna inayomstahili Allah na kumtakasa kutokana na kufanana na viumbe.',
            ],
            fr: [
              'Allah ne ressemble pas à Sa création. Le musulman ne doit pas assimiler les attributs du Créateur à ceux des créatures ni spéculer sur ce que la révélation n’a pas détaillé.',
              'Le musulman apprend donc ce qu’Allah a révélé sur Lui-même et ce qui est authentiquement rapporté du Prophète ﷺ, en l’affirmant d’une manière qui convient à Allah et en affirmant qu’Il ne ressemble pas à Ses créatures.',
            ],
          },
        },
        {
          arabicTitle: 'معرفة الله تكون من الوحي',
          arabicText: [
            'المعرفة الصحيحة بالله تعالى تُبنى على ما جاء في القرآن الكريم وما صح عن رسول الله ﷺ، لأن الوحي هو الطريق الموثوق لمعرفة ما يجب اعتقاده في الله.',
            'ويتفكر المسلم في خلق الله وآياته، لكن لا ينسب إلى الله اعتقادًا أو وصفًا بلا دليل من الوحي.',
          ],
          translations: {
            en: [
              'Sound knowledge of Allah is grounded in the Qur’an and what is authentically reported from the Messenger of Allah ﷺ, because revelation is the reliable source for what must be believed about Allah.',
              'A Muslim may reflect upon Allah’s creation and signs, but should not attribute beliefs or descriptions to Allah without evidence from revelation.',
            ],
            sw: [
              'Maarifa sahihi kuhusu Allah hujengwa juu ya Qur’an na yale yaliyothibiti kutoka kwa Mtume wa Allah ﷺ, kwa sababu wahyi ndio chanzo cha kuaminika cha yale yanayopaswa kuaminiwa kuhusu Allah.',
              'Muislamu anaweza kutafakari uumbaji na ishara za Allah, lakini hapaswi kumnasibishia Allah itikadi au sifa bila ushahidi kutoka katika wahyi.',
            ],
            fr: [
              'La connaissance correcte d’Allah repose sur le Coran et ce qui est authentiquement rapporté du Messager d’Allah ﷺ, car la révélation est la source fiable de ce qui doit être cru au sujet d’Allah.',
              'Le musulman peut réfléchir à la création et aux signes d’Allah, mais ne doit pas Lui attribuer une croyance ou une description sans preuve provenant de la révélation.',
            ],
          },
        },
      ],
      sources: [
        { type: 'quran', reference: 'Qur’an 1:2' },
        { type: 'quran', reference: 'Qur’an 6:102' },
        { type: 'quran', reference: 'Qur’an 20:50' },
        { type: 'quran', reference: 'Qur’an 42:11' },
        { type: 'quran', reference: 'Qur’an 112:1–4' },
      ],
    },
    translations: {
      en: { title: 'Allah Is the Creator and Lord' },
      sw: { title: 'Allah Ndiye Muumba na Mola' },
      fr: { title: 'Allah est le Créateur et le Seigneur' },
    },
  },
  {
    slug: 'names-and-attributes-of-allah',
    number: 2,
    source: {
      arabicTitle: 'أسماء الله وصفاته',
      arabicIntroduction: [
        'لله تعالى الأسماء الحسنى والصفات العلى، وقد أخبر عن نفسه بها في كتابه، وثبت عن رسوله ﷺ من ذلك ما يجب الإيمان به.',
        'ويتعلم المسلم أسماء الله وصفاته من القرآن والسنة الصحيحة، فيثبت ما أثبته الله لنفسه وما أثبته له رسوله ﷺ، وينزهه عن مشابهة خلقه.',
      ],
      sections: [
        {
          arabicTitle: 'لله الأسماء الحسنى',
          arabicText: [
            'قال الله تعالى: وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَى فَادْعُوهُ بِهَا. فله سبحانه الأسماء الحسنى الدالة على كماله وجلاله.',
            'ومعرفة أسماء الله ليست مجرد حفظ للألفاظ، بل يتعلم المسلم معانيها وما تدل عليه من كمال الله، ويظهر أثر ذلك في عبادته ودعائه وسلوكه.',
          ],
          translations: {
            en: [
              'Allah has the Most Beautiful Names. The Qur’an teaches that these names belong to Him and that believers should call upon Him through them. They point to His perfection and majesty.',
              'Learning Allah’s Names is not only about memorizing words. A Muslim learns their meanings and what they indicate about Allah’s perfection, allowing that knowledge to shape worship, supplication, and conduct.',
            ],
            sw: [
              'Allah ana Majina Mazuri Zaidi. Qur’an inafundisha kwamba Majina haya ni Yake na kwamba Waumini wamwite kwa Majina hayo. Majina hayo yanaonyesha ukamilifu na utukufu Wake.',
              'Kujifunza Majina ya Allah si kuhifadhi maneno tu. Muislamu hujifunza maana zake na yale yanayoonyesha kuhusu ukamilifu wa Allah, na maarifa hayo huathiri ibada, dua na mwenendo.',
            ],
            fr: [
              'Allah possède les Plus Beaux Noms. Le Coran enseigne que ces noms Lui appartiennent et que les croyants doivent L’invoquer par eux. Ils indiquent Sa perfection et Sa majesté.',
              'Apprendre les Noms d’Allah ne consiste pas seulement à mémoriser des mots. Le musulman apprend leurs significations et ce qu’ils indiquent de la perfection d’Allah, afin que cette connaissance influence l’adoration, l’invocation et le comportement.',
            ],
          },
        },
        {
          arabicTitle: 'نثبت ما أثبته الله لنفسه',
          arabicText: [
            'يؤمن المسلم بما وصف الله به نفسه في القرآن، وبما صح عن رسول الله ﷺ، من غير تحريف ولا إنكار، ومن غير تشبيه للخالق بالمخلوق.',
            'قال الله تعالى: لَيْسَ كَمِثْلِهِ شَيْءٌ وَهُوَ السَّمِيعُ الْبَصِيرُ. ففي الآية إثبات لما وصف الله به نفسه مع نفي مماثلته لخلقه.',
          ],
          translations: {
            en: [
              'A Muslim believes in what Allah has described Himself with in the Qur’an and what is authentically reported from the Messenger of Allah ﷺ, without distorting or rejecting it and without comparing the Creator to creation.',
              'Allah says that there is nothing like Him, while He is the All-Hearing, the All-Seeing. The verse combines affirmation of what Allah has stated about Himself with the declaration that He is unlike His creation.',
            ],
            sw: [
              'Muislamu huamini yale ambayo Allah amejieleza nayo katika Qur’an na yale yaliyothibiti kutoka kwa Mtume wa Allah ﷺ, bila kuyapotosha au kuyakataa, na bila kumfananisha Muumba na kiumbe.',
              'Allah anasema kwamba hakuna chochote kinachofanana na Yeye, na Yeye ni Mwenye Kusikia, Mwenye Kuona. Aya hii inaunganisha kuthibitisha yale ambayo Allah amejithibitishia pamoja na kutangaza kwamba Yeye hafanani na viumbe Vyake.',
            ],
            fr: [
              'Le musulman croit à ce par quoi Allah S’est décrit dans le Coran et à ce qui est authentiquement rapporté du Messager d’Allah ﷺ, sans le déformer ni le rejeter, et sans comparer le Créateur à la création.',
              'Allah dit que rien ne Lui ressemble, tout en étant l’Audient et le Clairvoyant. Le verset réunit l’affirmation de ce qu’Allah a affirmé de Lui-même et la négation de toute ressemblance avec Sa création.',
            ],
          },
        },
        {
          arabicTitle: 'أسماء الله وصفاته لا تشبه صفات المخلوقين',
          arabicText: [
            'اشتراك الاسم بين الخالق والمخلوق لا يعني التماثل في الحقيقة والكيفية. فالله تعالى له الكمال المطلق، ولا يشبهه شيء من خلقه.',
            'ولهذا لا يتكلف المسلم معرفة كيفية صفات الله بعقله، بل يؤمن بما جاء به الوحي ويكل علم الكيفية إلى الله تعالى.',
          ],
          translations: {
            en: [
              'A shared name or description between the Creator and created beings does not mean that their reality or manner is the same. Allah has absolute perfection, and nothing in creation resembles Him.',
              'A Muslim therefore does not try to determine the manner of Allah’s attributes through speculation. Rather, the believer accepts what revelation teaches and leaves knowledge of the manner to Allah.',
            ],
            sw: [
              'Kufanana kwa jina au sifa kati ya Muumba na kiumbe hakumaanishi kwamba uhalisia au namna yake ni sawa. Allah ana ukamilifu usio na mwisho, na hakuna katika viumbe Vyake anayefanana Naye.',
              'Kwa hiyo Muislamu hajaribu kubuni namna ya sifa za Allah kwa fikra zake. Bali huamini yale yaliyofundishwa na wahyi na huacha kujua namna yake kwa Allah.',
            ],
            fr: [
              'Le fait qu’un nom ou une description soit employé pour le Créateur et pour une créature ne signifie pas que leur réalité ou leur manière soit identique. Allah possède la perfection absolue et rien de Sa création ne Lui ressemble.',
              'Le musulman ne cherche donc pas à déterminer par la spéculation la manière dont sont les attributs d’Allah. Il accepte plutôt ce que révèle la révélation et laisse à Allah la connaissance de la manière.',
            ],
          },
        },
        {
          arabicTitle: 'معرفة أسماء الله تزيد الإيمان',
          arabicText: [
            'كلما ازداد المسلم معرفة بأسماء الله وصفاته ازداد تعظيمًا له ومحبةً وخوفًا ورجاءً، لأن معرفة الرب سبحانه تؤثر في القلب والعمل.',
            'فإذا علم المسلم أن الله سميع بصير راقب كلامه وأعماله، وإذا علم أنه غفور رحيم تاب إليه ورجا رحمته، وإذا علم أنه شديد العقاب حذر من معصيته.',
          ],
          translations: {
            en: [
              'As a Muslim learns more about Allah’s Names and Attributes, this can increase reverence, love, fear, and hope, because knowledge of the Lord affects both the heart and actions.',
              'Knowing that Allah is All-Hearing and All-Seeing can encourage a Muslim to be mindful of speech and actions. Knowing that He is Forgiving and Merciful encourages repentance and hope in His mercy, while knowing that He is severe in punishment encourages avoidance of disobedience.',
            ],
            sw: [
              'Kadiri Muislamu anavyozidi kujua Majina na Sifa za Allah, maarifa hayo yanaweza kuongeza kumtukuza, kumpenda, kumwogopa na kumtumainia, kwa sababu kumjua Mola kunaathiri moyo na matendo.',
              'Kujua kwamba Allah ni Mwenye Kusikia na Mwenye Kuona humhimiza Muislamu kuwa mwangalifu katika maneno na matendo. Kujua kwamba Yeye ni Mwingi wa Kusamehe na Mwenye Rehema humhimiza kutubu na kutumaini rehema Yake, na kujua adhabu Yake humhimiza kujiepusha na maasi.',
            ],
            fr: [
              'Plus le musulman connaît les Noms et les Attributs d’Allah, plus cette connaissance peut accroître la révérence, l’amour, la crainte et l’espérance, car connaître le Seigneur influence le cœur et les actes.',
              'Savoir qu’Allah est l’Audient et le Clairvoyant peut encourager le musulman à surveiller ses paroles et ses actes. Savoir qu’Il est Pardonneur et Miséricordieux encourage le repentir et l’espoir en Sa miséricorde, tandis que connaître Son châtiment encourage à éviter la désobéissance.',
            ],
          },
        },
      ],
      sources: [
        { type: 'quran', reference: 'Qur’an 7:180' },
        { type: 'quran', reference: 'Qur’an 42:11' },
        { type: 'quran', reference: 'Qur’an 59:22–24' },
        { type: 'quran', reference: 'Qur’an 20:8' },
        { type: 'hadith', reference: 'Sahih al-Bukhari 7392' },
      ],
    },
    translations: {
      en: { title: 'Allah’s Names and Attributes' },
      sw: { title: 'Majina na Sifa za Allah' },
      fr: { title: 'Les Noms et Attributs d’Allah' },
    },
  },
  {
    slug: 'tawheed-and-worship',
    number: 3,
    source: {
      arabicTitle: 'التوحيد وأثره في العبادة',
      arabicIntroduction: [
        'التوحيد هو إفراد الله تعالى بما يختص به من الربوبية والألوهية والأسماء والصفات، وهو أصل الدين وأعظم ما دعا إليه الرسل.',
        'وتوحيد العبادة يعني إفراد الله تعالى بجميع أنواع العبادة التي شرعها، فلا يُصرف شيء منها لغيره.',
      ],
      sections: [
        {
          arabicTitle: 'التوحيد هو أصل دعوة الرسل',
          arabicText: [
            'بعث الله الرسل عليهم السلام لدعوة أقوامهم إلى عبادة الله وحده واجتناب عبادة ما سواه. قال الله تعالى: وَلَقَدْ بَعَثْنَا فِي كُلِّ أُمَّةٍ رَسُولًا أَنِ اعْبُدُوا اللَّهَ وَاجْتَنِبُوا الطَّاغُوتَ.',
            'فأصل دعوتهم واحد، وهو توحيد الله وإخلاص العبادة له، وإن اختلفت بعض الشرائع والتفاصيل بين الأمم.',
          ],
          translations: {
            en: [
              'Allah sent the messengers to call their peoples to worship Allah alone and avoid worshipping anything besides Him. The Qur’an states that a messenger was sent to every nation with the call to worship Allah and avoid false objects of worship.',
              'The foundation of their call was therefore one: affirming Allah’s oneness and directing worship sincerely to Him, even though some laws and details differed between communities.',
            ],
            sw: [
              'Allah aliwatuma Mitume kwa watu wao ili wawalinganie wamuabudu Allah peke Yake na waepuke kuabudu chochote kisichokuwa Yeye. Qur’an inaeleza kwamba kwa kila umma alitumwa Mtume akiwa na mwito wa kumuabudu Allah na kujiepusha na waabudiwa wa batili.',
              'Kwa hiyo msingi wa mwito wao ulikuwa mmoja: kumpwekesha Allah na kuelekeza ibada Kwake kwa ikhlasi, ingawa baadhi ya sheria na maelezo yalitofautiana kati ya umma na umma.',
            ],
            fr: [
              'Allah a envoyé les messagers appeler leurs peuples à adorer Allah seul et à éviter l’adoration de toute chose en dehors de Lui. Le Coran indique qu’un messager fut envoyé à chaque communauté avec cet appel.',
              'Le fondement de leur message était donc le même : affirmer l’unicité d’Allah et Lui consacrer l’adoration avec sincérité, même si certaines lois et certains détails différaient entre les communautés.',
            ],
          },
        },
        {
          arabicTitle: 'العبادة حق لله وحده',
          arabicText: [
            'الصلاة والدعاء والخوف والرجاء والتوكل وسائر العبادات التي شرعها الله يجب أن تكون لله وحده. قال الله تعالى: وَمَا خَلَقْتُ الْجِنَّ وَالْإِنْسَ إِلَّا لِيَعْبُدُونِ.',
            'فإذا عرف المسلم أن الله هو خالقه وربه، علم أن العبادة حق له سبحانه، وأن صرف العبادة لغير الله يناقض التوحيد.',
          ],
          translations: {
            en: [
              'Prayer, supplication, fear, hope, reliance, and all other acts of worship legislated by Allah are to be directed to Him alone. The Qur’an states that Allah created jinn and humankind to worship Him.',
              'When a Muslim knows that Allah is his Creator and Lord, he understands that worship belongs to Him alone and that directing worship to another contradicts Tawheed.',
            ],
            sw: [
              'Swala, dua, khofu, matumaini, tawakkul na aina nyingine zote za ibada alizoamrisha Allah zinapaswa kuelekezwa Kwake peke Yake. Qur’an inaeleza kwamba Allah aliwaumba majini na wanadamu ili wamuabudu.',
              'Muislamu anapojua kwamba Allah ndiye Muumba na Mola wake, hutambua kwamba ibada ni haki Yake peke Yake na kwamba kuelekeza ibada kwa mwingine kunapingana na Tawheed.',
            ],
            fr: [
              'La prière, l’invocation, la crainte, l’espérance, la confiance et tous les autres actes d’adoration prescrits par Allah doivent Lui être consacrés seul. Le Coran affirme qu’Allah a créé les djinns et les humains afin qu’ils L’adorent.',
              'Lorsque le musulman sait qu’Allah est son Créateur et son Seigneur, il comprend que l’adoration Lui appartient seul et que la diriger vers un autre contredit le Tawhid.',
            ],
          },
        },
        {
          arabicTitle: 'التوحيد يظهر في أعمال القلب والجوارح',
          arabicText: [
            'التوحيد ليس مجرد قول باللسان، بل يظهر أثره في قلب المسلم وأقواله وأعماله. فيخلص لله المحبة والخوف والرجاء والتوكل وسائر أعمال القلوب.',
            'ويظهر أثر التوحيد كذلك في الصلاة والدعاء والصدقة والصيام وسائر الطاعات، فيقصد المسلم بها وجه الله تعالى.',
          ],
          translations: {
            en: [
              'Tawheed is not merely a statement of the tongue. Its effect appears in a Muslim’s heart, words, and actions. The believer directs love, fear, hope, reliance, and other acts of the heart sincerely to Allah.',
              'Tawheed also appears in prayer, supplication, charity, fasting, and other acts of obedience, which the Muslim performs seeking the pleasure of Allah.',
            ],
            sw: [
              'Tawheed si kauli ya ulimi pekee, bali athari yake huonekana katika moyo, maneno na matendo ya Muislamu. Muumini humwelekea Allah kwa upendo, khofu, matumaini, tawakkul na matendo mengine ya moyo kwa ikhlasi.',
              'Tawheed pia huonekana katika Swala, dua, sadaka, Saumu na utiifu mwingine, ambao Muislamu huufanya akitafuta radhi za Allah.',
            ],
            fr: [
              'Le Tawhid n’est pas seulement une parole de la langue. Son effet apparaît dans le cœur, les paroles et les actes du musulman. Le croyant consacre sincèrement à Allah l’amour, la crainte, l’espérance, la confiance et les autres actes du cœur.',
              'Le Tawhid apparaît également dans la prière, l’invocation, l’aumône, le jeûne et les autres actes d’obéissance, que le musulman accomplit en recherchant l’agrément d’Allah.',
            ],
          },
        },
        {
          arabicTitle: 'التوحيد يحرر القلب من التعلق بغير الله',
          arabicText: [
            'إذا امتلأ قلب المسلم بتوحيد الله تعلق به وحده، ولم يجعل المخلوقين غاية عبادته أو رجائه أو خوفه، مع معرفته أن الناس أسباب وأن الله هو المدبر للأمور.',
            'وهذا لا يعني ترك الأسباب المشروعة، بل يعني اعتماد القلب على الله مع الأخذ بالأسباب التي أباحها وشرعها.',
          ],
          translations: {
            en: [
              'When a Muslim’s heart is filled with Tawheed, he turns to Allah alone and does not make created beings the ultimate object of worship, hope, or fear, while recognizing that people are means and Allah controls all affairs.',
              'This does not mean abandoning lawful means. Rather, it means relying upon Allah while taking the means that He has permitted and legislated.',
            ],
            sw: [
              'Moyo wa Muislamu unapojazwa na Tawheed, humwelekea Allah peke Yake na hafanyi viumbe kuwa lengo kuu la ibada, matumaini au khofu yake, huku akitambua kwamba watu ni sababu na Allah ndiye anayesimamia mambo yote.',
              'Hii haimaanishi kuacha sababu halali. Bali inamaanisha kumtegemea Allah huku akichukua sababu ambazo Yeye ameziruhusu na kuzifanya kuwa halali.',
            ],
            fr: [
              'Lorsque le cœur du musulman est rempli de Tawhid, il se tourne vers Allah seul et ne fait pas des créatures l’objet ultime de son adoration, de son espoir ou de sa crainte, tout en reconnaissant que les gens ne sont que des moyens et qu’Allah dirige toute chose.',
              'Cela ne signifie pas abandonner les moyens permis. Cela signifie plutôt placer sa confiance en Allah tout en prenant les moyens qu’Il a permis et prescrits.',
            ],
          },
        },
      ],
      sources: [
        { type: 'quran', reference: 'Qur’an 16:36' },
        { type: 'quran', reference: 'Qur’an 51:56' },
        { type: 'quran', reference: 'Qur’an 1:5' },
        { type: 'quran', reference: 'Qur’an 39:2–3' },
      ],
    },
    translations: {
      en: { title: 'Tawheed and Its Effect on Worship' },
      sw: { title: 'Tawheed na Athari Yake katika Ibada' },
      fr: { title: 'Le Tawhid et son effet sur l’adoration' },
    },
  },

    {
      slug: 'shirk-and-protecting-tawheed',
      number: 4,
      source: {
        arabicTitle: 'الشرك وخطره وطرق حماية التوحيد',
        arabicIntroduction: [
          'الشرك هو صرف شيء من العبادة لغير الله تعالى، وهو أعظم ما نهى الله عنه، لأن العبادة حق خالص لله وحده.',
          'وحماية التوحيد تكون بتعلم ما شرعه الله، وإخلاص العبادة له، والحذر من الشرك ووسائله وأسبابه، مع الرجوع إلى القرآن والسنة الصحيحة في مسائل الاعتقاد.',
        ],
        sections: [
          {
            arabicTitle: 'الشرك أعظم الذنوب',
            arabicText: [
              'الشرك بالله تعالى هو أن يجعل الإنسان لله شريكًا في شيء من خصائصه أو في العبادة. وقد بيّن القرآن عظم خطره، قال الله تعالى: إِنَّ الشِّرْكَ لَظُلْمٌ عَظِيمٌ.',
              'وعظم خطر الشرك لا يعني أن المسلم ييأس من رحمة الله، بل يجب عليه أن يعرف التوحيد ويحذر من الشرك، وأن يتوب إلى الله إذا وقع في ذنب.',
            ],
            translations: {
              en: [
                'Shirk is to associate a partner with Allah in something belonging uniquely to Him or in worship. The Qur’an makes clear its great danger, describing shirk as a tremendous wrongdoing.',
                'The seriousness of shirk does not mean that a Muslim should despair of Allah’s mercy. Rather, the believer should learn Tawheed, avoid shirk, and repent to Allah from sin.',
              ],
              sw: [
                'Shirk ni kumshirikisha Allah na mshirika katika jambo linalomhusu Yeye peke Yake au katika ibada. Qur’an imeeleza hatari yake kubwa na imeuita shirk kuwa dhulma kubwa.',
                'Uzito wa shirk haumaanishi kwamba Muislamu akate tamaa na rehema ya Allah. Bali anapaswa kujifunza Tawheed, kujiepusha na shirk na kutubia Allah anapofanya dhambi.',
              ],
              fr: [
                'Le shirk consiste à associer à Allah un partenaire dans ce qui Lui appartient exclusivement ou dans l’adoration. Le Coran montre sa grande gravité et le décrit comme une immense injustice.',
                'La gravité du shirk ne signifie pas que le musulman doit désespérer de la miséricorde d’Allah. Il doit plutôt apprendre le Tawhid, éviter le shirk et se repentir à Allah lorsqu’il commet un péché.',
              ],
            },
          },
          {
            arabicTitle: 'الشرك يناقض إخلاص العبادة',
            arabicText: [
              'من أعظم مقاصد التوحيد أن تكون العبادة لله وحده. قال الله تعالى: فَاعْبُدِ اللَّهَ مُخْلِصًا لَهُ الدِّينَ. فالإخلاص أساس قبول العبادة وصحتها.',
              'ويحذر المسلم من أن يجعل شيئًا من العبادة لغير الله، سواء كان ذلك في الدعاء أو النذر أو الذبح أو غير ذلك من العبادات التي شرعها الله.',
            ],
            translations: {
              en: [
                'One of the central meanings of Tawheed is that worship belongs to Allah alone. The Qur’an commands worship of Allah with sincere devotion to Him, making sincerity fundamental to worship.',
                'A Muslim therefore avoids directing any act of worship to other than Allah, whether in supplication, vows, sacrifice, or other forms of worship that Allah has legislated.',
              ],
              sw: [
                'Katika maana kuu za Tawheed ni kwamba ibada ni ya Allah peke Yake. Qur’an inaamrisha kumuabudu Allah kwa kumtakasia dini, hivyo ikhlasi ni msingi wa ibada.',
                'Kwa hiyo Muislamu huepuka kuelekeza aina yoyote ya ibada kwa mwingine asiye Allah, iwe ni dua, nadhiri, kuchinja au ibada nyingine alizoamrisha Allah.',
              ],
              fr: [
                'L’un des sens essentiels du Tawhid est que l’adoration appartient à Allah seul. Le Coran ordonne de L’adorer en Lui consacrant sincèrement la religion, faisant de la sincérité un fondement de l’adoration.',
                'Le musulman évite donc de consacrer un acte d’adoration à autre qu’Allah, qu’il s’agisse de l’invocation, des vœux, du sacrifice ou d’autres formes d’adoration prescrites par Allah.',
              ],
            },
          },
          {
            arabicTitle: 'الحذر من وسائل الشرك',
            arabicText: [
              'يحذر المسلم من الوسائل التي قد تقود إلى الشرك، ومن أعظمها الغلو في الصالحين أو جعل المخلوق واسطة في عبادة الله. وقد نهى النبي ﷺ عن الغلو.',
              'والواجب في مسائل التوحيد أن يتعلم المسلم من الوحي، وألا يجعل العادات أو الظنون أو الأقوال غير الموثوقة مصدرًا للعقيدة.',
            ],
            translations: {
              en: [
                'A Muslim should be cautious of practices that can lead toward shirk, including excessive veneration of righteous people or treating created beings as objects of worship. The Prophet ﷺ warned against excess.',
                'In matters of Tawheed, a Muslim should learn from revelation and should not make customs, assumptions, or unreliable statements the source of belief.',
              ],
              sw: [
                'Muislamu anapaswa kujihadhari na mambo yanayoweza kupelekea shirk, ikiwa ni pamoja na kuwazidishia watu wema katika kuwaheshimu au kuwafanya viumbe kuwa sehemu ya ibada. Mtume ﷺ alionya dhidi ya kupindukia.',
                'Katika masuala ya Tawheed, Muislamu anapaswa kujifunza kutoka katika wahyi na asifanye desturi, dhana au kauli zisizoaminika kuwa chanzo cha itikadi.',
              ],
              fr: [
                'Le musulman doit se méfier des pratiques qui peuvent conduire au shirk, notamment l’exagération envers les personnes pieuses ou le fait de faire des créatures des objets d’adoration. Le Prophète ﷺ a mis en garde contre l’excès.',
                'Dans les questions de Tawhid, le musulman doit apprendre à partir de la révélation et ne pas prendre les coutumes, les suppositions ou les propos non fiables comme source de croyance.',
              ],
            },
          },
          {
            arabicTitle: 'حماية التوحيد تكون بالعلم والعمل',
            arabicText: [
              'حماية التوحيد لا تكون بالخوف وحده، بل بالعلم بما جاء في القرآن والسنة، وإخلاص العبادة لله، والابتعاد عن أسباب الشرك، وسؤال أهل العلم فيما يشكل.',
              'وإذا تعلم المسلم التوحيد وعمل به ازداد حرصه على إخلاص عبادته لله، وعرف ما يجب اجتنابه وما ينبغي فعله وفق الدليل.',
            ],
            translations: {
              en: [
                'Protecting Tawheed is not achieved by fear alone. It is achieved by learning the Qur’an and Sunnah, worshipping Allah sincerely, avoiding causes of shirk, and asking qualified scholars about matters that are unclear.',
                'As a Muslim learns and practices Tawheed, he becomes more careful to keep worship sincere to Allah and to distinguish what should be avoided from what should be done according to evidence.',
              ],
              sw: [
                'Kulinda Tawheed hakutegemei khofu pekee. Kunahitaji kujifunza Qur’an na Sunnah, kumuabudu Allah kwa ikhlasi, kuepuka sababu za shirk na kuwauliza wanazuoni wenye sifa inapokuwa kuna jambo lisiloeleweka.',
                'Muislamu anapojifunza na kutekeleza Tawheed, huzidi kuwa mwangalifu katika kuitakasa ibada yake kwa ajili ya Allah na kutambua yanayopaswa kuepukwa na yanayopaswa kufanywa kwa mujibu wa dalili.',
              ],
              fr: [
                'Préserver le Tawhid ne repose pas seulement sur la crainte. Cela passe par l’apprentissage du Coran et de la Sunnah, l’adoration sincère d’Allah, l’éloignement des causes du shirk et le recours à des savants qualifiés lorsque quelque chose n’est pas clair.',
                'Lorsque le musulman apprend et met en pratique le Tawhid, il devient plus attentif à consacrer son adoration à Allah et à distinguer ce qui doit être évité de ce qui doit être fait selon les preuves.',
              ],
            },
          },
        ],
        sources: [
          { type: 'quran', reference: 'Qur’an 31:13' },
          { type: 'quran', reference: 'Qur’an 39:2–3' },
          { type: 'quran', reference: 'Qur’an 4:48' },
          { type: 'quran', reference: 'Qur’an 72:18' },
          { type: 'hadith', reference: 'Sahih al-Bukhari 3445' },
        ],
      },
      translations: {
        en: { title: 'Shirk and Protecting Tawheed' },
        sw: { title: 'Shirk na Kulinda Tawheed' },
        fr: { title: 'Le shirk et la protection du Tawhid' },
      },
    },
    {
      slug: 'effects-of-knowing-allah',
      number: 5,
      source: {
        arabicTitle: 'آثار معرفة الله تعالى في حياة المسلم',
        arabicIntroduction: [
          'معرفة الله تعالى تكون بما أخبر به عن نفسه في كتابه، وبما صح عن رسوله ﷺ، وهي معرفة تورث الإيمان والتعظيم والخوف والرجاء والمحبة.',
          'وكلما ازداد المسلم معرفةً بالله تعالى ازداد حرصًا على عبادته وطاعته، وأحسن التوكل عليه، واستقام سلوكه بحسب ما شرعه الله.',
        ],
        sections: [
          {
            arabicTitle: 'معرفة الله تزيد الإيمان',
            arabicText: [
              'معرفة أسماء الله وصفاته وآياته تزيد المؤمن يقينًا وإيمانًا، لأن العبد إذا عرف ربه عرف عظمته وكماله ورحمته وحكمته.',
              'قال الله تعالى: وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ فَادْعُوهُ بِهَا.',
            ],
            translations: {
              en: [
                'Knowing Allah through His Names, Attributes, and signs increases a believer’s certainty and faith. When a servant knows his Lord, he recognizes His greatness, perfection, mercy, and wisdom.',
                'Allah says: “And to Allah belong the Most Beautiful Names, so call upon Him by them.”',
              ],
              sw: [
                'Kumjua Allah kupitia Majina Yake, Sifa Zake na ishara Zake huongeza yakini na imani ya Muumini. Mja anapomjua Mola wake hutambua utukufu Wake, ukamilifu Wake, rehema Yake na hekima Yake.',
                'Allah amesema: “Na Allah ana Majina mazuri kabisa, basi muombeni kwa hayo.”',
              ],
              fr: [
                'Connaître Allah à travers Ses Noms, Ses Attributs et Ses signes augmente la certitude et la foi du croyant. Lorsqu’un serviteur connaît son Seigneur, il reconnaît Sa grandeur, Sa perfection, Sa miséricorde et Sa sagesse.',
                'Allah dit : « À Allah appartiennent les plus beaux Noms ; invoquez-Le donc par eux. »',
              ],
            },
          },
          {
            arabicTitle: 'معرفة الله تؤثر في العبادة',
            arabicText: [
              'إذا عرف المسلم أن الله وحده هو المستحق للعبادة، أخلص له صلاته ودعاءه وسائر عباداته، ولم يجعل شيئًا منها لغيره.',
              'قال الله تعالى: فَاعْبُدِ اللَّهَ مُخْلِصًا لَهُ الدِّينَ.',
            ],
            translations: {
              en: [
                'When a Muslim knows that Allah alone deserves worship, he directs his prayer, supplication, and all other acts of worship sincerely to Him and does not direct them to anyone else.',
                'Allah says: “So worship Allah, making the religion sincerely for Him.”',
              ],
              sw: [
                'Muislamu anapojua kwamba Allah peke Yake ndiye anayestahiki kuabudiwa, humtakasia Yeye swala, dua na ibada zake zote, wala hazielekezi kwa mwingine.',
                'Allah amesema: “Basi muabudu Allah, ukimtakasia Yeye dini.”',
              ],
              fr: [
                'Lorsque le musulman sait qu’Allah seul mérite l’adoration, il Lui consacre sincèrement sa prière, ses invocations et tous ses actes d’adoration, sans les consacrer à autre que Lui.',
                'Allah dit : « Adore donc Allah en Lui consacrant sincèrement la religion. »',
              ],
            },
          },
          {
            arabicTitle: 'معرفة الله تورث التوكل عليه',
            arabicText: [
              'من عرف قدرة الله وتدبيره اعتمد عليه مع الأخذ بالأسباب المشروعة، وعلم أن النفع والضر بيد الله تعالى.',
              'قال الله تعالى: وَعَلَى اللَّهِ فَتَوَكَّلُوا إِنْ كُنْتُمْ مُؤْمِنِينَ.',
            ],
            translations: {
              en: [
                'Whoever knows Allah’s power and control relies upon Him while taking lawful means, knowing that benefit and harm are ultimately under Allah’s control.',
                'Allah says: “And upon Allah rely, if you are believers.”',
              ],
              sw: [
                'Anayejua uwezo na uendeshaji wa Allah humtegemea Yeye huku akichukua sababu halali, akijua kwamba manufaa na madhara yako chini ya uwezo wa Allah.',
                'Allah amesema: “Na mtegemeeni Allah ikiwa nyinyi ni Waumini.”',
              ],
              fr: [
                'Celui qui connaît la puissance et la maîtrise d’Allah place sa confiance en Lui tout en prenant les moyens permis, sachant que le bien et le mal sont finalement sous le contrôle d’Allah.',
                'Allah dit : « Et placez votre confiance en Allah, si vous êtes croyants. »',
              ],
            },
          },
          {
            arabicTitle: 'معرفة الله تؤثر في الأخلاق والعمل',
            arabicText: [
              'معرفة الله ليست معلومات مجردة، بل ينبغي أن يظهر أثرها في حياة المسلم؛ فيراقب الله في أقواله وأعماله، ويحرص على الطاعة، ويبتعد عن الظلم والمعصية.',
              'قال الله تعالى: إِنَّ اللَّهَ كَانَ عَلَيْكُمْ رَقِيبًا.',
            ],
            translations: {
              en: [
                'Knowing Allah is not merely a collection of information. Its effect should appear in a Muslim’s life: being mindful of Allah in words and actions, striving to obey Him, and avoiding wrongdoing and disobedience.',
                'Allah says: “Indeed, Allah is ever Watchful over you.”',
              ],
              sw: [
                'Kumjua Allah si kukusanya taarifa tu. Athari yake inapaswa kuonekana katika maisha ya Muislamu: kumcha Allah katika maneno na matendo, kujitahidi kumtii na kujiepusha na dhulma na maasi.',
                'Allah amesema: “Hakika Allah daima ni Mwenye kuwaangalia.”',
              ],
              fr: [
                'Connaître Allah ne consiste pas seulement à accumuler des informations. Cette connaissance doit apparaître dans la vie du musulman : être conscient d’Allah dans ses paroles et ses actes, chercher à Lui obéir et éviter l’injustice et la désobéissance.',
                'Allah dit : « Certes, Allah vous observe constamment. »',
              ],
            },
          },
        ],
        sources: [
          { type: 'quran', reference: 'Qur’an 7:180' },
          { type: 'quran', reference: 'Qur’an 39:2' },
          { type: 'quran', reference: 'Qur’an 8:2' },
          { type: 'quran', reference: 'Qur’an 5:23' },
          { type: 'quran', reference: 'Qur’an 4:1' },
        ],
      },
      translations: {
        en: { title: 'The Effects of Knowing Allah in a Muslim’s Life' },
        sw: { title: 'Athari ya Kumjua Allah katika Maisha ya Muislamu' },
        fr: { title: 'Les effets de la connaissance d’Allah dans la vie du musulman' },
      },
    },
    {
      slug: 'prophethood-and-revelation',
      title: 'Prophethood and Revelation',
      number: 6,
    },
    {
      slug: 'aqidah-in-the-life-of-a-muslim',
      title: 'Aqidah in the Life of a Muslim',
      number: 7,
    },
    ],
  },
]
}
