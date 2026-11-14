// Allaie Aisha — personal site content.
//
// Everything a visitor reads lives in this file. Items marked TODO(real) are written from what
// we know today (founder of Moodhaus Labs, San Diego County, architecture + landscape + 3D,
// mood-led design, design-only practice). Replace them with Allaie's own words and facts.
// Lists left empty (credentials, press, kindWords) are hidden on the site until filled in.
// Imagery is free-licensed Unsplash photography used as mood references, not her projects.

export const unsplash = (id: string, w = 1800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

/** Where the studio site lives. TODO(real): switch to https://moodhauslabs.com once that domain is live. */
export const STUDIO_URL = "https://moodhaus-labs-git-moodhaus-labs-site-ai-acrobatics.vercel.app"

export const person = {
  name: "Allaie Aisha",
  title: "Founder & Principal Designer",
  studio: "Moodhaus Labs",
  tagline: "Exceptional Spaces for Everyday Living",
  location: "San Diego County, California",
  phone: "(619) 673-2161",
  phoneHref: "tel:+16196732161",
  email: "moodhauslabs@outlook.com",
  /** TODO(real): add her Instagram / LinkedIn / Pinterest URLs; empty ones are hidden. */
  socials: [] as { label: string; href: string }[],
  /** Portrait in the story section (supplied by the owner, Nov 2026). Swap for a studio portrait when one exists. */
  portrait: "/allaie-portrait.jpg" as string | null,
}

export const philosophy = {
  eyebrow: "Philosophy",
  lead: "Before a single line is drawn, I ask how you want to feel there.",
  body: "Light, proportion, stone, planting, even the sound a room makes at night: every decision follows the answer. A home should not only look extraordinary. It should feel like yours from the first morning.",
}

// TODO(real): replace with Allaie's own biography (background, training, years in practice,
// what led her to found Moodhaus Labs, signature projects).
export const story = {
  eyebrow: "The designer",
  heading: "A designer who begins with feeling.",
  paragraphs: [
    "Allaie Aisha is the founder and principal designer of Moodhaus Labs, a San Diego County studio for architecture, landscape design and photoreal 3D visualization.",
    "Her work starts from one question, how do you want to feel here, and carries the answer through every scale of a project: where the morning light lands, the stone underfoot, the planting framed by a window, the way a terrace holds the last of the sun.",
    "She designs the house and the land around it as one composition, then renders it photographically so her clients can walk through their home before ground is broken. What they receive is a complete design package, ready for the builder of their choice.",
  ],
  signature: "Allaie Aisha",
}

/** TODO(real): degrees, licences, memberships, awards. Hidden while empty. */
export const credentials: { title: string; detail: string }[] = []

/** TODO(real): publications, features, talks. Hidden while empty. */
export const press: { outlet: string; title: string; href?: string; year?: string }[] = []

/** TODO(real): client words, with permission. Hidden while empty. Never invent these. */
export const kindWords: { quote: string; name: string; place: string }[] = []

export const disciplines = [
  {
    no: "01",
    name: "Architecture",
    verb: "Design",
    text: "Homes planned around how a family really lives: the light in each room at the hour it is used, the views, the flow from kitchen to terrace.",
    image: unsplash("1759372945658-1e9f56e751bd", 1600),
    alt: "Modern villa glowing at twilight among palms",
    href: "/architecture",
  },
  {
    no: "02",
    name: "Landscape",
    verb: "Transform",
    text: "Gardens, pools and outdoor rooms composed with the house, never after it. Planting chosen for the coast and canyons of San Diego County.",
    image: unsplash("1777919541982-dcb34c146a2d", 1600),
    alt: "Infinity pool edged with palms above the ocean",
    href: "/landscape",
  },
  {
    no: "03",
    name: "3D Visualization",
    verb: "Visualize",
    text: "Photoreal renderings and walkthroughs, so every material, shadow and view is seen and decided before construction begins.",
    image: unsplash("1789985209005-229117b86ab9", 1600),
    alt: "Architectural model of a contemporary home",
    href: "/visualization",
  },
]

export const moods = [
  { name: "Serene", space: "The primary suite and spa", line: "Nothing to look at but light, water and stone.", image: unsplash("1753605788101-04d1e653e74a", 1600), alt: "Freestanding bath in a pale stone bathroom" },
  { name: "Warm", space: "The fire lounge", line: "Lower ceilings, deep seats and a real fire.", image: unsplash("1717497043712-e197abe15c28", 1600), alt: "Lounge with a glowing fireplace and soft sofas" },
  { name: "Elegant", space: "The formal dining room", line: "Symmetry, a long table, one beautiful light.", image: unsplash("1777781835512-bad3c28f90ed", 1600), alt: "Dining room with velvet chairs and a long timber table" },
  { name: "Playful", space: "The family pool and lawn", line: "Room to run, and steps wide enough to become seats.", image: unsplash("1787237849351-5dcba5f478c4", 1600), alt: "Pool in a lush lawn garden with umbrellas" },
  { name: "Grounded", space: "The library and study", line: "Timber all around and a window seat facing green.", image: unsplash("1777896067223-9990008a07d7", 1600), alt: "Wood-panelled library with full bookshelves" },
  { name: "Dramatic", space: "The evening bar and terrace", line: "Pools of light in the dark, leather and smoked brass.", image: unsplash("1756981168649-0e3c3c8a32f3", 1600), alt: "Dark panelled room with a green leather sofa" },
  { name: "Fresh", space: "The morning kitchen", line: "East light, a big table, olive trees inside.", image: unsplash("1633505899118-4ca6bd143043", 1600), alt: "Bright living room with an olive tree" },
]

export const approach = [
  { no: "01", title: "Listen", text: "A long first conversation on site: how you live, what you love, and how you want each space to feel." },
  { no: "02", title: "Compose", text: "House and landscape designed together, with light, material and planting tuned to the mood of every room." },
  { no: "03", title: "Visualize", text: "Photoreal renderings let you stand in the finished home, change your mind freely, and decide with confidence." },
  { no: "04", title: "Hand over", text: "A complete design package (drawings, renders, planting and lighting plans) for your builder, with Allaie on hand for design questions." },
]

export const imagery = {
  band: unsplash("1546200378-434d318e5715", 2400),
  bandAlt: "Sea cliffs and the Pacific along the San Diego coast",
  dusk: unsplash("1757356657991-c3fd6e2e812e", 2400),
  duskAlt: "Pool terrace at dusk with warm interior light",
}
