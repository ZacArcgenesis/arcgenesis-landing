/**
 * AuditSampleDoc — the approved sample-output mockup for the FreePrompt
 * section: a saved environment-audit.md document card. APPROVED FINAL
 * DESIGN (master SVG: images/freeprompt-sample-doc-mockup.svg). Do not
 * redesign or reword; edit only on explicit instruction.
 *
 * Production adaptations from the master:
 * - Background rect + grid-line group stripped; the FreePrompt dark band
 *   and its .grid-texture provide that backdrop.
 * - viewBox tightened to the document card (plus a small margin) so the
 *   card fills the component instead of floating in dead space.
 * - Responsive: width 100%, height auto, viewBox preserved.
 */
export default function AuditSampleDoc() {
  return (
    <svg
      className="audit-sample-doc"
      viewBox="62 34 576 512"
      role="img"
      aria-label="Sample Environment Audit output: a saved document named environment-audit.md with three sections. Your Environment at a Glance names the biggest pressures on your spending. Your Spending Loop shows how the want, the saved cards, and the it's-only-thirty-dollars feeling chain together. Your 7-Day Environment Reset lists one concrete change per day."
      fontFamily="inherit"
    >
      {/* White document card */}
      <rect x="70" y="42" width="560" height="496" rx="12" fill="#ffffff" />

      {/* Filename + divider */}
      <text x="106" y="88" fill="#5a6170" fontSize="13" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace">environment-audit.md</text>
      <line x1="106" y1="102" x2="594" y2="102" stroke="#e3e6ea" strokeWidth="1" />

      {/* Section 1: Glance */}
      <text x="106" y="138" fill="#20232a" fontSize="16" fontWeight="700">Your Environment at a Glance</text>
      <g fill="#3c424e" fontSize="14.5">
        <text x="106" y="162">The biggest pressure on your spending is one-click checkout</text>
        <text x="106" y="184">across 8+ retailers, late-evening DoorDash use, and lifestyle</text>
        <text x="106" y="206">accounts on Instagram driving "I want that" reactions.</text>
      </g>

      {/* Section 2: Spending Loop */}
      <text x="106" y="248" fill="#20232a" fontSize="16" fontWeight="700">Your Spending Loop</text>
      <g fill="#3c424e" fontSize="14.5">
        <text x="106" y="272">Instagram creates the want, your saved cards make acting on</text>
        <text x="106" y="294">it instant, and "it's only $30" makes it feel harmless. By the</text>
        <text x="106" y="316">time you're checking out, the decision happened three steps ago.</text>
      </g>

      {/* Section 3: 7-Day Reset */}
      <text x="106" y="358" fill="#20232a" fontSize="16" fontWeight="700">Your 7-Day Environment Reset</text>
      <g fill="#3c424e" fontSize="14.5">
        <text x="106" y="384"><tspan fontWeight="700" fill="#20232a">Day 1:</tspan> Remove your saved card from every retailer.</text>
        <text x="106" y="412"><tspan fontWeight="700" fill="#20232a">Day 2:</tspan> Move DoorDash off your home screen and into a folder.</text>
        <text x="106" y="440"><tspan fontWeight="700" fill="#20232a">Day 3:</tspan> Unsubscribe from every promotional email. Twenty</text>
        <text x="106" y="462">minutes, all of them.</text>
      </g>
      <text x="106" y="498" fill="#9aa1ad" fontSize="14" fontStyle="italic">...continues through Day 7</text>
    </svg>
  )
}
