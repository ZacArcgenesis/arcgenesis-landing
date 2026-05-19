import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import Teach from './sections/Teach.jsx'
import FreePrompt from './sections/FreePrompt.jsx'
import Setup from './sections/Setup.jsx'
import Toolkit from './sections/Toolkit.jsx'
import Activation from './sections/Activation.jsx'
import Pricing from './sections/Pricing.jsx'
import PriceMath from './sections/PriceMath.jsx'
import Faq from './sections/Faq.jsx'
import FinalCta from './sections/FinalCta.jsx'
import Footer from './sections/Footer.jsx'
import useScrollReveal from './hooks/useScrollReveal.js'

/**
 * App — the single long-form sales page.
 *
 * Section order is the funnel: teach → let them try it → show the system →
 * frame it → handle objections → ask. Each section pulls its own copy from
 * src/config/. To change wording, edit config — not these components.
 */
export default function App() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Teach />
        <FreePrompt />
        <Setup />
        <Toolkit />
        <Activation />
        <Pricing />
        <PriceMath />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
