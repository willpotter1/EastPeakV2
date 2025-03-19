
import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import CoreValues from "@/components/CoreValues";
import Mission from "@/components/Mission";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col"
    >
      <Navbar />
      <HeroSection />
      <CoreValues />
      <Mission />
      <StatsSection />
      <Footer />
    </motion.div>
  );
};

export default Index;
