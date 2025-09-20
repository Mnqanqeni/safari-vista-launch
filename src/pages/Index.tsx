import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LocationsShowcase from "@/components/LocationsShowcase";
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
        <section id="destinations">
          <LocationsShowcase />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="tours">
          <Pricing />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
