import { MessageSquare, Instagram, Facebook, Mail, Phone, MapPin, Heart } from "lucide-react";
import logo from "@/assets/la-family-tour-logo.png";
import coreLogicLogo from "@/assets/corelogic-logo.png";

const Footer = () => {
  return (
    <footer className="bg-safari-brown text-white">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <div className="mb-4 flex justify-center md:justify-start">
              <img src={logo} alt="La Family Tour Logo" className="h-16 md:h-24 w-auto" />
            </div>
            <p className="text-white/80 leading-relaxed mb-4 text-sm md:text-base">
              Create epic 3-day Garden Route adventures along South Africa's stunning coastline.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="https://wa.me/27749909229" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-safari-gold transition-colors duration-300">
                <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-safari-gold transition-colors duration-300">
                <Instagram className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="https://www.facebook.com/share/1Z4g6w2TJ7/?mibextid=wwXIfr" className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-safari-gold transition-colors duration-300">
                <Facebook className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links - Hidden on mobile */}
          <div className="hidden md:block">
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-white/80">
              <li><a href="#about" className="hover:text-safari-gold transition-colors duration-300 text-base">Garden Route Guide</a></li>
              <li><a href="#destinations" className="hover:text-safari-gold transition-colors duration-300 text-base">Adventure Highlights</a></li>
              <li><a href="#gallery" className="hover:text-safari-gold transition-colors duration-300 text-base">Photo Gallery</a></li>
              <li><a href="#tours" className="hover:text-safari-gold transition-colors duration-300 text-base">Tour Packages</a></li>
            </ul>
          </div>
          
          {/* Safari Information - Hidden on mobile */}
          <div className="hidden lg:block">
            <h3 className="text-xl font-bold mb-6">Adventure Information</h3>
            <ul className="space-y-4 text-white/80">
              <li><a href="#about" className="hover:text-safari-gold transition-colors duration-300 text-base">What to Pack</a></li>
              <li><a href="#destinations" className="hover:text-safari-gold transition-colors duration-300 text-base">Wildlife Encounters</a></li>
              <li><a href="#destinations" className="hover:text-safari-gold transition-colors duration-300 text-base">Cango Caves Info</a></li>
              <li><a href="#about" className="hover:text-safari-gold transition-colors duration-300 text-base">Activity Guide</a></li>
            </ul>
          </div>
          
          {/* Contact Details */}
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Contact Us</h3>
            <div className="space-y-3 md:space-y-4 text-white/80">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 text-safari-gold" />
                <div>
                  <p className="text-xs md:text-sm">Call/WhatsApp</p>
                  <p className="font-medium text-sm md:text-base">+27 74 990 9229</p>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Mail className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 text-safari-gold" />
                <div>
                  <p className="text-xs md:text-sm">Email</p>
                  <p className="font-medium text-sm md:text-base">stevemwampale@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 md:mt-16 pt-6 md:pt-8">
          <div className="text-center space-y-3">
            <p className="text-white/60 text-xs md:text-sm">
              © 2025 La Family Tour. All rights reserved.
            </p>
            <div className="flex items-center justify-center space-x-2">
              <p className="text-white/40 text-xs">Crafted by</p>
              <img 
                src={coreLogicLogo} 
                alt="CoreLogic Systems" 
                className="h-8 md:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;