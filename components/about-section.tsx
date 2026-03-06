"use client"

import { motion } from "motion/react"

export default function AboutSection() {
  return (
    <section id="hakkimizda" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-light mb-8 text-gray-900">
            <span className="serif-italic">Hakkımızda</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">
            TUNA ŞİRKETLER GRUBU olarak 1984 yılından bu yana sentetik dokuma kumaş ve çuval sektöründe kaliteli üretim yaparak sektörün öncülerinden biri olmayı başardık.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="h-full">
              <img 
                src="https://images.pexels.com/photos/859265/pexels-photo-859265.jpeg" 
                alt="TUNA GROUP" 
                className="w-full h-full object-cover min-h-[400px]"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-light mb-6 text-gray-900">
              <span className="serif-italic">TUNA GROUP</span> Hikayesi
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              TUNA ŞİRKETLER GRUBU'nun ilk temelleri 1984 yılında HUZEYFE DURMAZ tarafından atılmış, TUNA GROUP faaliyetine sentetik dokuma kumaş ve çuval sektöründe üretim yaparak başlamıştır.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Ülkesine ve çalışanlarına fayda sağlamayı amaçlayan TUNA GROUP, sistemini sürekli yenilemeye ve iyileştirmeye yönelik şirket kültürünü yaratarak, teknolojide değişimi ve gelişimi izleyerek yeni yatırımlar belirleyerek pazarda etkin pay sahibi olmak için çalışmalarını sürdürmektedir.
            </p>
            <p className="text-gray-600 leading-relaxed">
              40 yılı aşkın deneyimimizle, müşteri memnuniyetini ön planda tutarak, endüstriyel ve ticari sektörlerin ihtiyaçlarına uygun yüksek kaliteli PP çuval üretimi gerçekleştirmekteyiz.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="p-8 border-2 border-gray-200">
            <h4 className="text-xl font-light mb-4 text-gray-900">Misyonumuz</h4>
            <p className="text-gray-600 leading-relaxed">
              Endüstriyel ve ticari sektörlerin ihtiyaçlarına uygun, yüksek kaliteli PP çuval üretimi gerçekleştirmek. Müşteri memnuniyetini ön planda tutarak, üretim süreçlerimize en son teknolojik yenilikleri entegre etmek.
            </p>
          </div>

          <div className="p-8 border-2 border-gray-200">
            <h4 className="text-xl font-light mb-4 text-gray-900">Vizyonumuz</h4>
            <p className="text-gray-600 leading-relaxed">
              Sentetik dokuma kumaş ve çuval üretiminde ulusal ve uluslararası pazarda lider konuma gelerek, yenilikçi ürünler ve sürdürülebilir üretim anlayışıyla sektöre yön veren bir firma olmak.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
