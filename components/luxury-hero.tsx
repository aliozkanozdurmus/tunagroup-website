"use client"

import { motion, AnimatePresence } from "motion/react"
import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"

const slides = [
  {
    image: "/images/pexels/hero-medical.jpg",
    title: "SAĞLIK TEKNOLOJİLERİNDE",
    subtitle: "İLERİ TEKNOLOJİ",
    description: "ISO 13485:2016 standartlarında üretim ve EU MDR kapsamında CE sertifikalı ürünler"
  },
  {
    image: "/images/pexels/hero-industrial.jpg",
    title: "ENDÜSTRİYEL ÜRETİMDE",
    subtitle: "YENİLİKÇİ ÇÖZÜMLER",
    description: "Çevre dostu ve dayanıklı ürünlerle sürdürülebilir üretim"
  }
]

export default function LuxuryHero() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const scrollToContent = () => {
    const element = document.querySelector("#hakkimizda")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const goToSlide = (index: number) => {
    setCurrent(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-corporate-950/95 via-corporate-900/80 to-corporate-900/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-5xl mx-auto px-4 lg:px-6 w-full">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${current}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Title */}
                <motion.h1
                  className="text-white"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="block text-2xl md:text-3xl lg:text-4xl font-light mb-2 tracking-wide">
                    {slides[current].title}
                  </span>
                  <span className="block text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                    {slides[current].subtitle}
                  </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  className="mt-4 text-base md:text-lg text-white/80 max-w-xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {slides[current].description}
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  className="mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <a
                    href="#hakkimizda"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToContent()
                    }}
                    className="btn-luxury-white inline-block"
                  >
                    Detaylı Bilgi
                  </a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Left Side - Dot Indicators */}
      <div className="absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-white scale-125"
                : "bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Bottom Left - Slide Counter */}
      <div className="absolute bottom-10 left-6 lg:left-10 z-20">
        <div className="flex items-end gap-2 text-white">
          <span className="text-4xl md:text-5xl font-bold">
            {String(current + 1).padStart(2, "0")}
          </span>
          <span className="text-white/50 text-lg mb-1">/</span>
          <span className="text-white/50 text-lg mb-1">
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Bottom Center - Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer group"
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-white/60 text-xs uppercase tracking-widest mb-3 group-hover:text-white transition-colors">
          aşağı kaydır
        </span>
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2 group-hover:border-white/60 transition-colors"
        >
          <motion.div
            className="w-1 h-2 bg-white rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>

      {/* Bottom Right - Navigation Arrows */}
      <div className="absolute bottom-10 right-6 lg:right-10 z-20 flex items-center gap-4">
        <button
          onClick={() => goToSlide((current - 1 + slides.length) % slides.length)}
          className="w-12 h-12 border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-corporate-900 transition-all duration-300"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => goToSlide((current + 1) % slides.length)}
          className="w-12 h-12 border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-corporate-900 transition-all duration-300"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20">
        <motion.div
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
          key={current}
        />
      </div>
    </section>
  )
}