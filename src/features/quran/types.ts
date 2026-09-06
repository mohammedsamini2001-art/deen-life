export interface QuranAyah {
  index: number;
  text: string;
  bismillah?: string;
}

export interface QuranSurah {
  index: number;
  nameArabic: string;
  ayahs: QuranAyah[];
}

export interface QuranDataset {
  source: 'tanzil';
  version: string;
  textType: 'uthmani';
  surahs: QuranSurah[];
  totalAyahs: number;
}
