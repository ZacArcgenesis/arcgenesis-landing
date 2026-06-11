/**
 * system-prompts.js — the 11 tools delivered as the 4 Hours to Financial
 * Confidence System.
 *
 * Rendered on the buyer-only access page at /system/<slug>. Each tool has
 * a name, one-line description, category (setup or ongoing), an interstitial
 * (`before`: short paragraphs rendered above the prompt window explaining
 * how and when to use the tool), and a prompt object the PromptWindow
 * component can render with copy + chrome.
 *
 * Prompt bodies are imported as raw text from the markdown files in
 * src/config/system-prompts/. Edit the .md files to update the prompts —
 * Vite picks up changes on the next build / HMR refresh.
 *
 * Note on the Environment Audit: the system page uses the SYSTEM version
 * (./system-prompts/environment-audit.md), which is distinct from the
 * lead-magnet version (FREE_PROMPT in ./prompt.js) used on the free Audit
 * page. The two prompts differ in their closing — the lead magnet pitches
 * the system, the system version references other tools in the system.
 */

import budgetBuilder from './system-prompts/budget-builder.md?raw'
import environmentAudit from './system-prompts/environment-audit.md?raw'
import financialForceSnapshot from './system-prompts/financial-force-snapshot-generator.md?raw'
import goalDefiner from './system-prompts/goal-definer.md?raw'
import goalProgressChecker from './system-prompts/goal-progress-checker.md?raw'
import launchPlanGenerator from './system-prompts/launch-plan-generator.md?raw'
import moneyFinder from './system-prompts/money-finder.md?raw'
import monthlyForceReview from './system-prompts/monthly-financial-force-review.md?raw'
import planRecalibrator from './system-prompts/plan-recalibrator.md?raw'
import primaryCausesDiagnostic from './system-prompts/primary-causes-diagnostic.md?raw'
import spendingRegretDecoder from './system-prompts/spending-regret-decoder.md?raw'

// The markdown title line ("# Goal Definer") is for humans browsing the
// files; the copyable prompt starts at "You are one tool in…". Stripped
// here so the Copy button and the downloaded zip both deliver the prompt
// without the title.
const stripTitle = (raw) => raw.replace(/^#[^\n]*\n+/, '')

export const SYSTEM_PROMPTS = [
  // ── Setup tools (run in order during the four-hour guided setup) ────────
  {
    id: 'goal-definer',
    name: 'Goal Definer',
    line: 'Walks you through naming 3–4 specific financial goals: dollar amounts and the personal reason each one matters.',
    category: 'setup',
    before: [
      'First tool. The Goal Definer figures out what all of this is actually for. It’s a guided conversation, about 15 to 25 minutes, where the AI asks you eight reflective questions and then helps you turn what surfaces into 3 or 4 specific financial goals, each with the reason it matters to you.',
      'You don’t need anything ready for this one. Just honest answers. One strong recommendation: use voice input if your chatbot has it. When people type, they give the short version. When they talk, the real stuff comes out.',
      'You’ll walk away with your Named Goals document. Save it to your folder. Everything else in this system points at it.',
    ],
    prompt: { fileName: 'goal-definer.prompt', body: stripTitle(goalDefiner) },
  },
  {
    id: 'financial-force-snapshot',
    name: 'Financial Force Snapshot Generator',
    line: 'Produces a full picture of where your money is going, including the one number that tells you whether you’re moving forward or backward each month.',
    category: 'setup',
    before: [
      'Now that you know where you’re going, this one figures out where you are. The Snapshot Generator walks you through your real numbers: what comes in, what’s locked in, what’s flexible, and what’s left. That last number is your financial force, and it’s the most important number in this whole system.',
      '30 to 40 minutes, the longest tool in the setup and worth every minute. The AI checks its work with you as it goes, so nothing lands in the document without you confirming it.',
      'Have ready: your Named Goals from the last tool, and your bank and credit card statements from the last 3 months, either as CSV exports or screenshots. Real data beats guessing, and the tool will push back on guesses anyway.',
      'You’ll walk away with your Financial Snapshot, the central document everything else plugs into.',
    ],
    prompt: { fileName: 'financial-force-snapshot.prompt', body: stripTitle(financialForceSnapshot) },
  },
  {
    id: 'environment-audit',
    name: 'Environment Audit',
    line: 'Maps the specific external forces in your life pushing you to spend (businesses, banks, government, social comparison) plus the changes you can make today.',
    category: 'setup',
    before: [
      'This one maps the outside pressure. Nearly everything around you is built to get you to spend, and most of it works precisely because you never look straight at it. The audit walks through four groups (businesses, banks, the broader economy, and social comparison), finds your specific exposures, and ends with the two or three changes that would take the most pressure off.',
      '20 to 30 minutes, nothing to have ready.',
      'You’ll walk away with your Environment Audit document. It feeds your budget in Phase 3, and it gives the Regret Decoder real material to pattern-match against later.',
    ],
    prompt: { fileName: 'environment-audit.prompt', body: stripTitle(environmentAudit) },
  },
  {
    id: 'primary-causes-diagnostic',
    name: 'Primary Causes Diagnostic',
    line: 'Identifies the internal patterns behind purchases you regret. Four causes, each with its own story.',
    category: 'setup',
    before: [
      'The audit covered what’s pushing from the outside. This one looks at what’s happening inside. There are four internal patterns that drive almost all regretted spending, and most people have one to three of them active. This conversation figures out which ones are yours, using your own examples, and gives you a signal to watch for with each.',
      'Fair warning: this is the most honest 25 minutes in the system. It’s also the one people tend to say changed the most for them. Voice input strongly recommended here.',
      'You’ll walk away with your Active Primary Causes document. That’s the last of your four foundation documents. Phase 2 done.',
    ],
    prompt: { fileName: 'primary-causes-diagnostic.prompt', body: stripTitle(primaryCausesDiagnostic) },
  },
  {
    id: 'budget-builder',
    name: 'Budget Builder',
    line: 'Builds a working budget using a key principle: goal contribution gets decided first, then spending fits into what’s left.',
    category: 'setup',
    before: [
      'The Budget Builder takes your snapshot and your goals and turns them into a working budget using four principles, with your Goal Contribution decided first, so progress stops being whatever’s left over at the end of the month. It also helps you pick the way of running the budget that takes the least willpower for you specifically, because the best method is the one you’ll still be using in six months.',
      '20 to 30 minutes. Have ready: your Financial Snapshot (required), plus your Environment Audit and Primary Causes if you did them. The more you paste in, the more personal the budget gets.',
      'You’ll walk away with your budget and a short list of setup steps.',
    ],
    prompt: { fileName: 'budget-builder.prompt', body: stripTitle(budgetBuilder) },
  },
  {
    id: 'launch-plan-generator',
    name: 'Launch Plan Generator',
    line: 'Produces a personalized 30-day week-by-week plan to get your budget running, including the environment exits as first-week tasks.',
    category: 'setup',
    before: [
      'Last setup tool, and the shortest. The Launch Plan Generator turns your budget into a 30-day plan: what to do in week one, what to watch for in weeks two and three, and how to close out your first month.',
      '10 to 15 minutes. Have ready: your budget (required), plus your audit and causes documents if you have them.',
      'You’ll walk away with your launch plan, and that’s setup complete. Four documents, one budget, one plan. From here, the system shifts from building to running.',
    ],
    prompt: { fileName: 'launch-plan-generator.prompt', body: stripTitle(launchPlanGenerator) },
  },

  // ── Ongoing toolkit (use anytime after the setup is in place) ────────────
  // Order matters: it's the order the buyer page presents them in.
  {
    id: 'monthly-financial-force-review',
    name: 'Monthly Financial Force Review',
    line: 'A 15-minute monthly check-in that produces one headline number: did you move forward or backward this month?',
    category: 'ongoing',
    before: [
      'The heartbeat of the system, and the one tool with a schedule. Once a month, 15 to 20 minutes: bring your snapshot and your budget, give it this month’s numbers, and it tells you your financial force for the month. Forward, backward, or standing still. Then it produces an updated snapshot that replaces your old one.',
      'Put a recurring time on your calendar now, because this monthly habit is what keeps everything you just built alive. Months where everything went to plan are quick. Months where it didn’t are the ones where this matters most.',
    ],
    prompt: { fileName: 'monthly-financial-force-review.prompt', body: stripTitle(monthlyForceReview) },
  },
  {
    id: 'money-finder',
    name: 'Money Finder',
    line: 'Sets a real target for raising your financial force, then hunts through your actual numbers for the money to hit it.',
    category: 'ongoing',
    before: [
      'Use this when you want your financial force higher than it is. Maybe your snapshot came back negative. Maybe the budget math wouldn’t close. Maybe you’re three months in and want to push $80 a month to $300. The Money Finder sets a real target with you, then goes through your actual numbers hunting for money, easy wins first, the big structural stuff last and only with your say-so. Every move you agree to gets a real dollar value attached.',
      'You’ll walk away with a Force Plan: the moves, what each one is worth monthly, and your new projected force.',
      '30 to 45 minutes. Bring your snapshot (required), plus your budget, audit, and causes if you have them.',
    ],
    prompt: { fileName: 'money-finder.prompt', body: stripTitle(moneyFinder) },
  },
  {
    id: 'spending-regret-decoder',
    name: 'Spending Regret Decoder',
    line: 'Diagnoses a purchase you regret. Surfaces both the environmental trigger and the internal cause, then gives specific fixes.',
    category: 'ongoing',
    before: [
      'Use this when you buy something you wish you hadn’t. Instead of just feeling bad about it, the decoder works backward through the purchase: what in your environment triggered it, and which internal pattern said yes. It names what happened, gives you one fix for each layer, and leaves you with a four-question checklist you can run in your head before any future purchase.',
      '10 to 15 minutes. Paste in your Environment Audit and Primary Causes if you have them. It’ll connect the purchase to patterns you’ve already identified, which is when this tool really clicks.',
    ],
    prompt: { fileName: 'spending-regret-decoder.prompt', body: stripTitle(spendingRegretDecoder) },
  },
  {
    id: 'plan-recalibrator',
    name: 'Plan Recalibrator',
    line: 'Adjusts your budget when something changes. Small tweaks or major life overhauls.',
    category: 'ongoing',
    before: [
      'Use this when the budget and reality stop matching. Sometimes that’s small, like a target that’s been off for a few months. Sometimes it’s big: a new job, a move, a baby, an expense that knocked everything sideways. Either way, this tool adjusts your budget to fit where you actually are now, without starting over.',
      'Bring your current budget and your latest snapshot. 10 to 20 minutes depending on how much changed.',
      'And worth saying plainly: needing this tool means the system is working the way it’s supposed to. Budgets that never change are budgets that got abandoned.',
    ],
    prompt: { fileName: 'plan-recalibrator.prompt', body: stripTitle(planRecalibrator) },
  },
  {
    id: 'goal-progress-checker',
    name: 'Goal Progress Checker',
    line: 'The math on where you stand, how fast you’re moving, and when you’ll get there.',
    category: 'ongoing',
    before: [
      'Every 3 to 6 months, run this one for the wide view. The monthly review tells you whether the contribution went out. This one tells you what it’s all adding up to: how far along each goal is, how fast it’s moving, and when you’ll arrive at the current pace, measured against the target dates in your budget.',
      '5 to 10 minutes. Bring your latest snapshot or budget and your current balances.',
      'Some check-ins will show you’re ahead of schedule. Catch those moments. They’re the second marshmallow becoming real.',
    ],
    prompt: { fileName: 'goal-progress-checker.prompt', body: stripTitle(goalProgressChecker) },
  },
]

// Convenience lookups for the page.
export const SETUP_PROMPTS = SYSTEM_PROMPTS.filter((p) => p.category === 'setup')
export const ONGOING_PROMPTS = SYSTEM_PROMPTS.filter((p) => p.category === 'ongoing')

/**
 * The setup phases. Each phase groups one or more tools under a named theme
 * with a description and a tool/time line (rendered in the phase eyebrow),
 * mirroring the roadmap that ships with the system. The page iterates this
 * array to render the phase sections in order.
 */
export const SETUP_PHASES = [
  {
    num: 1,
    name: 'Orientation',
    description: 'Name where you’re going, then map where you are.',
    time: 'Two tools, about an hour',
    toolIds: ['goal-definer', 'financial-force-snapshot'],
  },
  {
    num: 2,
    name: 'Diagnosis',
    description: 'This is the part most finance content skips entirely: the forces operating on your spending, outside and inside.',
    time: 'Two tools, about an hour',
    toolIds: ['environment-audit', 'primary-causes-diagnostic'],
  },
  {
    num: 3,
    name: 'Design',
    description: 'Everything so far has been seeing clearly. Now you build.',
    time: 'One tool plus one video, about 30 minutes',
    toolIds: ['budget-builder'],
    hasWalkthrough: true,
  },
  {
    num: 4,
    name: 'Execution',
    description: 'The bridge between the plan on paper and the plan in your actual life.',
    time: 'One tool, 15 minutes',
    toolIds: ['launch-plan-generator'],
  },
]

/**
 * Resolve a phase's tool IDs into full tool objects. Page renders use this
 * so phase metadata stays decoupled from the prompt content.
 */
export function getPhaseTools(phase) {
  return phase.toolIds
    .map((id) => SYSTEM_PROMPTS.find((p) => p.id === id))
    .filter(Boolean)
}
