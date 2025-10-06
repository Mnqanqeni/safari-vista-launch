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
    <section className="py-20 bg-safari-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Garden Route Tour Packages
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Experience the ultimate Garden Route adventure with our epic 3-day tour packages,
            featuring caves, wildlife encounters, and breathtaking coastal landscapes
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.name}
              className={`relative overflow-hidden transition-all duration-500 hover:shadow-safari hover:-translate-y-4 transform bg-white ${
                pkg.popular 
                  ? 'ring-4 ring-safari-gold shadow-gold scale-105 z-10' 
                  : 'border-0 shadow-card'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-sunset text-center py-3 z-20">
                  <span className="text-white font-bold flex items-center justify-center gap-2 text-lg">
                    <Crown className="w-5 h-5" />
                    Most Popular Choice
                    <Crown className="w-5 h-5" />
                  </span>
                </div>
              )}
              
              <CardHeader className={`text-center ${pkg.popular ? 'pt-16 pb-8' : 'pt-8 pb-8'}`}>
                <CardTitle className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {pkg.name}
                </CardTitle>
                <div className="mb-6">
                  {pkg.price ? (
                    <>
                      <span className="text-5xl md:text-6xl font-bold text-safari-brown">
                        {pkg.currency || "R"}{pkg.price}
                      </span>
                      <span className="text-muted-foreground text-xl ml-3">
                        / {pkg.duration}
                      </span>
                    </>
                  ) : (
                    <span className="text-2xl md:text-3xl font-bold text-safari-brown">
                      Contact for Pricing
                    </span>
                  )}
                  {pkg.minPeople && (
                    <div className="text-sm text-muted-foreground mt-2">
                      {pkg.minPeople}
                    </div>
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg px-4">
                  {pkg.description}
                </p>
              </CardHeader>
              
              <CardContent className="p-8 pt-0">
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-safari-green flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={pkg.popular ? "golden" : "adventure"} 
                  size="lg" 
                  className="w-full text-lg py-4 h-auto"
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
        
        <div className="text-center bg-white rounded-2xl p-8 shadow-card max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-4">Important Booking Information</h3>
          <p className="text-muted-foreground mb-6 text-lg">
            Prices exclude meals, drinks, and optional activities like bungy jumping. 
            A minimum of 3 people is required for the tour to proceed.
          </p>
          <div className="flex justify-center">
            <Button variant="golden" size="lg" className="text-lg px-8" asChild>
              <Link to="/booking">Book Your Adventure</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Departure at 4:40 AM from Cape Town • Confirmation email provided after booking
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;