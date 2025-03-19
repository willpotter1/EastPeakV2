
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TeamMember = ({ img, name, position, description }: { img: string; name: string; position: string; description: string }) => {
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
      className="flex flex-col items-center"
    >
      <div className="w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-full mb-6 team-image">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-2xl font-semibold text-eastpeak-blue mb-1">{name}</h3>
      <p className="text-eastpeak-gold mb-4">{position}</p>
      <p className="text-gray-600 text-center max-w-md">{description}</p>
    </motion.div>
  );
};

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      img: "/public/lovable-uploads/2f2de287-8ef3-4687-9f50-b68e722efcd4.png",
      name: "John Smith",
      position: "Managing Partner",
      description: "20+ years of private equity experience across Central and Eastern Europe.",
    },
    {
      img: "/public/lovable-uploads/1acca5e1-8a8d-45d8-97d1-17024aa78dc7.png",
      name: "Michael Johnson",
      position: "Investment Director",
      description: "Specialist in secondary transactions with deep network in CEE region.",
    },
    {
      img: "/public/lovable-uploads/6f658688-8ad5-41f8-bc4c-ed46cbd86b4e.png",
      name: "Robert Williams",
      position: "Partner",
      description: "Leads our operational value creation team with focus on portfolio companies.",
    },
  ];

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
            <h2 className="text-3xl md:text-4xl font-light text-eastpeak-blue mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced investment team combines deep industry knowledge, strong regional networks, and specialized expertise in the Central European market.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                img={member.img}
                name={member.name}
                position={member.position}
                description={member.description}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
