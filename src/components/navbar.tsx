"use client";

import Link from "next/link";
import Image from "next/image"; // Import Image
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "PRICING", href: "/pricing" },
  { name: "TOKENS", href: "/tokens" },
  { name: "BLOG", href: "/blog" },
  { name: "CONTACT US", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="w-full border-b border-white/10 bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-20 px-4 md:px-32">
        
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



        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-8">
          {navLinks.map((link) => {
            const isActive = link.href === "/" 
              ? pathname === "/" 
              : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wider hover:text-primary transition-colors relative py-1 whitespace-nowrap",
                  isActive 
                    ? "text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-white" 
                    : "text-gray-300"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>


        <div className="hidden lg:block shrink-0">
          <Link 
            href="/not-found" 
            className="bg-primary text-white px-5 xl:px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:bg-black hover:text-primary border border-transparent hover:border-primary inline-block"
          >
            Download App
          </Link>
        </div>


        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white bg-primary p-2 rounded-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-background border-b border-white/10 p-6 flex flex-col gap-6 shadow-2xl">
          {navLinks.map((link) => {
             const isActive = link.href === "/" 
             ? pathname === "/" 
             : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-medium text-center hover:text-primary transition-colors",
                  isActive ? "text-primary font-bold" : "text-gray-200"
                )}
              >
                {link.name}
              </Link>
            );
          })}
          <button className="w-full bg-primary text-white px-6 py-4 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-black hover:text-primary transition-colors border border-transparent hover:border-primary">
            Download App
          </button>
        </div>
      )}
    </nav>
  );
}