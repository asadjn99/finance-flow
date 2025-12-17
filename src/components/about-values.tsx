import { Users, Globe, Search, Gem } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "OPEN SOURCE",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.",
  },
  {
    icon: Globe,
    title: "WORLDWIDE",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.",
  },
  {
    icon: Search,
    title: "TRANSPARENT",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.",
  },
  {
    icon: Gem,
    title: "COMMUNITY DRIVEN",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.",
  },
];

export function AboutValues() {
  return (
    <section className="relative py-4 lg:py-6 bg-background overflow-hidden">
      
      {/* Container aligned with your specific padding preference */}
      <div className="container mx-auto px-4 md:px-32">
        
        {/* === Header Section === 
            Matches the layout of 'Download App' and 'Latest News' sections
        */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              What drives Finance Flow?
            </h2>
          </div>
          <div className="w-full lg:w-1/2 lg:text-right">
             <p className="text-gray-400 text-sm max-w-md ml-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
            </p>
          </div>
        </div>

        {/* === Values Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#1A1B1A] rounded-[2rem] p-10 flex flex-col items-start gap-6 border border-white/5 hover:border-white/10 transition-colors group"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <item.icon className="text-white" size={32} />
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-white font-bold tracking-widest uppercase mb-4 text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}