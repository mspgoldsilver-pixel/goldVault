import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import LivePriceSection from "@/components/home/LivePriceSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import AppPromoSection from "@/components/home/AppPromoSection";
import SecuritySection from "@/components/home/SecuritySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <LivePriceSection />
      <FeaturesSection />
      <HowItWorksSection />
      <AppPromoSection />
      <SecuritySection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
