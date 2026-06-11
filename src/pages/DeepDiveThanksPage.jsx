import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CONTENT } from '../config/content.js'

/**
 * DeepDiveThanksPage — where the Deep-Dive opt-in lands after a successful
 * subscribe. Same stripped dark styling as the opt-in page. Tells the new
 * subscriber the email is coming from zac@arcgenesisfinance.com and to
 * rescue it from spam if needed.
 *
 * Reached two ways: client-side navigation from DeepDivePage on a
 * successful background submit, and (as a fallback) the redirect URL
 * configured on the Kit form itself for native POSTs.
 */
export default function DeepDiveThanksPage() {
  const { deepDiveThanksPage: page } = CONTENT

  // Thank-you pages shouldn't be indexed; they only make sense post-submit.
  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex'
    document.head.appendChild(meta)
    return () => meta.remove()
  }, [])

  return (
    <main className="deepdive-page grid-texture">
      <div className="deepdive-glow" aria-hidden="true" />
      <div className="container">
        <div className="deepdive-inner">
          <h1 className="headline-xl on-dark">{page.headline}</h1>
          {page.body.map((para, i) => (
            <p key={i} className="deepdive-sub">{para}</p>
          ))}
          <p className="deepdive-note" style={{ marginTop: '2.25rem' }}>
            <Link to="/" className="deepdive-home-link">{page.homeLink}</Link>
          </p>
        </div>
      </div>
    </main>
  )
}
