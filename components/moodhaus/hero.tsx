import Link from "next/link"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { media, studio } from "@/lib/moodhaus-content"
import { LogoLockup } from "./logo"
import { TopoLines } from "./topo-lines"

/**
 * Scroll-driven hero. The stage pins for ~2 screens while:
 *  1. gold contour lines draw themselves across the forest-green field,
 *  2. an arched "window" of coastal drone footage opens to full bleed,
 *  3. the MOODHAUS lockup lifts away and the headline settles in.
 * The choreography lives in home-motion.tsx (GSAP ScrollTrigger, scrubbed).
 */
export function Hero() {
  return (
    <section id="hero" data-hero className="relative bg-primary text-primary-foreground">
      <div data-hero-stage className="relative h-[100svh] min-h-[640px] overflow-hidden">
        <div className="mh-grain z-[1]" aria-hidden="true" />

        {/* Contour field */}
        <div data-hero-topo className="absolute inset-[-6%] z-0 text-accent/45">
          <TopoLines className="h-full w-full" />
        </div>

        {/* Arched window into the coast */}
        <div
          data-hero-window
          className="absolute inset-0 z-[2] overflow-hidden bg-deep-green will-change-[clip-path]"
          style={{ clipPath: "inset(100% 36% 0% 36% round 999px 999px 0px 0px)" }}
        >
          <video
            data-hero-video
            className="absolute inset-0 h-full w-full scale-125 object-cover"
            src={media.heroVideo}
            poster={media.heroPoster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Drone footage of a modern coastal home at dusk"
          />
          <div data-hero-shade className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/10 to-primary/80 opacity-0" />
        </div>

        {/* Lockup */}
        <div data-hero-lockup className="absolute inset-0 z-[3] flex items-center justify-center px-6">
          <LogoLockup className="text-[10.5vw] text-accent sm:text-[10vw] lg:text-[8.5rem]" />
        </div>

        {/* Headline revealed once the window is open */}
        <div data-hero-copy className="absolute inset-x-0 bottom-0 z-[4] mx-auto max-w-7xl px-6 pb-16 opacity-0 lg:px-8 lg:pb-20">
          <p className="mh-eyebrow mb-5 text-accent">Architecture · Landscape · Visualization — {studio.location}</p>
          <h1 className="max-w-4xl font-serif text-5xl font-light leading-[.95] sm:text-7xl lg:text-[6.5rem]">
            Exceptional spaces
            <br />
            <em className="text-accent">for everyday living.</em>
          </h1>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/consultation" className="mh-btn mh-pulse-soft inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Book a private consultation <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/portfolio" className="mh-btn inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-4 text-xs font-medium uppercase tracking-[0.22em] text-primary-foreground hover:bg-primary-foreground/10">
              View the work
            </Link>
          </div>
        </div>

        <a href="#intro" data-hero-cue className="mh-scroll-cue absolute bottom-7 left-1/2 z-[4] flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary-foreground/70">
          Scroll to enter <ArrowDown className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  )
}
