import { cn } from "@/lib/utils";

const timelineData = [
  {
    date: "OCTOBER 2019",
    title: "FinanceFlow founded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.",
  },
  {
    date: "NOVEMBER 2019",
    title: "100% Secure wallet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.",
  },
  {
    date: "JANUARY 2020",
    title: "Real-time trading charts",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.",
  },
  {
    date: "FEBRUARY 2020",
    title: "Mobile app for iOS & Android",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.",
  },
  {
    date: "MARCH 2020",
    title: "100+ new cryptocurrencies",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.",
  },
];

const TimelineItem = ({ date, title, description, isLast }: any) => (
  <div className="relative pl-8 md:pl-12 group">
    {/* Line */}
    {!isLast && (
      <div className="absolute left-0 top-2 h-full w-[1px] bg-white/10 group-hover:bg-primary/50 transition-colors"></div>
    )}
    
    {/* Dot */}
    <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-primary"></div>

    {/* Content */}
    <div className="pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-3">
        <span className="text-primary font-bold tracking-widest uppercase text-xs sm:text-sm">
          {date}
        </span>
        <h3 className="text-white font-bold text-lg sm:text-xl">
          {title}
        </h3>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
        {description}
      </p>
    </div>
  </div>
);

export function AboutTimeline() {
  return (
    <section className="relative py-16 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-32">
        
        {/* Layout: 2 Columns on Desktop */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* === LEFT COLUMN: Heading & Description === */}
          {/* sticky top-32 makes it stay visible while you scroll the timeline on the right */}
          <div className="w-full lg:w-1/2 flex flex-col items-start lg:sticky lg:top-2 h-fit">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
              Our journey
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
            </p>
          </div>

          {/* === RIGHT COLUMN: Timeline List === */}
          <div className="w-full lg:w-1/2">
             <div className="ml-2">
              {timelineData.map((item, index) => (
                <TimelineItem 
                  key={index} 
                  {...item} 
                  isLast={index === timelineData.length - 1} 
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}