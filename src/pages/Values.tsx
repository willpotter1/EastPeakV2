import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ImpactImage from "../../Images/Logo/Impact.png";
import ESGImage from "../../Images/Logo/ESG.png";
import ValuesImage from "../../Images/Logo/Values.png";
import BeigeBackground from "/Images/Backgrounds/BeigeBack.png";

const ValueSection = ({ title, description }: { title: string; description: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center"
    >
      {title === "IMPACT" && (
        <div className="mb-6">
          <img src={ImpactImage} alt="Impact" className="w-28 h-24" />
        </div>
      )}
      {title === "ESG" && (
        <div className="mb-6">
          <img src={ESGImage} alt="ESG" className="w-28 h-24" />
        </div>
      )}
      {title === "VALUES" && (
        <div className="mb-6">
          <img src={ValuesImage} alt="Values" className="w-28 h-24" />
        </div>
      )}
      <h3 className="text-[#bd825c] text-2xl md:text-3xl font-semibold mb-6">{title}</h3>
      <p className="text-gray-700 text-lg leading-relaxed max-w-md">{description}</p>
    </motion.div>
  );
};

const Values = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "IMPACT",
      description: "The private equity asset class in central Europe has hugely contributed to the transformation of the region's economies and societies since the 1990s. By importing private capital, it has financed with long-term equity thousands of small and medium sized businesses – helping entrepreneurs realise their dreams. And helping offer better products and more choices to consumers and B2B customers."
    },
    {
      title: "ESG",
      description: "By integrating environmental, social, and governance principles into EastPeak's decision-making process, we aim to contribute to a more equitable and sustainable future. It's not just the right thing to do – it's also good business. Our experience shows that implementing ESG objectives can help power performance."
    },
    {
      title: "VALUES",
      description: "EastPeak Partners have decades of experience working for, and investing on behalf of, IFIs such as the EBRD and the IFC/World Bank group. We have made our careers in an environment where sustainability is a core value – we know how to implement environmental & social policies in our investing."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex flex-col"
        style={{
          backgroundImage: `url(${BeigeBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#efe3d9', // Fallback color
        }}
      >
        <div className="flex-grow container mx-auto px-6 md:px-12 flex flex-col justify-center pt-40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto w-full">
            {sections.map((section, index) => (
              <ValueSection
                key={index}
                title={section.title}
                description={section.description}
              />
            ))}
          </div>
        </div>
          
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="py-24"
        >
          <div className="container mx-auto px-6 md:px-12">
            <p className="text-[#bd825c] text-xl md:text-2xl text-center font-semibold leading-relaxed max-w-5xl mx-auto">
              EastPeak is under the process of becoming a signatory to the Principles of Responsible Investing (PRI) and is implementing Article 8 of the 8 of the EU Sustainable Finance Disclosure Regulation (SFDR) for its funds
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Values;
