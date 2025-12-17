import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactHero } from "@/components/contact-hero";



export default function PricingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <ContactHero />
      {/* <PricingCards /> */}


      
      {/* Placeholder for next sections */}
      <div className="min-h-[20vh]"></div>

      <Footer />
    </main>
  );
}