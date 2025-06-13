"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "motion/react"
import { X } from "lucide-react"

interface CompanyCardProps {
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

export default function CompanyCard({
  name,
  description,
  icon,
  color,
  gradientFrom,
  gradientTo,
  image,
  details,
}: CompanyCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const glassCard = "bg-white/20 backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]"
  const glassCardHover = "hover:bg-white/30 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.15)]"

  return (
    <>
      <motion.div
        className={`${glassCard} p-8 rounded-2xl h-full transition-all duration-300 ${glassCardHover} group relative overflow-hidden cursor-pointer`}
        whileHover={{ y: -5, scale: 1.02 }}
        onClick={() => setIsModalOpen(true)}
      >
        {/* Işık yansıması efekti */}
        <div className="absolute -top-1 left-10 right-10 h-1 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-full"></div>

        {/* Arka plan renk efekti */}
        <div
          className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-r ${gradientFrom} ${gradientTo} opacity-20 blur-2xl transition-all duration-300 group-hover:opacity-30`}
        ></div>

        <div className="relative">
          <div
            className={`inline-block p-3 rounded-xl bg-gradient-to-r ${gradientFrom} ${gradientTo} mb-6 text-gray-700 backdrop-blur-xl shadow-lg`}
          >
            {icon}
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-gray-700">{name}</h3>
          <p className="text-gray-700">{description}</p>
          <div className="mt-6 flex items-center text-gray-600 font-medium group-hover:text-gray-500">
            <span>Daha Fazla Bilgi</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`${glassCard} relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl p-0`}
          >
            {/* Modal header with image */}
            <div className="relative h-64 overflow-hidden rounded-t-2xl">
              <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-xl p-2 rounded-full text-white hover:bg-white/40 transition-all"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-3xl font-bold text-white mb-2">{name}</h2>
                <p className="text-gray-200">{description}</p>
              </div>
            </div>

            {/* Modal content */}
            <div className="p-6">
              {details.map((detail, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{detail.title}</h3>
                  <p className="text-gray-700">{detail.content}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}
