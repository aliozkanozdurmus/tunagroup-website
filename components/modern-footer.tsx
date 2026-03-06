"use client"

import { motion } from "motion/react"
import { Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUpRight } from "lucide-react"

export default function ModernFooter() {
  const companies = [
    { name: "Tuna Sentetik", desc: "Synthetic Manufacturing" },
    { name: "Tuna Medical", desc: "Medical Equipment" },
    { name: "Efe Tıp", desc: "Medical Devices" },
    { name: "Wellmed", desc: "Healthcare Solutions" },
  ]

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-5">
            <h3 className="text-5xl font-light mb-6">Tuna Group</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Building tomorrow's solutions through innovation, excellence, and sustainable business practices across multiple industries.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="w-12 h-12 border border-white/20 hover:border-white/40 flex items-center justify-center transition-all group"
                  whileHover={{ y: -5 }}
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Companies Grid */}
          <div className="md:col-span-7">
            <h4 className="text-sm font-medium mb-6 uppercase tracking-wider text-gray-400">Our Companies</h4>
            <div className="grid grid-cols-2 gap-4">
              {companies.map((company, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="group p-6 border border-white/10 hover:border-white/30 transition-all bg-white/5 backdrop-blur-sm"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h5 className="text-lg font-medium">{company.name}</h5>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-gray-400">{company.desc}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-gray-400">
              © 2024 Tuna Group. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
