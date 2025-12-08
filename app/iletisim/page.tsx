import LuxuryNavigation from "@/components/luxury-navigation"
import LuxuryContact from "@/components/luxury-contact"
import LuxuryFooter from "@/components/luxury-footer"

export const metadata = {
  title: "İletişim - Tuna Group",
  description: "Tuna Group ile iletişime geçin. Başpınar OSB, Gaziantep. Tel: +90 342 360 98 55",
}

export default function IletisimPage() {
  return (
    <main className="min-h-screen bg-white">
      <LuxuryNavigation />
      {/* Page Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/pexels/gallery-6.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-corporate-950/95 via-corporate-900/80 to-corporate-900/60" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">İletişim</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Sorularınız için bizimle iletişime geçin
          </p>
        </div>
      </section>
      <LuxuryContact />
      {/* FAQ Section */}
      <section className="py-16 lg:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center">
            <span className="serif-italic text-corporate-700">Sıkça</span> Sorulan Sorular
          </h2>
          <div className="space-y-6">
            {[
              { 
                q: "Ürünleriniz hangi sertifikalara sahip?", 
                a: "Ürünlerimiz ISO 13485:2016 standartlarında üretilmekte olup, EU MDR kapsamında CE sertifikasına sahiptir." 
              },
              { 
                q: "Hangi sektörlere hizmet veriyorsunuz?", 
                a: "Sağlık teknolojileri, tıbbi cihazlar, endüstriyel ambalaj ve çuval üretimi alanlarında hizmet vermekteyiz." 
              },
              { 
                q: "Minimum sipariş miktarı nedir?", 
                a: "Ürün grubuna göre minimum sipariş miktarları değişiklik göstermektedir. Detaylı bilgi için bizimle iletişime geçebilirsiniz." 
              },
              { 
                q: "Teslimat süreniz ne kadardır?", 
                a: "Standart ürünler için 1-2 hafta, özel üretim ürünler için 3-4 hafta teslimat süresi öngörülmektedir." 
              },
            ].map((faq, i) => (
              <div key={i} className="border border-gray-200 p-6 hover:border-corporate-200 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <LuxuryFooter />
    </main>
  )
}