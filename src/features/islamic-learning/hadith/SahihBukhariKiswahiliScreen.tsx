import { SAHIH_BUKHARI_KISWAHILI_SOURCE } from './source/sahih-bukhari-kiswahili-source'

export default function SahihBukhariKiswahiliScreen({
  onBack,
}: {
  onBack: () => void
}) {
  const source = SAHIH_BUKHARI_KISWAHILI_SOURCE

  return (
    <section
      className="duas-reader islamic-learning-page hadith-page"
      dir="ltr"
      lang="sw"
    >
      <div className="quran-toolbar">
        <button className="back" onClick={onBack}>
          ← Kujifunza
        </button>
        <span className="eyebrow">HADITHI</span>
      </div>

      <header className="duas-category-header knowledge-hero">
        <span className="eyebrow">CHANZO CHA HADITHI</span>
        <h2>{source.title}</h2>
        <p>{source.sourceName}</p>
        <small>{source.recordCount} Hadithi • {source.version}</small>
      </header>

      <article className="tawheed-aqidah-source">
        {source.records.map((hadith) => (
          <section
            key={hadith.id}
            className="tawheed-aqidah-source-unit"
          >
            <small>
              Hadithi #{hadith.id}
            </small>

            <h3>{hadith.title}</h3>

            <p lang="sw">
              {hadith.kiswahili}
            </p>

            <small>
              {hadith.grade}
            </small>

            <small>
              {hadith.takhrij}
            </small>

            <a
              href={hadith.link}
              target="_blank"
              rel="noreferrer"
            >
              Chanzo cha HadeethEnc
            </a>
          </section>
        ))}
      </article>
    </section>
  )
}
