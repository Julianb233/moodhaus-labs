import Image from "next/image"
import { media } from "@/lib/moodhaus-content"

/**
 * Layered depth section. The stage holds still (sticky) while three framed photographs
 * rise past each other at different speeds over a slowly settling coastline, and oversized
 * outline type glides sideways. Each frame lives in its own column, so the layers pass
 * cleanly and never collide. Motion is in home-motion.tsx.
 */
export function ParallaxGallery() {
  return (
    <section data-depth className="relative h-[240vh] overflow-clip bg-deep-green text-primary-foreground">
      <div data-depth-stage className="sticky top-0 h-[100svh] overflow-hidden">
        <div data-depth-bg className="absolute inset-[-8%]">
          <Image src={media.coastCliffs} alt="Aerial view of sandstone cliffs and Pacific surf along the La Jolla coast" fill sizes="100vw" className="object-cover opacity-75" />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-green/80 via-deep-green/25 to-deep-green/90" />
        </div>

        <div data-depth-type aria-hidden="true" className="absolute left-6 top-[10%] whitespace-nowrap font-display text-[11vw] font-light leading-none tracking-[0.14em] text-transparent [-webkit-text-stroke:1px_rgb(211_191_153_/_.75)] sm:text-[8vw] lg:left-8 lg:text-[6.5vw]">
          SAN DIEGO COUNTY · PACIFIC · SAN DIEGO COUNTY
        </div>

        {/* Left column: slow */}
        <div data-depth-layer="0.45" className="absolute left-[5%] top-[16%] w-[46vw] sm:w-[24vw] lg:max-w-[400px]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] border border-accent/25 mh-shadow-lg">
            <Image src={media.poolLounge} alt="Modern home with pool and lounge chairs" fill sizes="(min-width: 640px) 26vw, 42vw" className="object-cover" />
          </div>
        </div>
        {/* Centre column: fastest, sits furthest forward */}
        <div data-depth-layer="1.35" className="absolute left-[37%] top-[46%] hidden w-[22vw] max-w-[340px] sm:block">
          <div className="relative aspect-square overflow-hidden rounded-[6px] border border-accent/25 mh-shadow-lg">
            <Image src={media.fountain} alt="Water cascading down a tiered garden fountain" fill sizes="24vw" className="object-cover" />
          </div>
        </div>
        {/* Right column: medium */}
        <div data-depth-layer="0.85" className="absolute right-[5%] top-[34%] w-[50vw] sm:w-[30vw] lg:max-w-[520px]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] mh-shadow-lg sm:aspect-[4/3]">
            <Image src={media.stoneSunset} alt="Modern home with stone accents at sunset" fill sizes="(min-width: 640px) 32vw, 50vw" className="object-cover" />
          </div>
        </div>

        <div data-depth-caption className="absolute inset-x-0 bottom-10 z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mh-eyebrow text-accent">Rooted in place</p>
          <p className="mt-3 max-w-xl font-serif text-3xl font-light leading-tight sm:text-5xl">
            Sea air, sandstone, canyon light. <em className="text-accent">We design for all of it.</em>
          </p>
        </div>
      </div>
    </section>
  )
}
