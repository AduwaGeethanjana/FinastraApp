/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const Agenda = () => {
  
  const animationProps = {
    whileInView: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: 100 },
    transition: { duration: 0.5 },
    viewport: { once: false, amount: 0.1 } 
  };

  return (
    <section className="py-32 bg-white">
      <div className="container pl-8 pr-0 mr-2">
        <div className="flex flex-col md:flex-row">
         
          <div>
            <motion.h2 
              {...animationProps}
              className="text-6xl leading-[1.1] mx-50 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent pb-4">
              Agenda
            </motion.h2>
          </div>

          
          <div className="md:w-3/4 mr-20 bg-purple-50 rounded-lg shadow-sm overflow-hidden h-480">
            {/* Agenda Item 1 */}
            <motion.div {...animationProps} className="py-8 px-6">
              <div className="flex flex-col md:flex-row gap-6 pt-4">
                <div className="md:w-1/5">
                  <h3 className="text-xl font-semibold text-gray-800">09:30 AM</h3>
                  <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded-md text-sm">
                    Registration
                  </button>
                </div>

                <div className="md:w-4/5">
                  <h3 className="text-xl font-semibold mb-2">Registration & Welcome Coffee</h3>
                </div>
              </div>
            </motion.div>
            <motion.div {...animationProps} className="mx-4 border-t-2 border-pink-400"></motion.div>

            {/* Agenda Item 2 */}
            <motion.div {...animationProps} className="py-8 px-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/5">
                  <h3 className="text-xl font-semibold text-gray-800">10:00 AM</h3>
                </div>

                <div className="md:w-4/5">
                  <h3 className="text-xl font-semibold mb-2">Opening Remarks</h3>
                  <p className="text-gray-700">
                    Rudy Kawmi, Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div {...animationProps} className="mx-4 border-t-2 border-pink-400"></motion.div>

            {/* Agenda Item 3 */}
            <motion.div {...animationProps} className="py-8 px-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/5">
                  <h3 className="text-xl font-semibold text-gray-800">10:10 AM</h3>
                </div>

                <div className="md:w-4/5">
                  <h3 className="text-xl font-semibold mb-2">Keynote session: Digital Transformation in a Gen AI World</h3>
                  <p className="text-gray-700">
                    Ms. Siobhan Byron, Executive Vice President, Finastra Universal Banking
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div {...animationProps} className="mx-4 border-t-2 border-pink-400"></motion.div>

            {/* Agenda Item 4 */}
            <motion.div {...animationProps} className="py-8 px-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/5">
                  <h3 className="text-xl font-semibold text-gray-800">10:30 AM</h3>
                </div>

                <div className="md:w-4/5">
                  <h3 className="text-xl font-semibold mb-2">Decoding the Future - Transformation: The Opportunity & Time is Now</h3>
                  <p className="text-gray-700">
                    Mr. Daragh O'Byrne, Senior Director, Marketing, Universal Banking, Finastra
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div {...animationProps} className="mx-4 border-t-2 border-pink-400"></motion.div>
             {/* Agenda Item 5 */}
             <motion.div {...animationProps} className="py-6 px-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/5">
                  <h3 className="text-lg font-semibold text-gray-800">11:00 AM</h3>
                </div>
                <div className="md:w-4/5">
                  <h3 className="text-lg font-semibold mb-2">Panel Discussion: Customer Acquisition - Gaining New Customers in a Hyper Competitive World</h3>
                  <div className="text-gray-700">
                    <p>Hamid Neikoui, Managing Director - Africa, Finastra Universal Banking</p>
                    <p>Ahmed Karmiy, Head of Information Technology, International Company for Leasing S.A.E "Incolease"</p>
                    <p>Ms. Rezan Hamad Gurgein Muhammod, Corporate & Supporting, Int'l Saudi Investment Bank</p>
                  </div>
                </div>
              </div>
            </motion.div>

          
            <motion.div {...animationProps} className="mx-4 border-t-2 border-pink-400"></motion.div>

            {/* Agenda Item 6 */}
            <motion.div {...animationProps} className="py-6 px-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/5">
                  <h3 className="text-lg font-semibold text-gray-800">11:30 AM</h3>
                </div>
                <div className="md:w-4/5">
                  <h3 className="text-lg font-semibold mb-2">Panel Discussion: Customer Retention - Keeping Customers When Loyalty is Dead</h3>
                  <div className="text-gray-700">
                    <p>Karim El Mounaded, Solution Consulting Director - Middle East & Africa, Finastra Universal Banking</p>
                    <p>Heba Saleh, Head of Retail Digital Banking, African International Bank</p>
                    <p>Rashid Ali, Co. Founder and CTO of CashTech</p>
                    <p>Mohamed Hosney, Head of IT Governance and Change Management, Al Baraka Bank Egypt</p>
                  </div>
                </div>
              </div>
            </motion.div>

         
            <motion.div {...animationProps} className="mx-4 border-t-2 border-pink-400"></motion.div>

            {/* Agenda Item 7*/}
            <motion.div {...animationProps} className="py-6 px-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/5">
                  <h3 className="text-lg font-semibold text-gray-800">12:00 PM</h3>
                </div>
                <div className="md:w-4/5">
                  <h3 className="text-lg font-semibold mb-2">Coffee Break & Networking</h3>
                </div>
              </div>
            </motion.div>

           
            <motion.div {...animationProps} className="mx-4 border-t-2 border-pink-400"></motion.div>

            {/* Agenda Item 8 */}
            <motion.div {...animationProps} className="py-6 px-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/5">
                  <h3 className="text-lg font-semibold text-gray-800">12:30 PM</h3>
                </div>
                <div className="md:w-4/5">
                  <h3 className="text-lg font-semibold mb-2">Panel Discussion: Cost to Serve: Deliver Customer Delight</h3>
                  <div className="text-gray-700">
                    <p>Naousdra Mitra, Chief Product and Technology Officer, Finastra Universal Banking</p>
                    <p>James Greenwood, Deputy Center of Excellence Director, Money Fellows</p>
                    <p>Matthew Hughes, Head of FPM, International Markets, HSBC</p>
                    <p>Eric Sheehy, Public Names, Chief Data and Analytics Officer, Banque Misr</p>
                  </div>
                </div>
              </div>
            </motion.div>

         
            <motion.div {...animationProps} className="mx-4 border-t-2 border-pink-400"></motion.div>

            {/* Agenda Item 9 */}
            <motion.div {...animationProps} className="py-6 px-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/5">
                  <h3 className="text-lg font-semibold text-gray-800">01:00 PM</h3>
                </div>
                <div className="md:w-4/5">
                  <h3 className="text-lg font-semibold mb-2">The Essential Elements: What do you need to be "all things to all people"?</h3>
                  <p className="text-gray-700">
                    Naousdra Mitra, Chief Product and Technology Officer, Finastra Universal Banking
                  </p>
                </div>
              </div>
            </motion.div>

           
            <motion.div {...animationProps} className="mx-4 border-t-2 border-pink-400"></motion.div>

            {/* Agenda Item 10*/}
            <motion.div {...animationProps} className="py-6 px-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/5">
                  <h3 className="text-lg font-semibold text-gray-800">01:30 PM</h3>
                </div>
                <div className="md:w-4/5">
                  <h3 className="text-lg font-semibold mb-2">Making the case for change: The Question is How</h3>
                  <p className="text-gray-700">
                    Marwan Abouzeid, Principal Solutions Consultant & Customer Value Lead, MEA & APAC, Finastra Universal Banking
                  </p>
                </div>
              </div>
            </motion.div>

          
            <motion.div {...animationProps} className="mx-4 border-t-2 border-pink-400"></motion.div>

            {/* Agenda Item 11*/}
            <motion.div {...animationProps} className="py-6 px-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/5">
                  <h3 className="text-lg font-semibold text-gray-800">01:50 PM</h3>
                </div>
                <div className="md:w-4/5">
                  <h3 className="text-lg font-semibold mb-2">Closing Remarks</h3>
                  <p className="text-gray-700">
                    Rudy Kawmi, Managing Director - Middle East, Africa & Asia Pacific, Finastra Universal Banking
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div {...animationProps} className="mx-4 border-t-2 border-pink-400"></motion.div>

            {/* Agenda Item 12 */}
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.05 }} 
              className="py-6 px-6"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/5">
                  <h3 className="text-lg font-semibold text-gray-800">02:00 PM</h3>
                </div>
                <div className="md:w-4/5">
                  <h3 className="text-lg font-semibold mb-2">Lunch</h3>
                </div>
              </div>
            </motion.div>
            
            
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.05 }}   
              className="mx-4 border-t-2 border-pink-400 mb-4"
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;