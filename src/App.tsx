import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import SocialProof from './sections/SocialProof'
import HowItWorks from './sections/HowItWorks'
import Tone from './sections/Tone'
import Capabilities from './sections/Capabilities'
import WhatsNew from './sections/WhatsNew'
import Privacy from './sections/Privacy'
import Testimonials from './sections/Testimonials'
import Faq from './sections/Faq'
import ClosingCTA from './sections/ClosingCTA'

/**
 * App shell for the Merry landing page.
 *
 * Renders the shared Header and Footer around the content sections
 * (component-per-section architecture under src/sections/). Each section
 * owns its anchor id, used by the header nav and footer links.
 */
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <HowItWorks />
        <Tone />
        <Capabilities />
        <WhatsNew />
        <Privacy />
        <Testimonials />
        <Faq />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
