"use client"

import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import Image from "next/image"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { useCart } from "./cart-context"

export function CartDrawer() {
  const { items, removeItem, updateQuantity, isOpen, setIsOpen, itemCount, subtotal } = useCart()
  return <Drawer open={isOpen} onOpenChange={setIsOpen} direction="right">
    <DrawerContent className="h-full w-full border-l border-primary/10 bg-background sm:max-w-[440px]">
      <DrawerHeader className="border-b border-border/60 p-6"><DrawerTitle className="font-serif text-3xl text-primary">Your basket</DrawerTitle><DrawerDescription>{itemCount} {itemCount === 1 ? "sweet" : "sweets"} tucked inside</DrawerDescription></DrawerHeader>
      <div className="flex-1 overflow-y-auto p-6">
        {items.length === 0 ? <div className="flex h-full flex-col items-center justify-center text-center"><ShoppingBag className="mb-4 h-12 w-12 text-primary/30" /><p className="font-serif text-xl text-foreground">Nothing in the basket yet</p><p className="mt-2 max-w-[220px] text-sm text-muted-foreground">There is always room for one more cookie.</p><DrawerClose asChild><button type="button" className="mt-5 text-sm font-medium text-primary underline-offset-4 hover:underline">Keep browsing</button></DrawerClose></div> : <div className="space-y-6">{items.map(item => <div key={item.id} className="flex gap-4"><div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-card"><Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" /></div><div className="min-w-0 flex-1"><h3 className="mb-1 font-serif text-lg text-foreground">{item.name}</h3><p className="mb-3 text-sm text-muted-foreground">{item.description}</p><div className="flex items-center gap-3"><div className="flex items-center rounded-full border border-border"><button type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)} className="rounded-l-full p-2 hover:bg-card azza-transition" aria-label="Decrease quantity"><Minus className="h-3 w-3" /></button><span className="px-3 text-sm font-medium">{item.quantity}</span><button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)} className="rounded-r-full p-2 hover:bg-card azza-transition" aria-label="Increase quantity"><Plus className="h-3 w-3" /></button></div><button type="button" onClick={() => removeItem(item.id)} className="p-2 text-muted-foreground hover:text-destructive azza-transition" aria-label={"Remove " + item.name}><Trash2 className="h-4 w-4" /></button></div></div><p className="text-right font-medium text-foreground">${(item.price * item.quantity).toFixed(2)}</p></div>)}</div>}
      </div>
      {items.length > 0 && <DrawerFooter className="gap-4 border-t border-border/60 p-6"><div className="space-y-2 text-sm"><div className="flex justify-between text-muted-foreground"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div><div className="flex justify-between text-muted-foreground"><span>Pickup</span><span>Arranged at checkout</span></div><div className="flex justify-between border-t border-border/60 pt-3 text-base font-medium text-foreground"><span>Total</span><span>${subtotal.toFixed(2)}</span></div></div><button type="button" className="w-full rounded-full bg-primary py-4 font-medium text-primary-foreground hover:bg-primary/90 azza-transition">Continue to order</button><DrawerClose asChild><button type="button" className="w-full rounded-full border border-primary/20 py-4 font-medium text-foreground hover:bg-card azza-transition">Keep browsing</button></DrawerClose></DrawerFooter>}
    </DrawerContent>
  </Drawer>
}
