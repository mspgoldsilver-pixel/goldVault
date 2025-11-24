import { useState } from "react";
import { TrendingUp, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const LivePriceSection = () => {
  const [selectedKarat, setSelectedKarat] = useState<"24k" | "22k">("24k");

  const prices = {
    "24k": {
      per10g: "₹65,420",
      per1g: "₹6,542",
      change: "+2.3%",
    },
    "22k": {
      per10g: "₹59,970",
      per1g: "₹5,997",
      change: "+2.1%",
    },
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold">
            Live <span className="text-primary gold-text-glow">Gold Price</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-time gold rates updated every minute. Make informed investment decisions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-primary/30 gold-glow p-8">
            {/* Karat Toggle */}
            <div className="flex justify-center space-x-4 mb-8">
              <Button
                variant={selectedKarat === "24k" ? "default" : "outline"}
                className={selectedKarat === "24k" ? "bg-primary hover:bg-primary/90" : "border-primary/50"}
                onClick={() => setSelectedKarat("24k")}
              >
                24K Gold
              </Button>
              <Button
                variant={selectedKarat === "22k" ? "default" : "outline"}
                className={selectedKarat === "22k" ? "bg-primary hover:bg-primary/90" : "border-primary/50"}
                onClick={() => setSelectedKarat("22k")}
              >
                22K Gold
              </Button>
            </div>

            {/* Price Display */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center space-y-2">
                <div className="text-sm text-muted-foreground">Per 10 Grams</div>
                <div className="text-5xl font-bold text-primary gold-text-glow">
                  {prices[selectedKarat].per10g}
                </div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-sm text-muted-foreground">Per 1 Gram</div>
                <div className="text-5xl font-bold text-primary gold-text-glow">
                  {prices[selectedKarat].per1g}
                </div>
              </div>
            </div>

            {/* Change Indicator */}
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="flex items-center space-x-2 bg-green-500/10 text-green-500 px-4 py-2 rounded-full">
                <TrendingUp size={16} />
                <span className="font-semibold">{prices[selectedKarat].change}</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Clock size={14} />
                <span>Updated: {new Date().toLocaleTimeString()}</span>
              </div>
            </div>

            {/* Price Chart Preview */}
            <div className="bg-secondary/50 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-sm text-muted-foreground mb-4 text-center">
                7-Day Price Trend
              </div>
              <div className="h-32 flex items-end justify-between space-x-2">
                {[65, 72, 68, 75, 80, 78, 85].map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 bg-primary/30 rounded-t hover:bg-primary/50 transition-colors cursor-pointer"
                    style={{ height: `${height}%` }}
                  ></div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LivePriceSection;
