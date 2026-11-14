"use client"

import { useLayoutEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowUpRight } from "lucide-react"
import { capabilities, capabilityDemo } from "@/lib/moodhaus-content"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

/**
 * "One La Jolla home, four disciplines." On desktop the section pins and each capability
 * rises over the last like a curtain (outer layer slides up while the photo inside slides
 * down, so the image appears to stay put), with the copy and the four-step rail changing in
 * step. On small screens it becomes a simple stack of image cards.
 */
export function CapabilityJourney() {
  const root = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)
  const total = capabilities.length

  useLayoutEffect(() => {
    const el = root.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const mm = gsap.matchMedia()
    mm.add("(min-width: 1024px)", () => {
      const layers = gsap.utils.toArray<HTMLElement>("[data-cap-layer]", el)
      const inners = gsap.utils.toArray<HTMLElement>("[data-cap-inner]", el)
      const copies = gsap.utils.toArray<HTMLElement>("[data-cap-copy]", el)
      const fills = gsap.utils.toArray<HTMLElement>("[data-cap-fill]", el)

      gsap.set(layers.slice(1), { yPercent: 100 })
      gsap.set(inners.slice(1), { yPercent: -100, scale: 1.12 })
      gsap.set(copies.slice(1), { autoAlpha: 0, y: 40 })
      gsap.set(fills, { scaleX: 0 })

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: () => "+=" + window.innerHeight * (total - 0.4) * 1.1,
          pin: "[data-cap-stage]",
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: self => setActive(Math.min(total - 1, Math.floor(self.progress * total))),
        },
      })

      // Each step: hold, then the next image rises while its copy crossfades.
      fills.forEach((fill, i) => {
        const at = i
        tl.to(fill, { scaleX: 1, duration: 1 }, at)
        tl.to(inners[i], { scale: 1.04, duration: 1 }, at)
        if (i < total - 1) {
          tl.to(layers[i + 1], { yPercent: 0, duration: 0.55, ease: "power2.inOut" }, at + 0.45)
            .to(inners[i + 1], { yPercent: 0, scale: 1, duration: 0.55, ease: "power2.inOut" }, at + 0.45)
            .to(copies[i], { autoAlpha: 0, y: -30, duration: 0.2, ease: "power1.in" }, at + 0.45)
            .to(copies[i + 1], { autoAlpha: 1, y: 0, duration: 0.28, ease: "power2.out" }, at + 0.62)
        }
      })
    })
    // This section's pin sits above pins that HomeMotion created earlier; re-order and
    // re-measure so every pin below accounts for this one's scroll length.
    ScrollTrigger.sort()
    ScrollTrigger.refresh()
    return () => mm.revert()
  }, [total])

  return (
    <section id="capabilities" ref={root} className="relative bg-deep-green text-primary-foreground">
      {/* Desktop: pinned stage */}
      <div data-cap-stage className="relative hidden h-[100svh] overflow-hidden lg:block">
        {capabilities.map((cap, i) => (
          <div key={cap.key} data-cap-layer className="absolute inset-0 overflow-hidden will-change-transform" style={{ zIndex: i + 1 }}>
            <div data-cap-inner className="absolute inset-0 will-change-transform">
              <Image src={cap.image} alt={cap.alt} fill sizes="100vw" priority={i === 0} className="object-cover" />
              {cap.key === "design" && <div className="mh-blueprint absolute inset-0" aria-hidden="true" />}
            </div>
          </div>
        ))}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-deep-green/90 via-deep-green/45 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-56 bg-gradient-to-t from-deep-green/90 to-transparent" />

        <div className="absolute inset-0 z-20 mx-auto flex max-w-7xl flex-col justify-between px-8 pb-12 pt-32">
          <div className="flex items-center gap-4">
            <p className="mh-eyebrow text-accent">{capabilityDemo.name} · {capabilityDemo.place}</p>
            <span className="h-px w-10 bg-accent/50" />
            <p className="mh-eyebrow text-[10px] text-primary-foreground/60">{capabilityDemo.note}</p>
          </div>

          <div className="relative min-h-[22rem] max-w-xl">
            {capabilities.map((cap, i) => (
              <div key={cap.key} data-cap-copy className="absolute inset-x-0 top-0">
                <p className="font-serif text-7xl font-light leading-none text-accent/90">{String(i + 1).padStart(2, "0")}</p>
                <p className="mh-eyebrow mt-6 text-accent">{cap.label}</p>
                <h2 className="mt-3 font-serif text-5xl font-light leading-[1.02] xl:text-6xl">{cap.title}</h2>
                <p className="mt-5 max-w-lg leading-relaxed text-primary-foreground/80">{cap.text}</p>
                <ul className="mt-6 grid gap-2 text-sm text-primary-foreground/85">
                  {cap.facts.map(f => (
                    <li key={f} className="flex items-center gap-3"><span className="h-px w-5 bg-accent" />{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-6">
            {capabilities.map((cap, i) => (
              <div key={cap.key} className={cn("mh-transition", i === active ? "opacity-100" : "opacity-55")}>
                <span className="relative block h-px w-full bg-primary-foreground/25">
                  <span data-cap-fill className="absolute inset-0 origin-left bg-accent" />
                </span>
                <p className="mh-eyebrow mt-4 text-[10px]">{String(i + 1).padStart(2, "0")} · {cap.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile / tablet: stacked */}
      <div className="px-6 py-24 lg:hidden">
        <p className="mh-eyebrow text-accent">{capabilityDemo.name} · {capabilityDemo.place}</p>
        <h2 className="mt-4 font-serif text-5xl font-light leading-none">One home, <em className="text-accent">four disciplines.</em></h2>
        <p className="mh-eyebrow mt-3 text-[10px] text-primary-foreground/60">{capabilityDemo.note}</p>
        <div className="mt-12 grid gap-14">
          {capabilities.map((cap, i) => (
            <article key={cap.key}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] sm:aspect-[16/10]">
                <Image src={cap.image} alt={cap.alt} fill sizes="100vw" className="object-cover" />
                {cap.key === "design" && <div className="mh-blueprint absolute inset-0" aria-hidden="true" />}
                <span className="absolute left-4 top-4 font-serif text-4xl text-accent">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <p className="mh-eyebrow mt-6 text-accent">{cap.label}</p>
              <h3 className="mt-2 font-serif text-3xl font-light">{cap.title}</h3>
              <p className="mt-3 leading-relaxed text-primary-foreground/80">{cap.text}</p>
            </article>
          ))}
        </div>
        <Link href="/consultation" className="mh-btn mt-12 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          Start your project <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
