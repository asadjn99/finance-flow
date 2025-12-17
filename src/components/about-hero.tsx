export function AboutHero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-background flex flex-col items-center justify-center text-center">
      
      {/* Background Glow - Top Left & Right for atmosphere */}
      <div className="absolute top-0 left-0 w-[30%] h-[50%] bg-primary/5 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[30%] h-[50%] bg-primary/5 blur-[100px] rounded-full pointer-events-none translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 md:px-32 relative z-10">
        
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
          About Finance Flow
        </h1>
        
        {/* Subtext */}
        <p className="text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla 
          suspendisse tortor aenean dis placerat. Scelerisque imperdiet vitae 
          dolor non aliquam. Malesuada.
        </p>

      </div>
    </section>
  );
}