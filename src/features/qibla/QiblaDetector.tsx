import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  angularDifference,
  calculateQibla,
  formatBearing,
  formatDistance,
  getCardinalDirection,
} from './qibla-service'

interface QiblaDetectorProps {
  onBack: () => void
}

type SensorStatus =
  | 'idle'
  | 'requesting'
  | 'active'
  | 'permission'
  | 'unsupported'
  | 'error'

function normalizeDegrees(value: number): number {
  return ((value % 360) + 360) % 360
}

function QiblaDetector({ onBack }: QiblaDetectorProps) {
  const [coordinates, setCoordinates] = useState<{
    latitude: number
    longitude: number
  } | null>(null)

  const [heading, setHeading] = useState<number | null>(null)
  const [sensorStatus, setSensorStatus] = useState<SensorStatus>('idle')
  const [locationError, setLocationError] = useState<string | null>(null)
  const [sensorError, setSensorError] = useState<string | null>(null)
  const [permissionRequested, setPermissionRequested] = useState(false)

  const qibla = useMemo(
    () => (coordinates ? calculateQibla(coordinates) : null),
    [coordinates],
  )

  const difference =
    qibla && heading !== null
      ? angularDifference(heading, qibla.bearing)
      : null

  const facingQibla = difference !== null && difference <= 5

  const getLocation = useCallback(() => {
    setLocationError(null)

    if (!navigator.geolocation) {
      setLocationError('Location is not supported by this browser.')
      return
    }

    setSensorStatus('requesting')

    navigator.geolocation.getCurrentPosition(
      position => {
        setCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
        setLocationError(null)
        setSensorStatus('idle')
      },
      error => {
        let message = 'Unable to determine your location.'

        if (error.code === error.PERMISSION_DENIED) {
          message = 'Location permission was denied. Please allow location access.'
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          message = 'Your location is currently unavailable.'
        } else if (error.code === error.TIMEOUT) {
          message = 'Location request timed out. Please try again.'
        }

        setLocationError(message)
        setSensorStatus('error')
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 30000,
      },
    )
  }, [])

  const handleOrientation = useCallback((event: DeviceOrientationEvent) => {
    let nextHeading: number | null = null

    const iosHeading = (event as DeviceOrientationEvent & {
      webkitCompassHeading?: number
    }).webkitCompassHeading

    if (
      typeof iosHeading === 'number' &&
      Number.isFinite(iosHeading)
    ) {
      nextHeading = iosHeading
    } else if (
      typeof event.alpha === 'number' &&
      Number.isFinite(event.alpha)
    ) {
      nextHeading = normalizeDegrees(360 - event.alpha)
    }

    if (nextHeading !== null) {
      setHeading(nextHeading)
      setSensorStatus('active')
    }
  }, [])

  const startCompass = useCallback(async () => {
    setSensorError(null)

    if (!window.DeviceOrientationEvent) {
      setSensorStatus('unsupported')
      setSensorError('Your device does not provide a compatible orientation sensor.')
      return
    }

    try {
      const OrientationEvent = window.DeviceOrientationEvent as typeof DeviceOrientationEvent & {
        requestPermission?: () => Promise<'granted' | 'denied'>
      }

      if (typeof OrientationEvent.requestPermission === 'function') {
        const permission = await OrientationEvent.requestPermission()

        if (permission !== 'granted') {
          setPermissionRequested(true)
          setSensorStatus('permission')
          setSensorError('Compass permission was not granted.')
          return
        }
      }

      setPermissionRequested(true)
      window.addEventListener('deviceorientationabsolute', handleOrientation, true)
      window.addEventListener('deviceorientation', handleOrientation, true)
      setSensorStatus('active')
    } catch {
      setSensorStatus('error')
      setSensorError('The compass could not be started. Please try again.')
    }
  }, [handleOrientation])

  useEffect(() => {
    getLocation()

    return () => {
      window.removeEventListener(
        'deviceorientationabsolute',
        handleOrientation,
        true,
      )
      window.removeEventListener('deviceorientation', handleOrientation, true)
    }
  }, [getLocation, handleOrientation])

  const compassRotation =
    qibla && heading !== null ? normalizeDegrees(qibla.bearing - heading) : 0

  return (
    <section className="qibla-page">
      <div className="qibla-toolbar">
        <button className="back" onClick={onBack}>
          ← Home
        </button>
        <span className="eyebrow">QIBLA</span>
      </div>

      <header className="qibla-hero">
        <div className="qibla-hero-glow" />
        <div className="qibla-hero-content">
          <span className="eyebrow">FIND YOUR DIRECTION</span>
          <h2>Qibla Compass</h2>
          <p>
            Turn your phone naturally until the Qibla indicator points toward
            the Kaaba in Makkah.
          </p>
        </div>
      </header>

      <section className="qibla-compass-card">
        <div className={`qibla-status ${facingQibla ? 'qibla-status-success' : ''}`}>
          <span className="qibla-status-dot" />
          {facingQibla ? 'You are facing Qibla' : 'Align with Qibla'}
        </div>

        <div
          className={`qibla-compass ${heading !== null ? 'qibla-compass-active' : ''}`}
          aria-label={
            qibla
              ? `Qibla is ${formatBearing(qibla.bearing)}`
              : 'Qibla compass waiting for location'
          }
        >
          <div className="qibla-compass-ring qibla-ring-outer" />
          <div className="qibla-compass-ring qibla-ring-inner" />

          <div className="qibla-cardinal qibla-north">N</div>
          <div className="qibla-cardinal qibla-east">E</div>
          <div className="qibla-cardinal qibla-south">S</div>
          <div className="qibla-cardinal qibla-west">W</div>

          <div
            className="qibla-arrow"
            style={{ transform: `translate(-50%, -100%) rotate(${compassRotation}deg)` }}
          >
            <span className="qibla-arrow-head">◆</span>
            <span className="qibla-arrow-shaft" />
          </div>

          <div className="qibla-kaaba">
            <span>🕋</span>
            <small>QIBLA</small>
          </div>
        </div>

        <div className="qibla-reading">
          <div>
            <span className="eyebrow">QIBLA BEARING</span>
            <strong>
              {qibla ? formatBearing(qibla.bearing) : '—'}
            </strong>
            <small>
              {qibla ? getCardinalDirection(qibla.bearing) : 'Waiting for location'}
            </small>
          </div>

          <div>
            <span className="eyebrow">DISTANCE TO MAKKAH</span>
            <strong>
              {qibla ? formatDistance(qibla.distanceKm) : '—'}
            </strong>
            <small>Great-circle distance</small>
          </div>
        </div>

        {heading !== null && (
          <div className="qibla-heading">
            <span>Phone heading</span>
            <strong>{formatBearing(heading)}</strong>
            {difference !== null && (
              <small>{Math.round(difference)}° from Qibla</small>
            )}
          </div>
        )}
      </section>

      {locationError && (
        <section className="qibla-message qibla-message-error">
          <strong>Location needed</strong>
          <p>{locationError}</p>
          <button className="secondary" onClick={getLocation}>
            Try Location Again
          </button>
        </section>
      )}

      {sensorError && (
        <section className="qibla-message qibla-message-error">
          <strong>Compass access</strong>
          <p>{sensorError}</p>
        </section>
      )}

      {sensorStatus !== 'active' && !sensorError && (
        <section className="qibla-start-card">
          <div>
            <span className="eyebrow">DEVICE COMPASS</span>
            <h3>Activate Qibla detection</h3>
            <p>
              Allow location and motion access so DEEN LIFE can determine your
              direction.
            </p>
          </div>

          <button className="wide" onClick={startCompass}>
            {permissionRequested ? 'Start Compass Again' : 'Activate Compass'}
          </button>
        </section>
      )}

      {sensorStatus === 'active' && (
        <section className="qibla-tip card">
          <span className="eyebrow">CALIBRATION TIP</span>
          <p>
            Hold your phone flat and move it slowly in a figure-eight if the
            compass direction seems unstable.
          </p>
        </section>
      )}
    </section>
  )
}

export default QiblaDetector
