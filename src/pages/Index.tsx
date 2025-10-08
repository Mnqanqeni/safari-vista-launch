import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LocationsShowcase from "@/components/LocationsShowcase";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <section id="destinations" className="py-16 md:py-20">
          <LocationsShowcase />
        </section>
        <section id="gallery" className="py-16 md:py-20">
          <Gallery />
        </section>
        <section id="about" className="py-16 md:py-20">
          <About />
        </section>
        <section id="tours" className="py-16 md:py-20">
          <Pricing />
        </section>
        <section id="contact" className="py-16 md:py-20">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
