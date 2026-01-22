import profilePhoto from "@/assets/profile-photo.jpeg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32">
      <div className="max-w-3xl mx-auto text-center opacity-0 fade-in-up">
        {/* Profile Photo */}
        <div className="mb-8 sm:mb-10 md:mb-12 opacity-0 fade-in-up">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-muted/30 to-transparent" />
            <img
              src={profilePhoto}
              alt="Alan Shoji - Music Producer & Composer"
              className="w-full h-full object-cover rounded-full border border-border/30 shadow-2xl shadow-black/50"
            />
          </div>
        </div>
        
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-wide mb-4 sm:mb-6">
          ALAN SHOJI
        </h1>
        <p className="font-sans text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase text-muted-foreground mb-10 sm:mb-12 md:mb-16">
          Music Producer & Composer
        </p>
        <p className="font-sans text-sm sm:text-base md:text-lg leading-relaxed text-muted-light max-w-xl mx-auto px-2 sm:px-0 opacity-0 fade-in-up stagger-2">
          I'm Alan Shoji, a music producer and composer working across film, advertising, and independent projects. 
          I graduated in Electronic Music Production & Sound Design from Vienna Music Institute, Austria, 
          where the focus was on electronic production, composition, and audio creation for visual media. 
          I've been producing since 2017 and have worked on projects within the South Indian film industry 
          as well as commercial and industrial content. My work spans cinematic scoring, electronic production, 
          and brand-oriented music, adapting to the creative and practical needs of each project. 
          I'm comfortable working with tight timelines and typically deliver within 1–3 days, 
          depending on the scope and requirements.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
