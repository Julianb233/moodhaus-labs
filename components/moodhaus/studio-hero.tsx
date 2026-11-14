"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { moods } from "@/lib/moods"
import { cn } from "@/lib/utils"

/** Full-bleed opening that cycles through the moods: the room and the word change together. */
export function StudioHero() {
  const [i, setI] = useState(0)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const id = window.setInterval(() => setI(v => (v + 1) % moods.length), 3200)
    return () => window.clearInterval(id)
  }, [])

  const m = moods[i]
  return (
    <section className="relative h-[100svh] min-h-[640px] overflow-hidden bg-primary text-primary-foreground">
      {moods.map((mood, k) => (
        <div key={mood.key} aria-hidden={k !== i} className={cn("absolute inset-0 transition-[opacity,transform] duration-[1600ms] ease-[cubic-bezier(.2,.7,.2,1)]", k === i ? "scale-100 opacity-100" : "scale-[1.08] opacity-0")}>
          <Image src={mood.image} alt={k === i ? mood.alt : ""} fill priority={k === 0} sizes="100vw" className="object-cover" />
        </div>
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,26,22,.55)_0%,rgba(20,26,22,.1)_35%,rgba(20,26,22,.55)_65%,rgba(20,26,22,.9)_100%)]" />
      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-12 lg:px-8 lg:pb-16">
        <p className="mh-eyebrow mb-6 text-accent">The studio · San Diego County</p>
        <h1 className="font-serif text-[13.5vw] font-light leading-[.9] sm:text-8xl lg:text-[8.5rem]">
          Designed
          <br />
          to feel{" "}
          <span className="relative inline-block overflow-hidden align-bottom">
            <em key={m.key} className="inline-block pb-[.08em] text-accent" style={{ animation: "mh-rise .9s cubic-bezier(.2,.7,.2,1)" }}>
              {m.name.toLowerCase()}.
            </em>
          </span>
        </h1>
        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <p className="max-w-xl text-lg leading-relaxed text-primary-foreground/80">
            Before we draw a single line we ask one question: how do you want to feel here? Then we design the light, the materials and the rooms around the answer.
          </p>
          <p className="mh-eyebrow text-[10px] text-primary-foreground/70" aria-live="polite">
            {String(i + 1).padStart(2, "0")} / {String(moods.length).padStart(2, "0")} · {m.space}
          </p>
        </div>
      </div>
    </section>
  )
}
