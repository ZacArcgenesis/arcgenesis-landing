/**
 * content.js — every word on the page, in one place.
 *
 * V2 copy (tighter draft, May 2026). Page is framed around the result —
 * financial confidence, knowing you're on the path to your goals — not the
 * method. The mechanism (spending less than you earn) shows up where natural
 * but never as the headline.
 *
 * Edit text here; the components just render it.
 *
 * Note: only the Hero and FreePrompt headlines support {{ }} highlight spans.
 * The other section headlines render as plain text.
 */

export const CONTENT = {
  // ── Nav ──────────────────────────────────────────────────────────────────
  nav: {
    // The logo-mark image (/public/logo-mark.png) IS the stylized "A".
    // Wordmark picks up from there: [A-mark]RCGENESIS Finance.
    logoText: 'RCGENESIS',
    logoSuffix: 'Finance',
    cta: 'Get on the path',
  },

  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    headline: 'Every financial goal starts with {{the same step.}}',
    subhead:
      'Buying a home. Paying off debt. Investing. Retiring early. None of it works if you’re spending everything you earn. This system builds the foundation in four hours.',
    ctaPrimary: 'Try a tool for free',
    ctaSecondary: 'Get on the path — $97',
    // Joined with ' · ' separators into a single small line beneath the CTAs.
    reassurance: [
      'Works in Claude, ChatGPT, or any AI',
      'One payment',
      'No subscription',
      'You own everything',
    ],
  },

  // ── Problem ──────────────────────────────────────────────────────────────
  teach: {
    headline: 'You know where you {{want to go.}} You just can’t get there.',
    body: [
      'The goal is real. You’ve thought about it. Maybe you’ve even tried a budget or two. But every month the money disappears, the goal stays where it is, and you’re back to hoping next month is different.',
      'Here’s what most people miss: it doesn’t matter how good your investment strategy is if you don’t have money to invest. It doesn’t matter how much you know about real estate if you can’t save for the down payment. Every financial goal sits on top of the same foundation — consistently having more coming in than going out. That’s what this builds.',
    ],
  },

  // ── Free prompt section (the prompt itself lives in ./prompt.js) ─────────
  freePrompt: {
    headline: 'Try it before you {{decide anything.}}',
    intro:
      'This is the Environment Audit — one of the ten tools in the full system, yours for free. It shows you exactly how the world around you is designed to get you to spend, and gives you a list of specific things you can change today.',
  },

  // ── The setup (the six outputs come from SETUP_OUTPUTS in site.js) ──────
  setup: {
    headline: '{{Four hours.}} Here’s what you walk away with.',
    intro: null,
    outro: null,
  },

  // ── The ongoing toolkit (the four tools come from TOOLKIT in site.js) ────
  toolkit: {
    headline: 'Then you keep the tools that {{keep you on track.}}',
    intro: null,
  },

  // ── Confidence framing (the emotional peak — centered, breathing room) ───
  activation: {
    headline: 'You don’t have to be there yet. You just have to know {{you’re going to get there.}}',
    body: [
      'Financial confidence isn’t something you earn after the goals are done. It shows up the moment you can see the path — your real numbers, your real goals, and proof that you’re moving forward.',
      'The setup builds the path. The tools keep you on it. The confidence is what follows.',
    ],
  },

  // ── Ownership / no lock-in (no section headline in V2) ───────────────────
  ownership: {
    headline: null,
    points: [
      {
        title: 'Works in any AI',
        line: 'Claude, ChatGPT, Gemini, whatever you use.',
      },
      {
        title: 'No subscription',
        line: 'One payment. Nothing renews. Nothing expires.',
      },
      {
        title: 'You own every document',
        line: 'Your goals, snapshot, budget, and plan are yours to keep.',
      },
      {
        title: 'It moves with you',
        line: 'New AI in two years? Still works. Never tied to a platform.',
      },
    ],
  },

  // ── Pricing (no section headline in V2 — the $97 is the heading) ─────────
  pricing: {
    headline: null,
    priceLine: 'One payment. Lifetime access.',
    includes: [
      'Full four-hour guided setup (six tools)',
      'Four ongoing tools you keep permanently',
      'Personalized 30-day launch plan',
      'Video walkthrough of a real budget being built',
      'Every prompt, ready for any AI',
      'The roadmap that ties it all together',
    ],
    cta: 'Get on the path',
    finePrint: 'If a creator sent you here, use their code at checkout.',
    // PLACEHOLDER — add a guarantee here if you decide to offer one.
    guarantee: null,
  },

  // ── Price math (the ROI argument right after the offer) ─────────────────
  priceMath: {
    headline: 'The math on {{$97.}}',
    body: [
      'How much did you spend last month that you didn’t plan to?',
      'I’d be willing to bet it’s more than $97. Forgotten subscriptions alone are usually $30-50 a month. A couple DoorDash orders you didn’t need. One impulse buy you kind of regret. It adds up fast, and it keeps adding up every month because nothing is catching it.',
      'If this system helps you find even one of those patterns, it pays for itself. Everything after that is just progress.',
    ],
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    headline: 'Before you {{ask.}}',
    items: [
      {
        q: 'Is this just a bunch of AI prompts?',
        a: 'The prompts are a big part of it, but each tool builds on the ones before it. The setup produces documents about your specific situation, and the ongoing tools use those as their starting point. So everything stays calibrated to your life, not a blank slate.',
      },
      {
        q: 'Do I need to be good with AI?',
        a: 'If you can copy and paste, you can use this. The AI walks you through a conversation. You answer questions, it produces documents you save.',
      },
      {
        q: 'I’ve tried budgeting before and it didn’t stick.',
        a: 'Most budgets fail because they’re built on idealistic numbers, framed as restriction, or too hard to maintain. This system uses your real data, organizes around your goals instead of cutting back, and gives you tools to adjust when things drift instead of starting over.',
      },
      {
        q: 'What do I walk away with?',
        a: 'Six foundational documents from the setup (goals, snapshot, environment audit, spending patterns, budget, launch plan) plus four ongoing tools you keep permanently. Everything is yours.',
      },
      {
        q: 'Does it expire?',
        a: 'No. One payment, keep everything forever.',
      },
      {
        q: 'I was sent here by a creator I trust, but I don’t know you.',
        a: 'That’s why there’s a free tool at the top of this page. Run it and see what it produces. If it’s useful, the rest is built with the same care.',
      },
    ],
  },

  // ── Final CTA ────────────────────────────────────────────────────────────
  finalCta: {
    headline: 'Four hours to be on {{the path.}}',
    body: 'You already tried one of the tools. The full system is the rest of that — the setup that gets you moving and the tools that keep you moving. Four hours from now, you’ll know exactly where you are, where you’re going, and what’s next.',
    cta: 'Get on the path',
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    tagline: 'Built to put you on the path to the life you actually want.',
  },
}
