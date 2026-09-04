import { useEffect, useMemo, useState } from 'react'
import {
  calculatePrayerSchedule,
  getCalculationMethodNames,
} from './prayer-service'
import type {
  CalculationMethodName,
  PrayerLocation,
  PrayerName,
  PrayerSchedule,
} from './types'

type PrayerTimesProps = {
  onBack: () => void
}

const labels: Record<PrayerName, string> = {
  fajr: 'Fajr',
  sunrise: 'Sunrise',
  dhuhr: 'Dhuhr',
  asr: 'Asr',
  maghrib: 'Maghrib',
  isha: 'Isha',
}

function formatTime(time: Date | null): string {
  if (!time) return '—'

  return new Intl.DateTimeFormat(undefined, {
    hour: 'numeric',
    minute: '2-digit',
  }).format(time)
}

function formatDate(date: string): string {
  return new Intl.DateTimeFormat(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(`${date}T12:00:00`))
}

function formatMethod(method: CalculationMethodName): string {
  return method.replace(/([a-z])([A-Z])/g, '$1 $2')
}

export default function PrayerTimes({ onBack }: PrayerTimesProps) {
  const [location, setLocation] = useState<PrayerLocation | null>(null)
  const [schedule, setSchedule] = useState<PrayerSchedule | null>(null)
  const [method, setMethod] =
    useState<CalculationMethodName>('MuslimWorldLeague')
  const [locationState, setLocationState] = useState<
    'idle' | 'requesting' | 'ready' | 'denied' | 'unavailable'
  >('idle')

  const methods = useMemo(() => getCalculationMethodNames(), [])

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationState('unavailable')
      return
    }

    setLocationState('requesting')

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
        setLocationState('ready')
      },
      () => {
        setLocationState('denied')
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000,
      },
    )
  }, [])

  useEffect(() => {
    if (!location) {
      setSchedule(null)
      return
    }

    const refreshSchedule = () => {
      setSchedule(calculatePrayerSchedule(location, new Date(), method))
    }

    refreshSchedule()

    const interval = window.setInterval(refreshSchedule, 30_000)

    return () => window.clearInterval(interval)
  }, [location, method])

  function useMyLocation() {
    if (!navigator.geolocation) {
      setLocationState('unavailable')
      return
    }

    setLocationState('requesting')

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
        setLocationState('ready')
      },
      () => {
        setLocationState('denied')
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      },
    )
  }

  const displaySchedule = schedule

  return (
    <main className="page prayer-page">
      <button className="back-button" onClick={onBack}>
        ← Back
      </button>

      <section className="page-hero">
        <span className="eyebrow">YOUR SALAH SCHEDULE</span>
        <h2>Prayer Times</h2>
        <p>
          Accurate daily prayer times calculated on your device using your
          location.
        </p>
      </section>

      {locationState === 'requesting' && (
        <section className="card prayer-status-card">
          <span className="eyebrow">LOCATION</span>
          <h3>Finding your location…</h3>
          <p>
            Allow location access so DEEN LIFE can calculate prayer times for
            where you are.
          </p>
        </section>
      )}

      {(locationState === 'denied' || locationState === 'unavailable') && (
        <section className="card prayer-status-card">
          <span className="eyebrow">LOCATION NEEDED</span>
          <h3>We need your location</h3>
          <p>
            Prayer times change by place. DEEN LIFE will not guess your
            location or silently use a different city.
          </p>
          {locationState === 'denied' && (
            <button className="primary dashboard-wide-action" onClick={useMyLocation}>
              Try Location Again
            </button>
          )}
        </section>
      )}

      {displaySchedule && (
        <>
          <section className="card prayer-next-card">
            <div>
              <span className="eyebrow">NEXT PRAYER</span>
              <h3>
                {displaySchedule.nextPrayer
                  ? labels[displaySchedule.nextPrayer]
                  : 'Prayer schedule complete'}
              </h3>
              {displaySchedule.nextPrayer && (
                <strong className="prayer-next-time">
                  {formatTime(
                    displaySchedule.prayers.find(
                      (prayer) => prayer.name === displaySchedule.nextPrayer,
                    )?.time ?? null,
                  )}
                </strong>
              )}
            </div>

            <div className="prayer-current">
              <span className="eyebrow">CURRENT</span>
              <strong>
                {displaySchedule.currentPrayer
                  ? labels[displaySchedule.currentPrayer]
                  : '—'}
              </strong>
            </div>
          </section>

          <section className="card prayer-schedule-card">
            <div className="section-heading">
              <div>
                <span className="eyebrow">TODAY</span>
                <h3>{formatDate(displaySchedule.date)}</h3>
              </div>
              <button className="secondary" onClick={useMyLocation}>
                Update Location
              </button>
            </div>

            <div className="prayer-list">
              {displaySchedule.prayers.map((prayer) => (
                <div
                  className={`prayer-row ${
                    prayer.name === displaySchedule.currentPrayer
                      ? 'is-current'
                      : ''
                  }`}
                  key={prayer.name}
                >
                  <span>
                    <strong>{prayer.label}</strong>
                    {prayer.name === displaySchedule.currentPrayer && (
                      <small>Current</small>
                    )}
                  </span>
                  <time>{formatTime(prayer.time)}</time>
                </div>
              ))}
            </div>
          </section>

          <section className="card prayer-settings-card">
            <span className="eyebrow">CALCULATION METHOD</span>
            <h3>Choose your preferred method</h3>
            <p>
              Different methods can produce slightly different times. Choose
              the method you follow or that your local mosque uses.
            </p>

            <select
              value={method}
              onChange={(event) =>
                setMethod(event.target.value as CalculationMethodName)
              }
            >
              {methods.map((name) => (
                <option value={name} key={name}>
                  {formatMethod(name)}
                </option>
              ))}
            </select>
          </section>

          <p className="prayer-method-note">
            Calculated on this device with Adhan. Coordinates are used only to
            calculate the schedule.
          </p>
        </>
      )}

      {locationState === 'ready' && !displaySchedule && (
        <section className="card prayer-status-card">
          <h3>Preparing today's schedule…</h3>
        </section>
      )}

      {locationState === 'denied' && (
        <section className="card prayer-fallback-card">
          <span className="eyebrow">WHY LOCATION MATTERS</span>
          <h3>No guessed prayer times</h3>
          <p>
            Once location access is enabled, your schedule will be calculated
            from your actual coordinates.
          </p>
        </section>
      )}

      <button className="secondary dashboard-wide-action" onClick={onBack}>
        Return to Home
      </button>
    </main>
  )
}
