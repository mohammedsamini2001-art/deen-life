import type { Dua, DuaCategory } from './types'
import morningDhikr from './data/morning-dhikr.json'
import eveningDhikr from './data/evening-dhikr.json'
import dhikrAfterSalah from './data/dhikr-after-salah.json'
import dailyDua from './data/daily-dua.json'
import selectedDua from './data/selected-dua.json'

interface RawDua {
  title: string
  arabic: string
  latin: string
  translation: string
  notes?: string | null
  benefits?: string | null
  fawaid?: string | null
  source?: string | null
}

function normalize(raw: RawDua[]): Dua[] {
  return raw.map(item => ({
    title: item.title,
    arabic: item.arabic,
    latin: item.latin,
    translation: item.translation,
    notes: item.notes ?? '',
    benefits: item.benefits ?? item.fawaid ?? '',
    source: item.source ?? '',
  }))
}

const CATEGORIES: DuaCategory[] = [
  {
    slug: 'morning-dhikr',
    name: 'Morning Remembrance',
    description: 'Adhkar to start the day in remembrance of Allah.',
    duas: normalize(morningDhikr as RawDua[]),
  },
  {
    slug: 'evening-dhikr',
    name: 'Evening Remembrance',
    description: 'Adhkar to close the day in remembrance of Allah.',
    duas: normalize(eveningDhikr as RawDua[]),
  },
  {
    slug: 'dhikr-after-salah',
    name: 'After Salah',
    description: 'Remembrance recited after completing the prayer.',
    duas: normalize(dhikrAfterSalah as RawDua[]),
  },
  {
    slug: 'daily-dua',
    name: 'Daily Duas',
    description: 'Supplications for everyday moments and situations.',
    duas: normalize(dailyDua as RawDua[]),
  },
  {
    slug: 'selected-dua',
    name: 'Selected Duas',
    description: 'A curated set of supplications from the Sunnah.',
    duas: normalize(selectedDua as RawDua[]),
  },
]

export function getDuaCategories(): DuaCategory[] {
  return CATEGORIES
}

export function getDuaCategory(slug: string): DuaCategory | undefined {
  return CATEGORIES.find(category => category.slug === slug)
}
