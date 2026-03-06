"use client"

import { motion } from "motion/react"
import { ArrowDown } from "lucide-react"

export default function ModernHero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50" />
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%),
                         radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.3), transparent 50%),
                         radial-gradient(circle at 40% 20%, rgba(168, 85, 247, 0.2), transparent 50%)`
      }} />
      
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-sm text-gray-600">Shaping the Future of Business</span>
          </motion.div>
          
          <h1 className="text-7xl md:text-[10rem] font-light mb-8 text-gray-900 tracking-tight leading-none">
            Tuna Group
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-600 mb-6 font-light max-w-3xl mx-auto leading-relaxed">
            <span className="serif-italic">A diversified holding company</span> driving innovation across healthcare, manufacturing, and technology sectors
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12 max-w-3xl mx-auto">
            {[
              { name: "Tuna Sentetik", tag: "Manufacturing" },
              { name: "Tuna Medical", tag: "Healthcare" },
              { name: "Efe Tıp", tag: "Medical Devices" },
              { name: "Wellmed", tag: "Healthcare Solutions" },
            ].map((company, i) => (
              <motion.div
                key={i}
                className="px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-gray-900 transition-all cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-sm font-medium text-gray-900">{company.name}</div>
                <div className="text-xs text-gray-500">{company.tag}</div>
              </motion.div>
            ))}
          </div>
          
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            <span className="serif-italic">With over 25 years of excellence,</span> we create sustainable value through strategic investments and operational expertise
          </p>
          
          <div className="flex gap-4 justify-center">
            <motion.button
              className="px-8 py-4 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Companies
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-gray-300 text-gray-900 font-medium hover:border-gray-900 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </motion.div>
    </section>
  )
}
