import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Instagram, Facebook, Linkedin, Music, Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState, FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    package: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "5e8e6711-df49-4c77-a832-da15d828afd3",
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          package: formData.package,
          message: formData.message,
          subject: "New Contact Form Submission - La Family Tour",
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message sent!",
          description: "Our team will contact you within 12 hours.",
        });

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          package: "",
          message: ""
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try WhatsApp or email directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Contact La Family Tour
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Ready to embark on your Garden Route epic adventure? Contact us to book your 
            unforgettable 3-day journey along South Africa's spectacular coastline.
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
                  Fill out the form below and our tour experts will get back to you within 12 hours
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-semibold text-foreground mb-3 block">
                        First Name *
                      </label>
                      <Input 
                        placeholder="John" 
                        className="bg-background h-12 text-base"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-foreground mb-3 block">
                        Last Name *
                      </label>
                      <Input 
                        placeholder="Doe" 
                        className="bg-background h-12 text-base"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-3 block">
                      Email Address *
                    </label>
                    <Input 
                  type="email"
                  placeholder="john@gmail.com"
                      className="bg-background h-12 text-base"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-3 block">
                      Phone Number
                    </label>
                    <Input 
                  type="tel"
                  placeholder="+27 82 123 4567"
                      className="bg-background h-12 text-base"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-3 block">
                      Preferred Tour Package
                    </label>
                    <select 
                      className="w-full p-3 h-12 rounded-md border border-input bg-background text-foreground text-base focus:ring-2 focus:ring-ring focus:border-transparent"
                      value={formData.package}
                      onChange={(e) => setFormData({...formData, package: e.target.value})}
                    >
                      <option>Select a package</option>
                      <option>Driver Service Only</option>
                      <option>Garden Route Epic Adventure (3 Days - R5,000)</option>
                      <option>Group Adventure 4+ People (3 Days - R4,700)</option>
                      <option>Custom Garden Route Experience</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-3 block">
                      Tell Us About Your Dream Adventure
                    </label>
                    <Textarea 
                      placeholder="Share your preferred dates, group size, special interests (caves, wildlife, photography, cultural experiences), or any other details that will help us create your perfect Garden Route adventure..."
                      className="min-h-[140px] bg-background text-base"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="golden" 
                    size="lg" 
                    className="w-full text-lg py-4 h-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
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
                      <p className="font-semibold text-foreground text-lg">Call/WhatsApp</p>
                      <p className="text-muted-foreground text-base">+27 74 990 9229</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-safari-brown text-white rounded-full flex items-center justify-center shadow-button">
                      <Mail className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-lg">Email</p>
                      <p className="text-muted-foreground text-base">info@lafamilytour.co.za</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-safari-brown text-white rounded-full flex items-center justify-center shadow-button">
                      <MapPin className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-lg">Departure Point</p>
                      <p className="text-muted-foreground text-base">Cape Town (4:40 AM)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-safari-brown text-white rounded-full flex items-center justify-center shadow-button">
                      <Clock className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-lg">Tour Duration</p>
                      <p className="text-muted-foreground text-base">3 days</p>
                    </div>
                  </div>
                </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-sunset border-0 shadow-gold text-white">
                <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <MessageSquare className="w-8 h-8" />
                  WhatsApp Quick Booking
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  Contact us directly on WhatsApp for instant booking and Garden Route adventure details! 
                  Quick responses and immediate assistance available.
                </p>
                <Button 
                  variant="hero-outline" 
                  size="lg" 
                  className="w-full text-lg py-4 h-auto border-white text-white hover:bg-white hover:text-safari-brown"
                  asChild
                >
                  <a href="https://wa.me/27749909229" target="_blank" rel="noopener noreferrer">
                    WhatsApp +27 74 990 9229
                  </a>
                </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Follow La Family Tour
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <a 
                      href="https://www.facebook.com/share/1Z4g6w2TJ7/?mibextid=wwXIfr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex flex-col h-auto p-6 border border-input bg-background hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 rounded-md items-center justify-center"
                    >
                      <Facebook className="w-8 h-8 mb-3" />
                      <span className="font-semibold">Facebook</span>
                      <span className="text-sm text-muted-foreground">@LaFamilyTour</span>
                    </a>
                    
                    <a 
                      href="https://www.instagram.com/lafamilytour/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex flex-col h-auto p-6 border border-input bg-background hover:bg-pink-50 hover:border-pink-500 hover:text-pink-600 transition-all duration-300 rounded-md items-center justify-center"
                    >
                      <Instagram className="w-8 h-8 mb-3" />
                      <span className="font-semibold">Instagram</span>
                      <span className="text-sm text-muted-foreground">@LaFamilyTour</span>
                    </a>
                    
                    <a 
                      href="https://www.linkedin.com/in/steve-joseph-mwampale/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex flex-col h-auto p-6 border border-input bg-background hover:bg-blue-50 hover:border-blue-700 hover:text-blue-700 transition-all duration-300 rounded-md items-center justify-center"
                    >
                      <Linkedin className="w-8 h-8 mb-3" />
                      <span className="font-semibold">LinkedIn</span>
                      <span className="text-sm text-muted-foreground">Steve Joseph</span>
                    </a>
                    
                    <a 
                      href="https://www.tiktok.com/@lafamilytour" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex flex-col h-auto p-6 border border-input bg-background hover:bg-pink-50 hover:border-pink-600 hover:text-pink-600 transition-all duration-300 rounded-md items-center justify-center"
                    >
                      <Music className="w-8 h-8 mb-3" />
                      <span className="font-semibold">TikTok</span>
                      <span className="text-sm text-muted-foreground">@LaFamilyTour</span>
                    </a>
                  </div>
                  
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    Stay updated with our latest adventures, photography, and stories. 
                    Join our community of adventure enthusiasts!
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