import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import GallerySection from "../components/GallerySection";
import HomeHero from "../components/HomeHero";
import ProcessSection from "../components/ProcessSection";
import ProductsSection from "../components/ProductsSection";
import PhotoGallery from "../components/PhotoGallery";
import VideoGallery from "../components/VideoGallery";
import TestimonialsSection from "../components/TestimonialsSection";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <main>
      <HomeHero />
      <ProcessSection />
      <ProductsSection />
      <WhyChooseUs />
      <GallerySection />
      <PhotoGallery />
      <VideoGallery />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Home;
