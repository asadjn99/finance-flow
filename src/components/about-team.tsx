import Image from "next/image";

// Sample Data - Add your actual team members here
const teamMembers = [
  {
    name: "Asad Ullah",
    role: "Founder & CEO",
    // Make sure 'asad.png' is in your public/images folder
    image: "/images/asad.jpg",
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Product",
    // Using a placeholder, replace with real images
    image: "/images/asad.jpg", 
  },
  {
    name: "Alex Rodriguez",
    role: "CTO",
    image: "/images/asad.jpg",
  },
  {
    name: "Emily Blunt",
    role: "Lead Designer",
    image: "/images/asad.jpg",
  },
  {
    name: "John Carter",
    role: "Head of Marketing",
    image: "/images/asad.jpg",
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    image: "/images/asad.jpg",
  },
];

export function AboutTeam() {
  return (
    <section className="relative py-16 lg:py-32 bg-background overflow-hidden">
      {/* Standard container with your preferred padding */}
      <div className="container mx-auto px-4 md:px-32">
        
        {/* === Header Section === */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
            Our team and investors
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
          </p>
        </div>

        {/* === Team Grid === 
            Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 ">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-start group bg-white/10 p-4 rounded-[2rem] ">
              
              {/* Image Container with Hover Effect */}
              <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden mb-6  border border-white/5 group-hover:border-primary/50 transition-all duration-500">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Name & Role */}
              <h3 className="text-white font-bold text-xl mb-2 tracking-wide">
                {member.name}
              </h3>
              <p className="text-primary text-sm uppercase tracking-widest font-bold">
                {member.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}