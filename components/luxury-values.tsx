"use client"

import { motion } from "motion/react"
import { Award, Shield, Users, Leaf } from "lucide-react"
import Link from "next/link"

const values = [
  {
    icon: Award,
    title: "ISO 13485:2016",
    subtitle: "Kalite Yönetim Sistemi",
    description: "Tıbbi cihaz üretiminde uluslararası kalite standartlarına tam uyumluluk."
  },
  {
    icon: Shield,
    title: "CE Sertifikası",
    subtitle: "EU MDR Uyumlu",
    description: "Avrupa Birliği Tıbbi Cihaz Regülasyonu kapsamında sertifikalı ürünler."
  },
  {
    icon: Users,
    title: "Uzman Ekip",
    subtitle: "Deneyimli Kadro",
    description: "Alanında uzman mühendisler ve teknik personel ile profesyonel hizmet."
  },
  {
    icon: Leaf,
    title: "Sürdürülebilirlik",
    subtitle: "Çevre Dostu Üretim",
    description: "Çevreye duyarlı üretim ve geri dönüştürülebilir malzemeler."
  }
]

export default function LuxuryValues() {
  return (
    <section id="degerlerimiz" className="py-12 lg:py-16 px-4 lg:px-6 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 lg:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="divider-luxury" />
            <span className="text-corporate-600 text-sm font-medium uppercase tracking-wider">
              Neden Biz
            </span>
            <div className="divider-luxury" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            <span className="font-semibold">Güçlü</span> <span className="serif-italic text-corporate-700">Yanlarımız</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sektördeki lider konumumuzu sağlayan temel değerlerimiz
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {values.map((value, i) => {
            const Icon = value.icon
            return (
              <motion.div
                key={i}
                className="group relative bg-white border border-gray-100 p-6 hover:border-corporate-200 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                {/* Background Hover Effect */}
                <div className="absolute inset-0 bg-corporate-900 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="w-12 h-12 bg-corporate-50 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors duration-500">
                    <Icon className="w-6 h-6 text-corporate-600 group-hover:text-white transition-colors duration-500" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-white transition-colors duration-500">
                    {value.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs text-corporate-600 uppercase tracking-wider mb-3 group-hover:text-corporate-300 transition-colors duration-500">
                    {value.subtitle}
                  </p>

                  {/* Divider */}
                  <div className="w-6 h-0.5 bg-corporate-200 mb-3 group-hover:bg-white/30 transition-colors duration-500" />

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                    {value.description}
                  </p>
                </div>

                {/* Corner Decoration */}
                <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-transparent group-hover:border-white/20 transition-colors duration-500" />
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-10 lg:mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-600 mb-4 text-base">
            Kaliteli hizmet ve ürünlerimiz hakkında daha fazla bilgi için
          </p>
          <Link href="/iletisim" className="btn-luxury inline-block">
            Bizimle İletişime Geçin
          </Link>
        </motion.div>
      </div>
    </section>
  )
}