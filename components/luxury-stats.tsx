"use client"

import { motion, useInView } from "motion/react"
import { useRef, useEffect, useState } from "react"

const stats = [
  { value: 24, suffix: "+", label: "YILLIK TECRÜBE" },
  { value: 500, suffix: "+", label: "ÇALIŞAN" },
  { value: 4, suffix: "", label: "GRUP ŞİRKETİ" },
  { value: 50, suffix: "+", label: "ÜLKE İHRACAT" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

export default function LuxuryStats() {
  return (
    <section id="rakamlarla" className="relative py-16 lg:py-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-stats" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-corporate-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 lg:px-6">
        {/* Section Title */}
        <motion.div
          className="text-center mb-10 lg:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            RAKAMLARLA TUNA GROUP
          </h2>
          <div className="mt-3 w-16 h-1 bg-corporate-400 mx-auto" />
        </motion.div>

        {/* Stats Grid with Images */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-5">
          {/* Left Column - First Stat + Image */}
          <div className="space-y-4">
            {/* Stat 1 */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-1">
                <AnimatedCounter value={stats[0].value} suffix={stats[0].suffix} />
              </div>
              <div className="text-xs md:text-sm text-white/70 uppercase tracking-widest">
                {stats[0].label}
              </div>
            </motion.div>

            {/* Image 1 */}
            <motion.div
              className="relative overflow-hidden aspect-[4/3]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="/images/pexels/stats-1.jpg"
                alt="Tuna Group - Laboratuvar"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-corporate-900/20" />
            </motion.div>
          </div>

          {/* Center Column - Image + Stat */}
          <div className="space-y-4">
            {/* Image 2 */}
            <motion.div
              className="relative overflow-hidden aspect-[4/3]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img
                src="/images/pexels/stats-2.jpg"
                alt="Tuna Group - Ameliyat"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-corporate-900/20" />
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-1">
                <AnimatedCounter value={stats[1].value} suffix={stats[1].suffix} />
              </div>
              <div className="text-xs md:text-sm text-white/70 uppercase tracking-widest">
                {stats[1].label}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Stat + Image */}
          <div className="space-y-4">
            {/* Stat 3 */}
            <motion.div
              className="text-center lg:text-right"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-1">
                <AnimatedCounter value={stats[2].value} suffix={stats[2].suffix} />
              </div>
              <div className="text-xs md:text-sm text-white/70 uppercase tracking-widest">
                {stats[2].label}
              </div>
            </motion.div>

            {/* Image 3 */}
            <motion.div
              className="relative overflow-hidden aspect-[4/3]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <img
                src="/images/pexels/stats-3.jpg"
                alt="Tuna Group - Medikal Ekip"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-corporate-900/20" />
            </motion.div>
          </div>
        </div>

        {/* Bottom Row - Full Width */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Image 4 */}
          <motion.div
            className="relative overflow-hidden aspect-[16/9] lg:aspect-[21/9]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <img
              src="/images/pexels/stats-4.jpg"
              alt="Tuna Group - Endüstriyel Üretim"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-corporate-900/20" />
          </motion.div>

          {/* Stat 4 */}
          <motion.div
            className="flex items-center justify-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="text-center lg:text-left">
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-1">
                <AnimatedCounter value={stats[3].value} suffix={stats[3].suffix} />
              </div>
              <div className="text-xs md:text-sm text-white/70 uppercase tracking-widest">
                {stats[3].label}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}