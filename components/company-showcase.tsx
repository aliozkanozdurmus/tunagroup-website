"use client"

import { motion } from "motion/react"
import { ArrowRight, ExternalLink, Stethoscope, Package, Syringe, HeartPulse } from "lucide-react"

export default function CompanyShowcase() {
  const companies = [
    {
      name: "Tuna Medikal",
      tagline: "Sağlık Teknolojisinin Lideri",
      description: "Modern tıbbi cihaz üretimi ve satışı. Hastaneler ve sağlık kuruluşları için yenilikçi çözümler sunuyoruz.",
      icon: <Stethoscope className="w-8 h-8" />,
      image: "/images/medical-equipment.jpg",
      website: "https://tunamedikal.com",
      stats: [
        { label: "Ürün", value: "500+" },
        { label: "Hastane", value: "200+" },
        { label: "Yıl", value: "15+" },
      ],
      features: ["ISO 13485", "CE Belgeli", "24/7 Teknik Destek"],
    },
    {
      name: "Tuna Sentetik",
      tagline: "Endüstriyel Üretim Gücü",
      description: "Endüstriyel ve ticari sektörler için yüksek kaliteli polipropilen çuval üretimi. Sürdürülebilir çözümler sunuyoruz.",
      icon: <Package className="w-8 h-8" />,
      image: "/images/industrial-production.jpg",
      website: "https://tunasentetik.com",
      stats: [
        { label: "Yıllık Üretim", value: "10M+" },
        { label: "Çeşit", value: "50+" },
        { label: "Yıl", value: "20+" },
      ],
      features: ["Recyclable", "Custom Design", "Bulk Production"],
    },
    {
      name: "Efe Tıp",
      tagline: "Laboratuvar Çözümleri",
      description: "Modern laboratuvarların ihtiyaç duyduğu yüksek kaliteli malzeme ve ekipman tedariği. Bilimsel mükemmellik.",
      icon: <Syringe className="w-8 h-8" />,
      image: "/images/laboratory-equipment.jpg",
      website: "https://efetip.com",
      stats: [
        { label: "Ürün", value: "1000+" },
        { label: "Laboratuvar", value: "150+" },
        { label: "Yıl", value: "12+" },
      ],
      features: ["Quality Certified", "Wide Range", "Fast Delivery"],
    },
    {
      name: "Wellmed",
      tagline: "Medikal Hizmetler",
      description: "Sağlık kuruluşlarının ihtiyaç duyduğu medikal malzeme ve ekipman tedariği. Kapsamlı sağlık çözümleri.",
      icon: <HeartPulse className="w-8 h-8" />,
      image: "/images/medical-supplies.jpg",
      website: "https://wellmed.com",
      stats: [
        { label: "Ürün", value: "2000+" },
        { label: "Müşteri", value: "500+" },
        { label: "Yıl", value: "10+" },
      ],
      features: ["Premium Quality", "Complete Solutions", "Expert Support"],
    },
  ]

  return (
    <section id="companies" className="section-padding bg-white">
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
            Güçlü Şirketlerimiz
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sektör Lideri
            <span className="text-matte-blue-500">
              {" "}Markalarımız
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Her biri kendi alanında lider olan şirketlerimizle Türkiye ekonomisine güç katıyoruz.
          </p>
        </motion.div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="business-card h-full overflow-hidden">
                {/* Header */}
                <div className={`h-2 bg-matte-blue-500`} />
                
                <div className="p-8">
                  {/* Company Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-2xl bg-matte-blue-500 flex items-center justify-center text-white`}>
                        {company.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          {company.name}
                        </h3>
                        <p className="text-gray-600 font-medium">
                          {company.tagline}
                        </p>
                      </div>
                    </div>
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    {company.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {company.stats.map((stat, statIndex) => (
                      <div key={stat.label} className="text-center p-4 bg-gray-50 rounded-xl">
                        <div className="text-2xl font-bold text-gray-900 mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {company.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center w-full py-3 bg-matte-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group`}
                  >
                    Web Sitesini Ziyaret Edin
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-matte-blue-500 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Güçlü Bir Ekosistem
            </h3>
            <p className="text-xl mb-8 text-matte-blue-100 max-w-2xl mx-auto">
              Şirketlerimiz arasındaki sinerji ile müşterilerimize kapsamlı çözümler sunuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-business bg-white text-matte-blue-500 hover:bg-gray-100">
                Tüm Şirketler
              </button>
              <button className="btn-business bg-white/20 backdrop-blur-lg border border-white/30 text-white hover:bg-white/30">
                İş Birliği İmkanları
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
