import Image from "next/image"
import { Compass, Eye, Leaf } from "lucide-react"
import { Header } from "@/components/moodhaus/header"
import { Footer } from "@/components/moodhaus/footer"
import { PageHero } from "@/components/moodhaus/page-hero"
import { Services } from "@/components/moodhaus/services"
import { CTABanner } from "@/components/moodhaus/cta-banner"
import { media, studio } from "@/lib/moodhaus-content"

export const metadata = { title: "The studio" }

const values = [
  { icon: Compass, title: "Site first", text: "Every design begins by walking the land: its slope, its winds, the hour the light hits the ocean. The house follows." },
  { icon: Eye, title: "See it before you build it", text: "Photoreal visualization means you experience the home at dawn and dusk long before construction begins." },
  { icon: Leaf, title: "Built to age beautifully", text: "Natural stone, timber, and native coastal planting that soften and settle into the landscape over decades." },
]

export default function StudioPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHero eyebrow="The studio" title="Design, visualize," accent="transform." intro={`${studio.name} is a San Diego architecture and landscape design studio led by founder and principal designer ${studio.founder}.`} image={media.coastBay} imageAlt="San Diego bay with homes on the cliffs" />

      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[6px]">
            <Image src={media.stoneSteps} alt="Curved stone steps leading into a garden" fill sizes="(min-width: 1024px) 35vw, 90vw" className="object-cover" />
          </div>
          <div>
            <p className="mh-eyebrow mb-5 text-walnut">{studio.founder} · {studio.founderTitle}</p>
            <h2 className="font-serif text-5xl font-light leading-[.95] text-primary sm:text-7xl">
              Exceptional spaces
              <br />
              <em className="text-walnut">for everyday living.</em>
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We believe the most luxurious homes are the ones that make ordinary days extraordinary: morning light in the kitchen, a garden that changes with the seasons, a terrace that pulls you outside at sunset. Our work joins architecture, landscape, and visualization into one calm, carefully guided process.
            </p>
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {values.map(v => (
                <article key={v.title} className="mh-card rounded-[6px] border border-primary/10 bg-paper p-6">
                  <v.icon className="mb-8 h-6 w-6 text-walnut" strokeWidth={1.25} />
                  <h3 className="font-serif text-2xl text-primary">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Services />
      <CTABanner />
      <Footer />
    </main>
  )
}
