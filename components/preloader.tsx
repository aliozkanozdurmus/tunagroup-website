"use client"

import { motion, AnimatePresence } from "motion/react"
import { useEffect, useState } from "react"

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [showVertical, setShowVertical] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      setShowVertical(true)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-7xl md:text-9xl font-light text-gray-900"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Tuna Group
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {showVertical && (
        <motion.div
          className="fixed right-8 top-1/2 -translate-y-1/2 z-50"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ writingMode: 'vertical-rl' }}
        >
          <div className="text-2xl font-light text-gray-400 tracking-widest">
            TUNA GROUP
          </div>
        </motion.div>
      )}
    </>
  )
}
