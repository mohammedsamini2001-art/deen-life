import type { AiMessage, AiProvider } from './ai-provider'

const CLOUDFLARE_MODEL = '@cf/zai-org/glm-4.7-flash'

export const cloudflareProvider: AiProvider = {
  async generate(messages: AiMessage[]) {
    const accountId = process.env.CLOUDFLARE_ACCOUNT_ID
    const apiToken = process.env.CLOUDFLARE_API_TOKEN

    if (!accountId || !apiToken) {
      throw new Error('Cloudflare AI environment variables are not configured.')
    }

    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/v1/chat/completions`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: CLOUDFLARE_MODEL,
          messages,
          stream: false,
        }),
      },
    )

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(
        `Cloudflare AI request failed (${response.status}): ${errorText}`,
      )
    }

    const data = (await response.json()) as {
      choices?: Array<{
        message?: {
          content?: string
        }
      }>
    }

    const text = data.choices?.[0]?.message?.content?.trim()

    if (!text) {
      throw new Error('Cloudflare AI returned an empty response.')
    }

    return { text }
  },
}
