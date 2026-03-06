"use client"

import { useEffect, useState } from "react"
import LottiePlayer from "./lottie-player"

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 z-30 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <LottiePlayer src="/lottie/scroll-down.json" className="w-20 h-20" />
    </div>
  )
}
