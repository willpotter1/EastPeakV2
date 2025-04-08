import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BlueBackground from "/Images/Backgrounds/BlueBack.png";

const TeamMember = ({ img, name, position, description }: { img: string; name: string; position?: string; description: string }) => {
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
      <p className="text-gray-600 text-center max-w-md leading-relaxed text-base md:text-lg">{description}</p>
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
      description: "Over 30 years of investing in central Europe since the fall of the Berlin wall, Henry has witnessed first-hand the transformation of central and eastern Europe. From 2018 to 2023 Henry was a Partner and investment committee member at Alpha Associates overseeing Alpha's CEE secondary and single asset investment program. From the early 1990s until 2008, he made financial sector private equity investments for EBRD, and helped create the EBRD's private equity funds investment team. Henry has backed many of the region's leading private equity firms since inception. He holds a B.A. and M.Sc. from McGill University and the London School of Economics, respectively.",
    },
    {
      img: "/public/lovable-uploads/8ae90eb9-b245-4eb3-8b09-e62cd3c0d208.png",
      name: "Gregor Dolenec",
      description: "Gregor brings over 20 years of experience in private equity, including a decade as a Partner at the Adriatic Fund, a EUR 66M private equity fund focused on South-East Europe managed alongside Alpha Associates. In addition to his portfolio company oversight responsibilities, Gregor was responsible for the Adriatic Fund's finances, investor relations, and reporting. In recent years, he has been engaged in direct private equity and venture capital investment projects and has served on the supervisory boards of several private companies. Gregor is a CFA charter holder and holds an MSc in Banking and Finance from the University of Ljubljana.",
    },
    {
      img: "/public/lovable-uploads/542cae40-19e8-4b52-b7eb-bbb0e8e823bc.png",
      name: "Leon Batagelj",
      description: "Leon has over 20 years of private equity and M&A experience in south-east Europe. From 2008, Leon was a Partner at the EUR 66m Adriatic Fund, managed alongside Alpha Associates, where he was the lead Partner on several of the fund's investments and served on the relevant corporate boards. Since 2019, Leon has advised various sell side M&A transactions. Earlier in his career, Leon worked at Wolf Theiss in Belgrade and the Publikum brokerage in Ljubljana. Leon completed his undergraduate studies at Faculty of Law of Ljubljana University and holds an LL.M. degree from Central European University and McGill University.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      
      <div 
        className="flex-1 relative"
        style={{
          backgroundImage: `url(${BlueBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#2D4E5F', // Fallback color
        }}
      >
        <div className="container mx-auto px-6 md:px-12 py-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-32">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                img={member.img}
                name={member.name}
                description={member.description}
              />
            ))}
          </div>
        </div>
          
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[#adc2d5] py-24"
        >
          <div className="container mx-auto px-6 md:px-12">
            <p className="text-[#2d3748] text-3xl md:text-4xl text-center font-light leading-relaxed">
              "EastPeak works with its partner company{' '}
              <a 
                href="https://www.speakinvest.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#2d3748] hover:text-[#bd825c] transition-colors underline"
              >
                speak invest AG
              </a>
              ,<br />
              which has a broader geographical remit"
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
