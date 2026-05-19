import { useState } from 'react'
import { FREE_PROMPT } from '../config/prompt.js'

/**
 * PromptWindow — the "copy the prompt" code window.
 *
 * Renders the free prompt from config/prompt.js with a working copy button.
 * This is the page's "experience the product before you buy" moment.
 */
export default function PromptWindow() {
  const [copied, setCopied] = useState(false)

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(FREE_PROMPT.body)
    } catch {
      // Fallback for older / non-secure contexts.
      const ta = document.createElement('textarea')
      ta.value = FREE_PROMPT.body
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      try { document.execCommand('copy') } catch { /* no-op */ }
      document.body.removeChild(ta)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="prompt-window">
      <div className="prompt-bar">
        <div className="prompt-dots">
          <span /><span /><span />
        </div>
        <span className="prompt-filename">{FREE_PROMPT.fileName}</span>
        <button
          type="button"
          className={`prompt-copy${copied ? ' copied' : ''}`}
          onClick={copyPrompt}
          aria-label="Copy prompt to clipboard"
        >
          {copied ? 'Copied' : 'Copy prompt'}
        </button>
      </div>
      <pre className="prompt-body">{FREE_PROMPT.body}</pre>
    </div>
  )
}
