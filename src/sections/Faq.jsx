import { useState } from 'react'
import { CONTENT } from '../config/content.js'
import Highlight from '../components/Highlight.jsx'

/**
 * Faq — light band. Accordion handling honest objections. First item open by
 * default. Defaults to home-page copy from CONTENT.faq; pass `headline` and
 * `items` to render a page-specific FAQ (e.g. on the Environment Audit page).
 */
export default function Faq({ headline, items, defaultOpen = 0 }) {
  const fallback = CONTENT.faq
  const renderHeadline = headline ?? fallback.headline
  const renderItems = items ?? fallback.items
  const [open, setOpen] = useState(defaultOpen)

  return (
    <section className="section-wrap bg-gray">
      <div className="container section-pad">
        <div className="prose">
          <div className="accent-bar" />
          <h2 className="headline-lg">
            <Highlight text={renderHeadline} />
          </h2>

          <div className="faq-list">
            {renderItems.map((item, i) => {
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
