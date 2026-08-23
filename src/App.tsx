import Navbar from './sections/Navbar';
import HeroSection from './sections/HeroSection';
import StatsSection from './sections/StatsSection';
import ProblemSection from './sections/ProblemSection';
import FeaturesSection from './sections/FeaturesSection';
import GallerySection from './sections/GallerySection';
import TestimonialsSection from './sections/TestimonialsSection';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-offwhite">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ProblemSection />
      <FeaturesSection />
      <GallerySection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
