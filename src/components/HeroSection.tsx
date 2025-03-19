
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div 
      className="hero-section h-screen w-full relative overflow-hidden" 
      style={{ 
        backgroundImage: "url('/public/lovable-uploads/b15b0229-2d0e-4bec-930d-0c4439945799.png')",
        backgroundPosition: "center bottom",
        backgroundSize: "cover"
      }}
    >
      <div className="overlay absolute inset-0 bg-opacity-50"></div>
      <div className="container mx-auto px-6 md:px-12 h-full flex flex-col justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-white text-2xl md:text-4xl font-light tracking-wider mb-6 md:mb-8">
            <span className="inline-block mx-4">Focus</span>
            <span className="inline-block mx-4">•</span>
            <span className="inline-block mx-4">Network</span>
            <span className="inline-block mx-4">•</span>
            <span className="inline-block mx-4">Experience</span>
          </h1>
        </motion.div>

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
