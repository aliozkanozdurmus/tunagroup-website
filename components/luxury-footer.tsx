"use client"

import { motion } from "motion/react"
import { ArrowUp, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from "lucide-react"
import Link from "next/link"

const companies = [
  { name: "Tuna Sentetik", desc: "Sentetik Dokuma & Çuval" },
  { name: "Tuna Medical", desc: "Tıbbi Cihazlar" },
  { name: "Efe Tıp", desc: "Medikal Ürünler" },
  { name: "Wellmed", desc: "Sağlık Çözümleri" }
]

const quickLinks = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "Vizyon & Misyon", href: "/vizyon-misyon" },
  { name: "Değerlerimiz", href: "/degerlerimiz" },
  { name: "Haberler", href: "/haberler" },
  { name: "Kariyer", href: "/kariyer" },
  { name: "Politikalarımız", href: "/politikalarimiz" },
  { name: "İletişim", href: "/iletisim" },
]

export default function LuxuryFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* Back to Top Button - Outside footer for proper visibility */}
      <div className="relative z-20 flex justify-center">
        <motion.button
          onClick={scrollToTop}
          className="w-12 h-12 bg-corporate-600 hover:bg-corporate-500 flex items-center justify-center transition-colors duration-300 -mb-6 shadow-lg"
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </motion.button>
      </div>
      
      <footer className="relative bg-navy-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-corporate-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-corporate-600 rounded-full blur-3xl" />
        </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 lg:px-6 py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              <span>TUNA</span> <span className="font-light">GROUP</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              2000 yılından bu yana sağlık teknolojileri ve endüstriyel üretim alanlarında 
              faaliyet gösteren çok sektörlü şirketler grubu.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Facebook, href: "#" },
              ].map((social, i) => {
                const Icon = social.icon
                return (
                  <a
                    key={i}
                    href={social.href}
                    className="w-10 h-10 bg-white/5 hover:bg-corporate-600 flex items-center justify-center transition-colors duration-300"
                    aria-label={`Social link ${i + 1}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </motion.div>

          {/* Group Companies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-corporate-400">
              Grup Şirketleri
            </h4>
            <ul className="space-y-4">
              {companies.map((company, i) => (
                <li key={i}>
                  <a href="#" className="block group">
                    <span className="text-white group-hover:text-corporate-400 transition-colors duration-300 font-medium">
                      {company.name}
                    </span>
                    <span className="block text-sm text-gray-500">{company.desc}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-corporate-400">
              Hızlı Erişim
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm"
                  >
                    <span className="w-1 h-1 bg-corporate-600 rounded-full" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-corporate-400">
              İletişim
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://maps.google.com/?q=Baspinar+OSB+Gaziantep"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Başpınar OSB, Gaziantep, Türkiye</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+903423609855"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>+90 342 360 98 55</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@tunagroup.com.tr"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>info@tunagroup.com.tr</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-12 pt-6 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Tuna Group. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center gap-4 text-xs">
              <Link href="/politikalarimiz" className="text-gray-500 hover:text-white transition-colors duration-300">
                Politikalarımız
              </Link>
              <Link href="/kariyer" className="text-gray-500 hover:text-white transition-colors duration-300">
                Kariyer
              </Link>
              <Link href="/iletisim" className="text-gray-500 hover:text-white transition-colors duration-300">
                İletişim
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
    </>
  )
}