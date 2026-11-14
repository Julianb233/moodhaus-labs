import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { process } from "@/lib/moodhaus-content"
import { TopoDrift } from "./topo-drift"

export function Process() {
  return (
    <section id="process" className="relative overflow-clip bg-primary py-28 text-primary-foreground sm:py-36">
      <TopoDrift />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="mh-eyebrow mb-5 text-accent">How we work</p>
          <h2 className="font-serif text-5xl font-light leading-[.95] sm:text-7xl">
            A calm process
            <br />
            <em className="text-accent">for big decisions.</em>
          </h2>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-primary-foreground/70">
            Every engagement is led personally by our principal designer, with a small, dedicated team and a limited number of commissions each year.
          </p>
          <Link href="/consultation" className="mh-btn mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Request a consultation <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link href="/process" className="mh-link-underline mt-6 flex w-fit items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary-foreground/80">
            The full process <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <ol data-process className="relative grid gap-0">
          <span data-process-line className="absolute left-[1.35rem] top-2 h-[calc(100%-1rem)] w-px origin-top bg-accent/60" aria-hidden="true" />
          {process.map((item, i) => (
            <li key={item.step} data-process-step className="relative flex gap-8 pb-14 last:pb-0">
              <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/60 bg-primary font-serif text-lg text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pt-1">
                <h3 className="mh-wordmark text-xl font-light">{item.step.toUpperCase()}</h3>
                <p className="mt-3 max-w-lg leading-relaxed text-primary-foreground/70">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
