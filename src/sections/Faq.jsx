import { useState } from 'react'
import { CONTENT } from '../config/content.js'
import Highlight from '../components/Highlight.jsx'

/**
 * Faq — light band. Accordion handling the warm-but-skeptical visitor's
 * honest objections. First item open by default.
 */
export default function Faq() {
  const { faq } = CONTENT
  const [open, setOpen] = useState(0)

  return (
    <section className="section-wrap bg-gray">
      <div className="container section-pad">
        <div className="prose">
          <div className="accent-bar" />
          <h2 className="headline-lg">
            <Highlight text={faq.headline} />
          </h2>

          <div className="faq-list">
            {faq.items.map((item, i) => {
              const isOpen = open === i
              return (
                <div key={i} className={`faq-item${isOpen ? ' open' : ''}`}>
                  <button
                    type="button"
                    className="faq-q"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    {item.q}
                    <span className="faq-toggle" aria-hidden="true" />
                  </button>
                  <div className="faq-a">
                    <p>{item.a}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
