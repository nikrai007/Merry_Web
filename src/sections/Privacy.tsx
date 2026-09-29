import './Privacy.css'

const CERTIFICATIONS = ['SOC 2 Type II', 'HIPAA', 'ISO 27001']

/**
 * Privacy section.
 *
 * Certification badges are styled text pills (no third-party logos).
 */
function Privacy() {
  return (
    <section id="privacy" aria-label="Privacy" className="privacy">
      <div className="container privacy__inner">
        <h2 className="privacy__headline">Your voice stays yours.</h2>
        <p className="privacy__body">
          Your data is never sold. You choose whether data is used to help
          improve Merry. SOC 2 Type II, HIPAA and ISO 27001 certified.
        </p>
        <ul className="privacy__badges" aria-label="Certifications">
          {CERTIFICATIONS.map((cert) => (
            <li key={cert} className="privacy__badge">
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Privacy
