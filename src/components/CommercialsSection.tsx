import VideoPlayer from "./VideoPlayer";
import YouTubeLinkCard from "./YouTubeLinkCard";

// 1. Import your Images (Thumbnails)
import commercial1Thumb from "@/assets/commercial-1.png";
import commercial2Thumb from "@/assets/commercial-2.png";
import commercial3 from "@/assets/commercial-3.png";

// 2. Import your Video Files
// Ensure these files exist in your assets folder!
import videoFile1 from "@/assets/commercial-1.mp4"; 
import videoFile2 from "@/assets/commercial-2.mp4";

const CommercialsSection = () => {
  return (
    <section className="section-spacing px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center mb-24 tracking-wide opacity-0 fade-in-up">
          COMMERCIALS
        </h2>
        
        {/* Row 1: Featured Work - 2 Large Video Players */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="opacity-0 fade-in-up stagger-1">
            <VideoPlayer 
              src={videoFile1}            // Pass the video file here
              thumbnail={commercial1Thumb} // Pass the image here
              alt="Automotive commercial" 
              large 
            />
          </div>
          <div className="opacity-0 fade-in-up stagger-2">
            <VideoPlayer 
              src={videoFile2}            // Pass the video file here
              thumbnail={commercial2Thumb} // Pass the image here
              alt="Fragrance commercial" 
              large 
            />
          </div>
        </div>
        
        {/* Row 2: Archive/Links - 3-column grid */}
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