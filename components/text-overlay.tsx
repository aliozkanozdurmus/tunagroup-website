"use client"

import type React from "react"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"

interface TextOverlayProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function TextOverlay({ children, className, delay = 0 }: TextOverlayProps) {
  return (
    <motion.div
      className={cn("relative inline-block text-white font-bold opacity-50", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-lg -z-10"></div>
    </motion.div>
  )
}
