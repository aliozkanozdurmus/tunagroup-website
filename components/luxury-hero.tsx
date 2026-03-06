"use client"

import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "motion/react"
import { useState, useEffect, useRef } from "react"
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

// Floating geometric shapes for parallax effect
function FloatingElements({ scrollProgress }: { scrollProgress: any }) {
  const y1 = useTransform(scrollProgress, [0, 1], [0, 100])
  const y2 = useTransform(scrollProgress, [0, 1], [0, -50])
  const y3 = useTransform(scrollProgress, [0, 1], [0, 150])
  const rotate1 = useTransform(scrollProgress, [0, 1], [0, 45])
  const rotate2 = useTransform(scrollProgress, [0, 1], [0, -30])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
      {/* Large circle - top right */}
      <motion.div
        className="absolute w-96 h-96 border border-white/10 rounded-full"
        style={{
          top: "-10%",
          right: "-10%",
          y: y1,
          rotate: rotate1,
        }}
      />
      
      {/* Medium square - bottom left */}
      <motion.div
        className="absolute w-48 h-48 border border-white/5"
        style={{
          bottom: "20%",
          left: "-5%",
          y: y2,
          rotate: rotate2,
        }}
      />
      
      {/* Small diamond - center right */}
      <motion.div
        className="absolute w-24 h-24 border border-corporate-400/20 rotate-45"
        style={{
          top: "40%",
          right: "15%",
          y: y3,
        }}
      />
      
      {/* Decorative dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          style={{
            top: `${15 + i * 12}%`,
            left: `${5 + i * 8}%`,
            y: useTransform(scrollProgress, [0, 1], [0, (i + 1) * 20]),
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
      
      {/* Horizontal gradient lines */}
      <motion.div
        className="absolute h-px w-64 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        style={{
          top: "25%",
          right: "25%",
          y: y2,
        }}
      />
      <motion.div
        className="absolute h-px w-48 bg-gradient-to-r from-transparent via-corporate-400/30 to-transparent"
        style={{
          bottom: "35%",
          left: "30%",
          y: y1,
        }}
      />
      
      {/* Vertical gradient line */}
      <motion.div
        className="absolute w-px h-32 bg-gradient-to-b from-transparent via-white/15 to-transparent"
        style={{
          top: "30%",
          left: "85%",
          y: y3,
        }}
      />
    </div>
  )
}

export default function LuxuryHero() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)
  
  // Parallax scroll setup
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })
  
  // Smooth spring animation for scroll
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  
  // Parallax transformations
  const backgroundY = useTransform(smoothProgress, [0, 1], [0, 150])
  const contentY = useTransform(smoothProgress, [0, 1], [0, 50])
  const contentOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0])
  const backgroundScale = useTransform(smoothProgress, [0, 1], [1, 1.1])

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
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden">
      {/* Background Slides with Parallax */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ y: backgroundY, scale: backgroundScale }}
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[current].image})` }}
            animate={{
              scale: [1, 1.05],
            }}
            transition={{
              duration: 6,
              ease: "linear",
            }}
          />
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-corporate-950/95 via-corporate-900/85 to-corporate-900/50" />
          {/* Additional vignette effect */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,25,50,0.4)_100%)]" />
        </motion.div>
      </AnimatePresence>
      
      {/* Floating Geometric Elements */}
      <FloatingElements scrollProgress={smoothProgress} />

      {/* Content with Parallax */}
      <motion.div
        className="relative z-10 h-full flex items-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
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
                {/* Decorative Line */}
                <motion.div
                  className="w-16 h-1 bg-corporate-400 mb-6"
                  initial={{ width: 0 }}
                  animate={{ width: 64 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                />
                
                {/* Title */}
                <motion.h1
                  className="text-white"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.span
                    className="block text-2xl md:text-3xl lg:text-4xl font-light mb-2 tracking-wide"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {slides[current].title}
                  </motion.span>
                  <motion.span
                    className="block text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {slides[current].subtitle}
                  </motion.span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  className="mt-4 text-base md:text-lg text-white/80 max-w-xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  {slides[current].description}
                </motion.p>

                {/* CTA Button with enhanced animation */}
                <motion.div
                  className="mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <motion.a
                    href="#hakkimizda"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToContent()
                    }}
                    className="btn-luxury-white inline-block relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Detaylı Bilgi</span>
                    <motion.div
                      className="absolute inset-0 bg-white/10"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Left Side - Enhanced Dot Indicators */}
      <motion.div
        className="absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-white scale-125"
                : "bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          >
            {i === current && (
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-white/50"
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
          </button>
        ))}
      </motion.div>

      {/* Bottom Left - Enhanced Slide Counter */}
      <motion.div
        className="absolute bottom-10 left-6 lg:left-10 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <div className="flex items-end gap-2 text-white">
          <motion.span
            className="text-4xl md:text-5xl font-bold"
            key={current}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {String(current + 1).padStart(2, "0")}
          </motion.span>
          <span className="text-white/50 text-lg mb-1">/</span>
          <span className="text-white/50 text-lg mb-1">
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </motion.div>

      {/* Bottom Center - Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer group"
        onClick={scrollToContent}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <span className="text-white/60 text-xs uppercase tracking-widest mb-3 group-hover:text-white transition-colors">
          aşağı kaydır
        </span>
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2 group-hover:border-white/60 transition-colors relative"
        >
          <motion.div
            className="w-1 h-2 bg-white rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full border border-white/20"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Bottom Right - Enhanced Navigation Arrows */}
      <motion.div
        className="absolute bottom-10 right-6 lg:right-10 z-20 flex items-center gap-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9 }}
      >
        <motion.button
          onClick={() => goToSlide((current - 1 + slides.length) % slides.length)}
          className="w-12 h-12 border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-corporate-900 transition-all duration-300 relative overflow-hidden group"
          aria-label="Previous slide"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>
        <motion.button
          onClick={() => goToSlide((current + 1) % slides.length)}
          className="w-12 h-12 border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-corporate-900 transition-all duration-300 relative overflow-hidden group"
          aria-label="Next slide"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </motion.div>

      {/* Enhanced Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-corporate-400 to-white"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
          key={current}
        />
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        />
      </div>
      
      {/* Corner decorations */}
      <div className="absolute top-8 right-8 z-20 hidden lg:block">
        <motion.div
          className="w-24 h-24 border-t-2 border-r-2 border-white/20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
        />
      </div>
      <div className="absolute bottom-20 left-8 z-20 hidden lg:block">
        <motion.div
          className="w-16 h-16 border-b-2 border-l-2 border-white/10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3 }}
        />
      </div>
    </section>
  )
}