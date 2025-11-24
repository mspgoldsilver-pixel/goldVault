import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroGold from "@/assets/hero-gold.jpg";
import appMockup from "@/assets/app-mockup.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroGold}
          alt="Premium Gold background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent"></div>
      </div>

      {/* Gold Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-card px-4 py-2 rounded-full border border-primary/20">
              <TrendingUp className="text-primary" size={16} />
              <span className="text-sm font-medium text-muted-foreground">Live Gold Price Updates</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
              Buy, Store &<br />
              <span className="text-primary gold-text-glow">Track Gold</span><br />
              Safely
            </h1>

            <p className="text-xl text-muted-foreground max-w-xl">
              Real-time gold prices and secure digital vault. Invest in 24K 999 purity gold with guaranteed authenticity and fully insured storage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 gold-glow-sm group">
                Track Live Price
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 font-semibold text-lg px-8">
                Download App
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Secure</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24K</div>
                <div className="text-sm text-muted-foreground">999 Purity</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">Certified</div>
                <div className="text-sm text-muted-foreground">Third-party audited</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">Insured</div>
                <div className="text-sm text-muted-foreground">Storage</div>
              </div>
            </div>
          </div>

          {/* Right Content - App Mockup */}
          <div className="relative animate-float hidden lg:block">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
            <img
              src={appMockup}
              alt="Mobile App mockup"
              className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
