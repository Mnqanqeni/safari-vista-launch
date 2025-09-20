import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Crown } from "lucide-react";

const packages = [
  {
    name: "Classic Safari",
    price: "2,499",
    duration: "5 Days",
    description: "Perfect introduction to African wildlife with comfortable accommodations and essential safari experiences",
    features: [
      "Kruger National Park game drives",
      "4-star safari lodge accommodation",
      "All meals and beverages included",
      "Professional safari guide",
      "Airport transfers included",
      "Wildlife photography workshops",
      "Cultural village visit",
      "Comprehensive travel insurance"
    ],
    popular: false
  },
  {
    name: "Premium Safari",
    price: "4,299",
    duration: "7 Days",
    description: "Enhanced safari experience with luxury amenities and exclusive wildlife encounters",
    features: [
      "Multi-park safari adventure",
      "5-star luxury safari lodge",
      "Gourmet dining experiences",
      "Private game drive vehicles",
      "Bush dinner under the stars",
      "Hot air balloon safari",
      "Spa treatments included",
      "Professional photography guide",
      "Exclusive conservation experience",
      "Premium travel insurance"
    ],
    popular: true
  },
  {
    name: "Ultimate Expedition",
    price: "7,999",
    duration: "10 Days",
    description: "The complete African safari experience with ultra-luxury service and exclusive access",
    features: [
      "Three iconic parks expedition",
      "Ultra-luxury safari camps",
      "Private chef and butler service",
      "Helicopter safari transfers",
      "Exclusive wildlife tracking",
      "Private conservation project visit",
      "Customized daily itineraries",
      "24/7 concierge service",
      "Professional wildlife photographer",
      "Private airstrip access",
      "Luxury spa experiences",
      "Premium travel insurance"
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
            Safari Tour Packages
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Choose from our carefully crafted safari experiences, each designed to offer 
            unforgettable encounters with Africa's incredible wildlife and breathtaking landscapes
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
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
                  <span className="text-5xl md:text-6xl font-bold text-safari-brown">
                    ${pkg.price}
                  </span>
                  <span className="text-muted-foreground text-xl ml-3">
                    / {pkg.duration}
                  </span>
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
                >
                  Book This Safari
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center bg-white rounded-2xl p-8 shadow-card max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-4">Need a Custom Safari Experience?</h3>
          <p className="text-muted-foreground mb-6 text-lg">
            Our safari experts can create a personalized itinerary tailored to your specific interests, 
            budget, and travel dates. Contact us for a custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="text-lg px-8">
              Request Custom Quote
            </Button>
            <Button variant="default" size="lg" className="text-lg px-8">
              Compare All Packages
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            All packages include airport transfers, park fees, and comprehensive travel insurance
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;