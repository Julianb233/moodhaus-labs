"use client"

import { useEffect, useState } from "react"
import { moods } from "@/lib/content"
import { cn } from "@/lib/utils"

/**
 * Desktop: a list of moods beside one framed photograph that crossfades as you hover or tap.
 * Phone: a swipeable row of framed cards (no pinning, no scroll hijack).
 */
export function MoodSelector() {
  const [active, setActive] = useState(0)
  const [auto, setAuto] = useState(true)

  useEffect(() => {
    if (!auto || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const id = window.setInterval(() => setActive(v => (v + 1) % moods.length), 4200)
    return () => window.clearInterval(id)
  }, [auto])

  const pick = (i: number) => {
    setAuto(false)
    setActive(i)
  }

  return (
    <>
      {/* Desktop */}
      <div className="hidden grid-cols-12 gap-12 lg:grid">
        <ul className="col-span-5 self-center" onMouseLeave={() => setAuto(true)}>
          {moods.map((m, i) => (
            <li key={m.name}>
              <button
                type="button"
                onMouseEnter={() => pick(i)}
                onFocus={() => pick(i)}
                onClick={() => pick(i)}
                aria-pressed={i === active}
                className="group flex w-full items-baseline gap-6 border-b border-primary-foreground/12 py-4 text-left"
              >
                <span className="mh-eyebrow w-8 text-[10px] text-accent/80">{String(i + 1).padStart(2, "0")}</span>
                <span className={cn("font-serif text-5xl font-light transition-[color,transform] duration-700 ease-[cubic-bezier(.16,1,.3,1)]", i === active ? "translate-x-2 italic text-accent" : "text-primary-foreground/55 group-hover:text-primary-foreground")}>
                  {m.name}
                </span>
                <span className={cn("ml-auto text-right text-xs tracking-wide transition-opacity duration-500", i === active ? "opacity-80" : "opacity-0")}>{m.space}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="col-span-7">
          <div className="aa-frame relative aspect-[4/5] max-h-[78vh] w-full bg-deep-green">
            {moods.map((m, i) => (
              <img
                key={m.name}
                src={m.image}
                alt={i === active ? m.alt : ""}
                aria-hidden={i !== active}
                loading={i < 2 ? "eager" : "lazy"}
                data-no-fade=""
                className={cn("absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[1400ms] ease-[cubic-bezier(.2,.7,.2,1)]", i === active ? "scale-100 opacity-100" : "scale-[1.06] opacity-0")}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-8 pt-24">
              <p key={active} className="max-w-md font-serif text-2xl italic leading-snug text-primary-foreground" style={{ animation: "mh-rise .9s cubic-bezier(.2,.7,.2,1)" }}>
                {moods[active].line}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Phone and tablet */}
      <div className="aa-snap -mx-6 flex gap-4 overflow-x-auto px-6 pb-2 lg:hidden">
        {moods.map((m, i) => (
          <figure key={m.name} className="w-[78%] shrink-0 sm:w-[46%]">
            <div className="aa-frame relative aspect-[4/5] bg-deep-green">
              <img src={m.image} alt={m.alt} loading={i < 2 ? "eager" : "lazy"} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5 pt-20">
                <p className="mh-eyebrow text-[9.5px] text-accent">{String(i + 1).padStart(2, "0")} · {m.space}</p>
                <p className="mt-2 font-serif text-4xl font-light italic text-primary-foreground">{m.name}</p>
              </div>
            </div>
            <figcaption className="mt-3 text-sm leading-relaxed text-primary-foreground/70">{m.line}</figcaption>
          </figure>
        ))}
      </div>
    </>
  )
}
