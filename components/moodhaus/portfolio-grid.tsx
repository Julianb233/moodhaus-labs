import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { projects } from "@/lib/moodhaus-content"

/** Selected work. On desktop the section pins and the projects glide past horizontally as you scroll. */
export function PortfolioGrid() {
  return (
    <section id="portfolio" data-hscroll className="relative overflow-hidden bg-background py-24 lg:py-0">
      <div data-hscroll-pin className="lg:relative lg:flex lg:h-[100svh] lg:items-center">
        <div data-hscroll-track className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6 lg:snap-none lg:gap-10 lg:overflow-visible lg:px-[6vw] lg:pb-0">
          <div className="flex w-[78vw] shrink-0 snap-start flex-col justify-center sm:w-[46vw] lg:w-[30vw]">
            <p className="mh-eyebrow mb-5 text-walnut">Selected work</p>
            <h2 className="font-serif text-5xl font-light leading-[.95] text-primary sm:text-7xl">
              Homes that
              <br />
              <em className="text-walnut">hold the horizon.</em>
            </h2>
            <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">
              Residences, gardens, and interiors from La Jolla to Rancho Santa Fe, each designed around a single idea of how to live well.
            </p>
            <Link href="/portfolio" className="mh-link-underline mt-8 inline-flex w-fit items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary">
              The full portfolio <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          {projects.map((project, i) => (
            <article key={project.id} className="group w-[78vw] shrink-0 snap-start sm:w-[46vw] lg:w-[36vw]">
              <Link href={"/project/" + project.id} className="block">
                <div className={"mh-image-frame relative aspect-[4/5] overflow-hidden bg-card rounded-[6px]"}>
                  <div data-hs-img className="absolute inset-y-0 -left-[7%] -right-[7%]">
                    <Image src={project.image} alt={project.name} fill sizes="(min-width: 1024px) 40vw, 80vw" className="object-cover mh-image-zoom" />
                  </div>
                  {project.badge && <span className="absolute left-5 top-5 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">{project.badge}</span>}
                </div>
                <div className="flex items-start justify-between gap-4 pt-5">
                  <div>
                    <p className="mh-eyebrow text-[10px] text-walnut">{project.location} · {project.year}</p>
                    <h3 className="mt-2 font-serif text-3xl text-primary">{project.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>
                  </div>
                  <span className="mt-1 rounded-full border border-primary/20 p-2.5 text-primary mh-transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
        {/* Scroll progress through the selected work (desktop) */}
        <div className="pointer-events-none absolute inset-x-[6vw] bottom-10 hidden items-center gap-5 lg:flex" aria-hidden="true">
          <span className="mh-eyebrow text-[10px] text-walnut">Selected work</span>
          <span className="relative h-px flex-1 bg-primary/15">
            <span data-hscroll-progress className="absolute inset-0 origin-left scale-x-0 bg-bronze" />
          </span>
          <span className="mh-eyebrow text-[10px] text-walnut">{String(projects.length).padStart(2, "0")} projects</span>
        </div>
      </div>
    </section>
  )
}
