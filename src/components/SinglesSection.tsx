import SpotifyCard from "./SpotifyCard";
import album1 from "@/assets/album-1.png";
import album2 from "@/assets/album-2.png";
import album3 from "@/assets/album-3.png";
import album4 from "@/assets/album-4.png";
import album5 from "@/assets/album-5.png";

const singles = [
  { albumArt: album1, title: "Olivangi", url: "https://open.spotify.com/album/2gVmHw7FoOAx7FvPAyAhqe?si=DciWYTmbTnSFcX5dXunSoQ&nd=1&dlsi=108b74c980084796" },
  { albumArt: album2, title: "It's You And Me", url: "https://open.spotify.com/album/1RhHISE4m9LPM0843Dxxak?si=UgbeXauyTn2EDt0krXxUhA&nd=1&dlsi=947589d2349f4589" },
  { albumArt: album3, title: "Malayali Swag ", url: "https://open.spotify.com/track/6wQfZYUq0G7XMY1VGWbRcR?si=4237bb8682414f4a&nd=1&dlsi=9c01e7fd23b24d60" },
  { albumArt: album4, title: "Padhavi", url: "https://open.spotify.com/album/2NqsltyIAQqeEwPSdUY1lT?si=V5M3aaSETVWkIApflLWtmg&nd=1&dlsi=f34d51024f4c4bc7" },
  { albumArt: album5, title: "Theera Kadhalin", url: "https://open.spotify.com/track/3qDaxIJwdW6FN7g7RYH0Ls?si=ec4f1454043b4a32&nd=1&dlsi=64f3133325ed4852" },
];

const SinglesSection = () => {
  return (
    // FIXED: Replaced "section-spacing" with tight manual padding
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-12 sm:mb-16 md:mb-20 tracking-wide opacity-0 fade-in-up">
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