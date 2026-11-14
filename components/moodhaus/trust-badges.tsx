import Link from "next/link"
import { Compass, Layers, Sparkles, Trees } from "lucide-react"

const badges = [
  { icon: Compass, label: "Architectural design" },
  { icon: Trees, label: "Landscape architecture" },
  { icon: Sparkles, label: "Photoreal 3D visualization" },
  { icon: Layers, label: "Concept to completion" },
]

const places = ["La Jolla", "Rancho Santa Fe", "Del Mar", "Coronado", "Point Loma", "Fairbanks Ranch", "Carmel Valley", "Solana Beach"]

export function TrustBadges() {
  const line = places.join("  ·  ") + "  ·  "
  return (
    <section className="border-b border-primary/10 bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-primary/10 sm:grid-cols-4 sm:divide-y-0">
        {badges.map(badge => (
          <Link key={badge.label} href="#capabilities" className="group flex items-center justify-center gap-3 px-4 py-8 text-center mh-transition hover:bg-card sm:flex-col sm:gap-3">
            <badge.icon className="h-5 w-5 shrink-0 text-walnut mh-transition group-hover:-translate-y-0.5" strokeWidth={1.25} />
            <span className="mh-eyebrow text-[10px] text-foreground/70 group-hover:text-primary">{badge.label}</span>
          </Link>
        ))}
      </div>
      <div className="overflow-hidden border-t border-primary/10 bg-primary py-4 text-accent">
        <div className="mh-marquee flex w-max gap-0 font-serif text-2xl italic">
          <span className="whitespace-pre pr-0">Designing across coastal San Diego  ·  {line}</span>
          <span className="whitespace-pre" aria-hidden="true">Designing across coastal San Diego  ·  {line}</span>
        </div>
      </div>
    </section>
  )
}
