import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import ServicesSection from "@/components/ServicesSection";
import InfoSection from "@/components/InfoSection";
import USPSection from "@/components/USPSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <TopBar />
    <Header />
    <HeroSection />
    <IntroSection />
    <ServicesSection />
    <InfoSection />
    <USPSection />
    <ProcessSection />
    <FAQSection />
    <TestimonialsSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
