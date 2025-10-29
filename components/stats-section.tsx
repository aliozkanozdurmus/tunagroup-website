"use client"

import { motion } from "motion/react"

const stats = [
  { value: "40+", label: "Yıllık Tecrübe" },
  { value: "500+", label: "Çalışan" },
  { value: "4", label: "Grup Şirketi" },
  { value: "50+", label: "Ülke" },
]

export default function StatsSection() {
  return (
    <section id="istatistikler" className="py-32 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-gray-900">
            <span className="serif-italic">Başarılarımızla</span> İlham Veriyoruz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Yarım asrı aşkın birikimimizle, sadece projeler değil, hayalleri gerçeğe dönüştüren bir vizyon inşa ettik.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="text-center p-8 bg-white border-2 border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-5xl md:text-6xl font-light text-gray-900 mb-4">{stat.value}</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
