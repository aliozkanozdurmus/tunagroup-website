"use client"

import { motion } from "motion/react"
import { useState } from "react"
import { Briefcase, Users, GraduationCap, Heart, Send, Upload } from "lucide-react"
import LuxuryNavigation from "@/components/luxury-navigation"
import LuxuryFooter from "@/components/luxury-footer"

const benefits = [
  {
    icon: Briefcase,
    title: "Kariyer Gelişimi",
    description: "Sürekli eğitim ve mentorluk programları ile profesyonel gelişiminizi destekliyoruz."
  },
  {
    icon: Users,
    title: "Takım Çalışması",
    description: "Dinamik ve destekleyici bir çalışma ortamında birlikte büyüyoruz."
  },
  {
    icon: GraduationCap,
    title: "Eğitim Fırsatları",
    description: "Sektördeki en güncel teknolojiler ve uygulamalar hakkında sürekli eğitimler sunuyoruz."
  },
  {
    icon: Heart,
    title: "Çalışan Memnuniyeti",
    description: "Sosyal haklar, esnek çalışma ve iş-yaşam dengesi önceliklerimiz arasında."
  }
]

export default function KariyerPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    education: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-white">
      <LuxuryNavigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 lg:pt-24 lg:pb-16 bg-gradient-to-br from-corporate-900 via-corporate-800 to-corporate-950">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-corporate-400 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 lg:px-6 pt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Kariyer Fırsatları
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Tuna Group ailesine katılın ve geleceği birlikte şekillendirelim
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 lg:py-16 px-4 lg:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Neden Tuna Group?
            </h2>
            <p className="text-gray-600">
              Çalışanlarımıza sunduğumuz avantajlar
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={i}
                  className="bg-white p-5 border border-gray-100 hover:border-corporate-200 hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-10 h-10 bg-corporate-100 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-corporate-600" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-12 lg:py-16 px-4 lg:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Genel Başvuru Formu
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Şu an açık pozisyon olmaması sizi durdurmak zorunda değil. Yeteneklerinizi
                ve deneyimlerinizi paylaşın, uygun pozisyonlar açıldığında sizinle iletişime
                geçelim.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-corporate-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-corporate-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Başvurunuzu Gönderin</h4>
                    <p className="text-sm text-gray-600">Formu doldurun ve CV'nizi ekleyin</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-corporate-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-corporate-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Değerlendirme Süreci</h4>
                    <p className="text-sm text-gray-600">İK ekibimiz başvurunuzu inceler</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-corporate-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-corporate-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">İletişime Geçilir</h4>
                    <p className="text-sm text-gray-600">Uygun pozisyon için sizinle görüşürüz</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {submitted ? (
                <div className="bg-green-50 border border-green-200 p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Başvurunuz Alındı!</h3>
                  <p className="text-green-700 text-sm">
                    Başvurunuz başarıyla iletildi. İnsan Kaynakları ekibimiz en kısa sürede sizinle iletişime geçecektir.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Adınız Soyadınız *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-200 focus:border-corporate-500 focus:ring-2 focus:ring-corporate-100 outline-none transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        E-posta *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-200 focus:border-corporate-500 focus:ring-2 focus:ring-corporate-100 outline-none transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-200 focus:border-corporate-500 focus:ring-2 focus:ring-corporate-100 outline-none transition-all text-sm"
                        placeholder="+90 5XX XXX XX XX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        İlgilendiğiniz Pozisyon
                      </label>
                      <select
                        value={formData.position}
                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-200 focus:border-corporate-500 focus:ring-2 focus:ring-corporate-100 outline-none transition-all bg-white text-sm"
                      >
                        <option value="">Seçiniz</option>
                        <option value="muhendis">Mühendislik</option>
                        <option value="uretim">Üretim</option>
                        <option value="kalite">Kalite Kontrol</option>
                        <option value="satis">Satış & Pazarlama</option>
                        <option value="ik">İnsan Kaynakları</option>
                        <option value="finans">Finans & Muhasebe</option>
                        <option value="diger">Diğer</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Deneyim Süresi
                      </label>
                      <select
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-200 focus:border-corporate-500 focus:ring-2 focus:ring-corporate-100 outline-none transition-all bg-white text-sm"
                      >
                        <option value="">Seçiniz</option>
                        <option value="0-1">0-1 Yıl</option>
                        <option value="1-3">1-3 Yıl</option>
                        <option value="3-5">3-5 Yıl</option>
                        <option value="5-10">5-10 Yıl</option>
                        <option value="10+">10+ Yıl</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Eğitim Durumu
                      </label>
                      <select
                        value={formData.education}
                        onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-200 focus:border-corporate-500 focus:ring-2 focus:ring-corporate-100 outline-none transition-all bg-white text-sm"
                      >
                        <option value="">Seçiniz</option>
                        <option value="lise">Lise</option>
                        <option value="onlisans">Ön Lisans</option>
                        <option value="lisans">Lisans</option>
                        <option value="yukseklisans">Yüksek Lisans</option>
                        <option value="doktora">Doktora</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CV / Özgeçmiş
                    </label>
                    <div className="border-2 border-dashed border-gray-200 p-4 text-center hover:border-corporate-300 transition-colors cursor-pointer">
                      <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">CV'nizi buraya sürükleyin veya tıklayın</p>
                      <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Kendinizi Tanıtın
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-200 focus:border-corporate-500 focus:ring-2 focus:ring-corporate-100 outline-none transition-all resize-none text-sm"
                      placeholder="Kendiniz hakkında kısa bilgi, kariyer hedefleriniz..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-luxury flex items-center justify-center gap-2 disabled:opacity-50"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Gönderiliyor...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Başvuruyu Gönder
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <LuxuryFooter />
    </main>
  )
}