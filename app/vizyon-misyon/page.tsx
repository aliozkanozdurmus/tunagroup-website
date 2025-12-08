import LuxuryNavigation from "@/components/luxury-navigation"
import LuxuryVisionMission from "@/components/luxury-vision-mission"
import LuxuryFooter from "@/components/luxury-footer"

export const metadata = {
  title: "Vizyon & Misyon - Tuna Group",
  description: "Sağlık teknolojileri ve endüstriyel üretim alanlarında küresel ölçekte güven veren ve tercih edilen bir grup şirketi olmak.",
}

export default function VizyonMisyonPage() {
  return (
    <main className="min-h-screen bg-white">
      <LuxuryNavigation />
      {/* Page Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/pexels/vision-bg.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-corporate-950/95 via-corporate-900/80 to-corporate-900/60" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Vizyon & Misyon</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Hedeflerimiz ve değerlerimizle geleceğe yön veriyoruz
          </p>
        </div>
      </section>
      <LuxuryVisionMission />
      {/* Additional Content */}
      <section className="py-16 lg:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
            <span className="serif-italic text-corporate-700">Stratejik</span> Yaklaşımımız
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 border-l-4 border-corporate-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kalite Odaklılık</h3>
              <p className="text-gray-600">
                Tüm süreçlerimizde uluslararası kalite standartlarını esas alıyor, sürekli iyileştirme prensibiyle hareket ediyoruz.
              </p>
            </div>
            <div className="p-6 bg-gray-50 border-l-4 border-corporate-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Yenilikçi Düşünce</h3>
              <p className="text-gray-600">
                Sektördeki gelişmeleri yakından takip ediyor, AR-GE yatırımlarımızla yenilikçi çözümler üretiyoruz.
              </p>
            </div>
            <div className="p-6 bg-gray-50 border-l-4 border-corporate-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Müşteri Memnuniyeti</h3>
              <p className="text-gray-600">
                Müşterilerimizin ihtiyaçlarını anlamak ve beklentilerini aşmak için çalışıyoruz.
              </p>
            </div>
            <div className="p-6 bg-gray-50 border-l-4 border-corporate-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sürdürülebilirlik</h3>
              <p className="text-gray-600">
                Çevreye duyarlı üretim süreçleri ve sosyal sorumluluk projeleriyle geleceğe katkı sağlıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>
      <LuxuryFooter />
    </main>
  )
}