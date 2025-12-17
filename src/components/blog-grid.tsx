"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import { cn } from "@/lib/utils";

const categories = ["All", "Apps", "Products", "Tutorial"];
const ITEMS_PER_PAGE = 6;

export function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // 1. Filter Logic
  // We skip the first post (index 0) as it is usually the Hero post
  const allGridPosts = blogPosts.slice(1);
  
  const filteredPosts = activeCategory === "All"
    ? allGridPosts
    : allGridPosts.filter((post) => 
        // Case-insensitive comparison to match "Products" with "PRODUCTS"
        post.category?.toUpperCase() === activeCategory.toUpperCase()
      );

  // 2. Pagination Logic
  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Reset to page 1 when category changes
  useEffect(() => {
    // setCurrentPage(1);
  }, [activeCategory]);

  // Handler for changing pages
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-32">
        
        {/* === Header & Filters === */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight w-full md:w-auto text-left">
            Latest Posts
          </h2>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-start md:justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300",
                  activeCategory === cat
                    ? "bg-[#88B702] text-[#1A1B1A]" 
                    : "bg-[#1A1B1A] text-gray-400 border border-white/5 hover:bg-white/5 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* === The Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentPosts.length > 0 ? (
            currentPosts.map((post) => (
              <Link 
                key={post.id} 
                href={`/blog/${post.slug}`}
                className="group bg-[#1A1B1A] rounded-[2rem] overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col"
              >
                {/* Card Image */}
                <div className="relative w-full h-60 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0"></div>
                </div>

                {/* Card Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-5">
                     <span className="bg-[#88B702] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest inline-block">
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-4 leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 pb-6 border-b border-white/10 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-3 mt-auto">
                    <div className="relative w-10 h-10 shrink-0">
                      <Image
                        src={post.authorImage}
                        alt={post.author}
                        fill
                        className="rounded-full object-cover border border-white/10"
                      />
                    </div>
                    <div>
                      <h4 className="text-white text-xs font-bold uppercase tracking-wide">
                        {post.author}
                      </h4>
                      <p className="text-gray-500 text-[10px] mt-0.5 font-medium">
                        {post.date}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-500">comming soon... <br /> No posts found in this category. @asadjn99</p>
            </div>
          )}
        </div>

        {/* === Functional === */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4">
            
            {/* Previous Button */}
            <button 
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-full bg-[#1A1B1A] border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-4 text-sm font-bold">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={cn(
                    "transition-colors",
                    currentPage === page 
                      ? "text-[#88B702]" // Active Page Color
                      : "text-white hover:text-primary"
                  )}
                >
                  {page}
                </button>
              ))}
              
              {/* Optional Ellipsis if lots of pages  */}
              {totalPages > 5 && <span className="text-gray-600">...</span>}
            </div>

            {/* Next Button */}
            <button 
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-full bg-[#88B702] flex items-center justify-center text-[#1A1B1A] hover:bg-[#9bc918] transition-all shadow-lg shadow-primary/10 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-600"
            >
              <ChevronRight size={18} />
            </button>

          </div>
        )}

      </div>
    </section>
  );
}