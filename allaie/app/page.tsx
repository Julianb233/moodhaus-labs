import { ArrowDown, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"
import { Header } from "@/components/header"
import { Monogram } from "@/components/monogram"
import { MoodSelector } from "@/components/mood-selector"
import { PageMotion } from "@/components/page-motion"
import { TopoDrift } from "@/components/topo-drift"
import { SiteFooter } from "@/components/site-footer"
import { articles } from "@/lib/articles"
import { approach, credentials, disciplines, imagery, kindWords, person, philosophy, press, STUDIO_URL, story } from "@/lib/content"

function Letters({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span aria-hidden="true">
      {text.split("").map((ch, i) => (
        <span key={i} className="aa-letter" style={{ animationDelay: `${delay + i * 0.07}s` }}>
          {ch === " " ? " " : ch}
        </span>
      ))}
    </span>
  )
}

function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={"mh-eyebrow flex items-center gap-4 text-[10.5px] " + className}><span className="aa-rule" />{children}</p>
}

export default function Home() {
  return (
    <>
      <Header />
      <PageMotion />
      <main id="top">
        {/* ---------- Opening: the business-card lockup, alive ---------- */}
        <section data-hero className="relative flex h-[100svh] min-h-[620px] flex-col overflow-hidden bg-primary text-primary-foreground">
          <TopoDrift opacity={0.2} />
          <TopoDrift variant={2} reverse opacity={0.1} />
          <div className="mh-grain" />
          <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-6 text-center">
            <p className="mh-eyebrow mh-fade-up text-[10px] text-accent sm:text-[11px]" style={{ animationDelay: ".1s" }}>
              {person.title} · {person.studio}
            </p>
            <h1 className="aa-name mt-8 text-[12.5vw] text-accent sm:text-[9vw] lg:text-[6.4vw] 2xl:text-[6rem]" aria-label={person.name}>
              <span className="block lg:inline"><Letters text="ALLAIE" delay={0.25} /></span>
              <span className="hidden lg:inline">{" "}</span>
              <span className="mt-[.18em] block lg:mt-0 lg:inline"><Letters text="AISHA" delay={0.55} /></span>
            </h1>
            <span className="aa-hairline aa-line-in mt-10 w-40" style={{ animationDelay: "1.1s" }} />
            <p className="mh-eyebrow mh-fade-up mt-6 text-[9px] text-primary-foreground/75 sm:text-[10px]" style={{ animationDelay: "1.25s" }}>
              Design&nbsp;&nbsp;|&nbsp;&nbsp;Visualize&nbsp;&nbsp;|&nbsp;&nbsp;Transform
            </p>
            <p className="mh-fade-up mt-8 max-w-md font-serif text-2xl font-light italic text-primary-foreground/90 sm:text-3xl" style={{ animationDelay: "1.45s" }}>
              {person.tagline}
            </p>
          </div>
          <div className="relative mx-auto flex w-full max-w-7xl items-end justify-between px-6 pb-8 text-primary-foreground/65 lg:px-8">
            <p className="mh-eyebrow text-[9px]">{person.location}</p>
            <a href="#philosophy" className="mh-scroll-cue flex items-center gap-2 text-[9px] mh-eyebrow hover:text-accent" aria-label="Scroll to philosophy">
              Scroll <ArrowDown className="h-3.5 w-3.5" />
            </a>
          </div>
        </section>

        {/* ---------- Philosophy ---------- */}
        <section id="philosophy" className="relative overflow-hidden bg-background">
          <TopoDrift tone="bronze" opacity={0.14} />
          <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:px-8 lg:py-44">
            <Eyebrow className="text-walnut">{philosophy.eyebrow}</Eyebrow>
            <h2 data-reveal className="mt-10 font-serif text-[2.6rem] font-light leading-[1.05] text-primary sm:text-6xl lg:text-[5.4rem]">
              Before a single line is drawn, I ask <em className="text-walnut">how you want to feel</em> there.
            </h2>
            <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12">
              <p data-reveal className="text-lg leading-relaxed text-muted-foreground lg:col-span-6 lg:col-start-7">
                {philosophy.body}
              </p>
            </div>
          </div>
        </section>

        {/* ---------- Cinematic band ---------- */}
        <section aria-label="San Diego coastline" className="relative h-[62svh] min-h-[380px] overflow-hidden bg-deep-green sm:h-[78svh]">
          <div data-parallax="18" className="absolute inset-x-0 -top-[12%] h-[124%]">
            <img src={imagery.band} alt={imagery.bandAlt} className="h-full w-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/20" />
          <div className="relative mx-auto flex h-full max-w-7xl items-end px-6 pb-10 lg:px-8 lg:pb-14">
            <p data-reveal className="max-w-xl font-serif text-3xl font-light italic leading-tight text-primary-foreground sm:text-5xl">
              From the coast to the canyons of San Diego County.
            </p>
          </div>
        </section>

        {/* ---------- Story ---------- */}
        <section id="story" className="relative bg-paper">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 sm:py-32 lg:grid-cols-12 lg:gap-20 lg:px-8 lg:py-40">
            <div className="lg:col-span-5">
              <div data-img-reveal className="aa-frame relative aspect-[4/5] bg-primary text-accent mh-shadow-lg lg:sticky lg:top-28">
                {person.portrait ? (
                  <>
                    <img src={person.portrait} alt={`Portrait of ${person.name} above the Mediterranean coast`} className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent" />
                  </>
                ) : (
                  <>
                    <TopoDrift opacity={0.22} />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <Monogram className="w-32 sm:w-40" />
                      <p className="aa-name mt-10 text-sm">ALLAIE AISHA</p>
                      <span className="aa-rule mt-5 w-10" />
                    </div>
                  </>
                )}
                <p className="mh-eyebrow absolute inset-x-0 bottom-0 px-6 pb-5 text-center text-[9px] text-primary-foreground/70">
                  Founder · Principal Designer
                </p>
              </div>
            </div>
            <div className="lg:col-span-7 lg:pt-10">
              <Eyebrow className="text-walnut">{story.eyebrow}</Eyebrow>
              <h2 data-reveal className="mt-8 font-serif text-5xl font-light leading-[1.02] text-primary sm:text-6xl lg:text-7xl">
                {story.heading}
              </h2>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
                {story.paragraphs.map((p, i) => (
                  <p key={i} data-reveal className={i === 0 ? "text-xl text-foreground sm:text-2xl sm:leading-snug" : ""}>
                    {p}
                  </p>
                ))}
              </div>
              <p data-reveal className="mt-12 font-serif text-4xl italic text-walnut">{story.signature}</p>

              <dl className="mt-16 grid gap-px overflow-hidden rounded-[6px] border bg-border sm:grid-cols-3">
                {disciplines.map(d => (
                  <div key={d.name} className="bg-paper p-6">
                    <dt className="mh-eyebrow text-[9.5px] text-walnut">{d.verb}</dt>
                    <dd className="mt-3 font-serif text-2xl text-primary">{d.name}</dd>
                  </div>
                ))}
              </dl>

              {credentials.length > 0 && (
                <ul className="mt-12 divide-y border-y">
                  {credentials.map(c => (
                    <li key={c.title} className="flex flex-wrap justify-between gap-2 py-4">
                      <span className="font-serif text-xl text-primary">{c.title}</span>
                      <span className="text-sm text-muted-foreground">{c.detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>

        {/* ---------- The practice ---------- */}
        <section id="practice" className="relative overflow-hidden bg-primary text-primary-foreground">
          <TopoDrift variant={2} opacity={0.12} />
          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <Eyebrow className="text-accent">The practice · {person.studio}</Eyebrow>
                <h2 data-reveal className="mt-8 font-serif text-5xl font-light leading-[1.02] sm:text-6xl lg:text-7xl">
                  One hand, from the first sketch <em className="text-accent">to the last leaf.</em>
                </h2>
              </div>
              <p data-reveal className="text-lg leading-relaxed text-primary-foreground/75 lg:col-span-5">
                Through Moodhaus Labs, Allaie brings architecture, landscape and visualization into a single studio, so the house, the garden and the way you will see them are conceived together.
              </p>
            </div>
            <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8 lg:mt-24">
              {disciplines.map((d, i) => (
                <a key={d.name} href={STUDIO_URL + d.href} target="_blank" rel="noopener" className={"group block " + (i === 1 ? "md:mt-20" : "")}>
                  <div data-img-reveal className="aa-frame relative aspect-[4/5] bg-deep-green">
                    <img src={d.image} alt={d.alt} loading="lazy" className="mh-image-zoom absolute inset-0 h-full w-full object-cover" />
                    <span className="absolute left-5 top-5 rounded-full bg-primary/70 px-3 py-1.5 text-[9.5px] mh-eyebrow text-accent backdrop-blur">{d.no} · {d.verb}</span>
                  </div>
                  <h3 className="mt-6 flex items-center justify-between font-serif text-3xl">
                    {d.name}
                    <ArrowUpRight className="h-5 w-5 text-accent transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </h3>
                  <p className="mt-3 leading-relaxed text-primary-foreground/70">{d.text}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Moods ---------- */}
        <section id="moods" className="relative overflow-hidden bg-deep-green text-primary-foreground">
          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-36">
            <div className="mb-14 max-w-3xl lg:mb-20">
              <Eyebrow className="text-accent">Designed for a mood</Eyebrow>
              <h2 data-reveal className="mt-8 font-serif text-5xl font-light leading-[1.02] sm:text-6xl">
                Every room begins <em className="text-accent">as a feeling.</em>
              </h2>
              <p data-reveal className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/70">
                Seven moods Allaie returns to again and again, and the spaces she shapes around them.
              </p>
            </div>
            <MoodSelector />
          </div>
        </section>

        {/* ---------- Approach ---------- */}
        <section id="approach" className="relative bg-background">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-32">
                  <Eyebrow className="text-walnut">How Allaie works</Eyebrow>
                  <h2 data-reveal className="mt-8 font-serif text-5xl font-light leading-[1.02] text-primary sm:text-6xl">
                    A calm, <em className="text-walnut">considered</em> process.
                  </h2>
                  <p className="mt-6 leading-relaxed text-muted-foreground">
                    Moodhaus Labs is a design studio. Allaie designs and visualizes; your chosen builder builds, with a complete package in hand.
                  </p>
                </div>
              </div>
              <ol className="lg:col-span-7 lg:col-start-6">
                {approach.map(s => (
                  <li key={s.no} data-reveal className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-primary/15 py-10 sm:grid-cols-[6rem_1fr]">
                    <span className="font-serif text-3xl italic text-walnut sm:text-4xl">{s.no}</span>
                    <div>
                      <h3 className="font-serif text-3xl text-primary sm:text-4xl">{s.title}</h3>
                      <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ---------- Press and kind words (shown only once real ones are added) ---------- */}
        {(press.length > 0 || kindWords.length > 0) && (
          <section className="bg-paper">
            <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
              {kindWords.map(k => (
                <figure key={k.name} data-reveal className="mx-auto mb-16 max-w-3xl text-center">
                  <blockquote className="font-serif text-3xl font-light italic leading-snug text-primary sm:text-4xl">“{k.quote}”</blockquote>
                  <figcaption className="mh-eyebrow mt-6 text-[10px] text-walnut">{k.name} · {k.place}</figcaption>
                </figure>
              ))}
              {press.length > 0 && (
                <ul className="grid gap-px overflow-hidden rounded-[6px] border bg-border sm:grid-cols-2 lg:grid-cols-3">
                  {press.map(p => (
                    <li key={p.title} className="bg-paper p-6">
                      <p className="mh-eyebrow text-[9.5px] text-walnut">{p.outlet}{p.year ? " · " + p.year : ""}</p>
                      <p className="mt-3 font-serif text-2xl text-primary">{p.href ? <a href={p.href} className="mh-link-underline">{p.title}</a> : p.title}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        )}

        {/* ---------- Journal ---------- */}
        <section id="journal" className="bg-paper">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Eyebrow className="text-walnut">The Journal</Eyebrow>
                <h2 data-reveal className="mt-8 font-serif text-5xl font-light leading-[1.02] text-primary sm:text-6xl">
                  Notes on designing <em className="text-walnut">for feeling.</em>
                </h2>
              </div>
              <a href="/journal" className="mh-eyebrow mh-link-underline inline-flex items-center gap-2 text-[10.5px] text-primary">All articles <ArrowUpRight className="h-4 w-4" /></a>
            </div>
            <div className="mt-14 grid gap-10 md:grid-cols-3">
              {articles.slice(0, 3).map(a => (
                <a key={a.slug} href={`/journal/${a.slug}`} className="group block" data-reveal>
                  <div className="aa-frame relative aspect-[4/3] bg-deep-green">
                    <img src={a.image} alt={a.imageAlt} loading="lazy" className="mh-image-zoom absolute inset-0 h-full w-full object-cover" />
                  </div>
                  <p className="mh-eyebrow mt-5 text-[9.5px] text-walnut">{a.category} · {a.readMinutes} min read</p>
                  <h3 className="mt-3 font-serif text-2xl leading-snug text-primary">{a.title}</h3>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Dusk band with tagline ---------- */}
        <section aria-label="Tagline" className="relative h-[70svh] min-h-[420px] overflow-hidden bg-deep-green">
          <div data-parallax="16" className="absolute inset-x-0 -top-[10%] h-[120%]">
            <img src={imagery.dusk} alt={imagery.duskAlt} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(22,31,24,.35),rgba(22,31,24,.8))]" />
          <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-primary-foreground">
            <Monogram className="w-14 text-accent" />
            <p data-reveal className="mt-8 max-w-3xl font-serif text-4xl font-light italic leading-tight sm:text-6xl">
              Exceptional spaces for everyday living.
            </p>
          </div>
        </section>

        {/* ---------- Contact ---------- */}
        <section id="contact" className="relative overflow-hidden bg-primary text-primary-foreground">
          <TopoDrift opacity={0.16} reverse />
          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
            <div className="grid gap-14 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <Eyebrow className="text-accent">Work with Allaie</Eyebrow>
                <h2 data-reveal className="mt-8 font-serif text-5xl font-light leading-[1.02] sm:text-6xl lg:text-7xl">
                  Tell her how you <em className="text-accent">want to feel</em> at home.
                </h2>
                <p data-reveal className="mt-8 max-w-lg text-lg leading-relaxed text-primary-foreground/75">
                  Allaie works with a select group of homeowners across San Diego County. Every project begins with a conversation.
                </p>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <a href={STUDIO_URL + "/consultation"} target="_blank" rel="noopener" className="mh-btn inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                    Book a consultation <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a href={`mailto:${person.email}?subject=${encodeURIComponent("Hello Allaie")}`} className="mh-btn inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.22em]">
                    Write to Allaie
                  </a>
                </div>
              </div>
              <div className="lg:col-span-4 lg:col-start-9 lg:self-end">
                <ul className="divide-y divide-primary-foreground/15 border-y border-primary-foreground/15">
                  <li>
                    <a href={person.phoneHref} className="flex items-center gap-4 py-5 hover:text-accent mh-transition">
                      <Phone className="h-4 w-4 text-accent" /> {person.phone}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${person.email}`} className="flex items-center gap-4 break-all py-5 hover:text-accent mh-transition">
                      <Mail className="h-4 w-4 shrink-0 text-accent" /> {person.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-4 py-5">
                    <MapPin className="h-4 w-4 text-accent" /> {person.location}
                  </li>
                  <li>
                    <a href={STUDIO_URL} target="_blank" rel="noopener" className="flex items-center gap-4 py-5 hover:text-accent mh-transition">
                      <ArrowUpRight className="h-4 w-4 text-accent" /> Visit Moodhaus Labs
                    </a>
                  </li>
                  {person.socials.map(s => (
                    <li key={s.href}>
                      <a href={s.href} target="_blank" rel="noopener" className="flex items-center gap-4 py-5 hover:text-accent mh-transition">
                        <ArrowUpRight className="h-4 w-4 text-accent" /> {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
