export type ProductCategory = "bakes" | "treats" | "gifts" | "kits"

export interface BakeryProduct {
  id: string
  name: string
  tagline: string
  description: string
  price: number
  originalPrice: number | null
  image: string
  badge: string | null
  category: ProductCategory
  details: string
  servingNote: string
  ingredients: string
  delivery: string
}

// Starter menu content for the template. Replace names, pricing, and ordering details with the live menu before launch.
export const products: BakeryProduct[] = [
  {
    id: "cinnamon-roll-box",
    name: "Cinnamon Roll Box",
    tagline: "Soft spirals, brown sugar edges, happy mornings",
    description: "A box of tender, buttery cinnamon rolls finished with a warm vanilla glaze. Made for slow mornings and sharing with your favorite people.",
    price: 18,
    originalPrice: null,
    image: "/images/azza/products/cinnamon-roll-box.webp",
    badge: "Bestseller",
    category: "bakes",
    details: "Our signature rolls are mixed, rolled, and iced by hand in small batches. Each box includes six generous rolls with golden edges and a soft center.",
    servingNote: "Best enjoyed warm. Reheat individual rolls for 10–15 seconds and add coffee.",
    ingredients: "Wheat flour, butter, brown sugar, cinnamon, eggs, milk, yeast, vanilla, cream cheese, powdered sugar, and sea salt.",
    delivery: "Local pickup and select delivery windows are available. Orders are prepared fresh and should be enjoyed within two days."
  },
  {
    id: "chocolate-chip-cookies",
    name: "Chocolate Chip Cookies",
    tagline: "Crisp little edges, gooey centers",
    description: "Golden cookies packed with dark chocolate and a pinch of flaky salt. The kind you hide in the back of the pantry for later.",
    price: 16,
    originalPrice: null,
    image: "/images/azza/products/chocolate-chip-cookies.webp",
    badge: "Crowd favorite",
    category: "treats",
    details: "We rest our dough overnight for deeper flavor, then bake each cookie until the edges are caramelized and the middles stay soft.",
    servingNote: "Enjoy at room temperature or warm for a just-baked bite.",
    ingredients: "Wheat flour, butter, brown sugar, cane sugar, eggs, dark chocolate, vanilla, baking soda, and sea salt.",
    delivery: "Cookies are packed in a reusable bakery box for local pickup. They keep beautifully for three days."
  },
  {
    id: "lemon-pound-cake",
    name: "Lemon Pound Cake",
    tagline: "Bright, buttery, and made for tea",
    description: "A tender loaf with fresh lemon zest, a delicate crumb, and a thin citrus glaze that tastes like a little bit of sunshine.",
    price: 24,
    originalPrice: null,
    image: "/images/azza/products/lemon-pound-cake.webp",
    badge: "New",
    category: "bakes",
    details: "This classic loaf is made with real lemon zest and a slow, careful bake for a moist crumb and lightly crisp edge.",
    servingNote: "Slice thickly and serve with tea, berries, or a dollop of whipped cream.",
    ingredients: "Wheat flour, butter, cane sugar, eggs, lemons, milk, vanilla, baking powder, and sea salt.",
    delivery: "Fresh loaves are available for local pickup on the next available bake day."
  },
  {
    id: "brown-butter-banana-bread",
    name: "Brown Butter Banana Bread",
    tagline: "The cozy slice everyone asks for",
    description: "Our deeply golden banana bread is made with ripe bananas, nutty brown butter, and a crackly sugar top.",
    price: 22,
    originalPrice: null,
    image: "/images/azza/products/brown-butter-banana-bread.webp",
    badge: null,
    category: "bakes",
    details: "Ripe bananas bring the sweetness; brown butter brings the toasty, nostalgic flavor. Every loaf is mixed by hand and baked until fragrant.",
    servingNote: "Toast a slice and spread with salted butter for the full Azza’s Apron moment.",
    ingredients: "Bananas, wheat flour, butter, cane sugar, eggs, vanilla, baking soda, cinnamon, and sea salt.",
    delivery: "Loaves are wrapped for freshness and ready for local pickup."
  },
  {
    id: "weekend-dessert-box",
    name: "Weekend Dessert Box",
    tagline: "A little something for everybody",
    description: "A rotating assortment of the week’s favorite small-batch sweets, packed up like a present for your table.",
    price: 38,
    originalPrice: null,
    image: "/images/azza/products/weekend-dessert-box.webp",
    badge: "For sharing",
    category: "gifts",
    details: "Every box changes with the season and the baker’s market list. Expect a thoughtful mix of cookies, bars, and a small loaf or cake.",
    servingNote: "Unbox at the table and let everyone choose their first bite.",
    ingredients: "Ingredients vary by week. Please ask about allergens when ordering.",
    delivery: "Available for preorder with local pickup during the weekend market window."
  },
  {
    id: "sweet-gift-tin",
    name: "Sweet Gift Tin",
    tagline: "A thoughtful thank-you, baked by hand",
    description: "A keepsake tin filled with a generous assortment of cookies and treats, ready to make someone’s day sweeter.",
    price: 28,
    originalPrice: null,
    image: "/images/azza/products/sweet-gift-tin.webp",
    badge: "Giftable",
    category: "gifts",
    details: "The gift tin is assembled by hand and finished with a handwritten note card. It is made for birthdays, thank-yous, and just-because moments.",
    servingNote: "Keep treats sealed between servings and share generously.",
    ingredients: "Ingredients vary by assortment. Please ask about allergens when ordering.",
    delivery: "Local pickup and scheduled delivery are available for gift orders."
  },
  {
    id: "weekend-cookie-kit",
    name: "Weekend Cookie Kit",
    tagline: "Mix, scoop, and make a memory",
    description: "Everything for a cozy batch of chocolate chip cookies, including pre-measured dry ingredients, chocolate, and a handwritten recipe card.",
    price: 26,
    originalPrice: null,
    image: "/images/azza/products/weekend-cookie-kit.webp",
    badge: "Bake at home",
    category: "kits",
    details: "The Weekend Cookie Kit makes two dozen cookies and comes with simple step-by-step instructions. Add your own butter and eggs, then invite someone into the kitchen.",
    servingNote: "Make the dough today, chill overnight, and bake when the house needs a little warmth.",
    ingredients: "Pre-measured wheat flour, brown sugar, cane sugar, dark chocolate, baking soda, vanilla sugar, and sea salt. Contains wheat.",
    delivery: "Kits are packed fresh for local pickup and include a best-bake date on the recipe card."
  },
  {
    id: "cinnamon-roll-kit",
    name: "Cinnamon Roll Kit",
    tagline: "A slow morning, ready to roll",
    description: "A hands-on cinnamon roll kit with the ingredients, glaze, and guidance for six soft, buttery rolls at home.",
    price: 32,
    originalPrice: null,
    image: "/images/azza/products/cinnamon-roll-kit.webp",
    badge: "Best for two",
    category: "kits",
    details: "Shape, proof, and bake six rolls with our favorite cinnamon filling and vanilla glaze. It is a gentle project for a Saturday morning or a thoughtful gift.",
    servingNote: "Plan for about two hours, including proofing time. Put the kettle on while they rise.",
    ingredients: "Wheat flour, brown sugar, cinnamon, yeast, powdered sugar, vanilla sugar, and sea salt. Add butter and milk at home.",
    delivery: "Available for weekend pickup while supplies last."
  },
  {
    id: "little-baker-decorating-kit",
    name: "Little Baker Decorating Kit",
    tagline: "Sprinkles, swirls, and tiny proud smiles",
    description: "A cheerful decorating kit with baked cookies, vanilla icing, colorful sprinkles, and a little table-ready activity card.",
    price: 24,
    originalPrice: null,
    image: "/images/azza/products/decorating-kit.webp",
    badge: "For gifting",
    category: "kits",
    details: "A low-lift way to make an afternoon feel special. Each kit includes eight baked cookies and enough icing and sprinkles for a generous decorating session.",
    servingNote: "Set everything out on a tray, let the icing set, and celebrate the ones that look a little wonky.",
    ingredients: "Wheat flour, butter, cane sugar, eggs, vanilla, powdered sugar, and assorted sprinkles. Contains wheat and dairy.",
    delivery: "Local pickup and scheduled delivery are available for group orders."
  },
  {
    id: "team-bake-box",
    name: "Team Bake Box",
    tagline: "A shared project for the whole table",
    description: "A larger kit for offices, classrooms, and gatherings with enough dough, toppings, and recipe cards for twelve bakers.",
    price: 58,
    originalPrice: null,
    image: "/images/azza/products/team-bake-box.webp",
    badge: "Group size",
    category: "kits",
    details: "The Team Bake Box is designed for a guided bake activity or a relaxed group afternoon. Choose cookies or cinnamon rolls when you inquire.",
    servingNote: "Best ordered five business days ahead so we can pack the batch thoughtfully.",
    ingredients: "Varies by selected bake. Allergen information is supplied with each order.",
    delivery: "Commercial and group pickup windows are arranged directly with Azza’s Apron."
  }
]

export const productCategories: { value: ProductCategory | "all"; label: string }[] = [
  { value: "all", label: "Everything" },
  { value: "bakes", label: "Bakes" },
  { value: "treats", label: "Treats" },
  { value: "gifts", label: "Gifts" },
  { value: "kits", label: "Bake kits" }
]

export const testimonials = [
  { quote: "The kind of baking that makes an ordinary Tuesday feel like a holiday.", name: "Maya R.", detail: "Neighborhood regular" },
  { quote: "I brought the dessert box to dinner and came home with an empty box and three new friends.", name: "Jordan K.", detail: "Weekend table" },
  { quote: "You can taste the care in every crumb. The banana bread is officially a family tradition.", name: "Nia W.", detail: "Happy customer" },
  { quote: "Azza’s Apron feels like being welcomed into a kitchen where something good is always in the oven.", name: "Sam T.", detail: "Market friend" },
  { quote: "The cookies disappeared before I got a picture. That is the review.", name: "Leah P.", detail: "Cookie enthusiast" },
  { quote: "Beautifully packed, deeply delicious, and personal in all the right ways.", name: "Chris D.", detail: "Gift giver" }
]

export const footerLinks = [
  { label: "Shop all", href: "/shop" },
  { label: "Bakes", href: "/shop?category=bakes" },
  { label: "Treats", href: "/shop?category=treats" },
  { label: "Gifts", href: "/shop?category=gifts" },
  { label: "Commercial orders", href: "/wholesale" }
]
