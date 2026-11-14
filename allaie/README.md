# allaieaisha.com

Personal site for Allaie Aisha, founder and principal designer of Moodhaus Labs.
Standalone Next.js app (Next 16, Tailwind 4, GSAP + Lenis) that shares the Moodhaus brand:
forest green / champagne gold / linen, Montserrat wide-tracked caps, Cormorant Garamond italics,
drifting gold contour lines.

- Deployed as its own Vercel project (`allaie-aisha`, root directory `allaie/`).
- All copy lives in `lib/content.ts`. Lines marked `TODO(real)` need Allaie's own words or facts.
- Empty lists (credentials, press, kind words, socials) are hidden on the site until filled in.
- Portrait: add `public/allaie-portrait.jpg` and set `person.portrait` in `lib/content.ts`.
- Imagery is free-licensed Unsplash photography used as mood references, not her projects.

```
npm install
npm run dev
```

## After every ship

1. Build passes (`npm run build`), commit, push to the PR branch.
2. Deploy to production on Vercel (project `allaie-aisha`) and check the changed pages return 200 on allaieaisha.com.
3. Update the Notion 2nd Brain in the same session:
   - Project page "Moodhaus Labs — Websites": add a row to the allaieaisha.com change log, tick open items.
   - CRM contact "Allaie Aisha — Moodhaus Labs": sites, socials, what's still needed.
   - Domain Collection row "allaieaisha.com" if hosting or DNS changed.
