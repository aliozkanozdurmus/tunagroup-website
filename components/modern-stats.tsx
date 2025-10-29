"use client"

import { motion } from "motion/react"

const stats = [
  { value: "25+", label: "Years of Excellence" },
  { value: "500+", label: "Team Members" },
  { value: "10+", label: "Portfolio Companies" },
  { value: "50+", label: "Countries Served" },
]

export default function ModernStats() {
  return (
    <section id="impact" className="py-32 px-6 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-gray-900">
            <span className="serif-italic">Our</span> Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            <span className="serif-italic">Building a legacy</span> of innovation and sustainable growth across multiple industries
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-6xl md:text-7xl font-light text-gray-900 mb-4">{stat.value}</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
