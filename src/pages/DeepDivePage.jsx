import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CONTENT } from '../config/content.js'
import { SITE } from '../config/site.js'
import { track } from '../lib/analytics.js'

/**
 * Environment Deep-Dive opt-in — the page the Environment Audit links to
 * once a visitor finishes the audit. Intentionally stripped: a centered
 * dark hero with the offer and a first-name + email form, nothing else.
 * Not linked anywhere on the public site; reached only via the shared link.
 *
 * The form posts first name + email to the Kit form (SITE.kitFormAction)
 * in the background, then routes to /environment-deep-dive/thanks so the
 * visitor never leaves the site. If the background submit fails, it falls
 * back to a native POST to Kit — the Kit form's redirect setting should
 * point at the same thanks page so both paths land in one place.
 */
export default function DeepDivePage() {
  const { deepDivePage: page } = CONTENT
  const navigate = useNavigate()
  // idle | sending | pending (pending = Kit form action not wired yet)
  const [status, setStatus] = useState('idle')

  const action = SITE.kitFormAction
  const wired = action.startsWith('http')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!wired) {
      setStatus('pending')
      return
    }
    const form = e.currentTarget
    setStatus('sending')
    try {
      const res = await fetch(action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error(`Kit responded ${res.status}`)
      track('optin_submitted', { source: 'deep-dive-page' })
      navigate('/environment-deep-dive/thanks')
    } catch {
      // Background submit failed: hand it to the browser so the signup
      // still goes through; Kit's own redirect takes over from there.
      track('optin_submitted', { source: 'deep-dive-page' })
      form.submit()
    }
  }

  return (
    <main className="deepdive-page grid-texture">
      <div className="deepdive-glow" aria-hidden="true" />
      <div className="container">
        <div className="deepdive-inner">
          <h1 className="headline-xl on-dark">{page.headline}</h1>
          <p className="deepdive-sub">{page.sub}</p>

          <form
            className="deepdive-form"
            action={wired ? action : undefined}
            method="post"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="fields[first_name]"
              className="deepdive-input"
              placeholder={page.firstNamePlaceholder}
              aria-label={page.firstNamePlaceholder}
              autoComplete="given-name"
              required
              disabled={status === 'sending'}
            />
            <input
              type="email"
              name="email_address"
              className="deepdive-input"
              placeholder={page.emailPlaceholder}
              aria-label={page.emailPlaceholder}
              autoComplete="email"
              required
              disabled={status === 'sending'}
            />
            <button
              type="submit"
              className="btn-primary btn-full"
              disabled={status === 'sending'}
            >
              {page.cta}
            </button>
          </form>

          {status === 'pending' && (
            <p className="deepdive-note">{page.pendingNote}</p>
          )}
        </div>
      </div>
    </main>
  )
}
