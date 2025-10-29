"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X, Globe, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function BusinessNavigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Ana Sayfa", href: "#home" },
    { name: "Şirketlerimiz", href: "#companies" },
    { name: "Hizmetler", href: "#services" },
    { name: "Hakkımızda", href: "#about" },
    { name: "İletişim", href: "#contact" },
  ]

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container-business">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-matte-blue-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">TG</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Tuna Group</h1>
                <p className="text-xs text-gray-600">Innovation Through Excellence</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors duration-200 ${
                    isScrolled ? "text-gray-700 hover:text-matte-blue-500" : "text-gray-900 hover:text-matte-blue-500"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <button className="btn-business btn-primary text-sm">
                Partner Olun
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-3 rounded-full transition-all ${
                isScrolled
                  ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  : "bg-black/20 text-gray-900 hover:bg-black/30"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <div className="w-10 h-10 bg-matte-blue-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">TG</span>
                  </div>
                  <button
                    className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="space-y-4">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-matte-blue-500/10 hover:text-matte-blue-500 transition-colors font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="space-y-3">
                    <a
                      href="tel:+903423609855"
                      className="flex items-center space-x-3 text-gray-600 hover:text-matte-blue-500"
                    >
                      <Phone className="w-5 h-5" />
                      <span className="text-sm">+90 342 360 98 55</span>
                    </a>
                    <a
                      href="mailto:info@tunagroup.com.tr"
                      className="flex items-center space-x-3 text-gray-600 hover:text-matte-blue-500"
                    >
                      <Mail className="w-5 h-5" />
                      <span className="text-sm">info@tunagroup.com.tr</span>
                    </a>
                  </div>
                </div>

                <button className="w-full mt-6 btn-business btn-primary">
                  Partner Olun
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
