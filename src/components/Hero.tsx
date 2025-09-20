import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-safari.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Discover Your 
          <span className="block text-primary-glow">Safari Adventure</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Experience the untamed beauty of Africa through our expertly guided safari tours. 
          Create memories that will last a lifetime.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
          <Button variant="hero" size="lg" className="text-lg px-8 py-3">
            Explore Tours
          </Button>
          <Button variant="hero-outline" size="lg" className="text-lg px-8 py-3">
            Watch Video
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-safari-pulse">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;