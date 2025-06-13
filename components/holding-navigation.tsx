"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Cpu, Building2, Zap, LineChart, Globe, Phone, Mail, MapPin } from "lucide-react"

interface AnimatedGradientBackgroundProps {
  className?: string
  children?: React.ReactNode
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
  url: string
  color: string
  icon: React.ReactNode
  services: string[]
}

function createBeam(width: number, height: number): Beam {
  const angle = -35 + Math.random() * 10
  return {
    x: Math.random() * width * 1.5 - width * 0.25,
    y: Math.random() * height * 1.5 - height * 0.25,
    width: 30 + Math.random() * 60,
    length: height * 2.5,
    angle: angle,
    speed: 0.6 + Math.random() * 1.2,
    opacity: 0.12 + Math.random() * 0.16,
    hue: 190 + Math.random() * 70,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.02 + Math.random() * 0.03,
  }
}

export default function HoldingNavigation({ className, intensity = "strong" }: AnimatedGradientBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const beamsRef = useRef<Beam[]>([])
  const animationFrameRef = useRef<number>(0)
  const MINIMUM_BEAMS = 20
  const [hoveredCompany, setHoveredCompany] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<string>("companies")

  const companies: CompanyLink[] = [
    {
      name: "Tuna Teknoloji",
      description: "Yenilikçi teknoloji çözümleri",
      url: "https://teknoloji.example.com",
      color: "from-cyan-500 to-blue-600",
      icon: <Cpu className="h-8 w-8" />,
      services: ["Yapay Zeka Çözümleri", "Bulut Hizmetleri", "Yazılım Geliştirme", "Siber Güvenlik"],
    },
    {
      name: "Tuna İnşaat",
      description: "Modern yapı projeleri",
      url: "https://insaat.example.com",
      color: "from-amber-500 to-orange-600",
      icon: <Building2 className="h-8 w-8" />,
      services: ["Konut Projeleri", "Ticari Yapılar", "Altyapı Çalışmaları", "Restorasyon"],
    },
    {
      name: "Tuna Enerji",
      description: "Sürdürülebilir enerji kaynakları",
      url: "https://enerji.example.com",
      color: "from-emerald-500 to-green-600",
      icon: <Zap className="h-8 w-8" />,
      services: ["Yenilenebilir Enerji", "Enerji Depolama", "Akıllı Şebekeler", "Karbon Nötr Çözümler"],
    },
    {
      name: "Tuna Finans",
      description: "Güvenilir finansal hizmetler",
      url: "https://finans.example.com",
      color: "from-purple-500 to-violet-600",
      icon: <LineChart className="h-8 w-8" />,
      services: ["Yatırım Danışmanlığı", "Varlık Yönetimi", "Risk Analizi", "Finansal Planlama"],
    },
  ]

  const opacityMap = {
    subtle: 0.7,
    medium: 0.85,
    strong: 1,
  }

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

      const totalBeams = MINIMUM_BEAMS * 1.5
      beamsRef.current = Array.from({ length: totalBeams }, () => createBeam(canvas.width, canvas.height))
    }

    updateCanvasSize()
    window.addEventListener("resize", updateCanvasSize)

    function resetBeam(beam: Beam, index: number, totalBeams: number) {
      if (!canvas) return beam

      const column = index % 3
      const spacing = canvas.width / 3

      beam.y = canvas.height + 100
      beam.x = column * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5
      beam.width = 100 + Math.random() * 100
      beam.speed = 0.5 + Math.random() * 0.4
      beam.hue = 190 + (index * 70) / totalBeams
      beam.opacity = 0.2 + Math.random() * 0.1
      return beam
    }

    function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
      ctx.save()
      ctx.translate(beam.x, beam.y)
      ctx.rotate((beam.angle * Math.PI) / 180)

      // Calculate pulsing opacity
      const pulsingOpacity = beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2) * opacityMap[intensity]

      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length)

      // Enhanced gradient with multiple color stops
      gradient.addColorStop(0, `hsla(${beam.hue}, 85%, 65%, 0)`)
      gradient.addColorStop(0.1, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`)
      gradient.addColorStop(0.4, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`)
      gradient.addColorStop(0.6, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`)
      gradient.addColorStop(0.9, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`)
      gradient.addColorStop(1, `hsla(${beam.hue}, 85%, 65%, 0)`)

      ctx.fillStyle = gradient
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length)
      ctx.restore()
    }

    function animate() {
      if (!canvas || !ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.filter = "blur(35px)"

      const totalBeams = beamsRef.current.length
      beamsRef.current.forEach((beam, index) => {
        beam.y -= beam.speed
        beam.pulse += beam.pulseSpeed

        // Reset beam when it goes off screen
        if (beam.y + beam.length < -100) {
          resetBeam(beam, index, totalBeams)
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

  return (
    <div className={cn("relative min-h-screen w-full overflow-hidden bg-neutral-950", className)}>
      <canvas ref={canvasRef} className="absolute inset-0" style={{ filter: "blur(15px)" }} />

      <motion.div
        className="absolute inset-0 bg-neutral-950/5"
        animate={{
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
        }}
        style={{
          backdropFilter: "blur(50px)",
        }}
      />

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex gap-4 rounded-full backdrop-blur-md bg-white/10 border border-white/20 px-6 py-2">
          <button
            onClick={() => setActiveTab("companies")}
            className={`px-4 py-2 rounded-full transition-all ${
              activeTab === "companies" ? "bg-white/20 text-white" : "text-white/70 hover:text-white"
            }`}
          >
            Şirketlerimiz
          </button>
          <button
            onClick={() => setActiveTab("about")}
            className={`px-4 py-2 rounded-full transition-all ${
              activeTab === "about" ? "bg-white/20 text-white" : "text-white/70 hover:text-white"
            }`}
          >
            Hakkımızda
          </button>
          <button
            onClick={() => setActiveTab("contact")}
            className={`px-4 py-2 rounded-full transition-all ${
              activeTab === "contact" ? "bg-white/20 text-white" : "text-white/70 hover:text-white"
            }`}
          >
            İletişim
          </button>
        </div>
      </motion.nav>

      <div className="relative z-10 flex h-screen w-full flex-col items-center justify-center">
        <motion.div
          className="mb-16 flex flex-col items-center justify-center gap-4 px-8 text-center backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 shadow-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4">
            <motion.div
              className="rounded-full bg-white/20 p-3"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Globe className="h-10 w-10 text-white" />
            </motion.div>
            <h1 className="text-6xl font-bold tracking-tighter text-white md:text-7xl lg:text-8xl">TUNA GROUP</h1>
          </div>
          <p className="text-lg tracking-tighter text-white/70 md:text-2xl lg:text-3xl">Geleceği Şekillendiren Güç</p>
        </motion.div>

        {activeTab === "companies" && (
          <div className="grid w-full max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:gap-8">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                onHoverStart={() => setHoveredCompany(company.name)}
                onHoverEnd={() => setHoveredCompany(null)}
              >
                <Link href={company.url} passHref>
                  <motion.div
                    className={`flex cursor-pointer flex-col rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg overflow-hidden`}
                    whileHover={{
                      boxShadow: "0 0 25px rgba(255, 255, 255, 0.3)",
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                    }}
                  >
                    <div className="flex items-center gap-4 border-b border-white/10 p-4">
                      <motion.div
                        className={`rounded-full bg-gradient-to-r ${company.color} p-3 text-white`}
                        animate={{
                          scale: hoveredCompany === company.name ? [1, 1.1, 1] : 1,
                        }}
                        transition={{
                          duration: 1,
                          repeat: hoveredCompany === company.name ? Number.POSITIVE_INFINITY : 0,
                        }}
                      >
                        {company.icon}
                      </motion.div>
                      <div>
                        <motion.h2
                          className="text-2xl font-bold text-white"
                          animate={{
                            scale: hoveredCompany === company.name ? 1.05 : 1,
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {company.name}
                        </motion.h2>
                        <motion.p
                          className="text-white/80"
                          animate={{
                            opacity: hoveredCompany === company.name ? 1 : 0.8,
                          }}
                        >
                          {company.description}
                        </motion.p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="mb-2 text-sm font-medium text-white/70">Hizmetlerimiz</h3>
                      <ul className="grid grid-cols-2 gap-2">
                        {company.services.map((service, idx) => (
                          <li key={idx} className="flex items-center text-sm text-white/80">
                            <span className={`mr-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${company.color}`}></span>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <motion.div
                      className={`h-1 w-full bg-gradient-to-r ${company.color}`}
                      animate={{
                        opacity: hoveredCompany === company.name ? 1 : 0.5,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === "about" && (
          <motion.div
            className="w-full max-w-4xl backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 shadow-xl mx-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-6 text-3xl font-bold text-white">Hakkımızda</h2>
            <div className="space-y-4 text-white/80">
              <p>
                Tuna Group, 1985 yılında kurulmuş, teknoloji, inşaat, enerji ve finans sektörlerinde faaliyet gösteren
                çok uluslu bir holding şirketidir. Sürdürülebilir büyüme ve yenilikçi çözümler sunma vizyonuyla hareket
                eden grubumuz, 20'den fazla ülkede 10.000'in üzerinde çalışanı ile hizmet vermektedir.
              </p>
              <p>
                Misyonumuz, faaliyet gösterdiğimiz her alanda en yüksek kalite standartlarını koruyarak,
                müşterilerimize, çalışanlarımıza ve topluma değer katmaktır. Vizyonumuz ise, sürdürülebilir büyüme
                stratejileri ile global bir marka olmak ve gelecek nesillere daha iyi bir dünya bırakmaktır.
              </p>
              <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-3">
                <div className="rounded-lg bg-white/5 p-4 text-center">
                  <h3 className="text-4xl font-bold text-white">35+</h3>
                  <p className="text-white/70">Yıllık Deneyim</p>
                </div>
                <div className="rounded-lg bg-white/5 p-4 text-center">
                  <h3 className="text-4xl font-bold text-white">20+</h3>
                  <p className="text-white/70">Ülke</p>
                </div>
                <div className="rounded-lg bg-white/5 p-4 text-center">
                  <h3 className="text-4xl font-bold text-white">10K+</h3>
                  <p className="text-white/70">Çalışan</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "contact" && (
          <motion.div
            className="w-full max-w-4xl backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 shadow-xl mx-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-6 text-3xl font-bold text-white">İletişim</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-white/20 p-3">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Adres</h3>
                    <p className="text-white/70">Tuna Plaza, Levent Mah. Büyükdere Cad. No:123</p>
                    <p className="text-white/70">34330 Levent / İstanbul</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-white/20 p-3">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Telefon</h3>
                    <p className="text-white/70">+90 (212) 123 45 67</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-white/20 p-3">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">E-posta</h3>
                    <p className="text-white/70">info@tunagroup.com</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-white/5 p-6">
                <h3 className="mb-4 text-xl font-medium text-white">Bize Ulaşın</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Adınız"
                      className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white placeholder-white/50 backdrop-blur-sm focus:border-white/40 focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="E-posta Adresiniz"
                      className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white placeholder-white/50 backdrop-blur-sm focus:border-white/40 focus:outline-none"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Mesajınız"
                      rows={4}
                      className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white placeholder-white/50 backdrop-blur-sm focus:border-white/40 focus:outline-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 font-medium text-white transition-all hover:from-cyan-600 hover:to-blue-700"
                  >
                    Gönder
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          className="mt-16 text-center text-sm text-white/70 backdrop-blur-md bg-white/5 px-6 py-3 rounded-full border border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          © {new Date().getFullYear()} Tuna Group. Tüm Hakları Saklıdır.
        </motion.div>
      </div>
    </div>
  )
}
