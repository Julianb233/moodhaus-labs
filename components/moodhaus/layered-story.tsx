"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import type { StoryItem } from "@/lib/disciplines"
import { cn } from "@/lib/utils"

/**
 * Text scrolls on one side while a single framed image holds on the other and dissolves to
 * the picture for the paragraph in view. On phones each paragraph carries its own image.
 */
export function LayeredStory({ items, tone = "light", eyebrow, title, accent }: { items: StoryItem[]; tone?: "light" | "dark"; eyebrow: string; title: string; accent: string }) {
  const [active, setActive] = useState(0)
  const refs = useRef<(HTMLElement | null)[]>([])
  const dark = tone === "dark"

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index))
        })
      },
      { rootMargin: "-45% 0px -45% 0px" },
    )
    refs.current.forEach(el => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section className={cn("relative py-24 sm:py-32", dark ? "bg-primary text-primary-foreground" : "bg-background text-primary")}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div data-reveal className="max-w-3xl">
          <p className={cn("mh-eyebrow mb-5", dark ? "text-accent" : "text-walnut")}>{eyebrow}</p>
          <h2 className="font-serif text-5xl font-light leading-[.95] sm:text-7xl">
            {title} <em className={dark ? "text-accent" : "text-walnut"}>{accent}</em>
          </h2>
        </div>

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-2 lg:gap-20">
          {/* Desktop: held frame */}
          <div className="hidden lg:block">
            <div className="sticky top-[12vh] aspect-[4/5] max-h-[76vh] w-full overflow-hidden rounded-[6px]">
              {items.map((item, i) => (
                <div key={item.title} className={cn("absolute inset-0 transition-[opacity,transform] duration-[1200ms] ease-[cubic-bezier(.2,.7,.2,1)]", i === active ? "scale-100 opacity-100" : "scale-[1.04] opacity-0")}>
                  <Image src={item.image} alt={item.alt} fill sizes="45vw" className="object-cover" />
                </div>
              ))}
              <p className="mh-eyebrow absolute bottom-4 left-4 rounded-full bg-primary/70 px-3 py-1.5 text-[10px] text-accent backdrop-blur-sm">
                {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")} · {items[active].kicker}
              </p>
            </div>
          </div>

          <div>
            {items.map((item, i) => (
              <article
                key={item.title}
                ref={el => {
                  refs.current[i] = el
                }}
                data-index={i}
                className={cn("flex flex-col justify-center pb-16 last:pb-0 lg:min-h-[78vh] lg:pb-0", "transition-opacity duration-700", "lg:opacity-40", i === active && "lg:opacity-100")}
              >
                <div className="relative mb-7 aspect-[4/3] overflow-hidden rounded-[6px] lg:hidden">
                  <Image src={item.image} alt={item.alt} fill sizes="100vw" className="object-cover" />
                </div>
                <p className={cn("mh-eyebrow text-[10px]", dark ? "text-accent" : "text-walnut")}>
                  {item.meta ?? `${String(i + 1).padStart(2, "0")} · ${item.kicker}`}
                </p>
                <h3 className="mt-4 font-serif text-4xl font-light leading-[1.02] sm:text-5xl">{item.title}</h3>
                <p className={cn("mt-5 max-w-lg text-base leading-relaxed sm:text-lg", dark ? "text-primary-foreground/75" : "text-muted-foreground")}>{item.text}</p>
                {item.list && (
                  <ul className="mt-6 grid gap-2 text-sm">
                    {item.list.map(li => (
                      <li key={li} className="flex items-center gap-3">
                        <span className={cn("h-px w-5", dark ? "bg-accent" : "bg-bronze")} />
                        {li}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
