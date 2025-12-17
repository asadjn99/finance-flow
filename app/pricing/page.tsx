import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PricingHero } from "@/components/pricing-hero";
import { PricingCards } from "@/components/pricing-cards";


export default function PricingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <PricingHero />
      <PricingCards />


      
      {/* Placeholder for next sections */}
      <div className="min-h-[20vh]"></div>

      <Footer />
    </main>
  );
}