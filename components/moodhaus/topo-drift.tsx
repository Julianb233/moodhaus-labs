import type React from "react"
import { cn } from "@/lib/utils"

type Props = {
  className?: string
  /** Which contour sheet to use (two different terrains). */
  variant?: 1 | 2
  /** "gold" for dark sections, "bronze" for light ones. */
  tone?: "gold" | "bronze"
  /** Reverse the drift so neighbouring sections don't move in lockstep. */
  reverse?: boolean
  /** Overrides the tone's default strength (gold .16, bronze .22). */
  opacity?: number
}

/**
 * Slow, ambient contour-line overlay. The lines drift and turn a degree or two over
 * about a minute and a half, and a soft band of light travels along them now and then,
 * like late sun catching wood grain. Pure CSS (compositor-only transforms), off for
 * reduced motion. The parent needs `relative overflow-hidden` (or overflow-clip).
 */
export function TopoDrift({ className, variant = 1, tone = "gold", reverse = false, opacity }: Props) {
  return (
    <div
      aria-hidden="true"
      data-tone={tone}
      style={opacity === undefined ? undefined : ({ "--drift-opacity": opacity } as React.CSSProperties)}
      className={cn("mh-drift pointer-events-none absolute inset-0", className)}
    >
      <div className={cn("mh-drift-lines", variant === 2 && "mh-drift-lines--alt", reverse && "mh-drift-lines--reverse")}>
        <span className="mh-drift-sheen" />
      </div>
    </div>
  )
}
