
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
      style={{
        backgroundImage: `url('/public/lovable-uploads/43305a0a-dc1e-4fb9-b90b-94202f42b69f.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundAttachment: 'fixed'
      }}
    >
      <Navbar />
      <HeroSection />
      <CoreValues />
      <StatsSection />
      <Mission />
      <Footer />
    </motion.div>
  );
};

export default Index;
