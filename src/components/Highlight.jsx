/**
 * Highlight — renders accent-colored spans from {{double-brace}} markers.
 *
 * In content.js, write:  "Spend less than you earn. {{Consistently.}}"
 * and the text inside {{ }} renders in the cyan accent color.
 */
export default function Highlight({ text }) {
  if (!text) return null
  const parts = text.split(/(\{\{[^}]+\}\})/g)
  return parts.map((part, i) => {
    const match = part.match(/^\{\{([^}]+)\}\}$/)
    return match ? (
      <span key={i} className="accent">{match[1]}</span>
    ) : (
      <span key={i}>{part}</span>
    )
  })
}
