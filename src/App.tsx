import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Element, scroller } from "react-scroll";
import { motion } from "framer-motion";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Values from "./pages/Values";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

const App = () => {
  const scrollToSection = (name: string) => {
    if (name === 'contact') {
      const contactSection = document.querySelector('#mountain-landscape');
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      scroller.scrollTo(name, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -96 // Height of navbar
      });
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen">
          <Navbar scrollToSection={scrollToSection} />
          
          <Element name="home" className="section">
            <Index />
          </Element>
          
          <Element name="about" className="section">
            <About />
          </Element>
          
          <Element name="services" className="section">
            <Services />
          </Element>
          
          <Element name="team" className="section">
            <Team />
          </Element>
          
          <Element name="values" className="section">
            <Values />
          </Element>
          
          <Element name="contact" className="section">
            <Contact scrollToSection={scrollToSection} />
          </Element>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
