"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

/** Keeps ScrollTrigger measurements fresh as remote imagery and fonts load in. */
export function SmoothScroll() {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener("load", refresh)
    document.fonts?.ready.then(refresh)
    const id = window.setTimeout(refresh, 1200)
    return () => {
      window.removeEventListener("load", refresh)
      window.clearTimeout(id)
    }
  }, [])
  return null
}
