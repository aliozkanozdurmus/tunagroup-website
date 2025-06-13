import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata = {
  title: "Tuna Group - Geleceği Şekillendiren Güç",
  description:
    "Tuna Group, teknoloji, inşaat, enerji ve finans sektörlerinde faaliyet gösteren çok uluslu bir holding şirketidir.",
  keywords: "Tuna Group, holding, teknoloji, inşaat, enerji, finans, yenilikçi çözümler, sürdürülebilir büyüme",
  openGraph: {
    title: "Tuna Group - Geleceği Şekillendiren Güç",
    description:
      "Tuna Group, teknoloji, inşaat, enerji ve finans sektörlerinde faaliyet gösteren çok uluslu bir holding şirketidir.",
    url: "https://tunagroup.com",
    siteName: "Tuna Group",
    images: [
      {
        url: "/placeholder.svg?width=1200&height=630",
        width: 1200,
        height: 630,
        alt: "Tuna Group Logo",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuna Group - Geleceği Şekillendiren Güç",
    description:
      "Tuna Group, teknoloji, inşaat, enerji ve finans sektörlerinde faaliyet gösteren çok uluslu bir holding şirketidir.",
    images: ["/placeholder.svg?width=1200&height=600"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  generator: "v0.dev",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <head />
      <body className="font-sans bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800 h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
