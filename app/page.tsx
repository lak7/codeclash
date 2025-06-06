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
    <main className="flex min-h-screen flex-col bg-black text-white overflow-hidden pt-16">
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

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </main>
  );
}
