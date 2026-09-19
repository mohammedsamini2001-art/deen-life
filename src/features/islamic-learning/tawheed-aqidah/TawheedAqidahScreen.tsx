import { useState } from 'react'
import { TAWHEED_AQIDAH_COURSE } from './tawheed-aqidah-data'
import type { TawheedLanguage, TawheedLessonContent } from './tawheed-aqidah-data'

interface TawheedAqidahScreenProps {
  language: TawheedLanguage
  onBack: () => void
}

export default function TawheedAqidahScreen({
  language,
  onBack,
}: TawheedAqidahScreenProps) {
  const [selectedChapterSlug, setSelectedChapterSlug] = useState<string | null>(null)
  const [selectedLessonSlug, setSelectedLessonSlug] = useState('')

  const selectedChapter = TAWHEED_AQIDAH_COURSE.chapters.find(
    chapter => chapter.slug === selectedChapterSlug
  )

  const lessons = selectedChapter?.lessons ?? []

  const lessonIndex = lessons.findIndex(
    lesson => lesson.slug === selectedLessonSlug
  )

  const lesson = lessons[lessonIndex]
  const content = lesson?.content[language] as
    | TawheedLessonContent
    | undefined

  const selectChapter = (chapterSlug: string) => {
    const chapter = TAWHEED_AQIDAH_COURSE.chapters.find(
      item => item.slug === chapterSlug
    )

    if (!chapter) return

    setSelectedChapterSlug(chapter.slug)
    setSelectedLessonSlug(chapter.lessons[0]?.slug ?? '')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goBackToChapters = () => {
    setSelectedChapterSlug(null)
    setSelectedLessonSlug('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goToLesson = (index: number) => {
    const nextLesson = lessons[index]

    if (nextLesson) {
      setSelectedLessonSlug(nextLesson.slug)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <section className="duas-reader islamic-learning-page tawheed-course-page">
      <div className="quran-toolbar">
        <button className="back" onClick={onBack}>
          ← Learning
        </button>
        <span className="eyebrow">TAWHEED & AQIDAH</span>
      </div>

      <header className="duas-category-header knowledge-hero">
        <span className="eyebrow">FOUNDATIONS OF AQIDAH</span>
        <h2>{TAWHEED_AQIDAH_COURSE.title}</h2>
        <p>{TAWHEED_AQIDAH_COURSE.description}</p>
      </header>

      {!selectedChapter ? (
        <div className="tawheed-chapter-list">
          <span className="eyebrow">CHAPTERS</span>

          {TAWHEED_AQIDAH_COURSE.chapters.map(chapter => (
            <section className="tawheed-chapter-card" key={chapter.slug}>
              <button
                type="button"
                className="tawheed-chapter-heading"
                onClick={() => selectChapter(chapter.slug)}
              >
                <span>CHAPTER {chapter.number}</span>
                <strong>{chapter.title}</strong>
              </button>
            </section>
          ))}
        </div>
      ) : (
        <>
          <button
            type="button"
            className="tawheed-course-back"
            onClick={goBackToChapters}
          >
            ← All Chapters
          </button>

          <header className="tawheed-selected-chapter">
            <span className="eyebrow">
              CHAPTER {selectedChapter.number}
            </span>
            <h3>{selectedChapter.title}</h3>
          </header>

          {lessons.length > 0 ? (
            <>
              <div className="tawheed-progress">
                <div className="tawheed-progress-heading">
                  <span>
                    Lesson {lesson?.number} of {lessons.length}
                  </span>
                  <strong>{lesson?.title}</strong>
                </div>

                <div
                  className="tawheed-progress-track"
                  role="progressbar"
                  aria-valuemin={1}
                  aria-valuemax={lessons.length}
                  aria-valuenow={lessonIndex + 1}
                >
                  <span
                    style={{
                      width: `${((lessonIndex + 1) / lessons.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <div className="tawheed-course-layout">
                <aside className="tawheed-chapter-list">
                  <span className="eyebrow">LESSONS</span>

                  {lessons.map(item => (
                    <button
                      type="button"
                      key={item.slug}
                      className={
                        selectedLessonSlug === item.slug
                          ? 'tawheed-lesson-item active'
                          : 'tawheed-lesson-item'
                      }
                      onClick={() => setSelectedLessonSlug(item.slug)}
                    >
                      <span>{item.number}</span>
                      <strong>{item.title}</strong>
                    </button>
                  ))}
                </aside>

                <article className="tawheed-lesson-content">
                  {lesson && content ? (
                    <>
                      <div className="tawheed-lesson-heading">
                        <span className="eyebrow">
                          CHAPTER {selectedChapter.number} · LESSON {lesson.number}
                        </span>
                        <h3>{lesson.title}</h3>
                      </div>

                      <section className="tawheed-objectives">
                        <span className="eyebrow">LEARNING OBJECTIVES</span>
                        <ul>
                          {content.objectives.map(objective => (
                            <li key={objective}>{objective}</li>
                          ))}
                        </ul>
                      </section>

                      {content.sections.map(section => (
                        <section className="tawheed-section" key={section.title}>
                          <h4>{section.title}</h4>
                          {section.paragraphs.map(paragraph => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </section>
                      ))}

                      <section className="tawheed-key-terms">
                        <span className="eyebrow">KEY TERMS</span>
                        {content.keyTerms.map(item => (
                          <div className="tawheed-term" key={item.term}>
                            <strong>{item.term}</strong>
                            <p>{item.meaning}</p>
                          </div>
                        ))}
                      </section>

                      <section className="tawheed-review">
                        <span className="eyebrow">REVIEW</span>
                        <ol>
                          {content.reviewQuestions.map(question => (
                            <li key={question}>{question}</li>
                          ))}
                        </ol>
                      </section>

                      <section className="tawheed-sources">
                        <span className="eyebrow">SOURCES</span>
                        {content.sources.map(source => (
                          <small key={`${source.type}-${source.reference}`}>
                            {source.reference}
                          </small>
                        ))}
                      </section>
                    </>
                  ) : (
                    <div className="tawheed-unavailable">
                      <span className="eyebrow">LANGUAGE CONTENT</span>
                      <h3>This lesson is not yet available in this language.</h3>
                      <p>
                        More translations will be added as the learning library grows.
                      </p>
                    </div>
                  )}

                  <div className="tawheed-lesson-navigation">
                    <button
                      className="secondary"
                      disabled={lessonIndex <= 0}
                      onClick={() => goToLesson(lessonIndex - 1)}
                    >
                      ← Previous
                    </button>

                    <button
                      className="primary"
                      disabled={lessonIndex >= lessons.length - 1}
                      onClick={() => goToLesson(lessonIndex + 1)}
                    >
                      Next Lesson →
                    </button>
                  </div>
                </article>
              </div>
            </>
          ) : (
            <div className="tawheed-unavailable">
              <span className="eyebrow">LESSONS</span>
              <h3>Lessons coming soon.</h3>
              <p>This chapter is being prepared for the learning library.</p>
            </div>
          )}
        </>
      )}
    </section>
  )
}
