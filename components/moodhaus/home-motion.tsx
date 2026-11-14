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
      gsap.set("[data-video-copy]", { autoAlpha: 1 })
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
        .fromTo("[data-hero-cue-inner]", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 }, 1.4)

      // Scroll story: lockup lifts away -> a framed window rises into the centre ->
      // the frame opens to full-bleed coastal footage -> headline settles in.
      // Clip-path is driven through a proxy so the browser never collapses equal inset values
      // (which would break GSAP's number-by-number string interpolation).
      const heroWindow = document.querySelector<HTMLElement>("[data-hero-window]")
      const narrow = window.innerWidth < 768
      const arch = { t: 100, x: narrow ? 18 : 36, b: 0, r: 6 }
      const paintArch = () => {
        if (heroWindow) heroWindow.style.clipPath = `inset(${arch.t}% ${arch.x}% ${arch.b}% ${arch.x}% round ${arch.r}px)`
      }
      paintArch()

      // Timing (fractions of the pinned scroll): the lockup is gone before the arch reaches it,
      // the arch rises, pauses as a framed view, then opens; the headline lands last and holds.
      const hero = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: "[data-hero]",
          start: "top top",
          end: "+=240%",
          pin: "[data-hero-stage]",
          scrub: 1.1,
          anticipatePin: 1,
        },
      })
      hero
        .to("[data-hero-cue]", { autoAlpha: 0, duration: 0.04 }, 0)
        .to("[data-hero-lockup]", { yPercent: -18, scale: 0.86, autoAlpha: 0, filter: "blur(6px)", duration: 0.22, ease: "power2.in" }, 0)
        .to("[data-hero-topo]", { scale: 1.15, duration: 0.75 }, 0)
        .to(arch, { t: narrow ? 22 : 16, x: narrow ? 10 : 30, b: narrow ? 14 : 12, duration: 0.3, ease: "power2.out", onUpdate: paintArch }, 0.16)
        .to(arch, { t: 0, x: 0, b: 0, r: 0, duration: 0.32, ease: "power2.inOut", onUpdate: paintArch }, 0.48)
        .to("[data-hero-video]", { scale: 1, duration: 0.74, ease: "power1.out" }, 0.16)
        .to("[data-hero-topo]", { autoAlpha: 0, duration: 0.2 }, 0.55)
        .to("[data-hero-shade]", { autoAlpha: 1, duration: 0.18 }, 0.7)
        .fromTo("[data-hero-copy]", { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.16, ease: "power2.out" }, 0.8)
        .to({}, { duration: 0.14 })

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
          { yPercent: amount / 2, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: 0.8 } },
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
      // The stage is sticky for the section's extra height. Frames start below their resting
      // place (faster layers start lower) and rise past each other in separate columns.
      const depth = document.querySelector("[data-depth]")
      if (depth) {
        const held = { trigger: depth, start: "top top", end: "bottom bottom", scrub: 1 }
        const through = { trigger: depth, start: "top bottom", end: "bottom top", scrub: 1 }
        gsap.fromTo("[data-depth-bg]", { scale: 1.14, yPercent: 0 }, { scale: 1, yPercent: -4, ease: "none", scrollTrigger: held })
        gsap.fromTo("[data-depth-type]", { xPercent: 0 }, { xPercent: -32, ease: "none", scrollTrigger: through })
        q("[data-depth-layer]").forEach(layer => {
          const speed = parseFloat(layer.dataset.depthLayer || "1")
          gsap.fromTo(
            layer,
            { y: () => window.innerHeight * 0.6 * speed },
            { y: () => -window.innerHeight * 0.6 * speed, ease: "none", scrollTrigger: { ...held, invalidateOnRefresh: true } },
          )
        })
        gsap.fromTo(
          "[data-depth-caption]",
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, ease: "power2.out", scrollTrigger: { trigger: depth, start: "top -60%", end: "top -95%", scrub: 1 } },
        )
      }

      /* ------------------------------------------------------------------ */
      /* 6. Horizontal portfolio track (desktop only)                        */
      /* ------------------------------------------------------------------ */
      // Scroll distance is 1.35x the travel so the work glides rather than races, the photos
      // drift inside their frames, and the last project holds for a beat before release.
      mm.add("(min-width: 1024px)", () => {
        const track = document.querySelector<HTMLElement>("[data-hscroll-track]")
        if (!track) return
        const distance = () => track.scrollWidth - window.innerWidth
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: "[data-hscroll]",
            start: "top top",
            end: () => "+=" + distance() * 1.35,
            pin: "[data-hscroll-pin]",
            scrub: 1.2,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        })
        tl.to(track, { x: () => -distance(), duration: 1 }, 0)
          .fromTo("[data-hs-img]", { xPercent: 5 }, { xPercent: -5, duration: 1 }, 0)
          .fromTo("[data-hscroll-progress]", { scaleX: 0 }, { scaleX: 1, duration: 1 }, 0)
          .to({}, { duration: 0.1 })
      })

      /* ------------------------------------------------------------------ */
      /* 7. Video band grows to full width                                   */
      /* ------------------------------------------------------------------ */
      gsap.fromTo(
        "[data-video-frame]",
        { width: "86%", borderRadius: "6px" },
        { width: "100%", borderRadius: "0px", ease: "none", scrollTrigger: { trigger: "[data-video-band]", start: "top 90%", end: "top 15%", scrub: 1 } },
      )
      gsap.fromTo(
        "[data-video-copy]",
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: "[data-video-band]", start: "top 35%", toggleActions: "play none none reverse" } },
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
        { rotateY: -14, rotateX: 6 },
        { rotateY: 180, rotateX: 0, ease: "power2.inOut", scrollTrigger: { trigger: "[data-card-flip]", start: "top 75%", end: "center 55%", scrub: 1 } },
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
