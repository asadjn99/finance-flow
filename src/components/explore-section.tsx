import Image from "next/image";

export const ExploreSection = () => {
  return (
    /* We add 'mt-20' or 'mt-32' to the section to provide space 
       for the image that is overflowing from the top.
    */
    <section className="w-full bg-primary mt-20 lg:mt-32 relative">
      <div className="container mx-auto px-4 md:px-32">
        <div className="flex flex-col lg:flex-row items-center min-h-[450px] md:max-h lg:min-h-[500px]">
          
          {/* === Left Column: Text Content === */}
          <div className="w-full lg:w-1/2 py-16 lg:py-24 text-center lg:text-left z-10">
            <h2 className="text-1xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight">
              Explore endless possibilities with FinanceFlow
            </h2>
            <p className="text-white/90 text-lg mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
            </p>
            
            <button className="bg-white text-primary px-10 py-4 rounded-full font-bold tracking-widest uppercase transition-all duration-300 hover:bg-black shadow-xl">
              DOWNLOAD APP
            </button>
          </div>

          {/* === Right Column: The Pinned & Overflowing Image === */}
          <div className="w-full lg:w-1/2 relative self-stretch flex items-end">
            {/* lg:absolute: takes it out of flow on desktop to allow overflow
              lg:-top-20: pulls the image UPWARDS outside the green box
              bottom-0: pins it to the floor
            */}
            <div className="relative lg:absolute lg:-top-20 lg:bottom-0 lg:right-0 w-full flex justify-center lg:justify-end items-end">
              <Image 
                src="/images/iphone1.png"
                alt="Finance Flow Mobile App Interface"
                width={550}
                height={700}
                className="w-auto h-[250px] sm:h-[125%] lg:h-[145%] object-contain object-bottom drop-shadow-2xl"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};