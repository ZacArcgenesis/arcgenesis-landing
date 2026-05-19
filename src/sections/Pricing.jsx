import { CONTENT } from '../config/content.js'
import { SITE } from '../config/site.js'

/**
 * Pricing — dark band. The offer, one price, the buy button.
 * The buy button points at SITE.checkoutUrl (placeholder until checkout is set up).
 * V2 has no section headline — the price IS the heading.
 */
export default function Pricing() {
  const { pricing } = CONTENT

  return (
    <section id="pricing" className="section-wrap bg-dark grid-texture">
      <div className="container section-pad">
        <div className="prose">
          {pricing.headline && (
            <h2 className="headline-lg on-dark">{pricing.headline}</h2>
          )}

          <div className="pricing-card">
            <div className="pricing-price">
              <span className="pricing-amount">
                {SITE.currencySymbol}{SITE.price}
              </span>
              {SITE.anchorPrice && (
                <span className="pricing-anchor">
                  {SITE.currencySymbol}{SITE.anchorPrice}
                </span>
              )}
            </div>
            {pricing.priceLine && (
              <p className="pricing-line">{pricing.priceLine}</p>
            )}

            <ul className="pricing-includes">
              {pricing.includes.map((item, i) => (
                <li key={i}>
                  <span className="pricing-check" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            {pricing.guarantee && (
              <p className="lead" style={{ marginTop: 0, marginBottom: '1.5rem', fontSize: '0.9375rem' }}>
                {pricing.guarantee}
              </p>
            )}

            <a href={SITE.checkoutUrl} className="btn-primary btn-full">{pricing.cta}</a>

            <p className="pricing-fineprint">{pricing.finePrint}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
