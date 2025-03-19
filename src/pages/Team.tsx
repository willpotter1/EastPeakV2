
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
      <div className="w-48 h-48 md:w-52 md:h-52 overflow-hidden rounded-full mb-6 team-image">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-2xl font-semibold text-eastpeak-blue mb-1">{name}</h3>
      <p className="text-eastpeak-gold mb-4">{position}</p>
      <p className="text-gray-600 text-center max-w-md leading-relaxed">{description}</p>
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
      img: "/public/lovable-uploads/cca8bed6-b13a-4d93-8807-0789b67c017b.png",
      name: "Henry Potter",
      position: "Partner",
      description: "Over 30 years of investing in central Europe since the fall of the Berlin wall, Henry has witnessed first-hand the transformation of central and eastern Europe. From 2018 to 2023 Henry was a Partner and investment committee member at Alpha Associates overseeing Alpha's CEE secondary and single asset investment program. From the early 1990s until 2008, he made financial sector private equity investments for EBRD, and helped create the EBRD's private equity funds investment team. Henry has backed many of the region's leading private equity firms since inception. He holds a B.A. and M.Sc. from McGill University and the London School of Economics, respectively.",
    },
    {
      img: "/public/lovable-uploads/8ae90eb9-b245-4eb3-8b09-e62cd3c0d208.png",
      name: "Gregor Smith",
      position: "Partner",
      description: "Gregor brings over 20 years of experience in private equity, including a decade as a Partner at the Adriatic Fund, a EUR 66M private equity fund focused on South-East Europe managed alongside Alpha Associates. In addition to his portfolio company oversight responsibilities, Gregor was responsible for the Adriatic Fund's finances, investor relations, and reporting. In recent years, he has been engaged in direct private equity and venture capital investment projects and has served on the supervisory boards of several private companies. Gregor is a CFA charter holder and holds an MSc in Banking and Finance from the University of Ljubljana.",
    },
    {
      img: "/public/lovable-uploads/542cae40-19e8-4b52-b7eb-bbb0e8e823bc.png",
      name: "Leon Johnson",
      position: "Partner",
      description: "Leon has over 20 years of private equity and M&A experience in south-east Europe. From 2008, Leon was a Partner at the EUR 66m Adriatic Fund, managed alongside Alpha Associates, where he was the lead partner on several of the fund's investments and served on the relevant corporate boards. Since 2019, Leon has advised various sell side M&A transactions. Earlier in his career, Leon worked at Wolf Theiss in Belgrade and the Publikum brokerage in Ljubljana. Leon completed his undergraduate studies at Faculty of Law of Ljubljana University and holds an LL.M. degree from Central European University and McGill University.",
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
