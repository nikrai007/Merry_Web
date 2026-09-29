import { useEffect, useState } from 'react'
import './Hero.css'
import { heroExample } from '../data/content'
import { useInView } from '../hooks/useInView'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

/**
 * Hero section.
 *
 * Shows the messy spoken input first, then reveals the polished Merry
 * output with a "polishing" state that resolves into the clean card.
 * The reveal triggers when the demo scrolls into view. Under
 * prefers-reduced-motion the final (revealed) state is shown immediately
 * with no motion.
 */
function Hero() {
  const prefersReduced = usePrefersReducedMotion()
  const [demoRef, inView] = useInView<HTMLDivElement>({ threshold: 0.4 })

  // `revealed` = the clean card is fully shown. Reduced motion shows it at once.
  const [phase, setPhase] = useState<'before' | 'polishing' | 'revealed'>(
    prefersReduced ? 'revealed' : 'before',
  )

  useEffect(() => {
    if (prefersReduced) {
      setPhase('revealed')
      return
    }
    if (!inView) return

    setPhase('polishing')
    const revealTimer = window.setTimeout(() => setPhase('revealed'), 1100)
    return () => window.clearTimeout(revealTimer)
  }, [inView, prefersReduced])

  const isPolishing = phase === 'polishing'
  const isRevealed = phase === 'revealed'

  return (
    <section id="hero" aria-label="Introduction" className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow">MERRY Dictation</p>
          <h1 className="hero__headline">Don't type, just speak.</h1>
          <p className="hero__subhead">
            The voice-to-text AI that turns speech into clear, polished writing
            in every app.
          </p>
          <p className="hero__availability">
            Available on Mac, Windows, iPhone, and Android
          </p>
          <div className="hero__actions">
            <a className="btn btn-primary hero__cta" href="#closing-cta">
              Get Merry free
            </a>
            <a className="btn btn-ghost hero__cta" href="#how-it-works">
              See how it works
            </a>
          </div>
        </div>

        <div
          className="hero__demo"
          data-phase={phase}
          ref={demoRef}
          aria-label="Dictation example"
        >
          <div className="dictation-card dictation-card--messy">
            <span className="dictation-card__label">You said</span>
            <p className="dictation-card__text">{heroExample.messy}</p>
          </div>
          <div
            className={`dictation-card__arrow ${
              isPolishing ? 'dictation-card__arrow--active' : ''
            }`}
            aria-hidden="true"
          >
            ↓
          </div>
          <div
            className={`dictation-card dictation-card--clean ${
              isRevealed ? 'dictation-card--revealed' : ''
            }`}
          >
            <span className="dictation-card__label dictation-card__label--clean">
              {isPolishing ? 'Polishing…' : 'Merry wrote'}
            </span>
            <p className="dictation-card__text">{heroExample.clean}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
