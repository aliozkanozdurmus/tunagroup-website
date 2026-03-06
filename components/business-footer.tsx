"use client"

import { motion } from "motion/react"
import { 
  Globe, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ChevronRight,
  Building
} from "lucide-react"

export default function BusinessFooter() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    şirketler: [
      { name: "Tuna Medikal", href: "https://tunamedikal.com" },
      { name: "Tuna Sentetik", href: "https://tunasentetik.com" },
      { name: "Efe Tıp", href: "https://efetip.com" },
      { name: "Wellmed", href: "https://wellmed.com" },
    ],
    hizmetler: [
      { name: "Tıbbi Cihazlar", href: "#" },
      { name: "Endüstriyel Üretim", href: "#" },
      { name: "Laboratuvar Malzemeleri", href: "#" },
      { name: "Medikal Tedarik", href: "#" },
    ],
    kurumsal: [
      { name: "Hakkımızda", href: "#about" },
      { name: "Hizmetlerimiz", href: "#services" },
      { name: "İletişim", href: "#contact" },
      { name: "Kariyer", href: "#" },
    ],
    yasal: [
      { name: "Gizlilik Politikası", href: "#" },
      { name: "Kullanım Koşulları", href: "#" },
      { name: "KVKK", href: "#" },
      { name: "Çerez Politikası", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container-business section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">TG</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Tuna Group</h3>
                <p className="text-blue-300 text-sm">Innovation Through Excellence</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              35 yıllık tecrübemizle tıbbi teknoloji, endüstriyel üretim ve sağlık çözümleri alanlarında 
              sektör lideri olarak hizmet veriyoruz. İnovasyon ve kalite anlayışımızla geleceği şekillendiriyoruz.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-sm">
                  Gaziantep, Türkiye
                </span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-sm">
                  +90 342 360 98 55
                </span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-sm">
                  info@tunagroup.com.tr
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4 capitalize">
                {category === 'şirketler' ? 'Şirketlerimiz' : 
                 category === 'hizmetler' ? 'Hizmetler' :
                 category === 'kurumsal' ? 'Kurumsal' : 'Yasal'}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 mb-12 border border-blue-500/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-3">
                Bültenimize Abone Olun
              </h3>
              <p className="text-gray-300">
                En son haberler, ürün güncellemeleri ve özel teklifler için e-posta listemize katılın.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="btn-business bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 px-8">
                Abone Ol
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              © {currentYear} Tuna Group. Tüm hakları saklıdır.
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center space-x-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200 hover:scale-110 transform"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            className="mt-8 text-center text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Bu site{" "}
              <span className="text-blue-400">Tuna Group</span>
              {" "}tarafından geliştirilmiş ve yönetilmektedir.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
