import Link from "next/link"
import { Instagram, Mail, Phone } from "lucide-react"
import { footerLinks, studio } from "@/lib/moodhaus-content"
import { LogoLockup } from "./logo"
import { TopoDrift } from "./topo-drift"

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-deep-green text-primary-foreground">
      <TopoDrift variant={2} opacity={0.12} />
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="Moodhaus Labs home" className="inline-block text-accent">
              <LogoLockup className="text-[2.35rem] sm:text-5xl" />
            </Link>
            <p className="mt-8 max-w-sm font-serif text-xl italic leading-relaxed text-primary-foreground/70">‘{studio.tagline}’</p>
            <div className="mt-7 flex gap-3">
              <a href={"mailto:" + studio.email} className="rounded-full border border-primary-foreground/20 p-3 hover:border-accent hover:text-accent mh-transition" aria-label="Email Moodhaus Labs"><Mail className="h-4 w-4" /></a>
              <a href={studio.phoneHref} className="rounded-full border border-primary-foreground/20 p-3 hover:border-accent hover:text-accent mh-transition" aria-label="Call Moodhaus Labs"><Phone className="h-4 w-4" /></a>
              <a href="#instagram" className="rounded-full border border-primary-foreground/20 p-3 hover:border-accent hover:text-accent mh-transition" aria-label="Moodhaus Labs on Instagram"><Instagram className="h-4 w-4" /></a>
            </div>
          </div>
          <div>
            <p className="mh-eyebrow mb-6 text-[10px] text-accent">Explore</p>
            <nav className="grid gap-3">
              {footerLinks.map(link => (
                <Link key={link.href} href={link.href} className="text-primary-foreground/70 hover:text-accent mh-transition">{link.label}</Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="mh-eyebrow mb-6 text-[10px] text-accent">Studio</p>
            <p className="leading-relaxed text-primary-foreground/70">{studio.founder}<br />{studio.founderTitle}</p>
            <p className="mt-4 leading-relaxed text-primary-foreground/70">{studio.phone}<br />{studio.email}<br />{studio.location}</p>
          </div>
        </div>
        <div className="mt-20 flex flex-col justify-between gap-3 border-t border-primary-foreground/10 pt-6 text-[11px] uppercase tracking-[0.2em] text-primary-foreground/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Moodhaus Labs · San Diego, California</p>
          <p>Design | Visualize | Transform</p>
          <p className="normal-case tracking-normal">Imagery: Unsplash &amp; Pexels</p>
        </div>
      </div>
    </footer>
  )
}
