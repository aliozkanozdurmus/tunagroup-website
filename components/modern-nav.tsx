"use client"

import { motion } from "motion/react"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function ModernNav() {
  const [isOpen, setIsOpen] = useState(false)
  
  const links = [
    { name: "About", href: "#about" },
    { name: "Sectors", href: "#sectors" },
    { name: "Impact", href: "#impact" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-8 bg-white/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          <motion.h1 
            className="text-3xl font-light text-gray-900"
            whileHover={{ scale: 1.05 }}
          >
            <span className="serif-italic">Tuna</span> Group
          </motion.h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            {links.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm uppercase tracking-wider text-gray-600 hover:text-gray-900 transition-colors cursor-pointer relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gray-900 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="px-8 py-3 border-2 border-gray-900 text-gray-900 text-sm uppercase tracking-wider hover:bg-gray-900 hover:text-white transition-all cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden mt-8 pb-6 space-y-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block text-gray-600 hover:text-gray-900 transition-colors cursor-pointer uppercase tracking-wider text-sm"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="block px-8 py-3 border-2 border-gray-900 text-gray-900 text-center hover:bg-gray-900 hover:text-white transition-all cursor-pointer uppercase tracking-wider text-sm"
            >
              Let's Talk
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
