import { Link } from 'react-router-dom'
import { CONTENT } from '../config/content.js'
import Highlight from '../components/Highlight.jsx'
import { track } from '../lib/analytics.js'

/**
 * FreePrompt — dark band. Used to embed the prompt inline; now teases the
 * Environment Audit and links to its dedicated page (/environment-audit).
 * Keeps the funnel rhythm — the "let them try it" moment is still here, but
 * the actual prompt lives on its own URL so it can be linked to directly.
 */
export default function FreePrompt() {
  const { freePrompt } = CONTENT

  return (
    <section id="try" className="section-wrap bg-dark grid-texture">
      <div className="container section-pad">
        <div className="prose">
          <div className="accent-bar" />
          <h2 className="headline-lg on-dark">
            <Highlight text={freePrompt.headline} />
          </h2>
          <p className="lead on-dark-muted">{freePrompt.intro}</p>

          <div style={{ marginTop: '2.25rem' }}>
            <Link
              to="/environment-audit"
              className="btn-primary"
              onClick={() => track('audit_cta_clicked', { location: 'free-prompt' })}
            >
              {freePrompt.ctaLabel}
            </Link>
          </div>
          <p className="hero-reassurance" style={{ marginTop: '1.25rem' }}>
            {freePrompt.ctaSub}
          </p>

          {freePrompt.example && (
            <article className="audit-sample" aria-label="Sample Environment Audit output">
              <p className="audit-sample-file">{freePrompt.example.fileName}</p>
              <h4>{freePrompt.example.glanceHeading}</h4>
              <p>{freePrompt.example.glance}</p>
              <h4>{freePrompt.example.changesHeading}</h4>
              <ol>
                {freePrompt.example.changes.map((change, i) => (
                  <li key={i}>{change}</li>
                ))}
              </ol>
            </article>
          )}
        </div>
      </div>
    </section>
  )
}
