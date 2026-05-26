import { Link } from 'react-router-dom'
import { CONTENT } from '../config/content.js'
import Highlight from '../components/Highlight.jsx'
import PromptWindow from '../components/PromptWindow.jsx'
import Navbar from '../sections/Navbar.jsx'
import Footer from '../sections/Footer.jsx'
import Faq from '../sections/Faq.jsx'

/**
 * Environment Audit page — standalone lead-magnet experience.
 *
 * Sections, top to bottom:
 *   Hero (dark, centered, cyan glow + grid texture)
 *   Prompt (light band — section head + prompt card with glow + after note)
 *   How to use it (white band — 2x2 numbered grid)
 *   FAQ (light gray band — accordion, audit-specific items)
 *   Handoff CTA (dark band — back to the main system at /#pricing)
 */
export default function EnvironmentAuditPage() {
  const { environmentAuditPage: page } = CONTENT

  return (
    <>
      <Navbar />
      <main>
        {/* ─── Hero ─────────────────────────────────────────────────── */}
        <section className="section-wrap audit-hero grid-texture">
          <div className="audit-hero-glow" aria-hidden="true" />
          <div className="container">
            <div className="audit-hero-inner">
              <span className="eyebrow">{page.eyebrow}</span>
              <h1 className="headline-xl on-dark">
                <Highlight text={page.headline} />
              </h1>
              <p className="audit-hero-sub">{page.sub}</p>
              <p className="audit-hero-meta">{page.meta}</p>
            </div>
          </div>
        </section>

        {/* ─── Prompt ──────────────────────────────────────────────── */}
        <section className="section-wrap audit-prompt-band">
          <div className="container section-pad">
            <div className="audit-section-head">
              <h2>{page.promptHead.headline}</h2>
              <p>{page.promptHead.lede}</p>
            </div>

            <div className="audit-prompt-wrap">
              <PromptWindow />
            </div>

            <p className="audit-prompt-after">{page.promptAfter}</p>
          </div>
        </section>

        {/* ─── How to use it ───────────────────────────────────────── */}
        <section className="section-wrap audit-howto">
          <div className="container section-pad">
            <div className="audit-section-head">
              <h2>{page.howtoHeadline}</h2>
            </div>

            <div className="audit-howto-grid">
              {page.howtoSteps.map((step) => (
                <article key={step.num} className="audit-howto-card">
                  <p className="audit-howto-num">{step.num}</p>
                  <h3 className="audit-howto-title">{step.title}</h3>
                  <p className="audit-howto-body">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ (reuses the home-page accordion component) ─────── */}
        <Faq headline={page.faqHeadline} items={page.faqItems} />

        {/* ─── Soft handoff to the main system ─────────────────────── */}
        <section className="section-wrap audit-handoff grid-texture">
          <div className="container section-pad">
            <div className="audit-handoff-inner">
              <h2>
                <Highlight text={page.handoffHeadline} />
              </h2>
              <p className="audit-handoff-sub">{page.handoffSub}</p>
              <Link to="/#pricing" className="btn-primary">
                {page.handoffCta}
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
