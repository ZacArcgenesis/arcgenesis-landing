import Navbar from '../sections/Navbar.jsx'
import Footer from '../sections/Footer.jsx'

/**
 * LegalPage — shared minimal layout for /terms and /privacy.
 * Takes a `page` block from CONTENT.legal (title, updated, sections).
 *
 * The copy in content.js is plain-language TEMPLATE LANGUAGE, NOT LEGAL
 * ADVICE — Zac should review it before launch.
 */
export default function LegalPage({ page }) {
  return (
    <>
      <Navbar />
      <main>
        <section className="section-wrap bg-white">
          <div className="container section-pad">
            <div className="prose legal-prose">
              <div className="accent-bar" />
              <h1 className="headline-lg">{page.title}</h1>
              <p className="legal-updated">{page.updated}</p>

              {page.sections.map((s) => (
                <section key={s.heading} className="legal-section">
                  <h2 className="legal-heading">{s.heading}</h2>
                  {s.body.map((para, i) => (
                    <p key={i} className="legal-body">{para}</p>
                  ))}
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
