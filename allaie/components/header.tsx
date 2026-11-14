"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { label: "Story", href: "/#story" },
  { label: "Practice", href: "/#practice" },
  { label: "Moods", href: "/#moods" },
  { label: "Approach", href: "/#approach" },
  { label: "Journal", href: "/journal" },
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
  const home = usePathname() === "/"
  const href = (h: string) => (home && h.startsWith("/#") ? h.slice(1) : h)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <div
        className={cn(
          "mh-header-shell mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 py-3 sm:px-7",
          light ? "border-primary-foreground/15 bg-primary/25 text-primary-foreground backdrop-blur-md" : "is-scrolled text-primary",
        )}
      >
        <a href="/" className="aa-name text-[13px] font-normal sm:text-[15px]" aria-label="Allaie Aisha, home">
          ALLAIE AISHA
        </a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Sections">
          {links.map(l => (
            <a key={l.href} href={href(l.href)} className="mh-link-underline mh-eyebrow text-[10.5px] opacity-80 hover:opacity-100 mh-transition">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={href("/#contact")}
            className={cn(
              "mh-btn hidden rounded-full px-5 py-2.5 text-[10.5px] font-semibold uppercase tracking-[0.22em] sm:inline-flex",
              light ? "bg-accent text-primary" : "bg-primary text-primary-foreground",
            )}
          >
            Work with Allaie
          </a>
          <button type="button" onClick={() => setOpen(!open)} className="-mr-2 rounded-full p-2 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="mx-1 mt-2 rounded-[1.5rem] border border-primary/10 bg-background p-3 shadow-lg lg:hidden" aria-label="Sections">
          {[...links, { label: "Work with Allaie", href: "/#contact" }].map(l => (
            <a key={l.href} href={href(l.href)} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 font-serif text-2xl text-primary hover:bg-card">
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
