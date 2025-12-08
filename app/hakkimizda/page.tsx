import LuxuryNavigation from "@/components/luxury-navigation"
import LuxuryAbout from "@/components/luxury-about"
import LuxuryFooter from "@/components/luxury-footer"

export const metadata = {
  title: "Hakkımızda - Tuna Group",
  description: "Tuna Group, 2000 yılından bu yana sağlık teknolojileri ve endüstriyel üretim alanlarında faaliyet gösteren çok sektörlü bir şirkettir.",
}

export default function HakkimizdaPage() {
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Hakkımızda</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            2000 yılından bu yana güvenin adresi
          </p>
        </div>
      </section>
      <LuxuryAbout />
      {/* Gallery Section */}
      <section className="py-16 lg:py-24 px-4 md:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 text-center">
            <span className="serif-italic text-corporate-700">Fotoğraf</span> Galerisi
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden group">
                <img 
                  src={`/images/pexels/gallery-${i}.jpg`} 
                  alt={`Galeri ${i}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-corporate-900/0 group-hover:bg-corporate-900/30 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <LuxuryFooter />
    </main>
  )
}