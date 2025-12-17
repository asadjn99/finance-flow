import Image from "next/image";

export function AboutMission() {
  return (
    <section className="relative py-16 lg:py-32 bg-background overflow-hidden">
      
      {/* 1. Main Content Container 
          We use a flex layout that stacks on mobile and is side-by-side on desktop.
      */}
      <div className="container mx-auto px-4 md:px-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-0">
          
          {/* === Left Column: Text Content === */}
          <div className="w-full lg:w-1/2 flex flex-col gap-16">
            
            {/* Block 1: Our Mission */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Our mission
              </h2>
              <p className="text-gray-400 leading-relaxed text-sm text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem 
                purus justo, ultricies. Sollicitudin odio elementum urna placerat lacus, 
                vulputate. Non malesuada viverra et ultrices cras. Tincidunt tempor, 
                blandit augue ac feugiat. Praesent arcu tempus ullamcorper quisque in. 
                Magna fermentum, lacus, fermentum arcu.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm mt-6 text-justify">
                Vulputate pellentesque proin facilisis dignissim gravida sed faucibus 
                nunc. Nunc eget pharetra, in vitae porta lacus. Elit in nisl, in quis nulla 
                tellus suscipit id. Semper velit odio cras pretium tristique habitant. Elit eu 
                penatibus congue orci turpis. Enim diam id.
              </p>
            </div>

            {/* Block 2: Our Story */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Our story
              </h2>
              <p className="text-gray-400 leading-relaxed text-sm text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem 
                purus justo, ultricies. Sollicitudin odio elementum urna placerat lacus, 
                vulputate. Non malesuada viverra et ultrices cras. Tincidunt tempor, 
                blandit augue ac feugiat. Praesent arcu tempus ullamcorper quisque in. 
                Magna fermentum, lacus, fermentum arcu.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm mt-6 text-justify">
                Vulputate pellentesque proin facilisis dignissim gravida sed faucibus 
                nunc. Nunc eget pharetra, in vitae porta lacus. Elit in nisl, in quis nulla 
                tellus suscipit id. Semper velit odio cras pretium tristique habitant. Elit eu 
                penatibus congue orci turpis.
              </p>
            </div>

          </div>

          {/* === Right Column: Spacer for Desktop === 
             Since the image is absolute, we just leave this empty to push the layout,
             or we rely on the absolute positioning entirely.
          */}
        </div>
      </div>

      {/* === 2. The Globe Image ===
         - Desktop (lg): Absolute positioned to the right, centered vertically.
         - Mobile: Relative, centered at the bottom, appearing after text.
      */}
      <div className="relative mt-12 lg:mt-0 lg:absolute lg:top-1/2 lg:right-0 lg:-translate-y-1/2 lg:w-[50vw] h-[400px] lg:h-[800px] w-full flex items-center justify-center lg:justify-end pointer-events-none">
        
        {/* The Image Itself */}
        <div className="relative w-full h-full lg:translate-x-[10%]">
          <Image
            src="/images/planet.png"
            alt="Global Network"
            fill
            className="object-contain lg:object-right"
          />
        </div>
      </div>

    </section>
  );
}