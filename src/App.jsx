import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import Teach from './sections/Teach.jsx'
import Guide from './sections/Guide.jsx'
import FreePrompt from './sections/FreePrompt.jsx'
import Plan from './sections/Plan.jsx'
import Setup from './sections/Setup.jsx'
import Toolkit from './sections/Toolkit.jsx'
import Activation from './sections/Activation.jsx'
import ForWho from './sections/ForWho.jsx'
import Pricing from './sections/Pricing.jsx'
import PriceMath from './sections/PriceMath.jsx'
import Faq from './sections/Faq.jsx'
import FinalCta from './sections/FinalCta.jsx'
import Footer from './sections/Footer.jsx'
import useScrollReveal from './hooks/useScrollReveal.js'

/**
 * App — the single long-form sales page.
 *
 * Section order IS the StoryBrand arc: hero's goal → villain (Teach, ending
 * on the exoneration) → guide (Zac) → free proof → 3-step plan → what you
 * get → emotional peak → who it's for → the ask. Don't reorder casually.
 * Each section pulls its own copy from src/config/.
 *
 * Band rhythm (keep it when inserting sections):
 * dark → gray → white → dark → gray → white → dark → gray → white → dark →
 * white → gray → dark → footer.
 */
export default function App() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Teach />
        <Guide />
        <FreePrompt />
        <Plan />
        <Setup />
        <Toolkit />
        <Activation />
        <ForWho />
        <Pricing />
        <PriceMath />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
