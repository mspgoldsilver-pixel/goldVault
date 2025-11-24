import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "What is digital gold?",
      answer: "Digital gold is physical gold stored in secure vaults on your behalf. When you buy digital gold through mspgold, you're buying real 24K or 22K gold that is safely stored in insured, RBI-compliant vaults. You can track your holdings digitally and request physical delivery anytime.",
    },
    {
      question: "How secure is my gold?",
      answer: "Your gold is stored in bank-grade secure vaults with 24/7 surveillance and complete insurance coverage. We partner with India's most trusted custodian facilities that are RBI-compliant. All gold is fully insured against theft, damage, or loss.",
    },
    {
      question: "What is the purity of the gold?",
      answer: "We offer both 24K (999 purity) and 22K gold, all of which are certified and hallmarked. Every gram of gold is verified for authenticity and comes with proper certification from recognized assayers.",
    },
    {
      question: "What are the charges for buying gold?",
      answer: "mspgold offers industry-leading transparent pricing. We charge a nominal buying fee of 3% (one of the lowest in the industry) and no storage charges for the first year. There are no hidden fees or charges.",
    },
    {
      question: "Can I get physical delivery of my gold?",
      answer: "Yes! You can request physical delivery of your gold anytime. We offer delivery in the form of coins, bars, or jewelry. Delivery charges and making charges (for jewelry) apply as per current rates.",
    },
    {
      question: "How do I sell my gold?",
      answer: "Selling is instant through our mobile app. Simply select the amount you want to sell, and the funds will be credited to your bank account within 24 hours at the current market price. There are minimal transaction charges.",
    },
    {
      question: "Is mspgold RBI compliant?",
      answer: "Yes, mspgold is fully compliant with all RBI guidelines and regulations. Our custodian partners are licensed and regulated entities, ensuring complete regulatory compliance.",
    },
    {
      question: "What is the minimum investment amount?",
      answer: "You can start investing in gold with as little as ₹100. There's no maximum limit - invest as much or as little as you want, making gold accessible to everyone.",
    },
    {
      question: "How are gold prices determined?",
      answer: "Gold prices on our platform are based on real-time international gold rates and domestic market rates. Prices are updated every minute to reflect current market conditions.",
    },
    {
      question: "Are there any storage charges?",
      answer: "Storage is completely free for the first year. After that, we charge a nominal 0.5% per annum on the value of stored gold, which is significantly lower than industry standards.",
    },
    {
      question: "Can I gift digital gold?",
      answer: "Yes! You can easily gift digital gold to friends and family through our app. Simply select the recipient and amount, and they'll receive the gold in their mspgold account.",
    },
    {
      question: "What happens to my gold if mspgold shuts down?",
      answer: "Your gold is stored independently in secure vaults and is completely separate from mspgold's business operations. Even in the unlikely event of business closure, your gold remains safe and accessible to you.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-5xl font-serif font-bold">
              Frequently Asked <span className="text-primary gold-text-glow">Questions</span>
            </h1>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
              Find answers to common questions about digital gold investment, security, and our services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-primary/30 p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border-primary/20"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>

            {/* Contact CTA */}
            <Card className="bg-card border-primary/30 p-8 mt-12 text-center">
              <h3 className="text-2xl font-serif font-bold mb-4">
                Still Have Questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our support team is here to help you 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors"
                >
                  Contact Support
                </a>
                <a
                  href="mailto:support@mspgold.com"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary hover:bg-primary/10 font-semibold rounded-lg transition-colors"
                >
                  Email Us
                </a>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
