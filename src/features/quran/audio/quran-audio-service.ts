import type { QuranAudioTrack, QuranReciter } from './types'

const RECITERS: QuranReciter[] = [
  {
    id: 'default',
    name: 'Primary Reciter',
    language: 'ar',
    description: 'Qur’an recitation for the DEEN LIFE listening experience.',
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
  const reciter = RECITERS.find(item => item.id === reciterId)

  if (!reciter) {
    throw new Error('Unknown Qur’an reciter.')
  }

  if (!Number.isInteger(surahIndex) || surahIndex < 1 || surahIndex > 114) {
    throw new Error('Qur’an surah index must be between 1 and 114.')
  }

  throw new Error(
    'Qur’an audio source has not been configured yet.',
  )
}
