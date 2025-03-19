
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div 
      className="hero-section h-screen w-full relative overflow-hidden" 
      style={{ 
        backgroundImage: "url('/public/lovable-uploads/6db32e33-7f23-44e3-9b1d-b27c4925d681.png')",
        backgroundPosition: "center bottom",
        backgroundSize: "cover"
      }}
    >
      <div className="overlay absolute inset-0 bg-opacity-50"></div>
      <div className="container mx-auto px-6 md:px-12 h-full flex flex-col justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center mt-8"
        >
          <h2 className="text-eastpeak-gold text-xl md:text-3xl font-light tracking-wide px-4 mb-6">
            Your Partner for Central European Private Equity
            <br className="hidden md:block" /> Liquidity Solutions
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
