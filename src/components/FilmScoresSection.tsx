import moviePoster1 from "@/assets/movie-poster-1.jpeg";
import moviePoster2 from "@/assets/movie-poster-2.jpeg";
import moviePoster3 from "@/assets/movie-poster-3.jpeg";
import moviePoster4 from "@/assets/movie-poster-4.jpeg";
import moviePoster5 from "@/assets/movie-poster-5.jpeg";

const posters = [moviePoster1, moviePoster2, moviePoster3, moviePoster4, moviePoster5];

const FilmScoresSection = () => {
  return (
    <section className="pt-0 pb-16 sm:pb-24 md:pb-32 lg:pb-48 xl:pb-64 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-12 sm:mb-16 md:mb-24 tracking-wide opacity-0 fade-in-up">
          FILM SCORES
        </h2>
        
        {/* Desktop: 3 on top, 2 centered below | Mobile: 2-column grid */}
        <div className="hidden md:block">
          {/* Top row: 3 posters */}
          <div className="grid grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
            {posters.slice(0, 3).map((poster, index) => (
              <div
                key={index}
                className={`aspect-[2/3] overflow-hidden opacity-0 fade-in-up stagger-${index + 1}`}
              >
                <img
                  src={poster}
                  alt={`Film score project ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
          
          {/* Bottom row: 2 posters centered */}
          <div className="flex justify-center gap-6 lg:gap-8">
            {posters.slice(3, 5).map((poster, index) => (
              <div
                key={index + 3}
                className={`aspect-[2/3] w-[calc(33.333%-1rem)] overflow-hidden opacity-0 fade-in-up stagger-${index + 4}`}
              >
                <img
                  src={poster}
                  alt={`Film score project ${index + 4}`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile: 2-column grid */}
        <div className="md:hidden grid grid-cols-2 gap-3 sm:gap-4">
          {posters.map((poster, index) => (
            <div
              key={index}
              className={`aspect-[2/3] overflow-hidden opacity-0 fade-in-up stagger-${index + 1}`}
            >
              <img
                src={poster}
                alt={`Film score project ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilmScoresSection;
