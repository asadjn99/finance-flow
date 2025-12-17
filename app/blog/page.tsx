
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
// import { blogPosts } from "@/lib/blog-data";
// import Link from "next/link";
// import Image from "next/image";
// 1. Import the new Hero component
import { BlogHero } from "@/components/blog-hero";
import { BlogNewsletter } from "@/components/blog-newsletter";
import { BlogGrid } from "@/components/blog-grid";

export default function BlogPage() {
  return (
    <main className="bg-background min-h-screen flex flex-col">
      <Navbar />
      
      {/* Section */}
      <BlogHero />
      <BlogNewsletter />
      <BlogGrid />

      
      {/* <div className="container mx-auto px-4 md:px-32 py-16 flex-grow">
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
             <Link 
               key={post.id} 
               href={`/blog/${post.slug}`} 
               className="bg-[#1A1B1A] rounded-[2rem] overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 block group"
             >
                <div className="relative h-56 w-full overflow-hidden">
                   <Image 
                     src={post.image} 
                     alt={post.title} 
                     fill 
                     className="object-cover group-hover:scale-105 transition-transform duration-500" 
                   />
                </div>
                <div className="p-8">
                  <span className="text-primary text-xs font-bold uppercase tracking-widest">{post.category}</span>
                  <h2 className="text-xl font-bold text-white mt-4 mb-2">{post.title}</h2>
                  <p className="text-gray-400 text-sm line-clamp-3">{post.excerpt}</p>
                </div>
             </Link>
          ))}
        </div>
      </div> */}

      <Footer />
    </main>
  );
}