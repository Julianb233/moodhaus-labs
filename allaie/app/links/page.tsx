import type { Metadata } from "next"
import { ArrowUpRight, BookOpen, CalendarDays, Globe, Mail, Phone, UserPlus } from "lucide-react"
import { Monogram } from "@/components/monogram"
import { ShareButton } from "@/components/share-button"
import { TopoDrift } from "@/components/topo-drift"
import { cn } from "@/lib/utils"
import { person, STUDIO_URL } from "@/lib/content"
import { articles } from "@/lib/articles"

export const metadata: Metadata = {
  title: "Allaie Aisha · Links",
  description: "Book a consultation, read the journal, or save Allaie Aisha's contact. Founder & Principal Designer, Moodhaus Labs, San Diego County.",
  alternates: { canonical: "https://allaieaisha.com/links" },
  openGraph: { url: "https://allaieaisha.com/links", title: "Allaie Aisha · Links", images: ["/og.png"] },
}

const row = "mh-transition group flex w-full items-center gap-4 rounded-[6px] border px-5 py-4 text-left"
const plain = "border-primary-foreground/15 bg-primary-foreground/[.04] hover:border-accent/60 hover:bg-primary-foreground/[.08]"
const primary = "border-accent bg-accent text-primary hover:bg-[#ddcaa6]"

export default function Links() {
  const latest = articles[0]
  const links = [
    { label: "Book a consultation", note: "Start with a conversation", href: STUDIO_URL + "/consultation", icon: CalendarDays, external: true, primary: true },
    { label: "Allaie's website", note: "allaieaisha.com", href: "/", icon: Globe },
    { label: "The Journal", note: latest ? `Latest: ${latest.title}` : "Notes on designing for feeling", href: "/journal", icon: BookOpen },
    { label: "Moodhaus Labs studio", note: "Architecture · Landscape · 3D", href: STUDIO_URL, icon: ArrowUpRight, external: true },
    ...person.socials.map(s => ({ label: s.label, note: "", href: s.href, icon: ArrowUpRight, external: true })),
  ]

  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-primary text-primary-foreground">
      <TopoDrift opacity={0.16} />
      <TopoDrift variant={2} reverse opacity={0.08} />
      <div className="relative mx-auto flex min-h-[100svh] max-w-md flex-col px-5 pb-10 pt-14">
        <header className="flex flex-col items-center text-center">
          <div className="h-28 w-28 overflow-hidden rounded-full border border-accent/50 bg-deep-green p-1">
            {person.portrait ? (
              <img src={person.portrait} alt={`Portrait of ${person.name}`} className="h-full w-full rounded-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-accent"><Monogram className="w-14" /></div>
            )}
          </div>
          <h1 className="aa-name mt-7 text-2xl text-accent">ALLAIE AISHA</h1>
          <p className="mh-eyebrow mt-3 text-[9.5px] text-primary-foreground/70">{person.title} · {person.studio}</p>
          <p className="mt-4 font-serif text-xl italic text-primary-foreground/90">{person.tagline}</p>
        </header>

        <nav className="mt-10 space-y-3" aria-label="Links">
          {links.map(l => (
            <a key={l.label} href={l.href} {...(l.external ? { target: "_blank", rel: "noopener" } : {})} className={cn(row, l.primary ? primary : plain)}>
              <l.icon className={"h-5 w-5 shrink-0 " + (l.primary ? "text-primary" : "text-accent")} />
              <span className="min-w-0 flex-1">
                <span className="block text-[15px] font-medium">{l.label}</span>
                {l.note && <span className={"mt-0.5 block truncate text-xs " + (l.primary ? "text-primary/70" : "text-primary-foreground/60")}>{l.note}</span>}
              </span>
              <ArrowUpRight className="h-4 w-4 shrink-0 opacity-60 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </nav>

        <div className="mt-6 grid grid-cols-3 gap-3 text-[11px] font-semibold uppercase tracking-[0.18em]">
          <a href={person.phoneHref} className="flex flex-col items-center gap-2 rounded-[6px] border border-primary-foreground/15 py-4 hover:border-accent/60 mh-transition">
            <Phone className="h-4 w-4 text-accent" /> Call
          </a>
          <a href={`mailto:${person.email}`} className="flex flex-col items-center gap-2 rounded-[6px] border border-primary-foreground/15 py-4 hover:border-accent/60 mh-transition">
            <Mail className="h-4 w-4 text-accent" /> Email
          </a>
          <a href="/allaie-aisha.vcf" download className="flex flex-col items-center gap-2 rounded-[6px] border border-primary-foreground/15 py-4 hover:border-accent/60 mh-transition">
            <UserPlus className="h-4 w-4 text-accent" /> Save
          </a>
        </div>

        <ShareButton
          url="https://allaieaisha.com/links"
          title="Allaie Aisha"
          text="Allaie Aisha, Founder & Principal Designer, Moodhaus Labs"
          className="mh-btn mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-accent/50 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent"
        />

        <figure className="mt-10 flex flex-col items-center">
          <div className="rounded-[6px] bg-background p-4">
            <img src="/qr-links.svg" alt="QR code linking to allaieaisha.com/links" className="h-32 w-32" />
          </div>
          <figcaption className="mh-eyebrow mt-3 text-center text-[9px] text-primary-foreground/60">Scan to share · allaieaisha.com/links</figcaption>
        </figure>

        <p className="mh-eyebrow mt-auto pt-10 text-center text-[9px] text-primary-foreground/45">{person.location}</p>
      </div>
    </main>
  )
}
