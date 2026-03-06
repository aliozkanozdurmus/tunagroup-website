"use client"

import { motion } from "motion/react"
import { Heart, Factory, Cpu, TrendingUp, Users, Globe } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Healthcare & Medical",
    description: "Advanced medical devices, pharmaceutical solutions, and healthcare technology platforms serving hospitals and clinics worldwide.",
    areas: ["Medical Devices", "Pharmaceuticals", "Healthcare IT"]
  },
  {
    icon: Factory,
    title: "Industrial Manufacturing",
    description: "State-of-the-art manufacturing facilities producing high-quality industrial components and consumer products with sustainable practices.",
    areas: ["Precision Engineering", "Automation", "Quality Control"]
  },
  {
    icon: Cpu,
    title: "Technology & Innovation",
    description: "Cutting-edge software solutions, digital transformation services, and emerging technology investments driving industry evolution.",
    areas: ["Software Development", "AI & ML", "Digital Solutions"]
  },
  {
    icon: TrendingUp,
    title: "Strategic Investments",
    description: "Diversified portfolio management and strategic investments in high-growth sectors with focus on sustainable returns.",
    areas: ["Private Equity", "Venture Capital", "Asset Management"]
  },
  {
    icon: Users,
    title: "Business Consulting",
    description: "Expert advisory services helping organizations optimize operations, implement best practices, and achieve strategic objectives.",
    areas: ["Strategy", "Operations", "Change Management"]
  },
  {
    icon: Globe,
    title: "International Trade",
    description: "Global supply chain management and international trade operations connecting markets across continents with efficiency.",
    areas: ["Import/Export", "Logistics", "Distribution"]
  },
]

export default function ModernServices() {
  return (
    <section id="sectors" className="py-32 px-6 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-gray-900">
            <span className="serif-italic">Business</span> Sectors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <span className="serif-italic">We operate across diverse industries,</span> leveraging synergies and expertise to create value and drive sustainable growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={i}
                className="group p-8 border-2 border-gray-200 hover:border-gray-900 transition-all cursor-pointer bg-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Icon className="w-10 h-10 text-gray-900 mb-6" />
                <h3 className="text-2xl font-light text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.areas.map((area, idx) => (
                    <span key={idx} className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                      {area}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
