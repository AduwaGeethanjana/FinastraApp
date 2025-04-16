import { motion } from 'framer-motion';
import speaker1 from "../assets/speakers/one.png";
import speaker2 from "../assets/speakers/two.jpg";
import speaker3 from "../assets/speakers/three.jpg";
import speaker4 from "../assets/speakers/four.jpg";
import speaker5 from "../assets/speakers/five.jpg";
import speaker6 from "../assets/speakers/six.jpg";
import speaker7 from "../assets/speakers/seven.png";
import speaker8 from "../assets/speakers/eight.png";
import speaker9 from "../assets/speakers/nine.jpg";
import speaker10 from "../assets/speakers/ten.jpg";
import speaker11 from "../assets/speakers/eleven.jpg";
import speaker12 from "../assets/speakers/twelve.jpg";
import speaker13 from "../assets/speakers/thirteen.jpg";
import speaker14 from "../assets/speakers/fourteen.jpg";
import speaker15 from "../assets/speakers/fifteen.png";

const Speakers = () => {
  const speakerCard = (img, name, position, company) => (
    <div className="w-full sm:w-[300px] rounded-4xl overflow-hidden bg-gradient-to-b from-purple-700 to-black shadow-lg transition-transform duration-300 transform hover:-translate-y-3">
      <div className="h-70 overflow-hidden">
        <img src={img} alt={name} className="rounded-4xl w-full h-full" />
      </div>
      <div className="p-4 text-center text-white">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-sm text-gray-300 mb-1">{position}</p>
        <p className="text-sm text-gray-400">{company}</p>
      </div>
    </div>
  );

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
          {speakerCard(speaker1, "Mr. Mohamed Elazzazy", "Head of IT Governance and Change Management", "Al-Baraka Bank Egypt")}
          {speakerCard(speaker2, "Mr. Shehab Moustafa", "Country Center of Excellence Director", "Money Fellows")}
          {speakerCard(speaker3, "Mr. Marwan Abouzeid", "Principal Solutions Consultant & Customer Value Lead, MEA & APAC", "Finastra")}
          {speakerCard(speaker4, "Mr. Karim El Mourabet", "Solution Consulting Director - MEA", "Finastra")}
          {speakerCard(speaker5, "Ms. Siobhan Byron", "Executive Vice President, Universal Banking", "Finastra")}
          {speakerCard(speaker6, "Mr. Narendra Mistry", "Chief Product and Technology Officer", "Universal Banking")}
          {speakerCard(speaker7, "Mr. Ahmed Hamdy Bahey El Din", "Head of Information Technology", "Finastra")}
          {speakerCard(speaker8, "Mr. Emad Shawky Habib Hanna", "Chief Data and Analytics Officer", "Banque Misr")}
          {speakerCard(speaker9, "Ms. Heba Yehia", "Head of Digital Products", "Arab African International Bank")}
          {speakerCard(speaker10, "Mr. Hamid Nirouzad", "Managing Director - Africa", "Finastra Universal")}
          {speakerCard(speaker11, "Mr. Rudy Kawmi", "Managing Director - Middle East, Africa & Asia-Pacific", "Finastra Universal Banking")}
          {speakerCard(speaker12, "Mr. Matthew Hughes", "Head of FS&I, International Markets", "Atos")}
          {speakerCard(speaker13, "Mr. Daragh O'Byrne", "Senior Director, Marketing, Universal Banking", "Finastra")}
          {speakerCard(speaker14, "Dr. Ismail Ali", "Co-Founder and CEO", "CARITech")}
          {speakerCard(speaker15, "Ms. Riham Muhammad", "Corporate CEX Senior Analyst", "FABMISR")}
        </div>
      </motion.div>
    </div>
  );
};

export default Speakers;
