import './Footer.css'

const LINK_COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Features', href: '#features' },
      { label: 'Privacy', href: '#privacy' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Security', href: '#' },
    ],
  },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <a className="wordmark" href="#hero">
            Merry
          </a>
          <p className="site-footer__tagline">
            Speak naturally. Merry turns your voice into clean, ready-to-send
            text everywhere you type.
          </p>
          <p className="site-footer__availability">
            Available on Mac, Windows, iPhone, and Android
          </p>
        </div>

        <nav className="site-footer__columns" aria-label="Footer">
          {LINK_COLUMNS.map((column) => (
            <div className="site-footer__column" key={column.title}>
              <h4 className="site-footer__column-title">{column.title}</h4>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a className="site-footer__link" href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="container site-footer__bottom">
        <p>&copy; {year} Merry. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
