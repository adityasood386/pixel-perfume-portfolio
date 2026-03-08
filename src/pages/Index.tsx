import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import PackagesSection from "@/components/PackagesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/config/siteConfig";

const Index = () => {
  useEffect(() => {
    document.title = siteConfig.seo.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", siteConfig.seo.description);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = siteConfig.seo.description;
      document.head.appendChild(newMeta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Floating ambient orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-primary/[0.03] blur-[100px] animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/3 -right-32 w-80 h-80 rounded-full bg-neon-cyan/[0.03] blur-[120px] animate-[float_10s_ease-in-out_infinite_2s]" />
        <div className="absolute top-2/3 left-1/3 w-48 h-48 rounded-full bg-neon-orange/[0.02] blur-[80px] animate-[float_12s_ease-in-out_infinite_4s]" />
      </div>
      <Navbar />
      <HeroSection />
      <GallerySection />
      <ServicesSection />
      <AboutSection />
      <PackagesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
