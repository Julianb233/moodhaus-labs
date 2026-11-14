"use client"

import { useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function HomeMotion() {
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const context = gsap.context(() => {
      gsap.fromTo(
        "main > section:first-of-type .max-w-2xl > *",
        { autoAlpha: 0, y: 26, filter: "blur(6px)" },
        { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 1, stagger: 0.11, delay: 0.05, ease: "power3.out" },
      )

      gsap.fromTo(
        "main > section:first-of-type .azza-float",
        { autoAlpha: 0, x: 40, rotate: 8, scale: 0.94 },
        { autoAlpha: 1, x: 0, rotate: 2, scale: 1, duration: 1.25, delay: 0.28, ease: "power3.out" },
      )

      gsap.utils.toArray<HTMLElement>("main > section").forEach((section, index) => {
        if (index === 0) return
        gsap.fromTo(
          section,
          { autoAlpha: 0, y: 48 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: section, start: "top 86%", once: true },
          },
        )
      })

      gsap.utils.toArray<HTMLElement>("#collection article, #story .azza-card, .azza-image-frame, #market, .azza-testimonial").forEach((el, i) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            delay: (i % 4) * 0.05,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          },
        )
      })

      gsap.utils.toArray<HTMLElement>(".azza-parallax").forEach(el => {
        gsap.to(el, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        })
      })
    })

    return () => context.revert()
  }, [])

  return null
}
