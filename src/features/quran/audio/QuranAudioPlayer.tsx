import { useRef, useState } from 'react'
import { getQuranAudioTrack, getQuranReciters, isPremiumReciter } from './quran-audio-service'
import { getPreferredReciter, savePreferredReciter } from './quran-audio-preference'

interface QuranAudioPlayerProps {
  surahIndex: number
}

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

function QuranAudioPlayer({ surahIndex }: QuranAudioPlayerProps) {
  const reciters = getQuranReciters()
  const [selectedReciter, setSelectedReciter] = useState(
    () => getPreferredReciter() ?? reciters[0]?.id ?? '',
  )
  const [isPlaying, setIsPlaying] = useState(false)
  const [isBuffering, setIsBuffering] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const audioSrc = selectedReciter
    ? getQuranAudioTrack(selectedReciter, surahIndex).audioUrl
    : ''

  function resetPlaybackState() {
    const audio = audioRef.current
    if (audio) {
      audio.pause()
      audio.currentTime = 0
    }
    setIsPlaying(false)
    setIsBuffering(false)
    setCurrentTime(0)
    setDuration(0)
    setError(null)
  }

  function changeReciter(reciterId: string) {
    resetPlaybackState()
    setSelectedReciter(reciterId)
    savePreferredReciter(reciterId)
  }

  async function togglePlayback() {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      return
    }

    try {
      setError(null)
      setIsBuffering(true)
      await audio.play()
    } catch {
      setIsPlaying(false)
      setIsBuffering(false)
      setError('Unable to play recitation audio. Check your connection and try again.')
    }
  }

  function handleSeek(event: React.ChangeEvent<HTMLInputElement>) {
    const audio = audioRef.current
    const value = Number(event.target.value)
    if (!audio || !Number.isFinite(value)) return
    audio.currentTime = value
    setCurrentTime(value)
  }

  return (
    <div className="quran-audio-player">
      <div
        className="quran-audio-progress"
        style={{ '--progress': `${duration ? (currentTime / duration) * 100 : 0}%` } as React.CSSProperties}
      >
        <input
          className="quran-audio-seek"
          type="range"
          min={0}
          max={duration || 0}
          step={1}
          value={Math.min(currentTime, duration || 0)}
          onChange={handleSeek}
          disabled={!duration}
          aria-label="Seek recitation"
        />
      </div>

      <div className="quran-audio-row">
        <button
          className="quran-audio-toggle"
          onClick={togglePlayback}
          type="button"
          disabled={isBuffering && !isPlaying}
          aria-label={isPlaying ? 'Pause recitation' : 'Play recitation'}
        >
          {isBuffering && !isPlaying ? (
            <span className="quran-audio-spinner" aria-hidden="true" />
          ) : isPlaying ? (
            '⏸'
          ) : (
            '▶'
          )}
        </button>

        <div className="quran-audio-info">
          <select
            className="quran-reciter-select"
            value={selectedReciter}
            onChange={event => changeReciter(event.target.value)}
            aria-label="Choose reciter"
          >
            {reciters.map(reciter => (
              <option key={reciter.id} value={reciter.id} disabled={isPremiumReciter(reciter)}>
                {isPremiumReciter(reciter) ? '🔒 ' : ''}
                {reciter.name}
              </option>
            ))}
          </select>
          <span className="quran-audio-time">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>
      </div>

      {error && (
        <div className="quran-audio-error" role="alert">
          <span>{error}</span>
          <button type="button" onClick={togglePlayback}>
            Retry
          </button>
        </div>
      )}

      <audio
        ref={audioRef}
        src={audioSrc}
        preload="none"
        onPlay={() => {
          setIsPlaying(true)
          setIsBuffering(false)
        }}
        onPause={() => setIsPlaying(false)}
        onPlaying={() => setIsBuffering(false)}
        onWaiting={() => setIsBuffering(true)}
        onLoadedMetadata={event => setDuration(event.currentTarget.duration || 0)}
        onTimeUpdate={event => setCurrentTime(event.currentTarget.currentTime)}
        onEnded={() => {
          setIsPlaying(false)
          setCurrentTime(0)
        }}
        onError={() => {
          setIsPlaying(false)
          setIsBuffering(false)
          setError('Unable to load recitation audio. Check your connection and try again.')
        }}
      />
    </div>
  )
}

export default QuranAudioPlayer
