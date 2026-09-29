import { useState } from 'react'
import './Faq.css'
import { faqItems } from '../data/content'

/**
 * FAQ section — accessible accordion.
 *
 * Each item is a header <button> (aria-expanded, aria-controls) that
 * toggles a region (role=region, aria-labelledby) holding the answer.
 * Independent toggles: multiple items can be open at once. The button is
 * natively keyboard operable (Enter/Space) and focusable.
 */
function Faq() {
  const [open, setOpen] = useState<Record<number, boolean>>({})

  const toggle = (index: number) =>
    setOpen((prev) => ({ ...prev, [index]: !prev[index] }))

  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="faq"
    >
      <div className="container">
        <div className="section-heading">
          <h2>FAQs</h2>
          <p className="section-heading__sub">Good questions.</p>
        </div>

        <ul className="faq__list">
          {faqItems.map((item, i) => {
            const isOpen = Boolean(open[i])
            const buttonId = `faq-q-${i}`
            const panelId = `faq-a-${i}`
            return (
              <li key={item.question} className="faq__item">
                <h3 className="faq__question">
                  <button
                    type="button"
                    id={buttonId}
                    className="faq__trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(i)}
                  >
                    <span className="faq__question-text">{item.question}</span>
                    <span
                      className={`faq__icon ${isOpen ? 'faq__icon--open' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`faq__panel ${isOpen ? 'faq__panel--open' : ''}`}
                  hidden={!isOpen}
                >
                  <p className="faq__answer">{item.answer}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Faq
