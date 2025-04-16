import React from 'react';
import { Linkedin, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import award1 from "../assets/Footer/footer1.png"
import award2 from "../assets/Footer/footer2.png"
import award3 from "../assets/Footer/footer3.png"
import award4 from "../assets/Footer/Footer4.png"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div>
            <h2 className="text-3xl font-bold mb-8">Cogent Solutions™</h2>
            <p className="text-gray-300 mb-12 max-w-md">
              Through our conferences we transform your business 
              challenges into opportunities. Our clients and 
              customers are leading government entities and the 
              fortune 500 companies.
            </p>
            
            <h2 className="text-3xl font-bold mb-8">Awards</h2>
            <div className="flex flex-wrap gap-1">
              {/* Award 1 */}

              <div className="relative w-32 h-32">
              <img src={award1} alt="award One" className="h-32 w-32" viewBox="0 0 20 20"/>
              </div>

              {/* Award 2 */}
              <div className="relative w-32 h-32">
              <img src={award2} alt="award One" className="h-32 w-32" viewBox="0 0 20 20"/>
              </div>

              {/* Award 3 */}
              <div className="relative w-32 h-32">
              <img src={award3} alt="award One" className="h-32 w-32" viewBox="0 0 20 20"/>
              </div>

              {/* Award 4 */}
              <div className="relative w-25 h-32">
              <img src={award4} alt="award One" className="h-32 w-32" viewBox="0 0 20 20"/>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Our office</h2>
            
            <div className="space-y-8">
              {/* Office 1 */}
              <div className="flex items-start gap-4">
                <MapPin className="text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 hover:text-white transition">Middle East & Africa HQ</p>
                  <p className="text-gray-400 hover:text-white transition">Office No: 209, The Metropolis Tower</p>
                  <p className="text-gray-400 hover:text-white transition">Business Bay, Dubai, United Arab Emirates</p>
                </div>
              </div>

              {/* Office 2 */}
              <div className="flex items-start gap-4">
                <MapPin className="text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 hover:text-white transition">Asia Pacific HQ</p>
                  <p className="text-gray-400 hover:text-white transition">7th floor Green Lanka Tower, Colombo</p>
                  <p className="text-gray-400 hover:text-white transition">Sri Lanka</p>
                </div>
              </div>

              {/* Office 3 */}
              <div className="flex items-start gap-4">
                <MapPin className="text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 hover:text-white transition">Saudi Arabia HQ</p>
                  <p className="text-gray-400 hover:text-white transition">Riyadh, Saudi Arabia</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex items-center gap-4">
                <Phone className="text-gray-400 flex-shrink-0" />
                <p className="text-gray-400 hover:text-white transition">+971 50 5718867</p>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-gray-400 flex-shrink-0" />
                <p className="text-gray-400 hover:text-white transition">partnerships@cogentsolutions.ae</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright and Social Links */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-6 md:mb-0 ">
            © 2025 Cogent Solutions Event Management LLC. All Right Reserved
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="bg-gray-900 text-white p-2 rounded-full hover:bg-blue-800 transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="bg-gray-900 text-white p-2 rounded-full hover:bg-blue-800 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="bg-gray-900 text-white p-2 rounded-full hover:bg-blue-800 transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="bg-gray-900 text-white p-2 rounded-full hover:bg-blue-800 transition">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;