
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ValueCard = ({ title, description, index }: { title: string; description: string; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow"
    >
      <h3 className="text-xl font-semibold text-eastpeak-blue mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Values = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      title: "Integrity",
      description: "We operate with the highest ethical standards, maintaining transparency and honesty in all our interactions with partners, investors, and portfolio companies.",
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every aspect of our work, committing to rigorous analysis, thoughtful execution, and continuous improvement.",
    },
    {
      title: "Partnership",
      description: "We build lasting relationships based on mutual respect, aligned interests, and shared success with our investors, management teams, and industry partners.",
    },
    {
      title: "Innovation",
      description: "We embrace innovative approaches to structure transactions, create value, and solve complex problems in the evolving private equity landscape.",
    },
    {
      title: "Local Expertise",
      description: "We leverage our deep understanding of Central European markets, cultures, and business practices to identify unique opportunities and navigate regional complexities.",
    },
    {
      title: "Long-Term Perspective",
      description: "We make decisions with a long-term view, focusing on sustainable value creation rather than short-term gains.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-28 pb-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-eastpeak-blue mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide our decision-making, shape our culture, and define how we engage with our partners and the wider community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ValueCard
                key={index}
                index={index}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Values;
