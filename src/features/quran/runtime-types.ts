export interface QuranSurahIndexEntry {
  index: number;
  nameArabic: string;
  ayahCount: number;
  file: string;
}

export interface QuranRuntimeIndex {
  source: 'tanzil';
  version: string;
  textType: 'uthmani';
  totalSurahs: number;
  totalAyahs: number;
  surahs: QuranSurahIndexEntry[];
}
