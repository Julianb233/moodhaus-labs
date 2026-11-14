import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { Header } from "@/components/header"
import { Monogram } from "@/components/monogram"
import { PageMotion } from "@/components/page-motion"
import { ShareButton } from "@/components/share-button"
import { SiteFooter } from "@/components/site-footer"
import { articles, formatDate, getArticle } from "@/lib/articles"
import { person, STUDIO_URL } from "@/lib/content"

const site = "https://allaieaisha.com"

export function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const a = getArticle((await params).slug)
  if (!a) return {}
  const url = `${site}/journal/${a.slug}`
  return {
    title: `${a.title} · Allaie Aisha`,
    description: a.description,
    keywords: a.keywords,
    alternates: { canonical: url },
    openGraph: { type: "article", url, title: a.title, description: a.description, publishedTime: a.date, authors: [person.name], images: [{ url: a.image, alt: a.imageAlt }] },
    twitter: { card: "summary_large_image", title: a.title, description: a.description, images: [a.image] },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const a = getArticle((await params).slug)
  if (!a) notFound()
  const url = `${site}/journal/${a.slug}`
  const more = articles.filter(x => x.slug !== a.slug).slice(0, 3)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    image: [a.image],
    datePublished: a.date,
    dateModified: a.date,
    author: { "@type": "Person", name: person.name, url: site, jobTitle: person.title },
    publisher: { "@type": "Organization", name: person.studio },
    mainEntityOfPage: url,
    keywords: a.keywords.join(", "),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <PageMotion />
      <main>
        <section data-hero className="relative bg-primary text-primary-foreground">
          <div className="mx-auto max-w-3xl px-6 pb-14 pt-36 lg:pt-44">
            <a href="/journal" className="mh-eyebrow inline-flex items-center gap-2 text-[10px] text-accent hover:opacity-80"><ArrowLeft className="h-3.5 w-3.5" /> The Journal</a>
            <p className="mh-eyebrow mt-10 text-[10px] text-primary-foreground/60">{a.category} · {a.readMinutes} min read</p>
            <h1 className="mt-5 font-serif text-[2.6rem] font-light leading-[1.05] sm:text-6xl">{a.title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/75">{a.description}</p>
            <div className="mt-8 flex items-center gap-4">
              {person.portrait && <img src={person.portrait} alt="" className="h-11 w-11 rounded-full object-cover" />}
              <div className="text-sm">
                <p className="text-primary-foreground">{person.name}</p>
                <p className="text-primary-foreground/60">{formatDate(a.date)}</p>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-[linear-gradient(var(--primary)_50%,var(--paper)_50%)]">
          <div className="mx-auto max-w-5xl px-6">
            <div data-img-reveal className="aa-frame relative aspect-[16/9] bg-deep-green mh-shadow-lg">
              <img src={a.image} alt={a.imageAlt} className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </div>
        </div>

        <article className="bg-paper">
          <div className="mx-auto max-w-2xl px-6 py-16 sm:py-20">
            {a.body.map((b, i) => {
              if (b.type === "h2") return <h2 key={i} className="mb-5 mt-14 font-serif text-3xl leading-tight text-primary sm:text-4xl">{b.text}</h2>
              if (b.type === "ul")
                return (
                  <ul key={i} className="my-7 space-y-3 border-l border-bronze/50 pl-6">
                    {b.items.map((it, k) => <li key={k} className="text-[17px] leading-relaxed text-foreground/85">{it}</li>)}
                  </ul>
                )
              if (b.type === "quote")
                return <blockquote key={i} className="my-12 border-y border-primary/15 py-8 text-center font-serif text-3xl font-light italic leading-snug text-walnut">{b.text}</blockquote>
              return <p key={i} className={"mb-6 text-[17px] leading-[1.8] text-foreground/85" + (i === 0 ? " first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:leading-[.8] first-letter:text-primary" : "")}>{b.text}</p>
            })}

            <div className="mt-16 flex flex-col gap-6 rounded-[6px] bg-primary p-8 text-primary-foreground sm:flex-row sm:items-center">
              <Monogram className="w-12 shrink-0 text-accent" />
              <div className="flex-1">
                <p className="font-serif text-2xl">Planning a home in San Diego County?</p>
                <p className="mt-1 text-sm text-primary-foreground/70">Every project begins with a conversation about how you want to feel.</p>
              </div>
              <a href={STUDIO_URL + "/consultation"} target="_blank" rel="noopener" className="mh-btn inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-primary">
                Book a consultation <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <ShareButton url={url} title={a.title} text={a.description} className="mh-eyebrow mt-8 inline-flex items-center gap-2 text-[10.5px] text-walnut hover:text-primary" />
          </div>
        </article>

        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <p className="mh-eyebrow text-[10.5px] text-walnut">Keep reading</p>
            <div className="mt-8 grid gap-10 sm:grid-cols-3">
              {more.map(m => (
                <a key={m.slug} href={`/journal/${m.slug}`} className="group block">
                  <div className="aa-frame relative aspect-[4/3] bg-deep-green">
                    <img src={m.image} alt={m.imageAlt} loading="lazy" className="mh-image-zoom absolute inset-0 h-full w-full object-cover" />
                  </div>
                  <p className="mh-eyebrow mt-4 text-[9.5px] text-walnut">{m.category}</p>
                  <h3 className="mt-2 font-serif text-2xl leading-snug text-primary">{m.title}</h3>
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
