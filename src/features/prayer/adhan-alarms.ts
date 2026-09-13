import type { PrayerName, PrayerSchedule } from './types'

const SETTINGS_KEY = 'deen-life:adhan-alarms'
const ADHAN_AUDIO_URL = 'https://cdn.aladhan.com/audio/adhans/a9.mp3'

const ALARM_ELIGIBLE_PRAYERS: PrayerName[] = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha']

export type AdhanAlarmSettings = Partial<Record<PrayerName, boolean>>

function readSettings(): AdhanAlarmSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY)
    if (!raw) return {}
    const value: unknown = JSON.parse(raw)
    if (!value || typeof value !== 'object') return {}
    return value as AdhanAlarmSettings
  } catch {
    return {}
  }
}

function writeSettings(settings: AdhanAlarmSettings): void {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings))
  } catch {
    // Ignore storage failures.
  }
}

export function getAdhanAlarmSettings(): AdhanAlarmSettings {
  return readSettings()
}

export function isAlarmEligible(prayer: PrayerName): boolean {
  return ALARM_ELIGIBLE_PRAYERS.includes(prayer)
}

export function isAlarmEnabled(prayer: PrayerName): boolean {
  return Boolean(readSettings()[prayer])
}

export function setAlarmEnabled(prayer: PrayerName, enabled: boolean): AdhanAlarmSettings {
  const next = { ...readSettings(), [prayer]: enabled }
  writeSettings(next)
  return next
}

export async function requestNotificationPermission(): Promise<NotificationPermission> {
  if (!('Notification' in window)) return 'denied'
  if (Notification.permission !== 'default') return Notification.permission
  return Notification.requestPermission()
}

function playAdhan(): void {
  const audio = new Audio(ADHAN_AUDIO_URL)
  audio.play().catch(() => {
    // Autoplay can be blocked without a recent user gesture; the
    // notification itself still fires so the person isn't left unaware.
  })
}

function notifyPrayer(prayer: PrayerName, label: string): void {
  playAdhan()

  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification(`${label} — time for Salah`, {
      body: 'The Adhan is playing. Tap to open DEEN LIFE.',
      tag: `adhan-${prayer}`,
    })
  }
}

/**
 * Schedules setTimeout-based alarms for every enabled, future prayer in
 * today's schedule. Only fires while the app/PWA is open in the
 * foreground or background tab -- browsers do not allow web pages to
 * wake up and play audio while fully closed, so this is not a true
 * OS-level alarm. Returns a cleanup function that clears all timers.
 */
export function scheduleAdhanAlarms(
  schedule: PrayerSchedule,
  labels: Record<PrayerName, string>,
): () => void {
  const settings = readSettings()
  const now = Date.now()
  const timers: number[] = []

  for (const prayer of schedule.prayers) {
    if (!isAlarmEligible(prayer.name)) continue
    if (!settings[prayer.name]) continue
    if (!prayer.time) continue

    const delay = prayer.time.getTime() - now
    if (delay <= 0 || delay > 24 * 60 * 60 * 1000) continue

    const timerId = window.setTimeout(() => {
      notifyPrayer(prayer.name, labels[prayer.name])
    }, delay)

    timers.push(timerId)
  }

  return () => {
    timers.forEach(id => window.clearTimeout(id))
  }
}
