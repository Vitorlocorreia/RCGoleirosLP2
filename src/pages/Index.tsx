import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PlansSection from "@/components/PlansSection";
import FunnelSection from "@/components/FunnelSection";
import PromosSection from "@/components/PromosSection";
import SocialProofSection from "@/components/SocialProofSection";
import TrainersSection from "@/components/TrainersSection";
import LocationSection from "@/components/LocationSection";
import FooterSection from "@/components/FooterSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <FunnelSection />
      <PlansSection />
      <SocialProofSection />
      <TrainersSection />
      <PromosSection />
      <LocationSection />
      <FooterSection />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
