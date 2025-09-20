import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Leaf, Heart } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Guides",
    description: "Professional safari guides with 15+ years experience and deep knowledge of wildlife behavior, ensuring safe and educational adventures."
  },
  {
    icon: Award,
    title: "Small Groups",
    description: "Intimate group sizes of maximum 8 guests per vehicle for personalized attention and better wildlife viewing opportunities."
  },
  {
    icon: Leaf,
    title: "Sustainable Tourism",
    description: "Committed to responsible tourism practices that support local communities and contribute to wildlife conservation efforts."
  },
  {
    icon: Heart,
    title: "Unforgettable Memories",
    description: "Creating once-in-a-lifetime experiences with luxury accommodations, gourmet dining, and exclusive wildlife encounters."
  }
];

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Why Choose Safari Adventures
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              With over 20 years of experience crafting exceptional safari adventures, we've perfected the art of 
              connecting travelers with Africa's incredible wildlife while ensuring every detail exceeds expectations.
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
                  Our Safari Legacy
                </h3>
                <p className="text-lg leading-relaxed mb-8 text-white/90">
                  Founded in 2003, Safari Adventures has been at the forefront of responsible wildlife tourism in Africa. 
                  Our mission is to provide transformative safari experiences that foster deep connections with nature while 
                  supporting conservation initiatives and empowering local communities across the continent.
                </p>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-4xl md:text-5xl font-bold mb-2">20+</div>
                    <div className="text-sm opacity-90">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
                    <div className="text-sm opacity-90">Happy Travelers</div>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                    <div className="text-sm opacity-90">Conservation Projects</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <blockquote className="text-lg md:text-xl font-medium mb-6 italic">
                    "Safari Adventures didn't just show us wildlife - they connected us to the soul of Africa. 
                    The guides were incredible storytellers, and every moment felt like a National Geographic documentary come to life."
                  </blockquote>
                  <cite className="text-safari-gold font-semibold text-lg">- Emma & David Thompson, Australia</cite>
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