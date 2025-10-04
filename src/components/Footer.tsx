import { MessageSquare, Instagram, Facebook, Mail, Phone, MapPin, Heart } from "lucide-react";
import logo from "@/assets/la-family-tour-logo.png";

const Footer = () => {
  return (
    <footer className="bg-safari-brown text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img src={logo} alt="La Family Tour Logo" className="h-24 w-auto" />
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
              <li><a href="#tours" className="hover:text-safari-gold transition-colors duration-300 text-base">Tour Packages</a></li>
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
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
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
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-white/60 text-sm">
                © 2024 La Family Tour. All rights reserved.
              </p>
            </div>
            
            <div className="flex space-x-6 text-sm text-white/60">
              <a href="#" className="hover:text-safari-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;