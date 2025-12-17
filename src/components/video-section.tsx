"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { DownloadIcon, LockIcon, Play, User } from "lucide-react";
// import { userAgent } from "next/server";
// import { cn } from "@/lib/utils";

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
    <span className="text-white text-sm md:text-lg font-medium tracking-wide">{title}</span>
  </div>
);





export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative py-16 lg:py-32 overflow-hidden bg-background">
      {/* Container uses the same px-4 md:px-32 padding for consistent alignment 
        with Navbar and Testimonials.
      */}
      <div className="container mx-auto px-4 md:px-32">
        
        {/* Layout: Stacked on mobile, Row on desktop */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* === Left Column: Text Content === */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Our video
            </h2>
            <p className="text-gray-400 text-lg mb-6 max-w-xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
            </p>
            {/* Optional: Add a CTA button here if needed later */}
            {/* List of benefits using the helper component */}
            <div className="flex flex-col gap-6 w-full">
              <RewardItem 
                icon={DownloadIcon} 
                title="Lowest fees in market" 
              />
              <RewardItem 
                icon={User} 
                title="Fast and secure transactions" 
              />
              <RewardItem 
                icon={LockIcon} 
                title="256-bit secure encryption" 
              />
            </div>
          </div>

          {/* === Right Column: Video Container === */}
          {/* order-1 on mobile puts video on top, order-2 on desktop puts it on right */}
          <div className="w-full lg:w-[60%] relative order-2 lg:order-1 ">
            
            {/* Rounded container for the video */}
            <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-black/50">
              
              {/* HTML5 Video Tag */}
              <video
                ref={videoRef}
                width="100%"
                height="100%"
                controls={isPlaying} // Only show native controls once playing
                poster="/videos/thumb.png" // ** thumbnail **
                className="w-full h-full object-cover "
                onPause={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
              >
                {/* **VIDEO FILE ** */}
                <source src="/videos/video.mp4" type="video/mp4"  />
                Your browser does not support the video tag.
              </video>

              {/* === Custom Play Button Overlay === */}
              {/* Only shows when video is NOT playing */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-all duration-300">
                 
                 {/* Framer Motion Button for hover effects */}
                  <motion.button
                    onClick={handlePlayClick}
                    className="relative group"
                    whileHover="hover"
                    initial="initial"
                  >
                    {/* 1. The Outer Green Ring (Pulses on hover) */}
                    <motion.div
                      variants={{
                        initial: { scale: 1, opacity: 0 },
                        hover: { 
                          scale: 1.5, 
                          opacity: [0, 0.5, 0], // Subtle pulse effect
                          transition: { 
                            repeat: Infinity, 
                            duration: 1.5,
                            ease: "easeInOut"
                          }
                        }
                      }}
                      className="absolute inset-0 rounded-full border-2 border-primary/60 z-0"
                    />

                    {/* 2. The Main White Circle (Expands and gets green border on hover) */}
                    <motion.div
                       variants={{
                        initial: { scale: 1, borderColor: "transparent" },
                        hover: { scale: 1.1, borderColor: "#88B702" } // #88B702 is your primary color
                      }}
                      className="relative w-16 h-16 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center z-10 border-4 box-border transition-colors duration-300"
                    >
                       {/* 3. The Play Icon (Turns green on hover) */}
                       {/* Using fill-current to make it solid */}
                       <Play 
                         size={32} 
                         className="text-black fill-current transition-colors duration-300 group-hover:text-primary" 
                       />
                    </motion.div>
                  </motion.button>
                  
                </div>
              )}
            </div>

            {/* Background Glow behind video */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-primary/10 blur-[100px] -z-10 rounded-full pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
}