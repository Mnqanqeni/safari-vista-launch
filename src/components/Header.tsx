import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/la-family-tour-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Destinations", href: "#destinations" },
    { label: "About", href: "#about" },
    { label: "Tours", href: "#tours" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
            <img src={logo} alt="La Family Tour Logo" className="h-10 sm:h-14 md:h-20 w-auto" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-safari-gold transition-colors duration-200 font-semibold text-lg relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-safari-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="golden" size="lg" className="text-lg px-6" asChild>
              <Link to="/booking">Book Now</Link>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1.5 sm:p-2 text-foreground hover:text-safari-gold transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-7 h-7 sm:w-8 sm:h-8" /> : <Menu className="w-7 h-7 sm:w-8 sm:h-8" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 sm:py-6 border-t border-border bg-white/98 backdrop-blur-sm">
            <nav className="flex flex-col space-y-3 sm:space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-safari-gold transition-colors duration-200 font-semibold text-base sm:text-lg px-3 sm:px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 sm:px-4 pt-2 sm:pt-4">
                <Button variant="golden" size="lg" className="w-full text-base sm:text-lg h-11 sm:h-12" asChild>
                  <Link to="/booking" onClick={() => setIsMenuOpen(false)}>Book Now</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;