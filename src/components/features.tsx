import Image from "next/image";
import { ArrowRightLeft, Wallet, BarChart2, RefreshCw } from "lucide-react";

// Reusable Card Component for the four corner features
const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => (
  <div className="bg-white/5 p-8 rounded-3xl flex flex-col items-start gap-4 border border-white/10 hover:bg-white/10 transition-colors">
    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
      <Icon size={22} />
    </div>
    <h3 className="text-white font-bold text-lg tracking-wide uppercase">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);

export const Features = () => {
  return (
    <section className="relative w-4xl py-16 lg:py-24 overflow-hidden bg-background">
      {/* Subtle background glow for continuity */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/45 via-background/0 to-background/0 -z-10 pointer-events-none blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-32">
        
        {/* Section Header */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight mb-2">
            Build your crypto portfolio
          </h2>
          <p className="text-gray-400 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-16">
          
          {/* Left Column: Stacks two cards */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <FeatureCard
              icon={ArrowRightLeft}
              title="SEND & RECEIVE"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."
            />
            <FeatureCard
              icon={Wallet}
              title="100% SECURE WALLET"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."
            />
          </div>

          {/* Middle Column: Prominent App Card */}
          <div className="bg-primary p-8 rounded-3xl flex flex-col relative overflow-hidden">
            <div className="z-10 relative">
              <h3 className="text-white font-bold text-xl tracking-wide uppercase mb-4">IOS & ANDROID APP</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-8 md:mb-0 max-w-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In amet, morbi non at sed neque.
              </p>
            </div>
            {/* Mobile Phone Image - Centered and cut off at bottom */}
            <div className="relative w-full flex-1 flex items-end justify-center translate-y-4">
              <Image
                src="/images/iphone.png" 
                alt="Finance Flow Mobile Application"
                width={300}
                height={400}
                className="w-auto mb-[-16] h-auto max-h-[400px] object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right Column: Stacks two cards */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <FeatureCard
              icon={BarChart2}
              title="TRADING CHARTS"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."
            />
            <FeatureCard
              icon={RefreshCw}
              title="REAL TIME TRADING"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."
            />
          </div>

        </div>

        {/* Bottom Button */}
        <div className="flex justify-center">
          <button className="bg-primary text-white px-10 py-4 rounded-full font-bold tracking-widest uppercase transition-all duration-300 hover:bg-white/5 text-sm shadow-lg shadow-primary/20">
            DOWNLOAD APP
          </button>
        </div>

      </div>
    </section>
  );
};