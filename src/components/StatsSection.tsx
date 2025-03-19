
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    {
      number: "1b+",
      subtitle: "programme NAV & distributions",
    },
    {
      number: "500 +",
      subtitle: "underlying portfolio companies",
    },
    {
      number: "60 +",
      subtitle: "transactions in strategy completed",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="stat-card bg-white rounded-lg shadow-sm p-10 text-center"
            >
              <h3 className="text-4xl md:text-5xl font-light text-eastpeak-blue mb-3">
                {stat.number}
              </h3>
              <p className="text-gray-600">{stat.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
