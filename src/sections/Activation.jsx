import { CONTENT } from '../config/content.js'
import Highlight from '../components/Highlight.jsx'

/**
 * Activation — light gray band. Combines the "confidence" emotional peak with
 * the four ownership / no-lock-in points on the same section. Confidence sits
 * at the top (centered, slightly larger body); the four ownership cards sit
 * below in a 2x2 grid.
 */
export default function Activation() {
  const { activation, ownership } = CONTENT

  return (
    <section className="section-wrap bg-gray">
      <div className="container section-pad">
        {/* Confidence — emotional peak, centered */}
        <div className="prose text-center">
          <div className="accent-bar" />
          <h2 className="headline-lg">
            <Highlight text={activation.headline} />
          </h2>
          <div
            style={{
              marginTop: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            {activation.body.map((para, i) => (
              <p
                key={i}
                className="lead"
                style={{ margin: 0, fontSize: '1.125rem' }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Ownership — four cards below the confidence content */}
        <div className="ownership-grid prose" style={{ marginTop: '4rem' }}>
          {ownership.points.map((point, i) => (
            <div key={i} className="ownership-card">
              <h3>{point.title}</h3>
              <p>{point.line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
