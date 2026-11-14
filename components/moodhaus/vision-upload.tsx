"use client"

import { DragEvent, useEffect, useRef, useState } from "react"
import { ImagePlus, X } from "lucide-react"
import { cn } from "@/lib/utils"

export const MAX_VISION_PHOTOS = 8
const MAX_EDGE = 1800

export type VisionPhoto = { id: string; file: File; url: string }

/** Downscale a photo in the browser so several fit comfortably in one request. */
async function shrink(file: File): Promise<File> {
  if (!file.type.startsWith("image/") || file.type === "image/gif") return file
  try {
    const bitmap = await createImageBitmap(file)
    const scale = Math.min(1, MAX_EDGE / Math.max(bitmap.width, bitmap.height))
    if (scale === 1 && file.size < 600_000) return file
    const canvas = document.createElement("canvas")
    canvas.width = Math.round(bitmap.width * scale)
    canvas.height = Math.round(bitmap.height * scale)
    canvas.getContext("2d")?.drawImage(bitmap, 0, 0, canvas.width, canvas.height)
    const blob = await new Promise<Blob | null>(res => canvas.toBlob(res, "image/jpeg", 0.8))
    if (!blob) return file
    return new File([blob], file.name.replace(/\.\w+$/, "") + ".jpg", { type: "image/jpeg" })
  } catch {
    return file // e.g. HEIC in a browser that can't decode it: send as is
  }
}

/** Drag-and-drop (or tap to choose) inspiration photos, with previews. */
export function VisionUpload({ photos, onChange }: { photos: VisionPhoto[]; onChange: (p: VisionPhoto[]) => void }) {
  const input = useRef<HTMLInputElement>(null)
  const [over, setOver] = useState(false)
  const [busy, setBusy] = useState(false)

  useEffect(() => () => photos.forEach(p => URL.revokeObjectURL(p.url)), []) // eslint-disable-line react-hooks/exhaustive-deps

  const add = async (list: FileList | null) => {
    if (!list?.length) return
    setBusy(true)
    const room = MAX_VISION_PHOTOS - photos.length
    const picked = Array.from(list).filter(f => f.type.startsWith("image/") || /\.(heic|heif)$/i.test(f.name)).slice(0, room)
    const shrunk = await Promise.all(picked.map(shrink))
    onChange([...photos, ...shrunk.map(file => ({ id: crypto.randomUUID(), file, url: URL.createObjectURL(file) }))])
    setBusy(false)
  }
  const remove = (id: string) => {
    const gone = photos.find(p => p.id === id)
    if (gone) URL.revokeObjectURL(gone.url)
    onChange(photos.filter(p => p.id !== id))
  }
  const onDrop = (e: DragEvent) => {
    e.preventDefault()
    setOver(false)
    add(e.dataTransfer.files)
  }

  const full = photos.length >= MAX_VISION_PHOTOS
  return (
    <div>
      <button
        type="button"
        disabled={full}
        onClick={() => input.current?.click()}
        onDragOver={e => { e.preventDefault(); setOver(true) }}
        onDragLeave={() => setOver(false)}
        onDrop={onDrop}
        className={cn(
          "flex w-full flex-col items-center justify-center gap-3 rounded-[6px] border border-dashed border-primary/25 bg-background px-6 py-10 text-center mh-transition hover:border-bronze hover:bg-card disabled:cursor-not-allowed disabled:opacity-60",
          over && "border-bronze bg-card",
        )}
      >
        <ImagePlus className="h-6 w-6 text-walnut" strokeWidth={1.25} />
        <span className="font-serif text-xl text-primary">{busy ? "Preparing photos…" : full ? "Photo limit reached" : "Add photos of your property or inspiration"}</span>
        <span className="text-xs text-muted-foreground">Drag them here or tap to choose · up to {MAX_VISION_PHOTOS} images</span>
      </button>
      <input ref={input} type="file" accept="image/*,.heic,.heif" multiple className="sr-only" tabIndex={-1} onChange={e => { add(e.target.files); e.target.value = "" }} />

      {photos.length > 0 && (
        <ul className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-6">
          {photos.map(p => (
            <li key={p.id} className="relative aspect-square overflow-hidden rounded-[6px] bg-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.url} alt="" data-no-fade className="h-full w-full object-cover" />
              <button type="button" onClick={() => remove(p.id)} aria-label={"Remove " + p.file.name} className="absolute right-1 top-1 rounded-full bg-primary/80 p-1 text-primary-foreground hover:bg-primary">
                <X className="h-3 w-3" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
