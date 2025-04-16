// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const speakers = [
  {
    name: "Mr. Mohamed Elazzazy",
    position: "Head of IT Governance and Change Management",
    company: "Al-Baraka Bank Egypt",
    imageUrl: "/src/assets/speakers/1.png"
  },
  {
    name: "Mr. Shehab Moustafa",
    position: "Country Center of Excellence Director",
    company: "Money Fellows",
    imageUrl: "/src/assets/speakers/2.jpg"
  },
  {
    name: "Mr. Marwan Abouzeid",
    position: "Principal Solutions Consultant & Customer Value Lead, MEA & APAC",
    company: "Finastra",
    imageUrl: "/src/assets/speakers/3.jpg"
  },
  {
    name: "Mr. Karim El Mourabet",
    position: "Solution Consulting Director - MEA",
    company: "Finastra",
    imageUrl: "/src/assets/speakers/4.jpg"
  },
  {
    name: "Ms. Siobhan Byron",
    position: "Executive Vice President, Universal Banking",
    company: "Finastra",
    imageUrl: "/src/assets/speakers/5.jpg"
  },
  {
    name: "Mr. Narendra Mistry",
    position: "Chief Product and Technology Officer",
    company: "Universal Banking",
    imageUrl: "/src/assets/speakers/6.jpg"
  },
  {
    name: "Mr. Ahmed Hamdy Bahey El Din",
    position: "Head of Information Technology",
    company: "Finastra",
    imageUrl: "/src/assets/speakers/7.png"
  },
  {
    name: "Mr. Emad Shawky Habib Hanna",
    position: "Chief Data and Analytics Officer",
    company: "Banque Misr",
    imageUrl: "/src/assets/speakers/8.png"
  },
  {
    name: "Ms. Heba Yehia",
    position: "Head of Digital Products",
    company: "Arab African International Bank",
    imageUrl: "/src/assets/speakers/9.jpg"
  },
  {
    name: "Mr. Hamid Nirouzad",
    position: "Managing Director - Africa",
    company: "Finastra Universal",
    imageUrl: "/src/assets/speakers/10.jpg"
  },
  {
    name: "Mr. Rudy Kawmi",
    position: "Managing Director - Middle East, Africa & Asia-Pacific",
    company: "Finastra Universal Banking",
    imageUrl: "/src/assets/speakers/11.jpg"
  },
  {
    name: "Mr. Matthew Hughes",
    position: "Head of FS&I, International Markets",
    company: "Atos",
    imageUrl: "/src/assets/speakers/12.jpg"
  },
  {
    name: "Mr. Daragh O'Byrne",
    position: "Senior Director, Marketing, Universal Banking",
    company: "Finastra",
    imageUrl: "/src/assets/speakers/13.jpg"
  },
  {
    name: "Dr. Ismail Ali",
    position: "Co-Founder and CEO",
    company: "CARITech",
    imageUrl: "/src/assets/speakers/14.jpg"
  },
  {
    name: "Ms. Riham Muhammad",
    position: "Corporate CEX Senior Analyst",
    company: "FABMISR",
    imageUrl: "/src/assets/speakers/15.png"
  }
];

const Speakers = () => {
  return (
    <div className="py-16 px-20 bg-gradient-to-r from-black via-zinc-900 to-zinc-600">
      <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <h2 className="text-5xl text-white text-center mb-12">Our Speakers</h2>
        
        <div className="flex flex-wrap justify-center gap-12">
          {speakers.map((speaker, index) => (
            <div key={index} className="w-full sm:w-[300px] rounded-4xl overflow-hidden bg-gradient-to-b from-purple-700 to-black shadow-lg transition-transform duration-300 transform hover:-translate-y-3">
              <div className="h-70 overflow-hidden">
                <img 
                  src={speaker.imageUrl} 
                  alt={speaker.name} 
                  className="rounded-4xl w-full h-full"
                />
              </div>
              
              <div className="p-4 text-center text-white">
                <h3 className="text-xl font-bold mb-1">{speaker.name}</h3>
                <p className="text-sm text-gray-300 mb-1">{speaker.position}</p>
                <p className="text-sm text-gray-400">{speaker.company}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Speakers;
