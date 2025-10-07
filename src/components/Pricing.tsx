import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Crown } from "lucide-react";
import { Link } from "react-router-dom";

const packages = [
  {
    name: "Driver Service Only",
    price: "",
    duration: "3 Days",
    description: "Our most popular service! Perfect for travelers with existing accommodation - just bring yourself and enjoy a trusted, professional driver for all Garden Route activities",
    currency: "",
    minPeople: "more than 2 people",
    features: [
      "Expert driver specializing in Garden Route",
      "Professional, trusted, and experienced guide",
      "Route 62 scenic drive with all stops",
      "Cango Caves exploration coordination",
      "Elephant encounter at Buffelsdrif",
      "Kaaimans River kayaking transport",
      "Game drive at Botlierskop coordination",
      "Storms River activities and hiking",
      "Flexible pickup from your accommodation",
      "All transport and fuel included"
    ],
    popular: true
  },
  {
    name: "Garden Route Epic Adventure",
    price: "5,000",
    duration: "3 Days",
    description: "The complete Garden Route experience with caves, wildlife, and adventure activities",
    currency: "R",
    minPeople: "3 people minimum",
    features: [
      "Route 62 scenic drive",
      "Cango Caves exploration tour",
      "Elephant encounter at Buffelsdrif",
      "Kaaimans River kayaking adventure",
      "Game drive at Botlierskop Private Reserve",
      "2-night chalet accommodation in Tsitsikamma",
      "Storms River Mouth hiking trail",
      "Departure 4:40 AM from Cape Town"
    ],
    popular: false
  },
  {
    name: "Group Adventure",
    price: "4,700",
    duration: "3 Days",
    description: "Special pricing for groups of 4 or more people - same epic adventure at a better rate",
    currency: "R",
    minPeople: "4+ people",
    features: [
      "Route 62 scenic drive",
      "Cango Caves exploration tour",
      "Elephant encounter at Buffelsdrif",
      "Kaaimans River kayaking adventure",
      "Game drive at Botlierskop Private Reserve",
      "2-night chalet accommodation in Tsitsikamma",
      "Storms River Mouth hiking trail",
      "Departure 4:40 AM from Cape Town"
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-safari-cream">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Garden Route Tour Packages
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2">
            Experience the ultimate Garden Route adventure with our epic 3-day tour packages,
            featuring caves, wildlife encounters, and breathtaking coastal landscapes
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-10 sm:mb-12 md:mb-16">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.name}
              className={`relative overflow-hidden transition-all duration-500 hover:shadow-safari hover:-translate-y-2 sm:hover:-translate-y-4 transform bg-white ${
                pkg.popular 
                  ? 'ring-2 sm:ring-4 ring-safari-gold shadow-gold scale-100 sm:scale-105 z-10' 
                  : 'border-0 shadow-card'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-sunset text-center py-2 sm:py-3 z-20">
                  <span className="text-white font-bold flex items-center justify-center gap-1.5 sm:gap-2 text-sm sm:text-base md:text-lg">
                    <Crown className="w-4 h-4 sm:w-5 sm:h-5" />
                    Most Popular Choice
                    <Crown className="w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                </div>
              )}
              
              <CardHeader className={`text-center ${pkg.popular ? 'pt-12 sm:pt-16 pb-6 sm:pb-8' : 'pt-6 sm:pt-8 pb-6 sm:pb-8'}`}>
                <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4 px-2">
                  {pkg.name}
                </CardTitle>
                <div className="mb-4 sm:mb-6">
                  {pkg.price ? (
                    <>
                      <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-safari-brown">
                        {pkg.currency || "R"}{pkg.price}
                      </span>
                      <span className="text-muted-foreground text-lg sm:text-xl ml-2 sm:ml-3">
                        / {pkg.duration}
                      </span>
                    </>
                  ) : (
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-safari-brown">
                      Contact for Pricing
                    </span>
                  )}
                  {pkg.minPeople && (
                    <div className="text-xs sm:text-sm text-muted-foreground mt-2">
                      {pkg.minPeople}
                    </div>
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base md:text-lg px-2 sm:px-4">
                  {pkg.description}
                </p>
              </CardHeader>
              
              <CardContent className="p-4 sm:p-6 md:p-8 pt-0">
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 sm:gap-3">
                      <Check className="w-5 h-5 sm:w-6 sm:h-6 text-safari-green flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm sm:text-base leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={pkg.popular ? "golden" : "adventure"} 
                  size="lg" 
                  className="w-full text-base sm:text-lg py-3 sm:py-4 h-auto"
                  asChild
                >
                  <Link to={`/booking?service=${
                    pkg.name === "Driver Service Only" ? "driver" :
                    pkg.name === "Garden Route Epic Adventure" ? "epic" :
                    pkg.name === "Group Adventure" ? "group" : ""
                  }`}>
                    Book This Safari
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;