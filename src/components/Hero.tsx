import { Button } from "@/components/ui/button";
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
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
          Garden Route 
          <span className="block text-safari-gold">Epic Adventure</span>
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up opacity-90">
          Experience South Africa's stunning Garden Route on our 3-day epic adventure. 
          From Cango Caves to elephant encounters, create memories that will last a lifetime.
        </p>
        
        <Button 
          size="lg" 
          className="bg-safari-gold hover:bg-safari-gold/90 text-black font-semibold px-10 py-7 text-xl shadow-2xl hover:shadow-safari-gold/50 transition-all duration-300 hover:scale-110"
          onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
        >
          View Adventure Gallery
        </Button>
      </div>
      
    </section>
  );
};

export default Hero;