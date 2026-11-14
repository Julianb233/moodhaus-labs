import { NextResponse } from "next/server"

/**
 * Consultation requests, with optional inspiration photos.
 *
 * Sends the inquiry (photos attached) through Resend when these environment variables are set:
 *   RESEND_API_KEY        – API key from resend.com
 *   CONSULTATION_TO       – where inquiries go (e.g. the studio inbox)
 *   CONSULTATION_FROM     – a sender on a domain verified in Resend, e.g. "Moodhaus Labs <studio@moodhauslabs.com>"
 * Without them it answers 501 and the page falls back to opening an email draft.
 */
export const runtime = "nodejs"

const MAX_FILES = 8
const MAX_TOTAL_BYTES = 4 * 1024 * 1024 // stays under the 4.5 MB serverless request limit

const esc = (s: string) => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c] as string)

export async function POST(request: Request) {
  const key = process.env.RESEND_API_KEY
  const to = process.env.CONSULTATION_TO
  const from = process.env.CONSULTATION_FROM
  if (!key || !to || !from) {
    return NextResponse.json({ ok: false, reason: "not-configured" }, { status: 501 })
  }

  let form: FormData
  try {
    form = await request.formData()
  } catch {
    return NextResponse.json({ ok: false, reason: "bad-request" }, { status: 400 })
  }

  const field = (name: string) => String(form.get(name) ?? "").slice(0, 4000).trim()
  const name = field("name")
  const email = field("email")
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, reason: "invalid" }, { status: 400 })
  }
  // Honeypot: real visitors never fill this in.
  if (field("company_website")) return NextResponse.json({ ok: true })

  const files = form.getAll("photos").filter((f): f is File => f instanceof File && f.size > 0).slice(0, MAX_FILES)
  let total = 0
  const attachments: { filename: string; content: string }[] = []
  for (const [i, file] of files.entries()) {
    if (!file.type.startsWith("image/")) continue
    total += file.size
    if (total > MAX_TOTAL_BYTES) break
    const buf = Buffer.from(await file.arrayBuffer())
    const ext = file.type === "image/png" ? "png" : file.type === "image/webp" ? "webp" : "jpg"
    attachments.push({ filename: `vision-${i + 1}.${ext}`, content: buf.toString("base64") })
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Phone", field("phone")],
    ["Property location", field("location")],
    ["Project type", field("project")],
    ["Investment range", field("budget")],
    ["Ideal timeline", field("timeline")],
  ]
  const message = field("message")
  const html = `
    <h2 style="font-family:Georgia,serif;font-weight:400">New consultation request</h2>
    <table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
      ${rows.map(([k, v]) => `<tr><td style="padding:4px 16px 4px 0;color:#6E5A44">${k}</td><td style="padding:4px 0">${esc(v || "—")}</td></tr>`).join("")}
    </table>
    <p style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap">${esc(message)}</p>
    <p style="font-family:Arial,sans-serif;font-size:12px;color:#5f5a4e">${attachments.length} inspiration photo(s) attached.</p>`

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Consultation request: ${field("project") || "new project"} in ${field("location") || "San Diego"}`,
      html,
      attachments,
    }),
  })
  if (!res.ok) {
    console.error("Resend error", res.status, await res.text().catch(() => ""))
    return NextResponse.json({ ok: false, reason: "send-failed" }, { status: 502 })
  }
  return NextResponse.json({ ok: true, photos: attachments.length })
}
