import { CONTENT } from '../config/content.js'
import Highlight from '../components/Highlight.jsx'

/**
 * Teach — light band. Builds trust by teaching the core idea before any ask.
 * This is the most important copy beat for a warm-but-skeptical visitor.
 */
export default function Teach() {
  const { teach } = CONTENT

  return (
    <section id="start" className="section-wrap bg-gray">
      <div className="container section-pad">
        <div className="prose">
          <div className="accent-bar" />
          <h2 className="headline-lg">
            <Highlight text={teach.headline} />
          </h2>
          <div
            style={{
              marginTop: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.75rem',
            }}
          >
            {teach.body.map((para, i) => (
              <p key={i} className="lead" style={{ margin: 0 }}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
