export type PrayerName =
  | 'fajr'
  | 'sunrise'
  | 'dhuhr'
  | 'asr'
  | 'maghrib'
  | 'isha'

export type CalculationMethodName =
  | 'MuslimWorldLeague'
  | 'Egyptian'
  | 'Karachi'
  | 'UmmAlQura'
  | 'Dubai'
  | 'MoonsightingCommittee'
  | 'NorthAmerica'
  | 'Kuwait'
  | 'Qatar'
  | 'Singapore'
  | 'Tehran'
  | 'Turkey'
  | 'Other'

export type PrayerTimeEntry = {
  name: PrayerName
  label: string
  time: Date | null
}

export type PrayerSchedule = {
  date: string
  latitude: number
  longitude: number
  calculationMethod: CalculationMethodName
  prayers: PrayerTimeEntry[]
  currentPrayer: PrayerName | null
  nextPrayer: PrayerName | null
}

export type PrayerLocation = {
  latitude: number
  longitude: number
}
