import { Link } from 'react-router-dom'
import { CONTENT } from '../config/content.js'
import Highlight from '../components/Highlight.jsx'
import Navbar from '../sections/Navbar.jsx'
import Footer from '../sections/Footer.jsx'

/**
 * NotFoundPage — catch-all for unknown URLs. Reuses the audit-hero styling
 * so it reads as a normal page of the site. Intentionally identical for
 * every bad path (including wrong /system/ slugs) so the URL space gives
 * nothing away.
 */
export default function NotFoundPage() {
  const { notFound } = CONTENT

  return (
    <>
      <Navbar />
      <main>
        <section className="section-wrap audit-hero grid-texture">
          <div className="audit-hero-glow" aria-hidden="true" />
          <div className="container">
            <div className="audit-hero-inner">
              <h1 className="headline-xl on-dark">
                <Highlight text={notFound.headline} />
              </h1>
              <p className="audit-hero-sub">{notFound.body}</p>
              <div style={{ marginTop: '2.25rem' }}>
                <Link to="/" className="btn-primary">{notFound.cta}</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
