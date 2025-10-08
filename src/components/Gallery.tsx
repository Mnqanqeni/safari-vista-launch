import { useState, useRef, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

import giraffe1 from "@/assets/gallery-giraffe-1.jpg";
import leopard from "@/assets/gallery-leopard.jpg";
import elephants from "@/assets/gallery-elephants.jpg";
import giraffe2 from "@/assets/gallery-giraffe-2.jpg";
import cave from "@/assets/gallery-cave.jpg";
import lions from "@/assets/gallery-lions.jpg";
import zebras from "@/assets/gallery-zebras.jpg";

const galleryImages = [
  { src: giraffe1, alt: "Giraffe in natural habitat", title: "Majestic Giraffe" },
  { src: elephants, alt: "Elephant encounter experience", title: "Elephant Interaction" },
  { src: leopard, alt: "Leopard resting in the wild", title: "Leopard Sighting" },
  { src: giraffe2, alt: "Giraffe standing tall", title: "Wildlife Wonder" },
  { src: zebras, alt: "Safari zebra viewing", title: "Zebra Safari" },
  { src: lions, alt: "Lions on the trail", title: "Lion Pride" },
  { src: cave, alt: "Cave exploration adventure", title: "Cave Exploration" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Add mouse wheel horizontal scrolling
  const handleWheel = (e: React.WheelEvent) => {
    if (carouselRef.current) {
      const container = carouselRef.current.querySelector('[data-carousel-content]');
      if (container) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    }
  };

  // Track scroll position for pagination dots
  useEffect(() => {
    const container = carouselRef.current?.querySelector('[data-carousel-content]');
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const itemWidth = container.scrollWidth / galleryImages.length;
      const index = Math.round(scrollLeft / itemWidth);
      setCurrentIndex(index);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Adventure Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Witness the breathtaking moments majestic wildlife to stunning landscapes
          </p>
        </div>

        {/* Horizontal Carousel for all screens */}
        <div ref={carouselRef} onWheel={handleWheel}>
          <Carousel 
            className="w-full cursor-grab active:cursor-grabbing"
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              containScroll: "trimSnaps",
            }}
          >
          <CarouselContent className="-ml-2 md:-ml-4" data-carousel-content>
            {galleryImages.map((image, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-4/5 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <Card
                  className="overflow-hidden cursor-pointer group hover:shadow-2xl transition-all duration-300"
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white font-semibold text-sm">{image.title}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
            <CarouselPrevious className="hidden md:flex left-2 md:left-4 bg-white/90 hover:bg-white shadow-lg border-2 border-safari-brown/20 hover:border-safari-gold w-12 h-12 md:w-14 md:h-14 transition-all duration-300 hover:scale-110" />
            <CarouselNext className="hidden md:flex right-2 md:right-4 bg-white/90 hover:bg-white shadow-lg border-2 border-safari-brown/20 hover:border-safari-gold w-12 h-12 md:w-14 md:h-14 transition-all duration-300 hover:scale-110" />
          </Carousel>
        </div>

        {/* Pagination Dots for Mobile */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {galleryImages.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-safari-gold'
                  : 'w-2 bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <p className="text-white text-xl font-semibold bg-black/50 inline-block px-6 py-2 rounded-full">
                  {galleryImages[selectedImage].title}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
