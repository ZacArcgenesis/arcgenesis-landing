import { useEffect } from 'react'

/**
 * useScrollReveal — fades + lifts each section's content as it scrolls into view.
 *
 * Progressive enhancement: the hidden-start state in CSS only applies once this
 * hook adds `.reveal-ready` to <html>. So if JS never runs — or the visitor
 * prefers reduced motion — the page stays fully visible with no animation.
 *
 * Targets every `.container` (one per section). One-shot: each element is
 * unobserved after it reveals.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    // Reduced motion or no observer support → leave everything visible, do nothing.
    if (prefersReduced || !('IntersectionObserver' in window)) return

    const targets = document.querySelectorAll('.container')
    if (!targets.length) return

    // Arm the hidden-start state now that we know we can animate.
    document.documentElement.classList.add('reveal-ready')

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    )

    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
