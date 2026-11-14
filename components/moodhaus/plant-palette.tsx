import Image from "next/image"
import { plantPalette } from "@/lib/disciplines"

/** The planting palette as a row of specimen cards (swipe on phones, scroll sideways on desktop). */
export function PlantPalette() {
  return (
    <section className="relative overflow-hidden bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div data-reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="mh-eyebrow mb-5 text-walnut">The palette</p>
            <h2 className="font-serif text-5xl font-light leading-[.95] text-primary sm:text-7xl">
              Tropical in feeling, <em className="text-walnut">coastal in habit.</em>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">Plants that thrive in San Diego’s salt air and dry summers, chosen for form first and flowers second. Water need shown on a three-drop scale.</p>
        </div>
      </div>
      <ul className="mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-4 [scrollbar-width:none] sm:gap-6 lg:scroll-px-8 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))] [&::-webkit-scrollbar]:hidden">
        {plantPalette.map((plant, i) => (
          <li key={plant.latin} className="w-[72vw] shrink-0 snap-start sm:w-[300px]">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[6px] bg-card">
              <Image src={plant.image} alt={`${plant.common} (${plant.latin})`} fill sizes="(min-width: 640px) 300px, 72vw" className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(.2,.7,.2,1)] hover:scale-[1.04]" />
              <span className="absolute left-3 top-3 rounded-full bg-paper/90 px-2.5 py-1 font-serif text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <p className="mt-4 font-serif text-xl italic leading-tight text-primary">{plant.latin}</p>
            <div className="mt-1 flex items-center justify-between gap-3">
              <p className="text-sm text-muted-foreground">{plant.common}</p>
              <span className="flex gap-1" aria-label={`Water need ${plant.water} of 3`}>
                {[1, 2, 3].map(d => (
                  <svg key={d} viewBox="0 0 10 14" className={d <= plant.water ? "h-3 w-2.5 fill-bronze" : "h-3 w-2.5 fill-primary/15"} aria-hidden="true">
                    <path d="M5 0 C5 0 0 6 0 9 a5 5 0 0 0 10 0 C10 6 5 0 5 0 Z" />
                  </svg>
                ))}
              </span>
            </div>
            <p className="mh-eyebrow mt-3 text-[9px] text-walnut">{plant.role}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
