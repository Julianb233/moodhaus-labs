import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const recipes = [
  { title: "A table for sharing", note: "The cinnamon roll box", image: "/images/azza/photos/detail.webp" },
  { title: "The weekend spread", note: "A little sweet for later", image: "/images/azza/photos/gift.webp" },
  { title: "Color on the counter", note: "Bake kits for happy hands", image: "/images/azza/products/decorating-kit.webp" }
]

export function RecipeStory() {
  return <section className="bg-card py-24 sm:py-32"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">From the recipe box</p><h2 className="font-serif text-5xl leading-none text-foreground sm:text-7xl">Stories worth<br /><em className="font-normal text-primary">bringing home.</em></h2></div><Link href="/shop" className="inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline">Browse the bakes <ArrowUpRight className="h-4 w-4" /></Link></div><div className="grid gap-5 md:grid-cols-[1.15fr_.85fr_.85fr]"><article className="azza-image-frame group relative min-h-[420px] overflow-hidden rounded-[2rem] bg-primary text-primary-foreground md:row-span-2"><Image src={recipes[0].image} alt="A colorful market-table spread" fill className="object-cover opacity-70 transition duration-700 group-hover:scale-105" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary via-primary/80 to-transparent p-7 pt-28"><p className="text-xs uppercase tracking-[0.2em] text-accent">{recipes[0].note}</p><h3 className="mt-2 font-serif text-4xl">{recipes[0].title}</h3><p className="mt-3 max-w-sm text-sm leading-relaxed text-primary-foreground/75">The best recipes are rarely fussy. They are generous, colorful, and meant to be passed around.</p></div></article>{recipes.slice(1).map(recipe => <article key={recipe.title} className="group rounded-[2rem] bg-background p-3"><div className="azza-image-frame relative aspect-[1.45] overflow-hidden rounded-[1.5rem]"><Image src={recipe.image} alt={recipe.title} fill className="object-cover transition duration-700 group-hover:scale-105" /></div><div className="px-2 pb-3 pt-4"><p className="text-xs uppercase tracking-[0.18em] text-primary/60">{recipe.note}</p><h3 className="mt-2 font-serif text-2xl text-foreground">{recipe.title}</h3></div></article>)}</div></div></section>
}
