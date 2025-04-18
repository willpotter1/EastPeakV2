import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NavyBackground from "/Images/Backgrounds/NavyBack.png";

const ServiceCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => {
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
      className="bg-white/10 backdrop-blur-sm rounded-lg shadow-sm p-8 hover:bg-white/20 transition-colors"
    >
      <div className="mb-6 text-[#bd825c]">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-white/80">{description}</p>
    </motion.div>
  );
};

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      
      <div 
        className="flex-1 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${NavyBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#2D4E5F', // Fallback color
        }}
      >
        <div className="container mx-auto px-6 md:px-12 py-32">
          <div className="flex flex-col gap-12 max-w-5xl mx-auto mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <p className="text-white/90 text-2xl md:text-3xl leading-relaxed font-semibold">
                EastPeak's seasoned team has completed <span className="text-[#bd825c]">more private equity secondary transactions in central Europe than anyone else</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <p className="text-white/90 text-2xl md:text-3xl leading-relaxed font-semibold">
                We invest in high quality mid-sized private businesses whether single assets or as part of a portfolio
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <p className="text-white/90 text-2xl md:text-3xl leading-relaxed font-semibold">
                <span className="text-[#bd825c]">We offer both liquidity solutions for existing investors and capital for companies that wish to grow</span>
              </p>
            </motion.div>
          </div>

          {/* Investment Spectrum */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-5xl mx-auto px-4 mb-32"
          >
            {/* Top Dotted Line */}
            <div className="w-full h-[2px] mb-[20vw] [@media(min-width:900px)]:mb-24" style={{ 
              backgroundImage: `radial-gradient(circle, #bd825c 1px, transparent 1px)`,
              backgroundSize: '12px 2px',
              backgroundPosition: 'center'
            }} />

            <div className="relative h-[50vw] [@media(min-width:900px)]:h-60">
              {/* Main Line with Arrows */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(60%,700px)] flex items-center
                   [@media(min-width:900px)]:rotate-0 -rotate-90 origin-center">
                {/* Left Arrow */}
                <div className="absolute -left-3 w-0 h-0 
                     border-t-[0.5em] border-b-[0.5em] border-r-[0.75em]
                     border-t-transparent border-b-transparent border-r-[#bd825c]"></div>
                
                {/* Line */}
                <div className="w-full h-1 bg-[#bd825c]"></div>
                
                {/* Right Arrow */}
                <div className="absolute -right-3 w-0 h-0 
                     border-t-[0.5em] border-b-[0.5em] border-l-[0.75em]
                     border-t-transparent border-b-transparent border-l-[#bd825c]"></div>
                
                {/* Left Label */}
                <div className="absolute -left-[30%] top-1/2 -translate-y-1/2 text-[#bd825c] font-semibold whitespace-nowrap text-[min(2vw,1.1rem)] [@media(min-width:900px)]:text-base flex items-center
                     [@media(min-width:900px)]:rotate-0 [@media(min-width:900px)]:-left-[25%] rotate-90 text-center">
                  POOLED<br />AND<br />DIVERSIFIED
                </div>
                
                {/* Right Label */}
                <div className="absolute -right-[25%] top-1/2 -translate-y-1/2 text-[#bd825c] font-semibold whitespace-nowrap text-[min(2vw,1.1rem)] [@media(min-width:900px)]:text-base flex items-center
                     [@media(min-width:900px)]:rotate-0 rotate-90 text-center">
                  SINGLE<br />ASSETS
                </div>
              </div>

              {/* Dots and Labels Container */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(50%,600px)]
                   [@media(min-width:900px)]:rotate-0 -rotate-90 origin-center">
                {/* Dots */}
                <div className="flex justify-between px-[10%]">
                  {[...Array(7)].map((_, i) => (
                    <div key={i} className="relative">
                      <div className="w-2 h-2 rounded-full bg-[#bd825c]"></div>
                      
                      {/* Top Labels */}
                      {i === 0 && (
                        <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 text-white text-center w-32 text-[min(2vw,1.1rem)] [@media(min-width:900px)]:text-base
                             [@media(min-width:900px)]:-top-16 [@media(min-width:900px)]:rotate-0
                             -top-16 rotate-90">
                          LP<br />Secondaries
                        </div>
                      )}
                      {i === 2 && (
                        <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 text-white text-center w-32 text-[min(2vw,1.1rem)] [@media(min-width:900px)]:text-base
                             [@media(min-width:900px)]:-top-16 [@media(min-width:900px)]:rotate-0
                             -top-16 rotate-90">
                          Fund<br />Restructuring
                        </div>
                      )}
                      {i === 4 && (
                        <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 text-white text-center w-32 text-[min(2vw,1.1rem)] [@media(min-width:900px)]:text-base
                             [@media(min-width:900px)]:-top-16 [@media(min-width:900px)]:rotate-0
                             -top-16 rotate-90">
                          Aged &amp;<br />Secondary Directs
                        </div>
                      )}
                      {i === 6 && (
                        <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 text-white text-center w-32 text-[min(2vw,1.1rem)] [@media(min-width:900px)]:text-base
                             [@media(min-width:900px)]:-top-16 [@media(min-width:900px)]:rotate-0
                             -top-16 rotate-90">
                          Co-<br />investments
                        </div>
                      )}
                      
                      {/* Bottom Labels */}
                      {i === 1 && (
                        <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 text-white text-center w-32 text-[min(2vw,1.1rem)] [@media(min-width:900px)]:text-base
                             [@media(min-width:900px)]:top-16 [@media(min-width:900px)]:rotate-0
                             top-16 rotate-90">
                          GP-led<br />Secondaries
                        </div>
                      )}
                      {i === 3 && (
                        <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 text-white text-center w-32 text-[min(2vw,1.1rem)] [@media(min-width:900px)]:text-base
                             [@media(min-width:900px)]:top-16 [@media(min-width:900px)]:rotate-0
                             top-16 rotate-90">
                          Tail<br />Ends
                        </div>
                      )}
                      {i === 5 && (
                        <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 text-white text-center w-32 text-[min(2vw,1.1rem)] [@media(min-width:900px)]:text-base
                             [@media(min-width:900px)]:top-16 [@media(min-width:900px)]:rotate-0
                             top-16 rotate-90">
                          Independent<br />Sponsor<br />Deals
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Dotted Line */}
            <div className="w-full h-[2px] mt-[20vw] [@media(min-width:900px)]:mt-24" style={{ 
              backgroundImage: `radial-gradient(circle, #bd825c 1px, transparent 1px)`,
              backgroundSize: '12px 2px',
              backgroundPosition: 'center'
            }} />
          </motion.div>

          {/* Services Detail Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="max-w-5xl mx-auto px-4"
          >
            <div className="space-y-12">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 mt-2 rounded-full bg-[#bd825c] flex-shrink-0"></div>
                <div>
                  <p className="text-xl"><span className="text-[#bd825c] text-2xl font-semibold">LP Secondaries: </span>
                  <span className="text-white">We purchase investors in private equity funds in the region and have led over 30 such transactions. We buy both single interest and portfolios</span></p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 mt-2 rounded-full bg-[#bd825c] flex-shrink-0"></div>
                <div>
                  <p className="text-xl"><span className="text-[#bd825c] text-2xl font-semibold">GP-Led Transactions: </span>
                  <span className="text-white">We support continuation funds where our private equity partners would like to both realise liquidity and continue growing their investments</span></p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 mt-2 rounded-full bg-[#bd825c] flex-shrink-0"></div>
                <div>
                  <p className="text-xl"><span className="text-[#bd825c] text-2xl font-semibold">Fund Restructurings: </span>
                  <span className="text-white">We help restructure private equity funds enabling strategic sales and unlocking value for our partners</span></p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 mt-2 rounded-full bg-[#bd825c] flex-shrink-0"></div>
                <div>
                  <p className="text-xl"><span className="text-[#bd825c] text-2xl font-semibold">Tail-ends: </span>
                  <span className="text-white">We purchase the last assets in a private equity fund, allowing ageing funds to be liquidated</span></p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 mt-2 rounded-full bg-[#bd825c] flex-shrink-0"></div>
                <div>
                  <p className="text-xl"><span className="text-[#bd825c] text-2xl font-semibold">Aged & Secondary Directs: </span>
                  <span className="text-white">We finance existing private equity owned businesses that need capital to grow or that seek liquidity for their investors</span></p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 mt-2 rounded-full bg-[#bd825c] flex-shrink-0"></div>
                <div>
                  <p className="text-xl"><span className="text-[#bd825c] text-2xl font-semibold">Independent Sponsor Transactions: </span>
                  <span className="text-white">We are open to high quality single asset transactions with fund-less sponsors</span></p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 mt-2 rounded-full bg-[#bd825c] flex-shrink-0"></div>
                <div>
                  <p className="text-xl"><span className="text-[#bd825c] text-2xl font-semibold">Co-investments: </span>
                  <span className="text-white">We co-invest alongside our extensive network of trusted GPs where needed to fully finance a new private equity investment</span></p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
