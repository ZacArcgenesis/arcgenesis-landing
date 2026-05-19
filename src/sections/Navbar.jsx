import { CONTENT } from '../config/content.js'

/**
 * Navbar — sticky, dark. Logo scrolls to top, CTA jumps to pricing.
 */
export default function Navbar() {
  const { nav } = CONTENT

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <button
          type="button"
          className="navbar-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <img src="/logo-mark.png" alt="" className="navbar-mark" />
          <span className="navbar-logo-text">
            {nav.logoText}
            <span className="navbar-logo-suffix">{nav.logoSuffix}</span>
          </span>
        </button>
        <a href="#pricing" className="navbar-cta">{nav.cta}</a>
      </div>
    </header>
  )
}
