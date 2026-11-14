import type { Metadata } from "next"
import { Header } from "@/components/moodhaus/header"
import { Footer } from "@/components/moodhaus/footer"
import { CTABanner } from "@/components/moodhaus/cta-banner"
import { PageMotion } from "@/components/moodhaus/page-motion"
import { ChapterHero, NextChapter } from "@/components/moodhaus/chapter-hero"
import { ChapterStatement, FullBleed } from "@/components/moodhaus/chapter-parts"
import { LayeredStory } from "@/components/moodhaus/layered-story"
import { phases, type Chapter } from "@/lib/disciplines"
import { media } from "@/lib/moodhaus-content"

export const metadata: Metadata = {
  title: "Our process",
  description: "How a Moodhaus Labs commission runs, from the first site walk to a complete design package your builder can build from.",
}

const processChapter: Chapter = {
  key: "process",
  number: "",
  label: "Process",
  href: "/process",
  title: "Our process,",
  accent: "start to hand-off.",
  image: media.infinityPalms,
  alt: "Infinity pool among palm trees",
  line: "",
}

export default function ProcessPage() {
  const chapter = processChapter
  return (
    <main className="min-h-screen">
      <PageMotion />
      <Header />
      <ChapterHero chapter={chapter} eyebrow="How we work" intro="From the first site walk to a complete design package in your builder’s hands. Here is what happens, when, and what you hold at the end of each phase." />
      <ChapterStatement
        eyebrow="The promise"
        text="We design and visualize. Your builder builds, from a package so complete there is very little left to guess. At every step you know what we are drawing, what it costs, and what you need to decide next."
        facts={[
          { value: "6", label: "Phases, each ending in something you can hold" },
          { value: "3D", label: "Every design seen in photoreal before it is final" },
          { value: "One", label: "Complete package handed to your builder" },
        ]}
      />
      <LayeredStory items={phases.map(p => ({ ...p, meta: p.kicker }))} eyebrow="The journey" title="Six phases," accent="one clear design." />
      <FullBleed image={media.infinityPalms} alt="Infinity pool among palms overlooking the coast" eyebrow="The hand-off" caption="Drawings, renders, planting and lighting plans, handed to your builder as one set, so the finished home can match the design." />
      <NextChapter current={chapter.key} />
      <CTABanner />
      <Footer />
    </main>
  )
}
