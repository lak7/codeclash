import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import TracksSection from "@/components/tracks-section";
import ExpectationsSection from "@/components/expectations-section";
import PerksSection from "@/components/perks-section";
import SponsorsSection from "@/components/sponsors-section";
import ParticipationSection from "@/components/participation-section";
import PrizePoolSection from "@/components/prize-pool-section";
import Footer from "@/components/footer";
import TeamGrid from "@/components/team-grid";
import WhatsAppButton from "@/components/whatsapp-button";
import Navbar from "@/components/navbar";
// import RegistrationSection from "@/components/registration-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Tracks Section */}
      <TracksSection />

      {/* Prize Pool Section */}
      <PrizePoolSection />

      {/* Sponsors Section */}
      <SponsorsSection />

      {/* Team Section */}
      <TeamGrid />

      {/* Expectations Section */}
      <ExpectationsSection />

      {/* Perks Section */}
      <PerksSection />

      {/* Participation Section */}
      <ParticipationSection />

      {/* Registration Section (Uncomment when ready to activate) */}
      {/* <RegistrationSection /> */}

      {/* Powered by Unstop Section */}
      <section className="w-full py-12 px-6 bg-black border-t border-pink-900/20">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center space-y-4">
            <p className="text-gray-400 text-sm font-medium">Powered by</p>
            <div className="flex items-center justify-center">
              <img
                src="/unstop-white.png"
                alt="Unstop"
                className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity duration-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </main>
  );
}
