import { CTABanner } from "@/components/azza/cta-banner"
import { BatchInquiry } from "@/components/azza/batch-inquiry"
import { FeatureSection } from "@/components/azza/feature-section"
import { Footer } from "@/components/azza/footer"
import { Header } from "@/components/azza/header"
import { HomeMotion } from "@/components/azza/home-motion"
import { Hero } from "@/components/azza/hero"
import { Newsletter } from "@/components/azza/newsletter"
import { ProductGrid } from "@/components/azza/product-grid"
import { RecipeStory } from "@/components/azza/recipe-story"
import { Testimonials } from "@/components/azza/testimonials"
import { TrustBadges } from "@/components/azza/trust-badges"

export default function HomePage() { return <main><Header /><HomeMotion /><Hero /><TrustBadges /><ProductGrid /><FeatureSection /><RecipeStory /><Testimonials /><BatchInquiry /><CTABanner /><Newsletter /><Footer /></main> }
