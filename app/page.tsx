import Preloader from "@/components/preloader"
import ModernNav from "@/components/modern-nav"
import HeroSlider from "@/components/hero-slider"
import AboutSection from "@/components/about-section"
import StatsSection from "@/components/stats-section"
import ValuesSection from "@/components/values-section"
import ContactSection from "@/components/contact-section"
import FooterSection from "@/components/footer-section"

export default function Home() {
  return (
    <>
      <Preloader />
      <main className="min-h-screen bg-white">
        <ModernNav />
        <HeroSlider />
        <AboutSection />
        <StatsSection />
        <ValuesSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  )
}
