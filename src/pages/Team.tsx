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
      <div className="w-48 h-48 md:w-52 md:h-52 overflow-hidden rounded-full mb-6 team-image bg-white flex items-center justify-center">
        <img src={img} alt={name} className="max-w-full max-h-full object-contain object-center" />
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
      img: "/Images/People/henry.png",
      name: "Henry Potter",
      description: "Henry is a pioneer in secondary private equity transactions in CEE alongside being an experienced LP and single asset investor. As an LP he has backed many of the region's leading private equity firms since inception. From 2008 to 2023, he oversaw Alpha Associates' CEE investment Programme as Partner and Investment Committee member. From the early 1990s until 2008, he made private equity investments for the EBRD and helped create the EBRD's private equity funds investment team. He holds a B.A. and M.Sc. from McGill University and the London School of Economics, respectively.",
    },
    {
      img: "/Images/People/grega.png",
      name: "Gregor Dolenec",
      description: "Gregor brings over 20 years of experience in private equity, including a decade as a Partner at the Adriatic Fund, a EUR 66m private equity fund focused on Southeast Europe and managed alongside Alpha Associates. Alongside his portfolio company oversight responsibilities at the Adriatic Fund, Gregor was responsible for the fund's finances, investor relations, and reporting. In recent years, he has been involved in direct private equity and venture capital investments and has served on the supervisory boards of several private companies. Gregor is a CFA charterholder and holds an MSc in Banking and Finance from the University of Ljubljana.",
    },
    {
      img: "/Images/People/leon.png",
      name: "Leon Batagelj",
      description: "Leon has over 20 years of private equity and M&A experience in Southeast Europe. From 2008, Leon was a Partner at the EUR 66m Adriatic Fund, managed alongside Alpha Associates, where he led several investments and served on boards of portfolio companies. Since 2019, Leon has advised various sell-side M&A transactions. Starting his career, Leon worked at a financial advisory and brokerage firm in Belgrade and a regional law firm in Ljubljana. Leon completed his undergraduate studies in the Faculty of Law at the University of Ljubljana and holds an LL.M. from Central European University and McGill University.",
    },
    {
      img: "/Images/People/dominic.png",
      name: "Dominic Reed",
      description: "Dominic has over 35 years' experience in private equity investing and corporate leadership across Europe and emerging markets. He spent 14 years at UFG Private Equity, leading investments in sectors including telecom infrastructure, digital media, consumer, and pharmaceuticals, serving on the boards of multiple growth companies, and overseeing the programme as CIO. Prior to his career in private equity, he worked at the management level in the telecommunications industry with NYNEX CableComms and Metromedia International. He holds an MA from the University of Cambridge and an MBA from London Business School.",
    },
    {
      img: "/Images/People/aleksandra.png",
      name: "Aleksandra Pietrzykowska",
      description: "Aleksandra has seen many sides of private investing - working in an institutional LP, at a financing bank, and in two GPs - venture and private credit. On the investment side, she worked at the LP level with PFR Ventures and at the Polish venture capital manager Experior, gaining experience how capital is allocated and deployed across the ecosystem. This is complemented by private credit, mezzanine and banking experience gained at Santander and, most recently, Syntaxis Capital. She holds a degree in Economics from the University of Cambridge.",
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
          <div className="grid grid-cols-1 [@media(min-width:900px)]:grid-cols-6 gap-16 mb-32">
            {teamMembers.map((member, index) => {
              const desktopSpan =
                index < 3
                  ? "[@media(min-width:900px)]:col-span-2"
                  : index === 3
                    ? "[@media(min-width:900px)]:col-span-2 [@media(min-width:900px)]:col-start-2"
                    : "[@media(min-width:900px)]:col-span-2";

              return (
                <div
                  key={index}
                  className={`${desktopSpan} ${
                    index === 3 ? "[@media(min-width:900px)]:pr-4" : ""
                  } ${index === 4 ? "[@media(min-width:900px)]:pl-4" : ""}`}
                >
                  <TeamMember
                    img={member.img}
                    name={member.name}
                    description={member.description}
                  />
                </div>
              );
            })}
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
              EastPeak works with its partner company{' '}
              <a 
                href="https://www.speakinvest.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#2d3748] hover:text-[#bd825c] transition-colors underline"
              >
                speak invest AG
              </a>
              ,
              which has a broader geographical remit
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
