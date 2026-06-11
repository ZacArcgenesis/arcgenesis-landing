/**
 * analytics.js — thin wrapper around Plausible's window.plausible queue.
 *
 * The Plausible script is loaded in index.html. Until it loads (or if it
 * never does — blocked, dev mode, placeholder domain), track() is a no-op,
 * so components can call it unconditionally.
 *
 * The four custom events that map the funnel:
 *   prompt_copied      — any "Copy prompt" button
 *   checkout_opened    — the buy button (Kit Commerce modal)
 *   optin_submitted    — successful email opt-in
 *   audit_cta_clicked  — main page → /environment-audit
 */
export function track(event, props) {
  if (typeof window !== 'undefined' && typeof window.plausible === 'function') {
    window.plausible(event, props ? { props } : undefined)
  }
}
