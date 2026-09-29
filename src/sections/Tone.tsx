import { useRef, useState } from 'react'
import './Tone.css'
import { toneExamples } from '../data/content'

/**
 * Tone / style section.
 *
 * Formal / Casual / Very casual clickable tabs that switch the displayed
 * example text. Implements the WAI-ARIA tabs pattern: role=tablist /
 * role=tab with aria-selected, and a single role=tabpanel whose content
 * changes. Arrow keys move between tabs (roving tabindex); the example
 * cross-fades on change.
 */
function Tone() {
  const [activeIndex, setActiveIndex] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const focusTab = (index: number) => {
    const clamped = (index + toneExamples.length) % toneExamples.length
    setActiveIndex(clamped)
    tabRefs.current[clamped]?.focus()
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault()
        focusTab(activeIndex + 1)
        break
      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault()
        focusTab(activeIndex - 1)
        break
      case 'Home':
        event.preventDefault()
        focusTab(0)
        break
      case 'End':
        event.preventDefault()
        focusTab(toneExamples.length - 1)
        break
    }
  }

  const active = toneExamples[activeIndex]

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
            {toneExamples.map((tone, i) => {
              const selected = i === activeIndex
              return (
                <button
                  key={tone.id}
                  ref={(el) => {
                    tabRefs.current[i] = el
                  }}
                  type="button"
                  role="tab"
                  id={`tone-tab-${tone.id}`}
                  aria-selected={selected}
                  aria-controls={`tone-panel-${tone.id}`}
                  tabIndex={selected ? 0 : -1}
                  className={`tone-toggle__tab ${
                    selected ? 'tone-toggle__tab--active' : ''
                  }`}
                  data-tone={tone.id}
                  onClick={() => setActiveIndex(i)}
                  onKeyDown={onKeyDown}
                >
                  {tone.label}
                </button>
              )
            })}
          </div>

          <div className="tone-toggle__panels">
            <div
              key={active.id}
              role="tabpanel"
              id={`tone-panel-${active.id}`}
              aria-labelledby={`tone-tab-${active.id}`}
              className="tone-toggle__panel tone-toggle__panel--active"
              data-tone={active.id}
              tabIndex={0}
            >
              <p className="tone-toggle__example">{active.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tone
