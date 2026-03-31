import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import IntroSection from "@/components/IntroSection";
import InfoSection from "@/components/InfoSection";
import USPSection from "@/components/USPSection";
import ProcessSection from "@/components/ProcessSection";
import RegionSection from "@/components/RegionSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <TopBar />
    <Header />
    <HeroSection />
    <ServicesSection />
    <IntroSection />
    <InfoSection />
    <USPSection />
    <ProcessSection />
    <RegionSection />
    <TestimonialsSection />
    <FAQSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
