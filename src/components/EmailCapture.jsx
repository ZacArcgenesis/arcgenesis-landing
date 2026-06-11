import { useState } from 'react'
import { SITE } from '../config/site.js'
import { track } from '../lib/analytics.js'

/**
 * EmailCapture — reusable inline Kit opt-in block (headline, short body,
 * email field, button, one-line fine print). Styled for light bands.
 *
 * Copy comes in via the `copy` prop (a block from CONTENT.emailCapture);
 * `source` tags the optin_submitted analytics event so we can tell the
 * audit-page opt-in from the guide opt-ins.
 *
 * Mechanics: plain-HTML POST to a Kit form (SITE.kitFormAction) so the
 * styling stays fully ours. Submission goes over fetch so the visitor never
 * leaves the page; if fetch fails, it falls back to a native form POST to
 * Kit. While SITE.kitFormAction is still the placeholder, the form stays
 * inert and a "not live yet" note shows on submit.
 */
export default function EmailCapture({ copy, source }) {
  // idle | sending | success | pending (pending = Kit form not wired yet)
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
      setStatus('success')
      track('optin_submitted', { source })
    } catch {
      // Network hiccup or Kit rejecting the AJAX call: hand the submit to
      // the browser so the signup still goes through on Kit's own page.
      track('optin_submitted', { source })
      form.submit()
    }
  }

  return (
    <aside className="email-capture">
      <h3 className="email-capture-headline">{copy.headline}</h3>
      <p className="email-capture-body">{copy.body}</p>

      {status === 'success' ? (
        <p className="email-capture-success" role="status">{copy.success}</p>
      ) : (
        <form
          className="email-capture-form"
          action={wired ? action : undefined}
          method="post"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            name="email_address"
            className="email-capture-input"
            placeholder={copy.emailPlaceholder}
            aria-label={copy.emailPlaceholder}
            autoComplete="email"
            required
            disabled={status === 'sending'}
          />
          <button
            type="submit"
            className="btn-primary"
            disabled={status === 'sending'}
          >
            {copy.button}
          </button>
        </form>
      )}

      {status === 'pending' && (
        <p className="email-capture-note" role="status">{copy.pendingNote}</p>
      )}
      {status !== 'success' && (
        <p className="email-capture-fineprint">{copy.finePrint}</p>
      )}
    </aside>
  )
}
