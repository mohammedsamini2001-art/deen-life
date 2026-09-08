export type KnowledgeSourceType = 'quran' | 'hadith' | 'fiqh' | 'seerah' | 'general'

export interface KnowledgeLesson {
  slug: string
  title: string
  description: string
  category: string
  sourceType: KnowledgeSourceType
  source?: string
  content: string[]
}

export interface KnowledgeCategory {
  slug: string
  name: string
  description: string
  lessons: KnowledgeLesson[]
}
