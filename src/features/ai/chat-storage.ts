import type { DeenAiMessage } from './types'

export interface DeenAiConversation {
  id: string
  title: string
  messages: DeenAiMessage[]
  createdAt: number
  updatedAt: number
}

const STORAGE_KEY = 'deen-life-deen-ai-conversations-v1'

function createConversationId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`
}

function readConversations(): DeenAiConversation[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return []

    const parsed: unknown = JSON.parse(stored)

    if (!Array.isArray(parsed)) return []

    return parsed as DeenAiConversation[]
  } catch {
    return []
  }
}

function writeConversations(conversations: DeenAiConversation[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(conversations))
}

export function getDeenAiConversations(): DeenAiConversation[] {
  return readConversations().sort((a, b) => b.updatedAt - a.updatedAt)
}

export function createDeenAiConversation(
  firstQuestion = 'New DEEN AI chat',
): DeenAiConversation {
  const now = Date.now()

  const conversation: DeenAiConversation = {
    id: createConversationId(),
    title: firstQuestion.trim().slice(0, 60) || 'New DEEN AI chat',
    messages: [],
    createdAt: now,
    updatedAt: now,
  }

  const conversations = readConversations()
  writeConversations([conversation, ...conversations])

  return conversation
}

export function saveDeenAiConversation(
  conversation: DeenAiConversation,
): void {
  const conversations = readConversations()
  const existingIndex = conversations.findIndex(
    (item) => item.id === conversation.id,
  )

  const updatedConversation = {
    ...conversation,
    updatedAt: Date.now(),
  }

  if (existingIndex === -1) {
    writeConversations([updatedConversation, ...conversations])
    return
  }

  const next = [...conversations]
  next[existingIndex] = updatedConversation
  writeConversations(next)
}

export function deleteDeenAiConversation(id: string): void {
  const conversations = readConversations().filter(
    (conversation) => conversation.id !== id,
  )

  writeConversations(conversations)
}

export function clearDeenAiConversations(): void {
  localStorage.removeItem(STORAGE_KEY)
}
