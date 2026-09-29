import './Hero.css'
import { heroExample } from '../data/content'

/**
 * Hero section.
 *
 * Static layout only — the messy→clean reveal animation is added in
 * FEAT-003. The before/after example strings come from content.ts so the
 * animated version reuses the exact same copy.
 */
function Hero() {
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

        <div className="hero__demo" aria-label="Dictation example">
          <div className="dictation-card dictation-card--messy">
            <span className="dictation-card__label">You said</span>
            <p className="dictation-card__text">{heroExample.messy}</p>
          </div>
          <div className="dictation-card__arrow" aria-hidden="true">
            ↓
          </div>
          <div className="dictation-card dictation-card--clean">
            <span className="dictation-card__label dictation-card__label--clean">
              Merry wrote
            </span>
            <p className="dictation-card__text">{heroExample.clean}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
