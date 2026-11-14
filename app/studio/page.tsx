import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Header } from "@/components/moodhaus/header"
import { Footer } from "@/components/moodhaus/footer"
import { CTABanner } from "@/components/moodhaus/cta-banner"
import { PageMotion } from "@/components/moodhaus/page-motion"
import { StudioHero } from "@/components/moodhaus/studio-hero"
import { MoodExplorer } from "@/components/moodhaus/mood-explorer"
import { DisciplineDoors } from "@/components/moodhaus/discipline-doors"
import { dMedia } from "@/lib/disciplines"
import { studio } from "@/lib/moodhaus-content"

export const metadata: Metadata = {
  title: "The studio",
  description: "Moodhaus Labs designs homes and gardens across San Diego County around the mood you want to live in: playful, elegant, warm, serene, dramatic, grounded or fresh.",
}

const brief = [
  { n: "01", title: "Name the feeling", text: "For every space we agree on a mood and the moments it should hold: a Sunday breakfast, a dinner for twelve, the last swim of the day." },
  { n: "02", title: "Tune the levers", text: "Light temperature, palette, materials, proportion, sound and planting are chosen to create that feeling, room by room." },
  { n: "03", title: "Feel it before it is built", text: "You stand in each room in photoreal 3D at morning, golden hour and night, and we adjust until it feels right." },
]

export default function StudioPage() {
  return (
    <main className="min-h-screen">
      <PageMotion />
      <Header />
      <StudioHero />

      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[.85fr_1.15fr] lg:gap-20 lg:px-8">
          <div data-img-reveal className="relative aspect-[4/5] overflow-hidden rounded-[6px]">
            <Image src={dMedia.drawHands} alt="Designer sketching a plan by hand" fill sizes="(min-width: 1024px) 38vw, 90vw" className="object-cover" />
          </div>
          <div data-reveal>
            <p className="mh-eyebrow mb-5 text-walnut">{studio.founder} · {studio.founderTitle}</p>
            <h2 className="font-serif text-5xl font-light leading-[.95] text-primary sm:text-7xl">
              A feeling first,
              <br />
              <em className="text-walnut">then a floor plan.</em>
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {studio.name} is an architecture and landscape design studio working across San Diego County, from the coast to the canyons. We believe a home should be designed the way a great hotel or restaurant is: around how each space should make you feel. Then we draw it, show it to you in photoreal 3D, and hand your builder a design so complete it can be built exactly as you saw it.
            </p>
            <Link href="/process" className="mh-link-underline mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary">
              How we work <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <MoodExplorer />

      <section className="bg-card py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div data-reveal className="max-w-3xl">
            <p className="mh-eyebrow mb-5 text-walnut">Your mood brief</p>
            <h2 className="font-serif text-5xl font-light leading-[.95] text-primary sm:text-7xl">
              Every room, <em className="text-walnut">designed backwards from a feeling.</em>
            </h2>
          </div>
          <ol className="mt-16 grid gap-10 sm:grid-cols-3 sm:gap-8">
            {brief.map(step => (
              <li key={step.n} data-reveal className="border-t border-primary/15 pt-6">
                <p className="font-serif text-6xl font-light text-bronze">{step.n}</p>
                <h3 className="mt-4 font-serif text-3xl text-primary">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <DisciplineDoors />
      <CTABanner />
      <Footer />
    </main>
  )
}
