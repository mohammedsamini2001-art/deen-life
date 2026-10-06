import { SAHIH_BUKHARI_KISWAHILI_SOURCE } from './source/sahih-bukhari-kiswahili-source'

const UI_TEXT = {
  back: '← Hadithi',
  source: 'CHANZO CHA HADITHI',
  collection: 'MKUSANYIKO WA HADITHI',
  hadith: 'Hadithi',
  record: 'Rekodi ya HadeethEnc',
  sourceLink: 'Chanzo cha HadeethEnc',
} as const

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
          {UI_TEXT.back}
        </button>
        <span className="eyebrow">{UI_TEXT.hadith}</span>
      </div>

      <header className="duas-category-header knowledge-hero">
        <span className="eyebrow">{UI_TEXT.source}</span>
        <h2>{source.title}</h2>
        <p>{source.sourceName}</p>
        <small>
          {source.recordCount} {UI_TEXT.hadith} • {source.version}
        </small>
      </header>

      <article className="tawheed-aqidah-source">
        <header>
          <span className="eyebrow">{UI_TEXT.collection}</span>
          <h3>{source.title}</h3>
          <small>
            {source.recordCount} {UI_TEXT.hadith}
          </small>
        </header>

        {source.records.map((hadith) => (
          <section
            key={hadith.id}
            className="tawheed-aqidah-source-unit"
          >
            <small>
              {UI_TEXT.record} #{hadith.id}
            </small>

            <h3>{hadith.title}</h3>

            <p lang="sw">
              {hadith.kiswahili}
            </p>

            <small>{hadith.grade}</small>

            <small>{hadith.takhrij}</small>

            <a
              href={hadith.link}
              target="_blank"
              rel="noreferrer"
            >
              {UI_TEXT.sourceLink}
            </a>
          </section>
        ))}
      </article>
    </section>
  )
}
