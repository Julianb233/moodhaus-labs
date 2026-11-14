"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowUpRight, ChevronLeft } from "lucide-react"
import { Header } from "@/components/moodhaus/header"
import { Footer } from "@/components/moodhaus/footer"
import { projects } from "@/lib/moodhaus-content"

export default function ProjectPage() {
  const params = useParams()
  const project = projects.find(item => item.id === params.id) || projects[0]
  const index = projects.indexOf(project)
  const next = projects[(index + 1) % projects.length]
  useEffect(() => { window.scrollTo(0, 0) }, [project.id])

  const story = [
    { label: "The brief", text: project.brief },
    { label: "Our approach", text: project.approach },
    { label: "The result", text: project.outcome },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <section className="relative h-[92svh] min-h-[560px] overflow-hidden bg-primary text-primary-foreground">
        <Image src={project.image} alt={project.name} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-primary/40" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-6 pb-16 lg:px-8">
          <Link href="/portfolio" className="mh-eyebrow mb-8 inline-flex items-center gap-2 text-[10px] text-primary-foreground/70 hover:text-accent mh-transition">
            <ChevronLeft className="h-4 w-4" /> Portfolio
          </Link>
          <p className="mh-eyebrow text-accent">{project.location} · {project.year}</p>
          <h1 className="mt-4 font-serif text-6xl font-light leading-[.92] sm:text-8xl">{project.name}</h1>
          <p className="mt-5 max-w-2xl font-serif text-2xl italic text-primary-foreground/80">{project.tagline}</p>
        </div>
      </section>

      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[.7fr_1.3fr] lg:px-8">
          <dl className="grid h-fit gap-8 border-t border-primary/15 pt-8 lg:sticky lg:top-32">
            <div><dt className="mh-eyebrow text-[10px] text-walnut">Location</dt><dd className="mt-2 font-serif text-2xl text-primary">{project.location}, San Diego</dd></div>
            <div><dt className="mh-eyebrow text-[10px] text-walnut">Scale</dt><dd className="mt-2 font-serif text-2xl text-primary">{project.size}</dd></div>
            <div><dt className="mh-eyebrow text-[10px] text-walnut">Scope</dt><dd className="mt-2 grid gap-1 text-foreground/80">{project.scope.map(s => <span key={s}>{s}</span>)}</dd></div>
          </dl>
          <div>
            <p className="font-serif text-3xl font-light leading-snug text-primary sm:text-4xl">{project.description}</p>
            <div className="mt-14 grid gap-10">
              {story.map(item => (
                <div key={item.label} className="grid gap-3 border-t border-primary/10 pt-8 sm:grid-cols-[180px_1fr]">
                  <p className="mh-eyebrow text-[10px] text-walnut">{item.label}</p>
                  <p className="text-lg leading-relaxed text-foreground/80">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper pb-24 sm:pb-32">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 pt-24 md:grid-cols-[1.2fr_.8fr] lg:px-8">
          {project.gallery.slice(1).map((src, i) => (
            <div key={src} className={"mh-image-frame relative overflow-hidden " + (i === 0 ? "aspect-[4/3] rounded-[1.5rem]" : "aspect-[3/4] rounded-t-full")}>
              <Image src={src} alt={project.name + " detail " + (i + 1)} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover mh-image-zoom" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 sm:flex-row sm:items-end lg:px-8">
          <div>
            <p className="mh-eyebrow text-[10px] text-accent">Next project</p>
            <Link href={"/project/" + next.id} className="mt-3 block font-serif text-5xl font-light hover:text-accent mh-transition sm:text-6xl">{next.name}</Link>
          </div>
          <Link href="/consultation" className="mh-btn inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Discuss a similar project <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
