import { useState } from 'react'
import { FREE_PROMPT } from '../config/prompt.js'
import { track } from '../lib/analytics.js'

/**
 * PromptWindow — the "copy the prompt" code window.
 *
 * Defaults to the Environment Audit (FREE_PROMPT) so the original usage on
 * the Audit page keeps working without changes. Pass `prompt={...}` to render
 * any other prompt object that exposes { fileName, body }.
 */
export default function PromptWindow({ prompt = FREE_PROMPT }) {
  const { fileName, body } = prompt
  const [copied, setCopied] = useState(false)

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(body)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = body
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      try { document.execCommand('copy') } catch { /* no-op */ }
      document.body.removeChild(ta)
    }
    setCopied(true)
    track('prompt_copied', { prompt: fileName })
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="prompt-window">
      <div className="prompt-bar">
        <div className="prompt-dots">
          <span /><span /><span />
        </div>
        <span className="prompt-filename">{fileName}</span>
        <button
          type="button"
          className={`prompt-copy${copied ? ' copied' : ''}`}
          onClick={copyPrompt}
          aria-label="Copy prompt to clipboard"
        >
          {copied ? 'Copied' : 'Copy prompt'}
        </button>
      </div>
      <pre className="prompt-body">{body}</pre>
    </div>
  )
}
