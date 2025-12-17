"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in.",
    name: "John Carter",
    role: "Role, Company",
    image: "/images/asad.jpg", // Replace with your actual image path
  },
  {
    id: 2,
    quote: "FinanceFlow has completely revolutionized how we handle our treasury. The automation is a game changer for our daily operations.",
    name: "Sarah Jenkins",
    role: "CEO, TechStart",
    image: "/images/asad.jpg", 
  },
  {
    id: 3,
    quote: "The security features gave us the peace of mind we needed to finally move our assets to a digital workflow.",
    name: "Alex Rodriguez",
    role: "CTO, Blockchain Inc.",
    image: "/images/asad.jpg", 
  },
  {
    id: 4,
    quote: "Support is 24/7 and actually helpful. We solved a complex integration issue in under an hour.",
    name: "Emily Blunt",
    role: "Founder, Fintech Sol",
    image: "/images/asad.jpg", 
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const xDrag = useMotionValue(0);

  // Helper to wrap index endlessly (Infinite Loop)
  const calculateIndex = (newIndex: number) => {
    const len = testimonials.length;
    return ((newIndex % len) + len) % len;
  };

  const handleNext = () => setIndex((prev) => prev + 1);
  const handlePrev = () => setIndex((prev) => prev - 1);

  const onDragEnd = () => {
    const x = xDrag.get();
    if (x <= -50) handleNext();
    else if (x >= 50) handlePrev();
    animate(xDrag, 0);
  };

  return (
    <section className="relative py-16 lg:py-32 px-4 md:px-32 overflow-hidden bg-background">
      
      {/* 1. Header Container 
          Matches your specific alignment: px-4 on mobile, px-32 on desktop.
      */}
      <div className="container mx-auto px-0 mb-12 lg:mb-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white">
            What our users say?
          </h2>
          
          {/* Button aligned to right on desktop, top on mobile (via flex order or natural flow) */}
          <button className="bg-primary text-white px-8 py-4 rounded-full font-bold tracking-widest uppercase transition-all duration-300 hover:bg-[#050605] hover:text-primary text-xs sm:text-sm shadow-lg shadow-primary/20 whitespace-nowrap">
            DOWNLOAD APP
          </button>
        </div>
      </div>

      {/* 2. Carousel Track 
          - We use a full-width container but allow overflow so cards on the right can be seen.
          - We use a special padding-left technique to align the ACTIVE card with the header text.
      */}
      <div className="w-full overflow-visible">
        <div className="container mx-auto px-4 md:px-32 relative h-[450px] md:h-[400px]">
          
          <motion.div 
            className="absolute top-0 left-0 w-full h-full flex items-center cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            style={{ x: xDrag }}
            onDragEnd={onDragEnd}
          >
            {testimonials.map((item, i) => {
              // Calculate position relative to active index
              let position = i - calculateIndex(index);
              const len = testimonials.length;

              // Infinite wrap logic: ensuring cards teleport correctly
              if (position < -Math.floor(len / 2)) position += len;
              if (position > Math.floor(len / 2)) position -= len;

              const isActive = position === 0;
              
              return (
                <motion.div
                  key={item.id}
                  initial={false}
                  animate={{
                    // === CSS VARIABLE ANIMATION LOGIC ===
                    // We calculate 'x' using responsive CSS variables defined below.
                    // This allows exact pixel movement on desktop (e.g. 500px) and % movement on mobile.
                    x: `calc(${position} * (var(--card-width) + var(--gap)))`,
                    
                    // Visual States
                    scale: isActive ? 1 : 0.95, // Inactive cards slightly smaller
                    opacity: isActive ? 1 : 0.3, // Inactive cards faded (dimmer as per image)
                    zIndex: isActive ? 10 : 5,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  
                  // === CLASSES ===
                  className={cn(
                    "absolute left-4 md:left-32 top-0 p-8 md:p-12 rounded-[2rem] flex flex-col justify-between border transition-colors duration-500",
                    
                    // Widths and Variables:
                    // Mobile: Width 100% of screen-padding. Gap 20px.
                    // Desktop: Fixed width 500px (matches Figma look). Gap 40px.
                    "w-[calc(100vw-32px)] md:w-[550px] h-[250px] md:h-[280px]",
                    "[--card-width:100vw] [--gap:0px] md:[--card-width:500px] md:[--gap:80px]",
                    
                    // Colors based on Active State (Matches Image 66b1b9.jpg)
                    isActive 
                      ? "bg-[#22291b] border-white/5 shadow-2xl" // Active: Greenish Dark
                      : "bg-[#0c0c0c] border-transparent"         // Inactive: Very Dark Black
                  )}
                  style={{
                    // Override left position to 0 inside the relative container so Framer handles the 'x' shift
                    left: 0, 
                  }}
                >
                  {/* Quote Section */}
                  <div className="relative">
                    <p className="text-gray-200 text-sm md:text-lg leading-relaxed font-medium">
                      “{item.quote}”
                    </p>
                  </div>
                  
                  {/* User Profile Section */}
                  <div className="flex items-center gap-4 mt-6">
                    <div className="relative w-14 h-14 shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="rounded-full object-cover border-2 border-primary/20"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-bold tracking-wide text-sm md:text-base uppercase">
                        {item.name.toUpperCase()}
                      </h4>
                      <p className="text-gray-500 text-xs md:text-sm font-medium mt-1">
                        {item.role.toUpperCase()}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* 3. Pagination Dots 
          Centered at the bottom, matching the Figma design.
      */}
      <div className="container mx-auto px-4 md:px-32 mt-8 md:mt-0">
        <div className="flex justify-center items-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(index + (i - calculateIndex(index)))} 
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                // Active dot is White, Inactive is Dark Gray/Transparent
                i === calculateIndex(index) ? "bg-white scale-110" : "bg-white/20 hover:bg-white/40"
              )}
            />
          ))}
        </div>
      </div>

    </section>
  );
}