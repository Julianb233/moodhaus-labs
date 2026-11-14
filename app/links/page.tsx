import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Mail, Phone } from "lucide-react"
import { LogoLockup } from "@/components/moodhaus/logo"
import { chapters, dMedia } from "@/lib/disciplines"
import { media, studio } from "@/lib/moodhaus-content"
import { moods } from "@/lib/moods"

export const metadata: Metadata = {
  title: "Links",
  description: "Moodhaus Labs: architecture, landscape design and photoreal 3D across San Diego County. Book a consultation, see the work, or get in touch.",
}

/**
 * Link-in-bio page for social profiles (point Instagram, TikTok etc. at /links).
 * To add a social profile, add it to `socials` below, e.g. { label: "Instagram", href: "https://instagram.com/…" }.
 */
const socials: { label: string; href: string }[] = []

const links = [
  { label: "See the portfolio", note: "Homes and gardens across the county", href: "/portfolio", image: media.duskPools },
  { label: "Before & after", note: "Drag across real sites", href: "/before-after", image: media.sunsetPalmsPool },
  { label: "Find your mood", note: "Seven moods, seven spaces", href: "/studio", image: moods[1].image },
  ...chapters.slice(0, 3).map(c => ({ label: c.label === "3D Visualization" ? "Photoreal 3D visualization" : c.label === "Landscape" ? "Landscape design" : "Architectural design", note: c.line, href: c.href, image: c.image })),
  { label: "How we work", note: "From first walk to builder hand-off", href: "/process", image: dMedia.drawHands },
]

export default function LinksPage() {
  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0">
        <Image src={media.sunsetPalmsPool} alt="" fill priority sizes="100vw" className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(32,45,35,.7)_0%,rgba(32,45,35,.88)_45%,rgba(32,45,35,.97)_100%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-md flex-col px-5 pb-10 pt-14">
        <header className="flex flex-col items-center text-center" style={{ animation: "mh-rise 1s cubic-bezier(.2,.7,.2,1) both" }}>
          <LogoLockup className="text-[2.6rem] text-primary-foreground" />
          <p className="mt-6 font-serif text-2xl italic leading-snug text-accent">{studio.tagline}</p>
          <p className="mh-eyebrow mt-3 text-[10px] text-primary-foreground/70">Architecture · Landscape · 3D · San Diego County</p>
        </header>

        <Link
          href="/consultation"
          className="group mt-9 flex items-center justify-between rounded-[6px] bg-accent px-5 py-4 text-primary transition-transform duration-300 hover:-translate-y-0.5"
          style={{ animation: "mh-rise 1s .1s cubic-bezier(.2,.7,.2,1) both" }}
        >
          <span>
            <span className="block font-serif text-2xl leading-tight">Book a private consultation</span>
            <span className="mt-0.5 block text-xs text-primary/70">On site or in the studio, with {studio.founder}</span>
          </span>
          <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>

        <ul className="mt-3 grid gap-3">
          {links.map((l, i) => (
            <li key={l.href} style={{ animation: `mh-rise 1s ${0.16 + i * 0.06}s cubic-bezier(.2,.7,.2,1) both` }}>
              <Link
                href={l.href}
                className="group flex items-center gap-4 rounded-[6px] border border-primary-foreground/12 bg-primary-foreground/[.06] p-2 pr-4 backdrop-blur-md transition-colors duration-300 hover:border-accent/50 hover:bg-primary-foreground/[.1]"
              >
                <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[4px]">
                  <Image src={l.image} alt="" fill sizes="64px" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-serif text-xl leading-tight">{l.label}</span>
                  <span className="mt-0.5 block truncate text-xs text-primary-foreground/60">{l.note}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-accent opacity-70 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-6 grid grid-cols-2 gap-3" style={{ animation: "mh-rise 1s .7s cubic-bezier(.2,.7,.2,1) both" }}>
          <a href={studio.phoneHref} className="flex items-center justify-center gap-2 rounded-full border border-primary-foreground/20 py-3 text-sm transition-colors hover:border-accent hover:text-accent">
            <Phone className="h-4 w-4" strokeWidth={1.5} /> Call
          </a>
          <a href={"mailto:" + studio.email} className="flex items-center justify-center gap-2 rounded-full border border-primary-foreground/20 py-3 text-sm transition-colors hover:border-accent hover:text-accent">
            <Mail className="h-4 w-4" strokeWidth={1.5} /> Email
          </a>
        </div>

        {socials.length > 0 && (
          <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2">
            {socials.map(s => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="mh-eyebrow text-[10px] text-primary-foreground/70 hover:text-accent">
                {s.label}
              </a>
            ))}
          </div>
        )}

        <footer className="mt-auto pt-10 text-center">
          <Link href="/" className="mh-eyebrow text-[10px] text-primary-foreground/55 hover:text-accent">{studio.website}</Link>
        </footer>
      </div>
    </main>
  )
}
