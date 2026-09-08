import { useState } from 'react'
import { getDuaCategories, getDuaCategory } from './duas-service'

interface DuasScreenProps {
  onBack: () => void
}

function DuasScreen({ onBack }: DuasScreenProps) {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null)
  const categories = getDuaCategories()
  const selectedCategory = selectedSlug ? getDuaCategory(selectedSlug) : undefined

  if (selectedCategory) {
    return (
      <section className="duas-reader">
        <div className="quran-toolbar">
          <button className="back" onClick={() => setSelectedSlug(null)}>
            ← Categories
          </button>
          <span className="eyebrow">{selectedCategory.duas.length} DUAS</span>
        </div>

        <header className="duas-category-header">
          <h2>{selectedCategory.name}</h2>
          <p>{selectedCategory.description}</p>
        </header>

        <div className="duas-list">
          {selectedCategory.duas.map((dua, index) => (
            <article className="dua-card" key={index}>
              <h3 className="dua-title">{dua.title}</h3>
              <p className="dua-arabic" dir="rtl">
                {dua.arabic}
              </p>
              <p className="dua-latin" dir="ltr">
                {dua.latin}
              </p>
              <p className="dua-translation" dir="ltr">
                {dua.translation}
              </p>
              {dua.notes && <p className="dua-notes">{dua.notes}</p>}
              {dua.benefits && <p className="dua-benefits">{dua.benefits}</p>}
              {dua.source && <p className="dua-source">{dua.source}</p>}
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
        <span className="eyebrow">DUAS</span>
      </div>

      <header className="duas-category-header">
        <h2>Duas &amp; Dhikr</h2>
        <p>Authentic supplications from the Qur’an and Sunnah, organised by moment.</p>
      </header>

      <div className="quran-surah-list">
        {categories.map(category => (
          <button
            key={category.slug}
            className="quran-surah-card"
            onClick={() => setSelectedSlug(category.slug)}
          >
            <span className="quran-surah-number">{category.duas.length}</span>
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

export default DuasScreen
