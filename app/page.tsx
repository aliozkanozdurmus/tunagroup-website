import Preloader from "@/components/preloader"
import ModernNav from "@/components/modern-nav"
import ModernHero from "@/components/modern-hero"
import ModernStats from "@/components/modern-stats"
import ModernServices from "@/components/modern-services"
import ModernAbout from "@/components/modern-about"
import ModernContact from "@/components/modern-contact"
import ModernFooter from "@/components/modern-footer"

export default function Home() {
  return (
    <>
      <Preloader />
      <main className="min-h-screen bg-white">
        <ModernNav />
        <ModernHero />
        <ModernStats />
        <ModernServices />
        <ModernAbout />
        <ModernContact />
        <ModernFooter />
      </main>
    </>
  )
}
