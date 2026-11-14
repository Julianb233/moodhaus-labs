"use client"

import Image from "next/image"
import Link from "next/link"
import { SlidersHorizontal, X, ShoppingBag } from "lucide-react"
import { useEffect, useState } from "react"
import { Header } from "@/components/azza/header"
import { Footer } from "@/components/azza/footer"
import { useCart } from "@/components/azza/cart-context"
import { productCategories, products } from "@/lib/azza-content"

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showFilters, setShowFilters] = useState(false)
  const { addItem } = useCart()
  useEffect(() => {
    const category = new URLSearchParams(window.location.search).get("category")
    if (category && productCategories.some(item => item.value === category)) {
      const timer = window.setTimeout(() => setSelectedCategory(category), 0)
      return () => window.clearTimeout(timer)
    }
  }, [])
  const filtered = selectedCategory === "all" ? products : products.filter(product => product.category === selectedCategory)
  return <main className="min-h-screen"><Header /><div className="pt-32 pb-20"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="mb-14 max-w-2xl"><p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">The full menu</p><h1 className="font-serif text-6xl leading-none text-foreground sm:text-8xl">Something good<br /><em className="font-normal text-primary">is baking.</em></h1><p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">Browse the small-batch bakes, treats, and gifts currently on the table.</p></div><div className="mb-10 flex items-center justify-between border-b border-border/60 pb-5"><button type="button" onClick={() => setShowFilters(!showFilters)} className="inline-flex items-center gap-2 text-sm text-primary lg:hidden"><SlidersHorizontal className="h-4 w-4" /> Filter the menu</button><div className="hidden gap-2 lg:flex">{productCategories.map(category => <button key={category.value} type="button" onClick={() => setSelectedCategory(category.value)} className={"rounded-full px-4 py-2 text-sm azza-transition " + (selectedCategory === category.value ? "bg-primary text-primary-foreground" : "bg-card text-foreground/70 hover:bg-primary/10")}>{category.label}</button>)}</div><span className="text-sm text-muted-foreground">{filtered.length} {filtered.length === 1 ? "sweet" : "sweets"}</span></div>{showFilters && <div className="fixed inset-0 z-50 bg-background p-6 lg:hidden"><div className="flex items-center justify-between"><h2 className="font-serif text-3xl text-primary">Choose a category</h2><button type="button" onClick={() => setShowFilters(false)} aria-label="Close filters"><X /></button></div><div className="mt-10 grid gap-3">{productCategories.map(category => <button key={category.value} type="button" onClick={() => { setSelectedCategory(category.value); setShowFilters(false) }} className={"rounded-2xl p-4 text-left " + (selectedCategory === category.value ? "bg-primary text-primary-foreground" : "bg-card")}>{category.label}</button>)}</div></div>}<div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{filtered.map(product => <article key={product.id} className="group"><Link href={"/product/" + product.id} className="block"><div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-card"><Image src={product.image} alt={product.name} fill className="object-cover transition duration-700 group-hover:scale-105" />{product.badge && <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-bold text-primary">{product.badge}</span>}</div><div className="flex items-start justify-between gap-4 px-1 pt-4"><div><h2 className="font-serif text-2xl text-foreground">{product.name}</h2><p className="mt-1 text-sm text-muted-foreground">{product.tagline}</p></div><span className="font-medium text-primary">${product.price}</span></div></Link><button type="button" onClick={() => addItem({ id: product.id, name: product.name, description: product.tagline, price: product.price, image: product.image })} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 azza-transition"><ShoppingBag className="h-4 w-4" /> Add to basket</button></article>)}</div></div></div><Footer /></main>
}
