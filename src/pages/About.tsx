import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import CoreValues from "@/components/CoreValues";
import StatsSection from "@/components/StatsSection";
import Mission from "@/components/Mission";
import BlueBackground from "/Images/Backgrounds/BlueBack.png";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex flex-col">
        <div 
          className="flex-grow"
          style={{
            backgroundImage: `url(${BlueBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 50%',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#2D4E5F', // Fallback color
          }}
        >
          <div className="pt-28">
            <CoreValues />
            <Mission />
          </div>
        </div>
        <StatsSection />
      </div>
    </div>
  );
};

export default About;
