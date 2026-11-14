import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Montserrat } from "next/font/google"
import { SmoothScroll } from "@/components/smooth-scroll"
import "./globals.css"

const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-sans" })
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500"], style: ["normal", "italic"], variable: "--font-serif" })

const siteUrl = "https://allaieaisha.com"
const title = "Allaie Aisha — Founder & Principal Designer, Moodhaus Labs"
const description =
  "Allaie Aisha designs homes and landscapes across San Diego County around one question: how do you want to feel there? Architecture, landscape design and photoreal 3D visualization."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Allaie Aisha",
  authors: [{ name: "Allaie Aisha" }],
  keywords: ["Allaie Aisha", "Moodhaus Labs", "San Diego designer", "La Jolla architecture", "San Diego landscape design", "luxury home design San Diego", "3D architectural visualization"],
  icons: { icon: [{ url: "/icon.svg", type: "image/svg+xml" }], apple: "/apple-icon.png" },
  openGraph: { type: "profile", locale: "en_US", url: siteUrl, siteName: "Allaie Aisha", title, description, images: [{ url: "/og.png", width: 1200, height: 630, alt: "Allaie Aisha, Founder and Principal Designer of Moodhaus Labs" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  alternates: { canonical: siteUrl },
}

export const viewport: Viewport = { themeColor: "#202D23", colorScheme: "light" }

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Allaie Aisha",
  jobTitle: "Founder & Principal Designer",
  worksFor: { "@type": "Organization", name: "Moodhaus Labs" },
  address: { "@type": "PostalAddress", addressRegion: "CA", addressLocality: "San Diego" },
  url: siteUrl,
  telephone: "+1-619-673-2161",
  email: "moodhauslabs@outlook.com",
  knowsAbout: ["Architectural design", "Landscape design", "3D architectural visualization"],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${cormorant.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}
