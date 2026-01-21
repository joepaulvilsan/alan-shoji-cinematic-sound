import moviePoster1 from "@/assets/movie-poster-1.jpeg";
import moviePoster2 from "@/assets/movie-poster-2.jpeg";
import moviePoster3 from "@/assets/movie-poster-3.jpeg";
import moviePoster4 from "@/assets/movie-poster-4.jpeg";

const posters = [moviePoster1, moviePoster2, moviePoster3, moviePoster4];

const FilmScoresSection = () => {
  return (
    <section className="section-spacing px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center mb-24 tracking-wide opacity-0 fade-in-up">
          FILM SCORES
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
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
