"use client"

import { motion, AnimatePresence } from "motion/react"
import { useEffect, useState } from "react"

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [showVertical, setShowVertical] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsLoading(false)
            setShowVertical(true)
          }, 500)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-6xl md:text-8xl font-light text-gray-900 mb-8">
                TUNA GROUP
              </h1>
              <div className="w-64 h-px bg-gray-200 mx-auto mb-4">
                <motion.div
                  className="h-full bg-gray-900"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <p className="text-sm text-gray-400 tracking-widest">{progress}%</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {showVertical && (
        <motion.div
          className="fixed right-8 top-1/2 -translate-y-1/2 z-40"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ writingMode: 'vertical-rl' }}
        >
          <div className="text-sm font-light text-gray-400 tracking-[0.3em]">
            TUNA GROUP
          </div>
        </motion.div>
      )}
    </>
  )
}
