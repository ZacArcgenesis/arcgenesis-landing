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
    // Inline links between logo and CTA. Each maps to a real route.
    // An item with `children` renders as a hover dropdown on desktop.
    // (Guides removed temporarily until the guide pages are finished.)
    links: [
      { label: 'Environment Audit', to: '/environment-audit' },
    ],
    cta: 'Build My Plan',
  },

  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    headline: 'Every financial goal starts with {{the same step.}}',
    // Medium-weight one-liner that names the deliverable above the fold.
    subhead:
      'A personalized financial plan, built in 4 hours, that keeps working for years.',
    // Tight body paragraph beneath the subhead — names the goals, the
    // mechanism, and the permanence in plain terms.
    body:
      'Buying a home. Paying off debt. Investing. Retiring early. None of it works if you’re consistently spending everything you earn. This system builds the foundation around your actual income, your actual expenses, and your actual goals. Then it gives you the tools to keep it running as life shifts.',
    ctaPrimary: 'Build My Plan · $97',
    ctaSecondary: 'Try the Environment Audit · Free',
    // Joined with ' · ' separators into a single small line beneath the CTAs.
    reassurance: [
      'Works in Claude, ChatGPT, or any AI',
      'One payment',
      '30-day money-back guarantee',
      'You own everything',
    ],
  },

  // ── Problem ──────────────────────────────────────────────────────────────
  // Body renders via ProseBlocks: strings are paragraphs (with **bold**
  // landing points for scanners), { kind: 'pull-quote' } blocks render as
  // the cyan-bar pull quote. Same voice-reviewed words as before — only the
  // paragraph breaks and emphasis changed for readability.
  teach: {
    headline: 'You know where you {{want to go.}} You just can’t get there.',
    body: [
      'You have the goal. You’ve probably thought about it for years. Buying a house, paying off debt, starting to invest. But every month the money disappears, and **the goal stays out of reach.**',
      'Here’s why. Every financial goal sits on the same foundation: **consistently having more coming in than going out.** The best investment strategy in the world doesn’t matter if there’s nothing left to invest. Without the foundation, nothing else works.',
      'And the reason you don’t have it was never a lack of willpower. Look at what you’re up against: one-click checkout, saved cards everywhere, notifications timed for when you’re tired. **Everything around you is built to make spending easy and saving hard.** And it’s working exactly as designed.',
      {
        kind: 'pull-quote',
        text: 'It was never willpower. Nothing was set up in your favor.',
      },
      'This is where that changes. The system on this page does one thing: it gets everything around your money working **for** you, so you stop white-knuckling it and start making progress that doesn’t depend on having a good day.',
    ],
  },

  // ── Guide (founder / credibility — photo + story) ────────────────────────
  // Same ProseBlocks rendering as teach.body: short chunks, one bold per
  // chunk, one pull quote. Words unchanged from the voice-reviewed copy.
  guide: {
    headline: 'Built by {{someone who needed it.}}',
    body: [
      'I spent years studying how to build wealth. Books, seminars, investing strategies. Then a friend asked me to help him make a budget, and I had to admit something kind of embarrassing: **I didn’t have one.**',
      {
        kind: 'pull-quote',
        text: 'All that knowledge, and I had implemented none of it.',
      },
      'Because at the end of every month, there was never anything left over to implement it with. I had skipped the step everything else sits on. So I decided to actually figure it out: ten days, ten books on money management. A book a day. Dave Ramsey, Ramit Sethi, Tony Robbins, the YNAB book, even Ray Dalio’s Principles. And honestly? Not one of them fit my life on its own.',
      'So I pulled out the pieces that worked and **built my own way of running my money.** A clear picture of where it went, what was pushing me to spend, a budget that fit my actual life. Then I spent years refining it, keeping what worked and cutting what didn’t.',
      '**That’s the system on this page.** The setup builds yours the same way I built mine: around your real life, your real numbers, your real goals. Not somebody else’s template.',
    ],
    attribution: 'Zac Bradshaw, ArcGenesis Finance',
    // Photo alt text for /zac.webp (the image itself lives in public/).
    photoAlt: 'Zac Bradshaw',
  },

  // ── Plan (compact three-step strip — the simple path) ───────────────────
  plan: {
    headline: 'Here’s how it works.',
    steps: [
      {
        title: 'Run the four-hour setup.',
        body: 'A guided conversation with the AI you already use. It names your goals, maps your real numbers, and builds a budget that fits your actual life.',
      },
      {
        title: 'Follow your 30-day launch plan.',
        body: 'Week-by-week steps, built from your setup, that get the system running in your real life.',
      },
      {
        title: 'Check one number each month.',
        body: 'Fifteen minutes. Did you move forward or backward? Adjust and keep going.',
      },
    ],
  },

  // ── ForWho (qualify the person right before the ask) ────────────────────
  forWho: {
    headline: 'Who this is {{actually for.}}',
    forYou: {
      title: 'This is for you if:',
      items: [
        'You have a goal that’s stayed out of reach for years, and every month the money just disappears.',
        'You’ve tried budgets before and they didn’t stick.',
        'You can’t say exactly where your money goes, and that bothers you.',
        'You want a plan built around your actual life, not a template you have to force yourself into.',
      ],
    },
    notForYou: {
      title: 'This is not for you if:',
      items: [
        'You already consistently spend less than you earn and put money toward your goals every month. Genuinely, you don’t need this. Go invest.',
        'You’re looking for investment picks, side hustles, or a way to get rich fast. That’s not what this is.',
        'You want an app that tracks everything automatically. This is a system you build and own, not software that watches your accounts.',
      ],
    },
  },

  // ── Free prompt CTA (the prompt itself lives on its own page now) ───────
  // This section used to embed the prompt inline; it now teases the prompt
  // and links to /environment-audit.
  freePrompt: {
    headline: 'Try it before you {{decide anything.}}',
    intro:
      'Don’t take our word for any of this. One of the eleven tools from the full system is free to run. Get a personalized result and decide for yourself.',
    ctaLabel: 'Try the Environment Audit',
    ctaSub: 'No account. No email. Takes about fifteen minutes.',
    // The sample-output visual is the approved SVG mockup rendered by
    // src/components/AuditSampleDoc.jsx (master: images/freeprompt-sample-
    // doc-mockup.svg). Its text lives in the SVG, not here.
  },

  // ── Environment Audit page (its own route at /environment-audit) ────────
  // Designed as a standalone lead-magnet experience — own hero, prompt, and
  // handoff CTA back to the main system at /#pricing.
  // Stripped-down opt-in the Environment Audit links to once a visitor
  // finishes the audit. Warm traffic, so it's just the offer and the form.
  deepDivePage: {
    headline: 'The Environment Deep-Dive',
    sub: 'A free 5-day email course on the forces shaping how you spend.',
    firstNamePlaceholder: 'First name',
    emailPlaceholder: 'Email address',
    // Matches the audit-page opt-in button: same sequence, same words at
    // both doors. Deliberately not "course" framing.
    cta: 'Send me the Deep-Dive',
    pendingNote:
      'The Deep-Dive isn’t live just yet. Check back soon and you’ll be first in line.',
  },

  // Success page the Deep-Dive form lands on after a successful subscribe.
  // Same stripped style as the opt-in. One job: get them to find the email
  // (and rescue it from spam if needed).
  deepDiveThanksPage: {
    headline: 'Check your inbox.',
    body: [
      'All set. The first Deep-Dive is on its way from zac@arcgenesisfinance.com.',
      'If it isn’t there within a few minutes, check your spam or promotions folder. Moving it to your inbox tells your email app where the rest of the week belongs.',
    ],
    homeLink: 'Back to the home page',
  },

  environmentAuditPage: {
    eyebrow: 'Free tool',
    headline: 'The {{Environment Audit.}}',
    sub:
      'A 15-minute conversation that maps the specific forces in your life pushing you to spend, then hands you a short list of things you can change today to reduce the pressure. Works in Claude, ChatGPT, or any modern AI.',
    meta: 'Free · No account · No email',

    promptHead: {
      headline: 'Copy the prompt.',
      lede: 'Paste it into a fresh chat. The Audit will ask short questions about your environment, one at a time, then deliver your personalized map.',
    },
    promptAfter:
      'That’s the whole tool. Run it. Save the document it gives you. Make the changes it surfaces. The map alone helps; the exits are where the change happens.',

    howtoHeadline: 'How to use it.',
    howtoSteps: [
      {
        num: '01',
        title: 'Copy the prompt.',
        body: 'Hit "Copy prompt." That puts the full text on your clipboard. It’s long because it has to be. The tool is calibrated to walk you through your specific situation, not run a generic script.',
      },
      {
        num: '02',
        title: 'Open a fresh chat.',
        body: 'Works in Claude, ChatGPT, Gemini, or anything else. Start a new conversation so the model isn’t carrying baggage from somewhere else.',
      },
      {
        num: '03',
        title: 'Answer honestly.',
        body: 'The Audit walks you through four sources of pressure: businesses, banks, government, and social comparison. Each one gets specific questions about how it shows up in your life. Answer the way you’d describe yourself to a close friend.',
      },
      {
        num: '04',
        title: 'Read your map.',
        body: 'What comes back is a personalized environmental map plus the two or three highest-impact changes you can make today. Save the document. The exits are yours to keep.',
      },
    ],

    faqHeadline: 'Common {{questions.}}',
    faqItems: [
      {
        q: 'What is the Environment Audit?',
        a: 'A free, copy-paste prompt that maps the four external forces shaping your spending: businesses, banks, government, and social comparison. It asks short, specific questions about how each one shows up in your life, gives you running results group by group, then ends with a personalized map and the two or three highest-impact changes you can make today.',
      },
      {
        q: 'How long does it take?',
        a: 'Roughly fifteen minutes. The Audit asks one question at a time and moves quickly. Most of the time is you describing your environment the way you’d describe it to a friend.',
      },
      {
        q: 'What AI tools does it work with?',
        a: 'Any modern conversational AI. We use Claude and ChatGPT most. It also works with Gemini, Copilot, and the rest. Use whatever you already trust.',
      },
      {
        q: 'Do I need to give you my email?',
        a: 'No. The Audit is fully ungated. No account, no email, no catch. Copy the prompt, run it, keep the output. Done.',
      },
      {
        q: 'Is this safe to share with an AI?',
        a: 'The Audit never asks for account numbers, balances, or anything regulated. It asks about your environment: what apps you use, what cards you save, what triggers your spending. Describe it the way you’d describe it to a friend.',
      },
      {
        q: 'How does this connect to the full system?',
        a: 'The Environment Audit is one of eleven tools in the full $97 system. Running it for free does the audit in full. Nothing held back. If you buy the system later, the AI uses the document you produced today to calibrate your budget and your 30-day launch plan. The work you do here gets used.',
      },
    ],

    handoffHeadline: 'Want this for {{every part}} of your money?',
    handoffSub:
      'The Audit maps one slice: the environmental pressure. The full system maps the rest. Where your money actually goes, the patterns behind purchases you regret, and a budget aimed at the goals you actually want. Four hours. One payment. Yours forever.',
    handoffCta: 'See the full system',
  },

  // ── System access page (buyer-only, at /system/<slug>) ──────────────────
  // Folds in the roadmap PDF content: hero, orientation block, four setup
  // phases with descriptions and time estimates, ongoing toolkit, plus the
  // Phase 3 video walkthrough callout. Tools render under their phase via
  // SETUP_PHASES from system-prompts.js.
  systemAccessPage: {
    // ─── Hero ──────────────────────────────────────────────────────────
    heroEyebrow: 'The 4 Hours to Financial Confidence System',
    heroHeadline: 'Welcome. Here’s your {{system.}}',
    heroSub:
      'Eleven tools, organized into four setup phases plus an ongoing toolkit. Each tool is a prompt you copy into ChatGPT, Claude, or any AI. Use the phases in order for the four-hour guided setup, then keep the ongoing toolkit for as long as you need it.',
    heroMeta: '11 tools · 4 setup phases · Yours forever',
    downloadLabel: 'Download all (.zip)',
    downloadingLabel: 'Building your zip…',
    downloadedLabel: 'Downloaded',
    viewPromptsLabel: 'Jump to prompts',

    // ─── Start here / orientation ──────────────────────────────────────
    orientationEyebrow: 'Start here',
    orientationHeadline: 'How to use this system.',
    orientationLede:
      'Setup is roughly four hours total, broken into four phases. You can do it in one sitting or split it across days. By the end you’ll have four documents (your Named Goals, Financial Snapshot, Environment Audit, and Active Primary Causes) that feed into a working budget and a 30-day launch plan. Here’s what to know before you start.',

    howToRunHeadline: 'How to run a tool.',
    howToRunSteps: [
      'Open a fresh chat in Claude, ChatGPT, Gemini, or any AI chatbot you trust. Each tool runs in its own conversation. Don’t chain multiple tools in one chat.',
      'Copy the prompt. Click "Copy prompt" on the tool card below. If you’d rather work from files, open the matching .md from your downloaded zip and copy everything from the first divider onward. Both produce the same result.',
      'Paste it into the chat. The AI reads the prompt and starts the conversation.',
      'Have your documents ready. If a later tool asks for your snapshot, goals, or earlier outputs, paste them in when prompted. Keep them somewhere accessible.',
      'Save the outputs. Every tool that generates a document produces markdown you can copy. Keep all your outputs in one folder or note so you can find them later.',
      'Consider using voice input. Most chatbots have a voice option where you can speak your answers. For the reflective tools especially (Goal Definer, Primary Causes Diagnostic), speaking tends to produce much better results than typing. When people type, they give the short version. When they speak, they say more, which gives the AI more to work with.',
    ],

    beforeYouStartHeadline: 'Before you start.',
    beforeYouStart: [
      {
        title: 'Block out the time.',
        body: 'Setup is roughly four hours total. You can do it in one sitting or split it across phases. What doesn’t work is squeezing it into 15-minute gaps. The diagnostic tools especially need real attention.',
      },
      {
        title: 'Have your bank and credit card statements available.',
        body: 'The Snapshot Generator works best with real numbers from the last 3 months. You can upload CSVs, share screenshots of your transaction history, or estimate manually. Real data is better, but manual estimation works.',
      },
      {
        title: 'No prerequisite knowledge required.',
        body: 'If you’ve never budgeted before, that’s fine. The tools push back when numbers seem off, teach you what you need to know, and produce something realistic for your situation.',
      },
      {
        title: 'Partnered? Decide together or solo.',
        body: 'Some couples go through setup together. Others have one partner do setup and bring the other in afterward. Both work. If you go solo first, you can revisit any tool together once you’ve shared what you produced.',
      },
      {
        title: 'Expect to adjust.',
        body: 'Your first snapshot won’t be perfect. Your first budget will probably need tweaking. Goals can shift. The Monthly Review and Plan Recalibrator tools handle drift and surprises. You’re picking a direction to start moving, not signing anything permanent.',
      },
    ],

    aiNotesHeadline: 'A few things worth knowing about AI.',
    aiNotes: [
      {
        title: 'The AI is not a financial advisor.',
        body: 'It’s a thinking tool. It helps you organize your numbers, see your patterns, and build a plan that fits your life. It’s done a lot of research and it’s pretty good at this. But it doesn’t know everything, and it can occasionally get something wrong. If a number doesn’t look right or a suggestion doesn’t make sense for your situation, trust your own judgment. You know your life better than any AI does.',
      },
      {
        title: 'Every conversation will be slightly different.',
        body: 'AI doesn’t give identical answers every time. That’s actually a good thing. It means the conversation adapts to what you tell it, how you phrase things, and what details you share. But it also means if you run the same tool twice, the output might be worded differently or organized a little differently. The substance should be consistent. The exact wording won’t be.',
      },
      {
        title: 'You are the decision-maker.',
        body: 'The AI will suggest, recommend, and push back when something seems off. That’s what it’s designed to do. But every number in your budget, every goal you name, every decision you make is yours. You own the output. The AI is the guide. You’re the one walking the path.',
      },
    ],

    orientationClosing: 'When you’re ready, scroll down to Phase 1.',

    // ─── Video walkthrough callout (renders inside Phase 3) ────────────
    walkthrough: {
      label: 'Video walkthrough',
      body:
        'Before you do your setup steps, watch this. It’s a real example of someone setting up and running their budget day to day. The wording is a little different in places (it was recorded before this system existed), but the method is exactly what you just built. Seeing it run makes your own setup faster.',
      cta: 'Watch the walkthrough',
      // PLACEHOLDER. Swap for the real video URL when you have it.
      url: '#walkthrough-url-pending',
    },

    // ─── Ongoing toolkit section ───────────────────────────────────────
    ongoingEyebrow: 'Ongoing toolkit',
    ongoingHeadline: 'Your permanent tools.',
    ongoingDescription:
      'These five aren’t steps, so don’t run them now. Only one runs on a schedule. The rest wait until the situation calls for them. This is the part you keep forever.',
  },

  // ── Pillar guides (long-form, each with an embedded prompt at the end) ──
  // Each guide lives at /guides/[slug]. The shared GuidePage component reads
  // these blocks. Section prose is TODO until the actual guides are written.
  guides: {
    getOutOfDebt: {
      slug: 'get-out-of-debt',
      eyebrow: 'Guide',
      title: 'How to Actually Get Out of Debt {{(And Stay Out).}}',
      intro:
        'Most people start adult life buried in debt and never quite get out. Here’s why the cycle keeps repeating, what’s actually driving it, and how to break free for good.',
      readingTime: '25 min read',
      sections: [
        {
          id: 'how-we-end-up-here',
          headline: 'The cycle of debt.',
          body: [
            '((Most people)) are trapped in a seemingly endless cycle of debt. We begin our adult lives taking out loans for things like education, a car, a home, filling the gap between paychecks, and, if we’re being honest, on things that we probably don’t really need. And whatever it ends up being, we start out into our independent lives already buried in debt.',
            'It almost feels like there is this incredibly high cost of admission to just get started in life that we can either borrow money to pay for now, or we can spend years trying to pay for it all on our own, and we worry that taking the second option will slow down our progress and cost us our happiness.',
            'So many of us, if not most of us, take the first option. Borrowing money to pay for it: for a car, for schooling, for the things we want to do while we are young, telling ourselves that we will just pay it back later when we are earning more money. Only for paying it back later to slowly transform into… paying it back always. And we get stuck in this endless cycle of borrowing money, paying it off, borrowing again, and paying it off again.',
            'It’s one thing to have to borrow money to pay for your first car. You don’t really have much when you’re starting out. But what about your fifth car? If you’re still having to borrow money to pay for a car after you’ve been in a career for 25 years, then you are trapped in the cycle of debt.',
            'Now, I’m not saying it is wrong to borrow money for a car when you are 50 years old. Using a loan isn’t a problem if it is a choice you made. The problem is if you HAVE to borrow money to pay for it. You don’t have the choice. And that is when this cycle becomes dangerous.',
            'Most people are trapped in this cycle, and if you remain stuck in it over the course of your lifetime, **it could end up costing you hundreds of thousands of dollars**. And I suspect that is not something you want for your life. So let me walk you through how to actually break free.',
          ],
        },
        {
          id: 'symptom-not-problem',
          headline: 'The thing nobody tells you about debt.',
          body: [
            '((So, how)) do you break free from the seemingly endless cycle of debt? How do you get to a point in your life where you no longer have to borrow money?',
            'Well, the first thing to consider is probably not what you would expect. You see, **debt isn’t actually your problem**. Kind of weird, isn’t it? At least not in the way you are thinking.',
            'Let me give you an analogy. Debt is a lot like pain. Pain is not a problem. Yeah, it hurts and can be quite uncomfortable, but it isn’t the problem. It is a symptom or result of your actual problem. The pain is just letting you know that something is wrong. In the same sense, debt is not your problem. It is a symptom of your actual problem. The debt is just letting you know that something is wrong.',
            {
              kind: 'pull-quote',
              text: 'Debt is not your problem. It is a symptom of your actual problem.',
            },
            'Now, why is this distinction important? If you were to break your arm and the doctor just decided to pump you full of pain meds and send you on your way, your arm might not be hurting anymore, but it’s still broken. And eventually, that pain is going to come back.',
            'All too often, this is the exact same approach we take to getting out of debt. We focus on treating the symptom without addressing the real underlying problem.',
            'Let me ask you a question. If someone were to swoop in today and pay off all your debts, how long do you think it would be before you wound up in debt again? Five years? One year? A month? Or maybe even by the end of the day? It would essentially just be the same as taking pain meds without resetting the broken arm. If you don’t treat the cause of the debt, then the debt will eventually come back.',
            'Let me give you an example of what this looks like. Let’s say that Sarah had $25,000 in credit card debt. Her parents gave her money to pay it all off, completely debt free. But within 18 months, she was back to $20,000 in debt. Why? Because she never addressed the underlying issue. She was spending about $400 more per month than she earned. The debt wasn’t her problem. Her spending pattern was. Until she fixed that, paying off the debt was just temporary relief.',
            'So what you want to focus on isn’t necessarily the debt itself. There is a reason you are in debt, and if you find whatever is causing it and address it, then the symptom will eventually go away.',
            'So this raises the question of what your actual problem is. And honestly, this is a hard question to answer. The problem will likely be slightly different for everyone, or it may be a combination of several problems. And sometimes these things really can be out of your control. You could lose your job, have a medical emergency pop up suddenly, all within a month of each other. Sometimes life just happens.',
            'However, these scenarios aren’t the reason that most of us are in debt. More often than not, there are several common things that we do, or don’t do, that will almost always land us in the cycle of debt.',
            'And the good news is, once you address these common problems, not only will it help you get out of debt, but also help you to stay out of debt in the future. If you do have one of these unfortunate scenarios where everything just falls apart all at once, you’ll be able to pick yourself back up and get out of debt again. These situations won’t throw you back into the cycle. They’ll just be a temporary setback.',
            'So what are these common problems?',
          ],
        },
        {
          id: 'common-reasons',
          headline: 'The common reasons people stay stuck.',
          body: [
            '((There are)) a handful of things that consistently keep people in the debt cycle. Most people stuck in debt are dealing with some combination of these.',
            { kind: 'h3', text: 'Spending more than you earn.' },
            'This one sounds obvious, but it has to be said first because nothing else works until it’s addressed. If you have an income of $5,000 a month but your average spending is $5,100 a month, what do you think the result would be? Well… debt. Eventually, you will run out of money and go into debt.',
            'However, while this is simple enough to understand, it is much harder to actually do. I’d be willing to bet that the majority of people, regardless of what their income is, struggle to keep their spending below their earnings. It’s not some unique struggle. It is far too common.',
            { kind: 'h3', text: 'Not knowing how debt works.' },
            'The second common problem is when people don’t understand how debt even works. And honestly, why would they? It’s not something that is taught in school, and unfortunately, not usually taught at home either. So most young adults start life after high school not knowing how debt works, yet at the same time, getting into a lot of it.',
            'Most people have a rough mental model that goes something like: I owe X, I pay Y per month, eventually I’ll be done. That model is wrong in ways that cost real money. We’ll get into the math in a section coming up.',
            { kind: 'h3', text: 'Not knowing the true cost.' },
            'This is closely related to the previous one, but it deserves its own mention. Most people make borrowing decisions based on the monthly payment, not the total cost. A $300 car payment looks manageable. But by the time you’ve paid it off, you’ve paid thousands in interest on top of the price of the car. Small monthly numbers hide big total costs. We’ll dig into this one with a story coming up.',
            { kind: 'h3', text: 'Having no alternative when something goes wrong.' },
            'This is the one nobody talks about. People don’t go into debt because they want to. They go into debt because something happened and they didn’t have any other way to handle it.',
            'Car broke down? Credit card. Medical bill? Credit card. Job lost? Credit card. Once you don’t have any savings, debt becomes the only option you have when life happens. And life happens regularly.',
            'You’ll never get out of debt for good without a basic emergency cushion. The cushion is what gives you a choice when something goes wrong. Without it, every emergency turns into more debt, automatically.',
            { kind: 'h3', text: 'Unknown spending triggers.' },
            'This one is the deepest, and the one most people skip past. A spending trigger is any situation, emotion, or circumstance that prompts you to spend money, often impulsively or in ways you later regret. Triggers bypass your rational decision-making. Even if you know the true cost of debt, understand how amortized loans work, and intellectually want to save money, triggers can override all of that in the moment.',
            'Everyone has them. Emotional triggers, like stress spending after a bad day, or boredom spending while scrolling on your phone. Environmental triggers, like sales, targeted ads, or physical stores. Social triggers, like friends suggesting an expensive dinner or feeling pressure to keep up. And habitual triggers, like the daily coffee stop or the subscription that auto-renews every month without you noticing. Individually they don’t seem significant. But together, they can easily add up to hundreds of dollars a month.',
            'These causes interact. Spending more than you earn creates the debt. Not understanding the debt makes you underestimate it. Not knowing the true cost lets you agree to things you can’t actually afford. No emergency cushion guarantees the cycle continues. And the triggers underneath your spending decide what gets bought in the first place. **Address several of these and you actually start to break free.**',
          ],
        },
        {
          id: 'how-the-math-works',
          headline: 'How debt math actually works.',
          body: [
            '((Most loans)) are what are called amortized loans. Personal loans, car loans, student loans, and home loans are all usually amortized. An amortized loan has a very specific way in which debt payments are calculated. More specifically, how much of a payment goes toward paying interest, and how much goes toward paying down the principal, the original amount you borrowed.',
            'Let’s look at an example. Say you took out a student loan for $80,000 at a 5.25 percent interest rate, and it was a 20-year loan. This would put your monthly payment at around $539. When you make this payment, only a portion of it goes toward paying down the $80,000 you borrowed. The payment is actually split between paying down your principal and paying the interest that you owe.',
            'Here’s how they calculate it. They’ll take the yearly interest rate of the loan, 5.25 percent, and divide it by 12 to get your monthly interest rate. This comes out to .44 percent. They’ll then multiply this .44 percent by your outstanding balance to find how much interest you owe that month. So, for your first payment with an outstanding balance of $80,000, the interest you owe would come out to around $350. Any amount you pay above $350 that month goes toward paying down your principal.',
            'So if you make the payment of $539, $350 goes toward interest, and only $189 goes toward paying down the principal. Your outstanding balance at this point is now $79,811. For the next month, they’ll again take the monthly interest rate of .44 percent and multiply it by your new balance of $79,811. Just under a dollar less in interest than the previous month.',
            'After a year of making payments like this, you’ll have paid a total of around $6,468, but **the balance that you owe will have only gone down by about $2,325**. So the majority of your payments that first year, around $4,143, went toward paying interest, not paying down the principal.',
            'Now here’s the interesting part. As you pay down the loan, your payment remains the same, but the amount going toward paying down principal increases, and the amount you pay toward interest decreases. By the end of the loan, almost all of your payment is going toward paying down the principal, and only a small amount toward interest.',
            'The important thing to understand is that with amortized loans, especially long-term ones, a large portion of your payment goes toward interest and not the principal in the beginning.',
            'Any amount you pay above the interest that you owe goes toward paying down the principal. If you make a $600 payment instead of $539, $350 still goes to interest, but $250 goes to principal. This is why paying extra on loans can help. You’ll pay them off faster and owe less interest in the long run.',
            'There’s one more thing worth knowing. What would happen if your payment each month were less than the amount of interest you owed? If you owed $350 in interest but only made a $300 payment, then the $50 of interest you still owe gets added to your balance. So you made a payment, but the amount you owe actually went up.',
            'This is more common than people realize. With student loans, you can get income-based repayment plans where your monthly payment is based on your income rather than your loan amount. If that payment ends up being less than the interest you owe each month, your balance grows from month to month, not down. People can pay on these loans for a decade and find that their balance is barely lower than where they started, or in some cases, higher.',
          ],
        },
        {
          id: 'king-and-chessboard',
          headline: 'A king and a chessboard.',
          body: [
            '((The next)) problem can best be explained by a story. There is an old story out there that talks of rice and a chessboard.',
            'When the game of chess was first invented, there was a king who found it brilliant and loved the game. This king generously decided that he would like to reward the inventor of the game, and told him to ask for any reward he wished.',
            'The inventor decided to ask for a reward of rice. He asked the king to place one grain of rice on the first square of the chessboard. Then on the second square, double it with two grains. On the third, double again with four grains. For each square of the chessboard, the inventor asked for the amount of rice to be doubled.',
            'The king, seeing such a small amount of rice on the chessboard after the first few squares, readily agreed. And in the beginning, it was a small sum of rice. However, this small amount of rice quickly began to become a not-so-small amount of rice.',
            'By the eighth square, the king would have to give the inventor 255 grains of rice. By the 16th square, 65,535 grains. By the final square, number 64, the number comes out to 18,446,744,073,709,551,615 grains of rice. In the end, what the king thought to be a small amount of rice ended up being more than he could ever possibly afford to give.',
            'So, what does this have to do with escaping the cycle of debt? One of the major, as well as all too common, problems that gets people stuck in the cycle of debt is when they make decisions without knowing their true cost. They think that they are giving up a small sum of rice when in reality, it is far more than that. Like the king, they agree to something, thinking they can afford it, not knowing if they actually can or not.',
            'This happens all the time with debt. What appear to be small monthly payments will often cost you more than you realize. Just like how the small amount of rice on the chessboard got the king to agree to the reward, a small monthly payment will often get people to agree to purchase something without knowing its true cost.',
            'Let me show you how this plays out in real life. Say you were to purchase a $15,000 car with an auto loan at 5 percent interest, paid off over 6 years. Your monthly payment would come out to about $242. By just looking at this monthly payment, the cost of the car seems pretty low. It is a small sum of rice.',
            'However, after six years, you’ll have paid an extra $2,393 in interest. The total cost of the car would come out to $17,393, not $15,000. That initial small monthly payment led to you paying a little over $2,000 more than you may have expected. This isn’t a horribly high cost, especially when spreading it out over six years. But unfortunately, it doesn’t usually stop there.',
            'For most people, this pattern repeats throughout their life. Studies suggest that the average American will own around 9 different cars over their lifetime, and if each one involves a loan, those interest costs add up quickly. Research indicates that people spend, on average, about $39,351 in interest on car loans over the course of their lifetime.',
            'And this is only car loans. Most people have far more debt than just their car. They have student loans, credit card debt, home loans, and personal loans. If you total up all the interest that people pay on all of their different debts throughout their lifetime, what do you think that cost would be?',
            'The total cost you will pay varies based on where you live, your credit score, your lifestyle, and lots of other factors. So it’s really hard to pin down an exact number. That being said, estimates suggest the typical American pays somewhere between $280,000 to $650,000 in interest over their lifetime.',
            'That is a pretty hefty sum of money. Especially when you consider that according to research from Investopedia, the median retirement savings for people aged 55 to 64 years old in the United States is only about $185,000. So most of the people who are supposed to retire within the next 10 years **have likely paid more in interest on their debts than they were able to save for retirement**.',
            'And this is where we really get blindsided by the true cost of things. There is a term in economics called opportunity cost. In choosing to do one thing with your money, you are giving up the opportunity to do something else with that money. The cost of buying something isn’t only the money you spend on it, but also the next best thing you could have done with that money.',
            'By choosing to make those $242 monthly car payments, you’re choosing not to invest that money for retirement, pay down other debts, or save for something else. You could easily end up in a scenario where you spent $650,000 in interest over your lifetime but only saved up $185,000 for retirement. The opportunity cost for all the debt you had throughout your life wasn’t just the interest. It was your retirement.',
            {
              kind: 'pull-quote',
              text: 'The opportunity cost for all the debt you had throughout your life wasn’t just the interest. It was your retirement.',
            },
            'It’s easy to be like the king, focusing on what seems manageable right now, that small amount of rice on the first few squares, without seeing the full picture of what you’re actually agreeing to.',
          ],
        },
        {
          id: 'how-to-pay-it-off',
          headline: 'How to actually pay it off.',
          body: [
            '((Up to)) this point, we’ve focused on treating the problems. The actual causes that keep you trapped in the cycle of debt. Addressing these causes is vital. However, even if you solve all of these problems, the symptom still hurts. Going back to the analogy from earlier, just because the broken arm has been reset doesn’t mean the pain goes away immediately. You still have to deal with the injury as it heals.',
            'So let’s talk about how you can actually pay off the debt you currently have. There are a few different approaches, and you can decide which one makes sense for your situation.',
            { kind: 'h3', text: 'The first approach: keep doing what you’re doing.' },
            'Technically the simplest. Just keep making your normal minimum payments each month, and eventually, you’ll pay them off. This is basically like knowing the pain will go away eventually after you got your arm reset, so you’ll just deal with it while it heals.',
            'So long as you’ve addressed the causes of your debt and you aren’t getting into any new debts, this can work. The debt gets paid down slowly but surely, and you don’t have to dramatically change your lifestyle. It just takes time.',
            { kind: 'h3', text: 'The second approach: pay extra each month.' },
            'If you want to get out of debt faster, you can make extra payments. Instead of just paying the minimum, you pay a bit extra toward your debts every month. This helps you in two ways. You get out of debt faster, and you save money on interest. The longer a debt is around, the more interest you pay on it.',
            'If you decide to go this route, the question becomes: which debt should you pay off first? Most people focus all their extra payments on one debt at a time. There are both mathematical and emotional reasons for this. As for which debt to focus on first, most people use one of two methods: the snowball method or the avalanche method.',
            'In the snowball method, you pay down your smallest debt first, regardless of the interest rate. Once that first debt is paid off, you work on the next smallest. Each time you pay off a debt, you redirect the money you were spending on that payment toward paying down your next debt. The amount you’re able to put toward paying down your debts increases each time you knock one off the list, kind of like a snowball picking up more snow as it rolls down a hill.',
            'The avalanche method is basically the same thing, except instead of starting with your smallest debt, you start with whichever debt has the highest interest rate.',
            'Now, if I’m being honest, the avalanche comparison doesn’t make as much sense to me as the snowball one does. The method works either way, even if the name is a bit confusing. Technically speaking, using the avalanche method will save you the most in interest and is the mathematically optimal approach.',
            'Let me give you an example. Say you have three debts:',
            {
              kind: 'list',
              items: [
                'A $2,000 personal loan at 8% interest',
                'A $5,000 credit card balance at 22% interest',
                'A $10,000 student loan at 5% interest',
              ],
            },
            'With the snowball method, you’d attack the $2,000 personal loan first because it’s the smallest balance. With the avalanche method, you’d tackle the $5,000 credit card first because it has the highest interest rate.',
            'Snowball says go for the quick win with the small balance. Avalanche says go for the biggest cost-saver with the high interest rate. Both approaches work, they just prioritize different things.',
            'So which method is better? Here’s the thing. Getting out of debt isn’t all about math. It’s also a very emotional process. The snowball gives you visible progress fast. That $2,000 personal loan might only take you a few months to knock out, and then it’s gone. That feeling of momentum helps you stick with the plan.',
            'And honestly, sticking with it is the most important thing. The mathematically perfect method doesn’t help you if you get discouraged and quit halfway through.',
            'Either method can work. If you like optimizing the math, run the avalanche. If you need emotional wins to maintain motivation, run the snowball. **The important thing is choosing an approach that works for you and actually sticking with it.**',
            { kind: 'h3', text: 'The third approach: debt consolidation.' },
            'There’s a third option called debt consolidation. This is when a company or lender will basically loan you the money to pay off all your other debts. So all the different loans you have, credit cards, car loans, personal loans, get paid off, and you’re left with just one loan payment to the consolidation company. Just to be clear, debt consolidation doesn’t get rid of the debt. All it does is transfer your debt to a different company under new terms.',
            'The biggest reason you might consider this is if you currently can’t even make your minimum payments. Debt consolidation gives you an opportunity to renegotiate the terms and potentially lower your monthly payment. The trade-off: lowering your payment means it will take longer to pay off the debt, and you’ll pay more interest over time.',
            'If you’re considering this, it’s not a failure. Sometimes people end up in genuinely tough situations where this is the best available option. The key is to make sure you’ve also addressed the underlying causes of the debt so you’re not just kicking the can down the road.',
          ],
        },
        {
          id: 'more-than-math',
          headline: 'Why this is more than just a math problem.',
          body: [
            '((So if)) I had to summarize how to escape the cycle of debt, it would be this. Identify and address whatever problems are putting you into debt in the first place, then pay down the debts you already have using whichever method works for your situation.',
            'That’s it. Pretty straightforward, right? Well, yes. The concept itself is pretty simple. But actually doing it? That tends to be a bit more difficult.',
            'First of all, it can be genuinely hard to identify what your real problem actually is. And honestly, it’s often not just one thing. It’s usually a combination of several smaller issues. Maybe you’re not tracking your spending, you’re eating out too much, you have subscriptions you forgot about, and your debt payments are higher than they need to be because you’re only making minimums. To actually get out of the debt cycle, you’d have to address several different things, not just one.',
            'That’s the first layer of difficulty. Figuring out what’s actually going on.',
            'The second layer is even harder. Admitting to yourself that something is actually a problem. Even when you can see it, accepting it is different.',
            'Let me give you an example. Maybe you’re spending more than you earn each month, and a big chunk of that is going to a car payment. The car is nicer than you probably needed. Somewhere in the back of your mind, you know the car payment is part of the issue. But that’s a hard thing to face. The idea of selling it and getting something cheaper feels like going backward. So it’s tempting to tell yourself the problem must be something else, anything else. You cut back on groceries, cancel a few subscriptions, and make all these different changes without addressing the actual issue.',
            'I’m not saying everyone needs to sell their car. The point is that sometimes the real problem is something we don’t want to face. And until we’re willing to look at it honestly, we’ll keep rearranging everything else while the core issue stays untouched. If that car really is the problem, you’ll probably enjoy having one even more when you’ve built yourself up to truly afford it. That’s not going backward. That’s being strategic about moving forward.',
            'And then there’s the third difficulty: actually maintaining the discipline to follow through over time. If you’re already deep in the debt cycle, escaping it will likely take you some time. Probably years. And maintaining the discipline to stick with it, to keep making those extra payments, to not spend money on things you can’t really afford, to stay aware of your triggers, that’s hard over the long haul.',
            'Especially when life happens. And life always happens. I mean, I even struggle to brush my teeth every day when life gets busy and I get stressed. And that’s just teeth. When money is involved, when you’re trying to maintain habits that require real sacrifice and discipline, it’s so much harder to keep it together when everything else is chaos.',
            'You’ll have setbacks. There will be times when you fall back into old patterns. That doesn’t mean you’ve failed. It means you’re human.',
            'Escaping the cycle of debt is so much more than just a math problem. It’s about learning, growing, and becoming someone capable of living differently than you have been. That isn’t easy. It requires patience with yourself, willingness to look at uncomfortable truths, and persistence even when progress is slow.',
            'But it’s possible. People do this. People in worse situations than yours have done this. It’s hard, yes. It takes time, absolutely. But it’s not impossible.',
            '**Failure, after all, doesn’t occur when something goes wrong. Failure only occurs if you quit trying.** As long as you keep coming back to the work, the slips are just part of the path.',
          ],
        },
        {
          id: 'where-to-start',
          headline: 'Where to actually start.',
          body: [
            '((If you’ve)) read all of this and you’re thinking “okay, but where do I actually start,” here’s the honest answer.',
            '**You start by seeing your real situation.** Not the situation you wish you had. The actual numbers on your debts, the interest you’re paying, the patterns underneath your spending, the cushion you don’t have yet. All of it.',
            'That’s what most people skip. They want to go straight to the paying-off-debt part, because that’s what feels productive. But trying to pay off debt without first seeing why you’re in it is like taking pain meds and skipping the X-ray. You might feel better for a while, but you’re not actually getting better.',
          ],
        },
      ],
      promptHead: {
        headline: 'Run the Debt Audit.',
        lede: 'Below is a prompt you can copy and paste into ChatGPT, Claude, or any AI chatbot. It walks you through your specific debt situation, helps you see what it’s actually costing you, and ends with a concrete first step you can take this week. It’s free. About 15 minutes.',
      },
      promptAfter:
        'After you run the audit, you’ll have a clearer picture of your debt and a concrete step to take next.',
      handoffHeadline: 'You’ve seen {{the chessboard.}}',
      handoffSub:
        'If what came back from the audit resonates and you want the full setup that addresses every cause we walked through, the 4 Hours to Financial Confidence System is what I built for that. $97. One payment. Yours forever. Either way, you’ve already seen more than most people will. What you do next is up to you.',
      handoffCta: 'See the full system',
    },

    saveForSomethingBig: {
      slug: 'save-for-something-big',
      eyebrow: 'Guide',
      title: 'How to Actually Save for {{Something Big.}}',
      intro:
        'You have a goal. You know what it costs. You can’t see the path from where you are to where you need to be. Here’s why saving feels impossible, and what changes when you flip the order of operations.',
      readingTime: '18 min read',
      sections: [
        {
          id: 'no-path',
          headline: 'The feeling of having a goal and no path.',
          body: ['TODO: opening hook. Name the specific feeling of wanting something concrete and not being able to picture how you get there.'],
        },
        {
          id: 'why-it-feels-impossible',
          headline: 'Why saving feels impossible.',
          body: ['TODO: orchard-keeper analogy. Every dollar already spoken for. The default order of operations is income → expenses → whatever’s left.'],
        },
        {
          id: 'order-matters',
          headline: 'The order matters.',
          body: ['TODO: pay yourself first. Water in containers. Why "whatever’s left" is always nothing.'],
        },
        {
          id: 'how-much',
          headline: 'How much should you actually be saving?',
          body: ['TODO: goal contribution math. Concrete examples with real dollar amounts.'],
        },
        {
          id: 'where-to-keep-it',
          headline: 'Where to keep money you’re saving.',
          body: ['TODO: short-term vs long-term framework. High-yield savings for close goals. No specific product picks.'],
        },
        {
          id: 'save-vs-debt',
          headline: 'Save or pay down debt first?',
          body: ['TODO: the honest version. When the answer is "both," when it’s "neither yet." Cross-link to Pillar 1.'],
        },
        {
          id: 'start-now',
          headline: 'Why starting now beats starting later.',
          body: ['TODO: compounding. Lily pad riddle. $500/month at 25 vs 30.'],
        },
      ],
      promptHead: {
        headline: 'See the gap.',
        lede: 'The Goal-to-Reality Gap prompt asks you to name one specific goal, then shows you the math on whether you’re on track, and what would have to change to close the gap.',
      },
      promptAfter:
        'The number is the number. Once you can see it, the next step is deciding what to do about it.',
      handoffHeadline: 'A gap on paper. {{A plan in practice.}}',
      handoffSub:
        'The gap prompt shows you the math. The full system builds the budget that actually closes it: your real numbers, your real goal, a working plan, and a 30-day launch to get it running. Four hours. One payment. Yours forever.',
      handoffCta: 'See the full system',
    },

    startInvesting: {
      slug: 'start-investing',
      eyebrow: 'Guide',
      title: 'How Investing {{Actually Works.}}',
      intro:
        'Compounding, real returns, risk and reward, and what makes an investment right for you specifically. The principles behind every investment decision.',
      readingTime: '20 min read',
      sections: [
        {
          id: 'most-powerful-force',
          headline: 'The most powerful force in finance.',
          body: [
            '((There is)) one force in finance that, basically, drives everything in our modern economy. It is why investors invest and why lenders lend. This force has even been referred to as the eighth wonder of the world. And it can either be a powerful tool working in your favor, putting money into your pocket, or it can be a powerful force working against you, taking money out of your pocket.',
            'This force is called compounding, or what is often called compound interest.',
            'The exact quote, often attributed to Albert Einstein, goes like this: “Compound interest is the eighth wonder of the world. He who understands it, earns it. He who doesn’t, pays it.”',
            'In other words, those who understand this powerful force work to get to a point where it is working in their favor. Those who don’t understand it usually end up in a scenario where it is working against them.',
            'Now, let me explain what compounding actually is, because most people have heard the word but don’t really know what it means.',
            'To compound means to add on to. Adding something on top of something. Let me give you an example.',
            'Say you invest $1,000, and that investment grows at 10 percent per year. After year one, your $1,000 has grown to $1,100. You earned $100. Pretty straightforward.',
            'But here is the part most people miss. In year two, you’re not just earning 10 percent on your original $1,000. You’re earning 10 percent on $1,100. Because the $100 you earned in year one is now part of your balance. So at the end of year two, you’d have $1,210. You earned $110, not $100. That extra $10 is interest on your interest.',
            'In year three, you’re earning 10 percent on $1,210, which gets you to $1,331. Year four, $1,464. And so on.',
            'The amount you earn grows each year because you’re earning a return not just on what you put in, but on everything you’ve already earned. **The longer this goes on, the more dramatic it becomes.**',
            'That is compounding. The same thing happens with debt, except in reverse. You don’t just owe interest on what you borrowed. You owe interest on what you borrowed plus all the interest that has already accumulated. Which is why, as I talked about in [the debt guide](/guides/get-out-of-debt), debt left to compound can end up costing you hundreds of thousands of dollars over your lifetime.',
            'But for investing, compounding is the engine. It’s what turns small monthly contributions into significant wealth, if you give it enough time.',
          ],
        },
        {
          id: 'lily-pad-pond',
          headline: 'The lily pad pond.',
          body: [
            '((Let me)) share a riddle with you. It goes like this.',
            'Say there was a pond covered in lily pads. Originally, it wasn’t covered, and was a mostly clear pond with only a few lily pads here and there. However, every day these lily pads would double, and after 30 days, the pond was completely covered in lily pads.',
            'Here’s the question. If the lily pads were doubling every day, on what day was the pond half covered?',
            'Your first thought might be to say that on day 15, the pond would be half covered. And if they were growing in a linear pattern, then you’d be right. However, the lily pads weren’t growing linearly. They were compounding and growing exponentially. So it was actually on day 29 that it was half covered.',
            'If the lily pads are doubling every day, that means that on the day before it was completely covered, day 29, it was half covered. On day 28, it was a quarter covered. On day 27, an eighth. And so on. The majority of the lily pads that now cover this pond only appeared in the last few days of compounding.',
            'Before those final days, the changes in lily pads were so small you could easily miss them. The changes weren’t very noticeable in the beginning, but they were essential to eventually covering the entire pond.',
            'So what does this riddle have to do with your finances?',
            'What we can learn from this is that, in the beginning, compounding growth might not be very impressive or even noticeable. In the long term, however, the changes can be incredible, and the largest changes occur toward the end of the time frame.',
            'This is one of the biggest reasons people who start investing early have such an advantage. Not because they put in more money. But because they gave their investments more time to compound. **The early years feel slow. They feel like nothing is happening. But that early growth is the foundation that the later, dramatic growth gets built on.**',
          ],
        },
        {
          id: 'time-matters',
          headline: 'Why time matters more than you might think.',
          body: [
            '((Let me)) show you what this actually looks like in numbers.',
            'Say you decide to start investing at 30 years old. You invest $500 a month, and your investments earn an average return of 10 percent each year. For this example, we’re going to say it is a constant 10 percent return to keep the math simple. In reality, your return will vary year to year.',
            'You continue investing like this for 35 years, until you retire at age 65. At age 65, your investments would have grown to about $1.6 million. That’s a significant amount of money.',
            'Now let’s run the same scenario, but you start at 25 instead of 30. You’re still putting in $500 a month, still earning 10 percent average. But now you have 40 years instead of 35. An extra five years.',
            'What would the difference be? After 40 years, your investments would have grown to about $2.6 million.',
            'So it took 35 years to earn $1.6 million. But only 5 more years on top of that to earn an additional million dollars. Just like with the lily pads, the majority of the growth occurred in those last few years.',
            'This is why people will tell you that one of the most important factors in investing is time. More important than the rate of return. More important even than how much you contribute. Just the simple fact of starting earlier and letting compounding run for longer is what creates the largest differences in outcomes.',
            'Now, I’m not bringing this up to make you panic if you haven’t started yet. Panicking won’t help. But it should change how you think about waiting. **Every month you wait is a month not spent compounding.** The cost of waiting until “things settle down” or “until you’re earning more” is much higher than most people realize.',
            {
              kind: 'pull-quote',
              text: 'The best time to start was years ago. The second best time is whenever you actually can.',
            },
            'The best time to start was years ago. The second best time is whenever you actually can.',
          ],
        },
        {
          id: 'real-returns',
          headline: 'A 2 percent return isn’t actually 2 percent.',
          body: [
            '((Okay,)) let’s say you’re already investing, or you’re getting close to it. The next thing you’ll want to understand is how to actually read your returns. Because here’s the trap most people fall into.',
            'Most people will look at an investment, see that it earned a positive return, and assume they made money. If the number went up, they earned money, right? Well, not exactly.',
            'A 2 percent return doesn’t necessarily mean you’re earning a 2 percent profit. There are costs associated with investing that typically eat up a good portion of your return. To actually make money from an investment, it needs to earn more than the cost of buying, maintaining, holding, and selling it. If the return doesn’t cross that threshold, even if the number on the screen went up, you’re actually losing money in real terms.',
            'There are three main things that determine where this break-even point actually is.',
            { kind: 'h3', text: 'Inflation.' },
            'Inflation is the general decrease in the purchasing power of your money. A dollar today is worth more than a dollar will be worth a year from now. Here’s an example. Say you buy a candy bar for $1. A year later, that same candy bar costs $1.05. One dollar can no longer buy you a candy bar like it could a year earlier. The purchasing power of that dollar has decreased. That’s inflation.',
            'If inflation is 2 percent and your investment earned a 2 percent return, you technically have a larger number in your account, but it only buys you the same amount of stuff it could have bought a year ago. Your 2 percent gain was offset by 2 percent inflation. You didn’t actually make a profit.',
            { kind: 'h3', text: 'Fees.' },
            'Most investments have costs associated with buying, maintaining, holding, or selling them. Some investments, like actively managed mutual funds, have an active manager who buys and sells assets within the fund. The manager charges a yearly fee for their services, usually a percentage of the fund. According to data from 2024, the average mutual fund fee comes out to about 1.44 percent per year. So if you earned an 8 percent return from a mutual fund, once you subtract the fees, your actual return would only be 6.56 percent.',
            'Different types of investments have different fees. Some have very low fees. Some have very high fees. Some, like a rental property, have a whole different set of costs: agent commissions, insurance, maintenance, vacancy costs, and more. Whatever investment you’re looking at, there are costs you need to be aware of.',
            { kind: 'h3', text: 'Taxes.' },
            'Different types of investments are taxed differently, and these taxes can significantly impact your actual returns. Some investments are taxed as ordinary income. Others qualify for long-term capital gains treatment, which is typically a lower rate. Some investments are held in tax-advantaged accounts like 401(k)s or IRAs, which can defer or eliminate taxes entirely.',
            'Your specific tax situation depends on your income, where you live, and the type of account you’re investing through. Without going too deep, the main point is that some portion of any gains will go to taxes, and that needs to be factored in.',
            'Let me put it all together with an example.',
            'Say inflation is at 3 percent. The investment you’re looking at has fees of about 1.5 percent per year. And based on your income, your tax rate on investment gains is 22 percent.',
            'Now let’s say your investment earned a 10 percent return this year. Not bad, right? Well, let’s see what that actually means.',
            'First, taxes. Twenty-two percent of your 10 percent gain is 2.2 percent. So after paying taxes, your return is down to 7.8 percent.',
            'Next, inflation, which was 3 percent. Take that 7.8 percent and subtract 3 percent, and you’re at 4.8 percent.',
            'Finally, fees, which were 1.5 percent. Take that 4.8 percent and subtract 1.5 percent, and you’re at 3.3 percent.',
            '**That 3.3 percent is your actual profit.** That’s what you really earned after accounting for inflation, fees, and taxes.',
            'So in this example, your break-even point would be around 6.7 percent. Anything you earn above 6.7 percent is real profit. Anything below that, and you’re losing purchasing power, even if the number in your account went up.',
            'The key takeaway here is this. When evaluating an investment, don’t just look at the return and assume that’s your profit. You need to look beyond the surface number and understand what you’re actually earning after everything is accounted for.',
          ],
        },
        {
          id: 'good-vs-good-for-you',
          headline: 'A good return isn’t automatically a good investment.',
          body: [
            '((Okay,)) so you know a positive return doesn’t automatically mean you made money. But there’s another layer to this. Even if you clear your break-even point, that doesn’t automatically mean you made a good investment.',
            'Let me explain with a thought experiment.',
            'Say someone walks up to you on the street and challenges you to sprint 100 meters on a standard Olympic track as quickly as possible. If you make it in under 15 seconds, you earn $100. Would you be willing to give it a shot? Probably yes. There’s a chance to earn $100 and not really anything to lose.',
            'Now, what if this 100-meter sprint were instead across a narrow bridge? The bridge is the same width as a lane on a track, but it’s suspended over a pool of lava, and it has no guardrails. If you make it across in under 15 seconds, you earn $100. Would you still be willing to give it a shot?',
            'Maybe. But I bet you’d want a higher reward than $100 for it. The consequences if things go wrong are so much higher.',
            'In both scenarios, the task is the same. Sprint 100 meters in under 15 seconds. But the risk is wildly different. And because the risk is different, you’d expect to be compensated differently. **Higher risk, you want higher reward. Lower risk, lower reward is fine.**',
            'This is a fundamental principle in investing. If you’re taking a higher risk with your money, you’d typically expect higher returns to make that risk worthwhile. If an investment isn’t very risky, then the returns would typically be lower.',
            'This is why something like a savings account, which has very little risk, tends to pay a low return. Whereas something like a cryptocurrency can have much higher potential returns, because of the much higher risk involved.',
            'So when you’re evaluating an investment, the question isn’t just “did I make money?” It’s “did I make enough money to justify the risk I took?”',
            'For most publicly traded investments, there’s actually a way to measure this. The risk of an investment can be measured using something called beta. Beta tells you how volatile an investment is compared to the broader market. The S&P 500, which is basically the largest 500 companies in the US, has a beta of 1.0. That’s the baseline. An investment with a beta of 1.5 is 50 percent more volatile than the market. An investment with a beta of 0.5 is half as volatile.',
            'Once you know the beta, you can use it to estimate what return you should have expected for the risk you took. Then you compare that expected return to your actual return. If your actual return is higher than what was expected, you outperformed. If it’s lower, you underperformed for the risk you took on.',
            'Here’s an example. Say you invested in a cryptocurrency, and that year, the S&P 500 returned 10 percent and your cryptocurrency returned 15 percent. That sounds like a pretty good investment, right? Well, maybe. It depends on the risk you took.',
            'Suppose this cryptocurrency had a beta of 1.8, meaning it was 80 percent more volatile than the S&P 500. With a beta that high, the cryptocurrency would have been expected to return around 16.4 percent to compensate you for the risk you took. So even though you earned 15 percent, you actually underperformed by 1.4 percent. You took on extra risk and didn’t get the return you should have gotten for it. It’s like running across that narrow bridge for $150 when you should have gotten $164 for the danger.',
            'Now, I’m not going to dig deeper into the math here. There are formulas for it, and most major financial websites will calculate beta for you automatically on any publicly traded investment. The main point is just this. A positive return doesn’t automatically mean an investment performed well. You may have taken on more risk than you needed to in order to get that return.',
            'For most people, the simpler version is this. If you’re losing sleep over an investment, it’s probably too risky for you. If your money is in something where you feel a constant low-grade anxiety, the return probably isn’t worth what you’re trading for it.',
            {
              kind: 'pull-quote',
              text: 'Sometimes the best risk gauge is just your ability to sleep at night.',
            },
            'Sometimes the best risk gauge is just your ability to sleep at night.',
          ],
        },
        {
          id: 'good-for-you',
          headline: 'What makes an investment good for you.',
          body: [
            '((So far)) we’ve covered two things. Whether your return is real after inflation, fees, and taxes. And whether you were compensated fairly for the risk you took.',
            'But there’s one more piece. And honestly, it’s the most important one. Because it’s the piece that determines whether an investment is right for you specifically.',
            'A good investment is simply an investment that achieves the goal you have for it. Does it do what you need it to do. That is the actual definition.',
            'Now, I’m not going to tell you what specific things to buy. That depends way too much on your situation, and it’s not really my place. What I can do is show you how to think about it.',
            'There isn’t some universal rule like “once your return is 5 percent above your break-even point, it’s a good investment.” Because not every investment has the same goal behind it. The same investment could be exactly what one person needs and completely wrong for someone else, depending on what each of them is trying to accomplish.',
            'Let me walk through a few examples to show you what I mean.',
            { kind: 'h3', text: 'Goal: long-term wealth building.' },
            'Say your goal is to grow your wealth over the course of decades. Maybe for retirement, maybe for financial freedom, whatever the long-term version of “build wealth” looks like for you. To do this, you’re going to need more than just a positive return. You’ll need a meaningful difference between your break-even point and your actual return, and you’ll need a lot of time for that difference to compound.',
            'A savings account paying 2 percent a year isn’t going to do it. Inflation alone eats most of that. You’d basically be running in place.',
            'The kinds of things people often look at for this goal are higher-growth options that can deliver returns above the break-even point over long timeframes. Things like stock index funds are popular here, because they tend to have low fees and have historically averaged returns of around 10 percent per year, though that average comes with a lot of ups and downs along the way.',
            { kind: 'h3', text: 'Goal: protecting an emergency fund from inflation.' },
            'Now let’s say your goal is completely different. You’ve built up an emergency fund, and you want to keep it from losing purchasing power. You don’t want inflation eating away at it, but you also don’t want to put it at risk. Because it’s the money you need available when life goes sideways.',
            'For this goal, a high-growth investment is actually a terrible choice. If the market drops 30 percent the same week you lose your job, your emergency fund just became less of an emergency fund. What you actually need is something with very low risk, high liquidity (meaning you can access it quickly), and a return that at least keeps pace with inflation.',
            'The kinds of things people often look at for this goal are options like high-yield savings accounts or money market accounts. Returns are modest, but the money stays safe and accessible.',
            { kind: 'h3', text: 'Goal: saving for a house down payment in the next few years.' },
            'Now let’s say you’re saving for an $80,000 down payment, and you’re planning to buy in the next three or four years. This one sits in a tricky middle ground. You want some growth so you can get there faster. But if your savings drop 30 percent right before you’re ready to buy, that’s a real problem.',
            'What people in this situation often think about is the tradeoff between growth and protection. For shorter timeframes, less risk usually makes more sense. The closer you are to needing the money, the less time you have to recover from a downturn. Some people accept slower growth in exchange for not putting the down payment at risk. Others take on a bit more risk because they have a longer window. There isn’t one right answer. It depends on your timeline, your situation, and how much risk you can live with.',
            'The same investment that’s great for the first goal would be terrible for the second, and questionable for the third. **The investment didn’t change. The goal did.**',
            'So when you’re evaluating any investment, the real question isn’t “is this a good investment?” It’s “is this a good investment for this specific goal?” Match the investment to the job you need it to do.',
          ],
        },
        {
          id: 'compound-yourself',
          headline: 'Compounding works on you too.',
          body: [
            '((Now,)) the last thing I want to point out about investing isn’t actually about money.',
            'Benjamin Franklin once said, “If a man empties his purse into his head, no man can take it away from him. An investment in knowledge always pays the best interest.”',
            'One of the best investments you can make is an investment in your own education and personal growth. And I’d argue that an investment in yourself, specifically in your knowledge and your character growth, will have a larger impact on where you end up 40 years from now than just about any single asset you can buy today.',
            '**Compounding works on more than just money. It works on you as well.** Every skill you build, every lesson you learn, every habit you put in place, those all compound over time too. The person you become through years of slow, steady growth will end up earning more, saving more, and investing better than the person who skipped the learning to try to get to the fancy stocks faster.',
            'If you’ve read this far, you’re already doing that work. You now understand compounding, you understand break-even points, you understand that risk and reward are linked, and you understand that the right investment depends on what you’re trying to do. That’s already more than most people who actively invest.',
          ],
        },
        {
          id: 'one-thing-you-need',
          headline: 'The one thing you actually need.',
          body: [
            '((Okay.)) So you understand how investing works. You get the math, you get the principles, you get how to think about whether an investment fits your goals.',
            'There’s one thing all of this depends on, though. And it’s worth saying plainly.',
            {
              kind: 'pull-quote',
              text: 'You can’t invest money you don’t have.',
            },
            'You can’t invest money you don’t have.',
            '**Investing requires margin.** It requires that you have money coming in each month that doesn’t immediately have to go back out. If your spending matches or exceeds your income, then there’s nothing to invest with. And if you try to invest anyway, by stretching the budget or taking from somewhere you shouldn’t, you’ll end up pulling that money back out the next time something goes wrong. Which means you never actually let compounding do its job.',
            'This is where most people get stuck. Not on what to invest in. Not on how to evaluate a return. But on the much earlier step of consistently having money left over at the end of the month to actually invest.',
            'If that’s where you are, you’re not behind. You’re not doing it wrong. You just haven’t built the system underneath the investing yet. And the system underneath the investing is honestly the hardest part. It’s the part nobody really teaches.',
            'That’s what I built the 4 Hours to Financial Confidence System for.',
            'It’s a guided setup, about four hours of structured work, that walks you through building the actual foundation. You figure out where your money is going right now, you name what you’re working toward, you build a budget that actually fits your real life, and you set up the system that lets you consistently have money left over each month. Money you can invest, save, pay down debt with, or whatever else moves you toward what you actually want.',
            'It’s $97 and you keep it. The system runs through AI prompts you paste into ChatGPT, Claude, or any chatbot, so you can work through it at your own pace. And once it’s set up, you have everything you need to start putting money toward your goals, including investing, on a regular basis.',
            'If you’re someone who already has the margin and the system in place, you don’t need it. Go invest. But if you’re not there yet, and you want to be, this is what I’d point you to.',
            'Either way, you now understand how all of this actually works. That alone is worth something. What you do next is up to you.',
          ],
        },
      ],
      handoffHeadline: 'What you do next is {{up to you.}}',
      handoffSub:
        'Either way, you now understand how all of this actually works. That alone is worth something.',
      handoffCta: 'See the full system',
    },
  },

  // Short labels used in the cross-link strip rendered at the bottom of every
  // guide and the Audit page. Keeping them in nav rather than each guide so
  // they stay consistent.
  crosslink: {
    headline: 'Where to next?',
    items: [
      {
        kind: 'audit',
        eyebrow: 'Free tool',
        title: 'Run the Environment Audit',
        line: 'Map the external pressures on your spending. Fifteen minutes, no account.',
        to: '/environment-audit',
      },
      {
        kind: 'guide',
        eyebrow: 'Guide',
        title: 'Get Out of Debt',
        line: 'Why the math feels stuck, and the four-step way through.',
        to: '/guides/get-out-of-debt',
      },
      // Hidden until the "Save for Something Big" guide is written (its body
      // is still TODO stubs). Restore this card when the guide goes live.
      // {
      //   kind: 'guide',
      //   eyebrow: 'Guide',
      //   title: 'Save for Something Big',
      //   line: 'Flip the order of operations. See the gap. Close it.',
      //   to: '/guides/save-for-something-big',
      // },
      {
        kind: 'guide',
        eyebrow: 'Guide',
        title: 'Start Investing',
        line: 'The three pre-conditions. What to do if you’re not there yet.',
        to: '/guides/start-investing',
      },
    ],
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
      'Financial confidence isn’t something you earn after the goals are done. It shows up the moment you can see the path: your real numbers, your real goals, and proof that you’re moving forward.',
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
      'Five ongoing tools you keep permanently',
      'Personalized 30-day launch plan',
      'Video walkthrough of a real budget being built',
      'Every prompt, ready for any AI',
      'The roadmap that ties it all together',
      'Free updates for life. We email you whenever the product improves.',
    ],
    cta: 'Build My Plan',
    finePrint: null,
    guarantee: '30-day money-back guarantee. No questions, no forms.',
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
        a: 'Six foundational documents from the setup (goals, snapshot, environment audit, spending patterns, budget, launch plan) plus five ongoing tools you keep permanently. Everything is yours.',
      },
      {
        q: 'Does it expire?',
        a: 'No. One payment, keep everything forever.',
      },
      {
        q: 'What if my income is irregular?',
        a: 'The system is built around your actual numbers, whatever they are. The setup asks you about income variability directly and builds the budget to flex with it. Freelancers and gig workers get a different working budget than someone with a steady paycheck. Same tools, different output.',
      },
      {
        q: 'What if I’m already deep in debt? Will this still work?',
        a: 'Yes. The system doesn’t assume you’re starting from zero. It maps your real situation, including debt, and builds the plan from there. Several of the tools, especially the budget and the launch plan, are designed to give debt payoff a real place in the picture instead of treating it like an afterthought.',
      },
      {
        q: 'How is this different from a budgeting app like YNAB or Mint?',
        a: 'Apps track. This builds. YNAB and Mint show you what happened with your money. This system helps you decide what you want to happen, names what’s been pushing you off course, and gives you a plan to move toward your goals. You can use both. They do different jobs.',
      },
      {
        q: 'What if it doesn’t work for me?',
        a: 'Full refund within 30 days. No questions, no forms. If you build the plan and don’t think it’s worth what you paid, you get every dollar back.',
      },
    ],
  },

  // ── Email capture (inline Kit opt-in blocks) ────────────────────────────
  // Rendered by the EmailCapture component at the end of each live guide.
  // The form posts to SITE.kitFormAction.
  //
  // NOTE: the `audit` block below is currently unused — the audit page's
  // inline form was removed in favor of sending finishers to the dedicated
  // opt-in at /environment-deep-dive. Kept here in case it comes back.
  emailCapture: {
    audit: {
      headline: 'Want help making the changes stick?',
      body:
        'The audit hands you the map. Following through is the harder part. Drop your email and I’ll send you the Environment Deep-Dive: five short emails, one a day, each going deeper on one source of pressure and how to handle it. It pairs with the reset plan your audit just gave you. Free, and you can unsubscribe anytime.',
      button: 'Send me the Deep-Dive',
      finePrint: 'No spam. Unsubscribe in one click.',
      emailPlaceholder: 'Email address',
      success: 'Check your inbox. The first email is on its way.',
      pendingNote:
        'The Deep-Dive isn’t live just yet. Check back soon and you’ll be first in line.',
    },
    guides: {
      headline: 'Get the next one.',
      body:
        'I write these guides the way I’d explain things to a friend: the full reasoning, no fluff. Drop your email and I’ll send you new guides and tools as I finish them, plus the Environment Deep-Dive series to start.',
      button: 'Send them my way',
      finePrint: 'No spam. Unsubscribe in one click.',
      emailPlaceholder: 'Email address',
      success: 'You’re in. New guides will land in your inbox as they’re finished.',
      pendingNote:
        'The list isn’t live just yet. Check back soon and you’ll be first in line.',
    },
  },

  // ── Final CTA ────────────────────────────────────────────────────────────
  finalCta: {
    headline: 'Four hours to be on {{the path.}}',
    body: 'You already tried one of the tools. The full system is the rest of that: the setup that gets you moving and the tools that keep you moving. Four hours from now, you’ll know exactly where you are, where you’re going, and what’s next.',
    cta: 'Build My Plan · $97',
    sub: '30-day money-back guarantee',
  },

  // ── Legal pages (/terms and /privacy) ────────────────────────────────────
  // TEMPLATE LANGUAGE, NOT LEGAL ADVICE. Drafted in plain language to cover
  // the digital product, the 30-day guarantee, Kit email + Kit Commerce
  // checkout, and analytics. Zac should review (and ideally have a lawyer
  // look at) both pages before relying on them.
  legal: {
    terms: {
      title: 'Terms of Service',
      updated: 'Last updated: June 2026',
      sections: [
        {
          heading: 'What you’re buying',
          body: [
            'The 4 Hours to Financial Confidence System is a digital product sold by ArcGenesis Finance. It includes a guided setup you run with the AI tool of your choice, plus a set of ongoing AI prompts and supporting materials delivered through a private access page.',
            'It’s a one-time purchase. There is no subscription, nothing renews, and your access doesn’t expire. The documents the tools produce are yours to keep.',
          ],
        },
        {
          heading: 'What this product is not',
          body: [
            'This product is educational. It’s a system for organizing your own money decisions. It is not financial, investment, tax, or legal advice, and ArcGenesis Finance is not a registered financial advisor. Every decision you make with your money is yours, and you should consult a qualified professional for advice about your specific situation.',
            'Results depend on your situation and your follow-through. We don’t promise any specific financial outcome.',
          ],
        },
        {
          heading: '30-day money-back guarantee',
          body: [
            'If you buy the system and decide within 30 days that it wasn’t worth what you paid, email us and you get a full refund. No questions, no forms. The support address is at the bottom of every page.',
          ],
        },
        {
          heading: 'Payments',
          body: [
            'Checkout and payment processing are handled by Kit Commerce. Your payment details go to Kit and their payment processor, not to us. Their terms apply to the transaction itself.',
          ],
        },
        {
          heading: 'Your access link',
          body: [
            'After purchase you receive a private link to the system by email. The link is for you. Please don’t share it publicly or redistribute the materials. You’re welcome to use everything you produce with the tools however you like, including sharing your own documents with a partner or family.',
          ],
        },
        {
          heading: 'AI tools',
          body: [
            'The system runs through AI chat tools you already use, like Claude or ChatGPT. Those tools belong to their own companies, have their own terms, and can occasionally produce mistakes. Check any number or suggestion that matters before acting on it.',
          ],
        },
        {
          heading: 'Changes to these terms',
          body: [
            'If we update these terms, the new version goes on this page with a new date. Buying or using the product after a change means you accept the updated terms.',
          ],
        },
        {
          heading: 'Contact',
          body: [
            'Questions about any of this? Email zac.arcgen@gmail.com and you’ll get a reply from a real person.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      updated: 'Last updated: June 2026',
      sections: [
        {
          heading: 'The short version',
          body: [
            'We collect as little as possible. No accounts, no tracking cookies, no selling data. The free tools on this site work without giving us anything, including your email.',
          ],
        },
        {
          heading: 'Email',
          body: [
            'If you choose to join the email list, your email address is stored with Kit (kit.com), the service that sends our emails. We use it to send you the content you signed up for and occasional updates about the product. Every email has an unsubscribe link, and unsubscribing takes one click.',
            'You never have to give us your email to use the free tools on this site.',
          ],
        },
        {
          heading: 'Purchases',
          body: [
            'Checkout runs through Kit Commerce. Kit and their payment processor handle your payment details; we never see your card number. After a purchase, Kit stores your email so we can send your access link and free product updates.',
          ],
        },
        {
          heading: 'Analytics',
          body: [
            'We use privacy-friendly analytics to count visits and see which pages get used, so we can make the site better. The analytics are aggregate numbers, not profiles of you. No advertising trackers, no cross-site tracking.',
          ],
        },
        {
          heading: 'What you share with AI tools',
          body: [
            'The system’s tools run in your own AI chat (Claude, ChatGPT, or another tool you pick). Whatever you type there goes to that AI provider under their privacy policy, not to us. We never see your conversations, your numbers, or the documents you produce.',
          ],
        },
        {
          heading: 'Your choices',
          body: [
            'Want your email removed from the list entirely? Unsubscribe from any email, or write to zac.arcgen@gmail.com and we’ll delete it.',
          ],
        },
        {
          heading: 'Changes to this policy',
          body: [
            'If this policy changes, the new version goes on this page with a new date.',
          ],
        },
      ],
    },
  },

  // ── Not-found page (catch-all route) ─────────────────────────────────────
  // Deliberately generic: the same page renders for every unknown URL,
  // including wrong /system/ slugs, with no hint about what else exists.
  notFound: {
    headline: 'Nothing lives at {{this address.}}',
    body: 'The page may have moved, or the link may be off by a character. Either way, the home page has everything worth finding.',
    cta: 'Back to the home page',
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    tagline: 'Built to put you on the path to the life you actually want.',
  },
}
