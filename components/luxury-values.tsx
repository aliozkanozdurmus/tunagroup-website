"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
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

// Floating decorative elements for values section
function ValuesFloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large decorative circle - top left */}
      <motion.div
        className="absolute w-64 h-64 rounded-full border border-corporate-50"
        style={{ top: "5%", left: "-8%" }}
        animate={{
          rotate: [0, -360],
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Diamond shape - right */}
      <motion.div
        className="absolute w-12 h-12 border border-corporate-100 rotate-45"
        style={{ top: "30%", right: "8%" }}
        animate={{
          y: [0, -15, 0],
          rotate: [45, 90, 45],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Gradient line - bottom */}
      <motion.div
        className="absolute h-px w-48 bg-gradient-to-r from-transparent via-corporate-200 to-transparent"
        style={{ bottom: "25%", right: "20%" }}
        animate={{
          opacity: [0.2, 0.5, 0.2],
          x: [-20, 20, -20],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Plus sign pattern */}
      <motion.div
        className="absolute text-corporate-100 text-4xl font-light"
        style={{ bottom: "40%", left: "15%" }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        +
      </motion.div>

      {/* Dots cluster */}
      <div className="absolute bottom-1/4 left-1/4 flex gap-3">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-corporate-100"
            animate={{
              y: [0, -5, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default function LuxuryValues() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const cardsY = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <section ref={sectionRef} id="degerlerimiz" className="relative py-12 lg:py-16 px-4 lg:px-6 bg-white overflow-hidden">
      {/* Floating decorative elements */}
      <ValuesFloatingElements />

      <div className="relative z-10 max-w-5xl mx-auto">
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

        {/* Values Grid with Parallax */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
          style={{ y: cardsY }}
        >
          {values.map((value, i) => {
            const Icon = value.icon
            return (
              <motion.div
                key={i}
                className="group relative bg-white border border-gray-100 p-6 hover:border-corporate-200 transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.15)" }}
              >
                {/* Background Hover Effect - Enhanced */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-corporate-800 to-corporate-950 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container - Enhanced */}
                  <motion.div
                    className="w-12 h-12 bg-corporate-50 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors duration-500"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <Icon className="w-6 h-6 text-corporate-600 group-hover:text-white transition-colors duration-500" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-white transition-colors duration-500">
                    {value.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs text-corporate-700 uppercase tracking-wider mb-3 group-hover:text-corporate-300 transition-colors duration-500">
                    {value.subtitle}
                  </p>

                  {/* Divider - Animated */}
                  <motion.div
                    className="h-0.5 bg-corporate-200 mb-3 group-hover:bg-white/30 transition-colors duration-500"
                    initial={{ width: 24 }}
                    whileHover={{ width: 48 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                    {value.description}
                  </p>
                </div>

                {/* Corner Decorations - Enhanced */}
                <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-transparent group-hover:border-white/20 transition-colors duration-500" />
                <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-transparent group-hover:border-white/10 transition-colors duration-500" />

                {/* Number indicator */}
                <div className="absolute top-3 right-3 text-xs font-mono text-gray-400 group-hover:text-white/30 transition-colors duration-500">
                  0{i + 1}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

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