import { StrictMode, useEffect, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import EnvironmentAuditPage from './pages/EnvironmentAuditPage.jsx'
import DeepDivePage from './pages/DeepDivePage.jsx'
import DeepDiveThanksPage from './pages/DeepDiveThanksPage.jsx'
import GuidePage from './pages/GuidePage.jsx'
import LegalPage from './pages/LegalPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import { CONTENT } from './config/content.js'
import { DEBT_STRATEGY_PROMPT } from './config/prompts/debt-strategy.js'
// Re-enable alongside the save-for-something-big route below.
// import { GOAL_TO_REALITY_PROMPT } from './config/prompts/goal-to-reality.js'

// Lazy-loaded so the 10 system prompt bodies (~200KB) don't ship in the
// main bundle. Only downloaded when a buyer visits the system access URL.
const SystemAccessPage = lazy(() => import('./pages/SystemAccessPage.jsx'))

/**
 * On every route change: jump to the hash target if present, otherwise the
 * top of the page. Keeps cross-page anchor links (e.g. "/#pricing" from the
 * Environment Audit page) feeling like real navigation.
 */
function ScrollOnNavigate() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])
  return null
}

// On a hard reload, drop any in-page hash (e.g. #pricing) before React
// mounts so the page starts at the top instead of restoring the last
// clicked anchor. Cross-page anchor navigation (e.g. /#pricing from the
// Environment Audit page) still works because that's not a "reload".
const navEntry = performance.getEntriesByType('navigation')[0]
if (navEntry?.type === 'reload' && window.location.hash) {
  window.history.replaceState(
    null,
    '',
    window.location.pathname + window.location.search,
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollOnNavigate />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/environment-audit" element={<EnvironmentAuditPage />} />
        {/* Stripped opt-in linked only from the Environment Audit's finish
            step. Not referenced anywhere else on the public site. */}
        <Route path="/environment-deep-dive" element={<DeepDivePage />} />
        <Route path="/environment-deep-dive/thanks" element={<DeepDiveThanksPage />} />
        <Route
          path="/guides/get-out-of-debt"
          element={<GuidePage guide={CONTENT.guides.getOutOfDebt} prompt={DEBT_STRATEGY_PROMPT} />}
        />
        {/* Gated until the guide is written — its body is still TODO stubs.
            Restore this route (and the GOAL_TO_REALITY_PROMPT import above,
            plus the crosslink card in content.js) when the content is done.
        <Route
          path="/guides/save-for-something-big"
          element={<GuidePage guide={CONTENT.guides.saveForSomethingBig} prompt={GOAL_TO_REALITY_PROMPT} />}
        />
        */}
        <Route
          path="/guides/start-investing"
          element={<GuidePage guide={CONTENT.guides.startInvesting} />}
        />
        <Route path="/terms" element={<LegalPage page={CONTENT.legal.terms} />} />
        <Route path="/privacy" element={<LegalPage page={CONTENT.legal.privacy} />} />
        {/* Buyer-only system delivery — obscure slug, never linked from
            the public site. Only accessible via the Kit.com post-purchase
            email. Rotating the slug breaks every prior buyer's link, so
            think before changing it.
            Lazy-loaded so the prompt bodies don't ship in the main bundle. */}
        <Route
          path="/system/k7m4xq2n9r5p3w8b6"
          element={
            <Suspense fallback={null}>
              <SystemAccessPage />
            </Suspense>
          }
        />
        {/* Catch-all: every unknown URL (including wrong /system/ slugs)
            renders the same generic not-found page. */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
