"use client"

import { useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const q = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => Array.from(root.querySelectorAll<T>(sel))

/** Prepare contour paths so they can be "drawn" by animating stroke-dashoffset. */
function primeTopo(paths: SVGPathElement[]) {
  paths.forEach(p => {
    const len = p.getTotalLength()
    p.style.strokeDasharray = `${len}`
    p.style.strokeDashoffset = `${len}`
  })
}

export function HomeMotion() {
  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (reduce) {
      // Show every end state without motion.
      gsap.set("[data-hero-window]", { clipPath: "none" })
      gsap.set("[data-hero-video]", { scale: 1 })
      gsap.set("[data-hero-lockup], [data-hero-cue]", { autoAlpha: 0 })
      gsap.set("[data-hero-copy], [data-hero-shade]", { autoAlpha: 1 })
      gsap.set("[data-word]", { opacity: 1 })
      return
    }

    const mm = gsap.matchMedia()
    const ctx = gsap.context(() => {
      /* ------------------------------------------------------------------ */
      /* 1. HERO — intro, then pinned scroll choreography                    */
      /* ------------------------------------------------------------------ */
      const heroPaths = q<SVGPathElement>("[data-hero-topo] path")
      primeTopo(heroPaths)

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } })
      intro
        .to(heroPaths, { strokeDashoffset: 0, duration: 2.6, stagger: { each: 0.025, from: "random" }, ease: "power2.inOut" }, 0)
        .fromTo("[data-hero-lockup] > span > *", { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 1.6, stagger: 0.14 }, 0.25)
        .fromTo("[data-hero-cue]", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 }, 1.4)

      // Scroll story: lockup lifts away -> an arched window rises from the ground ->
      // the arch opens to full-bleed coastal footage -> headline settles in.
      // Clip-path is driven through a proxy so the browser never collapses equal inset values
      // (which would break GSAP's number-by-number string interpolation).
      const heroWindow = document.querySelector<HTMLElement>("[data-hero-window]")
      const narrow = window.innerWidth < 768
      const arch = { t: 100, x: narrow ? 18 : 36, r: 999 }
      const paintArch = () => {
        if (heroWindow) heroWindow.style.clipPath = `inset(${arch.t}% ${arch.x}% 0% ${arch.x}% round ${arch.r}px ${arch.r}px 0px 0px)`
      }
      paintArch()

      const hero = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: "[data-hero]",
          start: "top top",
          end: "+=220%",
          pin: "[data-hero-stage]",
          scrub: 1,
          anticipatePin: 1,
        },
      })
      hero
        .to("[data-hero-cue]", { autoAlpha: 0, duration: 0.05 }, 0)
        .to("[data-hero-lockup]", { yPercent: -22, scale: 0.82, autoAlpha: 0, filter: "blur(6px)", duration: 0.32, ease: "power1.in" }, 0)
        .to("[data-hero-topo]", { scale: 1.2, duration: 0.7 }, 0)
        .to(arch, { t: narrow ? 22 : 16, x: narrow ? 12 : 33, duration: 0.32, ease: "power2.out", onUpdate: paintArch }, 0.08)
        .to(arch, { t: 0, x: 0, r: 0, duration: 0.38, ease: "power1.inOut", onUpdate: paintArch }, 0.42)
        .to("[data-hero-video]", { scale: 1, duration: 0.8 }, 0.1)
        .to("[data-hero-topo]", { autoAlpha: 0, duration: 0.2 }, 0.6)
        .to("[data-hero-shade]", { autoAlpha: 1, duration: 0.25 }, 0.62)
        .fromTo("[data-hero-copy]", { autoAlpha: 0, y: 60 }, { autoAlpha: 1, y: 0, duration: 0.22 }, 0.74)
        .to({}, { duration: 0.08 })

      /* ------------------------------------------------------------------ */
      /* 2. Word-by-word statement reveal                                    */
      /* ------------------------------------------------------------------ */
      gsap.to("[data-word]", {
        opacity: 1,
        stagger: 0.1,
        ease: "none",
        scrollTrigger: { trigger: "[data-word-reveal]", start: "top 80%", end: "bottom 45%", scrub: true },
      })

      /* ------------------------------------------------------------------ */
      /* 3. Generic parallax: data-parallax="<yPercent>"                     */
      /* ------------------------------------------------------------------ */
      q("[data-parallax]").forEach(el => {
        const amount = parseFloat(el.dataset.parallax || "-10")
        gsap.fromTo(
          el,
          { yPercent: -amount / 2 },
          { yPercent: amount / 2, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true } },
        )
      })

      /* ------------------------------------------------------------------ */
      /* 4. Stacking service cards recede as the next one arrives            */
      /* ------------------------------------------------------------------ */
      const cards = q("[data-stack-card]")
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return
        gsap.to(card, {
          scale: 0.92 + i * 0.02,
          filter: "brightness(.65)",
          ease: "none",
          scrollTrigger: { trigger: cards[i + 1], start: "top bottom", end: "top 25%", scrub: true },
        })
      })

      /* ------------------------------------------------------------------ */
      /* 5. Depth gallery: layers at different speeds + sliding outline type */
      /* ------------------------------------------------------------------ */
      const depth = document.querySelector("[data-depth]")
      if (depth) {
        const st = { trigger: depth, start: "top top", end: "bottom bottom", scrub: true }
        gsap.fromTo("[data-depth-bg]", { scale: 1.15 }, { scale: 1, ease: "none", scrollTrigger: st })
        gsap.fromTo("[data-depth-type]", { xPercent: 0 }, { xPercent: -45, ease: "none", scrollTrigger: { ...st, start: "top bottom" } })
        q("[data-depth-layer]").forEach(layer => {
          const speed = parseFloat(layer.dataset.depthLayer || "1")
          gsap.fromTo(layer, { y: 220 * speed }, { y: -260 * speed, ease: "none", scrollTrigger: { ...st, start: "top bottom" } })
        })
      }

      /* ------------------------------------------------------------------ */
      /* 6. Horizontal portfolio track (desktop only)                        */
      /* ------------------------------------------------------------------ */
      mm.add("(min-width: 1024px)", () => {
        const track = document.querySelector<HTMLElement>("[data-hscroll-track]")
        if (!track) return
        const distance = () => track.scrollWidth - window.innerWidth
        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: "[data-hscroll]",
            start: "top top",
            end: () => "+=" + distance(),
            pin: "[data-hscroll-pin]",
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        })
      })

      /* ------------------------------------------------------------------ */
      /* 7. Video band grows to full width                                   */
      /* ------------------------------------------------------------------ */
      gsap.fromTo(
        "[data-video-frame]",
        { width: "86%", borderRadius: "2rem" },
        { width: "100%", borderRadius: "0rem", ease: "none", scrollTrigger: { trigger: "[data-video-band]", start: "top 85%", end: "top 10%", scrub: true } },
      )

      /* ------------------------------------------------------------------ */
      /* 8. Process timeline line draws down                                 */
      /* ------------------------------------------------------------------ */
      gsap.fromTo("[data-process-line]", { scaleY: 0 }, { scaleY: 1, ease: "none", scrollTrigger: { trigger: "[data-process]", start: "top 70%", end: "bottom 60%", scrub: true } })
      q("[data-process-step]").forEach(step => {
        gsap.fromTo(step, { autoAlpha: 0.2, x: 30 }, { autoAlpha: 1, x: 0, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: step, start: "top 75%", toggleActions: "play none none reverse" } })
      })

      /* ------------------------------------------------------------------ */
      /* 9. Business card turns over                                         */
      /* ------------------------------------------------------------------ */
      gsap.fromTo(
        "[data-card-flip]",
        { rotateY: -18, rotateX: 8 },
        { rotateY: 180, rotateX: 0, ease: "none", scrollTrigger: { trigger: "[data-card-flip]", start: "top 85%", end: "center 40%", scrub: 1 } },
      )

      /* ------------------------------------------------------------------ */
      /* 10. Section + element entrances (from the BOTY template)            */
      /* ------------------------------------------------------------------ */
      q(".mh-testimonial, [data-reveal]").forEach((el, i) => {
        gsap.fromTo(el, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 1, delay: (i % 3) * 0.08, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } })
      })
    })

    return () => {
      mm.revert()
      ctx.revert()
    }
  }, [])

  return null
}
