import { useState } from 'react'
import {
  getKnowledgeCategories,
  getKnowledgeCategory
} from './knowledge-service'

interface KnowledgeScreenProps {
  onBack: () => void
}

function KnowledgeScreen({ onBack }: KnowledgeScreenProps) {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null)

  const categories = getKnowledgeCategories()
  const selectedCategory = selectedSlug
    ? getKnowledgeCategory(selectedSlug)
    : undefined

  if (selectedCategory) {
    return (
      <section className="duas-reader">
        <div className="quran-toolbar">
          <button className="back" onClick={() => setSelectedSlug(null)}>
            ← Categories
          </button>
          <span className="eyebrow">
            {selectedCategory.lessons.length} LESSON
            {selectedCategory.lessons.length === 1 ? '' : 'S'}
          </span>
        </div>

        <header className="duas-category-header">
          <h2>{selectedCategory.name}</h2>
          <p>{selectedCategory.description}</p>
        </header>

        <div className="duas-list">
          {selectedCategory.lessons.map(lesson => (
            <article className="dua-card" key={lesson.slug}>
              <h3 className="dua-title">{lesson.title}</h3>
              <p className="dua-translation">{lesson.description}</p>

              <div>
                {lesson.content.map((paragraph, index) => (
                  <p key={index} className="dua-translation">
                    {paragraph}
                  </p>
                ))}
              </div>

              {lesson.source && (
                <p className="dua-source">
                  Source: {lesson.source}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="duas-reader">
      <div className="quran-toolbar">
        <button className="back" onClick={onBack}>
          ← Home
        </button>
        <span className="eyebrow">LEARN</span>
      </div>

      <header className="duas-category-header">
        <h2>Islamic Knowledge</h2>
        <p>
          Learn Islam through organised lessons with clear sources and
          carefully presented guidance.
        </p>
      </header>

      <div className="quran-surah-list">
        {categories.map(category => (
          <button
            key={category.slug}
            className="quran-surah-card"
            onClick={() => setSelectedSlug(category.slug)}
          >
            <span className="quran-surah-number">
              {category.lessons.length}
            </span>

            <span className="quran-surah-info">
              <strong>{category.name}</strong>
              <small>{category.description}</small>
            </span>

            <span className="continue-arrow">→</span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default KnowledgeScreen
