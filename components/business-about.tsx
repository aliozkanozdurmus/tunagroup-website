"use client"

import { motion } from "motion/react"
import { Target, Lightbulb, Users, Award, Calendar, MapPin, TrendingUp, Globe } from "lucide-react"

export default function BusinessAbout() {
  const timeline = [
    {
      year: "1988",
      title: "Kuruluş",
      description: "Tuna Group'un temelleri atıldı, vizyon belirlendi.",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      year: "1995",
      title: "Büyüme",
      description: "İlk şirket kurulumları ve sektördeki yerini sağlamlaştırma.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      year: "2005",
      title: "Genişleme",
      description: "Uluslararası pazarlara açılma ve global strateji.",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      year: "2015",
      title: "İnovasyon",
      description: "Ar-Ge yatırımları ve teknolojik dönüşüm.",
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      year: "2023",
      title: "Liderlik",
      description: "Sektör lideri olma ve sürdürülebilir büyüme.",
      icon: <Award className="w-6 h-6" />,
    },
  ]

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Misyonumuz",
      description: "Müşterilerimize yenilikçi çözümler sunarak sektörde lider olmak, kaliteli ürün ve hizmetlerle değer yaratmak.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Vizyonumuz",
      description: "Global pazarda tercih edilen marka olmak, teknoloji ve inovasyonla geleceği şekillendirmek.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Değerlerimiz",
      description: "Güven, kalite, yenilik, müşteri odaklılık ve sürdürülebilirlik ilkeleriyle hareket ediyoruz.",
    },
  ]

  const achievements = [
    { number: "35+", label: "Yıllık Tecrübe" },
    { number: "4", label: "Şirket" },
    { number: "15+", label: "Ülke" },
    { number: "1000+", label: "Çalışan" },
    { number: "50+", label: "Ödül" },
    { number: "250M+", label: "Yıllık Ciro" },
  ]

  return (
    <section id="about" className="section-padding bg-white">
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
            Hakkımızda
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Başarı
            <span className="text-matte-blue-500">
              {" "}Hikayemiz
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            35 yıllık tecrübemizle sektörde lider olma yolculuğumuz
          </p>
        </motion.div>

        {/* Values Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-matte-blue-500 text-white mb-6`}>
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Timeline Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Tarihimiz
            </h3>
            <p className="text-xl text-gray-600">
              Kuruluşumuzdan günümüze uzanan başarı yolculuğu
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-matte-blue-500 rounded-full" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-1/2" />
                  
                  {/* Timeline Dot */}
                  <div className="w-12 h-12 bg-white border-4 border-matte-blue-500 rounded-full flex items-center justify-center z-10">
                    <div className="w-6 h-6 bg-matte-blue-500 rounded-full" />
                  </div>

                  {/* Content */}
                  <div className="w-1/2 px-8">
                    <div className={`business-card p-6 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-matte-blue-500 text-white mb-4 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                        {item.icon}
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">
                        {item.year}
                      </h4>
                      <h5 className="text-xl font-semibold text-gray-800 mb-3">
                        {item.title}
                      </h5>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Başarılarımız
            </h3>
            <p className="text-xl text-gray-600">
              Rakamlarla gücümüz
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="business-stat text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-matte-blue-500 rounded-3xl p-12 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-4">
            Bu Başarı Hikayesinde Siz de Yerinizi Alın
          </h3>
          <p className="text-xl mb-8 text-matte-blue-100 max-w-2xl mx-auto">
            Tuna Group ailesi olarak büyümeye devam ediyoruz. Sizi de bu başarı yolculuğunda görmekten mutluluk duyarız.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-business bg-white text-matte-blue-500 hover:bg-gray-100">
              Kariyer Fırsatları
            </button>
            <button className="btn-business bg-white/20 backdrop-blur-lg border border-white/30 text-white hover:bg-white/30">
              İş Birliği Yapın
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
