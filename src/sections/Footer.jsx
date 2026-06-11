import { Link } from 'react-router-dom'
import { CONTENT } from '../config/content.js'
import { SITE } from '../config/site.js'

/**
 * Footer — deepest dark band. Terms and privacy are internal routes, so they
 * go through react-router; support stays a plain mailto link.
 */
export default function Footer() {
  const { footer } = CONTENT

  return (
    <footer className="section-wrap bg-dark-2 footer">
      <p className="footer-tagline">{footer.tagline}</p>
      <div className="footer-links">
        <a href={SITE.links.support}>Support</a>
        <Link to={SITE.links.terms}>Terms</Link>
        <Link to={SITE.links.privacy}>Privacy</Link>
      </div>
      <p className="footer-meta">
        © {new Date().getFullYear()} {SITE.brand}. All rights reserved.
      </p>
    </footer>
  )
}
