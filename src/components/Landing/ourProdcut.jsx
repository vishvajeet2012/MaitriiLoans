import React from 'react';
import { motion } from 'framer-motion';
import ourProductImage from "../../../public/images/ourProdcut.png";

const services = [
  {
    title: "MORTGAGE LOAN",
    description: "Our flexible solutions cater to all types of personal and business needs, offering terms from 3 to 7 years. With minimal documentation and easy payment options, we make it simple and convenient for you to achieve your goals.",
  },
  {
    title: "BUSINESS LOAN",
    description: "Our flexible solutions cater to all types of personal and business needs, with terms ranging from 1 to 3 years. Benefit from minimal documentation and easy payment options, making the process convenient and straightforward for you.",
  },
  {
    title: "VEHICLE LOAN",
    description: "Our flexible solutions are designed to meet all types of personal and business needs, with terms ranging from 2 to 5 years. Enjoy minimal documentation requirements and easy payment options, making it simple and achieve your goals.",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3 
    }
  }
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 }, 
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const OurProduct = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      
      {/* Background Image Section */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${ourProductImage.src})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        
        {/* Main Heading Animation - Fixed */}
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          // Added 'uppercase' and 'tracking-wider' for a better section title look
          className="text-3xl md:text-5xl font-bold text-center text-white mb-16 max-w-4xl mx-auto leading-tight drop-shadow-lg uppercase tracking-wider"
        >
          Our Products
        </motion.h1>

        {/* Cards Grid Animation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="group relative p-8 rounded-2xl overflow-hidden border border-white/10 bg-black/30 backdrop-blur-md shadow-xl hover:bg-black/40 transition-all duration-300"
            >
              <div className="flex flex-col h-full justify-between items-start">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-8 opacity-90">
                    {service.description}
                  </p>
                </div>
                
                {/* Apply Button */}
                <button className="px-8 py-2 rounded-full bg-white/20 hover:bg-white/30 text-white font-medium text-sm transition-all duration-300 backdrop-blur-sm border border-white/10">
                  Apply
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default OurProduct;