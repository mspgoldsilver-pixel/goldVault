import { Shield, Lock, FileCheck, Building } from "lucide-react";
import { Card } from "@/components/ui/card";
import vaultSecurity from "@/assets/vault-security.jpg";

const SecuritySection = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Secure Storage Facility",
      description: "State-of-the-art vault infrastructure with 24/7 surveillance",
    },
    {
      icon: Building,
      title: "Trusted Vault Partners",
      description: "Partnership with India's most secure custodian facilities",
    },
    {
      icon: FileCheck,
      title: "RBI Compliance",
      description: "Fully regulated and compliant with RBI guidelines",
    },
    {
      icon: Lock,
      title: "Insurance Guarantee",
      description: "Complete insurance coverage for all stored gold",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold">
            Security & <span className="text-primary gold-text-glow">Trust</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your gold is protected by industry-leading security measures and regulatory compliance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl"></div>
            <img
              src={vaultSecurity}
              alt="Secure Vault"
              className="relative rounded-2xl border-2 border-primary/30 w-full gold-glow"
            />
          </div>

          {/* Features */}
          <div className="space-y-6">
            {securityFeatures.map((feature, index) => (
              <Card
                key={index}
                className="bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 p-6 hover:gold-glow-sm"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["RBI Approved", "ISO Certified", "Fully Insured", "BIS Hallmarked"].map((badge, index) => (
            <div
              key={index}
              className="bg-card border-2 border-primary/30 rounded-xl p-6 text-center hover:border-primary/50 transition-colors"
            >
              <div className="text-4xl mb-2">✓</div>
              <div className="font-semibold text-primary">{badge}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
