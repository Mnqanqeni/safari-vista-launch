import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import krugerImage from "@/assets/kruger-national-park.jpg";
import serengetiImage from "@/assets/serengeti-tanzania.jpg";
import okavangoDeltaImage from "@/assets/okavango-delta.jpg";

const destinations = [
  {
    name: "Cango Caves",
    location: "Oudtshoorn",
    description: "Explore the magnificent limestone formations in one of South Africa's finest cave systems, featuring spectacular chambers and underground wonders.",
    image: krugerImage,
    highlights: ["Underground Wonders", "Limestone Formations", "Cave Tours", "Adventure Tours"]
  },
  {
    name: "Tsitsikamma National Park", 
    location: "Garden Route",
    description: "Hike the spectacular Storms River Mouth trail and experience pristine coastal forest with suspension bridges and breathtaking ocean views.",
    image: serengetiImage,
    highlights: ["Forest Trails", "River Mouth", "Suspension Bridge", "Coastal Views"]
  },
  {
    name: "Botlierskop Game Reserve",
    location: "Mossel Bay", 
    description: "Experience thrilling safari game drives in this private reserve along the Garden Route, home to diverse wildlife and conservation efforts.",
    image: okavangoDeltaImage,
    highlights: ["Game Drives", "Wildlife Safari", "Private Reserve", "Conservation"]
  }
];

const LocationsShowcase = () => {
  return (
    <section className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Garden Route Adventure Highlights
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Discover the most spectacular destinations along South Africa's Garden Route with caves, wildlife, and coastal adventures
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {destinations.map((destination, index) => (
            <Card 
              key={destination.name} 
              className="group overflow-hidden bg-white border-0 shadow-safari hover:shadow-xl transition-all duration-500 hover:-translate-y-3 transform"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-safari-gold text-white px-4 py-2 rounded-full text-sm font-bold shadow-gold">
                  {destination.location}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {destination.name}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                  {destination.description}
                </p>
                
                <div className="space-y-4 mb-6">
                  <p className="text-sm font-bold text-safari-brown mb-3">Experience Highlights:</p>
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight) => (
                      <span 
                        key={highlight}
                        className="bg-safari-cream text-safari-brown px-3 py-1 rounded-full text-sm font-medium border border-safari-brown/20"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button variant="adventure" className="w-full">
                  Explore Destination
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsShowcase;