import { cn } from "@/lib/utils"

/** Interlaced "AA" monogram drawn as hairline strokes, so it stays crisp at any size. */
export function Monogram({ className, strokeWidth = 1.2 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 120 80" className={cn("block", className)} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" aria-hidden="true">
      <path d="M8 74 L38 6 L68 74" vectorEffect="non-scaling-stroke" />
      <path d="M20 48 L56 48" vectorEffect="non-scaling-stroke" />
      <path d="M52 74 L82 6 L112 74" vectorEffect="non-scaling-stroke" />
      <path d="M64 48 L100 48" vectorEffect="non-scaling-stroke" />
    </svg>
  )
}
