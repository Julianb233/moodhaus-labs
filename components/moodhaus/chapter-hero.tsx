import Image from "next/image"
import Link from "next/link"
import { chapters, type Chapter } from "@/lib/disciplines"
import { cn } from "@/lib/utils"

/** Full-bleed opening for a discipline page, with a chapter index across the bottom. */
export function ChapterHero({ chapter, intro }: { chapter: Chapter; intro: string }) {
  return (
    <section className="relative h-[100svh] min-h-[640px] overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0">
        <div data-parallax="18" className="absolute inset-[-10%_0]">
          <Image src={chapter.image} alt={chapter.alt} fill priority sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(32,45,35,.55)_0%,rgba(32,45,35,.15)_30%,rgba(32,45,35,.55)_60%,rgba(32,45,35,.92)_100%)]" />
      </div>
      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-10 lg:px-8">
        <p data-reveal className="mh-eyebrow mb-6 text-accent">Chapter {chapter.number} / 04</p>
        <h1 data-reveal className="max-w-5xl font-serif text-[15vw] font-light leading-[.9] sm:text-8xl lg:text-[8.5rem]">
          {chapter.title}
          <br />
          <em className="text-[.62em] text-accent">{chapter.accent}</em>
        </h1>
        <p data-reveal className="mt-7 max-w-xl text-lg leading-relaxed text-primary-foreground/80">{intro}</p>
        <nav aria-label="Disciplines" className="mt-12 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-primary-foreground/15 pt-5 sm:grid-cols-4">
          {chapters.map(c => (
            <Link
              key={c.key}
              href={c.href}
              aria-current={c.key === chapter.key ? "page" : undefined}
              className={cn("mh-eyebrow mh-transition text-[10px]", c.key === chapter.key ? "text-accent" : "text-primary-foreground/55 hover:text-primary-foreground")}
            >
              {c.number} · {c.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  )
}

/** Full-width link to the next chapter. */
export function NextChapter({ current }: { current: string }) {
  const i = chapters.findIndex(c => c.key === current)
  const next = chapters[(i + 1) % chapters.length]
  return (
    <Link href={next.href} className="group relative block h-[70svh] min-h-[460px] overflow-hidden bg-primary text-primary-foreground">
      <div data-parallax="16" className="absolute inset-[-10%_0]">
        <Image src={next.image} alt={next.alt} fill sizes="100vw" className="object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.04]" />
      </div>
      <div className="absolute inset-0 bg-primary/55 transition-colors duration-700 group-hover:bg-primary/40" />
      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-8">
        <p className="mh-eyebrow text-accent">Next · Chapter {next.number}</p>
        <p className="mt-5 font-serif text-6xl font-light leading-[.92] sm:text-8xl">
          {next.title}
          <br />
          <em className="text-[.62em] text-accent">{next.accent}</em>
        </p>
        <span className="mh-eyebrow mt-8 inline-flex items-center gap-3 text-[11px] text-primary-foreground/80">
          Continue <span className="h-px w-10 bg-accent transition-all duration-500 group-hover:w-20" />
        </span>
      </div>
    </Link>
  )
}
