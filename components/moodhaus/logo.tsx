import { cn } from "@/lib/utils"

/** The MOODHAUS / DESIGN | VISUALIZE | TRANSFORM / LABS lockup, set in type so it stays crisp at any size. */
export function LogoLockup({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <span className={cn("inline-flex flex-col items-center text-center leading-none", className)}>
      <span className="mh-wordmark text-[1em] font-light">MOODHAUS</span>
      {!compact && (
        <span className="mt-[.55em] text-[.17em] font-medium tracking-[.32em] opacity-90">DESIGN | VISUALIZE | TRANSFORM</span>
      )}
      <span className={cn("mh-wordmark font-light", compact ? "mt-[.2em] text-[.5em]" : "mt-[.38em] text-[.78em]")}>LABS</span>
      <span aria-hidden="true" className="mt-[.5em] h-px w-[1.1em] bg-current opacity-80" />
    </span>
  )
}

/** Small horizontal wordmark for the navigation. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-baseline gap-2 leading-none", className)}>
      <span className="mh-wordmark text-[15px] font-normal sm:text-base">MOODHAUS</span>
      <span className="mh-wordmark text-[10px] font-medium opacity-70">LABS</span>
    </span>
  )
}
