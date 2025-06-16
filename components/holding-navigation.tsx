"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import {
  Stethoscope,
  Pill,
  Syringe,
  HeartPulse,
  MapPin,
  Phone,
  Mail,
  Globe,
  Award,
  Target,
  Lightbulb,
  VolumeX,
  Volume2,
  Play,
} from "lucide-react"
import ScrollIndicator from "./scroll-indicator"

interface AnimatedGradientBackgroundProps {
  className?: string
  intensity?: "subtle" | "medium" | "strong"
}

interface Beam {
  x: number
  y: number
  width: number
  length: number
  angle: number
  speed: number
  opacity: number
  hue: number
  pulse: number
  pulseSpeed: number
}

interface CompanyLink {
  name: string
  description: string
  icon: React.ReactNode
  color: string
  gradientFrom: string
  gradientTo: string
  image: string
  website: string
  details: {
    title: string
    content: string
  }[]
}

function createBeam(width: number, height: number): Beam {
  const angle = -45 + Math.random() * 20
  return {
    x: Math.random() * width * 1.5 - width * 0.25,
    y: Math.random() * height * 1.5 - height * 0.25,
    width: 15 + Math.random() * 30,
    length: height * 2,
    angle: angle,
    speed: 0.3 + Math.random() * 0.5,
    opacity: 0.05 + Math.random() * 0.1,
    hue: 0,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.01 + Math.random() * 0.02,
  }
}

export default function HoldingNavigation({ className, intensity = "subtle" }: AnimatedGradientBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const beamsRef = useRef<Beam[]>([])
  const animationFrameRef = useRef<number>(0)
  const MINIMUM_BEAMS = 15
  const [scrollY, setScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [showPlayButton, setShowPlayButton] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Şirketler
  const companies: CompanyLink[] = [
    {
      name: "Tuna Medikal",
      description:
        "Tıbbi cihaz üretimi ve satışı yapıyoruz. Modern teknoloji ile donatılmış üretim tesislerimizde, hastaneler ve sağlık kuruluşları için yüksek kaliteli tıbbi cihazlar üretiyoruz.",
      icon: <Stethoscope className="h-8 w-8" />,
      color: "text-white",
      gradientFrom: "from-blue-500",
      gradientTo: "to-blue-500",
      image: "",
      website: "https://tunamedikal.com",
      details: [],
    },
    {
      name: "Efe Sentetik",
      description:
        "Çuval üretimi yapıyoruz. Endüstriyel ve ticari sektörlerin ihtiyaçlarına uygun, yüksek kaliteli polipropilen çuval üretimi gerçekleştiriyoruz.",
      icon: <Pill className="h-8 w-8" />,
      color: "text-white",
      gradientFrom: "from-green-500",
      gradientTo: "to-green-500",
      image: "",
      website: "https://efesentetik.com",
      details: [],
    },
    {
      name: "Efe Tıp",
      description:
        "Laboratuvar malzemeleri satışı yapıyoruz. Modern laboratuvarların ihtiyaç duyduğu yüksek kaliteli malzeme ve ekipmanları tedarik ediyoruz.",
      icon: <Syringe className="h-8 w-8" />,
      color: "text-white",
      gradientFrom: "from-red-500",
      gradientTo: "to-red-500",
      image: "",
      website: "https://efetip.com",
      details: [],
    },
    {
      name: "Wellmed",
      description:
        "Medikal malzemeler satışı yapıyoruz. Sağlık kuruluşlarının ihtiyaç duyduğu medikal malzeme ve ekipmanları tedarik ediyoruz.",
      icon: <HeartPulse className="h-8 w-8" />,
      color: "text-white",
      gradientFrom: "from-purple-500",
      gradientTo: "to-purple-500",
      image: "",
      website: "https://wellmed.com",
      details: [],
    },
  ]

  const opacityMap = {
    subtle: 0.4,
    medium: 0.6,
    strong: 0.8,
  }

  // Video oynatma fonksiyonu
  const playVideo = async () => {
    const video = videoRef.current
    if (!video) return

    try {
      video.currentTime = 10 // 10. saniyeden başlat
      await video.play()
      setIsVideoPlaying(true)
      setShowPlayButton(false)
    } catch (error) {
      console.warn("Video otomatik oynatılamadı:", error)
      setShowPlayButton(true)
      setIsVideoPlaying(false)
    }
  }

  // Manuel video başlatma
  const handlePlayClick = async () => {
    const video = videoRef.current
    if (!video) return

    try {
      video.currentTime = 10
      await video.play()
      setIsVideoPlaying(true)
      setShowPlayButton(false)
    } catch (error) {
      console.error("Video oynatma hatası:", error)
    }
  }

  // Video kontrolü
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = isMuted

    const handleLoadedData = () => {
      // Otomatik oynatmayı dene
      playVideo()
    }

    const handleCanPlay = () => {
      if (!isVideoPlaying) {
        playVideo()
      }
    }

    const handlePlay = () => {
      setIsVideoPlaying(true)
      setShowPlayButton(false)
    }

    const handlePause = () => {
      setIsVideoPlaying(false)
    }

    const handleError = () => {
      setShowPlayButton(true)
      setIsVideoPlaying(false)
    }

    video.addEventListener("loadeddata", handleLoadedData)
    video.addEventListener("canplay", handleCanPlay)
    video.addEventListener("play", handlePlay)
    video.addEventListener("pause", handlePause)
    video.addEventListener("error", handleError)

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData)
      video.removeEventListener("canplay", handleCanPlay)
      video.removeEventListener("play", handlePlay)
      video.removeEventListener("pause", handlePause)
      video.removeEventListener("error", handleError)
    }
  }, [isMuted, isVideoPlaying])

  // Scroll olayını dinle
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Arka plan animasyonu
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)

      beamsRef.current = Array.from({ length: MINIMUM_BEAMS }, () => createBeam(canvas.width, canvas.height))
    }

    updateCanvasSize()
    window.addEventListener("resize", updateCanvasSize)

    function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
      ctx.save()
      ctx.translate(beam.x, beam.y)
      ctx.rotate((beam.angle * Math.PI) / 180)
      const pulsingOpacity = beam.opacity * (0.7 + Math.sin(beam.pulse) * 0.3) * opacityMap[intensity]
      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length)
      gradient.addColorStop(0, `hsla(${beam.hue}, 0%, 70%, 0)`)
      gradient.addColorStop(0.5, `hsla(${beam.hue}, 0%, 70%, ${pulsingOpacity})`)
      gradient.addColorStop(1, `hsla(${beam.hue}, 0%, 70%, 0)`)
      ctx.fillStyle = gradient
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length)
      ctx.restore()
    }

    function animate() {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      beamsRef.current.forEach((beam) => {
        beam.y -= beam.speed
        beam.pulse += beam.pulseSpeed
        if (beam.y + beam.length < 0) {
          Object.assign(beam, createBeam(canvas.width, canvas.height), { y: canvas.height })
        }
        drawBeam(ctx, beam)
      })
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", updateCanvasSize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [intensity])

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  // Unified glassmorphism styles
  const glassPanel = "bg-white/20 backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]"
  const lightReflection =
    "absolute -top-1 left-10 right-10 h-1 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-full"

  return (
    <div className={cn("relative w-full bg-gradient-to-br from-navy-900 via-blue-900 to-indigo-900", className)}>
      {/* Arka plan canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 opacity-30" />

      {/* Arka plan dekoratif daireler */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-gray-200/20 to-white/20 blur-3xl"></div>
        <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-gray-300/20 to-white/20 blur-3xl"></div>
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 rounded-full bg-gradient-to-br from-gray-200/20 to-white/20 blur-3xl"></div>
      </div>

      <ScrollIndicator />

      {/* Navigasyon - Logo ve Şirket Linkleri */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 w-full ${
          scrollY > 50 ? "bg-white/10 backdrop-blur-2xl border-b border-white/20 shadow-lg" : "bg-transparent"
        } transition-all duration-300`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img src="/images/tuna-group-logo.png" alt="Tuna Group Logo" className="h-10" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <a
                href="https://tunamedikal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-200 font-medium"
              >
                <Stethoscope className="h-4 w-4" />
                <span>Tuna Medikal</span>
              </a>
              <a
                href="https://efesentetik.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-200 font-medium"
              >
                <Pill className="h-4 w-4" />
                <span>Efe Sentetik</span>
              </a>
              <a
                href="https://efetip.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-200 font-medium"
              >
                <Syringe className="h-4 w-4" />
                <span>Efe Tıp</span>
              </a>
              <a
                href="https://wellmed.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-200 font-medium"
              >
                <HeartPulse className="h-4 w-4" />
                <span>Wellmed</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                className="bg-white/20 backdrop-blur-xl p-3 rounded-full border border-white/30 text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobil Menü */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              className="absolute right-0 top-0 h-full w-80 bg-white/90 backdrop-blur-xl shadow-lg"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="p-8 flex flex-col h-full">
                <div className="flex justify-end mb-8">
                  <button
                    className="bg-white/20 backdrop-blur-xl p-3 rounded-full border border-white/30 text-gray-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col space-y-4">
                  <a
                    href="https://tunamedikal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-lg text-gray-700 hover:bg-white/20 transition-all duration-200 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Stethoscope className="h-5 w-5" />
                    <span>Tuna Medikal</span>
                  </a>
                  <a
                    href="https://efesentetik.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-lg text-gray-700 hover:bg-white/20 transition-all duration-200 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Pill className="h-5 w-5" />
                    <span>Efe Sentetik</span>
                  </a>
                  <a
                    href="https://efetip.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-lg text-gray-700 hover:bg-white/20 transition-all duration-200 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Syringe className="h-5 w-5" />
                    <span>Efe Tıp</span>
                  </a>
                  <a
                    href="https://wellmed.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-lg text-gray-700 hover:bg-white/20 transition-all duration-200 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <HeartPulse className="h-5 w-5" />
                    <span>Wellmed</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modern Video Slider */}
      <section className="relative h-screen overflow-hidden">
        {/* Video Arka Plan */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            loop
            muted={isMuted}
            playsInline
            preload="metadata"
          >
            <source
              src="https://stinvenireaz084550184237.blob.core.windows.net/invenirecomtr-website/WhatsApp Video 2025-06-14 at 12.35.24_588fdc09.mp4"
              type="video/mp4"
            />
          </video>

          {/* Daha küçük ve sık dotted overlay */}
          <div
            className="absolute inset-0 bg-black/60"
            style={{
              backgroundImage:
                "radial-gradient(rgba(0, 0, 0, 0.4) 1px, transparent 1px), radial-gradient(rgba(0, 0, 0, 0.4) 1px, transparent 1px)",
              backgroundSize: "8px 8px",
              backgroundPosition: "0 0, 4px 4px",
            }}
          />

          {/* Video Kontrolleri */}
          <div className="absolute bottom-8 right-8 flex space-x-4 z-20">
            {/* Play Button - sadece gerektiğinde göster */}
            {showPlayButton && (
              <button
                onClick={handlePlayClick}
                className="bg-white/20 backdrop-blur-xl p-4 rounded-full border border-white/30 text-white hover:bg-white/30 transition-all"
                aria-label="Videoyu Oynat"
              >
                <Play className="h-6 w-6" />
              </button>
            )}

            {/* Ses Kontrolü */}
            <button
              onClick={toggleMute}
              className="bg-white/20 backdrop-blur-xl p-4 rounded-full border border-white/30 text-white hover:bg-white/30 transition-all"
              aria-label={isMuted ? "Sesi Aç" : "Sesi Kapat"}
            >
              {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Tek Sayfa İçerik */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-6 w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={`${glassPanel} p-16 rounded-3xl relative max-w-4xl mx-auto`}
            >
              <div className={lightReflection} />
              <h1 className="text-7xl font-bold text-white mb-6">Tuna Group</h1>
              <h2 className="text-4xl font-semibold text-gray-200 mb-8">Geleceği Şekillendiren Güç</h2>
              <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Çeşitli sektörlerde faaliyet gösteren güçlü şirketlerimizle Türkiye ekonomisine katkı sağlıyoruz.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ana İçerik Bölümü */}
      <section className="relative py-20">
        {/* Arka Plan Fotoğrafı */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/mountain-peak.jpeg')" }}
          />
          <div
            className="absolute inset-0 bg-black/70"
            style={{
              backgroundImage:
                "radial-gradient(rgba(0, 0, 0, 0.2) 1px, transparent 1px), radial-gradient(rgba(0, 0, 0, 0.2) 1px, transparent 1px)",
              backgroundSize: "8px 8px",
              backgroundPosition: "0 0, 4px 4px",
            }}
          />
        </div>

        {/* Ana İçerik - Tek Glassmorphism Frame */}
        <div className="relative z-20 max-w-7xl mx-auto p-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`${glassPanel} rounded-3xl p-12 relative`}
          >
            {/* Işık yansıması */}
            <div className={lightReflection} />

            {/* Şirket Kartları - Tek Sütun */}
            <div className="space-y-12 mb-20">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-white mb-6">Şirketlerimiz</h2>
                <p className="text-gray-200 text-xl max-w-3xl mx-auto">
                  Farklı sektörlerde faaliyet gösteren güçlü şirketlerimizle Türkiye ekonomisine katkı sağlıyoruz
                </p>
              </div>

              {companies.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`${glassPanel} rounded-3xl p-10 hover:bg-white/30 transition-all duration-300 group cursor-pointer relative`}
                  whileHover={{ y: -5, scale: 1.01 }}
                >
                  {/* Işık yansıması */}
                  <div className="absolute -top-1 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-full" />

                  {/* İçerik Grid - Görseli kaldır */}
                  <div className="flex items-start space-x-6">
                    <div
                      className={`p-6 rounded-2xl bg-gradient-to-r ${company.gradientFrom} ${company.gradientTo} shadow-lg flex-shrink-0`}
                    >
                      {company.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <h3 className="text-3xl font-bold text-gray-800 mb-2 lg:mb-0 group-hover:text-gray-700 transition-colors">
                          {company.name}
                        </h3>
                        <a
                          href={company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Globe className="h-5 w-5 mr-2" />
                          Web Sitesi
                        </a>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-lg">{company.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Hakkımızda Bölümü */}
            <div className="border-t border-white/20 pt-20">
              {/* Başlık */}
              <div className="text-center mb-20">
                <div className="inline-block bg-white/20 backdrop-blur-xl px-8 py-3 rounded-full border border-white/30 mb-6">
                  <h2 className="text-lg font-semibold text-white tracking-wide uppercase">Biz Kimiz?</h2>
                </div>
                <h3 className="text-6xl font-bold text-white mb-6">Hakkımızda</h3>
                <p className="text-gray-200 text-2xl max-w-4xl mx-auto leading-relaxed">
                  Tuna Group olarak, çeşitli sektörlerde faaliyet gösteren güçlü şirketlerimizle Türkiye ekonomisine
                  katkı sağlıyoruz.
                </p>
              </div>

              {/* İçerik Grid */}
              <div className="grid lg:grid-cols-2 gap-20 mb-20">
                {/* Sol Taraf - Misyon ve Vizyon */}
                <motion.div
                  className="space-y-12"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className={`${glassPanel} p-10 rounded-3xl relative`}>
                    <div className="absolute -top-1 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-full" />
                    <div className="flex items-start space-x-6">
                      <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg flex-shrink-0">
                        <Target className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-3xl font-bold text-white mb-6">Misyonumuz</h4>
                        <p className="text-gray-200 leading-relaxed text-lg">
                          Endüstriyel ve ticari sektörlerin ihtiyaçlarına uygun, yüksek kaliteli pp çuval üretimi
                          gerçekleştirmek. Müşteri memnuniyetini ve iş birliğini ön planda tutarak, üretim süreçlerimize
                          en son teknolojik yenilikleri entegre etmek ve çevreye duyarlı yaklaşımımızla topluma değer
                          katmak.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className={`${glassPanel} p-10 rounded-3xl relative`}>
                    <div className="absolute -top-1 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-full" />
                    <div className="flex items-start space-x-6">
                      <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-400 to-purple-600 shadow-lg flex-shrink-0">
                        <Lightbulb className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-3xl font-bold text-white mb-6">Vizyonumuz</h4>
                        <p className="text-gray-200 leading-relaxed text-lg">
                          Sürdürülebilirlik, kalite ve yenilik odaklı yaklaşımımızla çuval üretiminde sektörün lider
                          markası olmayı hedefliyoruz. Müşterilerimizin ihtiyaçlarını en iyi şekilde karşılayan, çevreye
                          duyarlı ve yenilikçi çözümlerimizle sektörde fark yaratmaya devam ediyoruz.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Sağ Taraf - İstatistikler ve Görsel */}
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="text-center mb-10">
                    <h4 className="text-3xl font-bold text-white mb-4">Rakamlarla Tuna Group</h4>
                    <p className="text-gray-200 text-lg">Başarılarımızı gösteren önemli veriler</p>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    {[
                      { label: "Yıllık Deneyim", value: "35+", icon: <Award className="h-8 w-8" /> },
                      { label: "Faaliyet Ülkesi", value: "10+", icon: <Globe className="h-8 w-8" /> },
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        className={`${glassPanel} p-10 rounded-3xl text-center relative`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {/* Işık yansıması */}
                        <div className="absolute -top-1 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-full" />

                        <div className="flex justify-center mb-6 text-white">{item.icon}</div>
                        <p className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                          {item.value}
                        </p>
                        <p className="text-white font-medium text-lg">{item.label}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Analytics Görseli */}
                  <div className={`${glassPanel} p-8 rounded-3xl relative overflow-hidden`}>
                    <div className="absolute -top-1 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-full" />
                    <img
                      src="/images/analytics-charts.jpeg"
                      alt="Analytics"
                      className="w-full h-64 object-cover rounded-2xl"
                    />
                  </div>
                </motion.div>
              </div>

              {/* İletişim Bilgileri - Tek Pencere */}
              <div className="border-t border-white/20 pt-20">
                <div className="text-center mb-16">
                  <h4 className="text-5xl font-bold text-white mb-6">İletişim</h4>
                  <p className="text-gray-200 text-xl">Bizimle iletişime geçin, projelerinizde yanınızda olalım</p>
                </div>

                <div className="flex justify-center">
                  <motion.div
                    className={`${glassPanel} p-12 rounded-3xl relative max-w-4xl w-full`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="absolute -top-1 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-full" />

                    <div className="grid md:grid-cols-2 gap-12">
                      {/* Sol Taraf - Adres */}
                      <div className="flex items-start space-x-6">
                        <div className="p-5 rounded-2xl bg-gradient-to-r from-red-400 to-red-600 shadow-lg flex-shrink-0">
                          <MapPin className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h5 className="text-2xl font-bold text-white mb-4">Genel Merkez</h5>
                          <p className="text-gray-200 leading-relaxed">
                            BAŞPINAR(ORGANİZE)OSB MAH. O.S.B 3.BÖLGE KAMİL ŞERBETCİ BLV. NO: 39 ŞEHİTKAMİL/ GAZİANTEP
                          </p>
                        </div>
                      </div>

                      {/* Sağ Taraf - Diğer İletişim Bilgileri */}
                      <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 rounded-xl bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg flex-shrink-0">
                            <Phone className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h6 className="text-lg font-bold text-white">Telefon</h6>
                            <p className="text-gray-200 text-xl font-semibold">0342 360 98 55</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4">
                          <div className="p-3 rounded-xl bg-gradient-to-r from-green-400 to-green-600 shadow-lg flex-shrink-0">
                            <Mail className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h6 className="text-lg font-bold text-white">E-posta</h6>
                            <p className="text-gray-200 text-lg">info@tunagroup.com.tr</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4">
                          <div className="p-3 rounded-xl bg-gradient-to-r from-purple-400 to-purple-600 shadow-lg flex-shrink-0">
                            <Globe className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h6 className="text-lg font-bold text-white">Web</h6>
                            <p className="text-gray-200 text-lg">www.tunagroup.com.tr</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
