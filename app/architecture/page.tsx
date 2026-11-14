import type { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/moodhaus/header"
import { Footer } from "@/components/moodhaus/footer"
import { CTABanner } from "@/components/moodhaus/cta-banner"
import { PageMotion } from "@/components/moodhaus/page-motion"
import { ChapterHero, NextChapter } from "@/components/moodhaus/chapter-hero"
import { ChapterStatement, FullBleed, ScopeGrid } from "@/components/moodhaus/chapter-parts"
import { LineToLight } from "@/components/moodhaus/line-to-light"
import { LayeredStory } from "@/components/moodhaus/layered-story"
import { architecturePrinciples, architectureScope, chapters, dMedia, drawingSet } from "@/lib/disciplines"

export const metadata: Metadata = {
  title: "Architecture",
  description: "Custom residences across coastal San Diego, designed from the land up by Moodhaus Labs.",
}

export default function ArchitecturePage() {
  const chapter = chapters[0]
  return (
    <main className="min-h-screen">
      <PageMotion />
      <Header />
      <ChapterHero chapter={chapter} intro="Custom residences, additions and pavilions for the coast and canyons of San Diego, each one shaped by its site before it is shaped by style." />
      <ChapterStatement
        eyebrow="Our approach"
        text="A house should look as if it could only belong to its piece of land: turned to the light, opened to the view, and quiet enough that the landscape does the talking."
        facts={[
          { value: "1", label: "Principal designer leads every commission" },
          { value: "3D", label: "Every scheme modelled and rendered before drawings" },
          { value: "100%", label: "Architecture and landscape designed together" },
        ]}
      />
      <LineToLight image={dMedia.renderPoolLounge} alt="Modern pool terrace and residence at golden hour" eyebrow="From line to light" title="The drawing" accent="becomes the home." />
      <LayeredStory items={architecturePrinciples} eyebrow="Four principles" title="How a Moodhaus" accent="house is made." />

      <section className="bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div data-reveal className="max-w-2xl">
            <p className="mh-eyebrow mb-5 text-walnut">The drawing set</p>
            <h2 className="font-serif text-5xl font-light leading-[.95] text-primary sm:text-7xl">
              Drawn by hand, <em className="text-walnut">tested in models.</em>
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {drawingSet.map((d, i) => (
              <figure key={d.caption} className={i === 0 ? "col-span-2 lg:col-span-2 lg:row-span-2" : ""}>
                <div data-img-reveal className={"relative overflow-hidden rounded-[6px] bg-background " + (i === 0 ? "aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[32rem]" : "aspect-square")}>
                  <Image src={d.image} alt={d.alt} fill sizes={i === 0 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 50vw"} className="object-cover" />
                </div>
                <figcaption className="mh-eyebrow mt-3 text-[9px] text-walnut sm:text-[10px]">{d.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <FullBleed image={dMedia.meadowHouse} alt="Low concrete house set into a green meadow" eyebrow="Built to belong" caption="Low, long and quiet. The best compliment a house can get is that it looks like it was always there." />
      <ScopeGrid eyebrow="Scope" title="From feasibility" accent="to the final inspection." items={architectureScope.map(title => ({ title }))} />
      <NextChapter current={chapter.key} />
      <CTABanner />
      <Footer />
    </main>
  )
}
