"use client"

import { KeyboardEvent, PointerEvent, useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

type Props = {
  after: string
  /** A real "before" photo from the same viewpoint. Without one, a concept-render treatment of `after` is shown. */
  before?: string
  alt: string
  className?: string
  /** Tailwind aspect class for the frame. */
  aspect?: string
  sizes?: string
  /** Sweep the divider once when it first comes into view, to show it can be dragged. */
  hint?: boolean
  priority?: boolean
}

/**
 * Before/after comparison. Drag (mouse or touch), click anywhere, or use the arrow keys.
 * The "before" image sits on top, clipped to the left of the divider.
 */
export function BeforeAfter({ after, before, alt, className, aspect = "aspect-[4/3]", sizes = "(min-width: 1024px) 60vw, 100vw", hint = true, priority }: Props) {
  const [pos, setPos] = useState(50)
  const frame = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)
  const touched = useRef(false)
  const concept = !before
  const beforeLabel = "Before"
  const afterLabel = "After"

  const fromClientX = useCallback((clientX: number) => {
    const box = frame.current?.getBoundingClientRect()
    if (!box) return
    setPos(Math.min(100, Math.max(0, ((clientX - box.left) / box.width) * 100)))
  }, [])

  const onDown = (e: PointerEvent<HTMLDivElement>) => {
    touched.current = true
    dragging.current = true
    e.currentTarget.setPointerCapture(e.pointerId)
    fromClientX(e.clientX)
  }
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (dragging.current) fromClientX(e.clientX)
  }
  const onUp = () => {
    dragging.current = false
  }
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const step = e.shiftKey ? 10 : 4
    if (e.key === "ArrowLeft") setPos(p => Math.max(0, p - step))
    else if (e.key === "ArrowRight") setPos(p => Math.min(100, p + step))
    else if (e.key === "Home") setPos(0)
    else if (e.key === "End") setPos(100)
    else return
    touched.current = true
    e.preventDefault()
  }

  // A slow, single sweep the first time the slider is properly in view.
  useEffect(() => {
    if (!hint || !frame.current) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const state = { p: 50 }
    let tl: gsap.core.Timeline | null = null
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || touched.current) return
        io.disconnect()
        tl = gsap
          .timeline({ delay: 0.3, onUpdate: () => !touched.current && setPos(state.p) })
          .to(state, { p: 22, duration: 1.1, ease: "power2.inOut" })
          .to(state, { p: 74, duration: 1.5, ease: "power2.inOut" })
          .to(state, { p: 50, duration: 1.1, ease: "power2.inOut" })
      },
      { threshold: 0.55 },
    )
    io.observe(frame.current)
    return () => {
      io.disconnect()
      tl?.kill()
    }
  }, [hint])

  return (
    <div
      ref={frame}
      role="slider"
      tabIndex={0}
      aria-label={`${alt}: drag to compare ${beforeLabel.toLowerCase()} and ${afterLabel.toLowerCase()}`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      aria-valuetext={`${Math.round(pos)}% ${beforeLabel.toLowerCase()}`}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      onKeyDown={onKey}
      className={cn(
        "group relative cursor-ew-resize select-none overflow-hidden bg-card outline-none [touch-action:pan-y] focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-4 focus-visible:ring-offset-background",
        aspect,
        className,
      )}
    >
      {/* After */}
      <Image src={after} alt={`${alt}, ${afterLabel.toLowerCase()}`} fill sizes={sizes} priority={priority} draggable={false} className="object-cover" />

      {/* Before, clipped to the left of the divider */}
      <div className={cn("absolute inset-0", concept && "mh-concept")} style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={before || after} alt={`${alt}, ${beforeLabel.toLowerCase()}`} fill sizes={sizes} priority={priority} draggable={false} className="object-cover" />
      </div>

      {/* Labels */}
      <span className="mh-eyebrow pointer-events-none absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1.5 text-[10px] text-primary backdrop-blur transition-opacity duration-300 sm:left-5 sm:top-5" style={{ opacity: pos > 12 ? 1 : 0 }}>
        {beforeLabel}
      </span>
      <span className="mh-eyebrow pointer-events-none absolute right-4 top-4 rounded-full bg-primary/80 px-3 py-1.5 text-[10px] text-accent backdrop-blur transition-opacity duration-300 sm:right-5 sm:top-5" style={{ opacity: pos < 88 ? 1 : 0 }}>
        {afterLabel}
      </span>

      {/* Divider + handle */}
      <div className="pointer-events-none absolute inset-y-0 w-px bg-background/90 shadow-[0_0_18px_rgb(0_0_0/0.35)]" style={{ left: `${pos}%` }}>
        <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-0.5 rounded-full border border-background/70 bg-primary/70 text-accent backdrop-blur-md transition-transform duration-300 group-active:scale-90">
          <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
          <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
        </span>
      </div>
    </div>
  )
}
