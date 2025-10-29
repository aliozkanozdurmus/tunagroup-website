import type React from "react"
import "@/app/globals.css"
import { Inter, Montserrat } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata = {
  title: "Tuna Group - Innovation Through Excellence",
  description: "Leading business conglomerate driving innovation in medical technology, industrial manufacturing, and healthcare solutions. Transforming industries with cutting-edge technology and sustainable practices.",
  keywords: "Tuna Group, business excellence, medical technology, industrial innovation, healthcare solutions, sustainable manufacturing, corporate leadership",
  authors: [{ name: "Tuna Group" }],
  openGraph: {
    title: "Tuna Group - Innovation Through Excellence",
    description: "Leading business conglomerate driving innovation in medical technology, industrial manufacturing, and healthcare solutions.",
    url: "https://tunagroup.com.tr",
    siteName: "Tuna Group",
    images: [
      {
        url: "/images/tuna-group-og.jpg",
        width: 1200,
        height: 630,
        alt: "Tuna Group - Business Excellence",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuna Group - Innovation Through Excellence",
    description: "Leading business conglomerate driving innovation in medical technology, industrial manufacturing, and healthcare solutions.",
    images: ["/images/tuna-group-twitter.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: "index, follow",
  googlebot: "index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${montserrat.variable} ${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#667eea" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
