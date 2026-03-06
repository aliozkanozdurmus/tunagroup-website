import LuxuryNavigation from "@/components/luxury-navigation"
import LuxuryValues from "@/components/luxury-values"
import LuxuryFooter from "@/components/luxury-footer"

export const metadata = {
  title: "Değerlerimiz - Tuna Group",
  description: "ISO 13485:2016 standartlarında üretim, CE sertifikası, uzman ekip ve sürdürülebilir üretim ile sektörde fark yaratıyoruz.",
}

export default function DegerlerimizPage() {
  return (
    <main className="min-h-screen bg-white">
      <LuxuryNavigation />
      {/* Page Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/pexels/values-bg.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-corporate-950/95 via-corporate-900/80 to-corporate-900/60" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Değerlerimiz</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Güçlü yanlarımız ve rekabet avantajlarımız
          </p>
        </div>
      </section>
      <LuxuryValues />
      {/* Certifications Section */}
      <section className="py-16 lg:py-24 px-4 md:px-6 bg-corporate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-12 text-center">
            <span className="serif-italic text-corporate-300">Sertifikalarımız</span> & Belgelerimiz
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "ISO 13485:2016", desc: "Tıbbi Cihaz Kalite Yönetim Sistemi" },
              { title: "CE Belgesi", desc: "EU MDR 2017/745 Uyumlu" },
              { title: "ISO 9001:2015", desc: "Kalite Yönetim Sistemi" },
              { title: "TSE Belgesi", desc: "Türk Standartları Enstitüsü" },
            ].map((cert, i) => (
              <div key={i} className="text-center p-6 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-corporate-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{cert.title.split(' ')[0]}</span>
                </div>
                <h3 className="text-white font-semibold mb-2">{cert.title}</h3>
                <p className="text-white/60 text-sm">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-16 lg:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center">
            <span className="serif-italic text-corporate-700">Üretim</span> Sürecimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Tasarım", desc: "Müşteri ihtiyaçlarına göre ürün tasarımı" },
              { step: "02", title: "Üretim", desc: "ISO standartlarında üretim" },
              { step: "03", title: "Kalite Kontrol", desc: "Titiz kalite kontrol süreçleri" },
              { step: "04", title: "Teslimat", desc: "Güvenli ve hızlı teslimat" },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-bold text-corporate-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 text-corporate-300">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <LuxuryFooter />
    </main>
  )
}