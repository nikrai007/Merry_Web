import './Capabilities.css'

interface Capability {
  title: string
  body: string
  /** A small CSS-only mock visual variant (no copyrighted imagery). */
  mock: 'languages' | 'vocabulary' | 'snippets' | 'style'
}

const CAPABILITIES: Capability[] = [
  {
    title: '100+ Languages',
    body: "Merry automatically detects and transcribes the language you're speaking, so you can switch between languages naturally.",
    mock: 'languages',
  },
  {
    title: 'Merry learns your vocabulary',
    body: 'Merry learns your unique words and names automatically, or lets you add them yourself. From client names to company jargon, it gets the details right.',
    mock: 'vocabulary',
  },
  {
    title: 'Save your most used text',
    body: 'Create snippets for the things you type all the time, like emails, links, addresses, and bios. Speak the shortcut, and Merry expands it instantly.',
    mock: 'snippets',
  },
  {
    title: 'Make Merry sound like you',
    body: 'Merry adapts to how you write in different apps. Set a different style for messages, work chats, emails, and more.',
    mock: 'style',
  },
]

/** CSS-styled illustrative mock card for each capability (no real imagery). */
function CapabilityMock({ mock }: { mock: Capability['mock'] }) {
  switch (mock) {
    case 'languages':
      return (
        <div className="cap-mock cap-mock--languages" aria-hidden="true">
          {['English', 'Español', '日本語', 'Français', 'हिन्दी', 'Deutsch'].map(
            (lang) => (
              <span key={lang} className="cap-mock__pill">
                {lang}
              </span>
            ),
          )}
        </div>
      )
    case 'vocabulary':
      return (
        <div className="cap-mock cap-mock--vocabulary" aria-hidden="true">
          {['Cheyene', 'Kubernetes', 'Everpeak', 'onboarding'].map((word) => (
            <span key={word} className="cap-mock__chip">
              {word}
            </span>
          ))}
        </div>
      )
    case 'snippets':
      return (
        <div className="cap-mock cap-mock--snippets" aria-hidden="true">
          {[
            { key: '/sig', value: 'Best, Alex' },
            { key: '/cal', value: 'merry.app/book' },
            { key: '/addr', value: '42 Harbor St' },
          ].map((row) => (
            <div key={row.key} className="cap-mock__snippet">
              <span className="cap-mock__snippet-key">{row.key}</span>
              <span className="cap-mock__snippet-value">{row.value}</span>
            </div>
          ))}
        </div>
      )
    case 'style':
    default:
      return (
        <div className="cap-mock cap-mock--style" aria-hidden="true">
          {[
            { app: 'Messages', tone: 'casual' },
            { app: 'Work chat', tone: 'friendly' },
            { app: 'Email', tone: 'formal' },
          ].map((row) => (
            <div key={row.app} className="cap-mock__style-row">
              <span className="cap-mock__style-app">{row.app}</span>
              <span className="cap-mock__style-tone">{row.tone}</span>
            </div>
          ))}
        </div>
      )
  }
}

/**
 * Capabilities / features section (id="features").
 *
 * Four feature blocks with alternating image/text layout. Visuals are
 * CSS-only mock cards — no copyrighted or third-party imagery.
 */
function Capabilities() {
  return (
    <section id="features" aria-label="Features" className="capabilities">
      <div className="container">
        <div className="section-heading">
          <h2>Everything Merry can do</h2>
          <p className="section-heading__sub">
            A voice-to-text AI that adapts to your words, your languages, and
            your style.
          </p>
        </div>

        <div className="capability-list">
          {CAPABILITIES.map((cap, i) => (
            <article
              key={cap.title}
              className={`capability ${
                i % 2 === 1 ? 'capability--reverse' : ''
              }`}
            >
              <div className="capability__copy">
                <h3 className="capability__title">{cap.title}</h3>
                <p className="capability__body">{cap.body}</p>
              </div>
              <div className="capability__visual">
                <CapabilityMock mock={cap.mock} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Capabilities
