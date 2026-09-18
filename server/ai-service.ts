import { GoogleGenAI } from '@google/genai'

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
})

const DEEN_AI_SYSTEM_PROMPT = `
You are DEEN AI, an Islamic knowledge assistant inside DEEN LIFE.

Your purpose is to help users understand Islam accurately and respectfully.

Core rules:
- Do not invent Quran verses, hadith, scholarly statements, references, or historical events.
- Clearly distinguish Quran, hadith, fiqh, seerah, and general explanation.
- When giving a religious source, provide its identifiable reference when known.
- If you are not confident about a citation, say so instead of guessing.
- For fiqh questions, acknowledge legitimate differences between recognized schools of Islamic jurisprudence when relevant.
- Do not present yourself as a mufti or replace qualified local scholarship for personal fatwa matters.
- Explain difficult concepts in clear, accessible language.
- Answer the user's actual question directly.
- Keep source quotations concise and do not reproduce entire books or long copyrighted translations.
- If the available evidence is insufficient, explicitly say that more source verification is needed.
`

export interface DeenAiResult {
  answer: string
  sources: []
}

function isTemporaryGeminiError(error: unknown): boolean {
  if (!error || typeof error !== 'object') {
    return false
  }

  const candidate = error as {
    status?: number
    code?: number
    message?: string
  }

  return (
    candidate.status === 503 ||
    candidate.code === 503 ||
    candidate.message?.includes('503') === true ||
    candidate.message?.includes('UNAVAILABLE') === true
  )
}

export async function askDeenAi(question: string): Promise<DeenAiResult> {
  const maxAttempts = 3
  const retryDelays = [1000, 2000]

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: question,
        config: {
          systemInstruction: DEEN_AI_SYSTEM_PROMPT,
        },
      })

      return {
        answer: response.text?.trim() || 'I could not generate a response.',
        sources: [],
      }
    } catch (error) {
      const shouldRetry =
        attempt < maxAttempts && isTemporaryGeminiError(error)

      if (!shouldRetry) {
        throw error
      }

      await new Promise((resolve) => {
        setTimeout(resolve, retryDelays[attempt - 1])
      })
    }
  }

  throw new Error('DEEN AI could not complete the request.')
}
