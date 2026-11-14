import { ContactCard } from "@/components/moodhaus/contact-card"
import { CTABanner } from "@/components/moodhaus/cta-banner"
import { Footer } from "@/components/moodhaus/footer"
import { Header } from "@/components/moodhaus/header"
import { Hero } from "@/components/moodhaus/hero"
import { HomeMotion } from "@/components/moodhaus/home-motion"
import { IntroStatement } from "@/components/moodhaus/intro-statement"
import { ParallaxGallery } from "@/components/moodhaus/parallax-gallery"
import { PortfolioGrid } from "@/components/moodhaus/portfolio-grid"
import { Process } from "@/components/moodhaus/process"
import { Services } from "@/components/moodhaus/services"
import { Testimonials } from "@/components/moodhaus/testimonials"
import { TrustBadges } from "@/components/moodhaus/trust-badges"
import { VideoBand } from "@/components/moodhaus/video-band"

export default function HomePage() {
  return (
    <main>
      <Header />
      <HomeMotion />
      <Hero />
      <TrustBadges />
      <IntroStatement />
      <PortfolioGrid />
      <ParallaxGallery />
      <Services />
      <VideoBand />
      <Process />
      <Testimonials />
      <CTABanner />
      <ContactCard />
      <Footer />
    </main>
  )
}
