/**
 * MonthChart — the approved "month, twice" two-panel chart for the Teach
 * section. APPROVED FINAL DESIGN (master SVG: images/teach-visual-1C-goal-
 * stack.svg). Do not redesign or reword; edit only on explicit instruction.
 *
 * Production adaptations from the master (per Update Brief 2):
 * - Background rect + grid-line group stripped; the section band provides
 *   the backdrop and the component stays transparent.
 * - Teach sits on the LIGHT gray band, so the master's dark-band neutrals
 *   are inverted: white elements render as ink (#20232a) and the two
 *   grays swap (#8a93a3 <-> #5a6170) to preserve their prominence
 *   hierarchy. Cyan (#37d3f1) and the red empty-zone (#e0535f) are kept
 *   exactly as designed.
 * - Text uses classes (.mc-title/.mc-body/.mc-em/.mc-label) sized in CSS
 *   so labels can scale up on narrow viewports without touching geometry.
 * - Responsive: width 100%, height auto, viewBox preserved.
 */

// Light-band palette (inverted neutrals; see note above).
const INK = '#20232a'    // was #f8f9fa on the dark master
const GRAY = '#5a6170'   // was #8a93a3 (titles, axis labels)
const SOFT = '#8a93a3'   // was #5a6170 (baselines, panel-A line, ghosts)
const CYAN = '#37d3f1'
const RED = '#e0535f'

export default function MonthChart() {
  return (
    <svg
      className="month-chart"
      viewBox="0 0 800 600"
      role="img"
      aria-label="Two charts comparing a month of spending. Most months, the money runs out three days before the end of the month. With the system, the same paycheck ends the month with money left over, which stacks up month after month toward your goal."
      fontFamily="inherit"
    >
      {/* ── Panel A: most months ─────────────────────────────────── */}
      <g transform="translate(50,50)">
        <text x="0" y="0" fill={GRAY} className="mc-title" fontWeight="700" letterSpacing="2">MOST MONTHS</text>

        <line x1="0" y1="180" x2="500" y2="180" stroke={SOFT} strokeWidth="1.5" strokeDasharray="6 6" />
        <text x="-14" y="186" fill={SOFT} className="mc-body" textAnchor="end">$0</text>

        <circle cx="0" cy="30" r="6" fill={INK} />
        <text x="16" y="26" fill={INK} className="mc-body">payday</text>

        {/* Empty zone: day 27 to 30 */}
        <rect x="448" y="60" width="52" height="120" fill={RED} opacity="0.10" />
        <line x1="448" y1="60" x2="448" y2="180" stroke={RED} strokeWidth="1.5" strokeDasharray="5 5" opacity="0.6" />

        <path
          d="M0 30 L60 56 L120 74 L185 100 L245 120 L305 140 L375 160 L448 180 L500 180"
          fill="none" stroke={SOFT} strokeWidth="5" strokeLinejoin="round" strokeLinecap="round"
        />

        <text x="474" y="96" fill={RED} className="mc-em" fontWeight="700" textAnchor="middle">3 days</text>
        <text x="474" y="96" dy="22" fill={RED} className="mc-em" fontWeight="700" textAnchor="middle">on empty</text>

        <text x="0" y="214" fill={GRAY} className="mc-label">day 1</text>
        <text x="500" y="214" fill={GRAY} className="mc-label" textAnchor="end">day 30</text>

        {/* Ghost block: nothing to stack this month */}
        <rect x="585" y="146" width="70" height="34" rx="3" fill="none" stroke={SOFT} strokeWidth="1.5" strokeDasharray="5 5" opacity="0.5" />
        <line x1="550" y1="180" x2="690" y2="180" stroke={SOFT} strokeWidth="2" opacity="0.5" />
        <text x="620" y="214" fill={SOFT} className="mc-label" textAnchor="middle">nothing to stack</text>
      </g>

      {/* ── Panel B: with the system ─────────────────────────────── */}
      <g transform="translate(50,340)">
        <text x="0" y="0" fill={CYAN} className="mc-title" fontWeight="700" letterSpacing="2">WITH THE SYSTEM</text>

        <line x1="0" y1="180" x2="500" y2="180" stroke={SOFT} strokeWidth="1.5" strokeDasharray="6 6" />
        <text x="-14" y="186" fill={SOFT} className="mc-body" textAnchor="end">$0</text>

        <circle cx="0" cy="30" r="6" fill={INK} />
        <text x="16" y="26" fill={INK} className="mc-body">same paycheck</text>

        <path
          d="M0 30 L65 54 L130 72 L195 92 L260 108 L325 124 L415 136 L500 146"
          fill="none" stroke={CYAN} strokeWidth="5" strokeLinejoin="round" strokeLinecap="round"
        />

        {/* Leftover block at month end */}
        <rect x="466" y="146" width="34" height="34" rx="3" fill={CYAN} opacity="0.30" />
        <line x1="500" y1="146" x2="500" y2="180" stroke={CYAN} strokeWidth="4" />
        <text x="456" y="168" fill={CYAN} className="mc-body" fontWeight="600" textAnchor="end">left over</text>

        <text x="0" y="214" fill={GRAY} className="mc-label">day 1</text>
        <text x="500" y="214" fill={GRAY} className="mc-label" textAnchor="end">day 30</text>

        {/* Arrow from leftover to the stack */}
        <path d="M510 163 C530 163 532 163 540 163" fill="none" stroke={CYAN} strokeWidth="3" strokeLinecap="round" />
        <path d="M540 155 L554 163 L540 171 Z" fill={CYAN} />

        {/* The goal stack, to the side */}
        <line x1="550" y1="180" x2="690" y2="180" stroke={SOFT} strokeWidth="2" />

        <rect x="585" y="146" width="70" height="34" rx="3" fill={CYAN} opacity="0.35" />
        <rect x="585" y="112" width="70" height="34" rx="3" fill={CYAN} opacity="0.55" />
        {/* This month, bright */}
        <rect x="585" y="78" width="70" height="34" rx="3" fill={CYAN} />

        {/* Goal line, a bit higher */}
        <line x1="552" y1="26" x2="688" y2="26" stroke={INK} strokeWidth="2" strokeDasharray="7 6" />
        <text x="620" y="12" fill={INK} className="mc-em" fontWeight="600" textAnchor="middle">your goal</text>

        <text x="620" y="214" fill={GRAY} className="mc-label" textAnchor="middle">month after month</text>
      </g>
    </svg>
  )
}
