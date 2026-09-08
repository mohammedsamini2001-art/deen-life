export interface Dua {
  title: string
  arabic: string
  latin: string
  translation: string
  notes: string
  benefits: string
  source: string
}

export interface DuaCategory {
  slug: string
  name: string
  description: string
  duas: Dua[]
}
