const QF_ENV = process.env.QF_ENV === 'production'
  ? 'production'
  : 'prelive'

const OAUTH_BASE =
  QF_ENV === 'production'
    ? 'https://oauth2.quran.foundation'
    : 'https://prelive-oauth2.quran.foundation'

const API_BASE =
  QF_ENV === 'production'
    ? 'https://apis.quran.foundation/content/api/v4'
    : 'https://apis-prelive.quran.foundation/content/api/v4'

const CLIENT_ID = process.env.QF_CLIENT_ID
const CLIENT_SECRET = process.env.QF_CLIENT_SECRET

interface TokenResponse {
  access_token: string
  token_type: string
  expires_in: number
}

let cachedToken: {
  accessToken: string
  expiresAt: number
} | null = null

async function getAccessToken(): Promise<string> {
  if (!CLIENT_ID || !CLIENT_SECRET) {
    throw new Error('Quran Foundation API credentials are not configured.')
  }

  if (cachedToken && cachedToken.expiresAt > Date.now() + 60_000) {
    return cachedToken.accessToken
  }

  const credentials = Buffer.from(
    `${CLIENT_ID}:${CLIENT_SECRET}`,
  ).toString('base64')

  const response = await fetch(`${OAUTH_BASE}/oauth2/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      scope: 'content',
    }),
  })

  if (!response.ok) {
    throw new Error(
      `Quran Foundation authentication failed: ${response.status}`,
    )
  }

  const data = (await response.json()) as TokenResponse

  if (
    typeof data.access_token !== 'string' ||
    typeof data.expires_in !== 'number'
  ) {
    throw new Error('Invalid Quran Foundation authentication response.')
  }

  cachedToken = {
    accessToken: data.access_token,
    expiresAt: Date.now() + data.expires_in * 1000,
  }

  return data.access_token
}

export async function quranFoundationFetch(
  path: string,
  init: RequestInit = {},
): Promise<Response> {
  const token = await getAccessToken()

  const headers = new Headers(init.headers)

  headers.set('x-auth-token', token)
  headers.set('x-client-id', CLIENT_ID!)
  headers.set('Accept', 'application/json')

  return fetch(`${API_BASE}${path}`, {
    ...init,
    headers,
  })
}
