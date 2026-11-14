# Moodhaus Labs

Website for Moodhaus Labs, a San Diego architecture and landscape design studio.
Built on the BOTY v0 template (Next.js, Tailwind v4, GSAP ScrollTrigger) and rebranded
from the studio's business cards. See [BRAND.md](BRAND.md) for the brand kit.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## What's where

| Path | What it is |
|---|---|
| `app/page.tsx` | Home page: section order |
| `components/moodhaus/home-motion.tsx` | All scroll animation (hero arch reveal, word reveal, horizontal portfolio, depth parallax gallery, stacked services, process line, card flip) |
| `components/moodhaus/*` | Sections and shared pieces (header, logo, contour lines, footer) |
| `app/portfolio`, `app/project/[id]`, `app/studio`, `app/consultation` | Inner pages |
| `lib/moodhaus-content.ts` | All copy, contact details, projects, testimonials and media URLs |
| `app/globals.css` | Brand color tokens and `mh-` utility classes |
| `public/brand/` | Favicon, share image, contour SVGs |
| `docs/brand-guide.html` | Full visual brand guide |

## Before launch

- **Projects and testimonials are placeholders.** Replace them in `lib/moodhaus-content.ts` with real work and approved client quotes.
- **Imagery is stock.** Photos are hotlinked from Unsplash and videos from Pexels, both free for commercial use under their licenses. Swap in the studio's own renders and photography when available (put files in `public/` and update `media`).
- The consultation form opens an email draft to the studio. Connect a form service (Formspree, Resend, etc.) for direct submissions.
- Motion respects `prefers-reduced-motion`.
