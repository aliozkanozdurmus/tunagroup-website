"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import lottie, { type AnimationItem } from "lottie-web"

interface LottiePlayerProps {
  src: string
  className?: string
  loop?: boolean
  autoplay?: boolean
  style?: React.CSSProperties
}

export default function LottiePlayer({
  src,
  className = "",
  loop = true,
  autoplay = true,
  style = {},
}: LottiePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<AnimationItem | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    animationRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop,
      autoplay,
      path: src,
    })

    return () => {
      if (animationRef.current) {
        animationRef.current.destroy()
      }
    }
  }, [src, loop, autoplay])

  return <div ref={containerRef} className={className} style={style} />
}
