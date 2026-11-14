# Moodhaus Labs: brand kit

Sampled from the studio's business cards. The full visual guide is at
[`docs/brand-guide.html`](docs/brand-guide.html) (open it in a browser).

**Tagline:** *Exceptional Spaces for Everyday Living*
**Pillars:** Design | Visualize | Transform

## Color

| Name | Hex | RGB | CMYK | Use |
|---|---|---|---|---|
| Forest | `#202D23` | 32 45 35 | 29 0 22 82 | Primary. Backgrounds, logo, headlines |
| Night | `#161F18` | 22 31 24 | 29 0 23 88 | Deepest ground: hero, footer, video |
| Champagne | `#D3BF99` | 211 191 153 | 0 9 27 17 | Accent. Logo and type on dark only |
| Bronze | `#9A8268` | 154 130 104 | 0 16 32 40 | Rules and fine lines only (2.8:1 on linen, never text) |
| Walnut | `#6E5A44` | 110 90 68 | 0 18 38 57 | Accent text on light grounds (5.1:1) |
| Linen | `#EAE2D5` | 234 226 213 | 0 3 9 8 | Default light background |
| Stone | `#DCD4C7` | 220 212 199 | 0 4 10 14 | Secondary surfaces, cards |
| Paper | `#F3EEE6` | 243 238 230 | 0 2 5 5 | Raised cards, form panels |
| Ink | `#1D2519` | 29 37 25 | 22 0 32 85 | Body text on light (12.3:1) |

Rough proportion: Linen 50 · Forest 30 · Paper/Stone 12 · Champagne 6 · Bronze/Walnut 2.

Contrast: Champagne on Forest 8.0:1 · Linen on Forest 11.2:1 · Ink on Linen 12.3:1 · Champagne on Linen 1.4:1 (never).

## Typography

| Role | Typeface | Weights | Notes |
|---|---|---|---|
| Logo, eyebrows, UI | **Montserrat** (Google Fonts) | 300 wordmark, 400 body, 500–600 labels | Wordmark tracking +320; eyebrows uppercase +300 at ~11.5px |
| Display, tagline, quotes | **Cormorant Garamond** (Google Fonts) | 300 display, italic for accents | Headlines set light with one italic accent line |

Close alternates: Gotham / Raleway for the sans, Canela / Ivy Presto for the serif.

## Logo

Stacked lockup: **MOODHAUS** / DESIGN | VISUALIZE | TRANSFORM / **LABS** / short hairline rule.
Champagne on Forest is primary; Forest on Paper is the reverse. Minimum width 120px (30mm print).
Clear space equals the height of the "O". Don't recolor, add effects, condense the tracking,
or place on busy photography without a dark scrim.

Files: `public/brand/favicon.svg`, `public/brand/og-share.png`, `public/brand/topo.svg`, `public/brand/topo-2.svg`.

## Contour motif

Topographic lines from the card, used as a quiet frame (masked clear in the middle),
at 1–1.3px in Champagne on Forest or Bronze on Linen. In code: `components/moodhaus/topo-lines.tsx`.

## Voice

Calm, assured, specific about place and light. Talk about the client's everyday life,
not about luxury. Avoid "luxury", "world-class", "stunning", exclamation marks and jargon.

## Photography

Golden hour and dusk, coastline and canyon, natural stone and timber, native planting.
Warm, slightly low-contrast grading. No people looking at the camera.
