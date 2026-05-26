import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { CONTENT } from '../config/content.js'

/**
 * Navbar — sticky, dark. Logo scrolls to top on the home page and navigates
 * home from any other page. Inline links (configured in content.nav.links)
 * sit to the right of the logo; an item with `children` renders as a hover
 * dropdown on desktop. The accent CTA pins to the far right and is
 * route-aware so it works from anywhere on the site.
 */
export default function Navbar() {
  const { nav } = CONTENT
  const location = useLocation()
  const navigate = useNavigate()
  const onHome = location.pathname === '/'

  function handleLogo() {
    if (onHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <button
          type="button"
          className="navbar-logo"
          onClick={handleLogo}
          aria-label="Back to top"
        >
          <img src="/logo-mark.png" alt="" className="navbar-mark" />
          <span className="navbar-logo-text">
            {nav.logoText}
            <span className="navbar-logo-suffix">{nav.logoSuffix}</span>
          </span>
        </button>

        <div className="navbar-right">
          {nav.links.map((link) =>
            link.children ? (
              <NavbarDropdown key={link.label} link={link} />
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `navbar-link${isActive ? ' is-active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            )
          )}
          {onHome ? (
            <a href="#pricing" className="navbar-cta">{nav.cta}</a>
          ) : (
            <Link to="/#pricing" className="navbar-cta">{nav.cta}</Link>
          )}
        </div>
      </div>
    </header>
  )
}

/**
 * NavbarDropdown — hover/focus dropdown. The trigger is a button so it can
 * be focused via keyboard; the panel opens via :hover and :focus-within so no
 * JS state is required.
 */
function NavbarDropdown({ link }) {
  return (
    <div className="navbar-dropdown">
      <button type="button" className="navbar-link navbar-dropdown-trigger">
        {link.label}
        <span className="navbar-dropdown-chevron" aria-hidden="true">▾</span>
      </button>
      <div className="navbar-dropdown-panel" role="menu">
        {link.children.map((child) => (
          <NavLink
            key={child.to}
            to={child.to}
            role="menuitem"
            className={({ isActive }) =>
              `navbar-dropdown-item${isActive ? ' is-active' : ''}`
            }
          >
            {child.label}
          </NavLink>
        ))}
      </div>
    </div>
  )
}
