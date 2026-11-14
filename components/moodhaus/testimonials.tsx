import { testimonials } from "@/lib/moodhaus-content"
import { TopoDrift } from "./topo-drift"

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-background py-28 sm:py-36">
      <TopoDrift tone="bronze" reverse />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mh-eyebrow mb-5 text-walnut">In our clients’ words</p>
          <h2 className="font-serif text-5xl font-light leading-none text-primary sm:text-7xl">
            Quietly <em className="text-walnut">extraordinary.</em>
          </h2>
        </div>
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {testimonials.map(item => (
            <figure key={item.detail} className="mh-testimonial mh-card flex flex-col justify-between rounded-[1.5rem] border border-primary/10 bg-paper p-8">
              <span className="font-serif text-6xl leading-none text-accent">“</span>
              <blockquote className="mt-2 font-serif text-2xl font-light leading-snug text-primary">{item.quote}</blockquote>
              <figcaption className="mh-eyebrow mt-10 flex items-center gap-3 text-[10px] text-foreground/60">
                <span className="h-px w-8 bg-bronze" />
                {item.name} · {item.detail}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
