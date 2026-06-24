import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import GallerySection from "../components/GallerySection";
import HomeHero from "../components/HomeHero";
import ProcessSection from "../components/ProcessSection";
import ProductsSection from "../components/ProductsSection";
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
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Home;
