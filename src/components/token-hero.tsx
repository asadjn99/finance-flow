// import { ArrowRightLeft, BarChart2, Wallet, RefreshCw } from "lucide-react";

export function TokensHero() {
  // Data for the features row to keep JSX clean
//   const features = [
//     { icon: ArrowRightLeft, label: "Send & receive" },
//     { icon: BarChart2, label: "Trading Charts" },
//     { icon: Wallet, label: "Wallet" },
//     { icon: RefreshCw, label: "Real Time Trading" },
//   ];

  return (
    <section className="relative py-20 lg:py-16 overflow-hidden bg-background flex flex-col items-center justify-center text-center">
      
      {/* Background Glow - Top Left & Right for atmosphere */}
      <div className="absolute top-0 left-0 w-[30%] h-[50%] bg-primary/5 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[30%] h-[50%] bg-primary/5 blur-[100px] rounded-full pointer-events-none translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 md:px-32 relative z-10 flex flex-col justify-start sm:justify-center items-start md:items-center ">
        
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
          Tokens
        </h1>
        
        {/* Subtext */}
        <p className="text-gray-400 text-sm sm:text-lg max-w-2xl text-start md:text-center ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla 
          suspendisse tortor aenean dis placerat. 
        </p>

      </div>
    </section>
  );
}