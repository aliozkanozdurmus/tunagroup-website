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
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Linkedin,
  Instagram,
  VolumeX,
  Volume2,
  ArrowDown,
} from "lucide-react"
import LottiePlayer from "./lottie-player"
import ScrollIndicator from "./scroll-indicator"
import CompanyCard from "./company-card"
import ParallaxSection from "./parallax-section"

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
  details: {
    title: string
    content: string
  }[]
}

interface Section {
  id: string
  title: string
  subtitle?: string
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
    hue: 0, // Gümüş/gri tonları için 0 saturation
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.01 + Math.random() * 0.02,
  }
}

export default function HoldingNavigation({ className, intensity = "subtle" }: AnimatedGradientBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const beamsRef = useRef<Beam[]>([])
  const animationFrameRef = useRef<number>(0)
  const MINIMUM_BEAMS = 15
  const [activeSection, setActiveSection] = useState<string>("hero")
  const [scrollY, setScrollY] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Sayfa bölümleri
  const sections: Section[] = [
    { id: "hero", title: "Ana Sayfa" },
    { id: "companies", title: "Şirketlerimiz", subtitle: "Grup Şirketlerimiz" },
    { id: "about", title: "Hakkımızda", subtitle: "Biz Kimiz?" },
    { id: "contact", title: "İletişim", subtitle: "Bize Ulaşın" },
  ]

  // Şirketler
  const companies: CompanyLink[] = [
    {
      name: "Tuna Medikal",
      description: "Sağlık sektörüne yenilikçi medikal çözümler sunuyoruz.",
      icon: <Stethoscope className="h-10 w-10" />,
      color: "text-gray-700",
      gradientFrom: "from-gray-300",
      gradientTo: "to-gray-100",
      image: "/images/cityscape.jpeg",
      details: [
        {
          title: "Hakkımızda",
          content:
            "Tuna Medikal, 2005 yılında kurulmuş olup, hastaneler ve sağlık kuruluşları için yüksek kaliteli medikal ekipman ve çözümler sunmaktadır. Geniş ürün yelpazemiz ve uzman kadromuzla sağlık sektörünün güvenilir tedarikçisiyiz.",
        },
        {
          title: "Ürünlerimiz",
          content:
            "Tanı ve tedavi ekipmanları, ameliyathane sistemleri, hasta takip cihazları, görüntüleme sistemleri ve hastane mobilyaları gibi geniş bir ürün yelpazesi sunuyoruz.",
        },
        {
          title: "Hizmetlerimiz",
          content:
            "Satış öncesi danışmanlık, kurulum, eğitim, teknik servis ve bakım hizmetleri ile müşterilerimize tam destek sağlıyoruz.",
        },
      ],
    },
    {
      name: "Efe Sentetik",
      description: "Yenilikçi sentetik malzemeler ve çözümler üretiyoruz.",
      icon: <Pill className="h-10 w-10" />,
      color: "text-gray-700",
      gradientFrom: "from-gray-300",
      gradientTo: "to-gray-100",
      image: "/images/skyscrapers.jpeg",
      details: [
        {
          title: "Hakkımızda",
          content:
            "Efe Sentetik, 2010 yılında kurulmuş olup, tekstil, otomotiv ve sağlık sektörleri için yüksek performanslı sentetik malzemeler üretmektedir. İnovatif yaklaşımımız ve kalite odaklı üretim anlayışımızla sektörde öncü konumdayız.",
        },
        {
          title: "Ürünlerimiz",
          content:
            "Teknik tekstiller, kompozit malzemeler, sentetik elyaflar, medikal tekstiller ve özel uygulamalar için geliştirilmiş sentetik çözümler üretiyoruz.",
        },
        {
          title: "Ar-Ge Çalışmalarımız",
          content:
            "Sürekli gelişen teknolojik altyapımız ve deneyimli Ar-Ge ekibimizle, müşterilerimizin ihtiyaçlarına özel çözümler geliştiriyoruz.",
        },
      ],
    },
    {
      name: "Efe Tıp",
      description: "Sağlık sektörüne yönelik tıbbi cihaz ve ekipmanlar.",
      icon: <Syringe className="h-10 w-10" />,
      color: "text-gray-700",
      gradientFrom: "from-gray-300",
      gradientTo: "to-gray-100",
      image: "/images/curved-building.jpeg",
      details: [
        {
          title: "Hakkımızda",
          content:
            "Efe Tıp, 2008 yılında kurulmuş olup, tıbbi cihaz ve ekipman üretimi ve dağıtımı alanında faaliyet göstermektedir. Yüksek kalite standartlarımız ve geniş ürün yelpazemizle sağlık sektörünün güvenilir çözüm ortağıyız.",
        },
        {
          title: "Ürünlerimiz",
          content:
            "Cerrahi aletler, tanı cihazları, laboratuvar ekipmanları, sterilizasyon sistemleri ve tek kullanımlık tıbbi malzemeler üretiyoruz.",
        },
        {
          title: "Kalite Politikamız",
          content:
            "ISO 13485 ve CE sertifikalarına sahip üretim tesislerimizde, uluslararası standartlara uygun ürünler geliştiriyoruz.",
        },
      ],
    },
    {
      name: "Wellmed",
      description: "Sağlıklı yaşam için yenilikçi ürün ve hizmetler.",
      icon: <HeartPulse className="h-10 w-10" />,
      color: "text-gray-700",
      gradientFrom: "from-gray-300",
      gradientTo: "to-gray-100",
      image: "/images/foggy-mountains.jpeg",
      details: [
        {
          title: "Hakkımızda",
          content:
            "Wellmed, 2015 yılında kurulmuş olup, sağlıklı yaşam ve kişisel sağlık yönetimi alanında yenilikçi ürün ve hizmetler sunmaktadır. Misyonumuz, insanların daha sağlıklı ve kaliteli bir yaşam sürmelerine yardımcı olmaktır.",
        },
        {
          title: "Ürünlerimiz",
          content:
            "Kişisel sağlık takip cihazları, fitness ekipmanları, beslenme takviyeleri ve sağlıklı yaşam ürünleri sunuyoruz.",
        },
        {
          title: "Hizmetlerimiz",
          content:
            "Sağlık danışmanlığı, beslenme programları, fitness koçluğu ve kişiselleştirilmiş sağlık yönetimi hizmetleri veriyoruz.",
        },
      ],
    },
  ]

  // Sosyal medya linkleri (Twitter ve YouTube kaldırıldı)
  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, url: "https://linkedin.com/company/tunagroup" },
    { icon: <Instagram className="h-5 w-5" />, url: "https://instagram.com/tunagroup" },
  ]

  const opacityMap = {
    subtle: 0.4,
    medium: 0.6,
    strong: 0.8,
  }

  // Video kontrolü
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = isMuted

    // Video yüklendiğinde otomatik oynat
    const handleLoadedData = () => {
      video.play().catch((error) => {
        console.error("Video oynatma hatası:", error)
      })
    }

    video.addEventListener("loadeddata", handleLoadedData)

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData)
    }
  }, [isMuted])

  // Scroll olayını dinle
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Hangi bölümün görünür olduğunu belirle
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }))

      for (const section of sectionElements) {
        if (!section.element) continue
        const rect = section.element.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

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
      gradient.addColorStop(0, `hsla(${beam.hue}, 0%, 70%, 0)`) // Gümüş/gri tonları
      gradient.addColorStop(0.5, `hsla(${beam.hue}, 0%, 70%, ${pulsingOpacity})`) // Gümüş/gri tonları
      gradient.addColorStop(1, `hsla(${beam.hue}, 0%, 70%, 0)`) // Gümüş/gri tonları
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

  // Bir bölüme scroll
  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Glassmorphism stil sınıfları
  const glassCard = "bg-white/20 backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]"
  const glassCardHover = "hover:bg-white/30 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.15)]"
  const glassInput = "bg-white/20 backdrop-blur-xl border border-white/30 focus:border-white/50 focus:bg-white/30"
  const glassButton =
    "bg-gradient-to-r from-gray-500/80 to-gray-400/80 backdrop-blur-xl hover:from-gray-500/90 hover:to-gray-400/90"
  const glassNav = "bg-white/10 backdrop-blur-2xl border-b border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]"

  // Ses kontrolü
  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <div
      className={cn(
        "relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100",
        className,
      )}
    >
      {/* Arka plan canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 opacity-30" />

      {/* Arka plan dekoratif daireler */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-gray-200/20 to-white/20 blur-3xl"></div>
        <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-gray-300/20 to-white/20 blur-3xl"></div>
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 rounded-full bg-gradient-to-br from-gray-200/20 to-white/20 blur-3xl"></div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Navigasyon */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 w-full ${
          scrollY > 50 ? `${glassNav} shadow-lg` : "bg-transparent"
        } transition-all duration-300`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" passHref>
              <div className="flex items-center cursor-pointer">
                <span className="text-2xl font-bold text-white">TUNA GROUP</span>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={cn(
                    "px-4 py-2 rounded-full transition-all duration-200",
                    activeSection === section.id
                      ? "bg-gradient-to-r from-gray-500/80 to-gray-400/80 backdrop-blur-xl text-white shadow-lg"
                      : "bg-white/10 backdrop-blur-lg text-white hover:bg-white/20",
                  )}
                >
                  {section.title}
                </button>
              ))}
            </div>
            <div className="hidden md:flex items-center space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-xl p-2 rounded-full border border-white/30 text-white hover:bg-white/30 transition-all"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <div className="md:hidden">
              <button
                className="bg-white/20 backdrop-blur-xl p-2 rounded-full border border-white/30 text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
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
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>
            <motion.div
              className="absolute right-0 top-0 h-full w-64 bg-white/90 backdrop-blur-xl shadow-lg"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-end mb-8">
                  <button
                    className="bg-white/20 backdrop-blur-xl p-2 rounded-full border border-white/30 text-gray-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col space-y-4">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={cn(
                        "px-4 py-3 rounded-lg transition-all duration-200 text-left",
                        activeSection === section.id
                          ? "bg-gradient-to-r from-gray-500/80 to-gray-400/80 backdrop-blur-xl text-white shadow-lg"
                          : "bg-white/10 backdrop-blur-lg text-gray-700 hover:bg-white/20",
                      )}
                    >
                      {section.title}
                    </button>
                  ))}
                </div>
                <div className="mt-auto">
                  <div className="flex justify-center space-x-4 pt-6 border-t border-gray-200">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-xl p-2 rounded-full border border-white/30 text-gray-600 hover:bg-white/30 transition-all"
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Bölümü - Video Arka Plan */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center">
        {/* Video Arka Plan */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {/* Video */}
          <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline>
            <source src="/videos/background.mp4" type="video/mp4" />
          </video>

          {/* Siyah noktalı overlay */}
          <div
            className="absolute inset-0 z-10 bg-black/70"
            style={{
              backgroundImage:
                "radial-gradient(rgba(0, 0, 0, 0.2) 1px, transparent 1px), radial-gradient(rgba(0, 0, 0, 0.2) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0, 10px 10px",
            }}
          ></div>

          {/* Ses Kontrolü */}
          <button
            onClick={toggleMute}
            className="absolute bottom-8 right-8 z-20 bg-white/20 backdrop-blur-xl p-3 rounded-full border border-white/30 text-white hover:bg-white/30 transition-all"
            aria-label={isMuted ? "Sesi Aç" : "Sesi Kapat"}
          >
            {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </button>
        </div>

        {/* Hero İçeriği */}
        <div className="relative z-20 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Cam panel */}
            <div className="relative bg-white/20 backdrop-blur-xl p-10 md:p-16 rounded-3xl border border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)]">
              {/* Işık yansıması efekti */}
              <div className="absolute -top-1 left-20 right-20 h-1 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-full"></div>

              <motion.button
                onClick={() => scrollToSection("companies")}
                className={`${glassButton} text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-gray-300/50 flex items-center mx-auto`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Şirketlerimizi Keşfedin <ChevronDown className="ml-2 h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Animation */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <ArrowDown className="h-8 w-8 text-white" />
        </motion.div>
      </section>

      {/* Bakım Popup */}
      <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-4 md:w-96 z-50">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="bg-white/90 backdrop-blur-xl p-4 rounded-lg shadow-lg border border-gray-300"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center">
              <div className="bg-yellow-100 p-2 rounded-full mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Bakım Bildirimi</h3>
                <p className="text-sm text-gray-700">
                  Web sitemiz şu anda bakım aşamasındadır. En kısa sürede hizmetinize sunulacaktır.
                </p>
              </div>
            </div>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={() => {
                const popup = document.querySelector(".fixed.bottom-4")
                if (popup) popup.classList.add("hidden")
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Şirketler Bölümü */}
      <section id="companies" className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-white/20 backdrop-blur-xl px-4 py-1 rounded-full border border-white/30 mb-2">
              <h2 className="text-sm font-semibold text-gray-600 tracking-wide uppercase">
                {sections.find((s) => s.id === "companies")?.subtitle}
              </h2>
            </div>
            <h3 className="mt-2 text-4xl font-bold text-gray-800 sm:text-5xl">
              {sections.find((s) => s.id === "companies")?.title}
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CompanyCard
                  name={company.name}
                  description={company.description}
                  icon={company.icon}
                  color={company.color}
                  gradientFrom={company.gradientFrom}
                  gradientTo={company.gradientTo}
                  image={company.image}
                  details={company.details}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hakkımızda Bölümü */}
      <ParallaxSection
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center"
        imageUrl="/images/mountain-peak.jpeg"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-white/20 backdrop-blur-xl px-4 py-1 rounded-full border border-white/30 mb-2">
              <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
                {sections.find((s) => s.id === "about")?.subtitle}
              </h2>
            </div>
            <h3 className="mt-2 text-4xl font-bold text-white sm:text-5xl">
              {sections.find((s) => s.id === "about")?.title}
            </h3>
          </motion.div>

          <div className="relative">
            {/* Arka plan efekti */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200/20 to-gray-300/20 rounded-3xl blur-3xl transform scale-105"></div>

            <div className={`${glassCard} p-8 md:p-12 rounded-3xl relative`}>
              {/* Işık yansıması efekti */}
              <div className="absolute -top-1 left-20 right-20 h-1 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-full"></div>

              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h4 className="text-2xl font-bold text-gray-800">Vizyonumuz</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Tuna Group olarak, faaliyet gösterdiğimiz tüm sektörlerde global bir marka olmayı ve yenilikçi
                    çözümlerimizle dünya standartlarında hizmet sunmayı hedefliyoruz. Sürdürülebilir büyüme stratejileri
                    ile gelecek nesillere daha iyi bir dünya bırakmak için çalışıyoruz.
                  </p>

                  <h4 className="text-2xl font-bold text-gray-800 pt-6">Misyonumuz</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Faaliyet gösterdiğimiz her alanda en yüksek kalite standartlarını koruyarak, müşterilerimize,
                    çalışanlarımıza ve topluma değer katmak. Etik değerlerimizden ödün vermeden, sürekli gelişim ve
                    inovasyon ile sektörlerimizde öncü olmak için çalışıyoruz.
                  </p>
                </motion.div>

                <motion.div
                  className="grid grid-cols-2 gap-6"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  {[
                    { label: "Yıllık Deneyim", value: "35+" },
                    { label: "Faaliyet Ülkesi", value: "20+" },
                    { label: "Çalışan Sayısı", value: "10K+" },
                    { label: "Tamamlanan Proje", value: "500+" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      className="bg-white/30 backdrop-blur-xl p-6 rounded-xl text-center shadow-lg border border-white/40 relative overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {/* Işık yansıması efekti */}
                      <div className="absolute -top-1 left-5 right-5 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-full"></div>

                      <p className="text-4xl font-bold mb-2 bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent">
                        {item.value}
                      </p>
                      <p className="text-gray-700 font-medium">{item.label}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* İletişim Bölümü */}
      <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-white/20 backdrop-blur-xl px-4 py-1 rounded-full border border-white/30 mb-2">
              <h2 className="text-sm font-semibold text-gray-600 tracking-wide uppercase">
                {sections.find((s) => s.id === "contact")?.subtitle}
              </h2>
            </div>
            <h3 className="mt-2 text-4xl font-bold text-gray-800 sm:text-5xl">
              {sections.find((s) => s.id === "contact")?.title}
            </h3>
          </motion.div>

          {/* İletişim Bilgileri */}
          <div className="relative mb-16">
            {/* Arka plan efekti */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200/20 to-gray-300/20 rounded-3xl blur-3xl transform scale-105"></div>

            <div className={`${glassCard} p-8 md:p-12 rounded-3xl relative`}>
              {/* Işık yansıması efekti */}
              <div className="absolute -top-1 left-20 right-20 h-1 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-full"></div>

              <h4 className="text-2xl font-bold text-gray-800 mb-8 text-center">İletişim Bilgilerimiz</h4>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <MapPin className="h-6 w-6 text-gray-600" />,
                    title: "Adres",
                    lines: ["Tuna Plaza, Levent Mah.", "Büyükdere Cad. No:123", "34330 Levent / İstanbul"],
                  },
                  {
                    icon: <Phone className="h-6 w-6 text-gray-600" />,
                    title: "Telefon",
                    lines: ["+90 (212) 123 45 67", "+90 (212) 123 45 68"],
                  },
                  {
                    icon: <Mail className="h-6 w-6 text-gray-600" />,
                    title: "E-posta",
                    lines: ["info@tunagroup.com", "kariyer@tunagroup.com"],
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="bg-white/30 backdrop-blur-xl p-4 rounded-full border border-white/40 shadow-md mb-4">
                      {item.icon}
                    </div>
                    <h5 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h5>
                    {item.lines.map((line) => (
                      <p key={line} className="text-gray-700">
                        {line}
                      </p>
                    ))}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Bize Ulaşın Formu */}
          <div className="relative">
            {/* Arka plan efekti */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200/20 to-gray-300/20 rounded-3xl blur-3xl transform scale-105"></div>

            <div className={`${glassCard} p-8 md:p-12 rounded-3xl relative`}>
              {/* Işık yansıması efekti */}
              <div className="absolute -top-1 left-20 right-20 h-1 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-full"></div>

              <h4 className="text-2xl font-bold text-gray-800 mb-8 text-center">Bize Ulaşın</h4>

              <form className="max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <input
                      type="text"
                      placeholder="Adınız"
                      className={`w-full ${glassInput} p-3 rounded-lg text-gray-800 placeholder-gray-400 outline-none transition-all`}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="relative"
                  >
                    <input
                      type="text"
                      placeholder="Soyadınız"
                      className={`w-full ${glassInput} p-3 rounded-lg text-gray-800 placeholder-gray-400 outline-none transition-all`}
                    />
                  </motion.div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative"
                  >
                    <input
                      type="email"
                      placeholder="E-posta Adresiniz"
                      className={`w-full ${glassInput} p-3 rounded-lg text-gray-800 placeholder-gray-400 outline-none transition-all`}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="relative"
                  >
                    <input
                      type="tel"
                      placeholder="Telefon Numaranız"
                      className={`w-full ${glassInput} p-3 rounded-lg text-gray-800 placeholder-gray-400 outline-none transition-all`}
                    />
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="relative mb-6"
                >
                  <input
                    type="text"
                    placeholder="Konu"
                    className={`w-full ${glassInput} p-3 rounded-lg text-gray-800 placeholder-gray-400 outline-none transition-all`}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="relative mb-6"
                >
                  <textarea
                    placeholder="Mesajınız"
                    rows={4}
                    className={`w-full ${glassInput} p-3 rounded-lg text-gray-800 placeholder-gray-400 outline-none transition-all`}
                  ></textarea>
                </motion.div>
                <motion.div
                  className="flex justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <motion.button
                    type="submit"
                    className={`${glassButton} text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-gray-300/50`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Mesajı Gönder
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Dalgalı Animasyon */}
      <div className="relative h-40 overflow-hidden">
        <LottiePlayer src="/lottie/wave.json" className="w-full absolute bottom-0" />
      </div>

      {/* Footer */}
      <motion.footer
        className="relative z-10 w-full py-8 text-center bg-white/20 backdrop-blur-xl border-t border-white/30 shadow-[0_-8px_32px_0_rgba(0,0,0,0.05)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p className="text-sm text-gray-700">© {new Date().getFullYear()} Tuna Group. Tüm Hakları Saklıdır.</p>
      </motion.footer>
    </div>
  )
}
