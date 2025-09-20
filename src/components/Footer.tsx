import { MessageSquare, Instagram, Facebook, Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-safari-brown text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-safari-gold rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">SA</span>
              </div>
              <span className="text-2xl font-bold">Safari Adventures</span>
            </div>
            <p className="text-white/80 leading-relaxed mb-6 text-base">
              Creating unforgettable safari experiences in Africa's most iconic destinations 
              for over 20 years. Your adventure of a lifetime awaits in the heart of the wild.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-safari-gold transition-colors duration-300">
                <MessageSquare className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-safari-gold transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-safari-gold transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-white/80">
              <li><a href="#destinations" className="hover:text-safari-gold transition-colors duration-300 text-base">Safari Destinations</a></li>
              <li><a href="#about" className="hover:text-safari-gold transition-colors duration-300 text-base">About Us</a></li>
              <li><a href="#tours" className="hover:text-safari-gold transition-colors duration-300 text-base">Tour Packages</a></li>
              <li><a href="#contact" className="hover:text-safari-gold transition-colors duration-300 text-base">Contact</a></li>
              <li><a href="#" className="hover:text-safari-gold transition-colors duration-300 text-base">Travel Tips</a></li>
              <li><a href="#" className="hover:text-safari-gold transition-colors duration-300 text-base">Photo Gallery</a></li>
              <li><a href="#" className="hover:text-safari-gold transition-colors duration-300 text-base">Safari Blog</a></li>
            </ul>
          </div>
          
          {/* Safari Information */}
          <div>
            <h3 className="text-xl font-bold mb-6">Safari Information</h3>
            <ul className="space-y-4 text-white/80">
              <li><a href="#" className="hover:text-safari-gold transition-colors duration-300 text-base">Best Time to Visit</a></li>
              <li><a href="#" className="hover:text-safari-gold transition-colors duration-300 text-base">What to Pack</a></li>
              <li><a href="#" className="hover:text-safari-gold transition-colors duration-300 text-base">Wildlife Guide</a></li>
              <li><a href="#" className="hover:text-safari-gold transition-colors duration-300 text-base">Conservation Efforts</a></li>
              <li><a href="#" className="hover:text-safari-gold transition-colors duration-300 text-base">Local Communities</a></li>
              <li><a href="#" className="hover:text-safari-gold transition-colors duration-300 text-base">Safety Guidelines</a></li>
              <li><a href="#" className="hover:text-safari-gold transition-colors duration-300 text-base">Photography Tips</a></li>
            </ul>
          </div>
          
          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Details</h3>
            <div className="space-y-4 text-white/80">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-safari-gold" />
                <div>
                  <p className="text-sm">Main Office</p>
                  <p className="font-medium">+27 11 123 4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-safari-gold" />
                <div>
                  <p className="text-sm">Email</p>
                  <p className="font-medium">hello@safariadventures.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 flex-shrink-0 text-safari-gold" />
                <div>
                  <p className="text-sm">Location</p>
                  <p className="font-medium">Johannesburg, South Africa</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-safari-gold/20 rounded-lg border border-safari-gold/30">
              <p className="text-sm font-semibold mb-2 text-safari-gold">24/7 Emergency Support</p>
              <p className="text-white font-bold text-lg">+27 82 911 SAFARI</p>
              <p className="text-xs mt-1 text-white/70">Available during your safari</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex items-center space-x-2 text-white/80">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-safari-gold" />
              <span>for African wildlife conservation</span>
            </div>
            
            <div className="text-center lg:text-left">
              <p className="text-white/60 text-sm">
                © 2024 Safari Adventures. All rights reserved.
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