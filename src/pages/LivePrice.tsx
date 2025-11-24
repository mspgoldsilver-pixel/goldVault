import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Clock, Download } from "lucide-react";

const LivePrice = () => {
  const [selectedKarat, setSelectedKarat] = useState<"24k" | "22k" | "18k">("24k");

  const priceData = {
    "24k": {
      per10g: "₹65,420",
      per1g: "₹6,542",
      change: "+2.3%",
      isUp: true,
    },
    "22k": {
      per10g: "₹59,970",
      per1g: "₹5,997",
      change: "+2.1%",
      isUp: true,
    },
    "18k": {
      per10g: "₹49,065",
      per1g: "₹4,906",
      change: "-0.5%",
      isUp: false,
    },
  };

  const cityPrices = [
    { city: "Mumbai", price24k: "₹6,542", price22k: "₹5,997" },
    { city: "Delhi", price24k: "₹6,540", price22k: "₹5,995" },
    { city: "Bangalore", price24k: "₹6,545", price22k: "₹6,000" },
    { city: "Chennai", price24k: "₹6,543", price22k: "₹5,998" },
    { city: "Kolkata", price24k: "₹6,541", price22k: "₹5,996" },
    { city: "Hyderabad", price24k: "₹6,544", price22k: "₹5,999" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-5xl font-serif font-bold">
              Live <span className="text-primary gold-text-glow">Gold Price</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Real-time gold rates updated every minute across India
            </p>
          </div>

          {/* Main Price Card */}
          <div className="max-w-5xl mx-auto mb-12">
            <Card className="bg-card border-primary/30 gold-glow p-8">
              {/* Karat Selection */}
              <div className="flex justify-center space-x-4 mb-8">
                {(["24k", "22k", "18k"] as const).map((karat) => (
                  <Button
                    key={karat}
                    variant={selectedKarat === karat ? "default" : "outline"}
                    className={selectedKarat === karat ? "bg-primary hover:bg-primary/90" : "border-primary/50"}
                    onClick={() => setSelectedKarat(karat)}
                  >
                    {karat.toUpperCase()} Gold
                  </Button>
                ))}
              </div>

              {/* Price Display */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-center space-y-2">
                  <div className="text-sm text-muted-foreground">Per 10 Grams</div>
                  <div className="text-6xl font-bold text-primary gold-text-glow">
                    {priceData[selectedKarat].per10g}
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-sm text-muted-foreground">Per 1 Gram</div>
                  <div className="text-6xl font-bold text-primary gold-text-glow">
                    {priceData[selectedKarat].per1g}
                  </div>
                </div>
              </div>

              {/* Change Indicator & Update Time */}
              <div className="flex flex-col items-center space-y-4">
                <div className={`flex items-center space-x-2 px-6 py-3 rounded-full ${
                  priceData[selectedKarat].isUp ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                }`}>
                  {priceData[selectedKarat].isUp ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
                  <span className="font-semibold text-lg">{priceData[selectedKarat].change}</span>
                  <span className="text-sm opacity-80">Today</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Clock size={16} />
                  <span className="text-sm">Last updated: {new Date().toLocaleTimeString()}</span>
                </div>
              </div>

              {/* Chart */}
              <div className="bg-secondary/50 rounded-lg p-6 backdrop-blur-sm mt-8">
                <div className="text-sm text-muted-foreground mb-4 text-center">
                  30-Day Price Trend
                </div>
                <div className="h-48 flex items-end justify-between space-x-1">
                  {Array.from({ length: 30 }).map((_, index) => {
                    const height = 50 + Math.random() * 50;
                    return (
                      <div
                        key={index}
                        className="flex-1 bg-primary/30 rounded-t hover:bg-primary/50 transition-colors cursor-pointer"
                        style={{ height: `${height}%` }}
                      ></div>
                    );
                  })}
                </div>
              </div>
            </Card>
          </div>

          {/* City-wise Prices */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center">
              Gold Prices <span className="text-primary">by City</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cityPrices.map((item, index) => (
                <Card key={index} className="bg-card border-primary/20 hover:border-primary/40 transition-all p-6">
                  <div className="text-center space-y-3">
                    <h3 className="text-xl font-semibold">{item.city}</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">24K:</span>
                        <span className="font-semibold text-primary">{item.price24k}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">22K:</span>
                        <span className="font-semibold text-primary">{item.price22k}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Download CTA */}
          <div className="max-w-3xl mx-auto mt-16 text-center">
            <Card className="bg-card border-primary/30 p-8">
              <h3 className="text-2xl font-serif font-bold mb-4">
                Get Price Alerts on Your Phone
              </h3>
              <p className="text-muted-foreground mb-6">
                Download our app to receive instant notifications when gold prices change.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <Download className="mr-2" size={20} />
                Download App
              </Button>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LivePrice;
