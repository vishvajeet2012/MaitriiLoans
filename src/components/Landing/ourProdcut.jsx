import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "MORTGAGE LOAN",
    point: [
      `Loan Amount: 3 to 50 lakh`,
      `Tenure: 2 to 7 years`,
      `Cibil Score: Minimum 620 (Condition Apply)*`
    ],
    link: "/product/mortgage"
  },
  {
    title: "Home Loan",
    point: [
      `Loan Amount: 3 to 50 lakh`,
      `Tenure: 2 to 10 years`,
      `Cibil Score: Minimum 620 (Condition Apply)`
    ], // Comma fixed
    link: "/product/home-loan"
  },
  {
    title: "VEHICLE LOAN",
    point: [
      `Loan Amount: 1 to 15 lakh`,
      `Tenure: 2 to 5 years`,
      `Cibil Score: Minimum 620 (Condition Apply)*`
    ], // Comma fixed
    link: "/product/vehicle-loan"
  },
  {
    title: "MSME (secured)",
    point: [
      `Loan Amount: 3 to 50 lakh`,
      `Tenure: 2 to 7 years`,
      `Cibil Score: Minimum 620 (Condition Apply)`
    ],
    link: "/product/msme"
  },
  {
    title: "MSME (unsecured)",
    point: [
      `Loan Amount: 1 to 5 lakh`,
      `Tenure: 1 to 3 years`,
      `Cibil Score: Minimum 620 (Condition Apply)`
    ],
    link: "/product/msme"
  },
  {
    title: "Business & Personal loan",
    point: [
      `Loan Amount: 1 to 5 lakh`,
      `Tenure: 3 months to 3 years`,
      `Cibil Score: Minimum 620 (Condition Apply)`
    ],
    link: "/product/personal-loan"
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
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-5xl text-center text-white mb-10 max-w-4xl mx-auto leading-tight drop-shadow-lg uppercase tracking-wider"
        >
          Our Products
        </motion.h1>
        
        <motion.p className="text-center text-white mb-10 max-w-3xl mx-auto">
          Our flexible solutions cater to all types of your personal and business needs, offering term loans from 2 to 10 years. With minimal documentation and easy payment options, we make it simple and convenient for you to achieve your goals.
        </motion.p>

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
                <div className="w-full">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>
                  
                  {/* Updated: Showing points instead of description */}
                  <ul className="text-gray-200 text-sm md:text-base leading-relaxed mb-8 opacity-90 list-disc pl-5 space-y-2">
                    {service.point.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <a href={service.link} className="w-full sm:w-auto">
                    <button className="px-8 py-2 rounded-full bg-white/20 hover:bg-white/30 text-white font-medium text-sm transition-all duration-300 backdrop-blur-sm border border-white/10 cursor-pointer">
                        Apply
                    </button>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default OurProduct;