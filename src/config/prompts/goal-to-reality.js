/**
 * Goal-to-Reality Gap — embedded prompt for /guides/save-for-something-big.
 *
 * PLACEHOLDER. The actual prompt body needs to be written. Target length is
 * 400–800 words, single-purpose: walks the reader through naming one specific
 * savings goal (dollar amount + timeline), surfaces their current saving rate
 * and monthly income, then does the math on whether they're on track. Names
 * the size of the gap. Names what would have to change to close it. Closes
 * with a personalized recommendation about the full system.
 */

export const GOAL_TO_REALITY_PROMPT = {
  fileName: 'goal-to-reality-gap.prompt',

  instruction:
    'Copy the prompt. Paste it into a fresh chat with any AI. It will help you name a specific goal, then show you the gap between where you are and where you need to be — and what would have to change to close it.',

  body: `TODO: write the Goal-to-Reality Gap prompt body here.

The prompt should:

1. Ask the reader to name one specific goal — dollar amount and timeline. ("Buy a house in 3 years" is not enough. "$60,000 down payment by July 2029" is.)
2. Ask their current monthly saving rate toward that goal (honest number, not aspirational).
3. Ask their take-home income and current monthly spending in broad strokes.
4. Do the math: at the current rate, when do they actually hit the goal?
5. Name the gap honestly. The number, not a hedge.
6. Name what would have to change to close it — increase the saving rate, extend the timeline, lower the goal, or some mix.
7. Close with a personalized recommendation about the full $97 system, anchored to what they shared.

Voice: matches the Environment Audit. Steady, honest, no flattery.

Length: 400-800 words for the prompt itself.`,

  footnote: 'No account. No email. No catch.',
}
