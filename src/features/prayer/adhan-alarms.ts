import { LocalNotifications } from '@capacitor/local-notifications'
import type { PrayerName, PrayerSchedule } from './types'

const SETTINGS_KEY = 'deen-life:adhan-alarms'
const ADHAN_CHANNEL_ID = 'adhan'
type AlarmPrayer = 'fajr' | 'dhuhr' | 'asr' | 'maghrib' | 'isha'

const ALARM_ELIGIBLE_PRAYERS: AlarmPrayer[] = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha']

const PRAYER_NOTIFICATION_IDS: Record<(typeof ALARM_ELIGIBLE_PRAYERS)[number], number> = {
  fajr: 1001,
  dhuhr: 1002,
  asr: 1003,
  maghrib: 1004,
  isha: 1005,
}

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

export function isAlarmEligible(prayer: PrayerName): prayer is AlarmPrayer {
  return ALARM_ELIGIBLE_PRAYERS.includes(prayer as AlarmPrayer)
}

export function isAlarmEnabled(prayer: PrayerName): boolean {
  return Boolean(readSettings()[prayer])
}

export function setAlarmEnabled(
  prayer: PrayerName,
  enabled: boolean,
): AdhanAlarmSettings {
  const next = { ...readSettings(), [prayer]: enabled }
  writeSettings(next)
  return next
}

export async function requestNotificationPermission(): Promise<NotificationPermission> {
  const permission = await LocalNotifications.requestPermissions()

  if (permission.display === 'granted') return 'granted'
  if (permission.display === 'denied') return 'denied'
  return 'default'
}

async function ensureAdhanChannel(): Promise<void> {
  await LocalNotifications.createChannel({
    id: ADHAN_CHANNEL_ID,
    name: 'Adhan',
    description: 'Prayer-time Adhan notifications',
    sound: 'adhan.mp3',
    importance: 4,
    vibration: true,
  })
}

async function cancelAdhanNotifications(): Promise<void> {
  await LocalNotifications.cancel({
    notifications: Object.values(PRAYER_NOTIFICATION_IDS).map(id => ({ id })),
  })
}

/**
 * Schedules native Android notifications for every enabled, future prayer
 * in today's calculated schedule.
 *
 * The notification is scheduled by Android, so it can fire when DEEN LIFE
 * is closed. The Adhan sound is bundled locally in res/raw/adhan.mp3.
 */
export function scheduleAdhanAlarms(
  schedule: PrayerSchedule,
  labels: Record<PrayerName, string>,
): () => void {
  void (async () => {
    try {
      await ensureAdhanChannel()
      await cancelAdhanNotifications()

      const settings = readSettings()
      const notifications = []

      for (const prayer of schedule.prayers) {
        if (!isAlarmEligible(prayer.name)) continue
        if (!settings[prayer.name]) continue
        if (!prayer.time) continue

        const when = prayer.time.getTime()
        if (when <= Date.now()) continue

        notifications.push({
          id: PRAYER_NOTIFICATION_IDS[prayer.name],
          title: `${labels[prayer.name]} — time for Salah`,
          body: 'The Adhan is playing. Tap to open DEEN LIFE.',
          channelId: ADHAN_CHANNEL_ID,
          sound: 'adhan.mp3',
          schedule: {
            at: prayer.time,
            allowWhileIdle: true,
          },
          extra: {
            prayer: prayer.name,
          },
        })
      }

      if (notifications.length > 0) {
        const result = await LocalNotifications.schedule({ notifications })

        if (result.warning) {
          console.warn(
            'DEEN LIFE Adhan scheduling warning:',
            result.warning.message,
          )
        }
      }
    } catch (error) {
      console.error('DEEN LIFE Adhan scheduling failed:', error)
    }
  })()

  return () => {
    void cancelAdhanNotifications().catch(error => {
      console.error('DEEN LIFE Adhan cancellation failed:', error)
    })
  }
}
