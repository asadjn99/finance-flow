import Image from "next/image";
import { Apple, Play } from "lucide-react";

export function DownloadApp() {
  return (
    <section className="relative py-16 lg:py-12 bg-background overflow-hidden">
      
      {/* Main Container with your standard alignment */}
      <div className="container mx-auto px-4 md:px-32">
        
        {/* === Header Section === 
            Desktop: Title Left / Text Right
            Mobile: Stacked
        */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Download our app
            </h2>
          </div>
          <div className="w-full lg:w-1/2 lg:text-right">
             <p className="text-gray-400 text-lg max-w-md ml-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non neque orci amet, amet.
            </p>
          </div>
        </div>

        {/* === Cards Grid === 
            Desktop: 2 Columns
            Mobile: 1 Column
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* --- iOS Card --- */}
          <div className="bg-[#1A1B1A] rounded-[2.5rem] p-8 md:p-10 pb-0 flex flex-col relative  border border-white/5 group hover:border-white/10 transition-colors">
            <div className="z-10 relative">
              <h3 className="text-1xl md:text-2xl font-bold text-white mb-4">Download for iOS</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer in pellentesque tortor semper elementum. Felis.
              </p>
              
              <button className="bg-primary text-white px-8 py-4 rounded-full flex items-center gap-3 hover:bg-[#050605] transition-colors shadow-lg shadow-primary/10 w-fit">
                <Apple size={22} fill="currentColor" />
                <span className="text-xs font-bold tracking-widest uppercase">APP STORE</span>
              </button>
            </div>

            {/* iOS Phone Image (Bottom Center) */}
            <div className="relative w-full h-64 md:h-80 mt-8 flex justify-center translate-y-4">
              <Image
                src="/images/ios.png" // Replace with your file
                alt="iOS App Interface"
                width={400}
                height={400}
                className="object-contain object-top drop-shadow-2xl transition-transform duration-500 group-hover:-translate-y-2"
              />
            </div>
          </div>

          {/* --- Android Card --- */}
          <div className="bg-[#1A1B1A] rounded-[2.5rem] p-8 md:p-10 pb-0 flex flex-col relative overflow-hidden border border-white/5 group hover:border-white/10 transition-colors">
            <div className="z-10 relative">
              <h3 className="text-1xl md:text-2xl font-bold text-white mb-4">Download for Android</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer in pellentesque tortor semper elementum. Felis.
              </p>
              
              <button className="bg-primary text-white px-8 py-4 rounded-full flex items-center gap-3 hover:bg-[#050605] transition-colors shadow-lg shadow-primary/10 w-fit">
                <Play size={22} fill="currentColor" />
                <span className="text-xs font-bold tracking-widest uppercase">PLAY STORE</span>
              </button>
            </div>

            {/* Android Phone Image (Bottom Center) */}
            <div className="relative w-full h-64 md:h-80 mt-8 flex justify-center translate-y-4">
              <Image
                src="/images/apk.png" // Replace with your file
                alt="Android App Interface"
                width={400}
                height={400}
                className="object-contain object-top drop-shadow-2xl transition-transform duration-500 group-hover:-translate-y-2"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}