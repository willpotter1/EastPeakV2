import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CoreValues = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12" ref={ref}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-6">
              <img src="/Images/Logo/Focus.png" alt="Focus" className="w-28 h-24" />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#002d3d] uppercase">FOCUS</h3>
            <p className="text-lg md:text-xl text-[#295671] leading-relaxed mb-4">
              The only firm specialising
              in CEE secondaries
              and liquidity solutions.
              Dedicated coverage of<br />
              this market since 2008
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-6">
              <img src="/Images/Logo/Network.png" alt="Network" className="w-32 h-24" />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#002d3d] uppercase">NETWORK</h3>
            <p className="text-lg md:text-xl text-[#295671] leading-relaxed mb-4">
              Proven ability to generate proprietary deal flow and create value for our partners
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-6">
              <img src="/Images/Logo/Experience.png" alt="Experience" className="w-36 h-24" />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#002d3d] uppercase">EXPERIENCE</h3>
            <p className="text-lg md:text-xl text-[#295671] leading-relaxed mb-4">
              Over 60 investments completed by EastPeak team in this strategy
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
