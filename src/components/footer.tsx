import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Apple, Play } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-32">
        
        {/* Top Section: Logo & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="relative h-10 lg:h-9 xl:h-12 flex items-center">
              <Image 
                src="/images/logo.png" 
                alt="FinanceFlow Logo" 
                width={140}
                height={50}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-white w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Middle Section: Menu & App Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
          
          {/* Left Side: Navigation Links */}
          <div className="space-y-6">
            <h3 className="border-b-2 pb-2 text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">
              Menu
            </h3>

            <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm font-medium">
              <Link href="/" className="hover:text-primary transition-colors">HOME</Link>
              <Link href="/tokens" className="hover:text-primary transition-colors">TOKENS</Link>
              <Link href="/about" className="hover:text-primary transition-colors">ABOUT</Link>
              <Link href="/blog" className="hover:text-primary transition-colors">BLOG</Link>
              <Link href="/pricing" className="hover:text-primary transition-colors">PRICING</Link>
              <Link href="/contact-us" className="hover:text-primary transition-colors">CONTACT US</Link>
            </div>
          </div>

          {/* Right Side: Download Card */}
          <div className="bg-[#353835] p-8 md:p-10 rounded-3xl flex flex-col items-start gap-4">
            <h3 className="text-lg font-bold tracking-wide">
              DOWNLOAD OUR APPLICATION
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
              <button className="bg-primary text-white px-6 py-3 lg:px-2 rounded-full flex items-center gap-3 hover:bg-[#050605] hover:text-primary transition-colors min-w-[100px] justify-center">
                <Apple size={20} fill="currentColor" />
                <span className="text-xs font-bold tracking-widest">APP STORE</span>
              </button>
              <button className="bg-primary text-white px-6 py-3 lg:px-2 rounded-full flex items-center gap-3 hover:bg-[#050605] hover:text-primary transition-colors min-w-[100px] justify-center">
                <Play size={20} fill="currentColor" />
                <span className="text-xs font-bold tracking-widest">PLAY STORE</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t-2 border-white/40 pt-8 text-center md:text-left">
          <p className="text-xs text-gray-500">All rights reserved</p>
          <p className="text-xs text-gray-500 text-center">
            &copy; 2025{" "}
            <a href="https://asadjn.netlify.app" target="_blank">
              @asadjn99
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
