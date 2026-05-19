import { CONTENT } from '../config/content.js'
import Highlight from '../components/Highlight.jsx'

/**
 * PriceMath — white band. Sits directly after Pricing. The ROI argument:
 * makes the case that $97 is small compared to what's already slipping
 * through, so the system pays for itself fast.
 */
export default function PriceMath() {
  const { priceMath } = CONTENT

  return (
    <section className="section-wrap bg-white">
      <div className="container section-pad">
        <div className="prose">
          <div className="accent-bar" />
          <h2 className="headline-lg">
            <Highlight text={priceMath.headline} />
          </h2>
          <div
            style={{
              marginTop: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.75rem',
            }}
          >
            {priceMath.body.map((para, i) => (
              <p key={i} className="lead" style={{ margin: 0 }}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
