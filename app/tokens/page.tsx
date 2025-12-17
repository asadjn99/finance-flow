import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TokensHero } from "@/components/token-hero";
import { TokenList } from "@/components/token-list";


export default function PricingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <TokensHero />
      <TokenList />


      
      {/* Placeholder for next sections */}
      <div className="min-h-[20vh]"></div>

      <Footer />
    </main>
  );
}