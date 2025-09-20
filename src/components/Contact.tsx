import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-safari-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Start Your Safari Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to embark on the adventure of a lifetime? Get in touch with our safari experts 
              to plan your perfect African safari experience.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Send Us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      First Name
                    </label>
                    <Input placeholder="John" className="bg-background" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Last Name
                    </label>
                    <Input placeholder="Doe" className="bg-background" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email Address
                  </label>
                  <Input type="email" placeholder="john@example.com" className="bg-background" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Phone Number
                  </label>
                  <Input type="tel" placeholder="+1 (555) 123-4567" className="bg-background" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Preferred Safari Package
                  </label>
                  <select className="w-full p-3 rounded-md border border-input bg-background text-foreground">
                    <option>Select a package</option>
                    <option>Classic Safari (5 Days)</option>
                    <option>Premium Adventure (8 Days)</option>
                    <option>Ultimate Expedition (12 Days)</option>
                    <option>Custom Safari Experience</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your dream safari experience, preferred dates, group size, or any special requirements..."
                    className="min-h-[120px] bg-background"
                  />
                </div>
                
                <Button variant="default" size="lg" className="w-full">
                  Send Message
                </Button>
              </CardContent>
            </Card>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-6">
                    Get In Touch
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <p className="text-muted-foreground">+27 11 123 4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-muted-foreground">hello@safariadventures.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Office</p>
                        <p className="text-muted-foreground">Johannesburg, South Africa</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-6">
                    Follow Our Adventures
                  </h3>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <Button 
                      variant="outline" 
                      className="flex-col h-auto p-4 hover:bg-green-50 hover:border-green-500 hover:text-green-600"
                    >
                      <MessageSquare className="w-8 h-8 mb-2" />
                      <span className="text-sm">WhatsApp</span>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="flex-col h-auto p-4 hover:bg-pink-50 hover:border-pink-500 hover:text-pink-600"
                    >
                      <Instagram className="w-8 h-8 mb-2" />
                      <span className="text-sm">Instagram</span>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="flex-col h-auto p-4 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600"
                    >
                      <Facebook className="w-8 h-8 mb-2" />
                      <span className="text-sm">Facebook</span>
                    </Button>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    Stay updated with our latest safari adventures and wildlife photography
                  </p>
                </CardContent>
              </Card>
              
              <div className="bg-primary rounded-2xl p-6 text-primary-foreground text-center">
                <h3 className="text-xl font-bold mb-3">Emergency Contact</h3>
                <p className="mb-2">24/7 Safari Support Hotline</p>
                <p className="text-2xl font-bold text-primary-glow">+27 82 911 SAFARI</p>
                <p className="text-sm mt-2 opacity-90">Available during your safari for any assistance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;