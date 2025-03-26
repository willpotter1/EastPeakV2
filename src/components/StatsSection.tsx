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
      number: "500+",
      subtitle: "underlying portfolio companies",
    },
    {
      number: "60+",
      subtitle: "transactions in strategy completed",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-[#93b0c7] text-white w-full mt-auto">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center flex flex-col items-center"
            >
              <h3 className="text-5xl md:text-6xl font-light text-[#002d3d] mb-3">
                {stat.number}
              </h3>
              <p className="text-[#002d3d] text-lg md:text-xl">{stat.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
