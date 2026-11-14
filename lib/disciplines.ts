// Content for the four discipline pages (Architecture, Landscape, Visualization, Process).
// Imagery is free-licensed Unsplash stock used as mood references until the studio's own
// drawings, renders, and photography replace it.
import { media, unsplash } from "./moodhaus-content"

export const dMedia = {
  // Photoreal renders
  renderPoolLounge: unsplash("1706808849780-7a04fbac83ef", 2400),
  renderLongPool: unsplash("1670589953882-b94c9cb380f5", 2400),
  renderPoolAngle: unsplash("1670589953903-b4e2f17a70a9", 2000),
  renderLawn: unsplash("1706855203772-c249b75fe016", 2000),
  renderPalmVilla: unsplash("1782720829237-ec146b0afe0a", 2400),
  renderDuskCourt: unsplash("1691272477702-0a2edae135f2", 2000),
  renderTimber: unsplash("1756706718604-ef4af3970e33", 2000),
  renderNight: unsplash("1748063578185-3d68121b11ff", 2400),
  renderModel: unsplash("1717137389747-d1d4ced6abc8", 2000),
  renderLoggia: unsplash("1733413788848-6f9e0c1c414c", 2000),
  renderHillside: unsplash("1782720794701-8501db8f2901", 2200),
  // Architecture
  drawPencil: unsplash("1542621334-a254cf47733d", 1800),
  drawTools: unsplash("1603901622056-0a5bee231395", 1800),
  drawMarble: unsplash("1781888688940-5730c3fd5baf", 1800),
  drawHands: unsplash("1598368195835-91e67f80c9d7", 1800),
  modelPalm: unsplash("1653164494885-a8526f62678c", 1800),
  modelPool: unsplash("1653164488636-7407bec89281", 1800),
  modelShadow: unsplash("1653164579768-ea97833b3b03", 1800),
  modelSite: unsplash("1624066969649-fb75b5a7cc97", 1800),
  concreteGrasses: unsplash("1730170787463-53a7074137fa", 1800),
  concreteLight: unsplash("1785812945418-3c0e9480f3c1", 1800),
  courtyardColumn: unsplash("1788883271127-3f53aab80b9e", 1800),
  meadowHouse: unsplash("1782890811564-9332ec0eb8be", 2200),
  // Landscape
  birdOfParadise: unsplash("1762427679565-f51cc0238dc1", 1600),
  birdOfParadiseGarden: unsplash("1787526831438-8850b17aef2a", 1600),
  foxtailAgave: unsplash("1775657335853-9c62ed0d6ffc", 1600),
  variegatedAgave: unsplash("1786516122289-bf06d695a8c1", 1600),
  agavePath: unsplash("1781030332057-09f9f3331432", 2000),
  sculpturalWall: unsplash("1762308759606-572c08ad6827", 1600),
  bougainvillea: unsplash("1778199793901-dc0f6e5de393", 1600),
  oliveGrove: unsplash("1772546392752-f1e7add66f34", 2000),
  duskCourtyard: unsplash("1786011243992-808eb40e0144", 2200),
  gardenBollard: unsplash("1785162434673-835bb98ad923", 1600),
}

export type Chapter = { key: string; number: string; label: string; href: string; title: string; accent: string; image: string; alt: string; line: string }

export const chapters: Chapter[] = [
  {
    key: "architecture",
    number: "01",
    label: "Architecture",
    href: "/architecture",
    title: "Architecture",
    accent: "drawn from the land.",
    image: dMedia.renderPalmVilla,
    alt: "Modern limestone villa framed by palms",
    line: "Homes shaped by the bluff, the light, and the way you live.",
  },
  {
    key: "landscape",
    number: "02",
    label: "Landscape",
    href: "/landscape",
    title: "Landscape",
    accent: "a garden for the coast.",
    image: media.palmGarden,
    alt: "Tall palms above a modern garden",
    line: "Tropical, water-wise gardens that read lush all year.",
  },
  {
    key: "visualization",
    number: "03",
    label: "3D Visualization",
    href: "/visualization",
    title: "Visualization",
    accent: "see it before it is built.",
    image: dMedia.renderNight,
    alt: "Photoreal render of a modern home glowing at night",
    line: "Photoreal renders and films of your home, at every hour.",
  },
  {
    key: "process",
    number: "04",
    label: "Concept to completion",
    href: "/process",
    title: "Concept to completion",
    accent: "one team, start to finish.",
    image: media.infinityPalms,
    alt: "Infinity pool among palm trees",
    line: "From the first walk on site to the last light set at dusk.",
  },
]

export type StoryItem = { kicker: string; title: string; text: string; image: string; alt: string; meta?: string; list?: string[] }

export const architecturePrinciples: StoryItem[] = [
  {
    kicker: "Site",
    title: "Read the land first",
    text: "Before a line is drawn we walk the property at different hours. Ocean bearing, canyon wind, setbacks, the slope and the neighbours’ views all shape where the house sits and how it opens.",
    image: dMedia.renderHillside,
    alt: "Modern residences terraced into a landscaped hillside",
  },
  {
    kicker: "Light",
    title: "Shape the light",
    text: "Deep overhangs for the summer sun, clerestories for winter, and west glass that is screened rather than shaded. Rooms are planned around when you use them and where the light is then.",
    image: dMedia.concreteLight,
    alt: "Curved concrete ceiling striped with shadow",
  },
  {
    kicker: "Material",
    title: "Honest, lasting materials",
    text: "Board-formed concrete, limestone, white oak and bronze that weather well in salt air. Fewer materials, used with care, so the house feels calm and ages gracefully.",
    image: dMedia.concreteGrasses,
    alt: "Board-formed concrete house among ornamental grasses",
  },
  {
    kicker: "Living",
    title: "Inside and out, one room",
    text: "Pocketing glass, shaded loggias and courtyards blur the line to the garden, so the terrace becomes a living room for most of the San Diego year.",
    image: media.oceanDoorway,
    alt: "Open doorway framing the ocean and palms",
  },
]

export const drawingSet = [
  { image: dMedia.drawPencil, alt: "Pencil on a dimensioned architectural drawing", caption: "Dimensioned plans" },
  { image: dMedia.modelPalm, alt: "White study model of a pavilion with a palm", caption: "Study model, garden pavilion" },
  { image: dMedia.drawTools, alt: "Drafting tools on a printed floor plan", caption: "Working drawings" },
  { image: dMedia.modelPool, alt: "White architectural model with a pool court", caption: "Pool court massing" },
  { image: dMedia.drawMarble, alt: "Architectural plans spread on a marble desk", caption: "Plans and material notes" },
  { image: dMedia.modelShadow, alt: "White model casting a long shadow", caption: "Light study in white" },
]

export const architectureScope = [
  "Site and feasibility studies",
  "Schematic design and massing",
  "Design development",
  "Construction drawings",
  "Permits and coastal approvals",
  "Construction administration",
]

export const plantPalette = [
  { latin: "Strelitzia reginae", common: "Bird of paradise", role: "Tropical signature", water: 2, image: dMedia.birdOfParadise },
  { latin: "Agave attenuata", common: "Fox-tail agave", role: "Soft sculpture", water: 1, image: dMedia.foxtailAgave },
  { latin: "Olea europaea ‘Swan Hill’", common: "Fruitless olive", role: "Silver canopy", water: 1, image: dMedia.oliveGrove },
  { latin: "Bougainvillea ‘Barbara Karst’", common: "Bougainvillea", role: "Colour on white walls", water: 1, image: dMedia.bougainvillea },
  { latin: "Archontophoenix cunninghamiana", common: "King palm", role: "Height and shade", water: 2, image: media.palmGarden },
  { latin: "Agave americana ‘Variegata’", common: "Variegated century plant", role: "Gravel garden accent", water: 1, image: dMedia.variegatedAgave },
  { latin: "Yucca & agave", common: "Sculptural succulents", role: "Silhouette against limewash", water: 1, image: dMedia.sculpturalWall },
]

export const gardenLayers: StoryItem[] = [
  {
    kicker: "Canopy",
    title: "Shade you can sit under",
    text: "Fruitless olives, king palms and coral trees set the ceiling of the garden. Placed for afternoon shade on the terrace and to frame, never block, the view.",
    image: dMedia.oliveGrove,
    alt: "Olive trees casting shade on a pale gravel court",
  },
  {
    kicker: "Structure",
    title: "Silhouettes against the wall",
    text: "Yucca, aloe and agave are the garden’s sculpture: bold shapes that read from inside the house and cast sharp shadows on limewashed walls.",
    image: dMedia.sculpturalWall,
    alt: "Sculptural yucca and agave against a white wall",
  },
  {
    kicker: "Ground",
    title: "Gravel, stone and drifts",
    text: "Decomposed granite paths, stone steps and drifts of low succulents. Permeable surfaces let winter rain soak in instead of running off.",
    image: dMedia.agavePath,
    alt: "Agaves lining a gravel path beside a building",
  },
  {
    kicker: "Water",
    title: "Pools, runnels and reflection",
    text: "Pools sited for the evening sun, quiet runnels by the door, and still water that doubles the sky. Every feature is recirculating and sized to its setting.",
    image: media.reflectingPool,
    alt: "Still reflecting pool beside a modern home",
  },
  {
    kicker: "Light",
    title: "A second garden at night",
    text: "Warm, low lighting picks out trunks, steps and water so the garden carries on after dark, without lighting up the sky.",
    image: dMedia.duskCourtyard,
    alt: "White courtyard softly lit at dusk",
  },
]

export const renderStages = [
  { key: "line", label: "Linework", text: "The model is drawn in line first: proportion, openings and the roof plane, checked against the plans." },
  { key: "clay", label: "Clay", text: "A white clay pass shows pure form and shadow, so massing and sun angles can be judged without distraction." },
  { key: "material", label: "Materials", text: "Stone, timber, glass and planting are applied, using the actual samples selected for the home." },
  { key: "light", label: "Light", text: "Finally the sky, the hour and the lighting scene. This is the image you approve before a single trade starts." },
] as const

export const renderGallery = [
  { image: dMedia.renderLongPool, alt: "Render of a long pool beside a low modern house", caption: "Pool terrace, midday", span: "lg:col-span-2" },
  { image: dMedia.renderDuskCourt, alt: "Render of a modern courtyard house at dusk", caption: "Courtyard, golden hour", span: "" },
  { image: dMedia.renderPalmVilla, alt: "Render of a limestone villa with palms", caption: "Entry court, morning", span: "" },
  { image: dMedia.renderNight, alt: "Render of a modern house glowing at night", caption: "Night lighting study", span: "lg:col-span-2" },
  { image: dMedia.renderLoggia, alt: "Render of an outdoor loggia with dining and kitchen", caption: "Outdoor kitchen loggia", span: "" },
  { image: dMedia.renderTimber, alt: "Render of a concrete and timber house among trees", caption: "Timber facade study", span: "" },
  { image: dMedia.renderModel, alt: "Render of a timber architectural model", caption: "Massing in timber", span: "" },
]

export const renderDeliverables = [
  { title: "Still renders", text: "Hero views at morning, golden hour and night." },
  { title: "Walkthrough films", text: "Room by room, garden to terrace, with real sun paths." },
  { title: "360° panoramas", text: "Stand in any room on your phone or a headset." },
  { title: "Material studies", text: "Stone, timber and fabric compared side by side in context." },
  { title: "Garden growth", text: "Planting shown at year one, five and ten." },
  { title: "Lighting scenes", text: "Every evening scene set and approved before wiring." },
]

export const phases: StoryItem[] = [
  {
    kicker: "Phase 01 · Week 0",
    title: "Private consultation",
    text: "We walk the property with you, listen to how you want to live, and talk honestly about budget and timeline.",
    list: ["Site walk and conversation", "Written brief", "Fee proposal"],
    image: dMedia.drawHands,
    alt: "Architect sketching plans by hand",
  },
  {
    kicker: "Phase 02 · Weeks 1–6",
    title: "Site study and concept",
    text: "Survey, zoning and coastal constraints, sun and wind studies, then two or three concept directions in sketch and model.",
    list: ["Site and zoning analysis", "Concept sketches", "Study models"],
    image: dMedia.modelPalm,
    alt: "White study model with a palm",
  },
  {
    kicker: "Phase 03 · Weeks 4–10",
    title: "Visualization",
    text: "The chosen direction is built in 3D. You walk the house and garden in photoreal renders and refine it with us.",
    list: ["Photoreal stills", "Walkthrough film", "Material board"],
    image: dMedia.renderPoolLounge,
    alt: "Photoreal render of a pool terrace",
  },
  {
    kicker: "Phase 04 · Months 3–6",
    title: "Design development",
    text: "Every material, plant, fixture and lighting scene is resolved, and the budget is checked with a builder as we go.",
    list: ["Full drawing set", "Planting and lighting plans", "Builder cost review"],
    image: dMedia.drawMarble,
    alt: "Plans spread on a marble desk",
  },
  {
    kicker: "Phase 05 · Months 5–9",
    title: "Permits and builder",
    text: "We prepare and steer the permit set, including coastal development permits where needed, and help you choose the right builder.",
    list: ["Permit drawings and approvals", "Builder bids", "Contract support"],
    image: dMedia.drawPencil,
    alt: "Pencil on a dimensioned drawing",
  },
  {
    kicker: "Phase 06 · 12–24 months",
    title: "Build and handover",
    text: "Weekly site visits, mock-ups and craft reviews, then final planting, art and lighting set at dusk before we hand you the keys.",
    list: ["Weekly site visits", "Planting and lighting set", "Care guide and as-built drawings"],
    image: media.villaTwilight,
    alt: "Tropical villa with a lit pool at twilight",
  },
]
