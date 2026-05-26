/**
 * Investment Readiness Check — embedded prompt for /guides/start-investing.
 *
 * PLACEHOLDER. The actual prompt body needs to be written. Target length is
 * 400–800 words, single-purpose: walks the reader through their current
 * financial situation, surfaces whether the three pre-conditions for
 * investing are in place (consistent margin between income and spending,
 * high-interest debt mostly handled, basic emergency fund), then names what
 * to do next. For most readers this will route back to debt or saving first.
 */

export const INVESTMENT_READINESS_PROMPT = {
  fileName: 'investment-readiness-check.prompt',

  instruction:
    'Copy the prompt. Paste it into a fresh chat with any AI. It will walk you through your current financial situation and tell you whether investing is the right next move — or whether something else needs to come first.',

  body: `TODO: write the Investment Readiness Check prompt body here.

The prompt should:

1. Ask three things in sequence — does the reader consistently spend less than they earn each month, do they have high-interest debt (credit cards, personal loans) still outstanding, do they have a basic emergency fund (one month of expenses minimum).
2. Honest assessment: which of the three pre-conditions are solid, which are missing.
3. Name what to do next based on what's missing:
   - All three solid → ready to invest. Brief framing on what to consider first (employer match, retirement accounts, taxable, etc. — no specific product advice).
   - Margin missing → start with the budget. Point at the full system.
   - High-interest debt → handle that first. Point at Pillar 1 (Get Out of Debt).
   - No emergency fund → build that first. Point at Pillar 2 (Save for Something Big).
4. Close with a personalized recommendation about the full $97 system, anchored to where they actually are.

Voice: matches the Environment Audit. Honest about the limit — most readers will not be ready yet, and that's the useful finding.

Length: 400-800 words for the prompt itself.`,

  footnote: 'No account. No email. No catch.',
}
