import Image from "next/image"
import { media, studio } from "@/lib/moodhaus-content"
import { TopoDrift } from "./topo-drift"

const statement =
  "We design homes and gardens that feel inevitable — as if the architecture grew out of the land, the light, and the way you want to live."

/** Large editorial statement. Each word brightens as it scrolls through the viewport (see home-motion). */
export function IntroStatement() {
  return (
    <section id="intro" className="relative overflow-hidden bg-background py-28 sm:py-40">
      <TopoDrift tone="bronze" variant={2} />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.35fr_.65fr] lg:items-end lg:px-8">
        <div>
          <p className="mh-eyebrow mb-8 text-walnut">The Moodhaus approach</p>
          <p data-word-reveal className="font-serif text-4xl font-light leading-[1.12] text-primary sm:text-6xl lg:text-[4.4rem]">
            {statement.split(" ").map((word, i) => (
              <span key={i} data-word className="inline-block pr-[.25em] opacity-[.18]">
                {word}
              </span>
            ))}
          </p>
          <div className="mt-12 flex items-center gap-5">
            <span className="h-px w-14 bg-bronze" />
            <p className="font-serif text-xl italic text-foreground/70">‘{studio.tagline}’</p>
          </div>
        </div>
        <div className="relative">
          <div className="mh-image-frame relative aspect-[4/5] overflow-hidden rounded-[6px]">
            <div data-parallax="-12" className="absolute inset-[-12%_0]">
              <Image src={media.gravelGarden} alt="Curved timber facade above a raked gravel garden" fill sizes="(min-width: 1024px) 30vw, 90vw" className="object-cover" />
            </div>
          </div>
          <p className="mh-eyebrow mt-5 text-[10px] text-foreground/60">{studio.founder} — {studio.founderTitle}</p>
        </div>
      </div>
    </section>
  )
}
