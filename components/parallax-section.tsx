"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  imageUrl: string
  overlayOpacity?: number
  speed?: number
}

export default function ParallaxSection({
  children,
  className = "",
  imageUrl,
  overlayOpacity = 0.4,
  speed = 0.5,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          y,
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
          backgroundImage:
            "radial-gradient(rgba(0, 0, 0, 0.2) 1px, transparent 1px), radial-gradient(rgba(0, 0, 0, 0.2) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 10px 10px",
        }}
      ></div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
