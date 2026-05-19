import { CONTENT } from '../config/content.js'
import { SITE } from '../config/site.js'

/**
 * Footer — deepest dark band.
 */
export default function Footer() {
  const { footer } = CONTENT

  return (
    <footer className="section-wrap bg-dark-2 footer">
      <p className="footer-tagline">{footer.tagline}</p>
      <div className="footer-links">
        <a href={SITE.links.support}>Support</a>
        <a href={SITE.links.terms}>Terms</a>
        <a href={SITE.links.privacy}>Privacy</a>
      </div>
      <p className="footer-meta">
        © {new Date().getFullYear()} {SITE.brand}. All rights reserved.
      </p>
    </footer>
  )
}
