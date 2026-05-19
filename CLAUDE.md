# ArcGenesis Finance — Website

## Product

**The 4 Hours to Financial Confidence System** — a $97 AI-assisted financial
execution system. A ~4-hour guided setup the buyer runs with the AI of their
choice (Claude, ChatGPT, etc.), plus a permanent toolkit of five AI tools they
keep for years. The one job: get the buyer consistently spending less than they
earn. No subscription, no platform lock-in — the buyer owns every document the
tools produce.

## Page

A single long-form sales page, **mobile-first** (most traffic is mobile).
Traffic comes from YouTube creator links — the visitor is warm but skeptical:
they trust the creator who sent them, not ArcGenesis yet. The page earns trust
by teaching something real, lets the visitor experience the product through a
free prompt, then makes buying the obvious next step.

## Stack

- React 19 + Vite
- Tailwind CSS v4 (`@tailwindcss/vite` plugin — no `tailwind.config.js`)
- Vanilla CSS for the design system (`src/index.css`)

## Architecture — config-driven

All swappable content lives in `src/config/` — components only render it:

- `site.js` — product constants: price, checkout URL, the 5 tools (`TOOLKIT`),
  the 6 setup outputs (`SETUP_OUTPUTS`).
- `content.js` — every word on the page, by section. Currently DRAFT copy.
- `prompt.js` — the free prompt the visitor can copy and run. Currently a
  PLACEHOLDER — paste the real prompt into `FREE_PROMPT.body`.

`src/sections/` holds the 12 page sections; `src/components/` holds shared bits
(`Highlight`, `PromptWindow`). `App.jsx` just orders the sections.

The `{{double-brace}}` markers in headlines render in the accent color via the
`Highlight` component.

## Design System

- Dark/light alternating bands (mirrors the Heir Decoder page)
- Dark band: `#20232a` · deep dark: `#16191f` · light gray: `#f8f9fa` · white: `#ffffff`
- Primary text: `#20232a` · muted: `#5a6170`
- Accent / CTA: `#37d3f1` (cyan)
- Font: Syne for headlines, Inter for body
- Dark bands carry a subtle CSS grid texture (`.grid-texture`, no image asset)

## Creator attribution

Each YouTube creator gets a **coupon code**, created and tracked inside the
checkout platform — NOT in this codebase. There are **no per-creator page
variations, no admin panel, and no backend.** The page is fully static.

## Checkout

Not set up yet. `SITE.checkoutUrl` in `src/config/site.js` is a placeholder
(`#`). Every "Buy" button points there — swap it for the real checkout URL
once the product is live. Leading candidate: Lemon Squeezy (built-in affiliate
program for creator payouts); Stripe is the lower-fee alternative.

## Legacy

`_legacy/` holds the previous build (the "Heir Relationship Framework" advisor
landing page) for reference only — not part of the live site. Safe to delete
once the new build is confirmed.
