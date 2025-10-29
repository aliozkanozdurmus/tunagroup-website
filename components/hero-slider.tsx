"use client"

import { motion, AnimatePresence } from "motion/react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg",
    title: "Geçmişten geleceğe, güvenle.",
    subtitle: "Yarım asrı aşan tecrübemizle sektörün öncü ismi olduk."
  },
  {
    image: "https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg",
    title: "Her adımda mükemmelliği hedefleyerek,",
    subtitle: "yarınlarımıza değer katıyoruz."
  }
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="max-w-4xl text-center text-white">
          <motion.h1
            key={`title-${current}`}
            className="text-5xl md:text-7xl font-light mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {slides[current].title}
          </motion.h1>
          <motion.p
            key={`subtitle-${current}`}
            className="text-xl md:text-2xl font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {slides[current].subtitle}
          </motion.p>
        </div>
      </div>

      <button
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-12 h-1 transition-all ${i === current ? 'bg-white' : 'bg-white/30'}`}
          />
        ))}
      </div>
    </section>
  )
}
