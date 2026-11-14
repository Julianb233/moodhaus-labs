"use client"

import { useState } from "react"
import { Check, Share2 } from "lucide-react"

/** Opens the phone's native share sheet; falls back to copying the link. */
export function ShareButton({ url, title, text, className = "" }: { url: string; title: string; text: string; className?: string }) {
  const [copied, setCopied] = useState(false)

  const share = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ url, title, text })
        return
      }
      await navigator.clipboard.writeText(url)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      /* share sheet dismissed */
    }
  }

  return (
    <button type="button" onClick={share} className={className} aria-live="polite">
      {copied ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
      {copied ? "Link copied" : "Share"}
    </button>
  )
}
