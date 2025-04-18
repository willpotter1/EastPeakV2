import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
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
      className="min-h-screen flex flex-col relative landing-bg"
      style={{
        backgroundImage: `url('/Images/Backgrounds/EastPeak_page1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="relative z-10">
        <div className="relative">
          <HeroSection />
          {/* Dark navy blue section */}
          <div className="absolute bottom-0 left-0 right-0 bg-[#223C48] text-[#bd825c] py-8">
            <div className="container mx-auto text-center">
              <h2 className="text-2xl md:text-4xl font-light tracking-wide px-4">
                Your Partner for Central European Private Equity
                <br className="hidden md:block" /> Liquidity Solutions
              </h2>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Index;
