import Link from "next/link";
import { Navbar } from "@/components/navbar";
// import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      {/* Main Content Section - Centered vertically and horizontally */}
      <section className="flex-grow flex flex-col items-center justify-center text-center px-2 py-6 relative overflow-hidden">
        
        {/* Optional background glow for atmosphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

        {/* The 404 Graphic */}
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-2 font-bold text-white relative z-10">
           {/* First '4' */}
           {/* Using extremely large text sizes to match the design */}
           <span className="text-[7rem] sm:text-[10rem] md:text-[14rem] leading-none tracking-tighter">
             4
           </span>
           
           {/* The Glowing '0' Circle */}
           {/* Created with border and a strong shadow matching the primary color (#88B702) */}
           <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full border-[12px] md:border-[16px] border-primary shadow-[0_0_50px_#88B702] bg-transparent mx-2 sm:mx-4"></div>
           
           {/* Second '4' */}
           <span className="text-[7rem] sm:text-[10rem] md:text-[14rem] leading-none tracking-tighter">
             4
           </span>
        </div>

        {/* Heading */}
        <h1 className="text-xl md:text-2xl font-bold text-white mb-6 relative z-10">
          Page not found
        </h1>

        {/* Subtext */}
        <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-12 relative z-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
        </p>

        {/* Go Back Button */}
        <Link 
          href="/"
          className="relative z-10 bg-primary text-white px-12 py-5 rounded-full font-bold tracking-widest uppercase text-sm hover:bg-[#050605] hover:text-primary shadow-lg shadow-primary/20 "
        >
          GO BACK HOME
        </Link>
      </section>

      {/* <Footer /> */}
    </main>
  );
}