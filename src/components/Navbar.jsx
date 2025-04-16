import { useState, useEffect } from "react";
import logo from "/src/assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
   
    checkScreenSize();
    

    window.addEventListener("resize", checkScreenSize);
    
  
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative flex items-center justify-between py-6 px-50 md:px-50 bg-black">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="w-40" />
      </div>
      
      {/* Desktop Menu */}
      {!isMobile && (
        <>
          <div className="flex items-center justify-center gap-8">
            <a
              href="#event-overview"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Event Overview
            </a>

            <a
              href="#agenda"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Agenda
            </a>
          </div>

          <div>
            <button className="bg-transparent text-white py-2 px-6 border border-white rounded-full hover:text-orange-500 transition-colors duration-300">
              Register Now
            </button>
          </div>
        </>
      )}
      
      {/* Mobile Hamburger Menu */}
      {isMobile && (
        <button 
          onClick={toggleMenu}
          className="p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      )}
      
      {/* Mobile Menu Dropdown */}
      {isMobile && isMenuOpen && (
        <div className="absolute top-full left-0 w-64 bg-black border border-gray-800 z-10">
          <div className="flex flex-col py-2">
            <a
              href="#event-overview"
              className="px-4 py-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              Event Overview
            </a>

            <a
              href="#agenda"
              className="px-4 py-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              Agenda
            </a>
            
            <div className="px-4 py-4">
              <button className="w-full bg-transparent text-white py-2 px-6 border border-white rounded-full hover:text-orange-500 transition-colors duration-300">
                Register Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;