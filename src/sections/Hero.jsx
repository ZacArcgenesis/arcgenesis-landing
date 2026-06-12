import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CONTENT } from '../config/content.js'
import Highlight from '../components/Highlight.jsx'
import { track } from '../lib/analytics.js'

/**
 * Hero — dark band, two columns.
 *
 * Left: copy + two CTAs. ctaPrimary is the filled buy button that scrolls
 * to the Pricing section; ctaSecondary is the ghost free-tool button that
 * navigates to /environment-audit. Both stay prominent — the free tool is
 * the proof, not a competing CTA.
 * Right: a photo of Zac (public/zac-hero.jpg, derived from images/option
 * 1.png). If the image ever fails to load, the hero gracefully renders
 * single-column (copy only) instead of a broken image.
 * Mobile: copy and CTAs come first in the DOM, so they stay above the
 * photo no matter what.
 */
export default function Hero() {
  const { hero } = CONTENT
  const [photoOk, setPhotoOk] = useState(true)

  return (
    <section className="section-wrap bg-dark grid-texture accent-top hero-bg">
      <div className="container section-pad">
        <div className={`hero-grid${photoOk ? '' : ' hero-grid-solo'}`}>

          {/* Left: copy */}
          <div className="hero-copy">
            <h1 className="headline-xl on-dark">
              <Highlight text={hero.headline} />
            </h1>
            <p className="hero-tagline">{hero.subhead}</p>
            <p className="lead on-dark-muted hero-sub">{hero.body}</p>

            <div className="hero-cta-row">
              <a href="#pricing" className="btn-primary">{hero.ctaPrimary}</a>
              <Link
                to="/environment-audit"
                className="btn-ghost"
                onClick={() => track('audit_cta_clicked', { location: 'hero' })}
              >
                {hero.ctaSecondary}
              </Link>
            </div>

            <p className="hero-reassurance">{hero.reassurance.join(' · ')}</p>
          </div>

          {/* Right: photo (drops out entirely if the file isn't there) */}
          {photoOk && (
            <div className="hero-photo-wrap">
              <img
                src="/zac-hero.jpg"
                alt="Zac Bradshaw"
                className="hero-photo"
                onError={() => setPhotoOk(false)}
              />
            </div>
          )}

        </div>
      </div>
    </section>
  )
}
