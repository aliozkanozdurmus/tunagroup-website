"use client"

import { motion } from "motion/react"
import { Award, Users, Leaf, Globe } from "lucide-react"

const values = [
  {
    icon: Award,
    title: "Kalite Güvencesi",
    description: "Tüm ürünlerimiz uluslararası standartlara uygun olarak üretilmektedir."
  },
  {
    icon: Users,
    title: "Uzman Ekip",
    description: "Alanında uzman ekibimizle ihtiyaçlarınıza özel çözümler üretiyoruz."
  },
  {
    icon: Leaf,
    title: "Sürdürülebilirlik",
    description: "Çevreye duyarlı üretim süreçleri ve ürünler geliştiriyoruz."
  },
  {
    icon: Globe,
    title: "Global Vizyon",
    description: "Uluslararası pazarlarda güçlü bir konuma sahip olmayı hedefliyoruz."
  }
]

export default function ValuesSection() {
  return (
    <section id="degerlerimiz" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-gray-900">
            <span className="serif-italic">Güçlü</span> Yanlarımız
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sektörde öncü konumumuzu sağlayan temel değerlerimiz
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, i) => {
            const Icon = value.icon
            return (
              <motion.div
                key={i}
                className="p-8 border-2 border-gray-200 hover:border-gray-900 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Icon className="w-12 h-12 text-gray-900 mb-6" />
                <h3 className="text-2xl font-light text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
