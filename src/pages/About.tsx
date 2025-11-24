import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";
import vaultSecurity from "@/assets/vault-security.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-5xl font-serif font-bold">
              About <span className="text-primary gold-text-glow">mspgold</span>
            </h1>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
              India's premier digital gold investment platform, making gold ownership accessible, secure, and transparent.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold">
                Our <span className="text-primary">Story</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Founded in 2020, mspgold was born from a simple vision: to democratize gold investment for every Indian. We recognized that traditional gold buying was complex, opaque, and often unsafe.
              </p>
              <p className="text-muted-foreground text-lg">
                Today, we've revolutionized how Indians invest in gold by combining cutting-edge technology with time-tested security measures. Our platform enables anyone to buy, store, and track gold investments with just a few taps on their smartphone.
              </p>
              <p className="text-muted-foreground text-lg">
                With over 50,000 satisfied customers and ₹500+ crores in gold under management, we're proud to be India's fastest-growing digital gold platform.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl"></div>
              <img
                src={vaultSecurity}
                alt="About mspgold"
                className="relative rounded-2xl border-2 border-primary/30 w-full gold-glow"
              />
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <Card className="bg-card border-primary/30 p-8 hover:gold-glow-sm transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Target className="text-primary" size={32} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-serif font-bold">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To make gold investment accessible, transparent, and secure for every Indian, regardless of their investment size or experience level. We believe everyone deserves the opportunity to own pure gold.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-card border-primary/30 p-8 hover:gold-glow-sm transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Eye className="text-primary" size={32} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-serif font-bold">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To become India's most trusted digital gold platform, setting the standard for security, transparency, and customer satisfaction in precious metals investment.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-4xl font-serif font-bold text-center mb-12">
              Our <span className="text-primary">Values</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card border-primary/20 p-8 text-center hover:border-primary/50 transition-all">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Trust & Transparency</h3>
                <p className="text-muted-foreground">
                  Complete transparency in pricing, fees, and operations. Your trust is our foundation.
                </p>
              </Card>

              <Card className="bg-card border-primary/20 p-8 text-center hover:border-primary/50 transition-all">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Security First</h3>
                <p className="text-muted-foreground">
                  Bank-grade security, insured storage, and RBI compliance in everything we do.
                </p>
              </Card>

              <Card className="bg-card border-primary/20 p-8 text-center hover:border-primary/50 transition-all">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer Obsession</h3>
                <p className="text-muted-foreground">
                  Your success is our success. We're committed to exceptional service and support.
                </p>
              </Card>
            </div>
          </div>

          {/* Stats */}
          <Card className="bg-card border-primary/30 p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">₹500Cr+</div>
                <div className="text-muted-foreground">Gold Under Management</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Secure Storage</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">4.8★</div>
                <div className="text-muted-foreground">Customer Rating</div>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
