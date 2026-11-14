"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
// iOS Safari resizes the viewport as its toolbars show and hide; re-measuring on every one of
// those makes pinned sections jump. Only real resizes (orientation, window) trigger a refresh.
ScrollTrigger.config({ ignoreMobileResize: true })

/**
 * Site-wide motion plumbing:
 *  - Lenis inertial scrolling, driven by GSAP's ticker so every ScrollTrigger scrub
 *    reads the same smoothed position (no double easing, no jitter).
 *  - Photos fade softly in as they finish loading instead of popping.
 *  - ScrollTrigger re-measures once fonts and remote imagery settle.
 */
export function SmoothScroll() {
  const pathname = usePathname()

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let lenis: Lenis | null = null
    let tick: ((time: number) => void) | null = null

    if (!reduce) {
      lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.9, anchors: { offset: -80 } })
      ;(window as unknown as { __lenis?: Lenis }).__lenis = lenis
      lenis.on("scroll", ScrollTrigger.update)
      tick = (time: number) => lenis?.raf(time * 1000)
      gsap.ticker.add(tick)
      gsap.ticker.lagSmoothing(0)
      document.documentElement.classList.add("lenis-on")
    }

    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener("load", refresh)
    document.fonts?.ready.then(refresh)
    const id = window.setTimeout(refresh, 1200)

    return () => {
      window.removeEventListener("load", refresh)
      window.clearTimeout(id)
      if (tick) gsap.ticker.remove(tick)
      lenis?.destroy()
      document.documentElement.classList.remove("lenis-on")
    }
  }, [])

  // New page: start at the top, and fade in its photos as they arrive.
  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: Lenis }).__lenis
    if (!window.location.hash) {
      lenis ? lenis.scrollTo(0, { immediate: true }) : window.scrollTo(0, 0)
    }

    const prime = (img: HTMLImageElement) => {
      if (img.dataset.fade || img.closest("[data-no-fade]")) return
      img.dataset.fade = ""
      if (img.complete && img.naturalWidth > 0) return
      img.classList.add("mh-img-pending")
      const done = () => img.classList.remove("mh-img-pending")
      img.addEventListener("load", done, { once: true })
      img.addEventListener("error", done, { once: true })
    }
    document.querySelectorAll("img").forEach(prime)
    const mo = new MutationObserver(records =>
      records.forEach(r => r.addedNodes.forEach(n => {
        if (n instanceof HTMLImageElement) prime(n)
        else if (n instanceof HTMLElement) n.querySelectorAll("img").forEach(prime)
      })),
    )
    mo.observe(document.body, { childList: true, subtree: true })
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 400)
    return () => {
      mo.disconnect()
      window.clearTimeout(id)
    }
  }, [pathname])

  return null
}
