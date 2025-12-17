import Image from "next/image";
import { Apple, Play } from "lucide-react";

export function DownloadCTA() {
  return (
    <section className="relative py-16 lg:py-32 bg-background overflow-hidden">
      
      {/* Container with consistent padding */}
      <div className="container mx-auto px-4 md:px-32">
        
        {/* Massive Dark Card */}
        <div className="bg-[#1A1B1A] rounded-[3rem] border border-white/5 overflow-hidden relative">
          
          {/* Flex Layout: Stacked on mobile, Row on desktop */}
          <div className="flex flex-col lg:flex-row items-center">
            
            {/* === Left Column: Text & Buttons === */}
            <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col items-start z-10">
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Download our app
              </h2>
              <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
              </p>

              {/* === Featured User (Asad Ullah) === */}
              <div className="flex items-center gap-4 mb-10 p-4 bg-white/5 rounded-2xl border border-white/10">
                <div className="relative w-14 h-14 shrink-0">
                  <Image
                    src="/images/asad.png" // Your image
                    alt="Asad Ullah"
                    fill
                    className="rounded-full object-cover border-2 border-primary/30"
                  />
                </div>
                <div>
                  <p className="text-white font-bold">Asad Ullah</p>
                  <p className="text-primary text-sm">Featured User</p>
                </div>
              </div>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                {/* iOS Button */}
                <button className="bg-white text-primary px-8 py-4 rounded-full flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors shadow-xl w-full sm:w-auto">
                  <Apple size={24} fill="currentColor" />
                  <div className="text-left">
                    <p className="text-xs font-medium opacity-80">Download on the</p>
                    <p className="text-sm font-bold tracking-widest">APP STORE</p>
                  </div>
                </button>

                {/* Android Button */}
                <button className="bg-primary text-white px-8 py-4 rounded-full flex items-center justify-center gap-3 hover:bg-[#9bc918] transition-colors shadow-xl w-full sm:w-auto">
                  <Play size={24} fill="currentColor" />
                  <div className="text-left">
                    <p className="text-xs font-medium opacity-80">GET IT ON</p>
                    <p className="text-sm font-bold tracking-widest">GOOGLE PLAY</p>
                  </div>
                </button>
              </div>

            </div>

            {/* === Right Column: Phone Image === */}
            <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[600px] mt-8 lg:mt-0 flex items-end justify-center lg:justify-end">
              <div className="relative w-full h-full lg:translate-x-10 lg:translate-y-10">
                <Image
                  src="/images/app-screen-large.png" // Replace with your large phone image
                  alt="Finance Flow App Screen"
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </div>

          </div>

          {/* Background Glow Effect inside the card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-primary/5 blur-[120px] -z-10 rounded-full pointer-events-none"></div>

        </div>

      </div>
    </section>
  );
}