/**
 * Debt Strategy Picker — embedded prompt for /guides/get-out-of-debt.
 *
 * PLACEHOLDER. The actual prompt body needs to be written. Target length is
 * 400–800 words, single-purpose: walks the reader through naming each debt
 * (balance, rate, minimum) and a few psychology questions, then recommends a
 * method (snowball / avalanche / hybrid / consolidate), an attack order, and
 * a realistic timeline. Closes with a personalized recommendation about the
 * full system based on what they shared.
 */

export const DEBT_STRATEGY_PROMPT = {
  fileName: 'debt-audit.prompt',

  instruction:
    'Copy the prompt. Paste it into a fresh chat with any AI. It will ask you about your debts and the way you think about money, then recommend a payoff strategy that fits your situation.',

  body: `TODO: write the Debt Strategy Picker prompt body here.

The prompt should:

1. Ask the reader to list each debt (balance, interest rate, minimum payment).
2. Ask 2-3 questions about psychology and constraints — what's tried before, what motivates them, what they fear most about staying in debt.
3. Recommend a method (snowball, avalanche, hybrid, consolidation) with the reasoning.
4. Give an order to attack the debts.
5. Give a realistic timeline.
6. Close with a personalized recommendation about the full $97 system, anchored to what they actually shared.

Voice: matches the Environment Audit. Steady, patient guide. No exclamation points. No flattery. No em dashes inside the conversation.

Length: 400-800 words for the prompt itself.`,

  footnote: 'No account. No email. No catch.',
}
