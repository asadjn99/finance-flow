import Image from "next/image";
// Using Lucide icons that match the design in image_12.png
import { TrendingDown, Zap, Lock } from "lucide-react";

// Helper component for the individual list items
const RewardItem = ({
  icon: Icon,
  title,
}: {
  icon: any;
  title: string;
}) => (
  <div className="flex items-center gap-5">
    {/* Solid green circle with white icon */}
    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
      <Icon size={24} className="text-white" />
    </div>
    <span className="text-white text-lg font-medium tracking-wide">{title}</span>
  </div>
);

export const EarnRewards = () => {
  return (
    <section className="relative py-16 lg:py-32 overflow-hidden bg-background">
       {/* Subtle background glow for consistency across sections */}
      <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/10 via-background/0 to-background/0 -z-10 pointer-events-none blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-32">
        {/* Flex container for responsive layout:
           - Mobile (default): flex-col (image on top, text below)
           - Desktop (lg): flex-row (image left, text right)
        */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* === Left Column: Image === */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            {/* Replace with your actual image path */}
            <Image
              src="/images/earn-iphone.png" 
              alt="Mobile phones showing crypto rewards and security"
              width={600}
              height={600}
              className="w-full max-w-md lg:max-w-none h-auto object-contain drop-shadow-2xl z-10 relative"
            />
             {/* Glow behind the phones */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10 blur-[80px] -z-10 rounded-full"></div>
          </div>

          {/* === Right Column: Text Content === */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Earn daily rewards on your idle tokens
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
            </p>

            {/* List of benefits using the helper component */}
            <div className="flex flex-col gap-6 w-full">
              <RewardItem 
                icon={TrendingDown} 
                title="Lowest fees in market" 
              />
              <RewardItem 
                icon={Zap} 
                title="Fast and secure transactions" 
              />
              <RewardItem 
                icon={Lock} 
                title="256-bit secure encryption" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};