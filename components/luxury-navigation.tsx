"use client"

import { motion, AnimatePresence } from "motion/react"
import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "Vizyon & Misyon", href: "/vizyon-misyon" },
  { name: "Değerlerimiz", href: "/degerlerimiz" },
  { name: "Haberler", href: "/haberler" },
  { name: "Kariyer", href: "/kariyer" },
  { name: "Politikalarımız", href: "/politikalarimiz" },
  { name: "İletişim", href: "/iletisim" },
]

export default function LuxuryNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
            : "bg-transparent py-3"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between">
            {/* Hamburger Menu Button */}
            <motion.button
              onClick={() => setIsOpen(true)}
              className={`p-1.5 transition-colors duration-300 ${
                scrolled ? "text-corporate-900 hover:text-corporate-600" : "text-white hover:text-white/80"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Menüyü aç"
            >
              <Menu className="w-5 h-5" />
            </motion.button>

            {/* Logo */}
            <Link href="/">
              <motion.span
                className={`text-lg md:text-xl font-light tracking-tight transition-colors duration-300 cursor-pointer ${
                  scrolled ? "text-corporate-900" : "text-white"
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <span className="font-semibold">TUNA</span>
                <span className="font-light ml-1">GROUP</span>
              </motion.span>
            </Link>

            {/* Contact Quick Link */}
            <a
              href="tel:+903423609855"
              className={`flex items-center gap-1.5 text-xs font-medium transition-colors duration-300 ${
                scrolled ? "text-corporate-900 hover:text-corporate-600" : "text-white hover:text-white/80"
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">+90 342 360 98 55</span>
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-corporate-950"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Close Button */}
            <motion.button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 left-4 p-1.5 text-white hover:text-white/80 transition-colors z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Menüyü kapat"
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Menu Content */}
            <div className="h-full flex items-center justify-center">
              <div className="text-center max-w-5xl mx-auto px-4">
                {/* Menu Links */}
                <nav className="space-y-3 md:space-y-4">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                    >
                      <Link
                        href={link.href}
                        onClick={handleLinkClick}
                        className={`block text-xl md:text-2xl lg:text-3xl font-light transition-colors duration-300 ${
                          pathname === link.href
                            ? "text-corporate-300"
                            : "text-white hover:text-corporate-300"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Contact Info */}
                <motion.div
                  className="mt-10 pt-6 border-t border-white/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-3">İletişim</p>
                  <p className="text-white text-sm mb-1">info@tunagroup.com.tr</p>
                  <p className="text-white/60 text-sm">+90 342 360 98 55</p>
                </motion.div>
              </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <motion.div
                className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-corporate-900/30"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              <motion.div
                className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-corporate-800/20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}