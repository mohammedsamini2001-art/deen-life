export const KAABA_LATITUDE = 21.422487
export const KAABA_LONGITUDE = 39.826206

export interface Coordinates {
  latitude: number
  longitude: number
}

export interface QiblaResult {
  bearing: number
  distanceKm: number
}

function toRadians(value: number): number {
  return value * (Math.PI / 180)
}

function toDegrees(value: number): number {
  return value * (180 / Math.PI)
}

function normalizeDegrees(value: number): number {
  return ((value % 360) + 360) % 360
}

export function calculateQibla(coordinates: Coordinates): QiblaResult {
  const latitude = toRadians(coordinates.latitude)
  const kaabaLatitude = toRadians(KAABA_LATITUDE)
  const longitudeDifference = toRadians(
    KAABA_LONGITUDE - coordinates.longitude,
  )

  const y = Math.sin(longitudeDifference)
  const x =
    Math.cos(latitude) * Math.tan(kaabaLatitude) -
    Math.sin(latitude) * Math.cos(longitudeDifference)

  const bearing = normalizeDegrees(toDegrees(Math.atan2(y, x)))

  const earthRadiusKm = 6371
  const deltaLatitude = kaabaLatitude - latitude
  const deltaLongitude = longitudeDifference

  const a =
    Math.sin(deltaLatitude / 2) ** 2 +
    Math.cos(latitude) *
      Math.cos(kaabaLatitude) *
      Math.sin(deltaLongitude / 2) ** 2

  const distanceKm =
    earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return {
    bearing,
    distanceKm,
  }
}

export function angularDifference(first: number, second: number): number {
  const difference = Math.abs(normalizeDegrees(first) - normalizeDegrees(second))
  return Math.min(difference, 360 - difference)
}

export function formatBearing(bearing: number): string {
  return `${Math.round(normalizeDegrees(bearing))}°`
}

export function getCardinalDirection(bearing: number): string {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
  return directions[Math.round(normalizeDegrees(bearing) / 45) % 8]
}

export function formatDistance(distanceKm: number): string {
  if (distanceKm < 1) {
    return `${Math.round(distanceKm * 1000)} m`
  }

  return `${Math.round(distanceKm).toLocaleString()} km`
}
