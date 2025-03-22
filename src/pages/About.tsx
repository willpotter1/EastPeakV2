import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import CoreValues from "@/components/CoreValues";
import StatsSection from "@/components/StatsSection";
import Mission from "@/components/Mission";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-28">
        <CoreValues />
        <Mission />
        <StatsSection />
      </div>
    </div>
  );
};

export default About;
