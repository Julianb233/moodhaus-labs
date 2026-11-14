import { Monogram } from "@/components/monogram"
import { person } from "@/lib/content"

export function SiteFooter() {
  return (
    <footer className="bg-deep-green text-primary-foreground/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-14 text-center sm:flex-row sm:justify-between sm:text-left lg:px-8">
        <a href="/" className="flex items-center gap-4 text-accent">
          <Monogram className="w-10" />
          <span className="aa-name text-xs">ALLAIE AISHA</span>
        </a>
        <nav className="mh-eyebrow flex gap-6 text-[9.5px]" aria-label="Footer">
          <a href="/journal" className="hover:text-accent">Journal</a>
          <a href="/links" className="hover:text-accent">Links</a>
          <a href="/#contact" className="hover:text-accent">Contact</a>
        </nav>
        <p className="mh-eyebrow text-[9px]">© {new Date().getFullYear()} Allaie Aisha · {person.studio}</p>
      </div>
    </footer>
  )
}
