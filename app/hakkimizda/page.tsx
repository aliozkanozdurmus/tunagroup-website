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
      <LuxuryFooter />
    </main>
  )
}