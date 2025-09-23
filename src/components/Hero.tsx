import { Button } from "@/components/ui/button";
import heroImage from "@/assets/safari-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
          Garden Route 
          <span className="block text-safari-gold">Epic Adventure</span>
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up opacity-90">
          Experience South Africa's stunning Garden Route on our 3-day epic adventure. 
          From Cango Caves to elephant encounters, create memories that will last a lifetime.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
          <Button variant="golden" size="lg" className="text-lg px-8 py-4 h-auto">
            Explore Destinations
          </Button>
          <Button variant="hero-outline" size="lg" className="text-lg px-8 py-4 h-auto">
            View Packages
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;