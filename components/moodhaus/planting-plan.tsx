"use client"

import { useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

const legend = [
  { id: "olive", label: "Fruitless olive canopy", note: "Afternoon shade on the terrace" },
  { id: "palm", label: "King palms", note: "Height without blocking the view" },
  { id: "bop", label: "Bird of paradise", note: "Colour at the entry and pool" },
  { id: "agave", label: "Agave drifts in gravel", note: "Low water, strong form" },
  { id: "bougie", label: "Bougainvillea on the wall", note: "A screen of colour" },
  { id: "water", label: "Pool and runnel", note: "Sited for the evening sun" },
  { id: "light", label: "Garden lighting", note: "Low, warm, dark-sky friendly" },
] as const

type Id = (typeof legend)[number]["id"]

/** Star symbol used for palms on the plan. */
function Palm({ x, y }: { x: number; y: number }) {
  const spokes = Array.from({ length: 8 }, (_, i) => {
    const a = (i / 8) * Math.PI * 2
    return `M${x} ${y} L${x + Math.cos(a) * 22} ${y + Math.sin(a) * 22}`
  }).join(" ")
  return <path d={spokes} />
}

/** Canopy tree: an outline with a scalloped edge and a trunk point. */
function Canopy({ x, y, r }: { x: number; y: number; r: number }) {
  const pts = Array.from({ length: 13 }, (_, i) => {
    const a = (i / 12) * Math.PI * 2
    const rr = r * (i % 2 ? 0.9 : 1)
    return `${x + Math.cos(a) * rr} ${y + Math.sin(a) * rr}`
  })
  return (
    <>
      <path d={`M${pts[0]} ${pts.slice(1).map(p => `L${p}`).join(" ")} Z`} />
      <circle cx={x} cy={y} r={2.5} />
    </>
  )
}

function Agave({ x, y }: { x: number; y: number }) {
  return <path d={`M${x - 7} ${y} L${x + 7} ${y} M${x} ${y - 7} L${x} ${y + 7} M${x - 5} ${y - 5} L${x + 5} ${y + 5} M${x - 5} ${y + 5} L${x + 5} ${y - 5}`} />
}

/**
 * A planting plan for the demo garden that draws itself as it scrolls into view. Hovering or
 * focusing a legend item picks out that layer on the plan.
 */
export function PlantingPlan() {
  const root = useRef<HTMLElement>(null)
  const [focus, setFocus] = useState<Id | null>(null)

  useLayoutEffect(() => {
    const el = root.current
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const ctx = gsap.context(() => {
      const strokes = gsap.utils.toArray<SVGGeometryElement>("[data-plan] path, [data-plan] rect, [data-plan] circle, [data-plan] polyline")
      strokes.forEach(s => {
        const len = s.getTotalLength ? s.getTotalLength() : 400
        s.style.strokeDasharray = `${len}`
        s.style.strokeDashoffset = `${len}`
      })
      gsap.to(strokes, {
        strokeDashoffset: 0,
        ease: "none",
        stagger: { each: 0.01 },
        scrollTrigger: { trigger: "[data-plan]", start: "top 80%", end: "bottom 60%", scrub: true },
      })
      gsap.fromTo("[data-plan-label]", { autoAlpha: 0 }, { autoAlpha: 1, stagger: 0.05, scrollTrigger: { trigger: "[data-plan]", start: "center 70%", end: "bottom 60%", scrub: true } })
    }, el)
    return () => ctx.revert()
  }, [])

  const layer = (id: Id) => cn("transition-[opacity,stroke-width] duration-500", focus && focus !== id ? "opacity-20" : "opacity-100", focus === id && "[stroke-width:2.2]")

  return (
    <section ref={root} className="relative bg-primary py-24 text-primary-foreground sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.35fr_.65fr] lg:items-center lg:px-8">
        <div className="order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-[6px] border border-accent/20 bg-deep-green/60 p-3 sm:p-6">
            <svg data-plan viewBox="0 0 800 560" className="h-auto w-full text-accent" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Planting plan of the demo garden: house, pool terrace, olive canopy, palms, bird of paradise, agave drifts, bougainvillea wall, and garden lighting">
              {/* grid */}
              <g className="opacity-20" strokeWidth={0.5}>
                {Array.from({ length: 15 }, (_, i) => <path key={"v" + i} d={`M${40 + i * 50} 20 V540`} />)}
                {Array.from({ length: 11 }, (_, i) => <path key={"h" + i} d={`M20 ${40 + i * 50} H780`} />)}
              </g>
              {/* boundary + house */}
              <rect x="20" y="20" width="760" height="520" strokeDasharray="6 6" className="opacity-60" />
              <path d="M70 70 H400 V250 H250 V330 H70 Z" strokeWidth={1.6} />
              <path d="M70 70 L400 250 M400 70 L70 330" className="opacity-25" strokeWidth={0.6} />
              {/* terrace + pool + runnel */}
              <g className={layer("water")}>
                <rect x="430" y="280" width="320" height="120" className="opacity-60" />
                <rect x="460" y="305" width="250" height="62" strokeWidth={1.6} />
                <path d="M460 318 H710 M460 331 H710 M460 344 H710 M460 357 H710" className="opacity-35" strokeWidth={0.6} />
                <path d="M400 210 H520 V280" strokeWidth={1.6} />
              </g>
              {/* path to gate */}
              <path d="M250 330 C 290 410, 360 455, 380 540" strokeDasharray="2 7" />
              <path d="M262 330 C 302 405, 372 450, 394 540" strokeDasharray="2 7" />
              {/* olive canopy */}
              <g className={layer("olive")}>
                <Canopy x={520} y={120} r={42} />
                <Canopy x={625} y={170} r={36} />
                <Canopy x={705} y={95} r={40} />
                <Canopy x={140} y={440} r={44} />
              </g>
              {/* palms */}
              <g className={layer("palm")}>
                <Palm x={455} y={440} />
                <Palm x={735} y={455} />
                <Palm x={600} y={470} />
              </g>
              {/* bird of paradise */}
              <g className={layer("bop")}>
                {[[290, 365], [310, 380], [282, 390], [430, 255], [445, 240], [735, 255], [750, 270]].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r={8} />)}
              </g>
              {/* agave drifts */}
              <g className={layer("agave")}>
                {[[330, 450], [350, 470], [318, 478], [420, 500], [440, 520], [470, 505], [215, 470], [235, 500], [520, 230], [545, 245]].map(([x, y]) => <Agave key={`${x}-${y}`} x={x} y={y} />)}
              </g>
              {/* bougainvillea on the north wall */}
              <g className={layer("bougie")}>
                <polyline points="430,32 450,44 470,32 490,44 510,32 530,44 550,32 570,44 590,32 610,44 630,32 650,44 670,32 690,44 710,32 730,44 750,32" />
              </g>
              {/* lighting */}
              <g className={layer("light")} fill="currentColor">
                {[[275, 360], [300, 420], [340, 480], [375, 520], [455, 410], [600, 440], [735, 425], [520, 165], [705, 140]].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r={3.5} />)}
              </g>
              {/* labels */}
              <g fill="currentColor" stroke="none" className="font-sans" fontSize="11" letterSpacing="2.5">
                <text data-plan-label x="150" y="200">RESIDENCE</text>
                <text data-plan-label x="530" y="392">POOL TERRACE</text>
                <text data-plan-label x="300" y="552">ENTRY</text>
                <text data-plan-label x="664" y="545">PACIFIC →</text>
              </g>
              {/* north arrow */}
              <g transform="translate(60 500)" className="opacity-80">
                <circle cx="0" cy="0" r="16" />
                <path d="M0 -12 L5 6 L0 2 L-5 6 Z" fill="currentColor" />
              </g>
            </svg>
          </div>
          <p className="mh-eyebrow mt-4 text-[10px] text-primary-foreground/50">Planting plan · Illustrative demo garden, La Jolla</p>
        </div>

        <div className="order-1 lg:order-2">
          <p className="mh-eyebrow mb-5 text-accent">The plan</p>
          <h2 className="font-serif text-5xl font-light leading-[.95] sm:text-6xl">
            Every plant <em className="text-accent">has a job.</em>
          </h2>
          <p className="mt-6 leading-relaxed text-primary-foreground/75">We draw the garden like architecture: canopy for shade, structure for silhouette, drifts for texture, and light for the evening. Hover a layer to see where it lives.</p>
          <ol className="mt-8 grid gap-1">
            {legend.map((item, i) => (
              <li key={item.id}>
                <button
                  type="button"
                  onMouseEnter={() => setFocus(item.id)}
                  onMouseLeave={() => setFocus(null)}
                  onFocus={() => setFocus(item.id)}
                  onBlur={() => setFocus(null)}
                  onClick={() => setFocus(focus === item.id ? null : item.id)}
                  className={cn("flex w-full items-baseline gap-4 border-b border-primary-foreground/10 py-3 text-left transition-colors", focus === item.id ? "text-accent" : "text-primary-foreground/85 hover:text-accent")}
                >
                  <span className="font-serif text-lg text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block text-sm font-medium">{item.label}</span>
                    <span className="block text-xs text-primary-foreground/55">{item.note}</span>
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
