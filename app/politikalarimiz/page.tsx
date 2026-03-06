"use client"

import { motion } from "motion/react"
import { useState } from "react"
import { Leaf, Shield, Heart, Award, ChevronDown } from "lucide-react"
import LuxuryNavigation from "@/components/luxury-navigation"
import LuxuryFooter from "@/components/luxury-footer"

const policies = [
  {
    id: "cevre",
    icon: Leaf,
    title: "Çevre Politikası",
    color: "bg-green-100 text-green-700",
    content: `Tuna Group olarak, çevresel sürdürülebilirliği iş stratejimizin ayrılmaz bir parçası olarak kabul ediyoruz. Tüm faaliyetlerimizde doğal kaynakların korunması, çevre kirliliğinin önlenmesi ve ekolojik dengenin sürdürülmesi temel önceliklerimiz arasındadır.

**Temel İlkelerimiz:**

• **Yasal Uyumluluk:** Ulusal ve uluslararası çevre mevzuatına tam uyum sağlamak ve gerektiğinde yasal gerekliliklerin ötesine geçmek.

• **Kaynak Verimliliği:** Enerji, su ve hammadde kullanımında verimliliği maksimize ederek doğal kaynak tüketimini minimize etmek.

• **Atık Yönetimi:** Üretim süreçlerinde oluşan atıkları kaynağında azaltmak, geri dönüşüm ve geri kazanım oranlarını sürekli artırmak.

• **Karbon Ayak İzi:** Sera gazı emisyonlarını izlemek, azaltmak ve uzun vadede karbon nötr olmayı hedeflemek.

• **Biyoçeşitlilik:** Faaliyet gösterdiğimiz bölgelerdeki biyoçeşitliliği korumak ve doğal yaşam alanlarına zarar vermemek.

• **Sürdürülebilir Tedarik:** Tedarik zincirimizde çevresel kriterleri göz önünde bulundurmak ve çevre dostu malzeme kullanımını teşvik etmek.

• **Sürekli İyileştirme:** ISO 14001 Çevre Yönetim Sistemi kapsamında çevre performansımızı düzenli olarak değerlendirmek ve sürekli iyileştirmek.

• **Farkındalık:** Çalışanlarımızı çevre konularında bilinçlendirmek ve toplumda çevre duyarlılığının artmasına katkıda bulunmak.

Bu politikayı tüm çalışanlarımız, tedarikçilerimiz, müşterilerimiz ve iş ortaklarımızla paylaşarak, birlikte daha yeşil bir gelecek için çalışıyoruz.`
  },
  {
    id: "isg",
    icon: Shield,
    title: "İş Sağlığı ve Güvenliği Politikası",
    color: "bg-blue-100 text-blue-700",
    content: `Tuna Group olarak, çalışanlarımızın sağlığı ve güvenliği en değerli varlığımızdır. "Önce İnsan" ilkesiyle, sıfır iş kazası ve meslek hastalığı hedefiyle çalışmalarımızı sürdürüyoruz.

**Temel İlkelerimiz:**

• **Risk Değerlendirmesi:** Tüm iş süreçlerinde proaktif risk değerlendirmesi yaparak potansiyel tehlikeleri önceden belirlemek ve önlemek.

• **Yasal Uyumluluk:** 6331 sayılı İş Sağlığı ve Güvenliği Kanunu ile ilgili tüm mevzuata tam uyum sağlamak.

• **Eğitim ve Bilinçlendirme:** Tüm çalışanlara düzenli İSG eğitimleri vermek ve güvenli çalışma kültürünü yaygınlaştırmak.

• **Kişisel Koruyucu Donanım:** Çalışanlarımıza uygun KKD'leri temin etmek ve doğru kullanımını sağlamak.

• **Acil Durum Hazırlığı:** Yangın, deprem ve diğer acil durumlar için kapsamlı planlar hazırlamak ve düzenli tatbikatlar gerçekleştirmek.

• **Ergonomi:** Çalışma ortamlarını ergonomik prensiplere göre düzenleyerek meslek hastalıklarını önlemek.

• **Sağlık Gözetimi:** Periyodik sağlık muayeneleri ile çalışanlarımızın sağlık durumunu izlemek.

• **Olay Bildirimi:** Ramak kala olaylar dahil tüm vakaların raporlanmasını teşvik etmek ve kök neden analizleri yapmak.

• **Sürekli İyileştirme:** ISO 45001 İş Sağlığı ve Güvenliği Yönetim Sistemi kapsamında performansımızı sürekli iyileştirmek.

• **Katılımcı Yaklaşım:** İSG kurulları ve çalışan temsilcileri aracılığıyla tüm paydaşların katılımını sağlamak.

Güvenli bir çalışma ortamı, kaliteli üretimin ve kurumsal başarının temel taşıdır.`
  },
  {
    id: "sosyal",
    icon: Heart,
    title: "Sosyal Politika",
    color: "bg-pink-100 text-pink-700",
    content: `Tuna Group olarak, toplumsal sorumluluğumuzu yerine getirmek ve sosyal değer yaratmak kurumsal kimliğimizin vazgeçilmez bir parçasıdır. İnsan haklarına saygı, fırsat eşitliği ve toplumsal kalkınma ilkelerini benimsiyoruz.

**Temel İlkelerimiz:**

• **İnsan Hakları:** Birleşmiş Milletler İnsan Hakları Evrensel Beyannamesi'ne uygun hareket etmek ve temel insan haklarını korumak.

• **Fırsat Eşitliği:** İşe alım, terfi ve tüm iş süreçlerinde cinsiyet, yaş, etnik köken, din veya engellilik durumuna bakılmaksızın eşit fırsatlar sunmak.

• **Çeşitlilik ve Kapsayıcılık:** Farklı bakış açılarını değer olarak görmek ve kapsayıcı bir çalışma ortamı yaratmak.

• **Çocuk ve Zorla Çalıştırma Yasağı:** Tedarik zinciri dahil tüm operasyonlarda çocuk işçiliği ve zorla çalıştırmaya kesinlikle tolerans göstermemek.

• **Adil Ücretlendirme:** Çalışanlarımıza piyasa koşullarına uygun, adil ve zamanında ödeme yapmak.

• **İş-Yaşam Dengesi:** Esnek çalışma imkanları ve sosyal aktivitelerle çalışanlarımızın iş-yaşam dengesini desteklemek.

• **Toplumsal Katkı:** Eğitim, sağlık ve çevre alanlarında sosyal sorumluluk projeleri yürütmek.

• **Yerel İstihdam:** Faaliyet gösterdiğimiz bölgelerde yerel istihdamı önceliklendirmek ve yerel ekonomiye katkıda bulunmak.

• **Paydaş Diyaloğu:** Yerel topluluklar, sivil toplum kuruluşları ve diğer paydaşlarla açık ve şeffaf iletişim kurmak.

• **Etik İş Yapma:** Her koşulda dürüst, şeffaf ve etik iş uygulamalarını benimsemek.

Sosyal sorumluluğumuz, sadece yasal zorunlulukları yerine getirmek değil, topluma gerçek değer katmaktır.`
  },
  {
    id: "kalite",
    icon: Award,
    title: "Kalite Politikası ve Yönetimsel Değerler",
    color: "bg-amber-100 text-amber-700",
    content: `Tuna Group olarak, kalite anlayışımız sadece ürün ve hizmetlerimizle sınırlı değildir; tüm iş süreçlerimizi ve kurumsal kültürümüzü kapsayan bütüncül bir yaklaşımdır. Uluslararası standartlarda üretim ve sürekli mükemmellik arayışı temel hedefimizdir.

**Kalite İlkelerimiz:**

• **Müşteri Odaklılık:** Müşteri beklentilerini anlamak, karşılamak ve aşmak; müşteri memnuniyetini sürekli ölçmek ve iyileştirmek.

• **Standart Uyumluluğu:** ISO 13485:2016 (Tıbbi Cihazlar), ISO 9001:2015 (Kalite Yönetimi) ve sektörel regülasyonlara tam uyum.

• **Süreç Yaklaşımı:** Tüm faaliyetlerimizi süreç temelli yönetmek ve süreçler arası etkileşimleri optimize etmek.

• **Veriye Dayalı Karar:** Ölçülebilir performans göstergeleri ile karar alma süreçlerini desteklemek.

• **Sürekli İyileştirme:** PDCA (Planla-Uygula-Kontrol Et-Önlem Al) döngüsü ile sürekli iyileştirme kültürünü yaşatmak.

**Yönetimsel Değerlerimiz:**

• **Liderlik:** Vizyon belirleyen, ilham veren ve örnek olan liderlik anlayışı.

• **Şeffaflık:** Tüm paydaşlarla açık, dürüst ve zamanında iletişim.

• **Hesap Verebilirlik:** Her seviyede sorumluluk bilinci ve hesap verebilirlik.

• **İnovasyon:** Yenilikçi düşünceyi teşvik etmek ve AR-GE yatırımlarına önem vermek.

• **Çalışan Katılımı:** Tüm çalışanların görüş ve önerilerine değer vermek, kararlara katılımını sağlamak.

• **Tedarikçi İlişkileri:** Tedarikçilerimizi iş ortağı olarak görmek ve birlikte gelişmek.

• **Sürdürülebilirlik:** Ekonomik, çevresel ve sosyal sürdürülebilirliği dengeli bir şekilde yönetmek.

Kalite, bir departmanın değil herkesin sorumluluğudur. Bu anlayışla, mükemmelliği günlük işlerimizin ayrılmaz bir parçası haline getiriyoruz.`
  }
]

export default function PolitikalarimizPage() {
  const [openPolicy, setOpenPolicy] = useState<string | null>("cevre")

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
              Politikalarımız
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Kurumsal değerlerimiz ve sürdürülebilirlik taahhütlerimiz
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Cards Overview */}
      <section className="py-12 lg:py-16 px-4 lg:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {policies.map((policy, i) => {
              const Icon = policy.icon
              return (
                <motion.button
                  key={policy.id}
                  onClick={() => setOpenPolicy(openPolicy === policy.id ? null : policy.id)}
                  className={`p-4 border text-left transition-all duration-300 ${
                    openPolicy === policy.id 
                      ? "bg-corporate-900 text-white border-corporate-900" 
                      : "bg-white border-gray-100 hover:border-corporate-200"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={`w-10 h-10 flex items-center justify-center mb-3 ${
                    openPolicy === policy.id ? "bg-white/10" : policy.color.split(' ')[0]
                  }`}>
                    <Icon className={`w-5 h-5 ${
                      openPolicy === policy.id ? "text-white" : policy.color.split(' ')[1]
                    }`} />
                  </div>
                  <h3 className={`text-sm font-semibold ${
                    openPolicy === policy.id ? "text-white" : "text-gray-900"
                  }`}>
                    {policy.title}
                  </h3>
                </motion.button>
              )
            })}
          </div>

          {/* Policy Content Accordion */}
          <div className="space-y-4">
            {policies.map((policy, i) => {
              const Icon = policy.icon
              const isOpen = openPolicy === policy.id
              
              return (
                <motion.div
                  key={policy.id}
                  className="bg-white border border-gray-100 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  {/* Header */}
                  <button
                    onClick={() => setOpenPolicy(isOpen ? null : policy.id)}
                    className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 flex items-center justify-center ${policy.color.split(' ')[0]}`}>
                        <Icon className={`w-5 h-5 ${policy.color.split(' ')[1]}`} />
                      </div>
                      <h3 className="text-base font-semibold text-gray-900">{policy.title}</h3>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`} />
                  </button>
                  
                  {/* Content */}
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-6 pt-2">
                      <div className="prose prose-sm max-w-none text-gray-600">
                        {policy.content.split('\n\n').map((paragraph, pi) => {
                          if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                            return (
                              <h4 key={pi} className="text-base font-semibold text-gray-900 mt-4 mb-2">
                                {paragraph.replace(/\*\*/g, '')}
                              </h4>
                            )
                          }
                          if (paragraph.includes('• **')) {
                            return (
                              <ul key={pi} className="space-y-2 my-3">
                                {paragraph.split('\n').filter(line => line.trim()).map((line, li) => {
                                  const match = line.match(/• \*\*(.+?)\*\*:?\s*(.*)/)
                                  if (match) {
                                    return (
                                      <li key={li} className="flex items-start gap-2 text-sm">
                                        <span className="w-1.5 h-1.5 bg-corporate-500 rounded-full mt-2 flex-shrink-0" />
                                        <span>
                                          <strong className="text-gray-800">{match[1]}:</strong> {match[2]}
                                        </span>
                                      </li>
                                    )
                                  }
                                  return null
                                })}
                              </ul>
                            )
                          }
                          return (
                            <p key={pi} className="mb-3 leading-relaxed text-sm">
                              {paragraph}
                            </p>
                          )
                        })}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 lg:py-16 px-4 lg:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Sertifikalarımız
            </h2>
            <p className="text-gray-600">
              Politikalarımızı destekleyen uluslararası akreditasyonlar
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "ISO 13485:2016", desc: "Tıbbi Cihaz Kalite Yönetimi" },
              { name: "ISO 9001:2015", desc: "Kalite Yönetim Sistemi" },
              { name: "ISO 14001:2015", desc: "Çevre Yönetim Sistemi" },
              { name: "ISO 45001:2018", desc: "İSG Yönetim Sistemi" }
            ].map((cert, i) => (
              <motion.div
                key={i}
                className="bg-gray-50 p-4 text-center border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-base font-bold text-corporate-700 mb-1">{cert.name}</div>
                <div className="text-xs text-gray-500">{cert.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <LuxuryFooter />
    </main>
  )
}