import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Montserrat } from "next/font/google"
import { SmoothScroll } from "@/components/moodhaus/smooth-scroll"
import "./globals.css"

const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-sans" })
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
})

const siteUrl = "https://moodhauslabs.com"
const title = "Moodhaus Labs — Architecture & Landscape Design, San Diego"
const description =
  "Moodhaus Labs designs exceptional homes and landscapes across San Diego County, from the coast to the canyons. Architecture, landscape design and photoreal 3D with founder and principal designer Allaie Aisha."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s · Moodhaus Labs" },
  description,
  keywords: [
    "Moodhaus Labs",
    "San Diego architect",
    "San Diego County landscape design",
    "luxury landscape design San Diego",
    "La Jolla architect",
    "Rancho Santa Fe landscape design",
    "Del Mar home design",
    "3D architectural visualization",
  ],
  applicationName: "Moodhaus Labs",
  authors: [{ name: "Moodhaus Labs" }],
  creator: "Moodhaus Labs",
  icons: { icon: [{ url: "/brand/favicon.svg", type: "image/svg+xml" }] },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Moodhaus Labs",
    title,
    description,
    images: [{ url: "/brand/og-share.png", width: 1200, height: 630, alt: "Moodhaus Labs — Design | Visualize | Transform" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/brand/og-share.png"] },
  alternates: { canonical: siteUrl },
}

export const viewport: Viewport = { themeColor: "#202D23", colorScheme: "light" }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${cormorant.variable}`}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}
