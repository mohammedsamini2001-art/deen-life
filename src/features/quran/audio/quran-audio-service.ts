import type { QuranAudioTrack, QuranReciter } from './types'

interface QuranAudioProviderConfig {
  buildUrl: (surahIndex: number) => string
  description: string
}

const ISLAMIC_NETWORK_CDN = 'https://cdn.islamic.network/quran/audio-surah'

function islamicNetworkUrl(edition: string, bitrate: 32 | 40 | 48 | 64 | 128 | 192) {
  return (surahIndex: number) =>
    `${ISLAMIC_NETWORK_CDN}/${bitrate}/${edition}/${surahIndex}.mp3`
}

function mp3QuranUrl(server: number, folder: string) {
  return (surahIndex: number) =>
    `https://server${server}.mp3quran.net/${folder}/${String(surahIndex).padStart(3, '0')}.mp3`
}

/**
 * Every entry here has been checked against its live CDN path
 * (curl -o /dev/null -w '%{http_code}' on surah 1) before being added.
 *
 * IMPORTANT: Do not add a reciter here unless its live path has been
 * verified the same way -- a wrong edition/folder name fails silently
 * as a 403/404 and the player's error+retry UI is the only sign.
 */
const PROVIDERS: Record<string, QuranAudioProviderConfig> = {
  'ar.alafasy': {
    buildUrl: islamicNetworkUrl('ar.alafasy', 128),
    description: 'Mishary Rashid Alafasy -- verified Islamic Network surah audio.',
  },

  'ar.abdulbasitmurattal': {
    buildUrl: islamicNetworkUrl('ar.abdulbasitmurattal', 128),
    description:
      'Abdul Basit Abdul Samad -- Murattal -- verified Islamic Network surah audio.',
  },

  'ar.saudalshuraim': {
    buildUrl: islamicNetworkUrl('ar.saudalshuraim', 128),
    description: 'Saud Al-Shuraim -- verified Islamic Network surah audio.',
  },

  'ar.sudais': {
    buildUrl: mp3QuranUrl(11, 'sds'),
    description: 'Abdur-Rahman as-Sudais -- verified MP3Quran.net surah audio.',
  },

  'ar.mahermuaiqly': {
    buildUrl: mp3QuranUrl(12, 'maher'),
    description: 'Maher Al-Muaiqly -- verified MP3Quran.net surah audio.',
  },

  'ar.husary': {
    buildUrl: mp3QuranUrl(13, 'husr'),
    description: 'Mahmoud Khalil Al-Husary -- verified MP3Quran.net surah audio.',
  },

  'ar.saadalghamdi': {
    buildUrl: mp3QuranUrl(7, 's_gmd'),
    description: 'Saad Al-Ghamdi -- verified MP3Quran.net surah audio.',
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
    id: 'ar.abdulbasitmurattal',
    name: 'Abdul Basit (Murattal)',
    language: 'ar',
    description: PROVIDERS['ar.abdulbasitmurattal'].description,
    isFree: true,
  },
  {
    id: 'ar.sudais',
    name: 'Abdur-Rahman as-Sudais',
    language: 'ar',
    description: PROVIDERS['ar.sudais'].description,
    isFree: true,
  },
  {
    id: 'ar.saudalshuraim',
    name: 'Saud Al-Shuraim',
    language: 'ar',
    description: PROVIDERS['ar.saudalshuraim'].description,
    isFree: true,
  },
  {
    id: 'ar.mahermuaiqly',
    name: 'Maher Al-Muaiqly',
    language: 'ar',
    description: PROVIDERS['ar.mahermuaiqly'].description,
    isFree: true,
  },
  {
    id: 'ar.husary',
    name: 'Mahmoud Khalil Al-Husary',
    language: 'ar',
    description: PROVIDERS['ar.husary'].description,
    isFree: true,
  },
  {
    id: 'ar.saadalghamdi',
    name: 'Saad Al-Ghamdi',
    language: 'ar',
    description: PROVIDERS['ar.saadalghamdi'].description,
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
    audioUrl: provider.buildUrl(surahIndex),
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
