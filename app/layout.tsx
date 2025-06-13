import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Tuna Group - Geleceği Şekillendiren Güç",
  description:
    "Tuna Group, teknoloji, inşaat, enerji ve finans sektörlerinde faaliyet gösteren çok uluslu bir holding şirketidir.",
  keywords: "Tuna Group, holding, teknoloji, inşaat, enerji, finans",
  openGraph: {
    title: "Tuna Group - Geleceği Şekillendiren Güç",
    description:
      "Tuna Group, teknoloji, inşaat, enerji ve finans sektörlerinde faaliyet gösteren çok uluslu bir holding şirketidir.",
    url: "https://tunagroup.com",
    siteName: "Tuna Group",
    locale: "tr_TR",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
