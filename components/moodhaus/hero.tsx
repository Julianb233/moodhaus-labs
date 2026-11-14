import Link from "next/link"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { media, studio } from "@/lib/moodhaus-content"
import { LogoLockup } from "./logo"
import { TopoLines } from "./topo-lines"

/**
 * Hero. The opening is timed, not scroll-driven, so nobody scrolls through an empty screen:
 *  1. gold contour lines draw across the forest-green field while the lockup rises,
 *  2. a window opens in the middle and widens to full-bleed coastal footage,
 *  3. the headline rises line by line.
 * Scrolling during the opening fast-forwards it. After that, scroll only adds a gentle
 * parallax (footage drifts slower than the page, copy lifts away). See home-motion.tsx.
 */
export function Hero() {
  return (
    <section id="hero" data-hero className="relative h-[100svh] min-h-[620px] overflow-hidden bg-primary text-primary-foreground">
      {/* Contour field (visible during the opening) */}
      <div data-hero-topo className="absolute inset-[-4%] z-0 text-accent/45" aria-hidden="true">
        <TopoLines className="h-full w-full" />
      </div>

      {/* Footage, revealed through an opening window */}
      <div data-hero-window className="absolute inset-0 z-[2] overflow-hidden will-change-[clip-path]" style={{ clipPath: "inset(50% 50% 50% 50% round 6px)" }}>
        <div data-hero-media className="absolute inset-[-8%_0] will-change-transform">
          <video
            data-hero-video
            className="absolute inset-0 h-full w-full object-cover"
            src={media.heroVideo}
            poster={media.heroPoster}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="Drone footage of a modern coastal home at dusk"
          />
        </div>
        <div data-hero-shade className="absolute inset-0 bg-[linear-gradient(180deg,rgba(32,45,35,.55)_0%,rgba(32,45,35,.08)_35%,rgba(32,45,35,.25)_60%,rgba(32,45,35,.88)_100%)]" />
        <div data-hero-dim className="absolute inset-0 bg-primary opacity-0" />
        <div className="mh-grain" aria-hidden="true" />
      </div>

      {/* Lockup (opening only) */}
      <div data-hero-lockup className="pointer-events-none absolute inset-0 z-[3] flex items-center justify-center px-6">
        <LogoLockup className="text-[10.5vw] text-accent sm:text-[10vw] lg:text-[8.5rem]" />
      </div>

      {/* Headline */}
      <div data-hero-copy className="absolute inset-x-0 bottom-0 z-[4] mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-16">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p data-hero-fade className="mh-eyebrow mb-6 text-accent opacity-0">Architecture · Landscape · Visualization</p>
            <h1 className="font-serif text-[13vw] font-light leading-[.92] sm:text-7xl lg:text-[7.25rem]">
              <span className="block overflow-hidden pb-[.08em]"><span data-hero-line className="block" style={{ transform: "translateY(110%)" }}>Exceptional spaces</span></span>
              <span className="block overflow-hidden pb-[.08em]"><span data-hero-line className="block italic text-accent" style={{ transform: "translateY(110%)" }}>for everyday living.</span></span>
            </h1>
            <div data-hero-fade className="mt-9 flex flex-wrap items-center gap-4 opacity-0">
              <Link href="/consultation" className="mh-btn inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Book a private consultation <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/portfolio" className="mh-btn inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-4 text-xs font-medium uppercase tracking-[0.22em] text-primary-foreground hover:bg-primary-foreground/10">
                View the work
              </Link>
            </div>
          </div>
          <dl data-hero-fade className="hidden min-w-56 gap-4 border-l border-accent/30 pl-6 text-xs opacity-0 lg:grid">
            <div><dt className="mh-eyebrow text-[10px] text-accent">Studio</dt><dd className="mt-1 text-primary-foreground/80">{studio.location}</dd></div>
            <div><dt className="mh-eyebrow text-[10px] text-accent">Coast &amp; canyon</dt><dd className="mt-1 text-primary-foreground/80">La Jolla · Del Mar · Rancho Santa Fe</dd></div>
            <div><dt className="mh-eyebrow text-[10px] text-accent">Commissions</dt><dd className="mt-1 text-primary-foreground/80">A limited number each year</dd></div>
          </dl>
        </div>
      </div>

      <div data-hero-cue className="absolute bottom-6 left-1/2 z-[4] -translate-x-1/2 opacity-0">
        <a href="#intro" className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary-foreground/70">
          Scroll <ArrowDown className="mh-scroll-cue h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  )
}
