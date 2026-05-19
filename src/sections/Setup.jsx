import { CONTENT } from '../config/content.js'
import { SETUP_OUTPUTS } from '../config/site.js'
import Highlight from '../components/Highlight.jsx'

/**
 * Setup — white band. The ~4-hour guided setup and its six concrete outputs.
 */
export default function Setup() {
  const { setup } = CONTENT

  return (
    <section id="setup" className="section-wrap bg-white">
      <div className="container section-pad">
        <div className="prose">
          <div className="accent-bar" />
          <h2 className="headline-lg">
            <Highlight text={setup.headline} />
          </h2>
          {setup.intro && <p className="lead">{setup.intro}</p>}
        </div>

        <ol className="numbered-grid">
          {SETUP_OUTPUTS.map((item, i) => (
            <li key={i} className="numbered-item">
              <span className="numbered-index">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.line}</p>
              </div>
            </li>
          ))}
        </ol>

        {setup.outro && (
          <p className="lead prose" style={{ marginTop: '2rem' }}>{setup.outro}</p>
        )}
      </div>
    </section>
  )
}
