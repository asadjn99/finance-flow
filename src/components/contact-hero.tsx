import { Mail, User, Building2, MessageSquare, Edit3, } from "lucide-react";
// import { TrendingDown, Zap, Lock } from "lucide-react";

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
    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
      <Icon size={18} className="text-white" />
    </div>
    <span className="text-white text-sm font-medium tracking-wide">{title}</span>
  </div>
);



export function ContactHero() {
  return (
    <section className="relative py-6 lg:py-6 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-32">
        
        {/* Main Layout*/}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-6">

            {/* === Left Column: Contact Form === */}
          <div className="w-full lg:w-7/12">
            <form className=" p-0 md:p-6 rounded-[2.5rem] border border-white/5 flex flex-col gap-8">
               <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
              Get in touch
            </h1>
              {/* Top Row: Name & Email */}
              <div className="flex flex-col md:flex-row gap-8">
                {/* Name Input */}
                <div className="w-full">
                  <label htmlFor="name" className="block text-white font-bold text-sm tracking-widest uppercase mb-3 pl-1">
                    Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 text-primary" size={18} />
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="Full name"
                      className="w-full bg-white/10 rounded-xl py-2 pl-14 pr-6 text-white placeholder:text-gray-500 focus:outline-none focus:bg-white/10 transition-colors border border-transparent focus:border-primary/30" 
                    />
                  </div>
                </div>
                {/* Email Input */}
                <div className="w-full">
                  <label htmlFor="email" className="block text-white font-bold text-sm tracking-widest uppercase mb-3 pl-1">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-primary" size={18} />
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="asadjn99@gmail.com"
                      className="w-full bg-white/10 rounded-xl py-2 pl-14 pr-6 text-white placeholder:text-gray-500 focus:outline-none focus:bg-white/10 transition-colors border border-transparent focus:border-primary/30" 
                    />
                  </div>
                </div>
              </div>

              {/* Middle Row: Company & Subject */}
              <div className="flex flex-col md:flex-row gap-8">
                {/* Company Input */}
                <div className="w-full">
                  <label htmlFor="company" className="block text-white font-bold text-sm tracking-widest uppercase mb-3 pl-1">
                    Company
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-5 top-1/2 -translate-y-1/2 text-primary" size={18} />
                    <input 
                      type="text" 
                      id="company" 
                      placeholder="Company name"
                      className="w-full bg-white/10 rounded-xl py-2 pl-14 pr-6 text-white placeholder:text-gray-500 focus:outline-none focus:bg-white/10 transition-colors border border-transparent focus:border-primary/30" 
                    />
                  </div>
                </div>
                {/* Subject Input */}
                <div className="w-full">
                  <label htmlFor="subject" className="block text-white font-bold text-sm tracking-widest uppercase mb-3 pl-1">
                    Subject
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-5 top-1/2 -translate-y-1/2 text-primary" size={18} />
                    <input 
                      type="text" 
                      id="subject" 
                      placeholder="Subject"
                      className="w-full bg-white/10 rounded-xl py-2 pl-14 pr-6 text-white placeholder:text-gray-500 focus:outline-none focus:bg-white/10 transition-colors border border-transparent focus:border-primary/30" 
                    />
                  </div>
                </div>
              </div>

              {/* Bottom: Message Textarea */}
              <div className="w-full">
                <label htmlFor="message" className="block text-white font-bold text-sm tracking-widest uppercase mb-3 pl-1">
                  Message
                </label>
                <div className="relative">
                  <Edit3 className="absolute left-5 top-6 text-primary" size={18} />
                  <textarea 
                    id="message" 
                    rows={6}
                    placeholder="Your message"
                    className="w-full bg-white/10 rounded-[1rem] py-5 pl-14 pr-6 text-white placeholder:text-gray-500 focus:outline-none focus:bg-white/10 transition-colors resize-none border border-transparent focus:border-primary/30" 
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="w-full md:w-auto md:self-start bg-primary text-white px-7 py-4 rounded-full font-bold tracking-widest uppercase text-sm hover:bg-[#050605] hover:text-primary transition-all duration-300 shadow-lg shadow-primary/10 hover:shadow-primary/20 mt-4">
                SEND MESSAGE
              </button>

            </form>
          </div>
          
          {/* === Right Column: Text Content === */}
          <div className="w-full lg:w-5/12 flex flex-col pt-32">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-8 tracking-tight leading-tight">
              Get in touch with us
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat.
            </p>
            {/* List of benefits using the helper component */}
            <div className="flex flex-col gap-6 w-full mt-8">
              <RewardItem 
                icon={Mail} 
                title="contact@example.com" 
              />
              <RewardItem 
                icon={Mail} 
                title="support@example.com" 
              />
              <RewardItem 
                icon={Mail} 
                title="press@example.com" 
              />
            </div>
          </div>

          

        </div>
      </div>
    </section>
  );
}