"use client"

import { motion } from "motion/react"
import { Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  return (
    <section id="iletisim" className="py-32 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-gray-900">
            <span className="serif-italic">İletişime</span> Geçin
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sorularınız ve talepleriniz için bizimle iletişime geçebilirsiniz
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {[
            { icon: MapPin, title: "Adres", text: "Başpınar OSB, Gaziantep" },
            { icon: Phone, title: "Telefon", text: "+90 342 360 98 55" },
            { icon: Mail, title: "E-posta", text: "info@tunagroup.com.tr" }
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                className="p-8 bg-white border-2 border-gray-200 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Icon className="w-10 h-10 text-gray-900 mx-auto mb-4" />
                <h4 className="text-sm text-gray-600 mb-2 uppercase tracking-wider">{item.title}</h4>
                <p className="text-gray-900">{item.text}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.form
          className="max-w-2xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            placeholder="Adınız Soyadınız"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-6 py-4 border-2 border-gray-200 focus:border-gray-900 outline-none transition-all"
          />
          <input
            type="email"
            placeholder="E-posta Adresiniz"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-6 py-4 border-2 border-gray-200 focus:border-gray-900 outline-none transition-all"
          />
          <textarea
            placeholder="Mesajınız"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={6}
            className="w-full px-6 py-4 border-2 border-gray-200 focus:border-gray-900 outline-none transition-all resize-none"
          />
          <button
            type="submit"
            className="w-full px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-all uppercase tracking-wider"
          >
            Gönder
          </button>
        </motion.form>
      </div>
    </section>
  )
}
