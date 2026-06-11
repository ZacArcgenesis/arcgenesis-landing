/**
 * site.js — product constants and the things you'll swap most often.
 *
 * Nothing in here is "code." It's all dials. Change a number, change a link,
 * and the page updates. The components never hard-code any of this.
 */

export const SITE = {
  brand: 'ArcGenesis Finance',
  productName: '4 Hours to Financial Confidence',
  productNameFull: 'The 4 Hours to Financial Confidence System',

  // ── Pricing ──────────────────────────────────────────────────────────────
  // Anchor price the page shows.
  price: 97,
  currency: 'USD',
  currencySymbol: '$',
  // Optional: shown as a strikethrough next to the price. Leave null to hide.
  anchorPrice: null,

  // ── Checkout ─────────────────────────────────────────────────────────────
  // Kit Commerce product URL. The buy button in Pricing.jsx carries
  // [data-commerce], so the Kit script (loaded in index.html) intercepts
  // the click and opens the checkout in a modal instead of navigating.
  // Visitors with JS disabled fall through to this URL as a normal link.
  checkoutUrl: 'https://arcgenesis-finance.kit.com/products/four-hours-to-financial-confidence',

  // ── Free prompt ──────────────────────────────────────────────────────────
  // The actual prompt text lives in ./prompt.js — this is just metadata.
  freePromptToolName: 'Environment Audit',

  // ── Kit email opt-in ─────────────────────────────────────────────────────
  // One Kit form (the one attached to the Environment Deep-Dive sequence)
  // receives every opt-in on the site: the /environment-deep-dive page and
  // the inline EmailCapture blocks on the audit page and the guides.
  // The form must have the "First name" field enabled — the deep-dive page
  // posts fields[first_name] alongside email_address.
  kitFormAction: 'https://app.kit.com/forms/9549718/subscriptions',

  // ── Links ────────────────────────────────────────────────────────────────
  links: {
    support: 'mailto:zac.arcgen@gmail.com',
    terms: '/terms',
    privacy: '/privacy',
  },
}

// The five ongoing AI tools the buyer keeps permanently. These are the
// "toolkit" that maintains the system after the four-hour setup is done.
// One-sentence descriptions, scannable. Same order as the buyer page.
export const TOOLKIT = [
  {
    name: 'Monthly Financial Force Review',
    line: 'A 15-minute monthly check-in that shows you one number: did you move forward or backward?',
  },
  {
    name: 'Money Finder',
    line: 'Hunts through your real numbers for money you can put toward your goals when you want to move faster.',
  },
  {
    name: 'Spending Regret Decoder',
    line: 'Diagnoses what happened when you bought something you wish you hadn’t, and what to do differently.',
  },
  {
    name: 'Plan Recalibrator',
    line: 'Adjusts your budget when something changes: small tweaks or major overhauls.',
  },
  {
    name: 'Goal Progress Checker',
    line: 'The math on where you stand, how fast you’re moving, and when you’ll get there.',
  },
]

// The six outputs of the ~4-hour guided setup. One-sentence descriptions
// for a scannable grid.
export const SETUP_OUTPUTS = [
  {
    title: 'Your goals, named and specific',
    line: 'Not vague intentions. Dollar amounts and the reason each one matters to you.',
  },
  {
    title: 'Your real financial picture',
    line: 'Your actual numbers, including the one that tells you whether you’re moving forward or backward each month.',
  },
  {
    title: 'The forces pushing you to spend',
    line: 'A map of what’s been working against you in your environment, plus what to change.',
  },
  {
    title: 'The patterns underneath',
    line: 'The internal habits behind the spending you’ve regretted, finally named.',
  },
  {
    title: 'A working budget',
    line: 'Built from your life, aimed at your goals, designed to be easy to maintain.',
  },
  {
    title: 'A 30-day launch plan',
    line: 'Week-by-week steps to get the budget running and keep it running.',
  },
]
