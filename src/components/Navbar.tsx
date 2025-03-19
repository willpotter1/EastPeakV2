
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-eastpeak-blue bg-opacity-95 py-4 shadow-lg"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/public/lovable-uploads/e8dcf9df-7189-4157-ae79-c37cbccf73a2.png" alt="EastPeak Logo" className="h-8" />
          <span className="text-white font-semibold text-xl tracking-tight">
            EastPeak <span className="text-eastpeak-gold">Invest</span>
          </span>
        </Link>

        <div className="hidden md:flex space-x-12 text-white">
          <Link to="/about" className="nav-link">
            About us
          </Link>
          <Link to="/services" className="nav-link">
            What we do
          </Link>
          <Link to="/team" className="nav-link">
            Team
          </Link>
          <Link to="/values" className="nav-link">
            Values
          </Link>
          <Link to="/contact" className="nav-link">
            Contact us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
