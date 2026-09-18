export type AiSourceType =
  | 'quran'
  | 'hadith'
  | 'fiqh'
  | 'seerah'
  | 'general'

export interface AiSource {
  type: AiSourceType
  title: string
  reference: string
  excerpt?: string
}

export interface DeenAiResponse {
  answer: string
  sources: AiSource[]
  disclaimer?: string
}

export interface DeenAiMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  sources?: AiSource[]
}
