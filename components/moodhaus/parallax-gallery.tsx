import Image from "next/image"
import { media } from "@/lib/moodhaus-content"

/**
 * Layered depth section: a full-bleed coastline, oversized type sliding across it,
 * and three framed images drifting at different speeds for a 3D parallax feel.
 */
export function ParallaxGallery() {
  return (
    <section data-depth className="relative h-[180vh] overflow-clip bg-deep-green text-primary-foreground">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div data-depth-bg className="absolute inset-[-10%] ">
          <Image src={media.coastCliffs} alt="Aerial view of sandstone cliffs and Pacific surf along the La Jolla coast" fill sizes="100vw" className="object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-green/70 via-deep-green/20 to-deep-green/90" />
        </div>

        <div data-depth-type className="absolute left-0 top-[16%] whitespace-nowrap font-display text-[19vw] font-light leading-none tracking-[0.12em] text-transparent [-webkit-text-stroke:1px_rgb(211_191_153_/_.75)]">
          SAN DIEGO · PACIFIC · SAN DIEGO
        </div>

        <div data-depth-layer="0.6" className="absolute left-[8%] top-[8%] w-[38vw] max-w-[440px] sm:w-[26vw]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full border border-accent/40">
            <Image src={media.poolLounge} alt="Modern home with pool and lounge chairs" fill sizes="30vw" className="object-cover" />
          </div>
        </div>
        <div data-depth-layer="1.2" className="absolute right-[7%] top-[38%] w-[42vw] max-w-[520px] sm:w-[30vw]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] mh-shadow-lg">
            <Image src={media.stoneSunset} alt="Modern home with stone accents at sunset" fill sizes="35vw" className="object-cover" />
          </div>
        </div>
        <div data-depth-layer="1.8" className="absolute bottom-[4%] left-[52%] hidden w-[22vw] max-w-[320px] sm:block">
          <div className="relative aspect-square overflow-hidden rounded-full border border-accent/40">
            <Image src={media.fountain} alt="Water cascading down a tiered garden fountain" fill sizes="22vw" className="object-cover" />
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-10 z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mh-eyebrow text-accent">Rooted in place</p>
          <p className="mt-3 max-w-xl font-serif text-3xl font-light leading-tight sm:text-5xl">
            Sea air, sandstone, canyon light. <em className="text-accent">We design for all of it.</em>
          </p>
        </div>
      </div>
    </section>
  )
}
