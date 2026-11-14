import { Globe, Mail, MapPin, Phone } from "lucide-react"
import { studio } from "@/lib/moodhaus-content"
import { LogoLockup } from "./logo"
import { TopoLines } from "./topo-lines"

/** The studio's business card, rebuilt in code. It turns over as you scroll past (see home-motion). */
export function ContactCard() {
  return (
    <section className="bg-card py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <div>
          <p className="mh-eyebrow mb-5 text-walnut">Say hello</p>
          <h2 className="font-serif text-5xl font-light leading-[.95] text-primary sm:text-7xl">
            A conversation
            <br />
            <em className="text-walnut">is the first sketch.</em>
          </h2>
          <ul className="mt-10 grid gap-4 text-foreground/80">
            <li><a className="mh-link-underline inline-flex items-center gap-4" href={studio.phoneHref}><Phone className="h-4 w-4 text-walnut" /> {studio.phone}</a></li>
            <li><a className="mh-link-underline inline-flex items-center gap-4" href={"mailto:" + studio.email}><Mail className="h-4 w-4 text-walnut" /> {studio.email}</a></li>
            <li className="inline-flex items-center gap-4"><MapPin className="h-4 w-4 text-walnut" /> {studio.location}</li>
          </ul>
        </div>

        <div className="[perspective:1600px]">
          <div data-card-flip className="relative mx-auto aspect-[3.5/2] w-full max-w-[620px] [transform-style:preserve-3d]">
            {/* Front */}
            <div className="absolute inset-0 overflow-hidden rounded-md bg-primary text-accent mh-shadow-lg [backface-visibility:hidden]">
              <div className="absolute inset-[-10%] text-accent/80 [mask-image:radial-gradient(ellipse_at_center,transparent_32%,black_62%)]">
                <TopoLines className="h-full w-full" strokeWidth={1.1} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <LogoLockup className="text-[11vw] sm:text-6xl lg:text-[4.2rem]" />
              </div>
            </div>
            {/* Back */}
            <div className="absolute inset-0 overflow-hidden rounded-md bg-background p-[7%] text-foreground mh-shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <svg className="absolute -right-10 top-0 h-full w-1/2 text-walnut/80" viewBox="0 0 200 300" fill="none" preserveAspectRatio="none" aria-hidden="true">
                <path d="M40 0 C150 60 160 110 90 160 C30 205 70 260 170 300" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              </svg>
              <p className="font-serif text-[clamp(1.1rem,3.2vw,2rem)] tracking-[0.18em] text-primary">{studio.founder.toUpperCase()}</p>
              <p className="mh-eyebrow mt-1 text-[clamp(.45rem,1.1vw,.65rem)] text-foreground/80">{studio.founderTitle}</p>
              <span className="mt-3 block h-px w-10 bg-bronze" />
              <ul className="mt-[5%] grid gap-[.4em] text-[clamp(.6rem,1.4vw,.85rem)]">
                <li className="flex items-center gap-3"><Phone className="h-[1em] w-[1em]" /> {studio.phone}</li>
                <li className="flex items-center gap-3"><Mail className="h-[1em] w-[1em]" /> {studio.email}</li>
                <li className="flex items-center gap-3"><MapPin className="h-[1em] w-[1em]" /> {studio.location}</li>
                <li className="flex items-center gap-3"><Globe className="h-[1em] w-[1em]" /> {studio.website}</li>
              </ul>
              <p className="absolute bottom-[8%] left-[7%] font-serif text-[clamp(.65rem,1.5vw,.95rem)] italic tracking-wide text-foreground/70">‘{studio.tagline}’</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
