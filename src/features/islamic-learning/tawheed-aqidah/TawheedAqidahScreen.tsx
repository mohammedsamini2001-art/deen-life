import { useState } from 'react'
import { TAWHEED_AQIDAH_COURSE } from './tawheed-aqidah-data'
import type { TawheedLanguage, TawheedLesson } from './tawheed-aqidah-data'

interface TawheedAqidahScreenProps {
  language: TawheedLanguage
  onBack: () => void
}

export default function TawheedAqidahScreen({
  language,
  onBack,
}: TawheedAqidahScreenProps) {
  const [selectedLessonSlug, setSelectedLessonSlug] = useState<string>(
    TAWHEED_AQIDAH_COURSE.chapters[0]?.lessons[0]?.slug ?? ''
  )

  const chapter = TAWHEED_AQIDAH_COURSE.chapters[0]
  const lesson = chapter?.lessons.find(
    item => item.slug === selectedLessonSlug
  )

  const content = lesson?.content[language] as TawheedLesson['content'][TawheedLanguage]

  return (
    <section className="duas-reader islamic-learning-page tawheed-course-page">
      <div className="quran-toolbar">
        <button className="back" onClick={onBack}>
          ← Learning
        </button>
        <span className="eyebrow">TAWHEED & AQIDAH</span>
      </div>

      <header className="duas-category-header knowledge-hero">
        <span className="eyebrow">CHAPTER 1</span>
        <h2>{chapter?.title}</h2>
        <p>{TAWHEED_AQIDAH_COURSE.description}</p>
      </header>

      <div className="tawheed-course-layout">
        <aside className="tawheed-lesson-list">
          <span className="eyebrow">LESSONS</span>

          {chapter?.lessons.map(item => (
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
        </aside>

        <article className="tawheed-lesson-content">
          {lesson && content ? (
            <>
              <div className="tawheed-lesson-heading">
                <span className="eyebrow">
                  LESSON {lesson.number}
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
        </article>
      </div>
    </section>
  )
}
