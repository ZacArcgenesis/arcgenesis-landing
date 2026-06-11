import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CONTENT } from '../config/content.js'
import Highlight from '../components/Highlight.jsx'
import PromptWindow from '../components/PromptWindow.jsx'
import EmailCapture from '../components/EmailCapture.jsx'
import Navbar from '../sections/Navbar.jsx'
import Footer from '../sections/Footer.jsx'
import { renderInline } from '../lib/renderInline.jsx'

/**
 * GuidePage — the shared layout for every pillar guide.
 *
 * Sections render as an accordion: one open at a time so a 7k-word article
 * compresses to a tight list of section titles. First section opens by
 * default. Click a closed section to open it (auto-collapses the previous);
 * click an already-open section to close it.
 *
 * Takes a `guide` config block (from CONTENT.guides) and a `prompt` object.
 */
export default function GuidePage({ guide, prompt }) {
  const [open, setOpen] = useState(0)

  const crosslinkItems = (CONTENT.crosslink?.items ?? []).filter(
    (item) => !item.to.endsWith(`/${guide.slug}`)
  )

  return (
    <>
      <Navbar />
      <main>
        {/* ─── Hero ────────────────────────────────────────────────── */}
        <section className="section-wrap audit-hero grid-texture">
          <div className="audit-hero-glow" aria-hidden="true" />
          <div className="container">
            <div className="audit-hero-inner">
              <span className="eyebrow">{guide.eyebrow}</span>
              <h1 className="headline-xl on-dark">
                <Highlight text={guide.title} />
              </h1>
              <p className="audit-hero-sub">{guide.intro}</p>
              <p className="audit-hero-meta">
                {guide.readingTime} · {guide.sections.length} sections
              </p>
            </div>
          </div>
        </section>

        {/* ─── Article body (accordion) ────────────────────────────── */}
        <section className="section-wrap guide-article-band">
          <div className="container section-pad">
            <div className="guide-accordion">
              {guide.sections.map((s, i) => {
                const isOpen = open === i
                const num = String(i + 1).padStart(2, '0')
                return (
                  <div
                    key={s.id}
                    id={s.id}
                    className={`guide-accordion-item${isOpen ? ' is-open' : ''}`}
                  >
                    <button
                      type="button"
                      className="guide-accordion-header"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      aria-controls={`${s.id}-body`}
                    >
                      <span className="guide-accordion-num">{num}</span>
                      <span className="guide-accordion-headline">
                        {s.headline}
                      </span>
                      <span
                        className="guide-accordion-chevron"
                        aria-hidden="true"
                      >
                        ▾
                      </span>
                    </button>
                    <div
                      id={`${s.id}-body`}
                      className="guide-accordion-body"
                      role="region"
                    >
                      <div className="guide-accordion-body-inner">
                        {s.body.map((block, idx) => {
                          if (typeof block === 'string') {
                            return (
                              <p key={idx} className="guide-section-p">
                                {renderInline(block)}
                              </p>
                            )
                          }
                          if (block && block.kind === 'h3') {
                            return (
                              <h3 key={idx} className="guide-section-h3">
                                {block.text}
                              </h3>
                            )
                          }
                          if (block && block.kind === 'list') {
                            return (
                              <ul key={idx} className="guide-section-list">
                                {block.items.map((item, j) => (
                                  <li key={j}>{renderInline(item)}</li>
                                ))}
                              </ul>
                            )
                          }
                          if (block && block.kind === 'pull-quote') {
                            return (
                              <blockquote
                                key={idx}
                                className="guide-section-pullquote"
                              >
                                {renderInline(block.text)}
                              </blockquote>
                            )
                          }
                          return null
                        })}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─── Embedded prompt (rendered only when a prompt is passed) ─ */}
        {prompt && (
          <section className="section-wrap audit-prompt-band">
            <div className="container section-pad">
              <div className="audit-section-head">
                <h2>{guide.promptHead.headline}</h2>
                <p>{guide.promptHead.lede}</p>
              </div>

              <div className="audit-prompt-wrap">
                <PromptWindow prompt={prompt} />
              </div>

              <p className="audit-prompt-after">{guide.promptAfter}</p>
            </div>
          </section>
        )}

        {/* ─── Email opt-in (after the value, before the ask) ───────── */}
        <section className="section-wrap guide-optin-band">
          <div className="container section-pad-sm">
            <EmailCapture
              copy={CONTENT.emailCapture.guides}
              source={`guide-${guide.slug}`}
            />
          </div>
        </section>

        {/* ─── Handoff CTA back to the main system ─────────────────── */}
        <section className="section-wrap audit-handoff grid-texture">
          <div className="container section-pad">
            <div className="audit-handoff-inner">
              <h2>
                <Highlight text={guide.handoffHeadline} />
              </h2>
              <p className="audit-handoff-sub">{guide.handoffSub}</p>
              <Link to="/#pricing" className="btn-primary">
                {guide.handoffCta}
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Cross-link strip ────────────────────────────────────── */}
        <section className="section-wrap crosslink-band">
          <div className="container section-pad-sm">
            <div className="audit-section-head text-center">
              <h2>{CONTENT.crosslink.headline}</h2>
            </div>

            <div className="crosslink-grid">
              {crosslinkItems.map((item) => (
                <Link key={item.to} to={item.to} className="crosslink-card">
                  <p className="crosslink-eyebrow">{item.eyebrow}</p>
                  <h3 className="crosslink-title">{item.title}</h3>
                  <p className="crosslink-line">{item.line}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
