/**
 * system-prompts.js — the 10 tools delivered as the 4 Hours to Financial
 * Confidence System.
 *
 * Rendered on the buyer-only access page at /system/<slug>. Each tool has
 * a name, one-line description, category (setup or ongoing), and a prompt
 * object the PromptWindow component can render with copy + chrome.
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
import monthlyForceReview from './system-prompts/monthly-financial-force-review.md?raw'
import planRecalibrator from './system-prompts/plan-recalibrator.md?raw'
import primaryCausesDiagnostic from './system-prompts/primary-causes-diagnostic.md?raw'
import spendingRegretDecoder from './system-prompts/spending-regret-decoder.md?raw'

export const SYSTEM_PROMPTS = [
  // ── Setup tools (run in order during the four-hour guided setup) ────────
  {
    id: 'goal-definer',
    name: 'Goal Definer',
    line: 'Walks you through naming 3–4 specific financial goals: dollar amounts and the personal reason each one matters.',
    category: 'setup',
    prompt: { fileName: 'goal-definer.prompt', body: goalDefiner },
  },
  {
    id: 'financial-force-snapshot',
    name: 'Financial Force Snapshot Generator',
    line: 'Produces a full picture of where your money is going, including the one number that tells you whether you’re moving forward or backward each month.',
    category: 'setup',
    prompt: { fileName: 'financial-force-snapshot.prompt', body: financialForceSnapshot },
  },
  {
    id: 'environment-audit',
    name: 'Environment Audit',
    line: 'Maps the specific external forces in your life pushing you to spend (businesses, banks, government, social comparison) plus the changes you can make today.',
    category: 'setup',
    prompt: { fileName: 'environment-audit.prompt', body: environmentAudit },
  },
  {
    id: 'primary-causes-diagnostic',
    name: 'Primary Causes Diagnostic',
    line: 'Identifies the internal patterns behind purchases you regret. Four causes, each with its own story.',
    category: 'setup',
    prompt: { fileName: 'primary-causes-diagnostic.prompt', body: primaryCausesDiagnostic },
  },
  {
    id: 'budget-builder',
    name: 'Budget Builder',
    line: 'Builds a working budget using a key principle: goal contribution gets decided first, then spending fits into what’s left.',
    category: 'setup',
    prompt: { fileName: 'budget-builder.prompt', body: budgetBuilder },
  },
  {
    id: 'launch-plan-generator',
    name: 'Launch Plan Generator',
    line: 'Produces a personalized 30-day week-by-week plan to get your budget running, including the environment exits as first-week tasks.',
    category: 'setup',
    prompt: { fileName: 'launch-plan-generator.prompt', body: launchPlanGenerator },
  },

  // ── Ongoing toolkit (use anytime after the setup is in place) ────────────
  {
    id: 'spending-regret-decoder',
    name: 'Spending Regret Decoder',
    line: 'Diagnoses a purchase you regret. Surfaces both the environmental trigger and the internal cause, then gives specific fixes.',
    category: 'ongoing',
    prompt: { fileName: 'spending-regret-decoder.prompt', body: spendingRegretDecoder },
  },
  {
    id: 'monthly-financial-force-review',
    name: 'Monthly Financial Force Review',
    line: 'A 15-minute monthly check-in that produces one headline number: did you move forward or backward this month?',
    category: 'ongoing',
    prompt: { fileName: 'monthly-financial-force-review.prompt', body: monthlyForceReview },
  },
  {
    id: 'plan-recalibrator',
    name: 'Plan Recalibrator',
    line: 'Adjusts your budget when something changes. Small tweaks or major life overhauls.',
    category: 'ongoing',
    prompt: { fileName: 'plan-recalibrator.prompt', body: planRecalibrator },
  },
  {
    id: 'goal-progress-checker',
    name: 'Goal Progress Checker',
    line: 'The math on where you stand, how fast you’re moving, and when you’ll get there.',
    category: 'ongoing',
    prompt: { fileName: 'goal-progress-checker.prompt', body: goalProgressChecker },
  },
]

// Convenience lookups for the page.
export const SETUP_PROMPTS = SYSTEM_PROMPTS.filter((p) => p.category === 'setup')
export const ONGOING_PROMPTS = SYSTEM_PROMPTS.filter((p) => p.category === 'ongoing')

/**
 * The setup phases. Each phase groups one or more tools under a named theme
 * with a description and a rough time estimate, mirroring the roadmap PDF
 * that ships with the system. The page iterates this array to render the
 * phase sections in order.
 */
export const SETUP_PHASES = [
  {
    num: 1,
    name: 'Orientation',
    description: 'Name where you’re going and map where you are.',
    time: '60–75 minutes',
    toolIds: ['goal-definer', 'financial-force-snapshot'],
  },
  {
    num: 2,
    name: 'Diagnosis',
    description: 'Understand the forces operating on your spending, both external and internal.',
    time: '60–75 minutes',
    toolIds: ['environment-audit', 'primary-causes-diagnostic'],
  },
  {
    num: 3,
    name: 'Design',
    description: 'Turn your snapshot, goals, and diagnoses into a working budget.',
    time: '20–30 minutes',
    toolIds: ['budget-builder'],
    hasWalkthrough: true,
  },
  {
    num: 4,
    name: 'Execution',
    description: 'Bridge the plan on paper to the plan in real life.',
    time: '15–20 minutes',
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
