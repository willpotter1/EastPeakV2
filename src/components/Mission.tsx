import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Mission = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-4xl font-light text-eastpeak-blue mb-10 leading-relaxed">
            Our extensive experience in private markets and our deep knowledge of central Europe allows us to uncover potential that others overlook.
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
