"use client"

import { motion } from "motion/react"
import { Quote, Star } from "lucide-react"

export default function BusinessTestimonials() {
  const testimonials = [
    {
      name: "Dr. Mehmet Yılmaz",
      position: "Genel Müdür",
      company: "Anadolu Hastanesi",
      content: "Tuna Medikal ile çalıştığımız son 5 yılda, tıbbi cihaz kalitesinde ve hizmet anlayışında önemli bir fark gördük. 7/24 teknik destekleri sayesinde operasyonlarımız hiç aksamadı.",
      rating: 5,
      avatar: "/placeholder-user.jpg",
    },
    {
      name: "Ayşe Kaya",
      position: "Satın Alma Müdürü",
      company: "Tekstil A.Ş.",
      content: "Efe Sentetik'in ürettiği çuvallar hem kalitesi hem de dayanıklılığı konusunda rakipsiz. Lojistik destekleri ve teslimat hızları işimizi çok kolaylaştırdı.",
      rating: 5,
      avatar: "/placeholder-user.jpg",
    },
    {
      name: "Prof. Dr. Ahmet Demir",
      position: "Lab. Sorumlusu",
      company: "Ege Üniversitesi",
      content: "Efe Tıp'in laboratuvar malzemeleri kalitesi ve çeşitliliği araştırmalarımızda büyük kolaylık sağlıyor. Hızlı teslimat ve teknik destekleri için teşekkür ederiz.",
      rating: 5,
      avatar: "/placeholder-user.jpg",
    },
    {
      name: "Zeynep Öztürk",
      position: "CEO",
      company: "Medikal Group",
      content: "Wellmed ile iş birliğimiz başından beri çok verimli geçti. Ürün kalitesi, fiyat performansı ve müşteri hizmetleri konusunda sektörün en iyilerindeler.",
      rating: 5,
      avatar: "/placeholder-user.jpg",
    },
    {
      name: "Mustafa Çelik",
      position: "Operasyon Direktörü",
      company: "Lojistik Firması",
      content: "Tuna Group'un tüm şirketleriyle çalışma imkanı bulduk. Her bir alanında profesyonel ve çözüm odaklı yaklaşımları işimizi bir sonraki seviyeye taşıdı.",
      rating: 5,
      avatar: "/placeholder-user.jpg",
    },
    {
      name: "Elif Vural",
      position: "Ar-Ge Müdürü",
      company: "Teknoloji Ltd.",
      content: "İnovasyon ve Ar-Ge çalışmalarındaki başarılarını yakından gördük. Geliştirdikleri çözümler sektörde örnek alınması gereken nitelikte.",
      rating: 5,
      avatar: "/placeholder-user.jpg",
    },
  ]

  const partners = [
    { name: "Anadolu Hastanesi", logo: "/placeholder-logo.png" },
    { name: "Tekstil A.Ş.", logo: "/placeholder-logo.png" },
    { name: "Ege Üniversitesi", logo: "/placeholder-logo.png" },
    { name: "Medikal Group", logo: "/placeholder-logo.png" },
    { name: "Lojistik Firması", logo: "/placeholder-logo.png" },
    { name: "Teknoloji Ltd.", logo: "/placeholder-logo.png" },
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
            Müşteri Yorumları
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Müşterilerimiz
            <span className="text-matte-blue-500">
              {" "}Ne Diyor?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            35 yıllık tecrübemizle kazandığımız güven ve başarı hikayeleri
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="business-card p-8 relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-matte-blue-500/20 group-hover:text-matte-blue-500/30 transition-colors">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-matte-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.position} • {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-matte-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Partners Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white rounded-3xl p-12 shadow-lg border">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Güvenen İş Ortaklarımız
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-20 h-20 bg-gray-200 rounded-xl flex items-center justify-center group-hover:bg-gray-300 transition-colors">
                    <span className="text-gray-600 text-xs font-bold text-center">
                      {partner.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <div className="text-5xl font-bold text-gray-900 mb-2">
              98%
            </div>
            <p className="text-gray-600 font-medium">
              Müşteri Memnuniyeti
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-gray-900 mb-2">
              15+
            </div>
            <p className="text-gray-600 font-medium">
              Yıllık İş Birliği
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-gray-900 mb-2">
              500+
            </div>
            <p className="text-gray-600 font-medium">
              Mutlu Müşteri
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
