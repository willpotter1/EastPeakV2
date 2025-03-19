
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CoreValues = () => {
  const [focusRef, focusInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  
  const [networkRef, networkInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  
  const [experienceRef, experienceInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div 
            ref={focusRef}
            initial={{ opacity: 0, y: 30 }}
            animate={focusInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-6 p-4 rounded-full">
              <svg className="w-16 h-16 text-eastpeak-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="8" width="8" height="8" rx="4" stroke="currentColor" strokeWidth="2"/>
                <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-eastpeak-blue uppercase">FOCUS</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              The only firm specialising in CEE secondaries and liquidity solutions
            </p>
            <p className="text-gray-600 leading-relaxed">
              Dedicated coverage of this market since 2008
            </p>
          </motion.div>

          <motion.div 
            ref={networkRef}
            initial={{ opacity: 0, y: 30 }}
            animate={networkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-6 p-4 rounded-full">
              <svg className="w-16 h-16 text-eastpeak-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="2"/>
                <circle cx="19" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="19" r="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M5 12H19M12 5V19" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-eastpeak-blue uppercase">NETWORK</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Proven ability to generate proprietary deal flow
            </p>
            <p className="text-gray-600 leading-relaxed">
              and create value for our partners
            </p>
          </motion.div>

          <motion.div 
            ref={experienceRef}
            initial={{ opacity: 0, y: 30 }}
            animate={experienceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-6 p-4 rounded-full">
              <svg className="w-16 h-16 text-eastpeak-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 8L16 16M16 8L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-eastpeak-blue uppercase">EXPERIENCE</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Over 60 investments completed by the EastPeak team in this strategy
            </p>
            <p className="text-gray-600 leading-relaxed">
              Over EUR 1b of value & proceeds realised
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
