import { TOPO_PATHS, TOPO_VIEWBOX } from "@/lib/topo-paths"
import { cn } from "@/lib/utils"

/**
 * The Moodhaus contour-line motif as inline SVG. Paths carry `data-topo` so GSAP can
 * draw them on with stroke-dashoffset while the visitor scrolls.
 */
export function TopoLines({ className, strokeWidth = 1.3 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      viewBox={TOPO_VIEWBOX}
      preserveAspectRatio="xMidYMid slice"
      className={cn("pointer-events-none", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {TOPO_PATHS.map((d, i) => (
        <path key={i} d={d} data-topo="" vectorEffect="non-scaling-stroke" />
      ))}
    </svg>
  )
}
