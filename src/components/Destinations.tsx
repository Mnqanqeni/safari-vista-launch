import { Card, CardContent } from "@/components/ui/card";
import krugerImage from "@/assets/kruger-park.jpg";
import serengetiImage from "@/assets/serengeti.jpg";
import okavangoDeltaImage from "@/assets/okavango-delta.jpg";

const destinations = [
  {
    name: "Kruger National Park",
    location: "South Africa",
    description: "Home to the famous Big Five, Kruger offers incredible wildlife viewing opportunities across diverse ecosystems.",
    image: krugerImage,
    highlights: ["Big Five", "Ancient Baobab Trees", "Bird Watching"]
  },
  {
    name: "Serengeti National Park", 
    location: "Tanzania",
    description: "Witness the Great Migration and experience the endless plains where millions of animals roam freely.",
    image: serengetiImage,
    highlights: ["Great Migration", "Endless Plains", "Predator Action"]
  },
  {
    name: "Okavango Delta",
    location: "Botswana", 
    description: "Explore pristine wetlands teeming with wildlife in one of Africa's last remaining wilderness areas.",
    image: okavangoDeltaImage,
    highlights: ["Water Safari", "Pristine Wilderness", "Unique Ecosystem"]
  }
];

const Destinations = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Safari Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover breathtaking landscapes and incredible wildlife across Africa's most iconic parks
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card 
              key={destination.name} 
              className="group overflow-hidden bg-gradient-card border-0 shadow-card hover:shadow-safari transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {destination.location}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {destination.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {destination.description}
                </p>
                
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-safari-bronze mb-2">Highlights:</p>
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight) => (
                      <span 
                        key={highlight}
                        className="bg-safari-cream text-safari-bronze px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;