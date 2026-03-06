import LuxuryPreloader from "@/components/luxury-preloader"
import LuxuryNavigation from "@/components/luxury-navigation"
import LuxuryHero from "@/components/luxury-hero"
import LuxuryAbout from "@/components/luxury-about"
import LuxuryStats from "@/components/luxury-stats"
import LuxuryVisionMission from "@/components/luxury-vision-mission"
import LuxuryValues from "@/components/luxury-values"
import LuxuryContact from "@/components/luxury-contact"
import LuxuryFooter from "@/components/luxury-footer"

export default function Home() {
  return (
    <>
      <LuxuryPreloader />
      <main className="min-h-screen bg-white">
        <LuxuryNavigation />
        <LuxuryHero />
        <LuxuryAbout />
        <LuxuryStats />
        <LuxuryVisionMission />
        <LuxuryValues />
        <LuxuryContact />
        <LuxuryFooter />
      </main>
    </>
  )
}
