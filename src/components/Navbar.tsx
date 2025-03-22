import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-[#002d3d] shadow-lg h-24">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center h-full">
        <Link to="/" className="flex items-center">
          <img 
            src="/Images/Backgrounds/GoldenTransparent.png" 
            alt="EastPeak Logo" 
            className="h-32 w-auto object-contain" 
          />
        </Link>

        <div className="hidden md:flex items-center space-x-6 text-white text-lg">
          <Link to="/about" className="nav-link hover:text-[#b8860b] transition-colors">
            About us
          </Link>
          <span className="text-white/30">|</span>
          <Link to="/services" className="nav-link hover:text-[#b8860b] transition-colors">
            What we do
          </Link>
          <span className="text-white/30">|</span>
          <Link to="/team" className="nav-link hover:text-[#b8860b] transition-colors">
            Team
          </Link>
          <span className="text-white/30">|</span>
          <Link 
            to="/values" 
            className={cn(
              "nav-link hover:text-[#b8860b] transition-colors",
              location.pathname === "/values" && "text-[#b8860b]"
            )}
          >
            Values
          </Link>
          <span className="text-white/30">|</span>
          <Link to="/contact" className="nav-link hover:text-[#b8860b] transition-colors">
            Contact us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
