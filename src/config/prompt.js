/**
 * prompt.js — the free prompt the visitor can copy and run.
 *
 * The body is the real Environment Audit lead-magnet prompt, imported raw
 * from ./prompts/environment-audit-lead-magnet.md (kept in sync with the
 * master copy in the repo's "system prompts" folder). The markdown title
 * line is stripped so the prompt window starts at "You are the…" — the
 * "(Lead Magnet)" label is internal naming the visitor shouldn't see.
 *
 * This is deliberately a different version from the system Environment
 * Audit on the buyer page: the lead magnet's closing recommends the full
 * system, the system version references the other tools.
 */

import leadMagnetRaw from './prompts/environment-audit-lead-magnet.md?raw'

export const FREE_PROMPT = {
  // Shown as the "filename" on the code-window chrome.
  fileName: 'environment-audit.prompt',

  // Short instruction shown above the prompt window.
  instruction:
    'Copy the prompt. Paste it into a fresh chat with any AI. It will walk you through your specific situation in about fifteen minutes.',

  // The full Environment Audit prompt, minus the markdown title line.
  body: leadMagnetRaw.replace(/^#[^\n]*\n+/, ''),

  // Reassurance line under the window.
  footnote: 'No account. No email. No catch.',
}
