"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, Search, ShoppingBag, X } from "lucide-react"
import { useEffect, useState } from "react"
import { useCart } from "./cart-context"

const links = [
  { label: "Shop", href: "/shop" },
  { label: "Our story", href: "/#story" },
  { label: "The market", href: "/#market" },
  { label: "Batch orders", href: "/wholesale" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { itemCount, setIsOpen } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-6">
      <div className={"azza-header-shell mx-auto flex max-w-7xl items-center justify-between rounded-full border border-primary/10 bg-background/90 px-4 py-3 backdrop-blur-md sm:px-6 " + (scrolled ? "is-scrolled" : "shadow-sm") }>
        <Link href="/" className="flex items-center gap-3" aria-label="Azza’s Apron home">
          <span className="relative h-10 w-10 overflow-hidden rounded-full bg-primary/10 ring-1 ring-primary/10">
            <Image src="/images/azza-apron-logo.png" alt="" fill className="object-cover" />
          </span>
          <span className="font-serif text-xl font-semibold tracking-tight text-primary">Azza’s Apron</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {links.map(link => (
            <Link key={link.href} href={link.href} className="azza-link-underline text-sm text-foreground/70 hover:text-primary azza-transition">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <button type="button" className="hidden rounded-full p-2 text-foreground/70 hover:bg-card hover:text-primary sm:block" aria-label="Search">
            <Search className="h-4 w-4" />
          </button>
          <button type="button" onClick={() => setIsOpen(true)} className="relative rounded-full p-2 text-foreground/70 hover:bg-card hover:text-primary" aria-label={"Open basket with " + itemCount + " items"}>
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-primary">{itemCount}</span>}
          </button>
          <button type="button" onClick={() => setOpen(!open)} className="rounded-full p-2 text-primary md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="mx-3 mt-2 rounded-3xl border border-primary/10 bg-background p-4 shadow-lg md:hidden" aria-label="Mobile navigation">
          {links.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 font-serif text-xl text-primary hover:bg-card">
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
