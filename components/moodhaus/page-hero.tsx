import Image from "next/image"
import { TopoDrift } from "./topo-drift"

export function PageHero({ eyebrow, title, accent, intro, image, imageAlt }: { eyebrow: string; title: string; accent: string; intro: string; image?: string; imageAlt?: string }) {
  return (
    <section className="relative overflow-hidden bg-primary pb-20 pt-40 text-primary-foreground sm:pb-28 sm:pt-48">
      {image && (
        <div className="absolute inset-0">
          <Image src={image} alt={imageAlt || ""} fill priority sizes="100vw" className="object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/30" />
        </div>
      )}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_left,black,transparent_75%)]" aria-hidden="true">
        <TopoDrift opacity={0.28} />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mh-eyebrow mb-6 text-accent">{eyebrow}</p>
        <h1 className="max-w-4xl font-serif text-6xl font-light leading-[.92] sm:text-8xl">
          {title}
          <br />
          <em className="text-accent">{accent}</em>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-primary-foreground/75">{intro}</p>
      </div>
    </section>
  )
}
