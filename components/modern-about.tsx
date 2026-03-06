"use client"

import { motion } from "motion/react"
import { Target, Eye, Award, Lightbulb } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To create sustainable value through strategic investments, operational excellence, and innovative solutions that positively impact communities and industries we serve."
  },
  {
    icon: Eye,
    title: "Vision",
    description: "To be a globally recognized holding company known for transforming industries through innovation, integrity, and sustainable business practices."
  },
  {
    icon: Award,
    title: "Values",
    description: "Integrity, innovation, excellence, sustainability, and social responsibility guide every decision we make and every relationship we build."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously invest in research, development, and emerging technologies to stay ahead of market trends and deliver cutting-edge solutions."
  },
]

export default function ModernAbout() {
  return (
    <section id="about" className="py-32 px-6 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-gray-900">
            <span className="serif-italic">About</span> Tuna Group
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            <span className="serif-italic">Founded with a vision</span> to transform industries through innovation and excellence, Tuna Group has grown into a diversified holding company with a strong presence across healthcare, manufacturing, technology, and strategic investments.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <span className="serif-italic">Our success is built</span> on a foundation of integrity, operational excellence, and a commitment to creating long-term value for our stakeholders. With a team of over 500 professionals and operations spanning 50+ countries, we continue to push boundaries and set new standards in every sector we operate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {values.map((value, i) => {
            const Icon = value.icon
            return (
              <motion.div
                key={i}
                className="p-8 bg-white border-2 border-gray-200 hover:border-gray-900 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Icon className="w-10 h-10 text-gray-900 mb-4" />
                <h3 className="text-2xl font-light text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="mt-20 p-12 bg-gray-900 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-light mb-6">Our Commitment to Sustainability</h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We believe in responsible business practices that balance economic growth with environmental stewardship and social responsibility. Our sustainability initiatives focus on reducing carbon footprint, promoting circular economy principles, and supporting community development programs.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
