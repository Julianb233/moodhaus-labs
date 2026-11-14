"use client"

import { FormEvent, useState } from "react"
import { ArrowUpRight, Check, Loader2, Mail, Phone } from "lucide-react"
import { VisionUpload, type VisionPhoto } from "@/components/moodhaus/vision-upload"
import { Header } from "@/components/moodhaus/header"
import { Footer } from "@/components/moodhaus/footer"
import { PageHero } from "@/components/moodhaus/page-hero"
import { media, studio } from "@/lib/moodhaus-content"

const engagements = [
  { name: "New residence", detail: "Architecture + landscape", description: "A ground-up home designed with its gardens, terraces, and water from the very first sketch." },
  { name: "Landscape transformation", detail: "Gardens · pools · lighting", description: "Re-imagine the land around an existing home: outdoor rooms, water features, planting, and night lighting." },
  { name: "Visualization study", detail: "Photoreal 3D", description: "Cinematic renders and walkthroughs to explore directions and decide with confidence before you build." },
]

const field = "w-full rounded-md border border-primary/15 bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-bronze/40"

type Status = "idle" | "sending" | "sent" | "fallback"

export default function ConsultationPage() {
  const [status, setStatus] = useState<Status>("idle")
  const [photos, setPhotos] = useState<VisionPhoto[]>([])

  const openEmailDraft = (form: FormData) => {
    const subject = `Consultation request: ${form.get("project") || "new project"} in ${form.get("location") || "San Diego"}`
    const body = [
      `Name: ${form.get("name") || ""}`,
      `Email: ${form.get("email") || ""}`,
      `Phone: ${form.get("phone") || ""}`,
      `Project type: ${form.get("project") || ""}`,
      `Property location: ${form.get("location") || ""}`,
      `Investment range: ${form.get("budget") || ""}`,
      `Ideal timeline: ${form.get("timeline") || ""}`,
      "",
      `${form.get("message") || ""}`,
      photos.length ? `\n(I have ${photos.length} photo(s) of the property and my vision. I'll attach them to this email.)` : "",
    ].join("\n")
    window.location.href = `mailto:${studio.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    photos.forEach(p => form.append("photos", p.file, p.file.name))
    setStatus("sending")
    try {
      const res = await fetch("/api/consultation", { method: "POST", body: form })
      if (res.ok) {
        setStatus("sent")
        return
      }
    } catch {
      /* fall through to the email draft */
    }
    setStatus("fallback")
    openEmailDraft(form)
  }

  return (
    <main className="min-h-screen">
      <Header />
      <PageHero eyebrow="Private consultation" title="Let’s walk" accent="your land together." intro="Tell us about your property and what you imagine. We take on a limited number of commissions each year so every client has our full attention." image={media.duskPools} imageAlt="Modern luxury home with pools at dusk" />

      <section className="bg-card py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 md:grid-cols-3 lg:px-8">
          {engagements.map(item => (
            <article key={item.name} className="mh-card rounded-[6px] bg-paper p-8">
              <p className="mh-eyebrow text-[10px] text-walnut">{item.detail}</p>
              <h2 className="mt-4 font-serif text-3xl text-primary">{item.name}</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div>
            <p className="mh-eyebrow mb-5 text-walnut">Start the conversation</p>
            <h2 className="font-serif text-5xl font-light leading-none text-primary sm:text-6xl">
              Every great home
              <br />
              <em className="text-walnut">starts with a question.</em>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">Share a few photos of your property or homes you love, and {studio.founder} will review them before you meet. She personally reviews every inquiry and replies within two business days.</p>
            <div className="mt-8 grid gap-3">
              <a href={"mailto:" + studio.email} className="inline-flex items-center gap-3 text-primary underline-offset-4 hover:underline"><Mail className="h-4 w-4" /> {studio.email}</a>
              <a href={studio.phoneHref} className="inline-flex items-center gap-3 text-primary underline-offset-4 hover:underline"><Phone className="h-4 w-4" /> {studio.phone}</a>
            </div>
          </div>
          <form onSubmit={submit} className="relative grid gap-5 rounded-[6px] border border-primary/10 bg-paper p-7 sm:grid-cols-2 sm:p-10">
            <div><label htmlFor="name" className="mb-2 block text-sm font-medium">Full name</label><input id="name" name="name" required className={field} /></div>
            <div><label htmlFor="email" className="mb-2 block text-sm font-medium">Email</label><input id="email" name="email" type="email" required className={field} /></div>
            <div><label htmlFor="phone" className="mb-2 block text-sm font-medium">Phone</label><input id="phone" name="phone" type="tel" className={field} /></div>
            <div><label htmlFor="location" className="mb-2 block text-sm font-medium">Property location</label><input id="location" name="location" placeholder="La Jolla, Rancho Santa Fe…" className={field} /></div>
            <div><label htmlFor="project" className="mb-2 block text-sm font-medium">Project type</label><select id="project" name="project" className={field}><option>New residence</option><option>Renovation or addition</option><option>Landscape transformation</option><option>Interiors</option><option>Visualization study</option></select></div>
            <div><label htmlFor="budget" className="mb-2 block text-sm font-medium">Investment range</label><select id="budget" name="budget" className={field}><option>$500k – $1M</option><option>$1M – $3M</option><option>$3M – $7M</option><option>$7M+</option><option>Prefer to discuss</option></select></div>
            <div className="sm:col-span-2"><label htmlFor="timeline" className="mb-2 block text-sm font-medium">Ideal timeline</label><input id="timeline" name="timeline" placeholder="Begin design this spring, move in 2028…" className={field} /></div>
            <div className="sm:col-span-2"><label htmlFor="message" className="mb-2 block text-sm font-medium">Tell us about the vision</label><textarea id="message" name="message" rows={5} placeholder="How do you want to live in this home?" className={field + " resize-y"} /></div>
            <div className="sm:col-span-2">
              <p className="mb-2 block text-sm font-medium">Your property &amp; inspiration <span className="font-normal text-muted-foreground">(optional)</span></p>
              <VisionUpload photos={photos} onChange={setPhotos} />
            </div>
            <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden"><label htmlFor="company_website">Leave empty</label><input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" /></div>
            <div className="sm:col-span-2">
              <button type="submit" disabled={status === "sending" || status === "sent"} className="mh-btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground">
                {status === "sending" ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending</> : status === "sent" ? <><Check className="h-4 w-4" /> Request received</> : status === "fallback" ? <><Check className="h-4 w-4" /> Email draft opened</> : <>Request my consultation <ArrowUpRight className="h-4 w-4" /></>}
              </button>
              <p aria-live="polite" className="mt-3 text-center text-sm text-muted-foreground">
                {status === "sent" && "Thank you. We'll be in touch within two business days."}
                {status === "fallback" && (photos.length ? "We've opened an email draft with your details. Please attach your photos to it before sending." : "We've opened an email draft with your details.")}
              </p>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  )
}
