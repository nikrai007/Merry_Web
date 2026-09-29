import './SocialProof.css'
import { placeholderLogos } from '../data/content'
import { useInView } from '../hooks/useInView'

/**
 * Social proof section.
 *
 * The comparison tracks (Keyboard 45 wpm vs Merry 220 wpm) animate two
 * "typing" bars once the section scrolls into view: the Merry track fills
 * roughly 4x faster than the keyboard track, mirroring the 45 → 220 wpm
 * claim. The CSS keyframes are paused under prefers-reduced-motion, where
 * the bars render at their final width instead. The company "logos" are
 * styled text pills — deliberately generic, not real third-party marks.
 */
function SocialProof() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.35 })

  return (
    <section
      id="social-proof"
      aria-label="Social proof"
      className="social-proof"
    >
      <div className="container">
        <p className="social-proof__lead">Used by professionals at</p>
        <ul className="social-proof__logos" aria-label="Companies using Merry">
          {placeholderLogos.map((name) => (
            <li key={name} className="social-proof__logo">
              {name}
            </li>
          ))}
        </ul>

        <div className="social-proof__pitch">
          <h2 className="social-proof__headline">4x faster than typing</h2>
          <p className="social-proof__subcopy">
            Merry lets you create, code, message, and write at the speed of
            thought, 4x faster than your keyboard.
          </p>
        </div>

        <div
          className={`wpm-compare ${inView ? 'wpm-compare--run' : ''}`}
          ref={ref}
          aria-label="Words-per-minute comparison: keyboard 45, Merry 220"
        >
          <div className="wpm-track wpm-track--keyboard">
            <div className="wpm-track__head">
              <span className="wpm-track__name">Keyboard</span>
              <span className="wpm-track__value">45 wpm</span>
            </div>
            <div className="wpm-track__bar">
              <span className="wpm-track__fill wpm-track__fill--keyboard" />
            </div>
          </div>

          <div className="wpm-track wpm-track--merry">
            <div className="wpm-track__head">
              <span className="wpm-track__name">Merry</span>
              <span className="wpm-track__value">220 wpm</span>
            </div>
            <div className="wpm-track__bar">
              <span className="wpm-track__fill wpm-track__fill--merry" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
