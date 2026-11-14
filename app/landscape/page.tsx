import type { Metadata } from "next"
import { Header } from "@/components/moodhaus/header"
import { Footer } from "@/components/moodhaus/footer"
import { CTABanner } from "@/components/moodhaus/cta-banner"
import { PageMotion } from "@/components/moodhaus/page-motion"
import { ChapterHero, NextChapter } from "@/components/moodhaus/chapter-hero"
import { ChapterStatement, FullBleed } from "@/components/moodhaus/chapter-parts"
import { LayeredStory } from "@/components/moodhaus/layered-story"
import { PlantPalette } from "@/components/moodhaus/plant-palette"
import { PlantingPlan } from "@/components/moodhaus/planting-plan"
import { BeforeAfter } from "@/components/moodhaus/before-after"
import { chapters, dMedia, gardenLayers } from "@/lib/disciplines"
import { media } from "@/lib/moodhaus-content"

export const metadata: Metadata = {
  title: "Landscape design",
  description: "Tropical, water-wise gardens, pools and garden lighting for coastal San Diego homes.",
}

export default function LandscapePage() {
  const chapter = chapters[1]
  return (
    <main className="min-h-screen">
      <PageMotion />
      <Header />
      <ChapterHero chapter={chapter} intro="Gardens, pools, terraces and lighting that feel like the tropics and live like the coast: lush all year, on a fraction of the water." />
      <ChapterStatement
        eyebrow="Our approach"
        text="We design the garden at the same table as the house, so every window has something to look at and every room has somewhere to step out to."
        facts={[
          { value: "5", label: "Layers in every garden: canopy, structure, ground, water, light" },
          { value: "Drip", label: "Irrigation and rain capture in every planting bed" },
          { value: "Every bed", label: "Drawn on the planting, irrigation and lighting plans your builder works from" },
        ]}
      />
      <PlantingPlan />
      <PlantPalette />
      <LayeredStory items={gardenLayers} tone="dark" eyebrow="Five layers" title="A garden is built" accent="like a house." />
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[.7fr_1.3fr] lg:items-center lg:px-8">
          <div data-reveal>
            <p className="mh-eyebrow mb-5 text-walnut">Before & after</p>
            <h2 className="font-serif text-5xl font-light leading-[.95] text-primary sm:text-6xl">
              Drag to see <em className="text-walnut">the garden arrive.</em>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">Before on the left, after on the right. Drag the line to compare, or see every transformation on the before and after page.</p>
          </div>
          <BeforeAfter after={media.courtyardPool} alt="Courtyard pool garden with planting and lighting" aspect="aspect-[4/5] sm:aspect-[4/3]" />
        </div>
      </section>
      <FullBleed image={dMedia.duskCourtyard} alt="White courtyard garden softly lit at dusk" eyebrow="After dark" caption="The garden carries on after sunset: low, warm light on trunks, steps and water, never on the sky." />
      <NextChapter current={chapter.key} />
      <CTABanner />
      <Footer />
    </main>
  )
}
