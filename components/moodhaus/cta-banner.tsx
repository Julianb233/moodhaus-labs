import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { media, studio } from "@/lib/moodhaus-content"
import { TopoDrift } from "./topo-drift"

export function CTABanner() {
  return (
    <section id="consult" className="relative overflow-hidden bg-deep-green py-36 text-primary-foreground sm:py-48">
      <div data-parallax="18" className="absolute inset-[-18%_0]">
        <Image src={media.pathDusk} alt="Modern white house with an illuminated pathway at dusk" fill sizes="100vw" className="object-cover opacity-55" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-deep-green via-deep-green/70 to-transparent" />
      <TopoDrift variant={2} reverse opacity={0.2} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mh-eyebrow mb-5 text-accent">Limited commissions each year</p>
          <h2 className="font-serif text-5xl font-light leading-[.95] sm:text-7xl">
            Let’s design
            <br />
            <em className="text-accent">what comes next.</em>
          </h2>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-primary-foreground/75">
            Begin with a private consultation, on your site or in the studio. We’ll walk the land, listen, and show you what’s possible.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/consultation" className="mh-btn inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Book a consultation <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a href={studio.phoneHref} className="mh-btn inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-4 text-xs uppercase tracking-[0.22em] hover:bg-primary-foreground/10">
              {studio.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
