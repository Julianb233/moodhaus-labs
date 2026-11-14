import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { chapters } from "@/lib/disciplines"

/**
 * Four doors into the disciplines. On desktop the panels sit side by side and the one under
 * the pointer opens wider; on phones they stack as full-width cards.
 */
export function DisciplineDoors() {
  return (
    <section id="capabilities" className="relative bg-primary py-24 text-primary-foreground sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div data-reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mh-eyebrow mb-5 text-accent">What we do</p>
            <h2 className="font-serif text-5xl font-light leading-[.95] sm:text-7xl">
              Four disciplines, <em className="text-accent">one studio.</em>
            </h2>
          </div>
          <p className="max-w-sm leading-relaxed text-primary-foreground/70">Architecture, landscape and visualization under one roof, carried from the first sketch to a complete design your builder can build.</p>
        </div>
      </div>
      <div className="mx-auto mt-14 grid max-w-[96rem] gap-3 px-3 sm:px-6 lg:flex lg:h-[78vh] lg:min-h-[560px] lg:gap-3 lg:px-8 lg:[&:has(a:hover)>a:not(:hover)]:opacity-70">
        {chapters.map(c => (
          <Link
            key={c.key}
            href={c.href}
            className="group relative block aspect-[4/5] overflow-hidden rounded-[6px] transition-[flex-grow,opacity] duration-700 ease-[cubic-bezier(.2,.7,.2,1)] sm:aspect-[16/10] lg:aspect-auto lg:flex-1 lg:hover:flex-[1.9]"
          >
            <Image src={c.image} alt={c.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.05]" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/25 to-primary/10" />
            <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7">
              <p className="font-serif text-4xl font-light text-accent/90">{c.number}</p>
              <h3 className="mt-3 font-serif text-3xl font-light leading-tight lg:text-[2rem]">{c.label}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-primary-foreground/80 lg:max-h-0 lg:opacity-0 lg:transition-all lg:duration-700 lg:group-hover:max-h-24 lg:group-hover:opacity-100">{c.line}</p>
              <span className="mh-eyebrow mt-5 inline-flex items-center gap-2 text-[10px] text-accent">
                Explore <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
