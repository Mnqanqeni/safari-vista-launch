import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import lionsImage from "@/assets/lions-safari.jpg";
import safariImage from "@/assets/safari-hero.jpg";
import tourVideo from "@/assets/tour-video.mp4";

const Hero = () => {
  const [currentMedia, setCurrentMedia] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const media = [
    { type: "image", src: lionsImage },
    { type: "image", src: safariImage },
    { type: "video", src: tourVideo }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMedia((prev) => (prev + 1) % media.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (videoRef.current && media[currentMedia].type === "video") {
      videoRef.current.currentTime = 5; // Skip first 5 seconds
      videoRef.current.play();
    }
  }, [currentMedia]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Media Carousel */}
      {media.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentMedia === index ? "opacity-100" : "opacity-0"
          }`}
        >
          {item.type === "image" ? (
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${item.src})` }}
            >
              <div className="absolute inset-0 bg-gradient-hero"></div>
            </div>
          ) : (
            <>
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                muted
                loop
                playsInline
              >
                <source src={item.src} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-hero"></div>
            </>
          )}
        </div>
      ))}
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-5xl mx-auto">
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 animate-fade-in leading-tight">
          Garden Route 
          <span className="block text-safari-gold mt-1 sm:mt-2">Epic Adventure</span>
        </h1>
        
        {/* Mobile text */}
        <p className="md:hidden text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up opacity-90 px-2">
          Discover the Garden Route in 3 days, from Cango Caves to elephant encounters. Memories for a lifetime!
        </p>
        
        {/* Desktop text */}
        <p className="hidden md:block text-xl md:text-2xl lg:text-3xl mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up opacity-90">
          Experience South Africa's stunning Garden Route on our 3-day epic adventure. 
          From Cango Caves to elephant encounters, create memories that will last a lifetime.
        </p>
        
        <div className="bg-black/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-10 max-w-2xl mx-auto border border-white/20 animate-fade-in">
          <p className="text-base sm:text-lg md:text-xl font-semibold text-safari-gold mb-2">
            ⭐ Most Popular Service
          </p>
          <p className="text-sm sm:text-base md:text-lg opacity-90 leading-relaxed">
            Already have accommodation? No problem. Our friendly, professional drivers with 5+ years of experience will get you there safely and comfortably. Not booked your stay yet? Check out our other packages!
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center animate-fade-in px-2 sm:px-0">
          <Button 
            size="lg" 
            className="bg-safari-gold hover:bg-safari-gold/90 text-black font-bold px-6 sm:px-10 py-5 sm:py-7 text-base sm:text-lg shadow-2xl hover:shadow-gold transition-all duration-300 hover:scale-105 border-2 border-white/20 w-full sm:w-auto"
            asChild
          >
            <Link to="/booking?service=driver">Book Your Driver Now</Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg shadow-xl border-2 border-white/40 backdrop-blur-sm transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            onClick={() => document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View All Packages
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-7 h-11 border-2 border-white/80 rounded-full flex justify-center items-start pt-2 backdrop-blur-sm bg-black/10">
          <div className="w-1.5 h-3 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;