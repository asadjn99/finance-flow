import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero"; 
import { Features } from "@/components/features"; 
import { EarnRewards } from "@/components/earn-rewards";
import { SecuritySection } from "@/components/security-section";
import { ExploreSection } from "@/components/explore-section";
import { Testimonials } from "@/components/testimonials";
import { VideoSection } from "@/components/video-section";
import { BlogSection } from "@/components/blog-section";
import { DownloadApp } from "@/components/download-app";


export default function Home() {
  return (
    // Added bg-background to ensure consistent dark theme
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <link rel="icon" href="/images/" />
      <Hero /> 
      <Features />
      <EarnRewards />
      <SecuritySection />
      <ExploreSection />
      <Testimonials />
      <VideoSection />
      <BlogSection />
      <DownloadApp />
      
      <Footer />
    </main>
  );
}