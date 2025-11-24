import { Shield, Zap, Award, Lock, TrendingDown, Building } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "100% Secure Digital Vault",
    description: "Bank-grade security with multi-layer encryption and 24/7 monitoring.",
  },
  {
    icon: Zap,
    title: "Instant Buy & Sell",
    description: "Execute transactions in seconds through our mobile app.",
  },
  {
    icon: TrendingDown,
    title: "Lowest Buying Charges",
    description: "Industry-leading pricing with transparent fee structure.",
  },
  {
    icon: Award,
    title: "24K 999 Purity Guaranteed",
    description: "Certified pure gold with authenticity verification.",
  },
  {
    icon: Lock,
    title: "Fully Insured Storage",
    description: "Complete insurance coverage for all stored gold.",
  },
  {
    icon: Building,
    title: "RBI-Compliant Custodian",
    description: "Regulated storage with trusted custodian partners.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold">
            Why Choose <span className="text-primary gold-text-glow">mspgold</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the future of gold investment with premium features designed for your security and convenience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 p-8 group hover:gold-glow-sm"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
