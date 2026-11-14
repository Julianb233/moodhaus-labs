import type { Metadata } from "next"
import { Header } from "@/components/moodhaus/header"
import { Footer } from "@/components/moodhaus/footer"
import { CTABanner } from "@/components/moodhaus/cta-banner"
import { PageMotion } from "@/components/moodhaus/page-motion"
import { ChapterHero, NextChapter } from "@/components/moodhaus/chapter-hero"
import { ChapterStatement, FullBleed } from "@/components/moodhaus/chapter-parts"
import { LayeredStory } from "@/components/moodhaus/layered-story"
import { chapters, phases } from "@/lib/disciplines"
import { media } from "@/lib/moodhaus-content"

export const metadata: Metadata = {
  title: "Concept to completion",
  description: "How a Moodhaus Labs commission runs, from the first site walk to handover with the garden planted and the lights set.",
}

export default function ProcessPage() {
  const chapter = chapters[3]
  return (
    <main className="min-h-screen">
      <PageMotion />
      <Header />
      <ChapterHero chapter={chapter} intro="One team from the first site walk to the last light set at dusk. Here is what happens, when, and what you hold at the end of each phase." />
      <ChapterStatement
        eyebrow="The promise"
        text="You will always know what we are doing, what it costs, and what you need to decide next. No hand-offs between firms, no surprises on site."
        facts={[
          { value: "6", label: "Phases, each ending in something you can hold" },
          { value: "Weekly", label: "Site visits during construction" },
          { value: "One", label: "Point of contact from start to finish" },
        ]}
      />
      <LayeredStory items={phases.map(p => ({ ...p, meta: p.kicker }))} eyebrow="The journey" title="Six phases," accent="one calm process." />
      <FullBleed image={media.infinityPalms} alt="Infinity pool among palms overlooking the coast" eyebrow="Handover" caption="We hand over a finished home: the garden planted, the art hung, and the lighting set at dusk." />
      <NextChapter current={chapter.key} />
      <CTABanner />
      <Footer />
    </main>
  )
}
