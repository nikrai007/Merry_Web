import './ClosingCTA.css'

/**
 * Closing call-to-action section.
 */
function ClosingCTA() {
  return (
    <section id="closing-cta" aria-label="Get Merry" className="closing-cta">
      <div className="container closing-cta__inner">
        <h2 className="closing-cta__headline">
          You have a way with words. Now, two.
        </h2>
        <p className="closing-cta__body">
          Talk thoughts into writing with Merry Dictation and conversations into
          meeting notes with Merry Notetaker. Both are now included in one
          subscription.
        </p>
        <a className="btn btn-primary closing-cta__button" href="#hero">
          Get Merry free
        </a>
        <p className="closing-cta__availability">
          Available on Mac, Windows, iPhone, and Android
        </p>
      </div>
    </section>
  )
}

export default ClosingCTA
