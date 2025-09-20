import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Award, Heart } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Professional guides with extensive wilderness training ensure your safety throughout the journey."
  },
  {
    icon: Users,
    title: "Expert Guides",
    description: "Local experts with decades of experience and deep knowledge of wildlife behavior and conservation."
  },
  {
    icon: Award,
    title: "Award-Winning",
    description: "Recognized for excellence in sustainable tourism and unforgettable safari experiences."
  },
  {
    icon: Heart,
    title: "Conservation Focus",
    description: "Supporting local communities and wildlife conservation through responsible tourism practices."
  }
];

const About = () => {
  return (
    <section className="py-20 bg-safari-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Safari Adventures
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              With over 20 years of experience, we've crafted the perfect blend of adventure, 
              comfort, and authenticity. Our commitment to sustainable tourism ensures that your 
              safari experience contributes to wildlife conservation and local communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="text-center group hover:shadow-card transition-all duration-300 bg-card border-0"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 shadow-safari">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  To provide transformative safari experiences that connect people with Africa's 
                  incredible wildlife while supporting conservation efforts and local communities. 
                  Every tour contributes to protecting the habitats and species you'll encounter.
                </p>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">500+</div>
                    <div className="text-sm text-muted-foreground">Happy Travelers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">20+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">15</div>
                    <div className="text-sm text-muted-foreground">Conservation Projects</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
                  <blockquote className="text-lg font-medium mb-4">
                    "The most incredible wildlife experience of our lives. The guides were 
                    knowledgeable, the accommodations perfect, and seeing the Big Five in 
                    their natural habitat was absolutely magical."
                  </blockquote>
                  <cite className="text-primary-glow font-semibold">- Sarah & Michael, UK</cite>
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