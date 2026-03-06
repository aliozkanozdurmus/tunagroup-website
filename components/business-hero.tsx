"use client"

import { useState, useEffect } from "react"
import { motion } from "motion/react"
import { ArrowRight, Play, Volume2, VolumeX } from "lucide-react"

export default function BusinessHero() {
  const [isMuted, setIsMuted] = useState(true)
  const [showPlayButton, setShowPlayButton] = useState(false)

  const stats = [
    { value: "35+", label: "Yıllık Deneyim" },
    { value: "4", label: "Şirket" },
    { value: "10+", label: "Ülke" },
    { value: "1000+", label: "Çalışan" },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Content */}
      <div className="relative z-10 container-business text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-matte-blue-500/10 backdrop-blur-lg border border-matte-blue-500/20 rounded-full mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-2 h-2 bg-matte-blue-500 rounded-full mr-3 animate-pulse" />
            <span className="text-matte-blue-500 font-medium">Sektör Lideri</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="block">İnovasyon</span>
            <span className="block text-matte-blue-500">
              Mükemmellikle
            </span>
            <span className="block">Buluşur</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Tuna Group olarak tıbbi teknoloji, endüstriyel üretim ve sağlık çözümleri alanlarında 
            yenilikçi yaklaşımlarla sektörleri dönüştürüyoruz.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <button className="btn-business btn-primary text-lg px-10 py-5 flex items-center gap-3">
              Keşfedin
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="btn-business btn-secondary text-lg px-10 py-5">
              Vidyolu İzleyin
            </button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="business-stat"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="flex flex-col items-center text-gray-500">
          <span className="text-sm mb-2">Kaydırın</span>
          <motion.div
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-gray-500 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
