import type { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/moodhaus/header"
import { Footer } from "@/components/moodhaus/footer"
import { CTABanner } from "@/components/moodhaus/cta-banner"
import { PageMotion } from "@/components/moodhaus/page-motion"
import { ChapterHero, NextChapter } from "@/components/moodhaus/chapter-hero"
import { ChapterStatement, ScopeGrid } from "@/components/moodhaus/chapter-parts"
import { RenderPipeline } from "@/components/moodhaus/render-pipeline"
import { chapters, dMedia, renderDeliverables, renderGallery } from "@/lib/disciplines"

export const metadata: Metadata = {
  title: "3D visualization",
  description: "Photoreal renders, walkthrough films and lighting studies of your home before it is built.",
}

export default function VisualizationPage() {
  const chapter = chapters[2]
  return (
    <main className="min-h-screen">
      <PageMotion />
      <Header />
      <ChapterHero chapter={chapter} intro="Photoreal stills, walkthrough films and lighting scenes of your home and garden, so every big decision is made with your eyes, not your imagination." />
      <ChapterStatement
        eyebrow="Why it matters"
        text="Changing a wall in a render takes an afternoon. Changing it on site takes a month. Visualization is how we make sure the home you approve is the home you get."
        facts={[
          { value: "4", label: "Passes from linework to final light" },
          { value: "3", label: "Hours of the day studied for every key view" },
          { value: "1:1", label: "Real material samples matched in the render" },
        ]}
      />
      <RenderPipeline image={dMedia.renderLongPool} alt="Photoreal render of a long pool beside a low modern house" />

      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div data-reveal className="max-w-3xl">
            <p className="mh-eyebrow mb-5 text-walnut">Render studies</p>
            <h2 className="font-serif text-5xl font-light leading-[.95] text-primary sm:text-7xl">
              Every hour, <em className="text-walnut">every angle.</em>
            </h2>
          </div>
          <div className="mt-14 grid gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {renderGallery.map(r => (
              <figure key={r.caption} className={r.span}>
                <div data-img-reveal className="relative aspect-[4/3] overflow-hidden rounded-[6px] bg-card lg:aspect-auto lg:h-[26rem]">
                  <Image src={r.image} alt={r.alt} fill sizes="(min-width: 1024px) 66vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                </div>
                <figcaption className="mh-eyebrow mt-3 text-[10px] text-walnut">{r.caption}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-8 text-xs text-muted-foreground">Illustrative renders shown for style. Your project is modelled from your own site survey and drawings.</p>
        </div>
      </section>

      <ScopeGrid dark eyebrow="What you receive" title="More than" accent="a pretty picture." items={renderDeliverables} />
      <NextChapter current={chapter.key} />
      <CTABanner />
      <Footer />
    </main>
  )
}
