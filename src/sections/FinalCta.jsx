import { CONTENT } from '../config/content.js'
import Highlight from '../components/Highlight.jsx'

/**
 * FinalCta — dark band. Last push. Scrolls the visitor back up to the
 * pricing section (where the actual buy button lives) until real checkout
 * is wired up.
 */
export default function FinalCta() {
  const { finalCta } = CONTENT

  return (
    <section className="section-wrap bg-dark grid-texture">
      <div className="container section-pad">
        <div className="prose text-center">
          <div className="accent-bar" />
          <h2 className="headline-lg on-dark">
            <Highlight text={finalCta.headline} />
          </h2>
          <p className="lead on-dark-muted" style={{ marginInline: 'auto' }}>
            {finalCta.body}
          </p>
          <div style={{ marginTop: '2.25rem' }}>
            <a href="#pricing" className="btn-primary">{finalCta.cta}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
