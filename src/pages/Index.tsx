import HeroSection from "@/components/HeroSection";
import FilmScoresSection from "@/components/FilmScoresSection";
import CommercialsSection from "@/components/CommercialsSection";
import SinglesSection from "@/components/SinglesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FilmScoresSection />
      <CommercialsSection />
      <SinglesSection />
      <Footer />
    </main>
  );
};

export default Index;
