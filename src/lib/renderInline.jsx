import { Link } from 'react-router-dom'

/**
 * renderInline — inline markup for prose blocks in content.js.
 * Shared by the guide pages and the main-page prose sections.
 *
 * Recognized patterns:
 *   **bold**         → <strong>
 *   ((kicker))       → <span class="guide-kicker"> (small uppercase cyan marker)
 *   [text](/path)    → <Link to="/path">  (internal route)
 *   [text](https://) → <a href="...">     (external; opens in new tab)
 */
export function renderInline(text) {
  if (text == null) return null
  const parts = String(text).split(/(\*\*[^*]+\*\*|\(\([^)]+\)\)|\[[^\]]+\]\([^)]+\))/g)
  return parts.map((part, i) => {
    const boldMatch = part.match(/^\*\*(.+)\*\*$/)
    if (boldMatch) return <strong key={i}>{boldMatch[1]}</strong>
    const kickerMatch = part.match(/^\(\((.+)\)\)$/)
    if (kickerMatch) return <span key={i} className="guide-kicker">{kickerMatch[1]}</span>
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (linkMatch) {
      const [, label, url] = linkMatch
      if (url.startsWith('/')) {
        return <Link key={i} to={url} className="guide-inline-link">{label}</Link>
      }
      return (
        <a key={i} href={url} target="_blank" rel="noreferrer" className="guide-inline-link">
          {label}
        </a>
      )
    }
    return part
  })
}
