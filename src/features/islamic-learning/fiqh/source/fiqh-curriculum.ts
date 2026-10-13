export type FiqhLanguage = 'ar' | 'en' | 'sw' | 'fr'

export interface FiqhLesson {
  id: string
  title: Record<FiqhLanguage, string>
  summary: Record<FiqhLanguage, string>
  evidence: {
    type: 'quran' | 'hadith'
    reference: string
    url: string
    note: string
  }[]
}

export const FIQH_CURRICULUM: FiqhLesson[] = [
  {
    id: 'purification',
    title: {
      ar: 'الطهارة وأهميتها',
      en: 'Purification and its importance',
      sw: 'Twahara na umuhimu wake',
      fr: 'La purification et son importance',
    },
    summary: {
      ar: 'مدخل إلى الطهارة في العبادة ومعناها العام.',
      en: 'An introduction to purification in worship and its general purpose.',
      sw: 'Utangulizi wa twahara katika ibada na umuhimu wake.',
      fr: 'Introduction à la purification dans l’adoration et à son importance.',
    },
    evidence: [
      {
        type: 'quran',
        reference: 'Qur’an 5:6',
        url: 'https://quran.com/5/6',
        note: 'A foundational verse on purification before prayer.',
      },
      {
        type: 'quran',
        reference: 'Qur’an 2:222',
        url: 'https://quran.com/2/222',
        note: 'A verse mentioning Allah’s love for those who purify themselves.',
      },
    ],
  },
  {
    id: 'wudu-quran',
    title: {
      ar: 'الوضوء في القرآن',
      en: 'Wudu in the Qur’an',
      sw: 'Udhu katika Qur’ani',
      fr: 'Les ablutions dans le Coran',
    },
    summary: {
      ar: 'التعرّف على الأعضاء المذكورة في آية الوضوء.',
      en: 'Identify the body parts mentioned in the Qur’anic instruction for wudu.',
      sw: 'Kutambua viungo vilivyotajwa katika aya ya udhu.',
      fr: 'Identifier les parties du corps mentionnées dans le verset des ablutions.',
    },
    evidence: [
      {
        type: 'quran',
        reference: 'Qur’an 5:6',
        url: 'https://quran.com/5/6',
        note: 'Primary Qur’anic evidence for the prescribed acts of wudu.',
      },
    ],
  },
  {
    id: 'wudu-prophetic-practice',
    title: {
      ar: 'صفة وضوء النبي ﷺ',
      en: 'The Prophet’s practice of wudu',
      sw: 'Namna ya udhu ya Mtume ﷺ',
      fr: 'La manière de faire les ablutions du Prophète ﷺ',
    },
    summary: {
      ar: 'دراسة رواية تصف وضوء النبي ﷺ مع التمييز بين الواجب والمستحب عند الفقهاء.',
      en: 'Study a report describing the Prophet’s wudu, distinguishing obligations from recommended acts according to scholarly interpretation.',
      sw: 'Kusoma riwaya inayoeleza udhu wa Mtume ﷺ na kutofautisha faradhi na sunna kwa mujibu wa maelezo ya wanazuoni.',
      fr: 'Étudier un récit décrivant les ablutions du Prophète ﷺ en distinguant obligations et actes recommandés selon les savants.',
    },
    evidence: [
      {
        type: 'hadith',
        reference: 'Sahih al-Bukhari 186',
        url: 'https://sunnah.com/bukhari:186',
        note: 'A report describing the Prophet’s method of performing wudu.',
      },
    ],
  },
  {
    id: 'when-wudu-is-needed',
    title: {
      ar: 'متى يلزم الوضوء؟',
      en: 'When is wudu required?',
      sw: 'Udhu inahitajika lini?',
      fr: 'Quand les ablutions sont-elles nécessaires ?',
    },
    summary: {
      ar: 'فهم العلاقة بين الحدث والوضوء قبل الصلاة مع الرجوع إلى الدليل.',
      en: 'Understand the relationship between ritual impurity and wudu before prayer, using the cited evidence.',
      sw: 'Kuelewa uhusiano kati ya hadathi na udhu kabla ya swala kwa kutumia dalili.',
      fr: 'Comprendre le lien entre l’état d’impureté rituelle et les ablutions avant la prière à partir des sources.',
    },
    evidence: [
      {
        type: 'hadith',
        reference: 'Sahih al-Bukhari 135',
        url: 'https://sunnah.com/bukhari:135',
        note: 'A report establishing the need for wudu after a state that invalidates it; detailed rulings require careful fiqh treatment.',
      },
    ],
  },
  {
    id: 'ghusl',
    title: {
      ar: 'الغسل من الجنابة',
      en: 'Ghusl: ritual bathing',
      sw: 'Ghusl: josho la ibada',
      fr: 'Le ghusl : le bain rituel',
    },
    summary: {
      ar: 'مدخل إلى الغسل عند الجنابة كما ورد في النص القرآني.',
      en: 'An introduction to ritual bathing in the state of janabah as stated in the Qur’an.',
      sw: 'Utangulizi wa josho la janaba kama lilivyoelezwa katika Qur’ani.',
      fr: 'Introduction au bain rituel en état de janâba selon le texte coranique.',
    },
    evidence: [
      {
        type: 'quran',
        reference: 'Qur’an 5:6',
        url: 'https://quran.com/5/6',
        note: 'The verse includes the instruction to purify oneself from janabah.',
      },
    ],
  },
  {
    id: 'tayammum',
    title: {
      ar: 'التيمم',
      en: 'Tayammum: dry purification',
      sw: 'Tayammum: twahara kwa udongo safi',
      fr: 'Le tayammum : purification sèche',
    },
    summary: {
      ar: 'التعرّف على التيمم عند وجود عذر معتبر يمنع استعمال الماء أو تعذّر وجوده.',
      en: 'Learn the Qur’anic basis for tayammum when its conditions apply, including lack of water.',
      sw: 'Kujifunza msingi wa tayammum katika hali zinazoiruhusu, ikiwemo kukosekana kwa maji.',
      fr: 'Découvrir le fondement coranique du tayammum lorsque ses conditions sont réunies, notamment en l’absence d’eau.',
    },
    evidence: [
      {
        type: 'quran',
        reference: 'Qur’an 4:43',
        url: 'https://quran.com/4/43',
        note: 'Qur’anic evidence concerning tayammum and its conditions.',
      },
      {
        type: 'quran',
        reference: 'Qur’an 5:6',
        url: 'https://quran.com/5/6',
        note: 'A second foundational passage on tayammum.',
      },
    ],
  },
  {
    id: 'prayer-preparation',
    title: {
      ar: 'الاستعداد للصلاة',
      en: 'Preparing for prayer',
      sw: 'Kujiandaa kwa swala',
      fr: 'Se préparer à la prière',
    },
    summary: {
      ar: 'ربط الطهارة بالاستعداد للصلاة وفهم أهمية الصلاة في أوقاتها.',
      en: 'Connect purification with preparation for prayer and learn the importance of prayer at its appointed times.',
      sw: 'Kuunganisha twahara na maandalizi ya swala na kujifunza umuhimu wa kuswali kwa nyakati zake.',
      fr: 'Relier la purification à la préparation de la prière et comprendre l’importance de prier aux heures prescrites.',
    },
    evidence: [
      {
        type: 'quran',
        reference: 'Qur’an 5:6',
        url: 'https://quran.com/5/6',
        note: 'Purification before prayer.',
      },
      {
        type: 'quran',
        reference: 'Qur’an 4:103',
        url: 'https://quran.com/4/103',
        note: 'Evidence concerning prayer at appointed times.',
      },
    ],
  },
]
