
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="hero-section h-screen w-full relative overflow-hidden" style={{ backgroundImage: "url('/public/lovable-uploads/db8456e2-b847-4221-9acd-484170ed4b55.png')" }}>
      <div className="overlay absolute inset-0"></div>
      <div className="container mx-auto px-6 md:px-12 h-full flex flex-col justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-white text-2xl md:text-4xl font-light tracking-wider mb-4 md:mb-6">
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
          className="absolute bottom-40 left-0 right-0"
        >
          <h2 className="text-center text-eastpeak-gold text-xl md:text-3xl md:text-4xl font-light tracking-wide px-4">
            Your Partner for Central European Private Equity
            <br className="hidden md:block" /> Liquidity Solutions
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
