"use client"

import { useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

/**
 * Shared motion for the inner pages:
 *  - [data-parallax="<yPercent>"] drifts against the scroll,
 *  - [data-reveal] rises in once,
 *  - [data-img-reveal] uncovers from the bottom edge with a slight settle in scale.
 * Lenis already smooths the scroll, so scrubbed tweens use scrub: true (no extra lag).
 */
export function PageMotion() {
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach(el => {
        const amount = parseFloat(el.dataset.parallax || "-10")
        gsap.fromTo(
          el,
          { yPercent: -amount / 2 },
          { yPercent: amount / 2, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true } },
        )
      })
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach(el => {
        gsap.fromTo(el, { autoAlpha: 0, y: 36 }, { autoAlpha: 1, y: 0, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } })
      })
      gsap.utils.toArray<HTMLElement>("[data-img-reveal]").forEach(el => {
        const img = el.querySelector("img")
        const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: "top 85%", once: true } })
        tl.fromTo(el, { clipPath: "inset(18% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "expo.out" })
        if (img) tl.fromTo(img, { scale: 1.12 }, { scale: 1, duration: 1.8, ease: "expo.out" }, 0)
      })
    })
    return () => ctx.revert()
  }, [])
  return null
}
