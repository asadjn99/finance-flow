"use client";

import { Mail } from "lucide-react";

export function BlogNewsletter() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Card Container: Green Background 
            - lg:flex-row triggers the side-by-side layout at 1024px
            - lg:items-center centers them vertically
        */}
        <div className="bg-primary p-8 md:p-12 lg:p-12 xl:px-20 xl:py-16 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-8 xl:gap-16">
          
          {/* === Left Side: Icon & Title === */}
          <div className="flex flex-col md:flex-row items-center text-center lg:text-left gap-6 lg:gap-6 w-full lg:w-auto lg:max-w-xl">
            
            {/* Icon: White Rounded Square with Green Mail Icon */}
            {/* shrink-0 prevents the icon from getting squashed on 1024px */}

                <div className="w-16 h-16 bg-white rounded-[1.5rem] flex items-center justify-center shrink-0 shadow-sm">
                <Mail className="text-primary w-10 h-10" />
                </div>


            {/* Title */}
            <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
              Subscribe to our crypto news weekly newsletter!
            </h2>
          </div>

          {/* === Right Side: Form === */}
          {/* w-full ensures it takes available width. 
              lg:min-w-[400px] ensures it doesn't get hidden on 1024px 
          */}
          <div className="w-full lg:flex-1 lg:min-w-[400px] max-w-lg">
            <form className="relative flex flex-col lg:block w-full" onSubmit={(e) => e.preventDefault()}>
              
              {/* Input Field */}
              <input 
                type="email" 
                placeholder="Enter email address"
                className="w-full bg-white rounded-full h-16 px-8 text-black placeholder:text-gray-500 focus:outline-none shadow-inner
                           lg:pr-[170px]" // Right padding ensures text isn't hidden behind the button on desktop
                required
              />
              
              {/* Subscribe Button */}
              <button 
                type="submit"
                className="
                  mt-4 w-full h-16 rounded-full font-bold tracking-widest uppercase text-sm transition-all shadow-lg
                  bg-black text-white hover:bg-gray-900
                  lg:mt-0 lg:absolute lg:right-2 lg:top-2 lg:bottom-2 lg:w-auto lg:h-auto lg:px-8 lg:bg-primary lg:text-white lg:hover:brightness-110
                "
              >
                SUBSCRIBE
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}