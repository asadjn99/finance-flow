"use client";

import Image from "next/image";
import Link from "next/link";

export function BlogHero() {
  return (
    <section className="relative py-6 lg:py-8 bg-background overflow-hidden">
      <div className="container  mx-auto px-4 md:px-32 relative z-10">
        
        {/* === Part 1: Header Row === 
            Matches the layout: "Blog" on left, Text on right
        */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-6">
          <div className="w-full  lg:w-1/2">
            <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-white tracking-tight">
              Blog
            </h1>
          </div>
          <div className="w-full lg:w-1/2 lg:text-left">
             <p className="text-gray-400 text-sm text-justify max-w-md ml-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat.
            </p>
          </div>
        </div>

        {/* === Part 2: Featured Article Card === 
            Large card with Text on Left, Image on Right
        */}
        <div className="w-full rounded-[1.5rem] overflow-hidden border border-white/5 flex flex-col lg:flex-row group hover:border-white/10 transition-colors duration-300">
          
          {/* Left Column: Content */}
          <div className="bg-white/10 w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center items-start">
            
            {/* Featured Badge */}
            <span className="bg-[#88B702] text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6">
              FEATURED
            </span>

            {/* Title */}
            <h2 className="text-sm md:text-lg lg:text-2xl font-bold text-white mb-6 leading-tight">
              Cryptocurrency Explained With Pros and Cons for Investment
            </h2>

            {/* Excerpt */}
            <p className="text-gray-400 text-xs leading-relaxed mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque viverra donec diammeo.
            </p>

            {/* Optional: Make the whole card clickable via a hidden link or wrapping Link */}
            <Link href="/blog/cryptocurrency-explained" className="absolute inset-0 z-10" aria-label="Read featured article"></Link>
          </div>

          {/* Right Column: Image */}
          <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-full">
            <Image
              src="/images/blog-hero.png" // Ensure you have this image (the laptop one)
              alt="Featured Article"
              fill
              className="object-fit "
            />
            {/* Overlay gradient to blend image with card if needed */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1B1A]/50 to-transparent lg:from-[#1A1B1A] lg:via-transparent"></div>
          </div>

        </div>

      </div>
    </section>
  );
}