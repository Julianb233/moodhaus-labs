import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { transformations } from "@/lib/moodhaus-content"
import { BeforeAfter } from "./before-after"
import { TopoDrift } from "./topo-drift"

/** Home-page teaser: two before/after sliders and a link to the full page. */
export function BeforeAfterShowcase() {
  const pair = transformations.slice(0, 2)
  return (
    <section id="before-after" className="relative overflow-hidden bg-background py-24 sm:py-32">
      <TopoDrift tone="bronze" variant={2} opacity={0.16} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mh-eyebrow mb-5 text-walnut">Before &amp; after</p>
            <h2 className="font-serif text-5xl font-light leading-none text-primary sm:text-7xl">
              Drag to see <em className="text-walnut">the change.</em>
            </h2>
          </div>
          <Link href="/before-after" className="mh-link-underline inline-flex w-fit items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary">
            Every transformation <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-10 lg:grid-cols-2">
          {pair.map(item => (
            <figure key={item.id} data-reveal>
              <BeforeAfter after={item.after} before={item.before} alt={`${item.title}, ${item.location}`} className="rounded-[6px]" sizes="(min-width: 1024px) 45vw, 100vw" />
              <figcaption className="mt-5 flex items-baseline justify-between gap-4">
                <span className="font-serif text-2xl text-primary">{item.title} <span className="text-walnut">· {item.location}</span></span>
                <span className="mh-eyebrow hidden text-[10px] text-foreground/60 sm:block">{item.scope}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
