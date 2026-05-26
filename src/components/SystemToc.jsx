import { useEffect, useState } from 'react'

/**
 * SystemToc — table of contents for the buyer's system delivery page.
 *
 * Two layouts on the same element, swapped by media query in CSS:
 *   Desktop (>=1024px): sticky vertical list on the left, scroll-spy active
 *   Mobile  (<1024px):  sticky "Jump to section" pill that opens a
 *                       slide-down panel of the same items.
 *
 * Scroll-spy uses IntersectionObserver against the section IDs passed in.
 * Active item is whichever section is currently nearest the top of the
 * viewport. The clicked anchor sets the URL hash; the page's
 * ScrollOnNavigate handler in main.jsx does the smooth scroll.
 */
export default function SystemToc({ sections }) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? null)
  const [isOpen, setIsOpen] = useState(false)

  // Scroll-spy: mark the section nearest the top of the viewport as active.
  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean)
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the topmost intersecting entry (smallest top value).
        const visible = entries.filter((e) => e.isIntersecting)
        if (!visible.length) return
        visible.sort(
          (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
        )
        setActiveId(visible[0].target.id)
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sections])

  const activeLabel = sections.find((s) => s.id === activeId)?.label

  return (
    <aside className={`system-toc${isOpen ? ' is-open' : ''}`}>
      {/* Mobile pill — clickable label that toggles the list open. */}
      <button
        type="button"
        className="system-toc-pill"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-controls="system-toc-nav"
      >
        <span className="system-toc-pill-label">
          {isOpen ? 'Jump to section' : activeLabel || 'Jump to section'}
        </span>
        <span className="system-toc-pill-chevron" aria-hidden="true">▾</span>
      </button>

      {/* The list. Always visible on desktop; on mobile only when open. */}
      <nav
        id="system-toc-nav"
        className="system-toc-nav"
        aria-label="Sections"
      >
        <p className="system-toc-eyebrow">Sections</p>
        <ul>
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`system-toc-link${
                  s.id === activeId ? ' is-active' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
