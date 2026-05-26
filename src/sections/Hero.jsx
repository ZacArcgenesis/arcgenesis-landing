import { Link } from 'react-router-dom'
import { CONTENT } from '../config/content.js'
import { TOOLKIT, SITE } from '../config/site.js'
import Highlight from '../components/Highlight.jsx'

/**
 * Hero — dark band, two columns.
 *
 * Left: copy + two CTAs (try-the-free-tool and get-set-up-for-$97).
 * Right: a layered stack of five "prompt" cards tilted on an angle. The
 * front card is the free tool (Environment Audit, demonstrated in the
 * FreePrompt section below); the four cards behind it are the four
 * ongoing tools from the toolkit. Decorative (aria-hidden).
 */

// Turn a tool name into a plausible prompt filename for the card chrome.
const toFileName = (name) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '.prompt'

// Build a faux-content line array from shorthand widths.
// A trailing "*" marks an accent-colored line, e.g. lines(90, '60*', 75).
const lines = (...specs) =>
  specs.map((s) => {
    const str = String(s)
    const accent = str.endsWith('*')
    return { w: (accent ? str.slice(0, -1) : str) + '%', accent }
  })

function StackCard({ file, variant, intro, lines: cardLines }) {
  return (
    <div className={`prompt-stack-card ${variant}`}>
      <div className="ps-bar">
        <span className="ps-dots"><span /><span /><span /></span>
        <span className="ps-file">{file}</span>
      </div>
      <div className="ps-body">
        {intro && <p className="ps-text">{intro}</p>}
        {cardLines.map((line, i) => (
          <span
            key={i}
            className={`ps-line${line.accent ? ' accent' : ''}`}
            style={{ width: line.w }}
          />
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  const { hero } = CONTENT

  // Card filenames: front = the free tool (Environment Audit),
  // backs = the four ongoing tools from the toolkit.
  const frontFile = toFileName(SITE.freePromptToolName)
  const backFiles = TOOLKIT.slice(0, 4).map((t) => toFileName(t.name))

  return (
    <section className="section-wrap bg-dark grid-texture accent-top hero-bg">
      <div className="container section-pad">
        <div className="hero-grid">

          {/* Left: copy */}
          <div className="hero-copy">
            <h1 className="headline-xl on-dark">
              <Highlight text={hero.headline} />
            </h1>
            <p className="lead on-dark-muted hero-sub">{hero.subhead}</p>

            <div className="hero-cta-row">
              <Link to="/environment-audit" className="btn-primary">{hero.ctaPrimary}</Link>
              <a href="#pricing" className="btn-ghost">{hero.ctaSecondary}</a>
            </div>

            <p className="hero-reassurance">{hero.reassurance.join(' · ')}</p>
          </div>

          {/* Right: layered prompt-stack visual (decorative) */}
          <div className="hero-visual" aria-hidden="true">
            <div className="prompt-stack">
              {/* Rendered back-to-front. */}
              <StackCard
                file={backFiles[3]}
                variant="card-back-4"
                lines={lines(88, 64, 92, 56, 76, 50, 84)}
              />
              <StackCard
                file={backFiles[2]}
                variant="card-back-3"
                lines={lines(70, 90, 50, 82, 64, 88, 58)}
              />
              <StackCard
                file={backFiles[1]}
                variant="card-back-2"
                lines={lines(85, 60, 95, 45, 78, 90, 56)}
              />
              <StackCard
                file={backFiles[0]}
                variant="card-back-1"
                lines={lines(92, 70, 88, '54*', 80, 96, 62)}
              />
              <StackCard
                file={frontFile}
                variant="card-front"
                intro={`You are the ${SITE.freePromptToolName}.`}
                lines={lines(
                  95, 88, 70, '60*', 92, 80, 96, 55, 84, '72*',
                  90, 66, 78, 50, 92, 70, 85, 60, 94, 44,
                  88, 62, '90*', 50
                )}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
