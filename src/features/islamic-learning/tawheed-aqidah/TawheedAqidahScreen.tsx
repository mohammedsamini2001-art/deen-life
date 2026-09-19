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
  const lessons = TAWHEED_AQIDAH_COURSE.chapters.flatMap(chapter =>
    chapter.lessons.map(lesson => ({
      ...lesson,
      chapterNumber: chapter.number,
      chapterTitle: chapter.title,
    }))
  )
  const [selectedLessonSlug, setSelectedLessonSlug] = useState(
    lessons[0]?.slug ?? ''
  )

  const lessonIndex = lessons.findIndex(
    lesson => lesson.slug === selectedLessonSlug
  )

  const lesson = lessons[lessonIndex]
  const content = lesson?.content[language] as
    | TawheedLessonContent
    | undefined

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

      <div className="tawheed-progress">
        <div className="tawheed-progress-heading">
          <span>
            Chapter {lesson?.chapterNumber} · Lesson {lesson?.number}
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
        <aside className="tawheed-lesson-list">
          <span className="eyebrow">CHAPTERS</span>

          {TAWHEED_AQIDAH_COURSE.chapters.map(chapter => (
            <div key={chapter.slug}>
              <div className="tawheed-chapter-heading">
                <span>CHAPTER {chapter.number}</span>
                <strong>{chapter.title}</strong>
              </div>

              {chapter.lessons.map(item => (
            <button
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
            </div>
          ))}
        </aside>

        <article className="tawheed-lesson-content">
          {lesson && content ? (
            <>
              <div className="tawheed-lesson-heading">
                <span className="eyebrow">
                  CHAPTER {lesson.chapterNumber} · LESSON {lesson.number}
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
    </section>
  )
}
