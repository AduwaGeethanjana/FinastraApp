/* eslint-disable no-unused-vars */
import overview from "../assets/overview.jpg";
import { motion } from "framer-motion";
import icon1 from "../assets/icons/one.png";
import icon2 from "../assets/icons/two.png";
import icon3 from "../assets/icons/three.png";
import icon4 from "../assets/icons/four.png";
import icon5 from "../assets/icons/five.png";

const Overview = () => {
  return (
    <div className="py-8 md:py-16 px-4" style={{ backgroundColor: '#121212' }}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
          
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3 flex justify-center h-full">
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl text-center">Event Overview</h2>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-9 text-gray-300 space-y-4 md:space-y-6 text-base md:text-lg lg:text-xl">
            <p>
              Join us on April 9th in Cairo, Egypt, for Finastra's Universal Banking Forum, "Reimagine Banking: Adapt. Evolve. Thrive." This exclusive event is designed to help you navigate and excel in the rapidly evolving banking landscape.
            </p>
            <p>
              Our forum will bring together business and technology experts, industry leaders, and visionaries to share their insights on the latest trends and challenges in the banking sector. You'll gain valuable knowledge on topics such as Generative AI, the impact of volatility, globalization challenges, persistent supply chain issues, recession threats, shifts in competitive dynamics, and evolving regulations.
            </p>
            <p>
              Each session will delve into the implications, challenges, and opportunities these topics present, providing you with practical strategies to leverage the latest technologies and capitalize on emerging opportunities. This is a unique chance to learn from the best in the industry, stay ahead of the curve, and connect with fellow retail banking professionals.
            </p>
            <p>
              Don't miss this opportunity to enhance your knowledge, skills, and network in the finance and banking sector. Register today and secure your place at this must-attend event!
            </p>
          </motion.div>
        </div>

        {/* Reasons to Attend Section */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="mt-8 md:mt-16 px-4 sm:px-8 md:px-16 lg:px-24 pt-8 md:pt-16 lg:pt-24">
          <div className="bg-purple-900 rounded-xl overflow-hidden px-4 py-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left column - Image */}
              <div className="p-2 md:p-4">
                <img 
                  src={overview}
                  alt="Person checking smartwatch" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              {/* Right column - Benefits */}
              <div className="p-4 md:p-6 lg:p-8 text-white">
                <h3 className="text-xl sm:text-2xl md:text-3xl mb-4 md:mb-6">
                  TOP REASONS WHY THIS IS THE ONLY CONFERENCE YOU NEED TO ATTEND IN 2025
                </h3>
                
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex items-start gap-2 md:gap-3">
                    <span className="mt-1 text-white">
                      <img src={icon1} alt="Learn" className="h-5 w-5 md:h-7 md:w-7" />
                    </span>
                    <span className="text-sm md:text-base">Learn from industry experts</span>
                  </li>
                  
                  <li className="flex items-start gap-2 md:gap-3">
                    <span className="mt-1 text-white">
                      <img src={icon2} alt="Trends" className="h-5 w-5 md:h-7 md:w-7" />
                    </span>
                    <span className="text-sm md:text-base">Stay ahead of emerging trends</span>
                  </li>
                  
                  <li className="flex items-start gap-2 md:gap-3">
                    <span className="mt-1 text-white">
                      <img src={icon3} alt="Banking" className="h-5 w-5 md:h-7 md:w-7" />
                    </span>
                    <span className="text-sm md:text-base">Connect with fellow banking professionals</span>
                  </li>
                  
                  <li className="flex items-start gap-2 md:gap-3">
                    <span className="mt-1 text-white">
                      <img src={icon4} alt="Knowledge" className="h-5 w-5 md:h-7 md:w-7" />
                    </span>
                    <span className="text-sm md:text-base">Enhance your knowledge, skills, and network</span>
                  </li>
                  
                  <li className="flex items-start gap-2 md:gap-3">
                    <span className="mt-1 text-white">
                      <img src={icon5} alt="Experience" className="h-5 w-5 md:h-7 md:w-7" />
                    </span>
                    <span className="text-sm md:text-base">Share your expertise and experience with peers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Overview;