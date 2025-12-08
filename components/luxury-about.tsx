"use client"

import { motion } from "motion/react"
import Link from "next/link"

export default function LuxuryAbout() {
  return (
    <section id="hakkimizda" className="py-12 lg:py-16 px-4 lg:px-6 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Section Label */}
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="divider-luxury" />
              <span className="text-corporate-600 text-sm font-medium uppercase tracking-wider">
                Hakkımızda
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="serif-italic text-corporate-700">2000</span>'den Bu Yana
              <br />
              <span className="font-semibold">Güvenin Adresi</span>
            </motion.h2>

            {/* Description */}
            <motion.div
              className="space-y-4 text-gray-600 leading-relaxed text-sm lg:text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                <strong className="text-gray-900">Tuna Group</strong>, 2000 yılından bu yana sağlık teknolojileri ve 
                endüstriyel üretim alanlarında faaliyet gösteren çok sektörlü bir şirkettir. 
                Dünya markalarının distribütörlüğünü yürütürken, kendi üretimiyle yenilikçi 
                ve sürdürülebilir çözümler sunmaktadır.
              </p>
              
              <p>
                Sağlık teknolojilerinde <strong className="text-corporate-700">ISO 13485:2016</strong> standartlarında 
                üretim yapan ve <strong className="text-corporate-700">EU MDR</strong> kapsamında CE sertifikalı ürünler 
                geliştiren Tuna Group, ulusal ve uluslararası pazarlarda güvenle tercih edilmektedir.
              </p>
              
              <p>
                Ambalaj ve çuval üretimini bünyesine katarak endüstriyel çözümler alanında da 
                güçlü bir yapıya kavuşmuştur. Çevre dostu ve dayanıklı ürünleri birçok sektör 
                tarafından kullanılmaktadır.
              </p>
              
              <p>
                Uzman ekibi, büyüyen üretim kapasitesi ve güçlü iş ortaklıklarıyla Tuna Group; 
                sağlık teknolojilerinden endüstriyel ambalaja uzanan geniş bir alanda değer 
                üretmeye devam etmektedir.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/hakkimizda"
                className="btn-luxury inline-block"
              >
                Detaylı Bilgi
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {/* Main Image */}
            <div className="relative z-10">
              <div className="relative overflow-hidden">
                <motion.img
                  src="/images/pexels/about-medical.jpg"
                  alt="Tuna Group - Sağlık Teknolojileri"
                  className="w-full h-[300px] lg:h-[400px] object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-corporate-900/30 to-transparent" />
              </div>
              
              {/* Image Badge */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-corporate-900 text-white p-4 lg:p-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="text-3xl lg:text-4xl font-bold mb-1">24+</div>
                <div className="text-xs lg:text-sm text-white/80 uppercase tracking-wider">Yıllık Tecrübe</div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-corporate-200 -z-10" />
            <motion.div
              className="absolute -bottom-8 -right-8 w-32 h-32 bg-corporate-100 -z-20"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-10 border-t border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { label: "ISO 13485:2016", desc: "Kalite Yönetim Sistemi" },
            { label: "CE Sertifikası", desc: "EU MDR Uyumlu" },
            { label: "Distribütörlük", desc: "Dünya Markaları" },
            { label: "Sürdürülebilir", desc: "Çevre Dostu Üretim" },
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="text-center p-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <div className="text-base md:text-lg font-semibold text-corporate-900 mb-1">
                {feature.label}
              </div>
              <div className="text-xs text-gray-500">{feature.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}