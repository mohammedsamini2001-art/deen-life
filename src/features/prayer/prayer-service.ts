import {
  CalculationMethod,
  Coordinates,
  Madhab,
  Prayer,
  PrayerTimes,
} from 'adhan'
import type {
  CalculationMethodName,
  PrayerLocation,
  PrayerName,
  PrayerSchedule,
} from './types'

const calculationMethods: Record<
  CalculationMethodName,
  () => ReturnType<typeof CalculationMethod.MuslimWorldLeague>
> = {
  MuslimWorldLeague: CalculationMethod.MuslimWorldLeague,
  Egyptian: CalculationMethod.Egyptian,
  Karachi: CalculationMethod.Karachi,
  UmmAlQura: CalculationMethod.UmmAlQura,
  Dubai: CalculationMethod.Dubai,
  MoonsightingCommittee: CalculationMethod.MoonsightingCommittee,
  NorthAmerica: CalculationMethod.NorthAmerica,
  Kuwait: CalculationMethod.Kuwait,
  Qatar: CalculationMethod.Qatar,
  Singapore: CalculationMethod.Singapore,
  Tehran: CalculationMethod.Tehran,
  Turkey: CalculationMethod.Turkey,
  Other: CalculationMethod.Other,
}

const prayerNames: PrayerName[] = [
  'fajr',
  'sunrise',
  'dhuhr',
  'asr',
  'maghrib',
  'isha',
]

const prayerLabels: Record<PrayerName, string> = {
  fajr: 'Fajr',
  sunrise: 'Sunrise',
  dhuhr: 'Dhuhr',
  asr: 'Asr',
  maghrib: 'Maghrib',
  isha: 'Isha',
}

type AdhanPrayer = (typeof Prayer)[keyof typeof Prayer]

function prayerToAdhanPrayer(name: PrayerName): AdhanPrayer | null {
  if (name === 'sunrise') return null

  return {
    fajr: Prayer.Fajr,
    dhuhr: Prayer.Dhuhr,
    asr: Prayer.Asr,
    maghrib: Prayer.Maghrib,
    isha: Prayer.Isha,
  }[name] ?? null
}

function getPrayerTime(
  prayerTimes: PrayerTimes,
  name: PrayerName,
): Date | null {
  if (name === 'sunrise') {
    return prayerTimes.sunrise ?? null
  }

  const prayer = prayerToAdhanPrayer(name)
  return prayer && prayer !== Prayer.None ? prayerTimes.timeForPrayer(prayer) : null
}

function getPrayerName(prayer: AdhanPrayer | null): PrayerName | null {
  switch (prayer) {
    case Prayer.Fajr:
      return 'fajr'
    case Prayer.Dhuhr:
      return 'dhuhr'
    case Prayer.Asr:
      return 'asr'
    case Prayer.Maghrib:
      return 'maghrib'
    case Prayer.Isha:
      return 'isha'
    default:
      return null
  }
}

export function calculatePrayerSchedule(
  location: PrayerLocation,
  date = new Date(),
  method: CalculationMethodName = 'MuslimWorldLeague',
): PrayerSchedule {
  const coordinates = new Coordinates(location.latitude, location.longitude)
  const parameters = calculationMethods[method]()

  parameters.madhab = Madhab.Shafi

  const prayerTimes = new PrayerTimes(coordinates, date, parameters)

  return {
    date: date.toISOString().slice(0, 10),
    latitude: location.latitude,
    longitude: location.longitude,
    calculationMethod: method,
    prayers: prayerNames.map((name) => ({
      name,
      label: prayerLabels[name],
      time: getPrayerTime(prayerTimes, name),
    })),
    currentPrayer: getPrayerName(prayerTimes.currentPrayer(date)),
    nextPrayer: getPrayerName(prayerTimes.nextPrayer(date)),
  }
}

export function getCalculationMethodNames(): CalculationMethodName[] {
  return Object.keys(calculationMethods) as CalculationMethodName[]
}
