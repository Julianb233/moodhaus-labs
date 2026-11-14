"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ChevronDown, ChevronLeft, Check, Heart, Minus, Plus, ShoppingBag, Star } from "lucide-react"
import { Header } from "@/components/azza/header"
import { Footer } from "@/components/azza/footer"
import { useCart } from "@/components/azza/cart-context"
import { products } from "@/lib/azza-content"

type AccordionKey = "details" | "serving" | "ingredients" | "delivery"

export default function ProductPage() {
  const params = useParams()
  const productId = params.id as string
  const product = products.find(item => item.id === productId) || products[0]
  const [quantity, setQuantity] = useState(1)
  const [open, setOpen] = useState<AccordionKey | null>("details")
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()
  useEffect(() => { window.scrollTo(0, 0) }, [productId])
  const addToCart = () => { addItem({ id: product.id, name: product.name, description: product.tagline, price: product.price, image: product.image }, quantity); setAdded(true); window.setTimeout(() => setAdded(false), 2200) }
  const accordion = [{ key: "details" as const, title: "The bake", text: product.details }, { key: "serving" as const, title: "Serving ideas", text: product.servingNote }, { key: "ingredients" as const, title: "Ingredients", text: product.ingredients }, { key: "delivery" as const, title: "Pickup & delivery", text: product.delivery }]
  return <main className="min-h-screen"><Header /><div className="pt-32 pb-20"><div className="mx-auto max-w-7xl px-6 lg:px-8"><Link href="/shop" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary azza-transition"><ChevronLeft className="h-4 w-4" /> Back to the menu</Link><div className="grid gap-12 lg:grid-cols-2 lg:gap-20"><div className="relative aspect-square overflow-hidden rounded-[2rem] bg-card"><Image src={product.image} alt={product.name} fill priority className="object-cover" /></div><div><p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">{product.category}</p><h1 className="font-serif text-5xl leading-none text-foreground sm:text-7xl">{product.name}</h1><p className="mt-4 font-serif text-2xl italic text-primary">{product.tagline}</p><div className="mt-5 flex items-center gap-2 text-accent"><span className="flex">{[1, 2, 3, 4, 5].map(star => <Star key={star} className="h-4 w-4 fill-current" />)}</span><span className="text-sm text-muted-foreground">Made for sharing</span></div><p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">{product.description}</p><p className="mt-8 font-serif text-3xl text-primary">${product.price.toFixed(2)}</p><div className="mt-8 flex items-center gap-4"><span className="text-sm font-medium">Quantity</span><div className="inline-flex items-center rounded-full bg-card p-1"><button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="flex h-10 w-10 items-center justify-center rounded-full text-primary hover:bg-background" aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button><span className="w-8 text-center text-sm font-medium">{quantity}</span><button type="button" onClick={() => setQuantity(quantity + 1)} className="flex h-10 w-10 items-center justify-center rounded-full text-primary hover:bg-background" aria-label="Increase quantity"><Plus className="h-4 w-4" /></button></div></div><div className="mt-7 flex gap-3"><button type="button" onClick={addToCart} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-medium text-primary-foreground hover:bg-primary/90 azza-transition">{added ? <><Check className="h-4 w-4" /> Added to basket</> : <><ShoppingBag className="h-4 w-4" /> Add to basket</>}</button><button type="button" className="rounded-full border border-primary/15 px-5 text-primary hover:bg-card azza-transition" aria-label="Save product"><Heart className="h-5 w-5" /></button></div><div className="mt-10 border-t border-border/60">{accordion.map(item => <div key={item.key} className="border-b border-border/60"><button type="button" onClick={() => setOpen(open === item.key ? null : item.key)} className="flex w-full items-center justify-between py-5 text-left font-serif text-xl text-foreground"><span>{item.title}</span><ChevronDown className={"h-5 w-5 text-primary azza-transition " + (open === item.key ? "rotate-180" : "")} /></button>{open === item.key && <p className="pb-5 leading-relaxed text-muted-foreground">{item.text}</p>}</div>)}</div></div></div></div></div><Footer /></main>
}
