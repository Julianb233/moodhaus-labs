"use client"

import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { InkFilter, stageFilter } from "./ink-filter"

gsap.registerPlugin(ScrollTrigger)

/**
 * The drawing becomes the house. The stage holds while scrolling; a gold rule sweeps across
 * and the built home is revealed behind it, the same frame throughout.
 */
export function LineToLight({ image, alt, eyebrow, title, accent, from = "The drawing", to = "The home" }: { image: string; alt: string; eyebrow: string; title: string; accent: string; from?: string; to?: string }) {
  const root = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const el = root.current
    if (!el) return
    const photo = el.querySelector<HTMLElement>("[data-ltl-photo]")
    const rule = el.querySelector<HTMLElement>("[data-ltl-rule]")
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (photo) photo.style.clipPath = "none"
      return
    }
    const state = { p: 0 }
    const paint = () => {
      const right = 100 - state.p * 100
      if (photo) photo.style.clipPath = `inset(0% ${right}% 0% 0%)`
      if (rule) rule.style.left = `${state.p * 100}%`
    }
    paint()
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "none" }, scrollTrigger: { trigger: el, start: "top top", end: "bottom bottom", scrub: true } })
      tl.to({}, { duration: 0.12 })
        .to(state, { p: 1, duration: 0.7, ease: "power1.inOut", onUpdate: paint })
        .to("[data-ltl-from]", { autoAlpha: 0.35, duration: 0.2 }, 0.45)
        .fromTo("[data-ltl-to]", { autoAlpha: 0.35 }, { autoAlpha: 1, duration: 0.2 }, 0.55)
        .to(rule, { autoAlpha: 0, duration: 0.06 }, 0.8)
        .fromTo("[data-ltl-img]", { scale: 1.06 }, { scale: 1, duration: 1 }, 0)
        .to({}, { duration: 0.18 })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="relative h-[230vh] bg-card lg:h-[260vh]">
      <InkFilter />
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto mb-6 flex w-full max-w-7xl flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mh-eyebrow mb-3 text-walnut">{eyebrow}</p>
            <h2 className="font-serif text-4xl font-light leading-none text-primary sm:text-6xl">
              {title} <em className="text-walnut">{accent}</em>
            </h2>
          </div>
          <div className="mh-eyebrow flex items-center gap-3 text-[10px] text-primary">
            <span data-ltl-from>{from}</span>
            <span className="h-px w-10 bg-bronze" />
            <span data-ltl-to className="opacity-35">{to}</span>
          </div>
        </div>
        <div className="relative mx-auto aspect-[4/5] w-full max-w-7xl overflow-hidden rounded-[6px] bg-paper sm:aspect-[16/9]">
          <div data-ltl-img className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt="" aria-hidden="true" data-no-fade className="absolute inset-0 h-full w-full object-cover" style={{ filter: stageFilter.line }} />
            <div data-ltl-photo className="absolute inset-0" style={{ clipPath: "inset(0% 100% 0% 0%)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image} alt={alt} data-no-fade className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </div>
          <span data-ltl-rule className="pointer-events-none absolute inset-y-0 left-0 w-px bg-accent shadow-[0_0_24px_rgba(211,191,153,.9)]" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
