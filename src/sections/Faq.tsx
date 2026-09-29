import './Faq.css'

/**
 * FAQ section — placeholder slot.
 *
 * FEAT-003 owns the interactive accordion and will render the questions
 * from content.ts (faqItems) here. FEAT-002 only reserves the section
 * with its heading so the anchor (#faq) and page rhythm are intact.
 */
function Faq() {
  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="faq"
    >
      <div className="container">
        <div className="section-heading">
          <h2>Frequently asked questions</h2>
          <p className="section-heading__sub">
            Everything you need to know about Merry.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Faq
