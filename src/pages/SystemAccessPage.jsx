import { useState } from 'react'
import JSZip from 'jszip'
import { CONTENT } from '../config/content.js'
import Highlight from '../components/Highlight.jsx'
import PromptWindow from '../components/PromptWindow.jsx'
import SystemToc from '../components/SystemToc.jsx'
import Navbar from '../sections/Navbar.jsx'
import Footer from '../sections/Footer.jsx'
import {
  SYSTEM_PROMPTS,
  ONGOING_PROMPTS,
  SETUP_PHASES,
  getPhaseTools,
} from '../config/system-prompts.js'

/**
 * SystemAccessPage — the buyer-only delivery page for the 4 Hours to
 * Financial Confidence System. Linked from the post-purchase email
 * (Kit.com) and lives at an obscure slug under /system/.
 *
 * The structure mirrors the roadmap PDF that ships with the system:
 *   - Hero with welcome + download-all
 *   - "Start here" orientation block (how to run a tool, before-you-start,
 *     AI notes)
 *   - Four setup phase sections (Orientation, Diagnosis, Design, Execution)
 *     with their tools grouped underneath
 *   - Ongoing toolkit section with the four permanent tools
 *
 * The page is intentionally never linked from the public site. The slug is
 * the access mechanism — same tier as a Google Drive "anyone with the link"
 * share. The chunk is lazy-loaded so the prompt bodies don't ship in the
 * main bundle for casual visitors.
 */
export default function SystemAccessPage() {
  const page = CONTENT.systemAccessPage
  const [downloadState, setDownloadState] = useState('idle')

  async function downloadAll() {
    setDownloadState('working')
    try {
      const zip = new JSZip()
      const folder = zip.folder('4hours-finance-system')
      SYSTEM_PROMPTS.forEach((tool) => {
        folder.file(tool.prompt.fileName, tool.prompt.body)
      })
      const blob = await zip.generateAsync({ type: 'blob' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = '4hours-finance-system.zip'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
      setDownloadState('done')
      setTimeout(() => setDownloadState('idle'), 3000)
    } catch {
      setDownloadState('idle')
    }
  }

  const downloadLabel =
    downloadState === 'working'
      ? page.downloadingLabel
      : downloadState === 'done'
      ? page.downloadedLabel
      : page.downloadLabel

  // Global tool index across phases so each card shows 01–10 in order.
  let toolCounter = 0

  // TOC sections — kept in the same order they appear on the page.
  const tocSections = [
    { id: 'start-here', label: 'Start here' },
    ...SETUP_PHASES.map((phase) => ({
      id: `phase-${phase.num}`,
      label: `Phase ${phase.num}: ${phase.name}`,
    })),
    { id: 'ongoing-toolkit', label: 'Ongoing toolkit' },
  ]

  return (
    <>
      <Navbar />
      <main>
        {/* ─── Hero ────────────────────────────────────────────────── */}
        <section className="section-wrap audit-hero grid-texture">
          <div className="audit-hero-glow" aria-hidden="true" />
          <div className="container">
            <div className="audit-hero-inner">
              <span className="eyebrow">{page.heroEyebrow}</span>
              <h1 className="headline-xl on-dark">
                <Highlight text={page.heroHeadline} />
              </h1>
              <p className="audit-hero-sub">{page.heroSub}</p>
              <div className="system-download-row">
                <button
                  type="button"
                  className="btn-primary system-download-btn"
                  onClick={downloadAll}
                  disabled={downloadState === 'working'}
                >
                  {downloadLabel}
                </button>
                <a href="#phase-1" className="btn-ghost system-download-btn">
                  {page.viewPromptsLabel}
                </a>
              </div>
              <p className="audit-hero-meta">{page.heroMeta}</p>
            </div>
          </div>
        </section>

        {/* ─── TOC + content wrap. The hero stays full-width above. ── */}
        <div className="system-toc-layout">
          <SystemToc sections={tocSections} />

          <div className="system-toc-main">

        {/* ─── Start here / orientation ────────────────────────────── */}
        <section id="start-here" className="section-wrap system-section">
          <div className="container section-pad">
            <div className="audit-section-head">
              <span className="eyebrow">{page.orientationEyebrow}</span>
              <h2>{page.orientationHeadline}</h2>
              <p>{page.orientationLede}</p>
            </div>

            <div className="system-orientation">
              <OrientationBlock title={page.howToRunHeadline}>
                <ol className="system-orientation-ol">
                  {page.howToRunSteps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </OrientationBlock>

              <OrientationBlock title={page.beforeYouStartHeadline}>
                <DefinitionList items={page.beforeYouStart} />
              </OrientationBlock>

              <OrientationBlock title={page.aiNotesHeadline}>
                <DefinitionList items={page.aiNotes} />
              </OrientationBlock>

              <p className="system-orientation-closing">
                {page.orientationClosing}
              </p>
            </div>
          </div>
        </section>

        {/* ─── Setup phases (1–4) ──────────────────────────────────── */}
        {SETUP_PHASES.map((phase, phaseIdx) => {
          const tools = getPhaseTools(phase)
          // Alternate light gray / white bands across phases.
          const isAlt = phaseIdx % 2 === 0
          return (
            <section
              key={phase.num}
              id={`phase-${phase.num}`}
              className={`section-wrap system-section${isAlt ? ' system-section-alt' : ''}`}
            >
              <div className="container section-pad">
                <div className="audit-section-head">
                  <span className="eyebrow">
                    Phase {phase.num} · {phase.time}
                  </span>
                  <h2>{phase.name}.</h2>
                  <p>{phase.description}</p>
                </div>

                <div className="system-tool-list">
                  {tools.map((tool) => {
                    toolCounter += 1
                    return (
                      <ToolCard
                        key={tool.id}
                        tool={tool}
                        index={toolCounter}
                      />
                    )
                  })}
                </div>

                {phase.hasWalkthrough && <WalkthroughCallout data={page.walkthrough} />}
              </div>
            </section>
          )
        })}

        {/* ─── Ongoing toolkit ─────────────────────────────────────── */}
        <section
          id="ongoing-toolkit"
          className={`section-wrap system-section${
            SETUP_PHASES.length % 2 === 0 ? ' system-section-alt' : ''
          }`}
        >
          <div className="container section-pad">
            <div className="audit-section-head">
              <span className="eyebrow">{page.ongoingEyebrow}</span>
              <h2>{page.ongoingHeadline}</h2>
              <p>{page.ongoingDescription}</p>
            </div>

            <div className="system-tool-list">
              {ONGOING_PROMPTS.map((tool) => {
                toolCounter += 1
                return (
                  <ToolCard key={tool.id} tool={tool} index={toolCounter} />
                )
              })}
            </div>
          </div>
        </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

function OrientationBlock({ title, children }) {
  return (
    <div className="system-orientation-block">
      <h3 className="system-orientation-block-title">{title}</h3>
      {children}
    </div>
  )
}

function DefinitionList({ items }) {
  return (
    <dl className="system-definition-list">
      {items.map((item, i) => (
        <div key={i} className="system-definition-row">
          <dt>{item.title}</dt>
          <dd>{item.body}</dd>
        </div>
      ))}
    </dl>
  )
}

function WalkthroughCallout({ data }) {
  return (
    <aside className="system-walkthrough">
      <p className="system-walkthrough-label">{data.label}</p>
      <p className="system-walkthrough-body">{data.body}</p>
      <a
        href={data.url}
        className="system-walkthrough-cta"
        target="_blank"
        rel="noreferrer"
      >
        {data.cta}
      </a>
    </aside>
  )
}

function ToolCard({ tool, index }) {
  const num = String(index).padStart(2, '0')
  return (
    <article className="system-tool-card" id={tool.id}>
      <header className="system-tool-header">
        <p className="system-tool-num">{num}</p>
        <h3 className="system-tool-name">{tool.name}</h3>
        <p className="system-tool-line">{tool.line}</p>
      </header>
      <PromptWindow prompt={tool.prompt} />
    </article>
  )
}
