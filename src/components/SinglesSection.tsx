import SpotifyCard from "./SpotifyCard";
import album1 from "@/assets/album-1.jpg";
import album2 from "@/assets/album-2.jpg";
import album3 from "@/assets/album-3.jpg";
import album4 from "@/assets/album-4.jpg";
import album5 from "@/assets/album-5.jpg";

const singles = [
  { albumArt: album1, title: "Midnight Reflections", url: "https://open.spotify.com" },
  { albumArt: album2, title: "Neon Dreams", url: "https://open.spotify.com" },
  { albumArt: album3, title: "Golden Hour", url: "https://open.spotify.com" },
  { albumArt: album4, title: "Above the Clouds", url: "https://open.spotify.com" },
  { albumArt: album5, title: "Chrome", url: "https://open.spotify.com" },
];

const SinglesSection = () => {
  return (
    <section className="section-spacing px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-12 sm:mb-16 md:mb-24 tracking-wide opacity-0 fade-in-up">
          SINGLES
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {singles.map((single, index) => (
            <div key={index} className={`opacity-0 fade-in-up stagger-${index + 1}`}>
              <SpotifyCard
                albumArt={single.albumArt}
                title={single.title}
                url={single.url}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SinglesSection;
