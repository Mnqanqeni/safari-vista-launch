import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Instagram, Facebook, Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Start Your Safari Journey
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Ready to embark on the adventure of a lifetime? Get in touch with our safari experts 
              to plan your perfect African safari experience tailored to your dreams.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="bg-white border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-foreground">
                  Send Us a Message
                </CardTitle>
                <p className="text-muted-foreground text-lg">
                  Fill out the form below and our safari experts will get back to you within 24 hours
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-3 block">
                      First Name *
                    </label>
                    <Input placeholder="John" className="bg-background h-12 text-base" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-3 block">
                      Last Name *
                    </label>
                    <Input placeholder="Doe" className="bg-background h-12 text-base" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-semibold text-foreground mb-3 block">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="john@example.com" className="bg-background h-12 text-base" />
                </div>
                
                <div>
                  <label className="text-sm font-semibold text-foreground mb-3 block">
                    Phone Number
                  </label>
                  <Input type="tel" placeholder="+1 (555) 123-4567" className="bg-background h-12 text-base" />
                </div>
                
                <div>
                  <label className="text-sm font-semibold text-foreground mb-3 block">
                    Preferred Safari Package
                  </label>
                  <select className="w-full p-3 h-12 rounded-md border border-input bg-background text-foreground text-base focus:ring-2 focus:ring-ring focus:border-transparent">
                    <option>Select a package</option>
                    <option>Classic Safari (5 Days - $2,499)</option>
                    <option>Premium Safari (7 Days - $4,299)</option>
                    <option>Ultimate Expedition (10 Days - $7,999)</option>
                    <option>Custom Safari Experience</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-semibold text-foreground mb-3 block">
                    Tell Us About Your Dream Safari
                  </label>
                  <Textarea 
                    placeholder="Share your preferred dates, group size, special interests (Big Five, photography, cultural experiences), dietary requirements, or any other details that will help us create your perfect safari..."
                    className="min-h-[140px] bg-background text-base"
                  />
                </div>
                
                <Button variant="golden" size="lg" className="w-full text-lg py-4 h-auto">
                  Send Message
                </Button>
              </CardContent>
            </Card>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-8">
                    Get In Touch
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-safari-brown text-white rounded-full flex items-center justify-center shadow-button">
                        <Phone className="w-7 h-7" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-lg">Phone</p>
                        <p className="text-muted-foreground text-base">+27 11 123 4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-safari-brown text-white rounded-full flex items-center justify-center shadow-button">
                        <Mail className="w-7 h-7" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-lg">Email</p>
                        <p className="text-muted-foreground text-base">hello@safariadventures.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-safari-brown text-white rounded-full flex items-center justify-center shadow-button">
                        <MapPin className="w-7 h-7" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-lg">Office</p>
                        <p className="text-muted-foreground text-base">Johannesburg, South Africa</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-safari-brown text-white rounded-full flex items-center justify-center shadow-button">
                        <Clock className="w-7 h-7" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-lg">Office Hours</p>
                        <p className="text-muted-foreground text-base">Mon-Fri: 8AM-6PM (SAST)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-sunset border-0 shadow-gold text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <MessageSquare className="w-8 h-8" />
                    WhatsApp Quick Response
                  </h3>
                  <p className="text-lg mb-6 text-white/90">
                    Get instant answers to your safari questions! Our WhatsApp support is available 
                    24/7 for quick responses and immediate assistance.
                  </p>
                  <Button 
                    variant="hero-outline" 
                    size="lg" 
                    className="w-full text-lg py-4 h-auto border-white text-white hover:bg-white hover:text-safari-brown"
                  >
                    Chat on WhatsApp
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Follow Our Safari Adventures
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <Button 
                      variant="outline" 
                      className="flex-col h-auto p-6 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
                    >
                      <Facebook className="w-8 h-8 mb-3" />
                      <span className="font-semibold">Facebook</span>
                      <span className="text-sm text-muted-foreground">@SafariAdventures</span>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="flex-col h-auto p-6 hover:bg-pink-50 hover:border-pink-500 hover:text-pink-600 transition-all duration-300"
                    >
                      <Instagram className="w-8 h-8 mb-3" />
                      <span className="font-semibold">Instagram</span>
                      <span className="text-sm text-muted-foreground">@SafariAdventures</span>
                    </Button>
                  </div>
                  
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    Stay updated with our latest safari adventures, wildlife photography, and conservation stories. 
                    Join our community of safari enthusiasts!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;