import './SocialProof.css'
import { placeholderLogos } from '../data/content'

/**
 * Social proof section.
 *
 * The comparison tracks (Keyboard 45 wpm vs Merry 220 wpm) are rendered
 * as static, labelled bars here. FEAT-003 animates the typing/scrolling.
 * The company "logos" are styled text pills — deliberately generic, not
 * real third-party trademarks.
 */
function SocialProof() {
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
          className="wpm-compare"
          aria-label="Words-per-minute comparison"
        >
          <div className="wpm-track wpm-track--keyboard">
            <div className="wpm-track__head">
              <span className="wpm-track__name">Keyboard</span>
              <span className="wpm-track__value">45 wpm</span>
            </div>
            <div className="wpm-track__bar">
              <span
                className="wpm-track__fill wpm-track__fill--keyboard"
                style={{ width: '20%' }}
              />
            </div>
          </div>

          <div className="wpm-track wpm-track--merry">
            <div className="wpm-track__head">
              <span className="wpm-track__name">Merry</span>
              <span className="wpm-track__value">220 wpm</span>
            </div>
            <div className="wpm-track__bar">
              <span
                className="wpm-track__fill wpm-track__fill--merry"
                style={{ width: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
