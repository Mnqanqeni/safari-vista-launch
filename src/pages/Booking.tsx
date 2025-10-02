import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Users, MessageSquare } from "lucide-react";
import { useState, FormEvent, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Booking = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    package: "",
    numPeople: "",
    preferredDate: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          access_key: "e11e5b12-334a-43e4-8b9f-a57e14958c5b",
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          package: formData.package,
          number_of_people: formData.numPeople,
          preferred_date: formData.preferredDate,
          message: formData.message,
          subject: "New Booking Request - La Family Tour",
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Booking request sent!",
          description: "Steve will contact you within 24 hours to confirm your booking.",
        });

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          package: "",
          numPeople: "",
          preferredDate: "",
          message: ""
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send booking request. Please try WhatsApp or email directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-20 bg-gradient-to-b from-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Book Your Garden Route Adventure
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Fill out the form below and Steve will contact you to confirm your 3-day Garden Route safari experience.
              </p>
            </div>

            <Card className="bg-white border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-foreground">
                  Booking Information
                </CardTitle>
                <p className="text-muted-foreground text-lg">
                  Please provide your details and we'll get back to you within 24 hours
                </p>
              </CardHeader>
              
              <CardContent>
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
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-semibold text-foreground mb-3 block">
                        Email Address *
                      </label>
                      <Input 
                        type="email" 
                        placeholder="john@example.com" 
                        className="bg-background h-12 text-base"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-foreground mb-3 block">
                        Phone Number *
                      </label>
                      <Input 
                        type="tel" 
                        placeholder="+27 74 990 9229" 
                        className="bg-background h-12 text-base"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-3 block">
                      Safari Package *
                    </label>
                    <select 
                      className="w-full p-3 h-12 rounded-md border border-input bg-background text-foreground text-base focus:ring-2 focus:ring-ring focus:border-transparent"
                      value={formData.package}
                      onChange={(e) => setFormData({...formData, package: e.target.value})}
                      required
                    >
                      <option value="">Select a package</option>
                      <option>Garden Route Epic Adventure (3 Days - R5,000)</option>
                      <option>Group Adventure 4+ People (3 Days - R4,700)</option>
                      <option>Custom Garden Route Experience</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-semibold text-foreground mb-3 block flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Number of People *
                      </label>
                      <Input 
                        type="number" 
                        min="1"
                        placeholder="2" 
                        className="bg-background h-12 text-base"
                        value={formData.numPeople}
                        onChange={(e) => setFormData({...formData, numPeople: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-foreground mb-3 block flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Preferred Start Date *
                      </label>
                      <Input 
                        type="date" 
                        className="bg-background h-12 text-base"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-3 block flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Additional Information
                    </label>
                    <Textarea 
                      placeholder="Any special requests, dietary requirements, or questions about your Garden Route adventure..."
                      className="min-h-[120px] bg-background text-base"
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
                    {isSubmitting ? "Sending Booking Request..." : "Submit Booking Request"}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to be contacted by La Family Tour regarding your booking.
                  </p>
                </form>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-lg text-muted-foreground mb-4">
                Need immediate assistance? Contact Steve directly:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  variant="adventure"
                  size="lg"
                  asChild
                >
                  <a href="https://wa.me/27749909229">
                    WhatsApp: +27 74 990 9229
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  asChild
                >
                  <a href="mailto:stevemwampale@gmail.com">
                    Email Steve
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;
