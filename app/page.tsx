import { Hero } from '@/components/sections/Hero'
import { TechMarquee } from '@/components/sections/TechMarquee'
import { MetricsGrid } from '@/components/sections/MetricsGrid'
import { Projects } from '@/components/sections/Projects'
import { Services } from '@/components/sections/Services'
import { Process } from '@/components/sections/Process'
import { About } from '@/components/sections/About'
import { Journey } from '@/components/sections/Journey'
import { Faq } from '@/components/sections/Faq'
import { Contact } from '@/components/sections/Contact'
import { Navbar } from '@/components/ui/Navbar'
import { Footer } from '@/components/ui/Footer'
import { GrainOverlay } from '@/components/effects/GrainOverlay'
import { ScrollProgressBar } from '@/components/ui/ScrollProgressBar'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <GrainOverlay />
      <ScrollProgressBar />
      <Navbar />
      
      <Hero />
      <TechMarquee />
      <MetricsGrid />
      <Projects />
      <Services />
      <Process />
      <About />
      <Journey />
      <Faq />
      <Contact />
      
      <Footer />
    </main>
  )
}
