"use client"

import { motion } from "motion/react"
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react"
import Link from "next/link"
import LuxuryNavigation from "@/components/luxury-navigation"
import LuxuryFooter from "@/components/luxury-footer"

const newsArticles = [
  {
    id: 1,
    title: "Yapay Zeka Destekli Görüntüleme Teknolojileri Tıbbi Tanıda Devrim Yaratıyor",
    excerpt: "Derin öğrenme algoritmaları kullanılarak geliştirilen yeni nesil tıbbi görüntüleme sistemleri, radyologların tanı koyma süresini %40 oranında kısaltırken, doğruluk oranını %95'in üzerine çıkarıyor.",
    content: `Son yıllarda yapay zeka teknolojilerindeki gelişmeler, tıbbi görüntüleme alanında çığır açıcı yenilikler getirmektedir. Özellikle derin öğrenme (deep learning) algoritmalarının MR, BT ve röntgen görüntülerinin analizinde kullanılması, tanı süreçlerini önemli ölçüde hızlandırmış ve doğruluğunu artırmıştır.

Stanford Üniversitesi ve MIT'den araştırmacıların ortak çalışması sonucunda geliştirilen CXR-Net adlı sistem, göğüs röntgenlerinde 14 farklı patolojiyi %97.3 doğruluk oranıyla tespit edebilmektedir. Bu oran, deneyimli radyologların performansını aşmakta ve özellikle erken evrede kanser tespitinde kritik öneme sahip olmaktadır.

Konvolüsyonel sinir ağları (CNN) tabanlı bu sistemler, milyonlarca etiketlenmiş görüntü üzerinde eğitilmektedir. Transfer öğrenme teknikleri sayesinde, sınırlı veri setleriyle bile yüksek performans elde edilebilmektedir.

Türkiye'de de birçok üniversite hastanesi bu teknolojileri pilot projeler kapsamında test etmeye başlamıştır. TÜSEB (Türkiye Sağlık Enstitüleri Başkanlığı) koordinasyonunda yürütülen ulusal projeler, yerli yapay zeka çözümlerinin geliştirilmesini hedeflemektedir.`,
    date: "2024-12-05",
    readTime: "8 dk",
    category: "Tıbbi Teknoloji",
    image: "/images/pexels/stats-1.jpg"
  },
  {
    id: 2,
    title: "Biyolojik Olarak Parçalanabilen Polimerlerin Endüstriyel Ambalajda Kullanımı Artıyor",
    excerpt: "PLA ve PHA bazlı biyoplastikler, petrol türevli geleneksel plastiklere alternatif olarak gıda ambalajından medikal malzemelere kadar geniş bir alanda tercih edilmeye başlandı.",
    content: `Küresel plastik kirliliği sorununun çözümünde biyolojik olarak parçalanabilen polimerler kritik bir rol üstlenmektedir. Polilaktik asit (PLA) ve polihidroksialkanoatlar (PHA) gibi biyobazlı polimerler, sürdürülebilir ambalaj çözümleri için umut vaat etmektedir.

PLA, mısır nişastası veya şeker kamışı gibi yenilenebilir kaynaklardan üretilmektedir. Endüstriyel kompostlama koşullarında 12-16 hafta içinde tamamen parçalanabilmektedir. Bu özellik, özellikle tek kullanımlık ambalaj ürünlerinde büyük avantaj sağlamaktadır.

European Bioplastics verilerine göre, küresel biyoplastik üretim kapasitesi 2023'te 2.2 milyon tona ulaşmış olup, 2028'de 6.3 milyon tona çıkması beklenmektedir. Bu büyümede gıda ambalajı sektörü %47'lik payla lider konumdadır.

Türkiye'de de biyoplastik üretimi son 5 yılda 3 kat artış göstermiştir. TÜBİTAK MAM koordinasyonunda yürütülen AR-GE projeleri, yerli hammadde kaynaklarından (patates, buğday vb.) biyopolimer üretimini araştırmaktadır.`,
    date: "2024-11-28",
    readTime: "6 dk",
    category: "Sürdürülebilirlik",
    image: "/images/pexels/stats-4.jpg"
  },
  {
    id: 3,
    title: "ISO 13485:2016 Revizyonları ve Tıbbi Cihaz Üreticilerine Etkileri",
    excerpt: "Uluslararası tıbbi cihaz kalite yönetim standardı ISO 13485'in güncel yorumları, risk yönetimi ve yazılım doğrulama süreçlerinde önemli değişiklikler getiriyor.",
    content: `ISO 13485:2016 standardı, tıbbi cihaz üreticileri için kalite yönetim sisteminin temelini oluşturmaktadır. Son dönemde yayınlanan teknik düzeltmeler ve yorumlama belgeleri, özellikle yazılım içeren tıbbi cihazlar için kritik güncellemeler içermektedir.

Risk yönetimi konusunda ISO 14971:2019 ile uyumlu hale getirilen gereksinimler, tüm ürün yaşam döngüsü boyunca sistematik risk değerlendirmesi yapılmasını zorunlu kılmaktadır. FMEA (Hata Modu ve Etkileri Analizi) metodolojisinin uygulanması, tasarım aşamasından piyasaya arz sonrasına kadar belgelenmek zorundadır.

IEC 62304 standardı kapsamında yazılım geliştirme süreçleri de önemli güncellemeler almıştır. Sınıf C (hayati öneme sahip) yazılımlar için birim test, entegrasyon testi ve sistem testi aşamalarının %100 dokümantasyonu gerekmektedir.

Avrupa Birliği'nde MDR (Medical Device Regulation) 2017/745 ile birlikte değerlendirilen bu gereksinimler, Türkiye'de de TITUBB (Türkiye İlaç ve Tıbbi Cihaz Ulusal Bilgi Bankası) kayıt süreçlerini doğrudan etkilemektedir.`,
    date: "2024-11-15",
    readTime: "10 dk",
    category: "Kalite & Regülasyon",
    image: "/images/pexels/stats-2.jpg"
  }
]

export default function HaberlerPage() {
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
              Sektörel Haberler
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Tıbbi teknoloji ve endüstriyel üretim alanındaki güncel gelişmeler
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12 lg:py-16 px-4 lg:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 gap-6">
            {newsArticles.map((article, i) => (
              <motion.article
                key={article.id}
                className="bg-white border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3">
                  {/* Image */}
                  <div className="relative h-48 md:h-auto">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 bg-corporate-600 text-white px-2 py-1 text-xs font-medium">
                        <Tag className="w-3 h-3" />
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:col-span-2 p-5">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(article.date).toLocaleDateString('tr-TR', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime} okuma
                      </span>
                    </div>
                    
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      {article.title}
                    </h2>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    
                    <Link
                      href={`/haberler/${article.id}`}
                      className="inline-flex items-center gap-1 text-corporate-600 hover:text-corporate-700 font-medium text-sm transition-colors"
                    >
                      Devamını Oku
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Full Articles Section */}
      <section className="py-12 lg:py-16 px-4 lg:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Detaylı Makaleler
          </motion.h2>
          
          <div className="space-y-10">
            {newsArticles.map((article, i) => (
              <motion.div
                key={article.id}
                id={`makale-${article.id}`}
                className="border-b border-gray-100 pb-10 last:border-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span className="inline-flex items-center gap-1 bg-corporate-100 text-corporate-700 px-2 py-1 font-medium">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(article.date).toLocaleDateString('tr-TR', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  {article.title}
                </h3>
                
                <div className="prose prose-sm max-w-none text-gray-600">
                  {article.content.split('\n\n').map((paragraph, pi) => (
                    <p key={pi} className="mb-3 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <LuxuryFooter />
    </main>
  )
}