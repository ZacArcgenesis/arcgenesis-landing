import { useState } from 'react'
import './App.css'

// ─── Book Download Form ──────────────────────────────────────────────────────

function BookForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch(
        `https://api.convertkit.com/v3/forms/${import.meta.env.VITE_CONVERTKIT_BOOK_FORM_ID}/subscribe`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            api_key: import.meta.env.VITE_CONVERTKIT_API_KEY,
            email: email.trim(),
          }),
        }
      )
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.message || 'Something went wrong. Please try again.')
      }
      setStatus('success')
    } catch (err) {
      setErrorMsg(err.message)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="success-box">
        <strong>You're in.</strong> Check your inbox — the framework is on its way.
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="book-form-row">
        <input
          type="email"
          className="form-input"
          placeholder="Your email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          disabled={status === 'loading'}
          aria-label="Your email address"
        />
        <button
          type="submit"
          className="btn-primary"
          disabled={status === 'loading' || !email.trim()}
        >
          {status === 'loading' ? 'Sending…' : 'Send me the framework'}
        </button>
      </div>
      {status === 'error' && <p className="error-box" role="alert">{errorMsg}</p>}
      <p className="form-disclaimer">Free. No pitch attached. Just the framework.</p>
    </form>
  )
}

// ─── Cohort Application Form ─────────────────────────────────────────────────

function CohortForm() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    currentApproach: '',
    winDefinition: '',
  })
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const update = key => e => setFields(prev => ({ ...prev, [key]: e.target.value }))

  async function handleSubmit(e) {
    e.preventDefault()
    const { name, email, currentApproach, winDefinition } = fields
    if (!name.trim() || !email.trim() || !currentApproach.trim() || !winDefinition.trim()) return
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch(
        `https://api.convertkit.com/v3/forms/${import.meta.env.VITE_CONVERTKIT_COHORT_FORM_ID}/subscribe`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            api_key: import.meta.env.VITE_CONVERTKIT_API_KEY,
            email: email.trim(),
            first_name: name.trim(),
            fields: {
              current_system: currentApproach.trim(),
              win_definition: winDefinition.trim(),
            },
          }),
        }
      )
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.message || 'Something went wrong. Please try again.')
      }
      setStatus('success')
    } catch (err) {
      setErrorMsg(err.message)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="success-box success-box-dark">
        <strong>Application received.</strong> I'll be in touch within 48 hours.
      </div>
    )
  }

  const isComplete =
    fields.name.trim() && fields.email.trim() &&
    fields.currentApproach.trim() && fields.winDefinition.trim()

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      style={{ display: 'flex', flexDirection: 'column', gap: '1.375rem' }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.375rem' }}>
        <div>
          <label htmlFor="c-name" className="form-label form-label-dark">Your name</label>
          <input
            id="c-name"
            type="text"
            className="form-input form-input-dark"
            placeholder="Your name"
            value={fields.name}
            onChange={update('name')}
            required
            disabled={status === 'loading'}
          />
        </div>
        <div>
          <label htmlFor="c-email" className="form-label form-label-dark">Your email address</label>
          <input
            id="c-email"
            type="email"
            className="form-input form-input-dark"
            placeholder="Your email address"
            value={fields.email}
            onChange={update('email')}
            required
            disabled={status === 'loading'}
          />
        </div>
      </div>

      <div>
        <label htmlFor="c-approach" className="form-label form-label-dark">
          How are you currently staying in touch with your clients' heirs between formal meetings?
        </label>
        <textarea
          id="c-approach"
          className="form-input form-input-dark form-textarea"
          value={fields.currentApproach}
          onChange={update('currentApproach')}
          required
          disabled={status === 'loading'}
        />
      </div>

      <div>
        <label htmlFor="c-win" className="form-label form-label-dark">
          What would a win look like for you after 90 days?
        </label>
        <textarea
          id="c-win"
          className="form-input form-input-dark form-textarea"
          value={fields.winDefinition}
          onChange={update('winDefinition')}
          required
          disabled={status === 'loading'}
        />
      </div>

      <button
        type="submit"
        className="btn-primary btn-full"
        disabled={status === 'loading' || !isComplete}
        style={{ marginTop: '0.375rem' }}
      >
        {status === 'loading' ? 'Submitting…' : 'Submit — I\'ll be in touch within 48 hours'}
      </button>

      {status === 'error' && <p className="error-box" role="alert">{errorMsg}</p>}
    </form>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function App() {
  console.log('API Key:', import.meta.env.VITE_CONVERTKIT_API_KEY)
  console.log('Book Form ID:', import.meta.env.VITE_CONVERTKIT_BOOK_FORM_ID)
  console.log('Cohort Form ID:', import.meta.env.VITE_CONVERTKIT_COHORT_FORM_ID)
  return (
    <>
      {/* ── Navbar — full width ───────────────────────────────────────────── */}
      <header className="navbar">
        <div className="navbar-inner">
          <span className="navbar-logo">
            <span style={{ color: '#ffffff' }}>ArcGenesis</span>
            <span style={{ color: '#37d3f1' }}> Finance</span>
          </span>
          <a
            href="#get-framework"
            onClick={e => {
              e.preventDefault()
              document.getElementById('get-framework')?.scrollIntoView({ behavior: 'smooth' })
            }}
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: '0.9375rem',
              background: '#37d3f1',
              color: '#20232a',
              borderRadius: '6px',
              padding: '10px 20px',
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'filter 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.filter = 'brightness(0.88)'}
            onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}
          >
            Get the Framework
          </a>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════════════
          HERO — full width dark background
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="section-wrap bg-dark"
        style={{ borderTop: '4px solid var(--accent)' }}
      >
        <div className="container section-pad" style={{ maxWidth: '1400px' }}>
          <div className="hero-two-col">

            {/* Left: text */}
            <div className="hero-left">
              <h1 className="hero-headline">
                You've done everything right for your clients.{' '}
                <span style={{ color: 'var(--accent)' }}>And their heirs are still going to leave.</span>
              </h1>
              <p className="hero-sub">
                Only 20% of heirs keep their parents' financial advisor after inheritance. The other 80% don't leave because of bad performance. They leave because they <em>NEVER CHOSE YOU.</em>
              </p>
            </div>

            {/* Right: geometric SVG illustration */}
            <div className="hero-right">
              <svg
                viewBox="0 0 500 500"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: '100%', maxWidth: '560px', display: 'block' }}
                aria-hidden="true"
              >
                {/* Faint backdrop circle — slightly larger than anchor */}
                <circle cx="250" cy="265" r="195" fill="rgba(55,211,241,0.04)" />

                {/* Small faint rectangle — upper left */}
                <rect x="42" y="88" width="52" height="52" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

                {/* Main anchor circle — large, outlined */}
                <circle cx="250" cy="265" r="162" fill="rgba(55,211,241,0.06)" stroke="#37d3f1" strokeWidth="1.5" />

                {/* Secondary circle — upper right, faint fill */}
                <circle cx="392" cy="88" r="66" fill="rgba(55,211,241,0.12)" stroke="#37d3f1" strokeWidth="1" />

                {/* Faint outline circle — lower left */}
                <circle cx="80" cy="415" r="42" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />

                {/* Small faint rectangle — lower right */}
                <rect x="400" y="340" width="60" height="60" fill="rgba(55,211,241,0.08)" stroke="rgba(55,211,241,0.2)" strokeWidth="1" />

                {/* Connecting lines */}
                {/* Center to secondary circle */}
                <line x1="250" y1="265" x2="392" y2="88" stroke="#37d3f1" strokeWidth="0.75" opacity="0.35" />
                {/* Center to lower-left outline circle */}
                <line x1="250" y1="265" x2="80" y2="415" stroke="#37d3f1" strokeWidth="0.75" opacity="0.25" />
                {/* Secondary circle down to lower-right rect */}
                <line x1="392" y1="154" x2="430" y2="340" stroke="rgba(55,211,241,0.2)" strokeWidth="0.75" />
                {/* Upper-left rect to main circle edge */}
                <line x1="94" y1="114" x2="140" y2="175" stroke="rgba(55,211,241,0.25)" strokeWidth="0.75" />
                {/* Subtle horizontal crossing line */}
                <line x1="48" y1="265" x2="452" y2="265" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

                {/* Rotated square — overlapping center of main circle */}
                <rect
                  x="194" y="209"
                  width="112" height="112"
                  fill="none"
                  stroke="rgba(55,211,241,0.38)"
                  strokeWidth="1"
                  transform="rotate(45 250 265)"
                />

                {/* Accent dots — solid cyan */}
                {/* Center dot */}
                <circle cx="250" cy="265" r="6" fill="#37d3f1" />
                {/* Center of secondary circle */}
                <circle cx="392" cy="88" r="8" fill="#37d3f1" />
                {/* Lower-left small solid */}
                <circle cx="80" cy="415" r="14" fill="#37d3f1" />
                {/* Intersection hint — lower right */}
                <circle cx="430" cy="340" r="5" fill="#37d3f1" />
              </svg>
            </div>

          </div>
        </div>
      </section>

      <main>

          {/* ════════════════════════════════════════════════════════════════
              STORY — light gray
          ════════════════════════════════════════════════════════════════ */}
          <section className="section-wrap bg-gray">
            <div className="container section-pad">
              <div className="prose">

                <div className="accent-bar" />

                <h2 className="section-headline">Here's how it usually goes.</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.375rem', color: 'var(--muted)' }}>
                  <p style={{ margin: 0 }}>
                    A long-term client passes. You show up. You help the family navigate the immediate
                    logistics. You've served this household for twenty, sometimes thirty years — you know
                    the estate better than anyone in the room.
                  </p>
                  <p style={{ margin: 0 }}>And then you wait.</p>
                  <p style={{ margin: 0 }}>Because surely that counts for something.</p>
                </div>

                <blockquote className="pull-quote">
                  The heirs leave anyway. Not because you gave bad advice. Not because of your fees.
                  Because in their mind, you were their parents' advisor. Someone who came with the
                  estate — like the furniture. Someone their parents trusted, not someone{' '}
                  <em>they</em> trust.
                </blockquote>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.375rem', color: 'var(--muted)' }}>
                  <p style={{ margin: 0 }}>
                    And when the money is suddenly theirs and they finally have the chance to choose
                    for themselves, the most natural thing in the world is to find someone who feels
                    like their own.
                  </p>
                  <p style={{
                    margin: 0,
                    fontWeight: 600,
                    color: 'var(--text)',
                    fontSize: '1.125rem',
                    lineHeight: 1.65,
                  }}>
                    You didn't lose them. You never had them.
                  </p>
                  <p style={{ margin: 0 }}>
                    That's the real problem. And it has a solution — but only if you start before
                    inheritance happens.
                  </p>
                </div>

              </div>
            </div>
          </section>

          <hr className="section-rule" />

          {/* ════════════════════════════════════════════════════════════════
              FRAMEWORK + EMAIL FORM — white
          ════════════════════════════════════════════════════════════════ */}
          <section className="section-wrap bg-white">
            <div className="container section-pad">

              {/* Two-column: text left, book cover right */}
              <div className="framework-two-col" style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '4rem',
                alignItems: 'center',
                maxWidth: '900px',
                marginInline: 'auto',
                marginBottom: '3.5rem',
              }}>

                {/* Left: text */}
                <div>
                  <div className="accent-bar" />

                  <h2 className="section-headline">
                    <em style={{ fontStyle: 'normal' }}>The Advisor They Chose</em>
                  </h2>

                  <p style={{ margin: '0 0 2rem', fontSize: '1.125rem', color: 'var(--muted)', lineHeight: 1.75 }}>
                    A free 40-page framework for financial advisors who want to become the next
                    generation's advisor before the wealth ever transfers.
                  </p>

                  <p style={{ margin: '0 0 1.25rem', fontWeight: 600, color: 'var(--text)', fontSize: '1rem' }}>
                    Inside, you'll learn:
                  </p>

                  <ul className="feature-list">
                    {[
                      'Why heirs really leave — and why it has nothing to do with your performance',
                      'The five relationship roles that turn a stranger heir into a lifelong client, in the right order',
                      'A practical touchpoint system you can start using this week — without adding more meetings to your calendar',
                    ].map((item, i) => (
                      <li key={i}>
                        <span className="feature-dot" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: book cover, centered in column */}
                <div className="book-cover-col" style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <img
                    src="/book-cover.png"
                    alt="The Advisor They Chose — book cover"
                    style={{
                      width: '300px',
                      borderRadius: '6px',
                      boxShadow: '0 12px 40px rgba(32,35,42,0.18)',
                      display: 'block',
                    }}
                  />
                </div>

              </div>

              {/* Email form — centered, its own container */}
              <div id="get-framework" style={{ maxWidth: '700px', marginInline: 'auto', scrollMarginTop: '200px' }}>
                <div className="framework-card">
                  <BookForm />
                </div>
              </div>

            </div>
          </section>

      </main>

      {/* ══════════════════════════════════════════════════════════════════
          COHORT — full width dark background
      ══════════════════════════════════════════════════════════════════ */}
      <section className="section-wrap bg-dark">
        <div className="container section-pad">
          <div className="prose">

            <div className="accent-bar" />

            <h2 className="section-headline section-headline-white">Want to go deeper?</h2>

            <p style={{
              fontSize: '1.1875rem',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.65)',
              margin: '0 0 2.75rem',
              lineHeight: 1.7,
            }}>
              I'm looking for five advisors to work with personally over the next 90 days.
            </p>

            <p style={{
              margin: '0 0 1.125rem',
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: '1.125rem',
              color: 'rgba(255,255,255,0.9)',
            }}>
              Here's what that looks like.
            </p>

            <p style={{ margin: '0 0 2.75rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
              Once a week, we review your heir priority list together — which relationships need
              attention, why, and exactly what to do next. You get direct access to the tools
              I've built to support this framework, and I get honest feedback from someone
              actually using them in a real practice.
            </p>

            <div className="guarantee-box">
              <span className="guarantee-title">The guarantee.</span>
              <p>
                If you don't have at least two meaningful touchpoints with three heirs you weren't
                previously engaging — touchpoints that moved the relationship forward in a way you
                can describe specifically — you don't pay anything. Not a dollar.
              </p>
            </div>

            <p style={{ margin: '0 0 2.75rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
              I'm not looking for advisors who think this sounds interesting. I'm looking for
              advisors who already feel this problem and are ready to do something about it.
            </p>

            <p style={{
              margin: '0 0 2rem',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.85)',
              fontSize: '1.0625rem',
            }}>
              If that's you, tell me a little about where you are:
            </p>

            <CohortForm />

            <p className="spots-note">
              Five spots. Currently <strong>5</strong> remaining.
            </p>

          </div>
        </div>
      </section>

      {/* ── Footer — full width ── */}
      <footer
        className="bg-dark"
        style={{
          borderTop: '1px solid rgba(255,255,255,0.07)',
          padding: '2rem var(--px)',
          textAlign: 'center',
          fontSize: '0.8125rem',
          color: 'rgba(255,255,255,0.25)',
        }}
      >
        © {new Date().getFullYear()} ArcGenesis Finance. All rights reserved.
      </footer>
    </>
  )
}
