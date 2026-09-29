import './HowItWorks.css'
import { cleanupTranscript, cleanupLabels } from '../data/content'
import CleanupDemo from '../components/CleanupDemo'

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
 * Three feature cards plus the live "Cleaning up…" demo (CleanupDemo),
 * which progressively transforms the raw transcript into the polished
 * version and surfaces Filler / Correction / Repetition tags. Both the
 * cards and the demo draw copy from content.ts.
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

        <CleanupDemo tokens={cleanupTranscript} labels={cleanupLabels} />
      </div>
    </section>
  )
}

export default HowItWorks
