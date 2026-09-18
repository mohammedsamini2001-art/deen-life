import { useState } from 'react'
import type { FormEvent } from 'react'
import { isPremiumActive } from '../premium/premium-entitlement'
import { askDeenAi } from './ai-service'
import type { DeenAiMessage } from './types'

interface DeenAiScreenProps {
  onBack: () => void
  onOpenPremium: () => void
}

function createMessageId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`
}

export default function DeenAiScreen({
  onBack,
  onOpenPremium,
}: DeenAiScreenProps) {
  const [messages, setMessages] = useState<DeenAiMessage[]>([])
  const [question, setQuestion] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

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

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const trimmedQuestion = question.trim()

    if (!trimmedQuestion || loading) {
      return
    }

    setError(null)
    setQuestion('')

    const userMessage: DeenAiMessage = {
      id: createMessageId(),
      role: 'user',
      content: trimmedQuestion,
    }

    setMessages((current) => [...current, userMessage])
    setLoading(true)

    try {
      const result = await askDeenAi(trimmedQuestion)

      const assistantMessage: DeenAiMessage = {
        id: createMessageId(),
        role: 'assistant',
        content: result.answer,
        sources: result.sources,
      }

      setMessages((current) => [...current, assistantMessage])
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
      <button className="back" onClick={onBack}>
        ← Back
      </button>

      <span className="eyebrow">DEEN AI</span>
      <h2>Ask about Islam.</h2>
      <p>
        Ask naturally. DEEN AI can explain Islamic concepts, Quran, Hadith,
        fiqh, seerah, and related questions clearly and respectfully.
      </p>

      <div className="deen-ai-conversation">
        {messages.length === 0 && (
          <div className="deen-ai-empty">
            <strong>What would you like to learn?</strong>
            <span>
              Try asking about a verse, a hadith, a fiqh question, or an
              Islamic concept.
            </span>
          </div>
        )}

        {messages.map((message) => (
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
        ))}

        {loading && (
          <article className="deen-ai-message deen-ai-message-assistant">
            <span className="eyebrow">DEEN AI</span>
            <div className="deen-ai-message-content">
              Thinking…
            </div>
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
        DEEN AI provides educational information and is not a substitute for
        qualified scholarly advice on personal fatwa matters.
      </p>
    </section>
  )
}
