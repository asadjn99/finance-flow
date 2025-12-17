import { Boxes, Zap } from "lucide-react";

export function AboutInvestors() {
  return (
    <section className="relative py-6 lg:py-2 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-32 text-center">
        
        {/* === Header Section === */}
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Investors
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Parturient lorem purus justo, ultricies.
          </p>
        </div>

        {/* === Logos Grid === 
            Flex-wrap ensures it handles smaller screens gracefully by stacking logos
        */}
        <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-24">
          
          {/* Logo 1 */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <Boxes className="text-primary transition-transform duration-300 group-hover:scale-110" size={32} fill="currentColor" />
            <span className="text-white font-bold text-1xl tracking-wide">company</span>
          </div>

          {/* Logo 2 */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="border-l-4 border-primary pl-2 h-8 flex items-center">
               <span className="text-white font-bold text-1xl tracking-wide">Company</span>
            </div>
          </div>

          {/* Logo 3 */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
               <div className="w-3 h-3 bg-black rounded-full"></div>
            </div>
            <span className="text-white font-bold text-1xl tracking-wide">company</span>
          </div>

          {/* Logo 4 */}
          <div className="flex items-center gap-2 group cursor-pointer">
             <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
             </div>
            <span className="text-white font-bold text-1xl tracking-wide">Company</span>
          </div>

           {/* Logo 5 */}
           <div className="flex items-center gap-2 group cursor-pointer">
            <Zap className="text-primary transition-transform duration-300 group-hover:scale-110" size={32} fill="currentColor" />
            <span className="text-white font-bold text-1xl tracking-wide">Company</span>
          </div>

        </div>

      </div>
    </section>
  );
}