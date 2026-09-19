import type { KnowledgeCategory } from './types'

const knowledgeCategories: KnowledgeCategory[] = [
  {
    slug: 'foundations',
    name: 'Foundations of Islam',
    description: 'Core beliefs, practices, and principles every Muslim should understand.',
    lessons: [
      {
        slug: 'five-pillars',
        title: 'The Five Pillars of Islam',
        description: 'The five essential acts that form the foundation of Islamic practice.',
        category: 'Foundations of Islam',
        sourceType: 'hadith',
        source: 'Sahih al-Bukhari 8; Sahih Muslim 16',
        content: [
          'The Five Pillars are Shahadah, Salah, Zakah, fasting in Ramadan, and Hajj for those who are able.',
          'The Shahadah is the testimony that there is no deity worthy of worship except Allah and that Muhammad is the Messenger of Allah.',
          'Salah is the five daily prayers performed at their appointed times.',
          'Zakah is the obligatory charity due from eligible wealth according to Islamic rules.',
          'Fasting during Ramadan is obligatory for Muslims who are able, with recognized exemptions.',
          'Hajj is the pilgrimage to Makkah required once in a lifetime for a Muslim who has the ability to perform it.'
        ]
      },
      {
        slug: 'six-articles-of-faith',
        title: 'The Six Articles of Faith',
        description: 'The essential beliefs that form the foundation of Iman.',
        category: 'Foundations of Islam',
        sourceType: 'hadith',
        source: 'Sahih Muslim 8a',
        content: [
          'The articles of faith are belief in Allah, His angels, His revealed books, His messengers, the Last Day, and divine decree.',
          'Belief in Allah means affirming His oneness and worshipping Him alone.',
          'Belief in the angels includes affirming that they are created servants of Allah who obey Him.',
          'Belief in the revealed books and messengers means accepting what Allah revealed and sent through His messengers.',
          'Belief in the Last Day includes resurrection, judgment, accountability, Paradise, and Hell.',
          'Belief in divine decree means affirming Allah’s knowledge and decree while recognizing human responsibility for choices and actions.'
        ]
      },
      {
        slug: 'islam-iman-ihsan',
        title: 'Islam, Iman, and Ihsan',
        description: 'Understanding the three levels described in the Hadith of Jibril.',
        category: 'Foundations of Islam',
        sourceType: 'hadith',
        source: 'Sahih Muslim 8a',
        content: [
          'The Hadith of Jibril describes Islam through its outward pillars, Iman through its articles of faith, and Ihsan through excellence in worship.',
          'Ihsan means worshipping Allah with deep awareness that, although you do not see Him, He sees you.',
          'The three concepts are connected: sound belief should shape worship, and sincere worship should shape character and conduct.'
        ]
      },
      {
        slug: 'tawhid',
        title: 'Tawhid: The Oneness of Allah',
        description: 'The central principle that Allah alone is worthy of worship.',
        category: 'Foundations of Islam',
        sourceType: 'quran',
        source: 'Qur’an 112:1–4; Qur’an 2:163',
        content: [
          'Tawhid means affirming the oneness and uniqueness of Allah.',
          'The Qur’an teaches that Allah is One and that nothing is comparable to Him.',
          'Worship is therefore directed to Allah alone, without partners.',
          'Understanding Tawhid helps a Muslim connect prayer, supplication, reliance, gratitude, and obedience to Allah.'
        ]
      },
      {
        slug: 'shahadah',
        title: 'The Shahadah',
        description: 'The testimony of faith and its meaning.',
        category: 'Foundations of Islam',
        sourceType: 'general',
        source: 'Qur’an 47:19; Sahih al-Bukhari 8',
        content: [
          'The Shahadah affirms that none has the right to be worshipped except Allah and that Muhammad is the Messenger of Allah.',
          'It is not merely a statement of words; it carries implications for worship, belief, obedience, and following the Messenger.',
          'A Muslim learns its meaning and seeks to live consistently with it.'
        ]
      }
    ]
  },
  {
    slug: 'salah',
    name: 'Salah',
    description: 'Learning the purpose, times, preparation, and essential principles of prayer.',
    lessons: [
      {
        slug: 'importance-of-salah',
        title: 'The Importance of Salah',
        description: 'Why the five daily prayers occupy a central place in Muslim life.',
        category: 'Salah',
        sourceType: 'quran',
        source: 'Qur’an 29:45; Qur’an 4:103',
        content: [
          'Salah is one of the Five Pillars of Islam and is prescribed at appointed times.',
          'The Qur’an describes prayer as a means of remembering Allah and says that sincere prayer restrains from shameful and unjust conduct.',
          'Prayer gives a Muslim regular opportunities throughout the day to turn back to Allah.'
        ]
      },
      {
        slug: 'five-daily-prayers',
        title: 'The Five Daily Prayers',
        description: 'The obligatory daily prayers and their general sequence.',
        category: 'Salah',
        sourceType: 'general',
        source: 'Qur’an 4:103; Sahih al-Bukhari 528',
        content: [
          'The five obligatory prayers are Fajr, Dhuhr, Asr, Maghrib, and Isha.',
          'Each prayer has its appointed time, and Muslims seek to perform it within that time.',
          'The exact beginning and ending times vary according to location and the position of the sun.'
        ]
      },
      {
        slug: 'wudu',
        title: 'Wudu and Purification',
        description: 'The basic purification required before many acts of worship.',
        category: 'Salah',
        sourceType: 'quran',
        source: 'Qur’an 5:6',
        content: [
          'Wudu is ritual purification performed before prayer when it is required.',
          'The Qur’an gives instructions involving washing the face and arms, wiping the head, and washing the feet.',
          'Islam also provides alternatives and concessions when water cannot be used, including tayammum under its conditions.'
        ]
      },
      {
        slug: 'khushu',
        title: 'Khushu in Prayer',
        description: 'Developing attentiveness, humility, and presence during Salah.',
        category: 'Salah',
        sourceType: 'quran',
        source: 'Qur’an 23:1–2',
        content: [
          'Khushu refers to humility and attentive devotion in worship.',
          'A Muslim can work toward khushu by understanding what is recited, preparing calmly, and remembering that they are standing before Allah.',
          'Distractions happen; the goal is to keep returning attention to the prayer.'
        ]
      }
    ]
  },
  {
    slug: 'quran',
    name: 'Qur’an',
    description: 'Guidance for understanding, reading, reflecting upon, and living by the Qur’an.',
    lessons: [
      {
        slug: 'what-is-quran',
        title: 'What Is the Qur’an?',
        description: 'The Qur’an as Allah’s revealed guidance.',
        category: 'Qur’an',
        sourceType: 'quran',
        source: 'Qur’an 2:2; Qur’an 17:9',
        content: [
          'The Qur’an is the revelation of Allah sent to Prophet Muhammad through the angel Jibril.',
          'Muslims believe the Qur’an is guidance for humanity and a source of instruction, reminder, and worship.',
          'It was revealed in Arabic and is organized into 114 surahs.'
        ]
      },
      {
        slug: 'approaching-quran',
        title: 'Approaching the Qur’an',
        description: 'Practical principles for reading and reflecting on the Qur’an.',
        category: 'Qur’an',
        sourceType: 'quran',
        source: 'Qur’an 38:29; Qur’an 47:24',
        content: [
          'Reading the Qur’an is accompanied by reflection and an effort to understand its guidance.',
          'A learner should distinguish the Arabic Qur’an from translations, which communicate meanings but are not themselves the Arabic revelation.',
          'Reliable tafsir and qualified teachers can help explain verses whose context or interpretation requires further study.'
        ]
      },
      {
        slug: 'bismillah',
        title: 'Bismillah',
        description: 'Understanding the phrase Muslims commonly say when beginning an action.',
        category: 'Qur’an',
        sourceType: 'quran',
        source: 'Qur’an 27:30; Qur’an 1:1',
        content: [
          'Bismillah is a shortened form of the phrase meaning “In the name of Allah, the Most Compassionate, the Most Merciful.”',
          'The Qur’an explicitly records this wording in the letter of Prophet Sulayman in Qur’an 27:30.',
          'The basmalah appears at the beginning of the surahs in the written Qur’an except Surah At-Tawbah, while Surah An-Naml contains it within verse 30 as well.',
          'Questions about whether the basmalah is counted as a verse of Al-Fatihah have differences among recognized schools of recitation and jurisprudence.'
        ]
      }
    ]
  },
  {
    slug: 'hadith',
    name: 'Hadith & Sunnah',
    description: 'Understanding prophetic teachings and how authentic reports are approached.',
    lessons: [
      {
        slug: 'what-is-hadith',
        title: 'What Is Hadith?',
        description: 'The role of prophetic reports in Islamic learning.',
        category: 'Hadith & Sunnah',
        sourceType: 'hadith',
        source: 'Sahih Muslim 8a',
        content: [
          'Hadith reports transmit statements, actions, approvals, and descriptions attributed to Prophet Muhammad.',
          'Hadith scholarship examines chains of transmission and the text of reports.',
          'Not every report found in a book or online is automatically authentic, so reliable collections and scholarly verification matter.'
        ]
      },
      {
        slug: 'sunnah',
        title: 'What Is the Sunnah?',
        description: 'The prophetic example and its place in Muslim practice.',
        category: 'Hadith & Sunnah',
        sourceType: 'general',
        source: 'Qur’an 33:21',
        content: [
          'The Sunnah refers broadly to the guidance and example of Prophet Muhammad.',
          'The Qur’an describes the Messenger as an excellent example for believers.',
          'Following the Sunnah requires authentic knowledge of what the Prophet actually taught and did.'
        ]
      },
      {
        slug: 'hadith-authenticity',
        title: 'How Hadith Authenticity Is Studied',
        description: 'A simple introduction to why hadith grades matter.',
        category: 'Hadith & Sunnah',
        sourceType: 'general',
        source: 'Classical hadith methodology',
        content: [
          'Classical hadith scholars examined transmitters, chains, continuity, textual issues, and other criteria.',
          'Common grades include sahih, hasan, and da‘if, although detailed grading terminology varies by methodology.',
          'A Muslim should avoid confidently attributing weak or fabricated reports to the Prophet.'
        ]
      }
    ]
  },
  {
    slug: 'fiqh',
    name: 'Fiqh',
    description: 'An introduction to Islamic jurisprudence and everyday rulings.',
    lessons: [
      {
        slug: 'what-is-fiqh',
        title: 'What Is Fiqh?',
        description: 'Understanding Islamic jurisprudence and scholarly reasoning.',
        category: 'Fiqh',
        sourceType: 'fiqh',
        source: 'Qur’an 9:122',
        content: [
          'Fiqh is the human scholarly effort to understand practical Islamic rulings from recognized sources and principles.',
          'Scholars can reach different conclusions on some questions because evidence may be interpreted differently or because established legal methodologies differ.',
          'A general educational lesson should not be treated as a personal fatwa.'
        ]
      },
      {
        slug: 'halal-and-haram',
        title: 'Halal and Haram',
        description: 'How Islamic law distinguishes permitted and prohibited matters.',
        category: 'Fiqh',
        sourceType: 'quran',
        source: 'Qur’an 16:116; Qur’an 5:87–88',
        content: [
          'Halal refers to what is permitted and haram to what is prohibited.',
          'Muslims should avoid declaring something halal or haram without reliable evidence.',
          'Some matters are clear, while others require scholarly investigation because the evidence or circumstances are more complex.'
        ]
      },
      {
        slug: 'scholarly-differences',
        title: 'Why Scholars Sometimes Differ',
        description: 'Understanding legitimate differences in Islamic jurisprudence.',
        category: 'Fiqh',
        sourceType: 'fiqh',
        source: 'Principles of Islamic jurisprudence',
        content: [
          'Differences can arise from interpretation of evidence, hadith assessment, language, legal principles, or how apparently competing evidence is reconciled.',
          'Recognized schools of jurisprudence have developed systematic methods for deriving rulings.',
          'A disagreement between qualified scholars should not automatically be treated as proof that one side is acting outside Islam.'
        ]
      }
    ]
  },
  {
    slug: 'seerah',
    name: 'Seerah',
    description: 'A structured journey through the life and mission of Prophet Muhammad.',
    lessons: [
      {
        slug: 'before-revelation',
        title: 'Before the Revelation',
        description: 'The early life of Prophet Muhammad before his prophetic mission.',
        category: 'Seerah',
        sourceType: 'seerah',
        source: 'Sahih al-Bukhari 3902',
        content: [
          'Prophet Muhammad was born in Makkah and belonged to Quraysh.',
          'Before prophethood, he was known among his people and later married Khadijah.',
          'Before revelation, he would withdraw for worship and reflection, including at the cave of Hira.'
        ]
      },
      {
        slug: 'first-revelation',
        title: 'The First Revelation',
        description: 'The beginning of the Qur’anic revelation.',
        category: 'Seerah',
        sourceType: 'seerah',
        source: 'Sahih al-Bukhari 1',
        content: [
          'The first revelation came to Prophet Muhammad while he was in the cave of Hira.',
          'The angel Jibril came to him and the opening verses of Surah Al-Alaq were revealed.',
          'Khadijah supported him after this profound experience, and the prophetic mission began.'
        ]
      },
      {
        slug: 'early-makkah',
        title: 'The Early Makkah Period',
        description: 'The beginning of the Prophet’s public mission in Makkah.',
        category: 'Seerah',
        sourceType: 'seerah',
        source: 'Qur’an 26:214; Sahih al-Bukhari 4770',
        content: [
          'The Prophet first called those closest to him and then openly warned his people.',
          'The central message was worship of Allah alone, accountability before Him, and righteous conduct.',
          'The early Muslims faced opposition and persecution for their faith.'
        ]
      },
      {
        slug: 'hijrah',
        title: 'The Hijrah to Madinah',
        description: 'The migration that transformed the early Muslim community.',
        category: 'Seerah',
        sourceType: 'seerah',
        source: 'Sahih al-Bukhari 3906',
        content: [
          'The Hijrah was the migration of Prophet Muhammad and the Muslims from Makkah to Madinah.',
          'It marked a major transition from the persecuted Makkan community to an established Muslim community in Madinah.',
          'The Islamic calendar later used the Hijrah as its historical reference point.'
        ]
      },
      {
        slug: 'madinah-community',
        title: 'Building the Madinah Community',
        description: 'The development of the Muslim community after the Hijrah.',
        category: 'Seerah',
        sourceType: 'seerah',
        source: 'Qur’an 59:9; authentic Seerah reports',
        content: [
          'In Madinah, the Prophet established a community centered on worship, mutual responsibility, justice, and cooperation.',
          'The Muhajirun and Ansar developed a strong bond of brotherhood.',
          'The Prophet also entered agreements and dealt with different communities and groups in Madinah.'
        ]
      },
      {
        slug: 'final-years',
        title: 'The Final Years',
        description: 'Major events near the end of the Prophet’s mission.',
        category: 'Seerah',
        sourceType: 'seerah',
        source: 'Sahih al-Bukhari 4449',
        content: [
          'The Prophet continued teaching, leading the community, and conveying the revelation until the completion of his mission.',
          'His final pilgrimage included important teachings and reminders to the Muslim community.',
          'Prophet Muhammad died in Madinah after completing his prophetic mission.'
        ]
      }
    ]
  },
  {
    slug: 'character',
    name: 'Character & Akhlaq',
    description: 'Building good character, honesty, patience, mercy, and responsibility.',
    lessons: [
      {
        slug: 'good-character',
        title: 'Good Character',
        description: 'Why character is central to Islamic life.',
        category: 'Character & Akhlaq',
        sourceType: 'quran',
        source: 'Qur’an 68:4; Qur’an 33:21',
        content: [
          'The Qur’an praises the character of Prophet Muhammad and presents him as an example for believers.',
          'Good character includes honesty, patience, mercy, humility, justice, and keeping promises.',
          'Worship should influence how a Muslim treats other people.'
        ]
      },
      {
        slug: 'truthfulness',
        title: 'Truthfulness',
        description: 'The importance of honesty in speech and conduct.',
        category: 'Character & Akhlaq',
        sourceType: 'quran',
        source: 'Qur’an 9:119; Sahih al-Bukhari 6094',
        content: [
          'Islam strongly encourages truthfulness and warns against habitual lying.',
          'Truthfulness includes being honest with oneself and others, keeping accurate statements, and avoiding deliberate deception.',
          'Trust grows when words and actions are consistent.'
        ]
      },
      {
        slug: 'patience',
        title: 'Patience and Perseverance',
        description: 'Understanding sabr in times of difficulty and responsibility.',
        category: 'Character & Akhlaq',
        sourceType: 'quran',
        source: 'Qur’an 2:153; Qur’an 3:200',
        content: [
          'Sabr includes remaining steadfast in obedience, resisting wrongdoing, and responding to hardship with patience.',
          'Patience does not mean refusing to seek help or take sensible action.',
          'The Qur’an repeatedly connects patience with trust in Allah and perseverance.'
        ]
      },
      {
        slug: 'mercy',
        title: 'Mercy and Compassion',
        description: 'Showing mercy toward people and creation.',
        category: 'Character & Akhlaq',
        sourceType: 'quran',
        source: 'Qur’an 21:107; Sahih al-Bukhari 6013',
        content: [
          'Mercy is an important part of Islamic character.',
          'Muslims are encouraged to treat people with compassion and avoid unnecessary harshness.',
          'Mercy should be balanced with justice and responsibility.'
        ]
      }
    ]
  },
  {
    slug: 'duas-dhikr',
    name: 'Duas & Dhikr',
    description: 'Supplication and remembrance of Allah in everyday life.',
    lessons: [
      {
        slug: 'what-is-dua',
        title: 'What Is Dua?',
        description: 'Supplication and turning to Allah.',
        category: 'Duas & Dhikr',
        sourceType: 'quran',
        source: 'Qur’an 40:60; Qur’an 2:186',
        content: [
          'Dua is calling upon Allah and asking Him for what is good.',
          'The Qur’an teaches that Allah is near and responds to those who call upon Him.',
          'Dua can include requests for guidance, forgiveness, protection, wellbeing, and the good of others.'
        ]
      },
      {
        slug: 'dhikr',
        title: 'Remembering Allah',
        description: 'The place of dhikr in a Muslim’s daily life.',
        category: 'Duas & Dhikr',
        sourceType: 'quran',
        source: 'Qur’an 13:28; Qur’an 33:41',
        content: [
          'Dhikr means remembering and mentioning Allah.',
          'The Qur’an connects the remembrance of Allah with tranquility of the heart.',
          'Dhikr can be practiced through prescribed supplications, Qur’an recitation, and other authentic forms of remembrance.'
        ]
      },
      {
        slug: 'morning-evening-dhikr',
        title: 'Morning and Evening Remembrance',
        description: 'Making remembrance part of the beginning and end of the day.',
        category: 'Duas & Dhikr',
        sourceType: 'hadith',
        source: 'Authentic hadith collections',
        content: [
          'The Sunnah contains supplications and remembrance for different times and situations.',
          'Learners should use authenticated collections when learning specific wording and repetition counts.',
          'Consistency is more useful than treating remembrance as something done only occasionally.'
        ]
      }
    ]
  },
  {
    slug: 'islamic-history',
    name: 'Islamic History',
    description: 'Important periods, people, and developments in Muslim history.',
    lessons: [
      {
        slug: 'prophets-in-quran',
        title: 'Prophets Mentioned in the Qur’an',
        description: 'An introduction to prophets named explicitly in the Qur’an.',
        category: 'Islamic History',
        sourceType: 'quran',
        source: 'Qur’an 6:83–86; Qur’an 19:41–57',
        content: [
          'The Qur’an names a number of prophets, including Adam, Nuh, Ibrahim, Ismail, Ishaq, Yaqub, Yusuf, Ayyub, Musa, Harun, Dawud, Sulayman, Ilyas, Al-Yasa, Yunus, Zakariyya, Yahya, Isa, and Muhammad.',
          'Other prophets are mentioned without their names being given in the Qur’an.',
          'Islam teaches belief in all of Allah’s messengers, not only those whose names are explicitly given in the Qur’an.'
        ]
      },
      {
        slug: 'rashidun',
        title: 'The Rightly Guided Caliphs',
        description: 'An introduction to the leadership period after the Prophet.',
        category: 'Islamic History',
        sourceType: 'general',
        source: 'Classical Islamic historical sources',
        content: [
          'Abu Bakr, Umar, Uthman, and Ali are commonly known as the four Rightly Guided Caliphs.',
          'They led the Muslim community after the death of Prophet Muhammad.',
          'Detailed historical events from this period should be studied through reliable historical sources because reports differ in strength and detail.'
        ]
      },
      {
        slug: 'islamic-civilization',
        title: 'Muslim Scholarship and Civilization',
        description: 'The development of scholarship and institutions across Muslim societies.',
        category: 'Islamic History',
        sourceType: 'general',
        source: 'Islamic history',
        content: [
          'Muslim societies developed major traditions of scholarship in fields including Qur’anic studies, hadith, law, medicine, mathematics, astronomy, philosophy, and literature.',
          'These developments occurred across different regions and centuries rather than within a single location.',
          'Historical achievements should be studied with attention to dates, regions, sources, and the limits of historical evidence.'
        ]
      }
    ]
  },
  {
    slug: 'family-community',
    name: 'Family & Community',
    description: 'Responsibilities, relationships, cooperation, and community life.',
    lessons: [
      {
        slug: 'parents',
        title: 'Kindness to Parents',
        description: 'The importance of treating parents with goodness.',
        category: 'Family & Community',
        sourceType: 'quran',
        source: 'Qur’an 17:23–24',
        content: [
          'The Qur’an places strong emphasis on kindness and respectful conduct toward parents.',
          'It teaches believers not to speak to them with contempt and to treat them with mercy.',
          'Respect does not require obeying a person in something that conflicts with obedience to Allah.'
        ]
      },
      {
        slug: 'neighbors',
        title: 'Rights of Neighbors',
        description: 'Good conduct toward people who live around us.',
        category: 'Family & Community',
        sourceType: 'quran',
        source: 'Qur’an 4:36; Sahih al-Bukhari 6014',
        content: [
          'Islam commands good treatment of neighbors and warns against harming them.',
          'Good neighborliness includes respect, avoiding unnecessary disturbance, and helping when appropriate.',
          'The principle extends beyond only people who share the same religious community.'
        ]
      },
      {
        slug: 'community-responsibility',
        title: 'Community Responsibility',
        description: 'Cooperation and responsibility toward others.',
        category: 'Family & Community',
        sourceType: 'quran',
        source: 'Qur’an 5:2',
        content: [
          'The Qur’an encourages cooperation in righteousness and God-consciousness.',
          'Muslims can contribute to their communities through honesty, service, charity, education, and protecting the rights of others.',
          'Community responsibility includes avoiding cooperation in wrongdoing or harm.'
        ]
      }
    ]
  },
  {
    slug: 'fasting-ramadan',
    name: 'Fasting & Ramadan',
    description: 'Understanding Ramadan, fasting, worship, and spiritual discipline.',
    lessons: [
      {
        slug: 'ramadan',
        title: 'Ramadan',
        description: 'The month in which Muslims observe the obligatory fast.',
        category: 'Fasting & Ramadan',
        sourceType: 'quran',
        source: 'Qur’an 2:183–185',
        content: [
          'Fasting Ramadan is prescribed for believers and is connected in the Qur’an with developing taqwa.',
          'The Qur’an also provides concessions for recognized circumstances such as illness and travel.',
          'Ramadan is also a month of Qur’an, prayer, charity, repentance, and increased remembrance.'
        ]
      },
      {
        slug: 'purpose-of-fasting',
        title: 'The Purpose of Fasting',
        description: 'Spiritual discipline and God-consciousness.',
        category: 'Fasting & Ramadan',
        sourceType: 'quran',
        source: 'Qur’an 2:183',
        content: [
          'The Qur’an states that fasting is prescribed so that believers may develop taqwa.',
          'Fasting trains self-control and encourages gratitude and awareness of people who experience hardship.',
          'Its purpose is broader than simply avoiding food and drink.'
        ]
      },
      {
        slug: 'laylat-al-qadr',
        title: 'Laylat al-Qadr',
        description: 'The Night of Decree and its special place in Ramadan.',
        category: 'Fasting & Ramadan',
        sourceType: 'quran',
        source: 'Qur’an 97:1–5; Qur’an 44:3',
        content: [
          'The Qur’an describes Laylat al-Qadr as a blessed night in which the Qur’an was sent down.',
          'It is described as better than a thousand months.',
          'Muslims seek this night through increased worship during the final part of Ramadan.'
        ]
      }
    ]
  },
  {
    slug: 'zakah-charity',
    name: 'Zakah & Charity',
    description: 'Obligatory charity, voluntary giving, and caring for people in need.',
    lessons: [
      {
        slug: 'what-is-zakah',
        title: 'What Is Zakah?',
        description: 'The obligatory charity connected to eligible wealth.',
        category: 'Zakah & Charity',
        sourceType: 'quran',
        source: 'Qur’an 9:103; Qur’an 2:43',
        content: [
          'Zakah is an obligatory act of worship connected to eligible forms of wealth.',
          'Its rules include conditions concerning wealth, ownership, thresholds, and recipients.',
          'Because individual zakah calculations can be complex, personal calculations should be checked against a reliable scholarly or recognized zakah resource.'
        ]
      },
      {
        slug: 'voluntary-charity',
        title: 'Sadaqah',
        description: 'Voluntary charity and acts of generosity.',
        category: 'Zakah & Charity',
        sourceType: 'quran',
        source: 'Qur’an 2:261; Sahih Muslim 1006',
        content: [
          'Sadaqah refers broadly to voluntary charity and acts of giving.',
          'Islam encourages generosity beyond obligatory zakah.',
          'Giving can include material help as well as other beneficial acts.'
        ]
      },
      {
        slug: 'recipients-of-zakah',
        title: 'Recipients of Zakah',
        description: 'The categories identified for zakah.',
        category: 'Zakah & Charity',
        sourceType: 'quran',
        source: 'Qur’an 9:60',
        content: [
          'Qur’an 9:60 identifies specific categories eligible for zakah.',
          'The application of these categories can require scholarly judgment in particular circumstances.',
          'Zakah should be distributed according to its Islamic rules rather than simply treated as unrestricted charity.'
        ]
      }
    ]
  },
  {
    slug: 'hajj-umrah',
    name: 'Hajj & Umrah',
    description: 'The pilgrimage, its meaning, and major rites.',
    lessons: [
      {
        slug: 'hajj',
        title: 'What Is Hajj?',
        description: 'The pilgrimage to the Sacred House.',
        category: 'Hajj & Umrah',
        sourceType: 'quran',
        source: 'Qur’an 3:97; Qur’an 22:27',
        content: [
          'Hajj is the pilgrimage to the Sacred House in Makkah and is obligatory once for a person who has the ability to perform it.',
          'The pilgrimage has specific rites performed at specific places and times.',
          'Hajj is an act of worship that demonstrates submission to Allah and unity among Muslims.'
        ]
      },
      {
        slug: 'umrah',
        title: 'What Is Umrah?',
        description: 'The lesser pilgrimage and its principal rites.',
        category: 'Hajj & Umrah',
        sourceType: 'quran',
        source: 'Qur’an 2:196',
        content: [
          'Umrah is a pilgrimage to the Sacred Mosque involving specific rites.',
          'Its ruling and detailed requirements are discussed in Islamic jurisprudence.',
          'The main rites include entering ihram, tawaf, and sa‘i, with details depending on the pilgrimage circumstances.'
        ]
      },
      {
        slug: 'kaaba',
        title: 'The Ka‘bah',
        description: 'The Sacred House and its place in Muslim worship.',
        category: 'Hajj & Umrah',
        sourceType: 'quran',
        source: 'Qur’an 2:125–127',
        content: [
          'The Ka‘bah is the Sacred House in Makkah and the direction toward which Muslims pray.',
          'The Qur’an connects its foundations with Ibrahim and Ismail.',
          'The Ka‘bah is a focal point of worship, while worship itself is directed to Allah alone.'
        ]
      }
    ]
  },
  {
    slug: 'islamic-manners',
    name: 'Islamic Manners',
    description: 'Everyday etiquette and conduct taught through Qur’an and Sunnah.',
    lessons: [
      {
        slug: 'manners-of-eating',
        title: 'Manners of Eating',
        description: 'Basic eating etiquette from the Sunnah.',
        category: 'Islamic Manners',
        sourceType: 'hadith',
        source: 'Sahih al-Bukhari 5376; Sahih Muslim 2022',
        content: [
          'Prophetic teachings include remembering Allah before eating, eating with the right hand, and eating from what is in front of you.',
          'A Muslim should avoid waste and excessive consumption.',
          'The detailed etiquette comes primarily from authentic hadith reports rather than unrelated Qur’anic verses.'
        ]
      },
      {
        slug: 'greeting',
        title: 'Greetings and Peace',
        description: 'The Islamic greeting and respectful interaction.',
        category: 'Islamic Manners',
        sourceType: 'quran',
        source: 'Qur’an 4:86; Sahih Muslim 54',
        content: [
          'Islam encourages returning greetings properly and spreading peace among people.',
          'The greeting of peace is a practical expression of goodwill and brotherhood.',
          'Good manners include speaking respectfully and avoiding unnecessary hostility.'
        ]
      },
      {
        slug: 'modesty',
        title: 'Modesty',
        description: 'Modesty in behavior, speech, and appearance.',
        category: 'Islamic Manners',
        sourceType: 'quran',
        source: 'Qur’an 24:30–31; Qur’an 33:59',
        content: [
          'Islam teaches modesty and encourages believers to guard their conduct and dignity.',
          'Modesty includes behavior and speech as well as clothing.',
          'Detailed rulings can differ according to circumstances and scholarly interpretation, so specific legal questions should be referred to qualified scholars.'
        ]
      },
      {
        slug: 'avoiding-backbiting',
        title: 'Avoiding Backbiting',
        description: 'Protecting people’s honor in speech.',
        category: 'Islamic Manners',
        sourceType: 'quran',
        source: 'Qur’an 49:12',
        content: [
          'The Qur’an strongly warns believers against backbiting.',
          'Muslims should be careful about repeating information that harms another person’s honor.',
          'When discussing someone’s situation is genuinely necessary, the circumstances and intention matter and should be handled responsibly.'
        ]
      },
      {
        slug: 'asking-permission',
        title: 'Privacy and Asking Permission',
        description: 'Respecting personal space and privacy.',
        category: 'Islamic Manners',
        sourceType: 'quran',
        source: 'Qur’an 24:27–29',
        content: [
          'The Qur’an teaches believers to seek permission before entering homes that are not their own.',
          'The principle reflects respect for privacy and personal boundaries.',
          'Respecting privacy also applies to speech, belongings, and information entrusted to us.'
        ]
      }
    ]
  }
]

export function getKnowledgeCategories(): KnowledgeCategory[] {
  return knowledgeCategories
}

export function getKnowledgeCategory(slug: string): KnowledgeCategory | undefined {
  return knowledgeCategories.find((category) => category.slug === slug)
}
