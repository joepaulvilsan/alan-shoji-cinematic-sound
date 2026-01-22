import VideoPlayer from "./VideoPlayer";
import YouTubeLinkCard from "./YouTubeLinkCard";
import commercial1Thumb from "@/assets/commercial-1.png";
import commercial2Thumb from "@/assets/commercial-2.png";
import commercial3 from "@/assets/commercial-3.png";
import videoFile1 from "@/assets/commercial-1.mp4"; 
import videoFile2 from "@/assets/commercial-2.mp4";

const CommercialsSection = () => {
  return (
    // FIXED: Replaced "section-spacing" with manual padding to reduce gaps
    // py-12 (48px) to py-24 (96px) max.
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center mb-12 sm:mb-16 md:mb-20 tracking-wide opacity-0 fade-in-up">
          COMMERCIALS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="opacity-0 fade-in-up stagger-1">
            <VideoPlayer 
              src={videoFile1}
              thumbnail={commercial1Thumb}
              alt="Automotive commercial" 
              large 
            />
          </div>
          <div className="opacity-0 fade-in-up stagger-2">
            <VideoPlayer 
              src={videoFile2}
              thumbnail={commercial2Thumb}
              alt="Fragrance commercial" 
              large 
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="opacity-0 fade-in-up stagger-3">
            <YouTubeLinkCard
              thumbnail={commercial3}
              title="BLINKIT DOSA"
              url="https://www.youtube.com/watch?v=sovs9culguM"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialsSection;