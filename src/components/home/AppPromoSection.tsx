import { Download, Star, Shield, Zap, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import appMockup from "@/assets/app-mockup.png";

const features = [
  { icon: Star, text: "Real-time gold prices" },
  { icon: Zap, text: "Instant buy/sell" },
  { icon: Shield, text: "Secure vault" },
  { icon: Package, text: "Delivery options" },
];

const AppPromoSection = () => {
  return (
    <section className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - App Mockup */}
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
            <img 
              src={appMockup} 
              alt="Mobile App" 
              className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl"
            />
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif font-bold">
                Invest in Gold<br />
                <span className="text-primary gold-text-glow">Anytime, Anywhere</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Experience seamless gold investment with our powerful mobile app. Buy, sell, and track your gold portfolio on the go.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-card p-4 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors"
                >
                  <feature.icon className="text-primary" size={24} />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="space-y-4">
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 gold-glow-sm">
                <Download className="mr-2" size={20} />
                Get the App
              </Button>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="flex items-center space-x-3 bg-card border border-primary/30 rounded-lg px-6 py-3 hover:border-primary/50 transition-colors"
                >
                  <div className="text-3xl">📱</div>
                  <div>
                    <div className="text-xs text-muted-foreground">Download on</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 bg-card border border-primary/30 rounded-lg px-6 py-3 hover:border-primary/50 transition-colors"
                >
                  <div className="text-3xl">🤖</div>
                  <div>
                    <div className="text-xs text-muted-foreground">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Downloads</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">4.8★</div>
                <div className="text-sm text-muted-foreground">App Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">25K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromoSection;
