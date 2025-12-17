'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Settings, Lightbulb } from 'lucide-react'; // Icons import karein

const WhyChooseUs = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const features = [
        {
            icon: <Leaf className="w-10 h-10 text-[#6D3078]" />,
            title: "Competitive Rates",
            description: "Affordable interest rates to help your business grow.",
        },
        {
            icon: <Settings className="w-10 h-10 text-[#6D3078]" />,
            title: "Flexible Terms",
            description: "Repayment schedules designed to fit your cash flow.",
        },
        {
            icon: <Lightbulb className="w-10 h-10 text-[#6D3078]" />,
            title: "Tailored Solutions",
            description: "Customized loan options to meet your specific business needs.",
        },
    ];

    return (
        <section className="w-full py-16 bg-[#F8FAFC]">
            <div className="container mx-auto px-6 md:px-12">
                {/* Section Header */}
                <motion.div
                    className="text-center max-w-2xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F47E4D] mb-4">
                        Why Choose Us
                    </h2>
                    <p className="text-lg text-[#6D3078] font-medium leading-relaxed">
                        Discover the advantages that make our financing solutions the ideal choice for your green journey.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            // Halka purple background card ke liye taaki theme match ho. 
                            // Aap chaho to 'bg-white shadow-sm' bhi use kar sakte ho.
                            className="bg-[#F3E8FF]/40 p-8 rounded-2xl flex flex-col items-start gap-4 hover:shadow-md transition-shadow duration-300 border border-transparent hover:border-[#6D3078]/10"
                        >
                            <div className="mb-2">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#F47E4D]">
                                {feature.title}
                            </h3>
                            <p className="text-[#6D3078] leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
