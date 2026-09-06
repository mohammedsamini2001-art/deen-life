import type { QuranAudioTrack, QuranReciter } from './types'

interface QuranAudioProviderConfig {
  edition: string
  bitrate: 32 | 40 | 48 | 64 | 128 | 192
  description: string
}

const ISLAMIC_NETWORK_CDN =
  'https://cdn.islamic.network/quran/audio-surah'

/**
 * Verified against the live Islamic Network surah-audio CDN.
 *
 * IMPORTANT:
 * - Surah numbers are 1..114 and are NOT zero-padded.
 * - Bitrate is configured per edition.
 * - Do not add an edition here unless its live CDN path has been verified.
 */
const PROVIDERS: Record<string, QuranAudioProviderConfig> = {
  'ar.alafasy': {
    edition: 'ar.alafasy',
    bitrate: 128,
    description:
      'Mishary Rashid Alafasy — verified Islamic Network surah audio.',
  },

  'ar.misharyrashidalafasy': {
    edition: 'ar.misharyrashidalafasy',
    bitrate: 128,
    description:
      'Mishary Rashid Alafasy — verified Islamic Network surah audio edition.',
  },

  'ar.abdulbasitmurattal': {
    edition: 'ar.abdulbasitmurattal',
    bitrate: 128,
    description:
      'Abdul Basit Abdul Samad — Murattal — verified Islamic Network surah audio.',
  },

  'ar.abdulbasitmujawwad': {
    edition: 'ar.abdulbasitmujawwad',
    bitrate: 128,
    description:
      'Abdul Basit Abdul Samad — Mujawwad — verified Islamic Network surah audio.',
  },

  'ar.saudalshuraim': {
    edition: 'ar.saudalshuraim',
    bitrate: 128,
    description:
      'Saud Al-Shuraim — verified Islamic Network surah audio.',
  },
}

const RECITERS: QuranReciter[] = [
  {
    id: 'ar.alafasy',
    name: 'Mishary Rashid Alafasy',
    language: 'ar',
    description: PROVIDERS['ar.alafasy'].description,
    isFree: true,
  },
  {
    id: 'ar.misharyrashidalafasy',
    name: 'Mishary Rashid Alafasy',
    language: 'ar',
    description: PROVIDERS['ar.misharyrashidalafasy'].description,
    isFree: true,
  },
  {
    id: 'ar.abdulbasitmurattal',
    name: 'Abdul Basit Abdul Samad — Murattal',
    language: 'ar',
    description: PROVIDERS['ar.abdulbasitmurattal'].description,
    isFree: true,
  },
  {
    id: 'ar.abdulbasitmujawwad',
    name: 'Abdul Basit Abdul Samad — Mujawwad',
    language: 'ar',
    description: PROVIDERS['ar.abdulbasitmujawwad'].description,
    isFree: true,
  },
  {
    id: 'ar.saudalshuraim',
    name: 'Saud Al-Shuraim',
    language: 'ar',
    description: PROVIDERS['ar.saudalshuraim'].description,
    isFree: true,
  },
]

export function getQuranReciters(): QuranReciter[] {
  return RECITERS
}

export function getQuranAudioTrack(
  reciterId: string,
  surahIndex: number,
): QuranAudioTrack {
  const provider = PROVIDERS[reciterId]

  if (!provider) {
    throw new Error('Unknown Qur’an reciter.')
  }

  if (!Number.isInteger(surahIndex) || surahIndex < 1 || surahIndex > 114) {
    throw new Error('Qur’an surah index must be between 1 and 114.')
  }

  return {
    reciterId,
    surahIndex,
    audioUrl: `${ISLAMIC_NETWORK_CDN}/${provider.bitrate}/${provider.edition}/${surahIndex}.mp3`,
  }
}

/**
 * Single place to gate content by tier. Today every reciter is free.
 * When Premium adds translation-audio reciters or transcript tracks,
 * mark them isFree: false above and they're automatically locked
 * wherever this helper is used -- no UI changes needed.
 */
export function isPremiumReciter(reciter: QuranReciter): boolean {
  return !reciter.isFree
}
