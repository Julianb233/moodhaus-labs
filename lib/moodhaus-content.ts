// Moodhaus Labs site content.
// NOTE: Project names, copy, and testimonials below are launch placeholders written for the
// template. Imagery is free-licensed stock (Unsplash License / Pexels License) used as mood
// references. Swap in the studio's own projects, photography, and client words before launch.

export const studio = {
  name: "Moodhaus Labs",
  founder: "Allaie Aisha",
  founderTitle: "Founder | Principal Designer",
  tagline: "Exceptional Spaces for Everyday Living",
  pillars: ["Design", "Visualize", "Transform"],
  phone: "(619) 673-2161",
  phoneHref: "tel:+16196732161",
  email: "moodhauslabs@outlook.com",
  location: "San Diego, CA",
  website: "MoodHauslabs.com",
}

/** Unsplash CDN helper (photos used under the Unsplash License). */
export const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const media = {
  heroVideo: "https://videos.pexels.com/video-files/39024321/16605497_2560_1440_30fps.mp4",
  heroPoster:
    "https://images.pexels.com/videos/39024321/aerial-photography-aerial-view-cinematic-coastal-landscape-39024321.jpeg?auto=compress&cs=tinysrgb&w=1920",
  twilightVideo: "https://videos.pexels.com/video-files/39024336/16605557_2560_1440_30fps.mp4",
  twilightPoster:
    "https://images.pexels.com/videos/39024336/cinematic-contemporary-architecture-driveway-exterior-39024336.jpeg?auto=compress&cs=tinysrgb&w=1920",
  coastCliffs: unsplash("1546200378-434d318e5715", 2400),
  coastBay: unsplash("1779231926937-24fe677369b9", 2000),
  coastHomes: unsplash("1779231926944-acfb8f293029", 2000),
  villa: unsplash("1613490493576-7fde63acd811", 2400),
  poolLounge: unsplash("1706808849780-7a04fbac83ef", 2000),
  duskPools: unsplash("1757356657991-c3fd6e2e812e", 2400),
  duskWindows: unsplash("1757359056339-22968344cce6", 2000),
  stoneSunset: unsplash("1756435292384-1bf32eff7baf", 2000),
  pathDusk: unsplash("1762811054947-605b20298615", 2000),
  courtyardPool: unsplash("1707189856923-46dd41ea2bdc", 2000),
  frontWalk: unsplash("1706164971309-fb4785fe6ceb", 1600),
  reflectingPool: unsplash("1786991439072-249f11b5a6fb", 2000),
  gravelGarden: unsplash("1782829243963-3a2dee566511", 1600),
  greenPath: unsplash("1776362552930-fea1349d22af", 1600),
  fountain: unsplash("1781960967506-71a63780a0c9", 1600),
  rooftopGarden: unsplash("1764212515460-04fcb75657c2", 1600),
  stoneSteps: unsplash("1775977337819-807a20465423", 1600),
  livingRoom: unsplash("1745301558339-44eb3217d5da", 1600),
  sectional: unsplash("1758448755778-90ebf4d0f1e7", 1600),
  marbleFireplace: unsplash("1598928506311-c55ded91a20c", 1600),
  indoorPool: unsplash("1776763019060-fa0663574ae6", 1600),
  openPlan: unsplash("1778731660315-698ade8a0bd0", 1600),
  // Tropical / La Jolla mood (Unsplash, free licence)
  archModel: unsplash("1789985209005-229117b86ab9", 2200),
  palmGarden: unsplash("1766603636517-ac8e3c9faa44", 2200),
  villaTwilight: unsplash("1759372945658-1e9f56e751bd", 2200),
  infinityPalms: unsplash("1777919541982-dcb34c146a2d", 2400),
  sunsetPalmsPool: unsplash("1758192838598-a1de4da5dcaf", 2200),
  oceanDoorway: unsplash("1793891546320-b031d3d7a040", 1800),
  palmLawnHouse: unsplash("1766603636671-484c4911a84b", 2000),
}

export type ProjectCategory = "residences" | "landscape" | "interiors" | "visualization"

export interface Project {
  id: string
  name: string
  location: string
  year: string
  tagline: string
  description: string
  image: string
  gallery: string[]
  category: ProjectCategory
  scope: string[]
  size: string
  badge: string | null
  brief: string
  approach: string
  outcome: string
  /**
   * Real "before" photos for the gallery, in the same order as `gallery` (shot from the same
   * spot). Leave a slot undefined and the slider shows a concept-render treatment of the
   * finished photo instead.
   */
  befores?: (string | undefined)[]
}

export const projectCategories: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "All work" },
  { value: "residences", label: "Residences" },
  { value: "landscape", label: "Landscape" },
  { value: "interiors", label: "Interiors" },
  { value: "visualization", label: "Visualization" },
]

export const projects: Project[] = [
  {
    id: "bird-rock-residence",
    name: "Bird Rock Residence",
    location: "La Jolla",
    year: "2026",
    tagline: "A cliffside home drawn from tide, stone, and long Pacific light",
    description:
      "A full architectural and landscape vision for an ocean-facing lot: layered terraces, a vanishing-edge pool, and interiors that frame the horizon from every room.",
    image: media.duskPools,
    gallery: [media.duskPools, media.livingRoom, media.reflectingPool],
    category: "residences",
    scope: ["Architectural design", "Landscape design", "3D visualization"],
    size: "7,800 sq ft · 0.6 acre",
    badge: "Featured",
    brief:
      "The clients wanted a home that feels like a retreat every day of the week, sheltered from the street and completely open to the sea.",
    approach:
      "We sculpted the program around the site’s natural contours, stepping the house down the slope so every level gets its own garden and its own view of the water.",
    outcome:
      "A residence that reads as quiet from the street and unfolds into light, water, and planting as you move through it.",
  },
  {
    id: "rancho-santa-fe-estate",
    name: "Rancho Santa Fe Estate",
    location: "Rancho Santa Fe",
    year: "2025",
    tagline: "Modern equestrian country, re-imagined in limestone and olive",
    description:
      "A master plan for a multi-acre estate: main residence, guest pavilion, motor court, and a drought-tolerant landscape built to age beautifully.",
    image: media.villa,
    gallery: [media.villa, media.gravelGarden, media.marbleFireplace],
    category: "residences",
    scope: ["Master planning", "Architectural design", "Landscape"],
    size: "11,200 sq ft · 4.2 acres",
    badge: null,
    brief: "A growing family wanted room for gatherings of fifty and quiet mornings for two.",
    approach:
      "We organised the estate as a sequence of courtyards, each with its own mood, linked by shaded olive allées and long stone paths.",
    outcome: "An estate that feels generous without ever feeling large.",
  },
  {
    id: "del-mar-garden-house",
    name: "Del Mar Garden House",
    location: "Del Mar",
    year: "2026",
    tagline: "Coastal planting, still water, and outdoor rooms for every hour",
    description:
      "A complete landscape transformation for a hillside home: reflecting pools, native coastal planting, fire terraces, and a lighting plan that makes the garden glow after dark.",
    image: media.reflectingPool,
    gallery: [media.reflectingPool, media.greenPath, media.fountain],
    category: "landscape",
    scope: ["Landscape design", "Hardscape & water features", "Lighting design"],
    size: "1.1 acre garden",
    badge: "New",
    brief: "Turn a steep, unused slope into the best room of the house.",
    approach:
      "Terraced stone walls follow the land’s contour lines, each holding a different garden: citrus, grasses, and a still pool that mirrors the sky.",
    outcome: "A garden designed to be lived in from sunrise coffee to late-evening fire.",
  },
  {
    id: "coronado-courtyard",
    name: "Coronado Courtyard Villa",
    location: "Coronado",
    year: "2025",
    tagline: "A private courtyard built around water and dappled shade",
    description:
      "An inward-facing villa where every room opens to a central pool court planted with palms and soft grasses.",
    image: media.courtyardPool,
    gallery: [media.courtyardPool, media.openPlan, media.rooftopGarden],
    category: "landscape",
    scope: ["Courtyard design", "Pool & water", "Planting design"],
    size: "5,400 sq ft · courtyard 2,100 sq ft",
    badge: null,
    brief: "Create privacy on a tight island lot without losing light.",
    approach: "We turned the house inward around a planted court so light, air, and water reach every room.",
    outcome: "A villa that feels like a resort the moment the front door closes.",
  },
  {
    id: "point-loma-interiors",
    name: "Point Loma Interiors",
    location: "Point Loma",
    year: "2026",
    tagline: "Warm minimalism in oak, travertine, and linen",
    description:
      "A whole-home interior renovation focused on calm materials, custom millwork, and lighting that changes with the day.",
    image: media.livingRoom,
    gallery: [media.livingRoom, media.sectional, media.indoorPool],
    category: "interiors",
    scope: ["Interior architecture", "Custom millwork", "FF&E"],
    size: "4,900 sq ft",
    badge: null,
    brief: "Make a 1990s house feel calm, current, and unmistakably personal.",
    approach: "We simplified the plan, opened sightlines to the bay, and layered a restrained palette of natural materials.",
    outcome: "Rooms that feel collected rather than decorated.",
  },
  {
    id: "fairbanks-ranch-twilight",
    name: "Fairbanks Ranch Pavilion",
    location: "Fairbanks Ranch",
    year: "Concept",
    tagline: "Photoreal visualization before a single stone is laid",
    description:
      "Cinematic 3D renderings and walkthroughs that let our clients experience a new pool pavilion at golden hour, before construction begins.",
    image: media.duskWindows,
    gallery: [media.duskWindows, media.pathDusk, media.stoneSunset],
    category: "visualization",
    scope: ["3D visualization", "Cinematic walkthrough", "Material studies"],
    size: "Pavilion + 3,000 sq ft terrace",
    badge: "Visualization",
    brief: "Help the clients decide with confidence between three design directions.",
    approach: "We rendered each direction at sunrise, noon, and dusk so the decision was made with real light, not guesswork.",
    outcome: "A clear yes in one meeting, and a build that matched the renders.",
  },
]

export const services = [
  {
    number: "01",
    title: "Design",
    subtitle: "Architecture & landscape",
    text: "Custom residences, additions, and complete landscape design shaped around how you live and the land you live on.",
    image: media.villa,
  },
  {
    number: "02",
    title: "Visualize",
    subtitle: "Photoreal 3D & walkthroughs",
    text: "See every room, garden, and hour of light before you build. Cinematic renderings make big decisions feel easy.",
    image: media.duskWindows,
  },
  {
    number: "03",
    title: "Hand off",
    subtitle: "A complete design package",
    text: "Drawings, renders, planting and lighting plans handed to your builder as one clear set, and we stay on call for design questions.",
    image: media.reflectingPool,
  },
]

export const process = [
  { step: "Private consultation", text: "A conversation on site or in the studio about how you want to live." },
  { step: "Concept & visualization", text: "Massing, landscape strategy, and photoreal renders you can walk through." },
  { step: "Design development", text: "Materials, planting, lighting, and every detail resolved with you." },
  { step: "Hand-off to your builder", text: "A complete package of drawings, renders and plans for your builder, with us on call for design questions." },
]

export const testimonials = [
  {
    quote: "They saw the potential in our hillside before we did. Every evening on the terrace still feels like a gift.",
    name: "Private client",
    detail: "La Jolla",
  },
  {
    quote: "The renderings were so real we made every decision with total confidence. The finished home matched them exactly.",
    name: "Private client",
    detail: "Rancho Santa Fe",
  },
  {
    quote: "Calm, considered, and endlessly patient. Allaie designed a home that feels like us, only better.",
    name: "Private client",
    detail: "Del Mar",
  },
]

/* -------------------------------------------------------------------------- */
/* Before & after                                                             */
/* -------------------------------------------------------------------------- */

export interface Transformation {
  id: string
  title: string
  location: string
  scope: string
  summary: string
  /** Finished photo. */
  after: string
  /**
   * Photo of the site before the work, taken from the same spot as `after`.
   * PLACEHOLDER: until the studio's own photos are added, leave this out and the slider
   * shows a drawn treatment of the finished photo on the "Before" side.
   */
  before?: string
  projectId?: string
}

export const transformations: Transformation[] = [
  {
    id: "la-jolla-pool-terrace",
    title: "Pool terrace",
    location: "La Jolla",
    scope: "Landscape design · Pool · Lighting",
    summary: "A sloping lawn regraded into a limestone terrace, infinity-edge pool, and low garden walls lit for evenings outside.",
    after: media.duskPools,
    projectId: "bird-rock-residence",
  },
  {
    id: "rancho-santa-fe-courtyard",
    title: "Entry courtyard",
    location: "Rancho Santa Fe",
    scope: "Architecture · Hardscape · Planting",
    summary: "A gravel drive turned into a walled arrival court with a reflecting pool, olive trees, and a new limewashed façade.",
    after: media.courtyardPool,
    projectId: "rancho-santa-fe-estate",
  },
  {
    id: "del-mar-garden",
    title: "Coastal garden",
    location: "Del Mar",
    scope: "Planting design · Paths · Water",
    summary: "Thirsty turf replaced with drought-tolerant native planting, a crushed-stone path, and a quiet water feature.",
    after: media.greenPath,
    projectId: "del-mar-garden-house",
  },
  {
    id: "point-loma-living",
    title: "Living room",
    location: "Point Loma",
    scope: "Interiors · Millwork · Lighting",
    summary: "A dark, divided ground floor opened into one long room of oak, plaster, and harbor light.",
    after: media.livingRoom,
    projectId: "point-loma-interiors",
  },
  {
    id: "fairbanks-front-walk",
    title: "Front walk",
    location: "Fairbanks Ranch",
    scope: "Hardscape · Lighting · Planting",
    summary: "A plain concrete approach rebuilt as a stepped stone walk with layered planting and low path lights.",
    after: media.frontWalk,
    projectId: "fairbanks-ranch-twilight",
  },
  {
    id: "coronado-stone-terrace",
    title: "Sunset terrace",
    location: "Coronado",
    scope: "Architecture · Outdoor living",
    summary: "A tired deck replaced with a stone-clad terrace and fire lounge oriented to the evening light.",
    after: media.stoneSunset,
    projectId: "coronado-courtyard",
  },
]

/* -------------------------------------------------------------------------- */
/* Capabilities, shown as one (illustrative) La Jolla home taken through all four */
/* -------------------------------------------------------------------------- */

export const footerLinks = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Before & after", href: "/before-after" },
  { label: "The studio", href: "/studio" },
  { label: "Architecture", href: "/architecture" },
  { label: "Landscape", href: "/landscape" },
  { label: "3D visualization", href: "/visualization" },
  { label: "Our process", href: "/process" },
  { label: "Book a consultation", href: "/consultation" },
]
