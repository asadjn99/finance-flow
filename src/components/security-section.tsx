import Image from "next/image";
// 1. Import 'LucideIcon' type to fix the red underline error
import { ShieldCheck, Award, MessageCircle, type LucideIcon } from "lucide-react";

// 2. Update the interface to use 'LucideIcon' instead of 'any'
const SecurityItem = ({
  icon: Icon,
  title,
}: {
  icon: LucideIcon;
  title: string;
}) => (
  <div className="flex items-center gap-5">
    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
      <Icon size={24} className="text-white" />
    </div>
    <span className="text-white text-lg font-medium tracking-wide">{title}</span>
  </div>
);

export const SecuritySection = () => {
  return (
    <section className="relative py-16 lg:py-32 overflow-hidden bg-background">
      
      <div className="container mx-auto px-4 md:px-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* === Left Column: Text Content === */}
          <div className="w-full lg:w-1/2 flex flex-col items-start z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              Earn daily rewards on your idle tokens
            </h2>
            <p className="text-gray-400 text-sm mb-10 max-w-xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
            </p>

            <div className="flex flex-col gap-3 w-full">
              <SecurityItem 
                icon={ShieldCheck} 
                title="100% Private data" 
              />
              <SecurityItem 
                icon={Award} 
                title="99.99% Uptime guarantee" 
              />
              <SecurityItem 
                icon={MessageCircle} 
                title="24/7 Dedicated support" 
              />
            </div>
          </div>

          <div className="w-full relative lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-[50vw] flex items-center justify-center lg:justify-start">
            
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary/10 blur-[80px] -z-10 rounded-full"></div>
            
            <Image
              src="/images/pc.png" 
              alt="Security features displayed on laptop screen"
              width={800} // Increased resolution for larger desktop display
              height={600}
              className="w-full max-w-xl lg:max-w-none h-auto object-contain drop-shadow-2xl relative z-10 lg:translate-x-12" 
              // lg:translate-x-12 pushes it slightly more to the right if you want that "cut off" look
            />
          </div>

        </div>
      </div>
    </section>
  );
};