import studioRoom from "@/assets/studio-room.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${studioRoom})` }}
      />
      
      {/* 40% Black Overlay - Keeps the room visible but darker */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* THE DEEP FADE FIX */}
      {/* h-[60%] = Taller shadow */}
      {/* from-black from-30% = The bottom 30% is SOLID BLACK. No transparency. */}
      <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black from-30% via-black/80 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center opacity-0 fade-in-up">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-wide mb-4 sm:mb-6 text-white">
          ALAN SHOJI
        </h1>
        <p className="font-sans text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase text-white/80 mb-8 sm:mb-10 md:mb-12">
          MUSIC PRODUCER, COMPOSER & MIX ENGINEER
        </p>
        <p className="font-sans text-xs sm:text-sm md:text-base leading-relaxed text-gray-300 max-w-xl mx-auto px-2 sm:px-0 opacity-0 fade-in-up stagger-2">
          Music producer & composer specializing in film, ads, and electronic scoring. 
          Vienna Music Institute graduate. Fast, adaptable, and detail-focused.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;