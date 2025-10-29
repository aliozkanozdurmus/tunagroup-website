"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Phone, Mail, MapPin, Clock, Send, Building, User, MessageSquare } from "lucide-react"

export default function BusinessContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <Building className="w-6 h-6" />,
      title: "Genel Merkez",
      content: "BAŞPINAR(ORGANİZE)OSB MAH. O.S.B 3.BÖLGE KAMİL ŞERBETCİ BLV. NO: 39 ŞEHİTKAMİL/ GAZİANTEP",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefon",
      content: "+90 342 360 98 55",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-posta",
      content: "info@tunagroup.com.tr",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Çalışma Saatleri",
      content: "Pazartesi - Cuma: 08:00 - 18:00",
    },
  ]

  return (
    <section id="contact" className="section-padding bg-white">
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
            İletişim
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Bizimle
            <span className="text-matte-blue-500">
              {" "}İletişime Geçin
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sorularınız, talepleriniz ve iş birliği fırsatları için bizimle iletişime geçebilirsiniz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="business-card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Mesaj Gönderin
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Adınız Soyadınız
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-matte-blue-500 focus:border-transparent"
                        placeholder="Adınız Soyadınız"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      E-posta Adresiniz
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-matte-blue-500 focus:border-transparent"
                        placeholder="ornek@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Şirket/Firma
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-matte-blue-500 focus:border-transparent"
                      placeholder="Şirket/Firma Adınız"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Konu
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-matte-blue-500 focus:border-transparent"
                      placeholder="Mesajınızın konusu"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-matte-blue-500 focus:border-transparent resize-none"
                    placeholder="Mesajınızı buraya yazabilirsiniz..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-business btn-primary flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Mesajı Gönder
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Map */}
            <div className="business-card p-8 h-96 relative overflow-hidden">
              <div className="absolute inset-0 bg-gray-50">
                <MapPin className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-matte-blue-500" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-matte-blue-500/20 rounded-full animate-pulse" />
              </div>
              <div className="relative z-10 text-center">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Konumumuz
                </h4>
                <p className="text-gray-600">
                  Gaziantep / Türkiye
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="business-card p-6 flex items-start space-x-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-matte-blue-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {info.title}
                    </h4>
                    <p className="text-gray-600">
                      {info.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="bg-matte-blue-500 rounded-3xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">
                Hızlı Bağlantılar
              </h4>
              <div className="space-y-3">
                <a
                  href="tel:+903423609855"
                  className="flex items-center space-x-3 hover:text-matte-blue-200 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>Hemen Ara</span>
                </a>
                <a
                  href="mailto:info@tunagroup.com.tr"
                  className="flex items-center space-x-3 hover:text-matte-blue-200 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>E-posta Gönder</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
