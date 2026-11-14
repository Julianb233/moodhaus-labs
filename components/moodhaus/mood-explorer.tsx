"use client"

import { useLayoutEffect, useRef, useState } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { moods } from "@/lib/moods"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

/**
 * Seven moods, seven spaces. On desktop the stage holds while you scroll and the room, colour
 * and design levers change mood by mood; the list on the left jumps straight to one.
 * On phones it is a swipeable row of moods above the same stage.
 */
export function MoodExplorer() {
  const root = useRef<HTMLElement>(null)
  const chips = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const n = moods.length
  const m = moods[active]

  useLayoutEffect(() => {
    const el = root.current
    if (!el) return
    const mm = gsap.matchMedia()
    mm.add("(min-width: 1024px)", () => {
      ScrollTrigger.create({
        trigger: el,
        start: "top top",
        end: "bottom bottom",
        onUpdate: self => setActive(Math.min(n - 1, Math.floor(self.progress * n * 0.999))),
      })
    })
    return () => mm.revert()
  }, [n])

  // Keep the active chip in view on phones.
  useLayoutEffect(() => {
    const row = chips.current
    const chip = row?.children[active] as HTMLElement | undefined
    if (row && chip && window.innerWidth < 1024) row.scrollTo({ left: chip.offsetLeft - 24, behavior: "smooth" })
  }, [active])

  const choose = (i: number) => {
    const el = root.current
    if (!el || window.innerWidth < 1024) return setActive(i)
    const top = el.getBoundingClientRect().top + window.scrollY
    const span = el.offsetHeight - window.innerHeight
    const target = top + span * ((i + 0.5) / n)
    const lenis = (window as unknown as { __lenis?: { scrollTo: (y: number, o?: object) => void } }).__lenis
    if (lenis) lenis.scrollTo(target, { duration: 1.4 })
    else window.scrollTo({ top: target, behavior: "smooth" })
  }

  return (
    <section
      ref={root}
      aria-label="Designed for a mood"
      className="relative transition-colors duration-[1100ms] ease-[cubic-bezier(.2,.7,.2,1)] lg:h-[700vh]"
      style={{ backgroundColor: m.bg, color: m.fg }}
    >
      <div className="flex flex-col py-20 lg:sticky lg:top-0 lg:h-[100svh] lg:justify-center lg:py-0 lg:pt-16">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 lg:mb-6">
            <div>
              <p className="mh-eyebrow mb-3 transition-colors duration-700" style={{ color: m.accent }}>The mood library</p>
              <h2 className="font-serif text-4xl font-light leading-[.95] sm:text-6xl lg:text-5xl xl:text-6xl">
                How do you want <em className="transition-colors duration-700" style={{ color: m.accent }}>to feel?</em>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed opacity-75">Every space we design begins with a feeling. Here are seven, and the decisions that create each one.</p>
          </div>
        </div>

        {/* Phone: mood chips */}
        <div ref={chips} className="mt-8 flex gap-2 overflow-x-auto px-6 pb-2 [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden" role="tablist" aria-label="Moods">
          {moods.map((mood, i) => (
            <button
              key={mood.key}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => choose(i)}
              className={cn("shrink-0 rounded-full border px-4 py-2 font-serif text-lg transition-colors duration-500", i === active ? "border-transparent" : "border-current/25 opacity-70")}
              style={i === active ? { backgroundColor: m.accent, color: m.bg } : { borderColor: "color-mix(in srgb, currentColor 25%, transparent)" }}
            >
              {mood.name}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-6 grid w-full max-w-7xl gap-8 px-6 lg:mt-0 lg:grid-cols-[13rem_1fr_19rem] lg:items-center lg:gap-10 lg:px-8">
          {/* Desktop: mood list */}
          <ol className="hidden lg:block" role="tablist" aria-label="Moods">
            {moods.map((mood, i) => (
              <li key={mood.key}>
                <button type="button" role="tab" aria-selected={i === active} onClick={() => choose(i)} className="group flex w-full items-baseline gap-3 py-1.5 text-left">
                  <span className="mh-eyebrow w-6 text-[9px] opacity-50">{String(i + 1).padStart(2, "0")}</span>
                  <span
                    className={cn("font-serif text-[1.65rem] leading-tight transition-all duration-500", i === active ? "translate-x-1 italic" : "opacity-40 group-hover:opacity-80")}
                    style={i === active ? { color: m.accent } : undefined}
                  >
                    {mood.name}
                  </span>
                </button>
              </li>
            ))}
          </ol>

          {/* Stage */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] sm:aspect-[16/11] lg:aspect-auto lg:h-[min(62svh,40rem)]">
              {moods.map((mood, i) => (
                <div
                  key={mood.key}
                  aria-hidden={i !== active}
                  className={cn("absolute inset-0 transition-[opacity,transform] duration-[1100ms] ease-[cubic-bezier(.2,.7,.2,1)]", i === active ? "scale-100 opacity-100" : "scale-[1.06] opacity-0")}
                >
                  <Image src={mood.image} alt={mood.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" priority={i === 0} />
                </div>
              ))}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7">
                <p className="mh-eyebrow text-[10px] text-white/75">{m.space}</p>
                <p key={m.key} className="mt-2 font-serif text-5xl font-light leading-none sm:text-7xl" style={{ animation: "mh-rise .9s cubic-bezier(.2,.7,.2,1)" }}>
                  {m.name}
                </p>
              </div>
            </div>
            {/* A second, smaller view of the same mood */}
            <div className="absolute -right-3 -top-6 hidden w-[28%] overflow-hidden rounded-[6px] shadow-[0_24px_60px_-20px_rgba(0,0,0,.6)] sm:block lg:-right-8">
              <div className="relative aspect-[4/5]">
                {moods.map((mood, i) => (
                  <div key={mood.key} aria-hidden="true" className={cn("absolute inset-0 transition-opacity delay-150 duration-1000", i === active ? "opacity-100" : "opacity-0")}>
                    <Image src={mood.detail} alt="" fill sizes="15vw" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Detail */}
          <div key={m.key} style={{ animation: "mh-rise .8s cubic-bezier(.2,.7,.2,1)" }}>
            <p className="font-serif text-xl italic leading-snug sm:text-2xl lg:text-xl">{m.line}</p>
            <p className="mh-eyebrow mt-5 text-[10px]" style={{ color: m.accent }}>{m.feelings.join(" · ")}</p>
            <div className="mt-5 flex gap-2" aria-label="Palette">
              {m.swatches.map(s => (
                <span key={s.hex} className="group relative flex-1">
                  <span className="block h-10 rounded-[4px] ring-1 ring-black/10" style={{ backgroundColor: s.hex }} />
                  <span className="mt-1.5 block text-[10px] leading-tight opacity-60">{s.name}</span>
                </span>
              ))}
            </div>
            <dl className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 lg:gap-2.5">
              {m.levers.map(l => (
                <div key={l.label} className="border-t pt-2.5" style={{ borderColor: "color-mix(in srgb, currentColor 18%, transparent)" }}>
                  <dt className="mh-eyebrow text-[9px] opacity-60">{l.label}</dt>
                  <dd className="mt-1 text-sm leading-snug opacity-90 lg:text-[13px]">{l.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Desktop progress */}
        <div className="mx-auto mt-8 hidden w-full max-w-7xl gap-1.5 px-8 lg:flex" aria-hidden="true">
          {moods.map((mood, i) => (
            <span key={mood.key} className="h-px flex-1 transition-colors duration-500" style={{ backgroundColor: i <= active ? m.accent : "color-mix(in srgb, currentColor 18%, transparent)" }} />
          ))}
        </div>
      </div>
    </section>
  )
}
