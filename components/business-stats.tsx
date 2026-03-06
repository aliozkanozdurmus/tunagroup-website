"use client"

import { motion } from "motion/react"
import { TrendingUp, Users, Globe, Award, Target, Zap } from "lucide-react"

export default function BusinessStats() {
  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "250M+",
      label: "Yıllık Ciro",
      description: "Sürdürülebilir büyüme",
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "1000+",
      label: "Profesyonel Çalışan",
      description: "Uzman kadromuz",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      value: "15+",
      label: "Ülke",
      description: "Global varlık",
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "50+",
      label: "Ödül ve Sertifika",
      description: "Kalite standardı",
    },
    {
      icon: <Target className="w-8 h-8" />,
      value: "95%",
      label: "Müşteri Memnuniyeti",
      description: "Güven esası",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      value: "24/7",
      label: "Destek",
      description: "Kesintisiz hizmet",
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-business">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-matte-blue-500/10 text-matte-blue-500 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-matte-blue-500 rounded-full mr-2 animate-pulse" />
            Rakamlarla Başarı
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            İnanılmaz
            <span className="text-matte-blue-500">
              {" "}Sonuçlar
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            35 yıllık tecrübemizle sektöre yön veriyor, inovasyonla sınırları aşıyoruz.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="business-card p-8 text-center group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-matte-blue-500 text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>

              {/* Value */}
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                {stat.value}
              </div>

              {/* Label */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-gray-600">
                {stat.description}
              </p>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-matte-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Bu başarı hikayesinde siz de yerinizi alın
          </p>
          <button className="btn-business btn-primary">
            İş Birliği Yapın
          </button>
        </motion.div>
      </div>
    </section>
  )
}
