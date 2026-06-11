# ArcGenesis Finance — Website

## What this is

The marketing and delivery site for **The 4 Hours to Financial Confidence System**, a $97 AI-assisted financial execution system sold by Zac Bradshaw (sole operator, primary voice of the brand). A ~4-hour guided setup the buyer runs with the AI of their choice (Claude, ChatGPT, etc.), plus an ongoing toolkit they keep for years. **Eleven tools total: six setup tools + five ongoing tools.** The one job: get the buyer consistently spending less than they earn. No subscription, no platform lock-in; the buyer owns every document the tools produce.

## Brand thesis (this drives all copy)

**"It was never willpower, it's architecture."** Financial outcomes are shaped by environment and psychology, not discipline. The visitor is never the problem; their environment is. Copy exonerates the reader and externalizes the villain (one-click checkout, engineered notifications, saved cards, social comparison).

### Positioning guardrails

- **Lead with outcome, not mechanism.** "AI prompts," "environment/psychology/structure," and "financial force" are mechanism language — supporting explanation only, never the headline. Headlines sell the result: a plan, margin, confidence, progress toward named goals.
- **The customer is the hero; Zac is the guide** (StoryBrand). Zac's story exists on the page to prove the thesis and build trust, not to make him the protagonist.
- **The product is a system, not a budget.** A budget is one component. Never let copy collapse the product into "a budgeting system" — the FAQ deliberately differentiates from YNAB/Mint (apps track; this builds).
- **No unsourced statistics, no overclaims.** Zac's authority comes from specificity and care, not credentials (he is not an advisor and never pretends to be).
- **Honest urgency only.** Launch deadlines are real deadlines. No manufactured scarcity, no fake countdown timers, ever.

## Voice (condensed — full guide lives with Zac)

Zac writes how he speaks. Conversational, patient, walks through reasoning, asks a question then answers it. Transitions: "Now," "Well," "So," "And honestly," "Let me give you an example." Softeners: "kind of," "pretty," "honestly." Analogies and concrete numbers everywhere; vague is the enemy.

**Hard rules:** No em dashes anywhere (reads as AI). No SaaS-speak (leverage, unlock, seamless, transform, game-changer). No fake enthusiasm. No "It's not X. It's Y." constructions. Write out terms in full ("buy-now-pay-later," never BNPL). Read-aloud test: if it would sound weird spoken, rewrite it.

## The funnel (each page has one job)

```
Short-form social (YouTube primary; TikTok, IG, FB, X)
  ├─ discovery lane: story/analogy videos → reach
  └─ conversion lane: mechanism videos → subscribers/buyers
        ↓
/environment-audit   ← main landing point from social. Ungated free tool
                       (friction after value, never before). Optional email
                       opt-in AFTER the prompt → Kit "Environment Deep-Dive"
                       5-day nurture sequence.
        ↓
/guides/*            ← long-form trust + SEO. Each ends with a free prompt
                       and an email opt-in.
        ↓
/  (main sales page) ← converts warm, nurtured visitors. Section order IS
                       the StoryBrand arc: hero's goal → villain (Teach) →
                       guide (Zac) → free proof → 3-step plan → what you
                       get → who it's for → the ask.
        ↓
Kit Commerce checkout → post-purchase email → /system/<obscure-slug>
                       (buyer-only delivery page)
```

**Growth model:** build-then-launch. List-building first, then open-cart launch events with a real hard close. Email capture is therefore the most important conversion on the site after the purchase itself. Metrics that matter: audit-page visits, prompt copies, opt-ins, checkout opens.

## Stack

- React 19 + Vite
- Tailwind CSS v4 (`@tailwindcss/vite` plugin — no `tailwind.config.js`)
- Vanilla CSS design system in `src/index.css`
- react-router for routes (see `src/main.jsx`)

## Architecture — config-driven

All swappable content lives in `src/config/`; components only render it:

- `site.js` — product constants: price, checkout URL, Kit form action, the 5 ongoing tools (`TOOLKIT`), the 6 setup outputs (`SETUP_OUTPUTS`).
- `content.js` — every word on every page, by section. **Live copy, not draft.** Edit here, not in components.
- `prompt.js` — the real Environment Audit lead-magnet prompt (FREE_PROMPT).
- `system-prompts.js` + `system-prompts/*.md` — the eleven product tools (each with its `before` interstitial copy), rendered on the buyer page. The lead-magnet audit and the system audit are intentionally different versions (different closings).
- `prompts/*.js` — the free prompts embedded in guides.

`src/sections/` holds the main-page sections; `src/pages/` holds routed pages; `src/components/` holds shared bits (`Highlight`, `PromptWindow`, `EmailCapture`). `App.jsx` orders the main-page sections — the order is the persuasion arc, so don't reorder casually.

`{{double-brace}}` markers in supported headlines render in the accent color via `Highlight`.

## Design system

- Dark/light alternating bands. Preserve the alternation when adding sections.
- Dark band: `#20232a` · deep dark: `#16191f` · light gray: `#f8f9fa` · white: `#ffffff`
- Primary text: `#20232a` · muted: `#5a6170` · accent/CTA: `#37d3f1` (cyan)
- Syne for headlines, Inter for body; mobile-first (most traffic is mobile)
- Dark bands carry a subtle CSS grid texture (`.grid-texture`, no image asset)

## Checkout & email

- **Kit Commerce** for checkout: buy buttons carry `data-commerce`; Kit's script (loaded in `index.html`) opens the checkout modal. Page stays fully static.
- **Kit** also runs all email: the Deep-Dive nurture sequence, the buyer delivery email, and free lifetime product-update emails to buyers.

## Routes worth knowing

- `/` main sales page · `/environment-audit` lead magnet · `/guides/<slug>` long-form guides
- `/system/<obscure-slug>` buyer-only delivery. Never linked publicly; reached only via the Kit post-purchase email. **Rotating the slug breaks every prior buyer's link.**

## Current status flags

- The "Save for Something Big" guide is written as TODO stubs; its route and crosslink card are disabled until the content is finished.
- The Phase 3 walkthrough video callout on the buyer page self-hides until a real URL replaces the `#` placeholder in config.
- Testimonials/social proof: none yet. The free audit is the trust mechanism for now; a proof section is planned once real buyer quotes exist.
- Guides are deliberately excluded from `public/sitemap.xml` because none are finished. When Zac marks a guide final, add its URL to the sitemap at that time. Keep the sitemap in sync when routes change; never list anything under `/system/`.
- **Buyer-page protection is obscurity + noindex + robots exclusion + code-splitting, by design.** No login system. Accepted tradeoff: a determined individual with the URL or devtools skills can extract the content; the defended threat is crawlers, AI indexing, and casual discovery. Do not "fix" this. The real slug must never appear in robots.txt, sitemap.xml, any public page, or comments — reference only the bare `/system/` directory. Possible future v2 (not now): build-time encryption of the prompt payload with the decryption key in the URL fragment (`#key`) of the link Kit emails buyers; fragments never reach servers or crawlers, so the bundle would hold only ciphertext. Revisit only if leakage is actually observed.

## Legacy

`_legacy/` holds the previous build (the "Heir Relationship Framework" advisor landing page) for reference only. Safe to delete once the new build is confirmed. (Note: Zac's separate B2B SaaS for financial advisors is a different business and never crosses into this consumer brand.)
