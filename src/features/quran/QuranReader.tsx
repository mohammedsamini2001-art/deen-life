import { useEffect, useState } from 'react'
import { getQuranIndex, getSurah } from './quran-service'
import type { QuranRuntimeIndex } from './runtime-types'
import type { QuranSurah } from './types'
import QuranAudioPlayer from './audio/QuranAudioPlayer'
import { getQuranProgress, saveQuranProgress } from './progress/quran-progress'
import { getQuranBookmarks, toggleQuranBookmark } from './bookmarks/quran-bookmarks'
import {
  getQuranTranslationSurah,
  getQuranTranslations,
  isPremiumTranslation,
  type QuranTranslation,
  type QuranTranslationSurah,
} from './translations/quran-translation-service'
import { isPremiumActive } from '../premium/premium-service'

interface QuranReaderProps {
  onBack: () => void
}

function QuranReader({ onBack }: QuranReaderProps) {
  const [index, setIndex] = useState<QuranRuntimeIndex | null>(null)
  const [selectedSurah, setSelectedSurah] = useState<QuranSurah | null>(null)
  const [loading, setLoading] = useState(true)
  const [translationLoading, setTranslationLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [translationError, setTranslationError] = useState<string | null>(null)
  const [progress, setProgress] = useState(getQuranProgress)
  const [bookmarks, setBookmarks] = useState(getQuranBookmarks)
  const [selectedTranslation, setSelectedTranslation] = useState('')
  const [translationSurah, setTranslationSurah] =
    useState<QuranTranslationSurah | null>(null)
  const [translations, setTranslations] = useState<QuranTranslation[]>([])
  const [translationCatalogueLoading, setTranslationCatalogueLoading] =
    useState(true)
  const [translationCatalogueError, setTranslationCatalogueError] =
    useState<string | null>(null)

  const premiumActive = isPremiumActive()

  useEffect(() => {
    let cancelled = false

    getQuranTranslations()
      .then(data => {
        if (!cancelled) {
          setTranslations(data)
          setTranslationCatalogueLoading(false)
        }
      })
      .catch(reason => {
        if (!cancelled) {
          setTranslationCatalogueError(
            reason instanceof Error
              ? reason.message
              : 'Unable to load Quran translations.',
          )
          setTranslationCatalogueLoading(false)
        }
      })

    return () => {
      cancelled = true
    }
  }, [])

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
          setError(
            reason instanceof Error
              ? reason.message
              : 'Unable to load Qur’an.',
          )
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

  async function openSurah(surahIndex: number) {
    setLoading(true)
    setError(null)
    setTranslationSurah(null)
    setTranslationError(null)

    try {
      const surah = await getSurah(surahIndex)
      setSelectedSurah(surah)

      if (selectedTranslation && premiumActive) {
        await loadTranslation(selectedTranslation, surahIndex)
      }
    } catch (reason) {
      setError(
        reason instanceof Error
          ? reason.message
          : 'Unable to load surah.',
      )
    } finally {
      setLoading(false)
    }
  }

  async function loadTranslation(
    translationId: string,
    surahIndex: number,
  ) {
    const translation = translations.find(
      item => item.id === translationId,
    )

    if (!translation) {
      setTranslationError('Unknown Quran translation.')
      return
    }

    if (isPremiumTranslation(translation) && !isPremiumActive()) {
      setTranslationError(
        'Quran translations are a Premium feature.',
      )
      return
    }

    setTranslationLoading(true)
    setTranslationError(null)
    setTranslationSurah(null)

    try {
      const data = await getQuranTranslationSurah(
        translationId,
        surahIndex,
      )
      setTranslationSurah(data)
    } catch (reason) {
      setTranslationError(
        reason instanceof Error
          ? reason.message
          : 'Unable to load this translation.',
      )
    } finally {
      setTranslationLoading(false)
    }
  }

  function changeTranslation(translationId: string) {
    if (!selectedSurah) return

    if (!translationId) {
      setSelectedTranslation('')
      setTranslationSurah(null)
      setTranslationError(null)
      setTranslationLoading(false)
      return
    }

    const translation = translations.find(
      item => item.id === translationId,
    )

    if (!translation) return

    if (isPremiumTranslation(translation) && !isPremiumActive()) {
      setTranslationError(
        'Quran translations are a Premium feature. Subscribe to DEEN LIFE Premium to unlock them.',
      )
      return
    }

    setSelectedTranslation(translationId)
    loadTranslation(translationId, selectedSurah.index)
  }

  if (selectedSurah) {
    return (
      <section className="quran-reader">
        <div className="quran-toolbar">
          <button
            className="back"
            onClick={() => setSelectedSurah(null)}
          >
            ← Surahs
          </button>

          <span className="eyebrow">
            SURAH {selectedSurah.index}
          </span>
        </div>

        <header className="quran-surah-header">
          <span className="quran-surah-number">
            {selectedSurah.index}
          </span>

          <div>
            <h2>{selectedSurah.nameArabic}</h2>
            <p>{selectedSurah.ayahs.length} ayahs</p>
          </div>
        </header>

        <QuranAudioPlayer
          key={selectedSurah.index}
          surahIndex={selectedSurah.index}
        />

        <div className="quran-translation-panel">
          <span className="eyebrow">TRANSLATION</span>

          <select
            className="quran-reciter-select"
            value={selectedTranslation}
            onChange={event =>
              changeTranslation(event.target.value)
            }
            aria-label="Choose Quran translation"
            disabled={translationCatalogueLoading}
          >
            <option value="">
              {translationCatalogueLoading
                ? 'Loading translations…'
                : 'Arabic only'}
            </option>

            {translations.map(translation => (
              <option
                key={translation.id}
                value={translation.id}
              >
                {isPremiumTranslation(translation) ? '🔒 ' : ''}
                {translation.name}
              </option>
            ))}
          </select>

          {translationCatalogueError && (
            <div
              className="quran-state quran-error"
              role="alert"
            >
              {translationCatalogueError}
            </div>
          )}

          {!premiumActive && (
            <p className="premium-note">
              🔒 Quran translations are available with DEEN LIFE
              Premium.
            </p>
          )}

          {translationLoading && (
            <div className="quran-state">
              Loading translation…
            </div>
          )}

          {translationError && (
            <div
              className="quran-state quran-error"
              role="alert"
            >
              {translationError}
            </div>
          )}
        </div>

        {selectedSurah.ayahs[0]?.bismillah && (
          <div className="quran-bismillah" dir="rtl">
            {selectedSurah.ayahs[0].bismillah}
          </div>
        )}

        <div className="quran-ayah-list" dir="rtl">
          {selectedSurah.ayahs.map(ayah => {
            const translationAyah =
              translationSurah?.ayahs.find(
                item => item.index === ayah.index,
              )

            return (
              <article
                className="quran-ayah"
                key={ayah.index}
              >
                <span className="quran-ayah-number">
                  {ayah.index}
                </span>

                <div className="quran-ayah-content">
                  <p className="quran-ayah-arabic">
                    {ayah.text}
                  </p>

                  {translationAyah && (
                    <p
                      className="quran-ayah-translation"
                      dir="ltr"
                    >
                      {translationAyah.text}
                    </p>
                  )}
                </div>

                <button
                  className={`quran-bookmark-button${
                    bookmarks.some(
                      bookmark =>
                        bookmark.surahIndex ===
                          selectedSurah.index &&
                        bookmark.ayahIndex === ayah.index,
                    )
                      ? ' quran-bookmark-active'
                      : ''
                  }`}
                  onClick={() =>
                    toggleBookmark(ayah.index)
                  }
                  aria-label={
                    bookmarks.some(
                      bookmark =>
                        bookmark.surahIndex ===
                          selectedSurah.index &&
                        bookmark.ayahIndex === ayah.index,
                    )
                      ? 'Remove bookmark'
                      : 'Bookmark ayah'
                  }
                  type="button"
                >
                  {bookmarks.some(
                    bookmark =>
                      bookmark.surahIndex ===
                        selectedSurah.index &&
                      bookmark.ayahIndex === ayah.index,
                  )
                    ? '★'
                    : '☆'}
                </button>
              </article>
            )
          })}
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
          <button className="back" onClick={onBack}>
            ← Back
          </button>

          <span className="eyebrow">THE NOBLE QUR’AN</span>

          <h2>Qur’an</h2>

          <p>
            Read the verified Uthmani Arabic text, with surahs
            loaded on demand for an offline-first experience.
            Premium unlocks recitations and verified translations.
          </p>
        </div>
      </header>

      {loading && (
        <div className="quran-state">
          Loading Qur’an…
        </div>
      )}

      {error && (
        <div
          className="quran-state quran-error"
          role="alert"
        >
          {error}
        </div>
      )}

      {index && !loading && !error && (
        <>
          {progress && (
            <button
              className="quran-continue-card"
              onClick={() =>
                openSurah(progress.surahIndex)
              }
            >
              <span className="quran-continue-label">
                CONTINUE READING · FREE
              </span>

              <strong>
                {index.surahs.find(
                  surah =>
                    surah.index === progress.surahIndex,
                )?.nameEnglish ??
                  `Surah ${progress.surahIndex}`}
              </strong>

              <span>
                Continue from Ayah {progress.ayahIndex}
              </span>

              <span className="quran-continue-arrow">
                →
              </span>
            </button>
          )}

          <div className="quran-stats">
            <div>
              <strong>{index.totalSurahs}</strong>
              <span>Surahs</span>
            </div>

            <div>
              <strong>
                {index.totalAyahs.toLocaleString()}
              </strong>
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
                onClick={() =>
                  openSurah(surah.index)
                }
              >
                <span className="quran-surah-number">
                  {surah.index}
                </span>

                <span className="quran-surah-info">
                  <strong>{surah.nameArabic}</strong>
                  <small>
                    {surah.ayahCount} ayahs
                  </small>
                </span>

                <span className="quran-surah-arrow">
                  →
                </span>
              </button>
            ))}
          </div>
        </>
      )}
    </section>
  )
}

export default QuranReader
