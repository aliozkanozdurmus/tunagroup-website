"use client"

import { motion } from "motion/react"
import { Cog, Shield, Users, Zap, Globe, Award } from "lucide-react"

export default function BusinessServices() {
  const services = [
    {
      icon: <Cog className="w-8 h-8" />,
      title: "İnovasyon ve Ar-Ge",
      description: "Sürekli Ar-Ge çalışmalarıyla sektörde öncü teknolojiler geliştiriyor, geleceği bugünden inşa ediyoruz.",
      features: ["Yenilikçi Ürünler", "Teknolojik Alt Yapı", "Uzman Kadro"],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Kalite Güvencesi",
      description: "Uluslararası kalite standartlarına uygun üretim yaparak müşterilerimize güven veriyoruz.",
      features: ["ISO Sertifikaları", "CE Belgelendirme", "Sürekli Denetim"],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Müşteri Odaklılık",
      description: "Müşteri memnuniyetini merkezine alan hizmet anlayışıyla uzun soluklu iş birlikleri kuruyoruz.",
      features: ["7/24 Destek", "Özel Çözümler", "Hızlı Geri Dönüş"],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Hızlı Teslimat",
      description: "Modern lojistik altyapımızla siparişlerinizi en kısa sürede güvenli şekilde ulaştırıyoruz.",
      features: ["Geniş Dağıtım Ağı", "Güvenli Paketleme", "Takip Sistemi"],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Standartlar",
      description: "Uluslararası pazarlarda rekabet edebilen ürün ve hizmetler sunarak global başarı hedefliyoruz.",
      features: ["İhracat Deneyimi", "Global Partner", "Çok Dilli Destek"],
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Sürdürülebilirlik",
      description: "Çevreye duyarlı üretim süreçleriyle gelecek nesillere yaşanabilir bir dünya bırakmayı hedefliyoruz.",
      features: ["Yeşil Üretim", "Geri Dönüşüm", "Enerji Verimliliği"],
    },
  ]

  return (
    <section id="services" className="section-padding bg-gray-50">
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
            Hizmetlerimiz
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sizi Başarıya
            <span className="text-matte-blue-500">
              {" "}Taşıyoruz
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kapsamlı hizmet yelpazemizle işletmenizin her ihtiyacına profesyonel çözümler sunuyoruz.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="business-card p-8 group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-matte-blue-500 text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className={`w-2 h-2 rounded-full bg-matte-blue-500 mr-3`} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className={`h-1 bg-matte-blue-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          className="bg-white rounded-3xl p-12 shadow-xl border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Çalışma Prensibimiz
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              İş birliğinden başarıya uzanan yolculuğumuz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Keşif", description: "İhtiyaç analizi ve hedef belirleme" },
              { step: "02", title: "Strateji", description: "Özel çözüm planları oluşturma" },
              { step: "03", title: "Uygulama", description: "Profesyonel ekip ile hayata geçirme" },
              { step: "04", title: "Destek", description: "Sürekli iyileştirme ve destek" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-matte-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
