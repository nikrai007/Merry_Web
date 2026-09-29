import './HowItWorks.css'
import { cleanupTranscript, cleanupLabels } from '../data/content'

const CARDS = [
  {
    title: 'Speak naturally',
    body: 'Ramble, pause, or change your mind mid-sentence. Merry understands what you mean, not just what you say.',
  },
  {
    title: 'Merry edits as you speak',
    body: 'Text that reads like you wrote it, not like you spoke it. Merry automatically removes filler words, adds punctuation, and formats your writing.',
  },
  {
    title: 'Use it anywhere',
    body: 'Merry works anywhere you can type, with no plugins required. Syncs seamlessly across Mac, Windows, iPhone, and Android.',
  },
]

/**
 * "How it works" section.
 *
 * Three feature cards plus a structural container for the live
 * "Cleaning up…" demo. FEAT-003 animates the demo (token removal +
 * labelled tags); here it renders the default/static state from the
 * shared transcript in content.ts.
 */
function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-label="How it works"
      className="how-it-works"
    >
      <div className="container">
        <div className="section-heading">
          <h2>How it works</h2>
          <p className="section-heading__sub">
            Speak at the speed you think, in every app, on every device.
          </p>
        </div>

        <ul className="how-cards">
          {CARDS.map((card, i) => (
            <li key={card.title} className="how-card">
              <span className="how-card__step" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="how-card__title">{card.title}</h3>
              <p className="how-card__body">{card.body}</p>
            </li>
          ))}
        </ul>

        <div
          className="cleanup-demo"
          data-demo="cleaning-up"
          aria-label="Merry cleaning up a transcript"
        >
          <div className="cleanup-demo__head">
            <span className="cleanup-demo__status">Cleaning up…</span>
            <ul className="cleanup-demo__legend">
              {cleanupLabels.map((item) => (
                <li
                  key={item.kind}
                  className={`cleanup-tag cleanup-tag--${item.kind}`}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
          <p className="cleanup-demo__transcript">
            {cleanupTranscript.map((token, i) => (
              <span
                key={i}
                className={`cleanup-token cleanup-token--${token.kind}`}
                data-kind={token.kind}
              >
                {token.text}{' '}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
