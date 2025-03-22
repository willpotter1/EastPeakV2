import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div 
      className="hero-section h-screen w-full relative overflow-hidden" 
    >
      <div className="container mx-auto px-6 md:px-12 h-full flex flex-col justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center mt-8"
        >
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
