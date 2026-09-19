import { useEffect, useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { isPremiumActive } from '../premium/premium-entitlement'
import { askDeenAi } from './ai-service'
import {
  clearDeenAiConversations,
  createDeenAiConversation,
  deleteDeenAiConversation,
  getDeenAiConversations,
  saveDeenAiConversation,
  type DeenAiConversation,
} from './chat-storage'
import type { DeenAiMessage } from './types'

interface DeenAiScreenProps {
  onBack: () => void
  onOpenPremium: () => void
}

function createMessageId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`
}

function getConversationTitle(question: string): string {
  const title = question.trim().replace(/\s+/g, ' ')
  return title.slice(0, 60) || 'New DEEN AI chat'
}

export default function DeenAiScreen({
  onBack,
  onOpenPremium,
}: DeenAiScreenProps) {
  const [conversations, setConversations] = useState<DeenAiConversation[]>([])
  const [activeConversationId, setActiveConversationId] = useState<string | null>(
    null,
  )
  const [question, setQuestion] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const stored = getDeenAiConversations()
    setConversations(stored)

    if (stored.length > 0) {
      setActiveConversationId(stored[0].id)
    }
  }, [])

  const activeConversation = useMemo(
    () =>
      conversations.find(
        (conversation) => conversation.id === activeConversationId,
      ) ?? null,
    [conversations, activeConversationId],
  )

  if (!isPremiumActive()) {
    return (
      <section className="card page-card premium-page">
        <button className="back" onClick={onBack}>
          ← Back
        </button>

        <span className="eyebrow">DEEN AI</span>
        <h2>Islamic knowledge, one question at a time.</h2>
        <p>
          DEEN AI is a Premium feature designed to help you explore Quran,
          Hadith, fiqh, seerah, and Islamic concepts through natural questions.
        </p>

        <div className="premium-status">
          <strong>Premium required</strong>
          <span>Unlock DEEN AI and the rest of the Premium experience.</span>
          <button className="wide" onClick={onOpenPremium}>
            Open Premium
          </button>
        </div>
      </section>
    )
  }

  function refreshConversations() {
    setConversations(getDeenAiConversations())
  }

  function startNewChat() {
    const conversation = createDeenAiConversation()
    refreshConversations()
    setActiveConversationId(conversation.id)
    setQuestion('')
    setError(null)
  }

  function selectConversation(id: string) {
    if (loading) return

    setActiveConversationId(id)
    setQuestion('')
    setError(null)
  }

  function removeConversation(id: string) {
    if (loading) return

    const conversation = conversations.find((item) => item.id === id)

    if (!conversation) return

    const confirmed = window.confirm(
      `Delete "${conversation.title}"? This conversation cannot be recovered.`,
    )

    if (!confirmed) return

    deleteDeenAiConversation(id)

    const remaining = getDeenAiConversations()
    setConversations(remaining)

    if (activeConversationId === id) {
      setActiveConversationId(remaining[0]?.id ?? null)
    }
  }

  function removeAllConversations() {
    if (loading || conversations.length === 0) return

    const confirmed = window.confirm(
      'Clear all DEEN AI conversations? This cannot be undone.',
    )

    if (!confirmed) return

    clearDeenAiConversations()
    setConversations([])
    setActiveConversationId(null)
    setQuestion('')
    setError(null)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const trimmedQuestion = question.trim()

    if (!trimmedQuestion || loading) {
      return
    }

    setError(null)
    setQuestion('')

    let conversation = activeConversation

    if (!conversation) {
      conversation = createDeenAiConversation(trimmedQuestion)
    }

    const isFirstMessage = conversation.messages.length === 0

    const userMessage: DeenAiMessage = {
      id: createMessageId(),
      role: 'user',
      content: trimmedQuestion,
    }

    const conversationWithUserMessage: DeenAiConversation = {
      ...conversation,
      title: isFirstMessage
        ? getConversationTitle(trimmedQuestion)
        : conversation.title,
      messages: [...conversation.messages, userMessage],
    }

    saveDeenAiConversation(conversationWithUserMessage)
    setActiveConversationId(conversationWithUserMessage.id)
    refreshConversations()
    setLoading(true)

    try {
      const result = await askDeenAi(trimmedQuestion)

      const assistantMessage: DeenAiMessage = {
        id: createMessageId(),
        role: 'assistant',
        content: result.answer,
        sources: result.sources,
      }

      const latestConversation = getDeenAiConversations().find(
        (item) => item.id === conversationWithUserMessage.id,
      )

      if (!latestConversation) {
        throw new Error('The conversation could not be saved.')
      }

      saveDeenAiConversation({
        ...latestConversation,
        messages: [...latestConversation.messages, assistantMessage],
      })

      refreshConversations()
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'DEEN AI could not complete the request.',
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="card page-card premium-page">
      <div className="deen-ai-header">
        <button className="back" onClick={onBack}>
          ← Back
        </button>

        <div className="deen-ai-header-actions">
          <button type="button" onClick={startNewChat} disabled={loading}>
            + New Chat
          </button>

          <button
            type="button"
            onClick={removeAllConversations}
            disabled={loading || conversations.length === 0}
          >
            Clear History
          </button>
        </div>
      </div>

      <div className="deen-ai-layout">
        <aside className="deen-ai-history">
          <div className="deen-ai-history-header">
            <div>
              <span className="eyebrow">HISTORY</span>
              <strong>Previous chats</strong>
            </div>
            <span>{conversations.length}</span>
          </div>

          {conversations.length === 0 ? (
            <div className="deen-ai-history-empty">
              Your conversations will appear here.
            </div>
          ) : (
            <div className="deen-ai-history-list">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`deen-ai-history-item ${
                    conversation.id === activeConversationId
                      ? 'deen-ai-history-item-active'
                      : ''
                  }`}
                >
                  <button
                    type="button"
                    className="deen-ai-history-select"
                    onClick={() => selectConversation(conversation.id)}
                    disabled={loading}
                  >
                    <strong>{conversation.title}</strong>
                    <span>
                      {conversation.messages.length}{' '}
                      {conversation.messages.length === 1
                        ? 'message'
                        : 'messages'}
                    </span>
                  </button>

                  <button
                    type="button"
                    className="deen-ai-history-delete"
                    onClick={() => removeConversation(conversation.id)}
                    disabled={loading}
                    aria-label={`Delete ${conversation.title}`}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </aside>

        <div className="deen-ai-chat">
          <div className="deen-ai-chat-header">
            <span className="eyebrow">DEEN AI</span>
            <h2>
              {activeConversation?.title || 'Ask about Islam.'}
            </h2>
            <p>
              Ask naturally about Quran, Hadith, fiqh, seerah, and Islamic
              concepts.
            </p>
          </div>

          <div className="deen-ai-conversation">
            {!activeConversation || activeConversation.messages.length === 0 ? (
              <div className="deen-ai-empty">
                <strong>What would you like to learn?</strong>
                <span>
                  Start a new conversation by asking DEEN AI a question.
                </span>
              </div>
            ) : (
              activeConversation.messages.map((message) => (
                <article
                  key={message.id}
                  className={`deen-ai-message deen-ai-message-${message.role}`}
                >
                  <span className="eyebrow">
                    {message.role === 'user' ? 'YOU' : 'DEEN AI'}
                  </span>

                  <div className="deen-ai-message-content">
                    {message.content}
                  </div>

                  {message.sources && message.sources.length > 0 && (
                    <div className="deen-ai-sources">
                      <strong>Sources</strong>
                      {message.sources.map((source) => (
                        <div key={`${source.reference}-${source.title}`}>
                          {source.title} — {source.reference}
                        </div>
                      ))}
                    </div>
                  )}
                </article>
              ))
            )}

            {loading && (
              <article className="deen-ai-message deen-ai-message-assistant">
                <span className="eyebrow">DEEN AI</span>
                <div className="deen-ai-message-content">Thinking…</div>
              </article>
            )}
          </div>

          {error && <div className="premium-error">{error}</div>}

          <form className="deen-ai-form" onSubmit={handleSubmit}>
            <textarea
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Ask DEEN AI anything about Islam…"
              rows={3}
              disabled={loading}
            />

            <button
              className="wide"
              type="submit"
              disabled={loading || !question.trim()}
            >
              {loading ? 'Thinking…' : 'Ask DEEN AI'}
            </button>
          </form>

          <p className="deen-ai-disclaimer">
            DEEN AI provides educational information and is not a substitute
            for qualified scholarly advice on personal fatwa matters.
          </p>
        </div>
      </div>
    </section>
  )
}
