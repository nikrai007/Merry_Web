import './Tone.css'
import { toneExamples } from '../data/content'

/**
 * Tone / style section.
 *
 * Renders the Formal / Casual / Very casual toggle structure with the
 * default tab (the first example) shown active. FEAT-003 wires up tab
 * switching; the examples come from content.ts so both share the copy.
 */
function Tone() {
  const [defaultTone, ...restTones] = toneExamples

  return (
    <section id="tone" aria-label="Tone control" className="tone">
      <div className="container">
        <div className="section-heading">
          <h2>Merry makes it easy</h2>
          <p className="section-heading__sub">
            Built around how you work, not how we think you should.
          </p>
        </div>

        <div className="tone-toggle" data-widget="tone-toggle">
          <div
            className="tone-toggle__tabs"
            role="tablist"
            aria-label="Writing tone"
          >
            {toneExamples.map((tone, i) => (
              <button
                key={tone.id}
                type="button"
                role="tab"
                id={`tone-tab-${tone.id}`}
                aria-selected={i === 0}
                aria-controls={`tone-panel-${tone.id}`}
                className={`tone-toggle__tab ${
                  i === 0 ? 'tone-toggle__tab--active' : ''
                }`}
                data-tone={tone.id}
              >
                {tone.label}
              </button>
            ))}
          </div>

          <div className="tone-toggle__panels">
            <div
              key={defaultTone.id}
              role="tabpanel"
              id={`tone-panel-${defaultTone.id}`}
              aria-labelledby={`tone-tab-${defaultTone.id}`}
              className="tone-toggle__panel tone-toggle__panel--active"
              data-tone={defaultTone.id}
            >
              <p className="tone-toggle__example">{defaultTone.text}</p>
            </div>

            {/* Hidden panels for the remaining tones; FEAT-003 toggles them. */}
            {restTones.map((tone) => (
              <div
                key={tone.id}
                role="tabpanel"
                id={`tone-panel-${tone.id}`}
                aria-labelledby={`tone-tab-${tone.id}`}
                className="tone-toggle__panel"
                data-tone={tone.id}
                hidden
              >
                <p className="tone-toggle__example">{tone.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tone
