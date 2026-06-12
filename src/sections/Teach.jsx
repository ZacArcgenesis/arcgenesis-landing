import { CONTENT } from '../config/content.js'
import Highlight from '../components/Highlight.jsx'
import ProseBlocks from '../components/ProseBlocks.jsx'
import MonthChart from '../components/MonthChart.jsx'

/**
 * Teach — light band. Builds trust by teaching the core idea before any ask.
 * This is the most important copy beat for a warm-but-skeptical visitor.
 * Body renders via ProseBlocks: short chunks with one bolded landing point
 * each, plus the pull-quote pattern interrupt — visitors scan, they don't
 * read, so the emphasis has to carry the argument on its own.
 *
 * The approved "month, twice" chart sits after the second paragraph (the
 * foundation paragraph): the copy names the foundation, the chart shows it.
 */
export default function Teach() {
  const { teach } = CONTENT

  return (
    <section id="start" className="section-wrap bg-gray">
      <div className="container section-pad">
        <div className="prose">
          <div className="accent-bar" />
          <h2 className="headline-lg">
            <Highlight text={teach.headline} />
          </h2>
          <div
            style={{
              marginTop: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.375rem',
            }}
          >
            <ProseBlocks blocks={teach.body.slice(0, 2)} />
            <MonthChart />
            <ProseBlocks blocks={teach.body.slice(2)} />
          </div>
        </div>
      </div>
    </section>
  )
}
