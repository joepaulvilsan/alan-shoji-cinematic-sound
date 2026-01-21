const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-32">
      <div className="max-w-3xl mx-auto text-center opacity-0 fade-in-up">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-wide mb-6">
          ALAN SHOJI
        </h1>
        <p className="font-sans text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-16">
          Music Producer & Composer
        </p>
        <p className="font-sans text-base md:text-lg leading-relaxed text-muted-light max-w-xl mx-auto opacity-0 fade-in-up stagger-2">
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
