import { renderInline } from '../lib/renderInline.jsx'

/**
 * ProseBlocks — renders a content.js body array for main-page prose
 * sections (Teach, Guide). Two block shapes are supported:
 *
 *   'plain string'                        → paragraph (inline markup applies)
 *   { kind: 'pull-quote', text: '...' }   → cyan-bar pull quote
 *
 * Strings support the **bold** / ((kicker)) / [link](...) markers via
 * renderInline, so emphasis lives in content.js with the copy. Bolds are
 * the landing points for scanning readers — keep them to roughly one
 * phrase per paragraph or they stop working.
 */
export default function ProseBlocks({ blocks, pClassName = 'lead' }) {
  return blocks.map((block, i) => {
    if (typeof block === 'string') {
      return (
        <p key={i} className={pClassName} style={{ margin: 0 }}>
          {renderInline(block)}
        </p>
      )
    }
    if (block && block.kind === 'pull-quote') {
      return (
        <blockquote key={i} className="prose-pullquote">
          {renderInline(block.text)}
        </blockquote>
      )
    }
    return null
  })
}
