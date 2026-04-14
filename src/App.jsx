import { useState, useEffect, useRef } from 'react'
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
      <p className="form-disclaimer">Free. No strings attached.</p>
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

// ─── Phone Section ───────────────────────────────────────────────────────────

const PS_SCENES = [
  {
    num: 'Scene 1 of 3',
    title: 'This is what heirs are getting right now.',
    body: 'A quarterly market update. Sent to every client family on the list. Her name is a mail merge field.',
    bullets: [
      { text: 'No personal connection', color: '#c0626a' },
      { text: 'Nothing about her life', color: '#c0626a' },
      { text: 'Opened, deleted, forgotten', color: '#c0626a' },
    ],
  },
  {
    num: 'Scene 2 of 3',
    title: 'One message changes everything.',
    body: 'Same advisor. Same heir. Completely different relationship.',
    bullets: [
      { text: 'Specific to her life', color: '#4fa876' },
      { text: 'Timed perfectly', color: '#4fa876' },
      { text: 'She replied. Then called.', color: '#4fa876' },
    ],
  },
  {
    num: 'Scene 3 of 3',
    title: 'Now do that across your entire book.',
    body: 'Every heir. Every message personal. Every relationship moving. 30 minutes a week.',
    bullets: [
      { text: '5 heirs — a personal message for each', color: '#0891b2' },
      { text: '20 heirs — still personal, still specific', color: '#0891b2' },
      { text: '50 heirs — your entire book, covered', color: '#0891b2' },
    ],
  },
]

const PS_PHONE_DATA = [
  { n: 'Ava',    a: "Saw the student loan article — ran some numbers on your situation.",           r: "Yes. Been losing sleep over this." },
  { n: 'Ben',    a: "Checking in on that business idea you floated. Talked to anyone yet?",        r: "Met with someone last week. Need your take." },
  { n: 'Cara',   a: "New job starting — worth rolling over your old 401k before you forget.",      r: "Completely forgot about that. Thank you." },
  { n: 'Dan',    a: "Before the truck purchase — let's look at what financing does to your timeline.", r: "Good call. Can we talk this week?" },
  { n: 'Elise',  a: "Saw the layoff news in your field. Checking in before you had to wonder.",    r: "Honestly a little nervous. Would love to talk." },
  { n: 'Frank',  a: "Hit the 3-month emergency fund goal. Most people never actually get there.",  r: "First time I've felt financially stable. Thank you." },
  { n: 'Grace',  a: "Wedding coming up — have you two talked through combining finances yet?",     r: "We haven't. Can we schedule something soon?" },
  { n: 'Henry',  a: "Market pullback this week doesn't affect your timeline at all.",              r: "Appreciate that. Was about to text you." },
  { n: 'Iris',   a: "Roth conversion window is narrower than people realize. Short call before December?", r: "Yes — been meaning to ask about this." },
  { n: 'Jake',   a: "How's the new city? Need any local financial referrals?",                     r: "Love it here. Actually need a local CPA." },
  { n: 'Kim',    a: "Your parents' documents probably haven't been updated in years.",             r: "You're right. I've been avoiding it." },
  { n: 'Leo',    a: "Congrats on the promotion — your withholding probably needs an update.",      r: "Didn't even think of that. Yes please." },
  { n: 'Mia',    a: "Freelance income will hit differently at tax time. Want to get ahead of it?", r: "Last year was a mess. Let's do it." },
  { n: 'Noah',   a: "You asked about I-bonds last year — rates just changed, still makes sense.",  r: "Perfect timing. Just looking this up." },
  { n: 'Olivia', a: "Checking in after the big move. How are you settling in financially?",        r: "It's been a lot. Would love to reconnect." },
  { n: 'Paul',   a: "Home sale equity has been sitting in cash. Want to make sure that's intentional.", r: "Ha. Definitely procrastination. Call me?" },
  { n: 'Quinn',  a: "You mentioned investing this year — volatility right now is worth discussing.", r: "Been waiting for the right moment." },
  { n: 'Rosa',   a: "Inheritance conversations don't have to be adversarial. Happy to help facilitate.", r: "My brother and I need to align. Help?" },
  { n: 'Sam',    a: "Your car loan rate is higher than it needs to be. Refinancing worth a look.",  r: "Had no idea that was even an option." },
  { n: 'Tara',   a: "Hit the 6-month savings target — let's talk about what the next goal looks like.", r: "I've been waiting to tell you this." },
]

// Shared phone visuals — used in both desktop and mobile renders
function PSVisual0() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
      <div className="ps-phone" style={{ width: '220px', height: '440px' }}>
        <div className="ps-phone-top"><span className="ps-ptime">9:41</span><span className="ps-ptime">●●●</span></div>
        <div className="ps-pscreen">
          <div className="ps-email-sender">
            <div className="ps-av">JW</div>
            <div>
              <div style={{ fontSize: '9px', fontWeight: 600, color: '#111' }}>James Whitfield, CFP</div>
              <div style={{ fontSize: '7px', color: '#888' }}>james@whitfieldwealth.com</div>
            </div>
          </div>
          <div className="ps-email-head">
            <div style={{ fontSize: '8px', color: '#999', marginBottom: '1px' }}>From: james@whitfieldwealth.com</div>
            <div style={{ fontSize: '10px', fontWeight: 600, color: '#111', marginBottom: '1px' }}>Q1 2026 Market Commentary</div>
            <div style={{ fontSize: '7px', color: '#bbb' }}>To: Client Families · Whitfield Wealth</div>
          </div>
          <div className="ps-email-body">
            Dear Valued Client Family,<br /><br />
            As we close out Q1 2026, I wanted to share some thoughts on recent market activity and what it may mean for your long-term financial plan.<br /><br />
            The S&P 500 experienced moderate volatility, driven primarily by interest rate uncertainty...
            <div style={{ fontSize: '7px', color: '#ccc', marginTop: '8px', paddingTop: '7px', borderTop: '0.5px solid #eee' }}>
              To unsubscribe from future communications, click here.
            </div>
          </div>
          <div className="ps-noreply">No reply · Opened briefly · Deleted</div>
        </div>
      </div>
      <div style={{ maxWidth: '160px', fontSize: '13px', color: '#6b7385', lineHeight: 1.6 }}>
        Sarah felt like just another name on a list.
      </div>
    </div>
  )
}

function PSVisual1() {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
        <span className="ps-tag-r">Before</span>
        <div className="ps-phone" style={{ width: '190px', height: '400px' }}>
          <div className="ps-phone-top"><span className="ps-ptime">9:41</span><span className="ps-ptime">●●●</span></div>
          <div className="ps-pscreen">
            <div style={{ background: '#f5f5f5', padding: '6px 10px', borderBottom: '0.5px solid #ddd', flexShrink: 0 }}>
              <div style={{ fontSize: '8px', color: '#999' }}>From: james@whitfieldwealth.com</div>
              <div style={{ fontSize: '9px', fontWeight: 600, color: '#111' }}>Q1 2026 Market Commentary</div>
              <div style={{ fontSize: '7px', color: '#bbb' }}>To: Client Families</div>
            </div>
            <div style={{ padding: '9px 11px', flex: 1, fontSize: '8px', color: '#444', lineHeight: 1.55, overflow: 'hidden' }}>
              Dear Valued Client Family,<br /><br />As we close Q1 2026, I wanted to share thoughts on market activity...
            </div>
            <div className="ps-noreply">No reply · Deleted</div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
        <span className="ps-tag-c">After</span>
        <div className="ps-phone" style={{ width: '190px', height: '400px' }}>
          <div className="ps-phone-top"><span className="ps-ptime">9:41</span><span className="ps-ptime">●●●</span></div>
          <div className="ps-pdark">
            <div className="ps-sms-head"><div className="ps-sms-name">Sarah Whitmore</div></div>
            <div className="ps-sms-body">
              <div className="ps-bo">Saw the Fed announcement this morning and immediately thought of you. The house timeline you mentioned — nothing to worry about, it actually works in your favor. Worth a quick call?</div>
              <div style={{ height: '2px' }} />
              <div className="ps-bi">Wait, really? I've been stressed about this all morning.</div>
              <div className="ps-bo">Yes, really. Your rate is locked. Five minutes on Thursday?</div>
              <div className="ps-bi">Thursday works. Thank you, seriously.</div>
              <div className="ps-bread">Read · 9:44 AM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PSVisual2() {
  return (
    <div className="ps-grid-5">
      {PS_PHONE_DATA.map((p, i) => (
        <div key={i} className="ps-ph-sm" style={{ height: '115px' }}>
          <div className="ps-pt-sm"><span className="ps-ptime-sm">9:41</span></div>
          <div className="ps-pdark" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <div className="ps-sh-sm"><div className="ps-sn-sm">{p.n}</div></div>
            <div className="ps-sb-sm">
              <div className="ps-bo-sm">{p.a}</div>
              <div className="ps-bi-sm">{p.r}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const PS_VISUALS = [PSVisual0, PSVisual1, PSVisual2]

function PSSceneText({ scene, current, goTo }) {
  return (
    <div className="ps-scene-num-wrap">
      <div className="ps-scene-num">{scene.num}</div>
      <h3 className="ps-scene-title">{scene.title}</h3>
      <p className="ps-scene-body">{scene.body}</p>
      <div className="ps-bullets">
        {scene.bullets.map((b, j) => (
          <div key={j} className="ps-bullet">
            <div className="ps-bullet-dot" style={{ background: b.color }} />
            {b.text}
          </div>
        ))}
      </div>
      {goTo && (
        <div className="ps-progress">
          {[0, 1, 2].map(n => (
            <div key={n} className={`ps-pdot${current === n ? ' on' : ''}`} onClick={() => goTo(n)} />
          ))}
        </div>
      )}
    </div>
  )
}

function PhoneSection() {
  const [current, setCurrent] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const currentRef = useRef(0)
  const mobileRef = useRef(false)
  const outerRef = useRef(null)

  useEffect(() => {
    const check = () => {
      const m = window.innerWidth <= 768
      mobileRef.current = m
      setIsMobile(m)
    }
    check()
    window.addEventListener('resize', check, { passive: true })
    return () => window.removeEventListener('resize', check)
  }, [])

  function goTo(n) { currentRef.current = n; setCurrent(n) }

  useEffect(() => {
    function handleScroll() {
      if (mobileRef.current) return
      const outer = outerRef.current
      if (!outer) return
      const rect = outer.getBoundingClientRect()
      const total = outer.offsetHeight - window.innerHeight
      let scrolled = -rect.top
      if (scrolled < 0) scrolled = 0
      if (scrolled > total) scrolled = total
      const progress = scrolled / total
      const scene = progress < 0.33 ? 0 : progress < 0.66 ? 1 : 2
      if (scene !== currentRef.current) goTo(scene)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const header = (
    <div className="ps-header">
      <span className="eyebrow">See the difference</span>
      <h2 className="ps-headline">What heirs actually experience when you use ArcGenesis.</h2>
      <p className="ps-sub">Scroll through to see how the relationship changes — and what it looks like across your entire book.</p>
    </div>
  )

  // ── Mobile: flat interleaved layout ──────────────────────────────────────
  if (isMobile) {
    return (
      <section className="section-wrap bg-white">
        {header}
        <div className="ps-mobile-stack">
          {PS_SCENES.map((scene, i) => {
            const Visual = PS_VISUALS[i]
            return (
              <div key={i} className="ps-mobile-item">
                <PSSceneText scene={scene} current={i} goTo={null} />
                <div className="ps-mobile-visual">
                  <Visual />
                </div>
              </div>
            )
          })}
        </div>
      </section>
    )
  }

  // ── Desktop: sticky scroll ────────────────────────────────────────────────
  return (
    <section className="section-wrap bg-white">
      {header}
      <div className="ps-scroll-outer" ref={outerRef}>
        <div className="ps-scroll-sticky">
          <div className="ps-inner">
            <div className="ps-left">
              {PS_SCENES.map((scene, i) => (
                <div key={i} className={`ps-scene-block${current === i ? ' active' : ''}`}>
                  <PSSceneText scene={scene} current={current} goTo={goTo} />
                </div>
              ))}
            </div>
            <div className="ps-right">
              {PS_VISUALS.map((Visual, i) => (
                <div key={i} className={`ps-phone-scene${current === i ? ' active' : ''}`}>
                  <Visual />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Stats Strip ─────────────────────────────────────────────────────────────

function StatsStrip() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const stats = [
    { number: '$124T', label: 'will transfer to heirs in the next decade' },
    { number: '20%', label: 'of heirs keep their parents\' advisor' },
    { number: '30 min', label: 'a week can change that' },
  ]

  return (
    <section className="stats-strip">
      <div className="stats-strip-inner" ref={ref}>
        {stats.map((s, i) => (
          <div
            key={i}
            className={`stats-strip-item${visible ? ' visible' : ''}`}
            style={{ transitionDelay: `${i * 130}ms` }}
          >
            <span className="stats-strip-number">{s.number}</span>
            <span className="stats-strip-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
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
          <a
            href="#"
            className="navbar-logo"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            <img src="/logo-mark.png" alt="ArcGenesis" className="navbar-mark" />
            <span className="navbar-logo-text">RCGENESIS</span>
          </a>
          <a
            href="#get-framework"
            className="navbar-cta"
            onClick={e => {
              e.preventDefault()
              document.getElementById('get-framework')?.scrollIntoView({ behavior: 'smooth' })
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
        className="section-wrap bg-dark hero-section"
        style={{ borderTop: '4px solid var(--accent)' }}
      >
        <div className="container section-pad" style={{ maxWidth: '1400px' }}>
          <div className="hero-two-col">

            {/* Left: text */}
            <div className="hero-left">
              <span className="eyebrow">Heir Relationship Intelligence</span>
              <h1 className="hero-headline">
                You've done everything right for your clients.{' '}
                <span style={{ color: 'var(--accent)' }}>And their heirs are still going to leave.</span>
              </h1>
              <p className="hero-sub">
                Only 20% of heirs keep their parents' financial advisor after inheritance. The other 80% don't leave because of bad performance. They leave because they <em>never chose you.</em>
              </p>
            </div>

            {/* Right: dashboard mockup */}
            <div className="hero-right">
              <div className="hero-mockup">
                {/* Window chrome */}
                <div className="mockup-titlebar">
                  <div className="mockup-dots">
                    <span /><span /><span />
                  </div>
                  <span className="mockup-window-title">ArcGenesis · Heir Dashboard</span>
                </div>
                {/* Card list */}
                <div className="mockup-body">
                  <div className="mockup-card-header">
                    <span className="mockup-live-dot" />
                    <span className="mockup-card-title">Monday Briefing</span>
                    <span className="mockup-date">Apr 14</span>
                  </div>
                  {[
                    {
                      name: 'Marcus Chen',
                      stage: 'Building Trust',
                      stageColor: 'rgba(239,68,68,0.18)',
                      stageText: '#f87171',
                      borderColor: '#ef4444',
                      age: '47 days ago',
                      ageColor: '#f59e0b',
                      action: 'Resource share — forward the Roth conversion article. His Q2 deadline is approaching in 11 days.',
                      actionColor: '#37d3f1',
                    },
                    {
                      name: 'Sarah Whitmore',
                      stage: 'Getting Acquainted',
                      stageColor: 'rgba(100,116,139,0.2)',
                      stageText: '#94a3b8',
                      borderColor: '#475569',
                      age: '28 days ago',
                      ageColor: '#f59e0b',
                      action: 'Personal check-in — follow up on the job offer she mentioned in March. That window is still open.',
                      actionColor: '#37d3f1',
                    },
                    {
                      name: 'David Park',
                      stage: 'Active Partnership',
                      stageColor: 'rgba(34,197,94,0.15)',
                      stageText: '#4ade80',
                      borderColor: '#22c55e',
                      age: '12 days ago',
                      ageColor: '#4ade80',
                      action: 'Goal milestone — acknowledge his debt paydown. He hit the $5K mark. This is worth a specific message.',
                      actionColor: '#4ade80',
                    },
                    {
                      name: 'Emma Torres',
                      stage: 'Getting Acquainted',
                      stageColor: 'rgba(100,116,139,0.2)',
                      stageText: '#94a3b8',
                      borderColor: '#ef4444',
                      age: '61 days ago',
                      ageColor: '#f59e0b',
                      action: 'Accountability check-in — she set a savings goal in February. No contact since. This relationship is at risk.',
                      actionColor: '#f87171',
                    },
                  ].map((row, i) => (
                    <div key={i} className="mockup-heir-card" style={{ borderLeftColor: row.borderColor }}>
                      <div className="mockup-heir-top">
                        <div className="mockup-heir-name-group">
                          <span className="mockup-heir-name">{row.name}</span>
                          <span className="mockup-heir-stage" style={{ background: row.stageColor, color: row.stageText }}>
                            {row.stage}
                          </span>
                        </div>
                        <div className="mockup-heir-meta">
                          <span className="mockup-heir-age" style={{ color: row.ageColor }}>{row.age}</span>
                          <button className="mockup-log-btn">Log touchpoint</button>
                        </div>
                      </div>
                      <div className="mockup-heir-action">
                        <span className="mockup-heir-icon">⏱</span>
                        <span style={{ color: row.actionColor }}>{row.action}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <StatsStrip />

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

          <PhoneSection />

          {/* ════════════════════════════════════════════════════════════════
              FRAMEWORK + EMAIL FORM — white
          ════════════════════════════════════════════════════════════════ */}
          <section className="section-wrap bg-gray">
            <div className="container section-pad">

              {/* Two-column: text left, book cover right */}
              <div className="framework-two-col" style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '6rem',
                alignItems: 'center',
                maxWidth: '1000px',
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
