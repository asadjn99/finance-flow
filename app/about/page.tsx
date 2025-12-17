import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutHero } from "@/components/about-hero";
import { AboutValues } from "@/components/about-values";
import { AboutMission } from "@/components/about-mission";
import { AboutTimeline } from "@/components/about-timeline";
import { AboutTeam } from "@/components/about-team";
import { AboutInvestors } from "@/components/about-investors";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <AboutHero />
      <AboutValues />
      <AboutMission />
      <AboutTimeline />
      <AboutTeam />
      <AboutInvestors />



      
      {/* Placeholder for next sections */}
      <div className="min-h-[20vh]"></div>

      <Footer />
    </main>
  );
}