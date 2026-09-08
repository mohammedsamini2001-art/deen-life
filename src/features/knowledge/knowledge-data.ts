import type { KnowledgeCategory } from './types'

export const knowledgeCategories: KnowledgeCategory[] = [
  {
    slug: 'foundations',
    name: 'Foundations of Islam',
    description: 'Begin with the essential foundations of Islamic belief and practice.',
    lessons: [
      {
        slug: 'five-pillars',
        title: 'The Five Pillars of Islam',
        description: 'An introduction to the five foundational acts of worship in Islam.',
        category: 'Foundations of Islam',
        sourceType: 'general',
        content: [
          'Islam is built upon five foundational pillars: the testimony of faith, prayer, zakah, fasting Ramadan, and Hajj for those who are able.',
          'These pillars form the foundation of a Muslim’s outward practice and are connected to faith, worship, discipline, and responsibility.'
        ]
      }
    ]
  },
  {
    slug: 'salah',
    name: 'Salah',
    description: 'Learn about the importance and foundations of the five daily prayers.',
    lessons: [
      {
        slug: 'importance-of-salah',
        title: 'The Importance of Salah',
        description: 'Why the five daily prayers hold such an important place in Islam.',
        category: 'Salah',
        sourceType: 'quran',
        source: 'Qur’an 29:45',
        content: [
          'Salah is one of the central acts of worship in Islam and is performed throughout the day at appointed times.',
          'The Qur’an connects prayer with remembrance of Allah and with turning away from what is wrong.'
        ]
      }
    ]
  },
  {
    slug: 'character',
    name: 'Character & Akhlaq',
    description: 'Explore qualities such as honesty, patience, mercy, and good conduct.',
    lessons: [
      {
        slug: 'good-character',
        title: 'Good Character',
        description: 'Why good character is an essential part of Islamic life.',
        category: 'Character & Akhlaq',
        sourceType: 'general',
        content: [
          'Islam teaches Muslims to treat others with justice, mercy, honesty, patience, and good manners.',
          'Knowledge becomes more beneficial when it is reflected in a person’s conduct and treatment of others.'
        ]
      }
    ]
  },
  {
    slug: 'seerah',
    name: 'Seerah',
    description: 'Learn about the life and mission of Prophet Muhammad ﷺ.',
    lessons: [
      {
        slug: 'beginning-of-revelation',
        title: 'The Beginning of Revelation',
        description: 'An introduction to the beginning of the Prophet Muhammad’s ﷺ mission.',
        category: 'Seerah',
        sourceType: 'seerah',
        source: 'Authentic hadith reports in Sahih al-Bukhari and Sahih Muslim',
        content: [
          'The revelation of the Qur’an marked the beginning of the prophetic mission of Muhammad ﷺ.',
          'The Seerah helps Muslims understand the Prophet’s ﷺ mission, character, perseverance, and guidance.'
        ]
      }
    ]
  }
]

export function getKnowledgeCategories(): KnowledgeCategory[] {
  return knowledgeCategories
}

export function getKnowledgeCategory(slug: string): KnowledgeCategory | undefined {
  return knowledgeCategories.find(category => category.slug === slug)
}
