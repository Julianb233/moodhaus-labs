/**
 * SVG filters that turn a photo or render into studio drawings, used by the
 * "line to light" and render-pipeline sections. Rendered once per page.
 *  - #mh-ink: edge-detected linework, ink-green lines on linen paper.
 * Filters apply to cross-origin images visually (no canvas reads), so hotlinked media works.
 */
export function InkFilter() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
      <filter id="mh-ink" colorInterpolationFilters="sRGB" x="0" y="0" width="100%" height="100%">
        <feColorMatrix type="saturate" values="0" />
        <feGaussianBlur stdDeviation="1" />
        <feConvolveMatrix order="3" kernelMatrix="-1 -1 -1 -1 8 -1 -1 -1 -1" preserveAlpha="true" />
        <feComponentTransfer>
          <feFuncR type="linear" slope="-9" intercept="1.12" />
          <feFuncG type="linear" slope="-9" intercept="1.12" />
          <feFuncB type="linear" slope="-9" intercept="1.12" />
        </feComponentTransfer>
        <feColorMatrix type="matrix" values="0.804 0 0 0 0.114  0.741 0 0 0 0.145  0.737 0 0 0 0.098  0 0 0 1 0" />
      </filter>
    </svg>
  )
}

/** CSS filter strings for the intermediate render stages. */
export const stageFilter = {
  line: "url(#mh-ink)",
  clay: "grayscale(1) brightness(1.22) contrast(.82) sepia(.12)",
  material: "saturate(.55) brightness(1.06) contrast(.9)",
  light: "none",
} as const
