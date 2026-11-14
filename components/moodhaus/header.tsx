"use client"

import Link from "next/link"
import { ArrowUpRight, Menu, Phone, X } from "lucide-react"
import { useEffect, useState } from "react"
import { studio } from "@/lib/moodhaus-content"
import { Wordmark } from "./logo"

const links = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/#capabilities" },
  { label: "Before & after", href: "/before-after" },
  { label: "The studio", href: "/studio" },
  { label: "Process", href: "/#process" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector<HTMLElement>("[data-hero]")
      setScrolled(window.scrollY > (hero ? hero.offsetHeight - 90 : 40))
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const light = !scrolled && !open

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <div
        className={
          "mh-header-shell mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 py-3 backdrop-blur-md sm:px-7 " +
          (light ? "border-primary-foreground/15 bg-primary/20 text-primary-foreground" : "is-scrolled text-primary")
        }
      >
        <Link href="/" className="flex items-center gap-3" aria-label="Moodhaus Labs home">
          <Wordmark />
        </Link>
        <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
          {links.map(link => (
            <Link key={link.href} href={link.href} className="mh-link-underline mh-eyebrow text-[11px] opacity-80 hover:opacity-100 mh-transition">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={studio.phoneHref} className="hidden rounded-full p-2 opacity-80 hover:opacity-100 lg:block" aria-label={"Call " + studio.phone}>
            <Phone className="h-4 w-4" />
          </a>
          <Link
            href="/consultation"
            className={
              "mh-btn hidden items-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] sm:inline-flex " +
              (light ? "bg-accent text-primary" : "bg-primary text-primary-foreground")
            }
          >
            Book a consultation <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <button type="button" onClick={() => setOpen(!open)} className="rounded-full p-2 md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="mx-1 mt-2 rounded-3xl border border-primary/10 bg-background p-4 shadow-lg md:hidden" aria-label="Mobile navigation">
          {[...links, { label: "Book a consultation", href: "/consultation" }].map(link => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 font-serif text-2xl text-primary hover:bg-card">
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
