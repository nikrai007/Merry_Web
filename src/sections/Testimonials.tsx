import './Testimonials.css'
import { testimonials } from '../data/content'

/**
 * Testimonials section.
 *
 * NOTE: All quotes and names are illustrative placeholders using clearly
 * fictional people (see content.ts). They are NOT real endorsements.
 */
function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="Testimonials"
      className="testimonials"
    >
      <div className="container">
        <div className="section-heading">
          <h2>Early access, real results</h2>
          <p className="section-heading__sub">
            From the first people to use it.
          </p>
        </div>

        <ul className="testimonial-grid">
          {testimonials.map((t) => (
            <li key={t.name} className="testimonial-card">
              <blockquote className="testimonial-card__quote">
                “{t.quote}”
              </blockquote>
              <figcaption className="testimonial-card__author">
                <span className="testimonial-card__avatar" aria-hidden="true">
                  {t.initials}
                </span>
                <span className="testimonial-card__meta">
                  <span className="testimonial-card__name">{t.name}</span>
                  <span className="testimonial-card__role">{t.role}</span>
                </span>
              </figcaption>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Testimonials
