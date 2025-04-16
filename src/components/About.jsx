// src/components/About.jsx

import React from "react";

const About = () => {
  return (
    <section className="text-white py-30 px-4 text-center" style={{ backgroundColor: '#121212' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-6">About Finastra</h2>
        <p className="text-xl leading-relaxed mb-6">
          Finastra is a global provider of financial services software applications across Lending, Payments, 
          Treasury and Capital Markets, and Universal (retail and digital) Banking. Committed to unlocking 
          the potential of people, businesses and communities everywhere, its vision is to accelerate the future 
          of Open Finance through technology and collaboration, and its pioneering approach is why it is trusted 
          by ~8,100 financial institutions, including 45 of the world's top 50 banks.
        </p>
        <p className="text-base text-lg">
          For more information, visit{" "}
          <a 
            href="https://www.finastra.com" 
            className="underline text-white hover:text-pink-500"
            target="_blank" 
            rel="noopener noreferrer"
          >
            www.finastra.com
          </a>.
        </p>
      </div>
    </section>
  );
};

export default About;
