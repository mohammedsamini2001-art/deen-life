import type { QuranAyah, QuranSurah } from './types';
import type { QuranRuntimeIndex } from './runtime-types';

const QURAN_BASE_PATH = '/quran/surahs';
const TOTAL_SURAHS = 114;
const TOTAL_AYAHS = 6236;

function isQuranAyah(value: unknown): value is QuranAyah {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const ayah = value as Partial<QuranAyah>;

  return (
    typeof ayah.index === 'number' &&
    Number.isInteger(ayah.index) &&
    typeof ayah.text === 'string' &&
    ayah.text.length > 0
  );
}

function assertRuntimeIndex(value: unknown): asserts value is QuranRuntimeIndex {
  if (!value || typeof value !== 'object') {
    throw new Error('Invalid Qur’an runtime index.');
  }

  const index = value as Partial<QuranRuntimeIndex>;

  if (
    index.source !== 'tanzil' ||
    index.textType !== 'uthmani' ||
    typeof index.version !== 'string' ||
    index.totalSurahs !== TOTAL_SURAHS ||
    index.totalAyahs !== TOTAL_AYAHS ||
    !Array.isArray(index.surahs) ||
    index.surahs.length !== TOTAL_SURAHS ||
    !index.surahs.every((surah) =>
      surah &&
      typeof surah === 'object' &&
      typeof surah.index === 'number' &&
      typeof surah.nameArabic === 'string' &&
      typeof surah.nameEnglish === 'string' &&
      typeof surah.nameEnglishTranslation === 'string' &&
      typeof surah.ayahCount === 'number' &&
      (surah.revelationType === 'Meccan' || surah.revelationType === 'Medinan') &&
      typeof surah.file === 'string'
    )
  ) {
    throw new Error('Invalid Qur’an runtime index metadata.');
  }
}

function assertSurah(value: unknown): asserts value is QuranSurah {
  if (!value || typeof value !== 'object') {
    throw new Error('Invalid Qur’an surah data.');
  }

  const surah = value as Partial<QuranSurah>;

  if (
    typeof surah.index !== 'number' ||
    !Number.isInteger(surah.index) ||
    surah.index < 1 ||
    surah.index > TOTAL_SURAHS ||
    typeof surah.nameArabic !== 'string' ||
    surah.nameArabic.length === 0 ||
    !Array.isArray(surah.ayahs) ||
    surah.ayahs.length === 0 ||
    !surah.ayahs.every(isQuranAyah)
  ) {
    throw new Error('Invalid Qur’an surah structure.');
  }
}

export async function getQuranIndex(): Promise<QuranRuntimeIndex> {
  const response = await fetch(`${QURAN_BASE_PATH}/index.json`);

  if (!response.ok) {
    throw new Error(`Failed to load Qur’an index: ${response.status}`);
  }

  const data: unknown = await response.json();
  assertRuntimeIndex(data);

  return data;
}

export async function getSurah(index: number): Promise<QuranSurah> {
  if (!Number.isInteger(index) || index < 1 || index > TOTAL_SURAHS) {
    throw new Error('Qur’an surah index must be between 1 and 114.');
  }

  const filename = `${String(index).padStart(3, '0')}.json`;
  const response = await fetch(`${QURAN_BASE_PATH}/${filename}`);

  if (!response.ok) {
    throw new Error(`Failed to load Qur’an surah ${index}: ${response.status}`);
  }

  const data: unknown = await response.json();
  assertSurah(data);

  return data;
}
