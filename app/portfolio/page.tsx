"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useEffect, useState } from "react"
import { Header } from "@/components/moodhaus/header"
import { Footer } from "@/components/moodhaus/footer"
import { PageHero } from "@/components/moodhaus/page-hero"
import { CTABanner } from "@/components/moodhaus/cta-banner"
import { media, projectCategories, projects } from "@/lib/moodhaus-content"

export default function PortfolioPage() {
  const [selected, setSelected] = useState("all")
  useEffect(() => {
    const category = new URLSearchParams(window.location.search).get("category")
    if (category && projectCategories.some(item => item.value === category)) {
      const timer = window.setTimeout(() => setSelected(category), 0)
      return () => window.clearTimeout(timer)
    }
  }, [])
  const filtered = selected === "all" ? projects : projects.filter(p => p.category === selected)

  return (
    <main className="min-h-screen">
      <Header />
      <PageHero
        eyebrow="Portfolio"
        title="Spaces shaped"
        accent="by land and light."
        intro="Residences, landscapes, interiors, and visualization studies across coastal San Diego."
        image={media.coastHomes}
        imageAlt="Coastal San Diego homes above the ocean"
      />
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 flex gap-2 overflow-x-auto pb-2">
            {projectCategories.map(item => (
              <button
                key={item.value}
                type="button"
                onClick={() => setSelected(item.value)}
                className={"mh-eyebrow shrink-0 rounded-full px-5 py-2.5 text-[10px] mh-transition " + (selected === item.value ? "bg-primary text-primary-foreground" : "border border-primary/15 text-foreground/70 hover:border-primary/40")}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
            {filtered.map((project, i) => (
              <article key={project.id} className={"mh-fade-up group " + (i % 2 === 1 ? "md:mt-24" : "")}>
                <Link href={"/project/" + project.id} className="block">
                  <div className={"mh-image-frame relative aspect-[4/5] overflow-hidden bg-card  rounded-[6px]"}>
                    <Image src={project.image} alt={project.name} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover mh-image-zoom" />
                    {project.badge && <span className="absolute left-5 top-5 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">{project.badge}</span>}
                  </div>
                  <div className="flex items-start justify-between gap-4 pt-6">
                    <div>
                      <p className="mh-eyebrow text-[10px] text-walnut">{project.location} · {project.year}</p>
                      <h2 className="mt-2 font-serif text-4xl text-primary">{project.name}</h2>
                      <p className="mt-2 max-w-md text-muted-foreground">{project.tagline}</p>
                    </div>
                    <span className="mt-1 rounded-full border border-primary/20 p-2.5 text-primary mh-transition group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
      <Footer />
    </main>
  )
}
