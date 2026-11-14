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
      gsap.set("[data-hero-lockup], [data-hero-topo]", { autoAlpha: 0 })
      gsap.set("[data-hero-line]", { yPercent: 0, y: 0 })
      gsap.set("[data-hero-fade], [data-hero-cue]", { autoAlpha: 1 })
      gsap.set("[data-word]", { opacity: 1 })
      gsap.set("[data-video-copy]", { autoAlpha: 1 })
      return
    }

    const mm = gsap.matchMedia()
    const ctx = gsap.context(() => {
      /* ------------------------------------------------------------------ */
      /* 1. HERO — a timed opening, then a light scroll parallax             */
      /* ------------------------------------------------------------------ */
      // The opening plays on load (about 3.4s) so the footage is on screen almost at once and
      // no one has to scroll through an empty stage. Any scroll input fast-forwards it.
      const heroPaths = q<SVGPathElement>("[data-hero-topo] path")
      primeTopo(heroPaths)

      // Clip-path is driven through a proxy so equal inset values never collapse mid-tween.
      const heroWindow = document.querySelector<HTMLElement>("[data-hero-window]")
      const narrow = window.innerWidth < 768
      const win = { y: 50, x: 50, r: 6 }
      const paintWin = () => {
        if (heroWindow) heroWindow.style.clipPath = `inset(${win.y}% ${win.x}% ${win.y}% ${win.x}% round ${win.r}px)`
      }
      paintWin()

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } })
      intro
        .to(heroPaths, { strokeDashoffset: 0, duration: 2.2, stagger: { each: 0.02, from: "random" }, ease: "power2.inOut" }, 0)
        .fromTo("[data-hero-lockup] > span > *", { autoAlpha: 0, y: 26 }, { autoAlpha: 1, y: 0, duration: 1.1, stagger: 0.1 }, 0.15)
        // a slim framed window appears behind the lockup...
        .to(win, { y: narrow ? 30 : 26, x: narrow ? 12 : 30, duration: 0.9, ease: "power3.out", onUpdate: paintWin }, 1.05)
        .to("[data-hero-lockup]", { autoAlpha: 0, y: -24, filter: "blur(6px)", duration: 0.7, ease: "power2.in" }, 1.55)
        // ...then widens to full bleed while the footage settles
        .to(win, { y: 0, x: 0, r: 0, duration: 1.25, ease: "expo.inOut", onUpdate: paintWin }, 1.75)
        .fromTo("[data-hero-video]", { scale: 1.28 }, { scale: 1.04, duration: 2.4, ease: "power2.out" }, 1.05)
        .to("[data-hero-topo]", { autoAlpha: 0, duration: 0.6 }, 2.4)
        .to("[data-hero-line]", { y: 0, yPercent: 0, duration: 1.15, stagger: 0.12, ease: "expo.out" }, 2.55)
        .to("[data-hero-fade]", { autoAlpha: 1, duration: 0.9, stagger: 0.1, ease: "power2.out" }, 2.85)
        .to("[data-hero-cue]", { autoAlpha: 1, duration: 0.8 }, 3.3)
        .eventCallback("onComplete", () => {
          if (heroWindow) heroWindow.style.clipPath = "none"
        })

      // Lines start at translateY(110%) inline, below their mask; the tween brings them to rest.
      const skip = () => {
        if (intro.isActive() && intro.timeScale() === 1) intro.timeScale(3.2)
      }
      if (window.scrollY > 40) intro.progress(1)
      window.addEventListener("wheel", skip, { passive: true, once: true })
      window.addEventListener("touchmove", skip, { passive: true, once: true })
      window.addEventListener("keydown", skip, { once: true })

      // Scroll: no pin. The footage drifts at roughly half the page speed, the copy lifts and
      // fades a little faster, and the shade deepens so the next section arrives cleanly.
      const heroScroll = { trigger: "[data-hero]", start: "top top", end: "bottom top", scrub: true }
      gsap.to("[data-hero-media]", { yPercent: 14, ease: "none", scrollTrigger: heroScroll })
      gsap.to("[data-hero-copy]", { y: () => -window.innerHeight * 0.18, autoAlpha: 0, ease: "power1.in", scrollTrigger: { ...heroScroll, end: "75% top", invalidateOnRefresh: true } })
      gsap.to("[data-hero-cue]", { autoAlpha: 0, ease: "none", scrollTrigger: { ...heroScroll, end: "12% top" } })
      gsap.fromTo("[data-hero-dim]", { opacity: 0 }, { opacity: 0.55, ease: "none", scrollTrigger: heroScroll })

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
      /* 6. Horizontal portfolio track (all screen sizes)                    */
      /* ------------------------------------------------------------------ */
      // The section pins while the work slides sideways; the scroll distance is 1.2x the
      // travel so it glides, and the last project holds for a beat before the page moves on.
      {
        const track = document.querySelector<HTMLElement>("[data-hscroll-track]")
        if (track) {
          const distance = () => Math.max(0, track.scrollWidth - window.innerWidth)
          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: "[data-hscroll]",
              start: "top top",
              end: () => "+=" + distance() * 1.2,
              pin: "[data-hscroll-pin]",
              scrub: true,
              invalidateOnRefresh: true,
              anticipatePin: 1,
            },
          })
          tl.to(track, { x: () => -distance(), duration: 1 }, 0)
            .fromTo("[data-hs-img]", { xPercent: 5 }, { xPercent: -5, duration: 1 }, 0)
            .fromTo("[data-hscroll-progress]", { scaleX: 0 }, { scaleX: 1, duration: 1 }, 0)
            .to({}, { duration: 0.08 })
        }
      }

      /* ------------------------------------------------------------------ */
      /* 5. Depth gallery: layers at different speeds + sliding outline type */
      /* ------------------------------------------------------------------ */
      // The stage is sticky for the section's extra height. Frames start below their resting
      // place (faster layers start lower) and rise past each other in separate columns.
      const depth = document.querySelector("[data-depth]")
      if (depth) {
        const held = { trigger: depth, start: "top top", end: "bottom bottom", scrub: true }
        const through = { trigger: depth, start: "top bottom", end: "bottom top", scrub: true }
        gsap.fromTo("[data-depth-bg]", { scale: 1.14, yPercent: 0 }, { scale: 1, yPercent: -4, ease: "none", scrollTrigger: held })
        gsap.fromTo("[data-depth-type]", { xPercent: 0 }, { xPercent: -18, ease: "none", scrollTrigger: through })
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
          { autoAlpha: 1, y: 0, ease: "power2.out", scrollTrigger: { trigger: depth, start: "top -60%", end: "top -95%", scrub: true } },
        )
      }

      /* ------------------------------------------------------------------ */
      /* 7. Video band grows to full width                                   */
      /* ------------------------------------------------------------------ */
      gsap.fromTo(
        "[data-video-frame]",
        { width: "86%", borderRadius: "6px" },
        { width: "100%", borderRadius: "0px", ease: "none", scrollTrigger: { trigger: "[data-video-band]", start: "top 90%", end: "top 15%", scrub: true } },
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
        { rotateY: 180, rotateX: 0, ease: "power2.inOut", scrollTrigger: { trigger: "[data-card-flip]", start: "top 75%", end: "center 55%", scrub: true } },
      )

      /* ------------------------------------------------------------------ */
      /* 10. Section + element entrances (from the BOTY template)            */
      /* ------------------------------------------------------------------ */
      q(".mh-testimonial, [data-reveal]").forEach((el, i) => {
        gsap.fromTo(el, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 1, delay: (i % 3) * 0.08, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } })
      })
    })

    // Pinned sections add scroll length; make sure every trigger below them is measured after.
    ScrollTrigger.sort()
    ScrollTrigger.refresh()

    return () => {
      mm.revert()
      ctx.revert()
    }
  }, [])

  return null
}
