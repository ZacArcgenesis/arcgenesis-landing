import { CONTENT } from '../config/content.js'
import Highlight from '../components/Highlight.jsx'

/**
 * ForWho — white band, directly before Pricing. Qualifies the person right
 * before the ask: two columns on desktop (for you / not for you), stacked
 * on mobile.
 */
export default function ForWho() {
  const { forWho } = CONTENT

  return (
    <section className="section-wrap bg-white">
      <div className="container section-pad">
        <div className="prose">
          <div className="accent-bar" />
          <h2 className="headline-lg">
            <Highlight text={forWho.headline} />
          </h2>
        </div>

        <div className="forwho-grid prose">
          <div className="forwho-col">
            <h3 className="forwho-title">{forWho.forYou.title}</h3>
            <ul className="forwho-list">
              {forWho.forYou.items.map((item, i) => (
                <li key={i}>
                  <span className="forwho-mark is-yes" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="forwho-col">
            <h3 className="forwho-title">{forWho.notForYou.title}</h3>
            <ul className="forwho-list">
              {forWho.notForYou.items.map((item, i) => (
                <li key={i}>
                  <span className="forwho-mark is-no" aria-hidden="true">×</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
