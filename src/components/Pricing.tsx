import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const packages = [
  {
    name: "Classic Safari",
    price: "2,299",
    duration: "5 Days",
    description: "Perfect introduction to African wildlife with comfortable accommodations",
    features: [
      "Kruger National Park game drives",
      "4-star lodge accommodation",
      "All meals included",
      "Professional guide",
      "Transportation included",
      "Wildlife photography tips"
    ],
    popular: false
  },
  {
    name: "Premium Adventure",
    price: "4,599",
    duration: "8 Days",
    description: "Extended safari experience with luxury amenities and exclusive locations",
    features: [
      "Multi-park safari experience",
      "5-star luxury lodge",
      "Gourmet dining experiences",
      "Private game drives",
      "Bush dinner under stars",
      "Cultural village visit",
      "Hot air balloon safari",
      "Professional photography guide"
    ],
    popular: true
  },
  {
    name: "Ultimate Expedition",
    price: "7,999",
    duration: "12 Days",
    description: "The complete African safari experience with exclusive access and luxury service",
    features: [
      "Three iconic parks tour",
      "Ultra-luxury safari camps",
      "Private chef & butler service",
      "Helicopter transfers",
      "Exclusive wildlife encounters",
      "Conservation project visit",
      "Private airstrip access",
      "Customized itinerary",
      "24/7 concierge service"
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Safari Tour Packages
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully crafted safari experiences, each designed to offer 
            unforgettable encounters with Africa's incredible wildlife
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.name}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-safari hover:-translate-y-2 ${
                pkg.popular 
                  ? 'ring-2 ring-primary shadow-lg scale-105' 
                  : 'bg-gradient-card border-0 shadow-card'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-golden text-center py-2">
                  <span className="text-white font-semibold flex items-center justify-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                    <Star className="w-4 h-4" />
                  </span>
                </div>
              )}
              
              <CardHeader className={`text-center ${pkg.popular ? 'pt-12' : 'pt-6'}`}>
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {pkg.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-primary">
                    ${pkg.price}
                  </span>
                  <span className="text-muted-foreground text-lg ml-2">
                    / {pkg.duration}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {pkg.description}
                </p>
              </CardHeader>
              
              <CardContent className="p-6 pt-0">
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={pkg.popular ? "default" : "safari"} 
                  size="lg" 
                  className="w-full text-lg py-3"
                >
                  Book This Safari
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All packages include airport transfers, park fees, and comprehensive travel insurance
          </p>
          <Button variant="outline" size="lg">
            Compare All Packages
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;