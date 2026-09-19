import { apiFetch } from '../../lib/api'
import { getDeviceToken } from '../premium/device-token'
import type { DeenAiResponse } from './types'

export async function askDeenAi(question: string): Promise<DeenAiResponse> {
  const deviceToken = getDeviceToken()

  return apiFetch<DeenAiResponse>('/api/ai/ask', {
    method: 'POST',
    body: JSON.stringify({
      deviceToken,
      question,
    }),
  })
}
