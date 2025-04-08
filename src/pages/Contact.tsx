import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
      <Navbar
        scrollToSection={(name) => {
          if (name === 'contact') {
            const totalHeight = document.documentElement.scrollHeight;
            window.scrollTo({
              top: totalHeight * 0.4, // Scroll to 40% down the page
              behavior: 'smooth'
            });
          } else {
            const element = document.getElementById(name);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }}
      />

        
        <div 
          className="flex-1 relative flex flex-col justify-end"
          style={{
            backgroundImage: "url('/Images/Backgrounds/EastPeak_lastpage.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />
          <div className="relative z-10 pb-12">
            <div className="container mx-auto px-6 md:px-24">
              <div className="flex flex-col md:flex-row items-start md:items-end justify-between w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-white space-y-2 mb-4 md:mb-0"
                >
                  <h2 className="text-3xl font-semibold">EastPeak Limited</h2>
                  <p className="text-xl font-light">Byron Mews, London, NW3 2NQ</p>
                  <p className="text-xl font-light">United Kingdom</p>
                  <div className="space-y-2 mt-4">
                    <p className="text-xl font-light">
                      <span className="inline-block w-24">Phone:</span>
                      <span>+44 20 7864 7225</span>
                    </p>
                    <p className="text-xl font-light">
                      <span className="inline-block w-24">Email:</span>
                      <span>info@eastpeakinvest.com</span>
                    </p>
                  </div>
                </motion.div>
                
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  src="/Images/Backgrounds/TransparentLogo.png"
                  alt="EastPeak Logo"
                  className="h-32 w-auto opacity-30 brightness-0 invert mt-8 md:mt-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#001f2f] py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-[#b8860b] text-2xl mb-6">Disclaimer and Legal Notice</h2>
          <div className="text-white/80 space-y-6 text-sm leading-relaxed">
            <p>
              Disclaimer: The information contained in this website is for general information purposes only and EastPeak Ltd is not soliciting any action based on it. The material is not to be constructed as an offer or a recommendation to buy or sell an interest in any partnership, fund, or other product nor is it to be interpreted as investment advice or investment management. The information is provided by EastPeak Ltd and while we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website. If you send us an email, we may collect your name, email address and any other information you provide to us.
            </p>
            <div className="w-full border-t border-white/10 my-8" />
            <p className="text-white/60 text-center">
              Copyright © 2025. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
