import Image from "next/image";
import { Boxes, CircleDollarSign, TrendingUp, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-background">
      
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_var(--tw-gradient-stops))] from-primary/20 via-background/0 to-background/0 -z-10 pointer-events-none blur-3xl"></div>

      <div className="container mx-auto px-2 md:px-32">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* === LEFT COLUMN: Text Content === */}
          <div className="w-full lg:w-1/2 flex flex-col items-start z-10 lg:pr-4">
            <h1 className="text-2xl sm:text-2xl lg:text-4xl font-bold text-white leading-[1.1] mb-6">
              Buy, trade, and hold 350+ cryptocurrencies
            </h1>
            <p className="text-gray-400 text-sm sm:text-xl mb-10 max-w-xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat.
            </p>

            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-5">
              <button className="bg-primary text-white px-8 py-4 rounded-full font-bold tracking-widest uppercase transition-all duration-300 hover:bg-[#050605] hover:text-primary text-sm shadow-lg shadow-primary/10 hover:shadow-primary/20 flex justify-center items-center">
                DOWNLOAD APP
              </button>
              <button className="bg-white/5 text-white px-8 py-4 rounded-full font-bold tracking-widest uppercase transition-all duration-300 hover:bg-primary hover:text-white border border-white/10 text-sm flex justify-center items-center">
                VIEW PRICING
              </button>
            </div>
          </div>

          {/* === RIGHT COLUMN: Image Wrapper === */}
          <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0">
           
            <div className="relative w-full max-w-2xl mx-auto lg:mx-0 lg:translate-x-[10%] transition-all duration-500">
              <Image
                src="/images/hero-laptop.png" // Ensure this path matches your folder structure
                alt="Finance Flow Crypto App on Laptop showing Ethereum"
                width={1200}
                height={800}
                className="w-full h-auto object-contain drop-shadow-2xl relative z-10"
                priority
              />
            </div>
          </div>

        </div>

        {/* === BOTTOM SECTION: Featured On Logos === */}
        {/* Now aligned correctly inside the container */}
        <div className="mt-24 lg:mt-32 flex flex-col justify-center items-center text-center lg:text-left">
          <p className="text-gray-500 text-sm mb-8 uppercase tracking-widest font-semibold">
            Finance flow has been featured on
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-12 gap-y-8 opacity-70">
            <div className="flex items-center gap-2 text-white">
              <Boxes className="text-primary" size={24} />
              <span className="font-bold text-xl">company</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <CircleDollarSign className="text-primary" size={24} />
              <span className="font-bold text-xl">Company</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <TrendingUp className="text-primary" size={24} />
              <span className="font-bold text-xl">company</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <ShieldCheck className="text-primary" size={24} />
              <span className="font-bold text-xl">Company</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}