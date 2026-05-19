import { CONTENT } from '../config/content.js'
import { FREE_PROMPT } from '../config/prompt.js'
import Highlight from '../components/Highlight.jsx'
import PromptWindow from '../components/PromptWindow.jsx'

/**
 * FreePrompt — dark band. The "experience the product" moment: a real tool
 * the visitor can copy and run before deciding anything.
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
          <p className="lead on-dark-muted" style={{ marginTop: '1rem', fontSize: '0.9375rem' }}>
            {FREE_PROMPT.instruction}
          </p>

          <PromptWindow />

          <p className="prompt-footnote">{FREE_PROMPT.footnote}</p>
        </div>
      </div>
    </section>
  )
}
