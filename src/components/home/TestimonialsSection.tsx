import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Investor",
    rating: 5,
    text: "The most secure and transparent gold investment platform I've used. The app makes buying and tracking gold incredibly easy.",
    avatar: "👩‍💼",
  },
  {
    name: "Rajesh Kumar",
    role: "Business Owner",
    rating: 5,
    text: "I've been investing in gold for years, but mspgold's digital vault and instant transactions have revolutionized my experience.",
    avatar: "👨‍💼",
  },
  {
    name: "Anjali Patel",
    role: "Professional",
    rating: 5,
    text: "Love the real-time price tracking and low charges. The delivery option is also very convenient when I need physical gold.",
    avatar: "👩‍🔬",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold">
            What Our <span className="text-primary gold-text-glow">Customers Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of satisfied investors who trust mspgold for their gold investments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 p-8 hover:gold-glow-sm"
            >
              <div className="flex flex-col space-y-4">
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-primary fill-primary" size={16} />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground italic">"{testimonial.text}"</p>

                {/* Author */}
                <div className="flex items-center space-x-3 pt-4 border-t border-primary/20">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
