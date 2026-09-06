import { useEffect, useRef, useState } from 'react'
import { getQuranIndex, getSurah } from './quran-service'
import type { QuranRuntimeIndex } from './runtime-types'
import type { QuranSurah } from './types'
import { getQuranAudioTrack, getQuranReciters } from './audio/quran-audio-service'
import { getQuranProgress, saveQuranProgress } from './progress/quran-progress'
import { getQuranBookmarks, toggleQuranBookmark } from './bookmarks/quran-bookmarks'

interface QuranReaderProps {
  onBack: () => void
}

function QuranReader({ onBack }: QuranReaderProps) {
  const [index, setIndex] = useState<QuranRuntimeIndex | null>(null)
  const [selectedSurah, setSelectedSurah] = useState<QuranSurah | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [progress, setProgress] = useState(getQuranProgress)
  const [bookmarks, setBookmarks] = useState(getQuranBookmarks)
  const [selectedReciter, setSelectedReciter] = useState(getQuranReciters()[0]?.id ?? '')
  const [audioError, setAudioError] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    let cancelled = false

    getQuranIndex()
      .then(data => {
        if (!cancelled) {
          setIndex(data)
          setLoading(false)
        }
      })
      .catch(reason => {
        if (!cancelled) {
          setError(reason instanceof Error ? reason.message : 'Unable to load Qur’an.')
          setLoading(false)
        }
      })

    return () => {
      cancelled = true
    }
  }, [])

  function markAyah(ayahIndex: number) {
    if (!selectedSurah) return

    const next = saveQuranProgress(selectedSurah.index, ayahIndex)
    setProgress(next)
  }

  function toggleBookmark(ayahIndex: number) {
    if (!selectedSurah) return

    const next = toggleQuranBookmark(selectedSurah.index, ayahIndex)
    setBookmarks(next)
  }

  function stopAudio() {
    if (!audioRef.current) return
    audioRef.current.pause()
    audioRef.current.currentTime = 0
  }

  function getAudioUrl() {
    if (!selectedSurah || !selectedReciter) return ''
    return getQuranAudioTrack(selectedReciter, selectedSurah.index).audioUrl
  }

  async function openSurah(surahIndex: number) {
    stopAudio()
    setAudioError(null)
    setLoading(true)
    setError(null)

    try {
      const surah = await getSurah(surahIndex)
      setSelectedSurah(surah)
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Unable to load surah.')
    } finally {
      setLoading(false)
    }
  }

  if (selectedSurah) {
    const reciters = getQuranReciters()

    return (
      <section className="quran-reader">
        <div className="quran-toolbar">
          <button className="back" onClick={() => setSelectedSurah(null)}>
            ← Surahs
          </button>
          <span className="eyebrow">SURAH {selectedSurah.index}</span>
        </div>

        <header className="quran-surah-header">
          <span className="quran-surah-number">{selectedSurah.index}</span>
          <div>
            <h2>{selectedSurah.nameArabic}</h2>
            <p>{selectedSurah.ayahs.length} ayahs</p>
          </div>
        </header>

        {selectedSurah.ayahs[0]?.bismillah && (
          <div className="quran-bismillah" dir="rtl">
            {selectedSurah.ayahs[0].bismillah}
          </div>
        )}

        <div className="quran-ayah-list" dir="rtl">
          {selectedSurah.ayahs.map(ayah => (
            <article className="quran-ayah" key={ayah.index}>
              <span className="quran-ayah-number">{ayah.index}</span>
              <p>{ayah.text}</p>
              <button
                className={`quran-bookmark-button${bookmarks.some(bookmark => bookmark.surahIndex === selectedSurah.index && bookmark.ayahIndex === ayah.index) ? ' quran-bookmark-active' : ''}`}
                onClick={() => toggleBookmark(ayah.index)}
                aria-label={bookmarks.some(bookmark => bookmark.surahIndex === selectedSurah.index && bookmark.ayahIndex === ayah.index) ? 'Remove bookmark' : 'Bookmark ayah'}
                type="button"
              >
                {bookmarks.some(bookmark => bookmark.surahIndex === selectedSurah.index && bookmark.ayahIndex === ayah.index) ? '★' : '☆'}
              </button>
            </article>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="quran-reader">
      <header className="quran-library-header">
        <img
          className="quran-library-scene"
          src="/images/deen-life/quran-hero.jpg"
          alt=""
        />
        <div className="quran-library-overlay" />
        <div className="quran-library-content">
          <button className="back" onClick={onBack}>← Back</button>
          <span className="eyebrow">THE NOBLE QUR’AN</span>
          <h2>Qur’an</h2>
          <p>Read the verified Uthmani Arabic text, with surahs loaded on demand for an offline-first experience.</p>
        </div>
      </header>

      {loading && <div className="quran-state">Loading Qur’an…</div>}

      {error && (
        <div className="quran-state quran-error" role="alert">
          {error}
        </div>
      )}

      {index && !loading && !error && (
        <>
          {progress && (
            <button
              className="quran-continue-card"
              onClick={() => openSurah(progress.surahIndex)}
            >
              <span className="quran-continue-label">CONTINUE READING · FREE</span>
              <strong>
                {index.surahs.find(surah => surah.index === progress.surahIndex)?.nameEnglish ?? `Surah ${progress.surahIndex}`}
              </strong>
              <span>Continue from Ayah {progress.ayahIndex}</span>
              <span className="quran-continue-arrow">→</span>
            </button>
          )}

          <div className="quran-stats">
            <div>
              <strong>{index.totalSurahs}</strong>
              <span>Surahs</span>
            </div>
            <div>
              <strong>{index.totalAyahs.toLocaleString()}</strong>
              <span>Ayahs</span>
            </div>
            <div>
              <strong>{index.version}</strong>
              <span>Tanzil</span>
            </div>
          </div>

          <div className="quran-surah-list">
            {index.surahs.map(surah => (
              <button
                className="quran-surah-card"
                key={surah.index}
                onClick={() => openSurah(surah.index)}
              >
                <span className="quran-surah-number">{surah.index}</span>
                <span className="quran-surah-info">
                  <strong>{surah.nameArabic}</strong>
                  <small>{surah.ayahCount} ayahs</small>
                </span>
                <span className="quran-surah-arrow">→</span>
              </button>
            ))}
          </div>
        </>
      )}
    </section>
  )
}

export default QuranReader
