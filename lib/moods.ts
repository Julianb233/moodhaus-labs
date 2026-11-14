import { unsplash } from "./moodhaus-content"

/**
 * Designing for a mood: each space starts from how the owner wants to feel there, then light,
 * colour, material, proportion, sound and scent are tuned to that feeling.
 * Colour temperatures follow common lighting practice: about 2200–2400K reads as firelight,
 * 2700–3000K as warm and residential, 3500–4000K and daylight as bright and awake.
 */
export type Mood = {
  key: string
  name: string
  space: string
  line: string
  feelings: string[]
  /** Section colours while this mood is showing. */
  bg: string
  fg: string
  accent: string
  swatches: { name: string; hex: string }[]
  levers: { label: string; text: string }[]
  image: string
  alt: string
  detail: string
  detailAlt: string
}

export const moods: Mood[] = [
  {
    key: "playful",
    name: "Playful",
    space: "The family pool and lawn",
    line: "Room to run, a beach entry for the little ones, and steps wide enough to become seats.",
    feelings: ["Free", "Sunlit", "Sociable"],
    bg: "#1d4548",
    fg: "#f3efe4",
    accent: "#f0c674",
    swatches: [
      { name: "Sea glass", hex: "#8fc1bd" },
      { name: "Lime leaf", hex: "#b7c46a" },
      { name: "Terracotta", hex: "#c8734f" },
      { name: "Chalk", hex: "#f3efe4" },
    ],
    levers: [
      { label: "Light", text: "Full sun by day; low 3000K garden light and a little sparkle in the trees at night." },
      { label: "Material", text: "Cool-to-the-touch pavers, smooth plaster, fabrics that dry in an hour." },
      { label: "Shape", text: "Curves over corners, an open lawn, a pool edge you can sit on." },
      { label: "Sound & scent", text: "Moving water, citrus trees, the smell of cut grass." },
    ],
    image: unsplash("1787237849351-5dcba5f478c4", 2000),
    alt: "Pool in a lush lawn garden with umbrellas and loungers",
    detail: unsplash("1793891138044-158c77d3c82b", 1000),
    detailAlt: "Open lawn with small football goals beside a pergola",
  },
  {
    key: "elegant",
    name: "Elegant",
    space: "The formal dining room",
    line: "A room that slows the evening down: symmetry, a long table, and one beautiful light over it.",
    feelings: ["Composed", "Gracious", "Ceremonial"],
    bg: "#3a1a20",
    fg: "#f3e9e2",
    accent: "#d9b98f",
    swatches: [
      { name: "Claret", hex: "#7d2635" },
      { name: "Bone", hex: "#eadfce" },
      { name: "Bronze", hex: "#a77b4f" },
      { name: "Ink", hex: "#1f2230" },
    ],
    levers: [
      { label: "Light", text: "2700K on dimmers, a chandelier as the focal layer, candles on the table." },
      { label: "Material", text: "Velvet, honed marble, lacquer and polished plaster." },
      { label: "Shape", text: "Tall ceilings, a clear axis, doors that frame the room as you arrive." },
      { label: "Sound & scent", text: "Hushed acoustics behind fabric walls; garden roses on the table." },
    ],
    image: unsplash("1777781835512-bad3c28f90ed", 2000),
    alt: "Dining room with claret velvet chairs and a long timber table",
    detail: unsplash("1769140771440-e691bc16bf8e", 1000),
    detailAlt: "Formal dining room under a pendant light",
  },
  {
    key: "warm",
    name: "Warm",
    space: "The fire lounge",
    line: "Lower ceilings, deep seats and a real fire: the room everyone ends up in.",
    feelings: ["Held", "Unhurried", "Together"],
    bg: "#47281a",
    fg: "#f6ead9",
    accent: "#f1b56c",
    swatches: [
      { name: "Ochre", hex: "#c98d3e" },
      { name: "Rust", hex: "#9a4a2a" },
      { name: "Oatmeal", hex: "#e3d6bf" },
      { name: "Walnut", hex: "#5a3a26" },
    ],
    levers: [
      { label: "Light", text: "2200–2400K, the colour of firelight; lamps low, nothing overhead." },
      { label: "Material", text: "Rough stone, oiled oak, wool and linen you want to touch." },
      { label: "Shape", text: "Enclosure: a lowered ceiling, a hearth wall, seating that faces in." },
      { label: "Sound & scent", text: "The crackle of the fire, woodsmoke, something baking next door." },
    ],
    image: unsplash("1717497043712-e197abe15c28", 2000),
    alt: "Lounge with a glowing fireplace and soft sofas",
    detail: unsplash("1773847408152-4e06dec54cf4", 1000),
    detailAlt: "Stone fireplace with armchairs",
  },
  {
    key: "serene",
    name: "Serene",
    space: "The primary suite and spa",
    line: "Nothing to look at but light, water and stone. A room that asks nothing of you.",
    feelings: ["Quiet", "Weightless", "Restored"],
    bg: "#dfe1d6",
    fg: "#27302a",
    accent: "#6d7b5c",
    swatches: [
      { name: "Limewash", hex: "#f1ede4" },
      { name: "Sage", hex: "#a9b39a" },
      { name: "Sand", hex: "#d8c6a6" },
      { name: "Stone", hex: "#8f8a80" },
    ],
    levers: [
      { label: "Light", text: "Daylight through linen; 2700K indirect light at night, no glare, no downlights over the bath." },
      { label: "Material", text: "Limestone, tadelakt plaster, pale oak, a single branch." },
      { label: "Shape", text: "Long sightlines, very few objects, water right at the threshold." },
      { label: "Sound & scent", text: "Still water and wind in grasses; eucalyptus and sage from the garden." },
    ],
    image: unsplash("1753605788101-04d1e653e74a", 2000),
    alt: "Freestanding bath in a pale stone bathroom with a flowering branch",
    detail: unsplash("1781344334947-60c704bafd51", 1000),
    detailAlt: "Bathroom in pale oak and stone with a freestanding tub",
  },
  {
    key: "dramatic",
    name: "Dramatic",
    space: "The evening bar and terrace",
    line: "Pools of light in the dark, leather and smoked brass. Built for long conversations.",
    feelings: ["Intimate", "Mysterious", "Alive"],
    bg: "#101915",
    fg: "#efe6d6",
    accent: "#c9a46a",
    swatches: [
      { name: "Bottle green", hex: "#21402f" },
      { name: "Oxblood", hex: "#5e1f22" },
      { name: "Smoked brass", hex: "#9b7b4a" },
      { name: "Black", hex: "#0c0f0d" },
    ],
    levers: [
      { label: "Light", text: "2200K in small pools with real darkness between them; candles and backlit shelves." },
      { label: "Material", text: "Leather, smoked glass, dark timber, deep velvet." },
      { label: "Shape", text: "A low, compressed entry that opens into one glowing room." },
      { label: "Sound & scent", text: "Soft surfaces that swallow echo; night-blooming jasmine on the terrace." },
    ],
    image: unsplash("1756981168649-0e3c3c8a32f3", 2000),
    alt: "Dark panelled room with a green leather chesterfield and a low lamp",
    detail: unsplash("1578911489158-334e5cd2a051", 1000),
    detailAlt: "Dimly lit bar with backlit shelves",
  },
  {
    key: "grounded",
    name: "Grounded",
    space: "The library and study",
    line: "Timber all around, a window seat looking at green, and a door that closes.",
    feelings: ["Focused", "Rooted", "Calm"],
    bg: "#2c3222",
    fg: "#efe9da",
    accent: "#cfae7b",
    swatches: [
      { name: "Walnut", hex: "#6b4429" },
      { name: "Moss", hex: "#58613d" },
      { name: "Tobacco", hex: "#8a5f36" },
      { name: "Cream", hex: "#efe5cf" },
    ],
    levers: [
      { label: "Light", text: "3000K task light where you read, warm light washing the shelves." },
      { label: "Material", text: "Timber panelling, wool, leather, a great many books." },
      { label: "Shape", text: "Enclosure and a view out: a window seat, a fixed desk, shelves to the ceiling." },
      { label: "Sound & scent", text: "Quiet from soft surfaces and books; cedar and paper." },
    ],
    image: unsplash("1777896067223-9990008a07d7", 2000),
    alt: "Wood-panelled library with full bookshelves and a sofa by the window",
    detail: unsplash("1790420832827-ca28274937ab", 1000),
    detailAlt: "Bookshelves washed with warm light above timber panelling",
  },
  {
    key: "fresh",
    name: "Fresh",
    space: "The morning kitchen and studio",
    line: "East light, a big table, olive trees inside. The room that starts the day well.",
    feelings: ["Awake", "Clear", "Optimistic"],
    bg: "#f1eee5",
    fg: "#1e2a22",
    accent: "#7b8a4c",
    swatches: [
      { name: "Chalk", hex: "#f7f4ec" },
      { name: "Olive leaf", hex: "#8c9764" },
      { name: "Pale oak", hex: "#d9c3a0" },
      { name: "Sky", hex: "#bcd3dc" },
    ],
    levers: [
      { label: "Light", text: "Morning sun from the east; 3500–4000K task light at the counter." },
      { label: "Material", text: "White oak, linen, terracotta and soft plaster." },
      { label: "Shape", text: "Tall glass, high ceilings, plants brought inside." },
      { label: "Sound & scent", text: "Birdsong through open doors; coffee, lemon and basil." },
    ],
    image: unsplash("1633505899118-4ca6bd143043", 2000),
    alt: "Bright white living room with an olive tree and linen sofas",
    detail: unsplash("1631510390389-c1e4fb20ff31", 1000),
    detailAlt: "Sunlit room with pale furniture and plants",
  },
]
