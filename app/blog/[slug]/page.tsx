import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { blogPosts } from "@/lib/blog-data";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react"; // Make sure to install lucide-react if not present
import { BlogNewsletter } from "@/components/blog-newsletter";
import { BlogGrid } from "@/components/blog-grid";

// 1. Generate Static Params
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// 2. The Page Component
export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-background min-h-screen flex flex-col">
      <Navbar />

      <article className="container mx-auto px-4 md:px-32 py-12 max-w-5xl flex-grow">
        
        {/* === 1. Back Button === */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-primary mb-12 transition-colors font-medium"
        >
          <ChevronLeft size={20} />
          Back to Articles
        </Link>

        {/* === 2. Header Section [Matches Top of Image] === */}
        <div className="max-w-4xl">
            {/* Author Block */}
            <div className="flex items-center gap-3 mb-6">
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
                    <p className="text-gray-500 text-[10px] mt-0.5 font-medium uppercase">
                        {post.date}
                    </p>
                </div>
            </div>

            {/* Title */}
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 leading-[1.1]">
                {post.title}
            </h1>

            {/* Subtitle / Excerpt */}
            <p className="text-gray-400 text-sm leading-relaxed mb-12">
                {post.excerpt}
            </p>
        </div>

        {/* === 3. Main Hero Image === */}
        <div className="relative w-full h-[200px] md:h-[400px]  overflow-hidden mb-16 border border-white/5">
          <Image 
            src={post.image} 
            alt={post.title} 
            fill 
            className="object-cover" 
            priority
          />
        </div>

        {/* === 4. Article Content [Structure matches Image] === */}
        <div className="max-w-3xl mx-auto prose prose-invert prose-lg text-gray-400 leading-loose">
          
          {/* Dynamic Content (Heading & Paragraphs) */}
          <h2 className="text-xl md:text-2xl font-bold text-white mb-6 mt-12">
            Learn what you need to know before you invest in a virtual currency
          </h2>
          <p className="mb-8 text-sm">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="mb-12 text-sm">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
            How do I know how secure is my wallet?
          </h2>
          <p className="mb-8 text-sm">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="mb-12 text-sm">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          {/* === Secondary Image (Middle of Content) === */}
          <div className="relative w-full h-[300px] overflow-hidden my-12 border border-white/5">
            <Image 
                src={post.image} // Reusing post image for demo, or use a specific secondary image
                alt="Secondary detail" 
                fill 
                className="object-cover" 
            />
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
            Learn what you need to know before you invest in a virtual currency
          </h2>
          <p className="mb-8  text-sm">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="mb-12  text-sm">
             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
             Lorem ipsum dolor sit amet.
          </p>

          {/* === Quote / Highlight Box [Matches Bottom of Image] === */}
          <div className="bg-[#1A1B1A] rounded-[2rem] p-8 md:p-12 my-12 text-center border border-white/5">
             <p className="text-white text-sm md:text-lg font-medium leading-relaxed italic">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
             </p>
          </div>

           <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
            Learn what you need to know before you invest in a virtual currency
          </h2>
          <p className=" text-sm">
             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
             Lorem ipsum dolor sit amet.
          </p>

        </div>
      </article>
      <BlogNewsletter />
      <BlogGrid />

      <Footer />
    </main>
  );
}