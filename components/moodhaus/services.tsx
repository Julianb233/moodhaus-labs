import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { services } from "@/lib/moodhaus-content"

/** Design | Visualize | Transform — cards that stack and recede as you scroll. */
export function Services() {
  return (
    <section id="services" className="relative bg-paper py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mh-eyebrow mb-5 text-walnut">What we do</p>
            <h2 className="font-serif text-5xl font-light leading-none text-primary sm:text-7xl">
              Design. Visualize.
              <br />
              <em className="text-walnut">Transform.</em>
            </h2>
          </div>
          <p className="max-w-sm leading-relaxed text-muted-foreground">
            One studio for the house, the land around it, and the photoreal vision that ties them together.
          </p>
        </div>

        <div data-stack className="relative">
          {services.map((service, i) => (
            <article
              key={service.title}
              data-stack-card
              className="sticky mb-10 overflow-hidden rounded-[1.75rem] bg-primary text-primary-foreground mh-shadow-lg"
              style={{ top: `calc(6.5rem + ${i * 1.75}rem)` }}
            >
              <div className="grid min-h-[520px] lg:grid-cols-[.9fr_1.1fr]">
                <div className="flex flex-col justify-between p-8 sm:p-12">
                  <div>
                    <p className="font-serif text-7xl font-light text-accent/70">{service.number}</p>
                    <h3 className="mh-wordmark mt-8 text-3xl font-light sm:text-4xl">{service.title.toUpperCase()}</h3>
                    <p className="mt-3 font-serif text-2xl italic text-accent">{service.subtitle}</p>
                  </div>
                  <div>
                    <p className="mt-10 max-w-md text-lg leading-relaxed text-primary-foreground/75">{service.text}</p>
                    <Link href="/consultation" className="mh-link-underline mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-accent">
                      Start a conversation <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="mh-image-frame relative min-h-[300px] overflow-hidden">
                  <div data-parallax="-10" className="absolute inset-[-10%_0]">
                    <Image src={service.image} alt={service.subtitle} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover mh-image-zoom" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
