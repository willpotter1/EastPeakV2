
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-28 pb-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-eastpeak-blue mb-4">About EastPeak Invest</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your dedicated partner for private equity liquidity solutions in Central Europe.
            </p>
          </motion.div>

          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <div>
              <h3 className="text-2xl font-semibold text-eastpeak-blue mb-4">Our History</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2008, EastPeak Invest has established itself as the leading specialized firm focusing on private equity secondaries and liquidity solutions in Central and Eastern Europe. With decades of combined experience, our founding partners recognized the untapped potential in the region's growing private markets.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Over the years, we have built a reputation for creating value through our deep market knowledge, extensive network, and differentiated approach to transactions. Our team has completed over 60 investments, managing more than €1 billion in assets across the region.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-eastpeak-blue mb-4">Our Approach</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                EastPeak Invest takes a methodical approach to identifying opportunities that others overlook. We leverage our specialized knowledge of Central European markets to source proprietary deals and create value for our partners.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our investment process is characterized by rigorous due diligence, disciplined valuation, and active management. We work closely with management teams to implement operational improvements and strategic initiatives that drive growth and maximize returns.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
