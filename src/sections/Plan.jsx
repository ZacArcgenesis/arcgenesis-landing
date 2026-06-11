import { CONTENT } from '../config/content.js'
import Highlight from '../components/Highlight.jsx'

/**
 * Plan — light gray band. A compact three-step strip: the simple path that
 * makes the ten-tool system feel walkable. Deliberately lighter (smaller
 * padding, no cards) than the Setup and Toolkit sections that follow it —
 * it should read as a path, not a feature grid.
 */
export default function Plan() {
  const { plan } = CONTENT

  return (
    <section className="section-wrap bg-gray">
      <div className="container section-pad-sm">
        <div className="prose">
          <div className="accent-bar" />
          <h2 className="headline-lg">
            <Highlight text={plan.headline} />
          </h2>

          <ol className="plan-steps">
            {plan.steps.map((step, i) => (
              <li key={i} className="plan-step">
                <span className="plan-step-num">{i + 1}</span>
                <p className="plan-step-text">
                  <strong>{step.title}</strong> {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
