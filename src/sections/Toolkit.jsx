import { CONTENT } from '../config/content.js'
import { TOOLKIT } from '../config/site.js'
import Highlight from '../components/Highlight.jsx'

/**
 * Toolkit — dark band. The five permanent AI tools the buyer keeps for years.
 */
export default function Toolkit() {
  const { toolkit } = CONTENT

  return (
    <section id="toolkit" className="section-wrap bg-dark grid-texture">
      <div className="container section-pad">
        <div className="prose">
          <div className="accent-bar" />
          <h2 className="headline-lg on-dark">
            <Highlight text={toolkit.headline} />
          </h2>
          {toolkit.intro && <p className="lead on-dark-muted">{toolkit.intro}</p>}

          <ul className="toolkit-list">
            {TOOLKIT.map((tool, i) => (
              <li key={i} className="toolkit-row">
                <span className="toolkit-icon" />
                <div>
                  <h3>{tool.name}</h3>
                  <p>{tool.line}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
