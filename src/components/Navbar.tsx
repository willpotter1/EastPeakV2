import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  scrollToSection: (name: string) => void;
}

const Navbar = ({ scrollToSection }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'team', 'values', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-[#001a24] shadow-lg h-24">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center h-full">
        <button 
          onClick={() => scrollToSection('home')}
          className="flex items-center"
        >
          <img 
            src="/Images/Backgrounds/GoldenTransparent.png" 
            alt="EastPeak Logo" 
            className="h-32 w-auto object-contain" 
          />
        </button>

        <div className="hidden md:flex items-center space-x-6 text-white text-lg">
          <button 
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.scrollTo({
                  top: 830,  // Fixed scroll position for About section
                  behavior: 'smooth'
                });
              }
            }}
            className={cn(
              "nav-link hover:text-[#b8860b] transition-colors",
              activeSection === 'about' && "text-[#b8860b]"
            )}
          >
            About us
          </button>
          <span className="text-white/30">|</span>
          <button 
            onClick={() => scrollToSection('services')}
            className={cn(
              "nav-link hover:text-[#b8860b] transition-colors",
              activeSection === 'services' && "text-[#b8860b]"
            )}
          >
            What we do
          </button>
          <span className="text-white/30">|</span>
          <button 
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.scrollTo({
                  top: 3860,  // Fixed scroll position for Team section
                  behavior: 'smooth'
                });
              }
            }}
            className={cn(
              "nav-link hover:text-[#b8860b] transition-colors",
              activeSection === 'team' && "text-[#b8860b]"
            )}
          >
            Team
          </button>
          <span className="text-white/30">|</span>
          <button 
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.scrollTo({
                  top: 5190,  // Fixed scroll position for Values section
                  behavior: 'smooth'
                });
              }
            }}
            className={cn(
              "nav-link hover:text-[#b8860b] transition-colors",
              activeSection === 'values' && "text-[#b8860b]"
            )}
          >
            Values
          </button>
          <span className="text-white/30">|</span>
          <button 
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.scrollTo({
                  top: 6520,  // Fixed scroll position to show mountain landscape
                  behavior: 'smooth'
                });
              }
            }}
            className={cn(
              "nav-link hover:text-[#b8860b] transition-colors",
              activeSection === 'contact' && "text-[#b8860b]"
            )}
          >
            Contact us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
