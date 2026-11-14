import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { Header } from "@/components/header"
import { PageMotion } from "@/components/page-motion"
import { SiteFooter } from "@/components/site-footer"
import { TopoDrift } from "@/components/topo-drift"
import { articles, formatDate } from "@/lib/articles"

export const metadata: Metadata = {
  title: "Journal · Allaie Aisha",
  description: "Notes from Allaie Aisha on mood-led architecture, coastal landscape design, lighting and photoreal visualization for homes across San Diego County.",
  alternates: { canonical: "https://allaieaisha.com/journal" },
  openGraph: { url: "https://allaieaisha.com/journal", title: "Journal · Allaie Aisha", images: ["/og.png"] },
}

export default function Journal() {
  const [lead, ...rest] = articles
  return (
    <>
      <Header />
      <PageMotion />
      <main>
        <section data-hero className="relative overflow-hidden bg-primary text-primary-foreground">
          <TopoDrift opacity={0.16} />
          <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-40 lg:px-8 lg:pb-24 lg:pt-48">
            <p className="mh-eyebrow text-[10.5px] text-accent">The Journal</p>
            <h1 className="mt-6 max-w-4xl font-serif text-5xl font-light leading-[1.02] sm:text-7xl">
              Notes on designing <em className="text-accent">for feeling.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/75">
              Allaie on architecture, landscape, light and visualization, and how each shapes the way a San Diego home feels to live in.
            </p>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <a href={`/journal/${lead.slug}`} className="group grid gap-8 lg:grid-cols-12 lg:items-center">
              <div data-img-reveal className="aa-frame relative aspect-[4/3] bg-deep-green lg:col-span-7">
                <img src={lead.image} alt={lead.imageAlt} className="mh-image-zoom absolute inset-0 h-full w-full object-cover" />
              </div>
              <div className="lg:col-span-5">
                <p className="mh-eyebrow text-[10px] text-walnut">{lead.category} · {lead.readMinutes} min read</p>
                <h2 className="mt-4 font-serif text-4xl leading-tight text-primary sm:text-5xl">{lead.title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{lead.description}</p>
                <span className="mh-eyebrow mt-6 inline-flex items-center gap-2 text-[10.5px] text-primary">Read <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
              </div>
            </a>

            <div className="mt-20 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map(a => (
                <a key={a.slug} href={`/journal/${a.slug}`} className="group block" data-reveal>
                  <div className="aa-frame relative aspect-[4/3] bg-deep-green">
                    <img src={a.image} alt={a.imageAlt} loading="lazy" className="mh-image-zoom absolute inset-0 h-full w-full object-cover" />
                  </div>
                  <p className="mh-eyebrow mt-5 text-[9.5px] text-walnut">{a.category} · {a.readMinutes} min read</p>
                  <h2 className="mt-3 font-serif text-2xl leading-snug text-primary">{a.title}</h2>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{a.description}</p>
                  <p className="mt-3 text-xs text-muted-foreground/80">{formatDate(a.date)}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
