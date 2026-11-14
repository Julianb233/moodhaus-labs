import Image from "next/image"
import { TopoDrift } from "./topo-drift"

/** Large opening statement for a chapter, with three supporting figures. */
export function ChapterStatement({ eyebrow, text, facts }: { eyebrow: string; text: string; facts: { value: string; label: string }[] }) {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-36">
      <TopoDrift tone="bronze" variant={2} opacity={0.14} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <p data-reveal className="mh-eyebrow mb-8 text-walnut">{eyebrow}</p>
        <p data-reveal className="max-w-5xl font-serif text-3xl font-light leading-[1.18] text-primary sm:text-5xl sm:leading-[1.12]">{text}</p>
        <dl className="mt-14 grid gap-8 border-t border-primary/10 pt-10 sm:grid-cols-3">
          {facts.map(f => (
            <div data-reveal key={f.label}>
              <dt className="font-serif text-5xl font-light text-primary">{f.value}</dt>
              <dd className="mt-2 text-sm text-muted-foreground">{f.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

/** A full-bleed photograph with a caption, drifting against the scroll. */
export function FullBleed({ image, alt, caption, eyebrow }: { image: string; alt: string; caption: string; eyebrow: string }) {
  return (
    <section className="relative h-[85svh] min-h-[520px] overflow-hidden bg-primary text-primary-foreground">
      <div data-parallax="20" className="absolute inset-[-12%_0]">
        <Image src={image} alt={alt} fill sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/10 to-transparent" />
      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-14 lg:px-8">
        <p data-reveal className="mh-eyebrow mb-4 text-accent">{eyebrow}</p>
        <p data-reveal className="max-w-3xl font-serif text-3xl font-light leading-tight sm:text-5xl">{caption}</p>
      </div>
    </section>
  )
}

/** Simple numbered list of services or deliverables. */
export function ScopeGrid({ eyebrow, title, accent, items, dark }: { eyebrow: string; title: string; accent: string; items: { title: string; text?: string }[]; dark?: boolean }) {
  return (
    <section className={(dark ? "bg-primary text-primary-foreground" : "bg-background text-primary") + " py-24 sm:py-32"}>
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
        <div data-reveal>
          <p className={"mh-eyebrow mb-5 " + (dark ? "text-accent" : "text-walnut")}>{eyebrow}</p>
          <h2 className="font-serif text-5xl font-light leading-[.95] sm:text-6xl">
            {title} <em className={dark ? "text-accent" : "text-walnut"}>{accent}</em>
          </h2>
        </div>
        <ol className="grid gap-x-10 sm:grid-cols-2">
          {items.map((item, i) => (
            <li data-reveal key={item.title} className={"flex gap-5 border-t py-6 " + (dark ? "border-primary-foreground/15" : "border-primary/10")}>
              <span className={"font-serif text-lg " + (dark ? "text-accent" : "text-walnut")}>{String(i + 1).padStart(2, "0")}</span>
              <span>
                <span className="block text-base font-medium">{item.title}</span>
                {item.text && <span className={"mt-1 block text-sm leading-relaxed " + (dark ? "text-primary-foreground/65" : "text-muted-foreground")}>{item.text}</span>}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
