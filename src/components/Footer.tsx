import { MessageSquare, Instagram, Facebook, Mail, Phone, MapPin, Heart } from "lucide-react";
import logo from "@/assets/la-family-tour-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-safari-brown text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img src={logo} alt="La Family Tour Logo" className="h-20 w-auto" />
            </div>
            <p className="text-white/80 leading-relaxed mb-6 text-base">
              Creating epic 3-day Garden Route adventures along South Africa's stunning coastline. 
              Experience caves, wildlife, and coastal beauty with expert guide Steve.
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/27749909229" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-safari-gold transition-colors duration-300">
                <MessageSquare className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-safari-gold transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/share/1Z4g6w2TJ7/?mibextid=wwXIfr" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-safari-gold transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-white/80">
              <li><a href="#destinations" className="hover:text-safari-gold transition-colors duration-300 text-base">Adventure Highlights</a></li>
              <li><a href="#about" className="hover:text-safari-gold transition-colors duration-300 text-base">About Us</a></li>
              <li><a href="#tours" className="hover:text-safari-gold transition-colors duration-300 text-base">Tour Packages</a></li>
              <li><a href="#contact" className="hover:text-safari-gold transition-colors duration-300 text-base">Contact Steve</a></li>
              <li><a href="#" className="hover:text-safari-gold transition-colors duration-300 text-base">Garden Route Guide</a></li>
              <li><a href="#" className="hover:text-safari-gold transition-colors duration-300 text-base">Photo Gallery</a></li>
              <li><a href="#" className="hover:text-safari-gold transition-colors duration-300 text-base">Adventure Blog</a></li>
            </ul>
          </div>
          
          {/* Safari Information */}
          <div>
            <h3 className="text-xl font-bold mb-6">Adventure Information</h3>
            <ul className="space-y-4 text-white/80">
              <li><a href="#" className="hover:text-safari-gold transition-colors duration-300 text-base">What to Pack</a></li>
              <li><a href="#" className="hover:text-safari-gold transition-colors duration-300 text-base">Activity Guide</a></li>
              <li><a href="#" className="hover:text-safari-gold transition-colors duration-300 text-base">Cango Caves Info</a></li>
              <li><a href="#" className="hover:text-safari-gold transition-colors duration-300 text-base">Wildlife Encounters</a></li>
              <li><a href="#" className="hover:text-safari-gold transition-colors duration-300 text-base">Kayaking Tips</a></li>
              <li><a href="#" className="hover:text-safari-gold transition-colors duration-300 text-base">Accommodation</a></li>
              <li><a href="#" className="hover:text-safari-gold transition-colors duration-300 text-base">Route 62 Guide</a></li>
            </ul>
          </div>
          
          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Steve</h3>
            <div className="space-y-4 text-white/80">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-safari-gold" />
                <div>
                  <p className="text-sm">Call/WhatsApp</p>
                  <p className="font-medium">+27 74 990 9229</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-safari-gold" />
                <div>
                  <p className="text-sm">Email</p>
                  <p className="font-medium">stevemwampale@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 flex-shrink-0 text-safari-gold" />
                <div>
                  <p className="text-sm">Departure Point</p>
                  <p className="font-medium">Cape Town (4:40 AM)</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-safari-gold/20 rounded-lg border border-safari-gold/30">
              <p className="text-sm font-semibold mb-2 text-safari-gold">3-Day Adventure</p>
              <p className="text-white font-bold text-lg">R5,000 (3+ people)</p>
              <p className="text-xs mt-1 text-white/70">R4,700 for groups of 4+</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex items-center space-x-2 text-white/80">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-safari-gold" />
              <span>for Garden Route adventure experiences</span>
            </div>
            
            <div className="text-center lg:text-left">
              <p className="text-white/60 text-sm">
                © 2024 La Family Tour. All rights reserved.
              </p>
            </div>
            
            <div className="flex space-x-6 text-sm text-white/60">
              <a href="#" className="hover:text-safari-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-safari-gold transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-safari-gold transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;