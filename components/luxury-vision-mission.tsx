"use client"

import { motion } from "motion/react"
import { Eye, Target, Lightbulb, Globe, Zap, Users } from "lucide-react"

export default function LuxuryVisionMission() {
  return (
    <section id="vizyon-misyon" className="py-12 lg:py-16 px-4 lg:px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 lg:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="divider-luxury" />
            <span className="text-corporate-600 text-sm font-medium uppercase tracking-wider">
              Hedeflerimiz
            </span>
            <div className="divider-luxury" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900">
            <span className="serif-italic text-corporate-700">Vizyon</span> & Misyon
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Vision Card */}
          <motion.div
            className="group relative bg-white p-6 lg:p-8 shadow-luxury-sm hover:shadow-luxury transition-all duration-500"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            {/* Icon */}
            <div className="w-12 h-12 bg-corporate-100 flex items-center justify-center mb-5 group-hover:bg-corporate-900 transition-colors duration-500">
              <Eye className="w-6 h-6 text-corporate-700 group-hover:text-white transition-colors duration-500" />
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              Vizyonumuz
            </h3>

            {/* Divider */}
            <div className="w-10 h-1 bg-corporate-600 mb-4" />

            {/* Content */}
            <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
              Sağlık teknolojileri ve endüstriyel üretim alanlarında, yenilikçi yaklaşımı ve sürdürülebilir üretim gücüyle bölgesel liderliği aşarak küresel ölçekte güven veren ve tercih edilen bir grup şirketi olmak; teknolojiyi, kaliteyi ve insan odaklı yönetimi bir araya getirerek sektörlere yön veren çözümler geliştirmek.
            </p>

            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-corporate-200 -mt-2 -mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-corporate-200 -mb-2 -ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="group relative bg-white p-6 lg:p-8 shadow-luxury-sm hover:shadow-luxury transition-all duration-500"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            {/* Icon */}
            <div className="w-12 h-12 bg-corporate-100 flex items-center justify-center mb-5 group-hover:bg-corporate-900 transition-colors duration-500">
              <Target className="w-6 h-6 text-corporate-700 group-hover:text-white transition-colors duration-500" />
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              Misyonumuz
            </h3>

            {/* Divider */}
            <div className="w-10 h-1 bg-corporate-600 mb-4" />

            {/* Content */}
            <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
              Sağlık teknolojileri ve endüstriyel üretim alanlarında, uluslararası kalite standartlarına uygun, güvenilir ve yenilikçi çözümler sunmak; sürdürülebilir üretim gücümüz, yetkin insan kaynağımız ve teknoloji odaklı yaklaşımımızla müşterilerimize sürekli değer yaratmak.
            </p>

            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-corporate-200 -mt-2 -mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-corporate-200 -mb-2 -ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </div>

        {/* Core Values Highlights */}
        <motion.div
          className="mt-8 lg:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { icon: Lightbulb, label: "Yenilikçilik" },
            { icon: Globe, label: "Küresel Vizyon" },
            { icon: Zap, label: "Teknoloji Odaklı" },
            { icon: Users, label: "İnsan Odaklı" },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              >
                <div className="w-11 h-11 mx-auto bg-corporate-100 flex items-center justify-center mb-2 group-hover:bg-corporate-900 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-corporate-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-gray-900 text-sm font-medium">{item.label}</div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}