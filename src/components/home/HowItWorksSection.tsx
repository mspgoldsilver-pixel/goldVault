import { Search, Smartphone, Package } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Check Live Price",
    description: "View real-time gold prices and market trends anytime.",
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Buy Gold in App",
    description: "Download our app and make instant purchases securely.",
  },
  {
    number: "03",
    icon: Package,
    title: "Store or Deliver",
    description: "Keep in secure vault or request physical delivery.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold">
            How It <span className="text-primary gold-text-glow">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Start your gold investment journey in three simple steps.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-1/2 w-full h-0.5 bg-primary/20"></div>
                )}

                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  {/* Number Badge */}
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold gold-glow">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center">
                    <step.icon className="text-primary" size={36} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground max-w-xs">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
