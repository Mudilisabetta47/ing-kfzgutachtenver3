import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuickActions from "@/components/QuickActions";
import UnfallCTASection from "@/components/UnfallCTASection";
import IntroSection from "@/components/IntroSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InfoSection from "@/components/InfoSection";
import USPSection from "@/components/USPSection";
import RegionSection from "@/components/RegionSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <HeroSection />
    <QuickActions />
    <IntroSection />
    <ServicesSection />
    <ProcessSection />
    <UnfallCTASection />
    <USPSection />
    <TestimonialsSection />
    <InfoSection />
    <RegionSection />
    <FAQSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
