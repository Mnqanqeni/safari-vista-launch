import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Leaf, Heart } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Adventure Guide",
    description: "Experience the Garden Route like a local, with expert guidance to uncover hidden gems and ensure a safe, memorable adventure."
  },
  {
    icon: Award,
    title: "Small Group Adventures",
    description: "Minimum 3 people ensures intimate experiences with better group pricing for 4+ adventurers, creating lasting friendships."
  },
  {
    icon: Leaf,
    title: "Complete Adventure Package",
    description: "From caves to wildlife encounters, kayaking to safaris, experience the full Garden Route adventure in just 3 action packed days."
  },
  {
    icon: Heart,
    title: "Unforgettable Memories",
    description: "Create lasting memories with our carefully crafted itinerary featuring South Africa's most spectacular coastal landscapes and wildlife."
  }
];

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Why Choose La Family Tour
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Experience the ultimate Garden Route adventure with La Family Tour. Our 3-day epic tour 
            combines spectacular landscapes, thrilling activities, and unforgettable encounters along South Africa&apos;s most beautiful coastline.
          </p>
        </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="text-center group hover:shadow-card transition-all duration-300 bg-gradient-card border-0 transform hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-safari-brown text-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-button">
                    <feature.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-gradient-sunset rounded-3xl p-8 md:p-12 shadow-safari text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Our Adventure Story
                </h3>
                <p className="text-lg leading-relaxed mb-8 text-white/90">
                  La Family Tour specializes in creating epic 3-day journeys along South Africa's stunning coastline. 
                  Our mission is to provide transformative adventure experiences that showcase the Garden Route's incredible diversity - 
                  from underground cave systems to thrilling wildlife encounters and pristine coastal forests.
                </p>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-4xl md:text-5xl font-bold mb-2">3</div>
                    <div className="text-sm opacity-90">Days Epic Adventure</div>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold mb-2">6+</div>
                    <div className="text-sm opacity-90">Amazing Activities</div>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
                    <div className="text-sm opacity-90">Unforgettable Experience</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <blockquote className="text-lg md:text-xl font-medium mb-6 italic">
                    "Our Garden Route adventure with La Family Tour was absolutely incredible! From exploring the magnificent Cango Caves to the thrilling elephant encounter and game drive, every moment was perfectly planned. The 3 days felt like a lifetime of memories!"
                  </blockquote>
                  <cite className="text-safari-gold font-semibold text-lg">- Sarah & Mike Johnson, Cape Town</cite>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-safari-gold text-xl">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;