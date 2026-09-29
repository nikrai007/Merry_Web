import Header from './components/Header'
import Footer from './components/Footer'

/**
 * App shell for the Merry landing page.
 *
 * Renders the shared Header and Footer around a set of section stubs.
 * Each <section> is filled in by a later feature (component-per-section
 * architecture under src/sections/). The ids are anchor targets used by
 * the header nav and footer links.
 */
function App() {
  return (
    <>
      <Header />
      <main>
        <section id="hero" aria-label="Introduction" />
        <section id="social-proof" aria-label="Social proof" />
        <section id="how-it-works" aria-label="How it works" />
        <section id="tone" aria-label="Tone control" />
        <section id="features" aria-label="Features" />
        <section id="privacy" aria-label="Privacy" />
        <section id="testimonials" aria-label="Testimonials" />
        <section id="faq" aria-label="Frequently asked questions" />
        <section id="closing-cta" aria-label="Get Merry" />
      </main>
      <Footer />
    </>
  )
}

export default App
