// The Journal: articles that build Allaie's authority on mood-led residential design in San Diego.
// Written as drafts in her voice for her review (Nov 2026). They avoid invented projects, numbers
// and client stories; add her own examples and photography over time.
import { unsplash } from "./content"

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string }

export type Article = {
  slug: string
  title: string
  description: string
  category: string
  date: string
  readMinutes: number
  image: string
  imageAlt: string
  keywords: string[]
  body: Block[]
}

export const articles: Article[] = [
  {
    slug: "designing-a-home-around-a-mood",
    title: "Designing a home around a mood",
    description:
      "Why I begin every San Diego residence with one question, how do you want to feel here, and how that answer shapes light, material, proportion and planting.",
    category: "Philosophy",
    date: "2026-11-14",
    readMinutes: 5,
    image: unsplash("1753605788101-04d1e653e74a", 2000),
    imageAlt: "Freestanding bath in a pale stone bathroom",
    keywords: ["mood-led design", "luxury home design San Diego", "residential architecture philosophy", "Allaie Aisha"],
    body: [
      { type: "p", text: "Most design conversations begin with a list: four bedrooms, an office, a pool, a kitchen big enough for a crowd. Lists matter, and we always write one. But a list tells me what a house must hold, not how it should feel to live in. So before any of that, I ask a different question: how do you want to feel here?" },
      { type: "p", text: "The answers are rarely about square footage. A client might want the primary suite to feel like the first hour of a holiday. Someone else wants the kitchen to feel like the centre of a busy, happy household. A study should feel like a door you can close on the world. Those feelings become the brief." },
      { type: "h2", text: "A feeling is a set of design decisions" },
      { type: "p", text: "A mood sounds abstract until you notice how concrete its ingredients are. Calm, for example, comes from fewer visible edges, a narrow palette, soft and indirect light, materials that are pleasant to touch, and acoustics that absorb rather than bounce. Energy comes from the opposite: contrast, morning light, open sightlines, hard surfaces and the sound of a household moving through it." },
      { type: "ul", items: [
        "Light: where the sun enters, at what hour, and how warm the artificial light is after dark.",
        "Proportion: ceiling height, the width of a doorway, how far the eye can travel.",
        "Material: stone, timber, plaster, linen. Their temperature, texture and how they age.",
        "Landscape: what each window frames, and what you smell and hear when it is open.",
        "Sound: the hush of a carpeted library or the movement of water beside a terrace.",
      ] },
      { type: "h2", text: "Why it matters more in San Diego" },
      { type: "p", text: "Our climate lets people live outdoors for much of the year, so the line between house and garden is thin. A mood cannot stop at the glass. If a living room is meant to feel serene, the terrace outside it, the planting beyond and the lighting in the trees all have to agree. That is why I design the architecture and the landscape together rather than one after the other." },
      { type: "quote", text: "A home should not only look extraordinary. It should feel like yours from the first morning." },
      { type: "h2", text: "How we test a mood before it is built" },
      { type: "p", text: "Feelings are hard to judge from a floor plan. That is where photoreal visualization earns its place. We render rooms at the times of day they will actually be used, with the real materials and the planned lighting, so you can sense whether the morning kitchen feels fresh or the evening terrace feels intimate. It is far easier to change a rendering than a finished wall." },
      { type: "p", text: "If you are planning a home and you are not sure where to start, start with the feeling. Write down three words for how you want to feel in the rooms that matter most to you. That short list will guide more good decisions than any catalogue." },
    ],
  },
  {
    slug: "coastal-landscape-design-san-diego",
    title: "Coastal landscape design in San Diego: planting for salt, sun and less water",
    description:
      "How to design a garden near the San Diego coast that looks generous all year, handles salt air and wind, and uses water wisely.",
    category: "Landscape",
    date: "2026-11-14",
    readMinutes: 6,
    image: unsplash("1777919541982-dcb34c146a2d", 2000),
    imageAlt: "Pool terrace and palms above the ocean",
    keywords: ["coastal landscape design San Diego", "drought tolerant landscape La Jolla", "Mediterranean garden design", "luxury landscape design San Diego"],
    body: [
      { type: "p", text: "A coastal garden in San Diego has a lot going for it: mild temperatures, bright light and views that do half the work. It also has particular challenges. Salt carried on the wind, sandy or heavy clay soils depending on the street, marine layer mornings and dry summers all shape what will thrive, and what will look tired by August." },
      { type: "h2", text: "Start with exposure, not with plants" },
      { type: "p", text: "Before choosing a single plant I map the site: where the prevailing wind comes from, which areas catch salt spray, where the afternoon sun is harshest, and where water collects after rain. A garden that is designed around those conditions needs far less correction later." },
      { type: "ul", items: [
        "Use structure to break the wind: walls, hedging and layered planting create calm pockets where softer plants and people can settle.",
        "Place the most tolerant plants on the exposed edge, and save delicate textures for sheltered courtyards.",
        "Improve and mulch the soil. Healthy soil holds water longer and keeps roots cooler.",
      ] },
      { type: "h2", text: "A Mediterranean palette, used with restraint" },
      { type: "p", text: "Plants from the world's Mediterranean climates, including California's own natives, tend to do well here because they evolved for wet winters and dry summers. Olive trees, rosemary, lavender, salvias, westringia, agaves and grasses can look lush and refined when they are used in confident drifts rather than one of everything. Natives such as ceanothus, coastal sage and toyon add habitat for pollinators and birds." },
      { type: "p", text: "Luxury in a garden is less about rare plants and more about composition: repetition, generous spacing, a clear hierarchy of trees, shrubs and ground layer, and a palette of greens, silvers and soft flower colour that sits well against stone and plaster." },
      { type: "h2", text: "Water: design for less from the beginning" },
      { type: "p", text: "Grouping plants by their water needs, using drip irrigation with a smart controller, and limiting lawn to the places where it is actually used will reduce water dramatically without making the garden feel sparse. Where a family wants grass to play on, I make it a deliberate room in the landscape rather than a default ground cover." },
      { type: "quote", text: "The best coastal gardens feel effortless because the hard thinking happened before the first plant went in." },
      { type: "h2", text: "Light the garden for evening" },
      { type: "p", text: "In our climate the garden is used as much after sunset as during the day. Warm, low-glare lighting on paths, a few lit trees and soft light on water extend the living space and make the view from inside beautiful at night. Planning the lighting with the planting avoids fixtures that fight the design later." },
      { type: "p", text: "Every site is different, and local rules on water use and coastal development can apply. A planting and lighting plan drawn for your property, and ready for your landscape contractor, is the surest way to get a garden that matures well." },
    ],
  },
  {
    slug: "photoreal-3d-visualization-before-you-build",
    title: "Why photoreal 3D visualization is the best money you spend before you build",
    description:
      "How photoreal renderings and walkthroughs help homeowners decide with confidence, avoid costly changes on site and give builders a clearer brief.",
    category: "Visualization",
    date: "2026-11-14",
    readMinutes: 5,
    image: unsplash("1789985209005-229117b86ab9", 2000),
    imageAlt: "Architectural model of a contemporary home",
    keywords: ["3D architectural visualization San Diego", "photoreal rendering home design", "architectural rendering before construction", "home design visualization"],
    body: [
      { type: "p", text: "Most people find it difficult to imagine a space from drawings. Plans and elevations are precise, but they ask you to assemble a room in your head. Photoreal visualization removes that guesswork: you see the room, the materials and the light as they will be, from the places you will actually stand." },
      { type: "h2", text: "Decisions are cheaper on screen" },
      { type: "p", text: "Changing a window position, a stone or a ceiling height in a rendering takes hours. Changing it once framing is up, or once stone has been ordered, can take weeks and a great deal of money. Seeing the design early means the big decisions are made when they are still easy to change." },
      { type: "ul", items: [
        "Compare finishes side by side in the actual room, under the actual light.",
        "Check views from the sofa, the bed and the kitchen sink, not just from the street.",
        "See the house at morning, sunset and night to judge mood and lighting.",
        "Understand how the garden will look on day one and once it has matured.",
      ] },
      { type: "h2", text: "A clearer brief for your builder" },
      { type: "p", text: "Moodhaus Labs is a design studio: we design and visualize, and your chosen builder builds. Renderings travel with the drawings and specifications, so the builder, their trades and your other consultants all share one picture of the finished home. That shared picture reduces interpretation, and interpretation is where surprises come from." },
      { type: "quote", text: "It is far easier to change a rendering than a finished wall." },
      { type: "h2", text: "What good visualization looks like" },
      { type: "p", text: "A useful rendering is honest. It uses the real dimensions, the specified materials and realistic lighting, not a flattering wide-angle lens and a sunset that never happens. Its purpose is to help you decide, not just to impress. That honesty is what lets you commit with confidence." },
      { type: "p", text: "If you are planning a new home, a remodel or a garden, ask for visualization early in the design, not as a marketing image at the end. It changes the quality of every decision that follows." },
    ],
  },
  {
    slug: "designing-house-and-garden-as-one",
    title: "Indoor-outdoor living: designing the house and the garden as one",
    description:
      "In San Diego the garden is part of the house. How designing architecture and landscape together creates seamless indoor-outdoor living.",
    category: "Architecture",
    date: "2026-11-14",
    readMinutes: 5,
    image: unsplash("1759372945658-1e9f56e751bd", 2000),
    imageAlt: "Modern villa glowing at twilight among palms",
    keywords: ["indoor outdoor living design San Diego", "architecture and landscape design", "La Jolla home design", "outdoor living room design"],
    body: [
      { type: "p", text: "In many places the garden is something you look at. In San Diego it is somewhere you live. Breakfast on the terrace, an afternoon by the pool, dinner under the trees: for much of the year the best rooms of the house are outside. That changes how a home should be designed." },
      { type: "h2", text: "One composition, not two projects" },
      { type: "p", text: "When the house is designed first and the landscape is added later, the garden inherits whatever the architecture leaves: awkward level changes, doors that open onto the wrong view, a pool squeezed into the remaining space. Designing them together lets each room and its outdoor counterpart be planned as a pair." },
      { type: "ul", items: [
        "Align floor levels so inside and outside meet without steps where you want them to flow.",
        "Continue a material, such as a stone floor, through the threshold to blur the line.",
        "Frame views from inside deliberately: a specimen tree, a water feature, the horizon.",
        "Give every outdoor room shade, shelter from the wind, light and somewhere to sit.",
      ] },
      { type: "h2", text: "Outdoor rooms need the same care as indoor ones" },
      { type: "p", text: "A terrace is a room with the sky as its ceiling. It needs proportion, a focal point, comfortable furniture zones and lighting just as much as a living room does. Pergolas, planted walls and changes in paving can create a sense of enclosure without closing the view." },
      { type: "quote", text: "The terrace should feel like the living room stepped outside, not like the edge of the garden." },
      { type: "h2", text: "Thinking about the seasons" },
      { type: "p", text: "Even in a mild climate, the sun moves a long way through the year. Deep overhangs and trellises can shade summer glass while letting low winter sun reach inside. Deciduous trees do the same in the garden. Planning for this early keeps rooms comfortable and reduces reliance on cooling." },
      { type: "p", text: "The result is a home that feels larger than its walls, and a garden that is used every day rather than admired from the window." },
    ],
  },
  {
    slug: "lighting-a-home-by-mood",
    title: "Lighting a home by mood: a guide to colour temperature and layers",
    description:
      "A practical guide to residential lighting design: colour temperature, layers of light and how to light each room for the way you want it to feel.",
    category: "Interiors",
    date: "2026-11-14",
    readMinutes: 6,
    image: unsplash("1717497043712-e197abe15c28", 2000),
    imageAlt: "Lounge with a glowing fireplace and soft sofas",
    keywords: ["residential lighting design", "colour temperature home lighting", "luxury interior lighting San Diego", "mood lighting design"],
    body: [
      { type: "p", text: "Lighting is the fastest way to change how a room feels, and the most often neglected. The same living room can feel like a waiting area or a sanctuary depending on where the light comes from, how bright it is and how warm it looks." },
      { type: "h2", text: "Colour temperature in plain language" },
      { type: "p", text: "Light is described in kelvin. Lower numbers look warmer and more amber; higher numbers look whiter and cooler. As a rough guide used across residential lighting:" },
      { type: "ul", items: [
        "Around 2200 to 2400K reads like firelight and candlelight: intimate, evening, restful.",
        "Around 2700 to 3000K is warm and residential: the comfortable default for most living spaces.",
        "Around 3500 to 4000K looks neutral and alert: useful for task areas, garages and workrooms.",
      ] },
      { type: "p", text: "Dimmable fittings that warm as they dim can move a room from bright and practical to soft and relaxed in the same evening." },
      { type: "h2", text: "Three layers in every room" },
      { type: "p", text: "Good lighting is layered so that no single fitting has to do everything." },
      { type: "ul", items: [
        "Ambient light fills the space gently, often indirectly from coves, walls or ceilings.",
        "Task light is focused where work happens: kitchen counters, desks, reading chairs, vanities.",
        "Accent light draws the eye: art, texture on a stone wall, a tree outside the window.",
      ] },
      { type: "h2", text: "Lighting by mood" },
      { type: "p", text: "A serene bedroom wants low, warm light at eye level or below, with no glare from the pillow. A dining room benefits from one beautiful light over the table and soft light on the walls. A morning kitchen needs bright, even light on the work surfaces. A bar or evening terrace looks best with pools of light and plenty of shadow between them." },
      { type: "quote", text: "Darkness is part of lighting design. The shadows are what make the light feel special." },
      { type: "h2", text: "Do not forget the view at night" },
      { type: "p", text: "Large windows turn into mirrors after dark if the garden beyond is unlit. A few carefully placed garden lights keep the view alive and make the interior feel larger. This is one more reason I plan interior and landscape lighting together." },
      { type: "p", text: "A lighting plan drawn alongside the architecture, with fittings, positions, colour temperatures and switching set out, is one of the most valuable documents you can give your electrician." },
    ],
  },
  {
    slug: "preparing-for-your-first-design-consultation",
    title: "Preparing for your first design consultation: ten questions worth answering",
    description:
      "How to prepare for a first meeting with an architect or landscape designer in San Diego, and the questions that lead to a better home.",
    category: "Process",
    date: "2026-11-14",
    readMinutes: 4,
    image: unsplash("1633505899118-4ca6bd143043", 2000),
    imageAlt: "Bright living room with an olive tree",
    keywords: ["hiring an architect San Diego", "first design consultation", "how to brief a designer", "home design process"],
    body: [
      { type: "p", text: "The first conversation with a designer sets the direction for everything that follows. You do not need drawings, a finished wish list or a firm budget to have a useful one. A little reflection beforehand, though, makes that hour far more valuable." },
      { type: "h2", text: "Ten questions to think about" },
      { type: "ul", items: [
        "How do you want to feel in your home, in three words?",
        "Which rooms matter most to you, and when do you use them?",
        "What do you love about where you live now, and what frustrates you?",
        "How do you entertain: a few friends at the table, or a crowd by the pool?",
        "How much time do you spend outdoors, and doing what?",
        "Which views, trees or features of the site would you protect at all costs?",
        "Who lives with you now, and who might in ten years?",
        "What materials, places or hotels have made you feel at home?",
        "What timeline are you working towards?",
        "What range of investment feels comfortable for design and for construction?",
      ] },
      { type: "h2", text: "Bring images, but explain them" },
      { type: "p", text: "Photographs you have saved are useful, but the reasons you saved them are more useful still. Is it the light, the colour, the sense of openness, the materials? Those reasons reveal the mood you are after, which is where my design process begins." },
      { type: "h2", text: "Understand what the designer delivers" },
      { type: "p", text: "Ask exactly what you will receive. At Moodhaus Labs we design and visualize; the result is a complete design package of drawings, photoreal renderings and planting and lighting plans that your chosen builder works from, with me on hand for design questions along the way." },
      { type: "quote", text: "Every project begins with a conversation. The better the questions, the better the home." },
      { type: "p", text: "When you are ready, I would love to hear how you want to feel at home." },
    ],
  },
]

export const getArticle = (slug: string) => articles.find(a => a.slug === slug)
export const formatDate = (iso: string) =>
  new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })
