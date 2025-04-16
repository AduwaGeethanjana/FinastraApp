import header from "../assets/header.jpg";
import finastra from "../assets/finastra.png";

const Header = () => {
    return (
        <div className="text-center pt-12 pb-0 bg-gradient-to-b from-black to-purple-900">

        <p className="text-gray-400 mb-4">Organized By</p>
  
        
        <img 
          src={finastra} 
          alt="Finastra Logo" 
          className="mx-auto h-12 mb-8"
        />
  
  <h1 className="text-white text-7xl font-bold mb-8 leading-tight">
  Reimagine Banking:<br />
  Adapt. Evolve. Thrive.
</h1>
  
        <div className="text-gray-400 space-y-2 mb-12">
          <p>Date: 9th April 2025</p>
          <p>Time: 9:30 AM - 2:00 PM GMT+2</p>
          <p>The Nile Ritz-Carlton, Cairo, Egypt</p>
        </div>
  
        <div className="max-w-4xl mx-auto rounded-lg overflow-hidden mb-0">
        <img 
  src={header} 
  alt="header image" 
  className="w-[560px] object-cover rounded-lg mx-auto"
/>

        </div>
      </div>
    );
  };
  
  export default Header;
  