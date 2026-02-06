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
  title: "Tuna Group - Sağlık Teknolojileri ve Endüstriyel Üretim",
  description: "2000 yılından bu yana sağlık teknolojileri ve endüstriyel üretim alanlarında faaliyet gösteren çok sektörlü şirketler grubu. ISO 13485:2016 standartlarında üretim, EU MDR kapsamında CE sertifikalı ürünler.",
  keywords: "Tuna Group, sağlık teknolojileri, tıbbi cihazlar, endüstriyel üretim, medikal ürünler, ISO 13485, CE sertifikası, EU MDR, Gaziantep",
  authors: [{ name: "Tuna Group" }],
  openGraph: {
    title: "Tuna Group - Sağlık Teknolojileri ve Endüstriyel Üretim",
    description: "2000 yılından bu yana sağlık teknolojileri ve endüstriyel üretim alanlarında faaliyet gösteren çok sektörlü şirketler grubu.",
    url: "https://tunagroup.com.tr",
    siteName: "Tuna Group",
    images: [
      {
        url: "/images/tuna-group-og.jpg",
        width: 1200,
        height: 630,
        alt: "Tuna Group - Sağlık Teknolojileri ve Endüstriyel Üretim",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuna Group - Sağlık Teknolojileri ve Endüstriyel Üretim",
    description: "2000 yılından bu yana sağlık teknolojileri ve endüstriyel üretim alanlarında faaliyet gösteren çok sektörlü şirketler grubu.",
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
    <html lang="tr" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1e3a8a" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-white text-gray-900 antialiased font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
