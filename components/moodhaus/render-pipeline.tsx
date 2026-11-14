"use client"

import { useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { renderStages } from "@/lib/disciplines"
import { cn } from "@/lib/utils"
import { InkFilter, stageFilter } from "./ink-filter"

gsap.registerPlugin(ScrollTrigger)

/**
 * One frame, four passes: linework, clay, materials, light. The stage holds while the passes
 * dissolve into each other; the rail and caption follow. Tapping a stage jumps to it.
 */
export function RenderPipeline({ image, alt }: { image: string; alt: string }) {
  const root = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)
  const n = renderStages.length

  useLayoutEffect(() => {
    const el = root.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(el.querySelectorAll("[data-rp-layer]"), { autoAlpha: 1 })
      setActive(n - 1)
      return
    }
    const ctx = gsap.context(() => {
      const layers = gsap.utils.toArray<HTMLElement>("[data-rp-layer]")
      gsap.set(layers.slice(1), { autoAlpha: 0 })
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          onUpdate: self => setActive(Math.min(n - 1, Math.floor(self.progress * n * 0.999 + 0.08))),
        },
      })
      tl.to({}, { duration: 0.35 })
      layers.slice(1).forEach(layer => {
        tl.to(layer, { autoAlpha: 1, duration: 0.5, ease: "power1.inOut" }).to({}, { duration: 0.5 })
      })
      tl.fromTo("[data-rp-frame]", { scale: 1.05 }, { scale: 1, duration: tl.duration() }, 0)
    }, el)
    return () => ctx.revert()
  }, [n])

  const jump = (i: number) => {
    const el = root.current
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY
    const span = el.offsetHeight - window.innerHeight
    const target = top + span * ((i + 0.55) / n)
    const lenis = (window as unknown as { __lenis?: { scrollTo: (y: number, o?: object) => void } }).__lenis
    if (lenis) lenis.scrollTo(target, { duration: 1.4 })
    else window.scrollTo({ top: target, behavior: "smooth" })
  }

  return (
    <section ref={root} className="relative h-[320vh] bg-primary text-primary-foreground">
      <InkFilter />
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden px-4 pb-8 pt-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[1fr_20rem] lg:items-end lg:gap-10">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[6px] bg-paper sm:aspect-[16/10]">
            <div data-rp-frame className="absolute inset-0">
              {renderStages.map((stage, i) => (
                <div key={stage.key} data-rp-layer className="absolute inset-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    alt={i === n - 1 ? alt : ""}
                    aria-hidden={i === n - 1 ? undefined : true}
                    data-no-fade
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{ filter: stageFilter[stage.key] }}
                  />
                </div>
              ))}
            </div>
            <p className="mh-eyebrow absolute left-4 top-4 rounded-full bg-primary/70 px-3 py-1.5 text-[10px] text-accent backdrop-blur-sm">
              Pass {String(active + 1).padStart(2, "0")} · {renderStages[active].label}
            </p>
          </div>
          <div>
            <p className="mh-eyebrow mb-3 text-accent">How a render is made</p>
            <h2 className="font-serif text-4xl font-light leading-none sm:text-5xl">
              Four passes, <em className="text-accent">one frame.</em>
            </h2>
            <p className="mt-4 min-h-[4.5rem] text-sm leading-relaxed text-primary-foreground/75 sm:text-base">{renderStages[active].text}</p>
            <div className="mt-5 grid grid-cols-4 gap-2" role="tablist" aria-label="Render passes">
              {renderStages.map((stage, i) => (
                <button
                  key={stage.key}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  onClick={() => jump(i)}
                  className="group text-left"
                >
                  <span className={cn("block h-px w-full transition-colors duration-500", i <= active ? "bg-accent" : "bg-primary-foreground/25")} />
                  <span className={cn("mt-3 block text-[9px] font-medium uppercase tracking-[0.12em] transition-opacity duration-500 sm:text-[10px] sm:tracking-[0.2em]", i === active ? "opacity-100" : "opacity-55 group-hover:opacity-90")}>{stage.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
