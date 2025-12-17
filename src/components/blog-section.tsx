import Link from "next/link";
 import Image from "next/image";
 import { blogPosts } from "@/lib/blog-data";

 export function BlogSection() {
    //We only want the first 3 posts for the homepage
   const recentPosts = blogPosts.slice(0, 3);

   return (
     <section className="relative py-16 lg:py-32 bg-background overflow-hidden">
       <div className="container mx-auto px-4 md:px-32">
        
         {/* Header */}
         <div className="w-full lg:w-1/2 flex flex-col items-start">
           <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
             Browse our latest news
           </h2>
           <p className="text-gray-400 text-lg mb-2 max-w-sm leading-relaxed">
             {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non neque orci amet, amet. */}
           </p>
         </div>

         {/* Blog Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
           {recentPosts.map((post) => (
             <Link 
               key={post.id} 
               href={`/blog/${post.slug}`}  // This makes the whole card clickable
               className="group bg-[#1A1B1A] rounded-[2rem] overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
             >
               {/* Image Container */}
               <div className="relative h-56 w-full overflow-hidden">
                 <Image
                   src={post.image}
                   alt={post.title}
                   fill
                   className="object-cover transition-transform duration-500 group-hover:scale-110"
                 />
                 {/* Overlay gradient */}
                 <div className="absolute inset-0 bg-gradient-to-t from-[#1A1B1A] to-transparent opacity-60"></div>
               </div>

               {/* Content */}
               <div className="p-4">
                 {/* Tag */}
                 <span className="inline-block bg-primary text-white text-xs font-bold tracking-widest px-4 py-2 rounded-full uppercase mb-2">
                   {post.category}
                 </span>

                 <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-primary transition-colors">
                   {post.title}
                 </h3>
                
                 <p className="text-gray-400 text-sm leading-relaxed mb-4 border-b border-white/10 pb-2">
                   {post.excerpt}
                 </p>

                 {/* Author Info */}
                 <div className="flex items-center gap-4">
                   <Image
                     src={post.authorImage}
                     alt={post.author}
                     width={42}
                     height={42}
                     className="rounded-full border border-white/10"
                   />
                   <div>
                     <h4 className="text-white font-bold text-sm uppercase tracking-wide">
                       {post.author}
                     </h4>
                     <p className="text-gray-500 text-xs mt-1">
                       {post.date}
                     </p>
                   </div>
                 </div>
               </div>
             </Link>
           ))}
         </div>

         {/* View All Button */}
         <div className="flex justify-center">
           <Link href="/blog">
             <button className="bg-white/5 text-white px-10 py-4 rounded-full font-bold tracking-widest uppercase transition-all duration-300 hover:bg-primary hover:text-white border border-white/10 text-sm">
               View All Articles
             </button>
           </Link>
         </div>

       </div>
     </section>
   );
 }