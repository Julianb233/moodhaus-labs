import type { Metadata, Viewport } from "next"
import { DM_Sans, Playfair_Display } from "next/font/google"
import { CartDrawer } from "@/components/azza/cart-drawer"
import { CartProvider } from "@/components/azza/cart-context"
import "./globals.css"

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })

const siteUrl = "https://azzaapron.vercel.app"
const title = "Azza’s Apron — Homemade Desserts for Sweeter Days"
const description = "Small-batch desserts, nostalgic recipes, and good things baked with love by Azza’s Apron."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s · Azza’s Apron" },
  description,
  keywords: ["Azza’s Apron", "homemade desserts", "small-batch bakery", "cookies", "cakes", "dessert gifts"],
  applicationName: "Azza’s Apron",
  authors: [{ name: "Azza’s Apron" }],
  creator: "Azza’s Apron",
  icons: {
    icon: [{ url: "/images/azza/brand/favicon.png", type: "image/png" }],
    apple: [{ url: "/images/azza/brand/favicon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Azza’s Apron",
    title,
    description,
    images: [
      {
        url: "/images/azza/brand/og-share.jpg",
        width: 1200,
        height: 630,
        alt: "Azza’s Apron — good things are baked with love",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/azza/brand/og-share.jpg"],
  },
  alternates: { canonical: siteUrl },
}

export const viewport: Viewport = { themeColor: "#234B3A", colorScheme: "light" }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${playfair.variable}`}>
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  )
}
