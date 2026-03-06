"use client"

import { motion } from "motion/react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { useState } from "react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Adres",
    content: "Başpınar OSB, Gaziantep",
    href: "https://maps.google.com/?q=Baspinar+OSB+Gaziantep"
  },
  {
    icon: Phone,
    title: "Telefon",
    content: "+90 342 360 98 55",
    href: "tel:+903423609855"
  },
  {
    icon: Mail,
    title: "E-posta",
    content: "info@tunagroup.com.tr",
    href: "mailto:info@tunagroup.com.tr"
  },
  {
    icon: Clock,
    title: "Çalışma Saatleri",
    content: "Pzt - Cuma: 08:00 - 18:00",
    href: null
  }
]

export default function LuxuryContact() {
  return (
    <section id="iletisim" className="py-12 lg:py-16 px-4 lg:px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="divider-luxury" />
            <span className="text-corporate-600 text-sm font-medium uppercase tracking-wider">
              Bize Ulaşın
            </span>
            <div className="divider-luxury" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            <span className="serif-italic text-corporate-700">İletişime</span> Geçin
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sorularınız ve talepleriniz için bizimle iletişime geçebilirsiniz
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:gap-12">
          {/* Contact Info Cards + Map */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {contactInfo.map((info, i) => {
                const Icon = info.icon
                const Content = info.href ? "a" : "div"
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Content
                      href={info.href || undefined}
                      target={info.href?.startsWith("http") ? "_blank" : undefined}
                      rel={info.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={`block bg-white p-4 border border-gray-100 hover:border-corporate-200 hover:shadow-luxury-sm transition-all duration-300 h-full ${info.href ? "cursor-pointer" : ""}`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-corporate-50 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-corporate-600" />
                        </div>
                        <div>
                          <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                            {info.title}
                          </h4>
                          <p className="text-gray-900 font-medium text-sm">{info.content}</p>
                        </div>
                      </div>
                    </Content>
                  </motion.div>
                )
              })}
            </div>

            {/* Google Maps Embed */}
            <motion.div
              className="overflow-hidden border border-gray-100 w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2922.161033565414!2d37.3230766!3d37.1816655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e0430a5baf29%3A0x9a60026c67744ad3!2sTuna%20Medikal!5e1!3m2!1str!2str!4v1765159367190!5m2!1str!2str"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tuna Group Konum"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}