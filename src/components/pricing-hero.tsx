import { ArrowRightLeft, BarChart2, Wallet, RefreshCw } from "lucide-react";

export function PricingHero() {
  // Data for the features row to keep JSX clean
  const features = [
    { icon: ArrowRightLeft, label: "Send & receive" },
    { icon: BarChart2, label: "Trading Charts" },
    { icon: Wallet, label: "Wallet" },
    { icon: RefreshCw, label: "Real Time Trading" },
  ];

  return (
    <section className="relative py-20 lg:py-16 overflow-hidden bg-background flex flex-col items-center justify-center text-center">
      
      {/* Background Glow - Top Left & Right for atmosphere */}
      <div className="absolute top-0 left-0 w-[30%] h-[50%] bg-primary/5 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[30%] h-[50%] bg-primary/5 blur-[100px] rounded-full pointer-events-none translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 md:px-32 relative z-10 flex flex-col justify-start sm:justify-center items-start md:items-center ">
        
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
          Pricing
        </h1>
        
        {/* Subtext */}
        <p className="text-gray-400 text-sm sm:text-lg max-w-2xl text-start md:text-center ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla 
          suspendisse tortor aenean dis placerat. 
        </p>

        {/* === Features / Logos Row === */}
            <div className="flex flex-wrap justify-start md:justify-center items-start md:items-center gap-y-8 gap-x-8 md:gap-x-16 mt-16">
            {features.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                {/* Green Icon Box */}
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shrink-0">
                    <item.icon className="text-white" size={24} />
                </div>

                {/* Text Label */}
                <span className="text-white font-medium text-base sm:text-lg">
                    {item.label}
                </span>
                </div>
            ))}
            </div>


      </div>
    </section>
  );
}