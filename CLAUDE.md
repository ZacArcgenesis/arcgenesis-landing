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
Visitors arrive warm but skeptical — they need to earn trust before buying.
The page earns trust by teaching something real, lets the visitor experience
the product through a free prompt, then makes buying the obvious next step.

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

## Checkout

Kit Commerce. The product URL lives in `SITE.checkoutUrl` (`src/config/site.js`)
and the Kit script is loaded in `index.html`. The buy button in
`src/sections/Pricing.jsx` carries `data-commerce`, so Kit's script intercepts
the click and opens the checkout in a modal over the page. The page itself
stays fully static — no backend, no admin panel.

## Legacy

`_legacy/` holds the previous build (the "Heir Relationship Framework" advisor
landing page) for reference only — not part of the live site. Safe to delete
once the new build is confirmed.
