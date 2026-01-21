import VideoPlayer from "./VideoPlayer";
import YouTubeLinkCard from "./YouTubeLinkCard";
import commercial1 from "@/assets/commercial-1.jpg";
import commercial2 from "@/assets/commercial-2.jpg";
import commercial3 from "@/assets/commercial-3.jpg";

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
            <VideoPlayer thumbnail={commercial1} alt="Automotive commercial" large />
          </div>
          <div className="opacity-0 fade-in-up stagger-2">
            <VideoPlayer thumbnail={commercial2} alt="Fragrance commercial" large />
          </div>
        </div>
        
        {/* Row 2: Archive/Links - 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="opacity-0 fade-in-up stagger-3">
            <YouTubeLinkCard
              thumbnail={commercial3}
              title="Luxury Watch Brand Campaign – Original Score"
              url="https://www.youtube.com/watch?v=sovs9culguM"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialsSection;
