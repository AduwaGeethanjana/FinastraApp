import { speakers } from '../constants/speakers';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Speakers = () => {
  return (
    
    <div className="py-16 px-20 bg-gradient-to-r from-black via-zinc-900 to-zinc-600">
      <motion.div 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto ">
        <h2 className="text-5xl  text-white text-center mb-12">Our Speakers</h2>
        
        <div className="flex flex-wrap justify-center gap-12">
          {speakers.map((speaker, index) => (
            <div key={index} className="w-full sm:w-[300px] rounded-4xl overflow-hidden bg-gradient-to-b from-purple-700 to-black shadow-lg transition-transform duration-300 transform hover:-translate-y-3">
              <div className="h-70 overflow-hidden">
                <img 
                  src={speaker.imageUrl} 
                  alt={speaker.name} 
                  className="rounded-4xl w-full h-full   "
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