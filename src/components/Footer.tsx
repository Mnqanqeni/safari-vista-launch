import { MessageSquare, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-safari-bronze text-safari-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-golden rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">SA</span>
              </div>
              <span className="text-xl font-bold">Safari Adventures</span>
            </div>
            <p className="text-safari-cream/80 leading-relaxed mb-4">
              Creating unforgettable safari experiences in Africa's most iconic destinations 
              for over 20 years. Your adventure awaits.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-safari-cream/10 rounded-full flex items-center justify-center hover:bg-safari-cream/20 transition-colors">
                <MessageSquare className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-safari-cream/10 rounded-full flex items-center justify-center hover:bg-safari-cream/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-safari-cream/10 rounded-full flex items-center justify-center hover:bg-safari-cream/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-safari-cream/80">
              <li><a href="#destinations" className="hover:text-safari-cream transition-colors">Destinations</a></li>
              <li><a href="#about" className="hover:text-safari-cream transition-colors">About Us</a></li>
              <li><a href="#tours" className="hover:text-safari-cream transition-colors">Tour Packages</a></li>
              <li><a href="#contact" className="hover:text-safari-cream transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-safari-cream transition-colors">Travel Tips</a></li>
              <li><a href="#" className="hover:text-safari-cream transition-colors">Conservation</a></li>
            </ul>
          </div>
          
          {/* Destinations */}
          <div>
            <h3 className="text-lg font-bold mb-6">Top Destinations</h3>
            <ul className="space-y-3 text-safari-cream/80">
              <li><a href="#" className="hover:text-safari-cream transition-colors">Kruger National Park</a></li>
              <li><a href="#" className="hover:text-safari-cream transition-colors">Serengeti</a></li>
              <li><a href="#" className="hover:text-safari-cream transition-colors">Okavango Delta</a></li>
              <li><a href="#" className="hover:text-safari-cream transition-colors">Maasai Mara</a></li>
              <li><a href="#" className="hover:text-safari-cream transition-colors">Ngorongoro Crater</a></li>
              <li><a href="#" className="hover:text-safari-cream transition-colors">Chobe National Park</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <div className="space-y-4 text-safari-cream/80">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+27 11 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>hello@safariadventures.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>Johannesburg, South Africa</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-safari-cream/10 rounded-lg">
              <p className="text-sm font-medium mb-2">24/7 Emergency Support</p>
              <p className="text-safari-cream font-bold">+27 82 911 SAFARI</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-safari-cream/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-safari-cream/60 text-sm">
              © 2024 Safari Adventures. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-safari-cream/60">
              <a href="#" className="hover:text-safari-cream transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-safari-cream transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-safari-cream transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;