export interface QuranReciter {
  id: string;
  name: string;
  language: 'ar';
  description: string;
  isFree: boolean;
}

export interface QuranAudioTrack {
  reciterId: string;
  surahIndex: number;
  audioUrl: string;
}

export interface QuranAudioState {
  status: 'idle' | 'loading' | 'playing' | 'paused' | 'error';
  surahIndex: number | null;
  reciterId: string | null;
  error: string | null;
}
