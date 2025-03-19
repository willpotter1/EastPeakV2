
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <footer
      ref={ref}
      className="hero-section py-12 relative"
      style={{
        backgroundImage:
          "url('/public/lovable-uploads/9c117b2c-07e1-43f3-8807-013fa0cc3242.png')",
      }}
    >
      <div className="overlay absolute inset-0"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/public/lovable-uploads/e8dcf9df-7189-4157-ae79-c37cbccf73a2.png"
                alt="EastPeak Logo"
                className="h-10"
              />
              <span className="text-white font-semibold text-xl tracking-tight">
                EastPeak <span className="text-eastpeak-gold">Invest</span>
              </span>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 text-center md:text-left">
            <Link to="/about" className="text-white hover:text-eastpeak-gold transition-colors">
              About us
            </Link>
            <Link to="/services" className="text-white hover:text-eastpeak-gold transition-colors">
              What we do
            </Link>
            <Link to="/team" className="text-white hover:text-eastpeak-gold transition-colors">
              Team
            </Link>
            <Link to="/values" className="text-white hover:text-eastpeak-gold transition-colors">
              Values
            </Link>
            <Link to="/contact" className="text-white hover:text-eastpeak-gold transition-colors">
              Contact us
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center text-white text-sm"
        >
          &copy; {new Date().getFullYear()} EastPeak Invest. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
