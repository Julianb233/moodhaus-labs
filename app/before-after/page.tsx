import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Header } from "@/components/moodhaus/header"
import { Footer } from "@/components/moodhaus/footer"
import { PageHero } from "@/components/moodhaus/page-hero"
import { CTABanner } from "@/components/moodhaus/cta-banner"
import { BeforeAfter } from "@/components/moodhaus/before-after"
import { media, transformations } from "@/lib/moodhaus-content"

export const metadata = { title: "Before & after" }

export default function BeforeAfterPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHero eyebrow="Before & after" title="The same ground," accent="transformed." intro="Drag across each image to compare the site as we found it with the finished home and garden." image={media.sunsetPalmsPool} imageAlt="Infinity pool with palm trees at sunset" />

      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-24 px-6 lg:px-8">
          {transformations.map((item, i) => (
            <article key={item.id} className="grid items-center gap-10 lg:grid-cols-12">
              <div className={"lg:col-span-8 " + (i % 2 === 1 ? "lg:order-2" : "")}>
                <BeforeAfter after={item.after} before={item.before} alt={`${item.title}, ${item.location}`} className="rounded-[6px]" aspect="aspect-[4/3] lg:aspect-[16/10]" sizes="(min-width: 1024px) 65vw, 100vw" priority={i === 0} />
              </div>
              <div className={"lg:col-span-4 " + (i % 2 === 1 ? "lg:order-1" : "")}>
                <p className="mh-eyebrow text-walnut">{String(i + 1).padStart(2, "0")} · {item.location}</p>
                <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-primary sm:text-5xl">{item.title}</h2>
                <p className="mt-5 leading-relaxed text-muted-foreground">{item.summary}</p>
                <p className="mh-eyebrow mt-6 text-[10px] text-foreground/60">{item.scope}</p>
                {item.projectId && (
                  <Link href={"/project/" + item.projectId} className="mh-link-underline mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary">
                    See the project <ArrowUpRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTABanner />
      <Footer />
    </main>
  )
}
