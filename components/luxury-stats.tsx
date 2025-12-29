"use client"

import { motion, useInView } from "motion/react"
import { useRef, useEffect, useState, useCallback } from "react"

const stats = [
  { value: 24, suffix: "+", label: "YILLIK TECRÜBE" },
  { value: 500, suffix: "+", label: "ÇALIŞAN" },
  { value: 4, suffix: "", label: "GRUP ŞİRKETİ" },
  { value: 50, suffix: "+", label: "ÜLKE İHRACAT" },
]

// Ease-out cubic function for more natural animation
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

// Format number with thousands separator
function formatNumber(num: number): string {
  return num.toLocaleString('tr-TR')
}

interface AnimatedCounterProps {
  value: number
  suffix: string
  delay?: number
}

function AnimatedCounter({ value, suffix, delay = 0 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (!isInView) return

    const duration = 2500 // 2.5 seconds for smoother animation
    const startTime = Date.now() + delay
    let animationFrame: number

    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTime

      if (elapsed < 0) {
        animationFrame = requestAnimationFrame(animate)
        return
      }

      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutCubic(progress)
      const currentValue = Math.floor(easedProgress * value)

      setCount(currentValue)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(value)
        setIsComplete(true)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, value, delay])

  return (
    <motion.span
      ref={ref}
      className="tabular-nums relative inline-block"
      animate={isComplete ? {
        scale: [1, 1.05, 1],
        textShadow: [
          "0 0 0px rgba(255,255,255,0)",
          "0 0 30px rgba(255,255,255,0.8)",
          "0 0 10px rgba(255,255,255,0.3)"
        ]
      } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        textShadow: isComplete ? "0 0 10px rgba(255,255,255,0.3)" : "none"
      }}
    >
      {formatNumber(count)}{suffix}
    </motion.span>
  )
}

// Floating geometric shapes for background decoration
function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large circle */}
      <motion.div
        className="absolute w-64 h-64 border border-white/5 rounded-full"
        style={{ top: "10%", left: "-5%" }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      {/* Medium square */}
      <motion.div
        className="absolute w-32 h-32 border border-corporate-400/10"
        style={{ top: "60%", right: "10%" }}
        animate={{
          y: [0, 15, 0],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      {/* Small dots */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/10 rounded-full"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 20}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
      {/* Gradient line */}
      <motion.div
        className="absolute h-px w-48 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        style={{ top: "30%", right: "20%" }}
        animate={{
          x: [0, 50, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
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

      {/* Floating Geometric Shapes */}
      <FloatingShapes />

      <div className="relative z-10 max-w-5xl mx-auto px-4 lg:px-6">
        {/* Section Title */}
        <motion.div
          className="text-center mb-10 lg:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight"
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.05em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            RAKAMLARLA TUNA GROUP
          </motion.h2>
          <motion.div
            className="mt-3 h-1 bg-corporate-400 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
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
                <AnimatedCounter value={stats[0].value} suffix={stats[0].suffix} delay={100} />
              </div>
              <motion.div
                className="text-xs md:text-sm text-white/70 uppercase tracking-widest"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                {stats[0].label}
              </motion.div>
            </motion.div>

            {/* Image 1 */}
            <motion.div
              className="relative overflow-hidden aspect-[4/3] group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.img
                src="/images/pexels/stats-1.jpg"
                alt="Tuna Group - Laboratuvar"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-corporate-900/20 group-hover:bg-corporate-900/10 transition-colors duration-300" />
            </motion.div>
          </div>

          {/* Center Column - Image + Stat */}
          <div className="space-y-4">
            {/* Image 2 */}
            <motion.div
              className="relative overflow-hidden aspect-[4/3] group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.img
                src="/images/pexels/stats-2.jpg"
                alt="Tuna Group - Ameliyat"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-corporate-900/20 group-hover:bg-corporate-900/10 transition-colors duration-300" />
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
                <AnimatedCounter value={stats[1].value} suffix={stats[1].suffix} delay={300} />
              </div>
              <motion.div
                className="text-xs md:text-sm text-white/70 uppercase tracking-widest"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                {stats[1].label}
              </motion.div>
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
                <AnimatedCounter value={stats[2].value} suffix={stats[2].suffix} delay={500} />
              </div>
              <motion.div
                className="text-xs md:text-sm text-white/70 uppercase tracking-widest"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                {stats[2].label}
              </motion.div>
            </motion.div>

            {/* Image 3 */}
            <motion.div
              className="relative overflow-hidden aspect-[4/3] group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.img
                src="/images/pexels/stats-3.jpg"
                alt="Tuna Group - Medikal Ekip"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-corporate-900/20 group-hover:bg-corporate-900/10 transition-colors duration-300" />
            </motion.div>
          </div>
        </div>

        {/* Bottom Row - Full Width */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Image 4 */}
          <motion.div
            className="relative overflow-hidden aspect-[16/9] lg:aspect-[21/9] group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.img
              src="/images/pexels/stats-4.jpg"
              alt="Tuna Group - Endüstriyel Üretim"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-corporate-900/20 group-hover:bg-corporate-900/10 transition-colors duration-300" />
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
                <AnimatedCounter value={stats[3].value} suffix={stats[3].suffix} delay={700} />
              </div>
              <motion.div
                className="text-xs md:text-sm text-white/70 uppercase tracking-widest"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.9 }}
              >
                {stats[3].label}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}