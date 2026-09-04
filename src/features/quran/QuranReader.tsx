import { useEffect, useState } from 'react'
import { getQuranIndex, getSurah } from './quran-service'
import type { QuranRuntimeIndex } from './runtime-types'
import type { QuranSurah } from './types'

interface QuranReaderProps {
  onBack: () => void
}

function QuranReader({ onBack }: QuranReaderProps) {
  const [index, setIndex] = useState<QuranRuntimeIndex | null>(null)
  const [selectedSurah, setSelectedSurah] = useState<QuranSurah | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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

  async function openSurah(surahIndex: number) {
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

        <div className="quran-ayah-list" dir="rtl">
          {selectedSurah.ayahs.map(ayah => (
            <article className="quran-ayah" key={ayah.index}>
              <span className="quran-ayah-number">{ayah.index}</span>
              <p>{ayah.text}</p>
            </article>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="quran-reader">
      <header className="quran-library-header">
        <button className="back" onClick={onBack}>← Back</button>
        <span className="eyebrow">THE NOBLE QUR’AN</span>
        <h2>Qur’an</h2>
        <p>Read the verified Uthmani Arabic text, with surahs loaded on demand for an offline-first experience.</p>
      </header>

      {loading && <div className="quran-state">Loading Qur’an…</div>}

      {error && (
        <div className="quran-state quran-error" role="alert">
          {error}
        </div>
      )}

      {index && !loading && !error && (
        <>
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
