'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Image from 'next/image';

const VehicleLoanInfo = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Function to toggle accordion
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Data for the Accordion (Questions & Answers - Vehicle Loan Specific)
    const faqData = [
        {
            question: "What is a Vehicle Loan?",
            answer: "A Vehicle Loan from Maitrii Loans brings you one step closer to your dream car or the commercial vehicle needed for your business. We provide financing for both new and used vehicles with attractive interest rates and up to 100% funding on the on-road price for select models."
        },
        {
            question: "What is the repayment tenure?",
            answer: "We offer highly flexible repayment tenures ranging from 12 months to 84 months (7 years). You can choose a tenure that suits your monthly budget and repayment capacity."
        },
        {
            question: "Do I need to provide collateral?",
            answer: "Generally, the vehicle you purchase acts as the security (hypothecation) for the loan. In most cases, no additional collateral or guarantor is required, making the process smooth and hassle-free."
        },
        {
            question: "Who can apply for a Vehicle Loan?",
            answer: "Salaried individuals, self-employed professionals, proprietors, and partnership firms with a stable income source can apply. Detailed eligibility depends on factors like income, age, and employment stability."
        }
    ];

    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* --- Left Side: Image (Updated for Vehicle Loan Theme) --- */}
                    <motion.div
                        className="relative w-full h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Image representing Car/Driving/Journey */}
                        <Image
                            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Vehicle Loan - Driving Car"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                        {/* Overlay effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#6D3078]/40 to-transparent"></div>
                    </motion.div>

                    {/* --- Right Side: Content & Accordion --- */}
                    <motion.div
                        className="flex flex-col gap-6"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Header Section */}
                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-widest text-[#6D3078] mb-2">
                                Drive Your Dreams
                            </h4>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#F47E4D] mb-6">
                                VEHICLE LOAN
                            </h2>
                            <p className="text-[#6D3078]/90 text-lg leading-relaxed mb-4 font-medium italic">
                                &quot;Stop dreaming and start driving. Whether it&apos;s for your family&apos;s comfort or your business&apos;s logistics, we fuel your journey forward.&quot;
                            </p>

                            {/* Decorative Line */}
                            <div className="w-20 h-1 bg-[#F47E4D] rounded-full mb-6"></div>

                            <p className="text-slate-600 leading-relaxed mb-8">
                                Maitrii Loans offers comprehensive vehicle financing solutions. From hatchbacks to SUVs and commercial trucks, get on the road faster with our quick processing and minimal documentation.
                            </p>
                        </div>

                        {/* Accordion Section */}
                        <div className="w-full border-t border-slate-200">
                            {faqData.map((item, index) => (
                                <div key={index} className="border-b border-slate-200">
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full py-5 flex items-center justify-between group text-left focus:outline-none"
                                    >
                                        <span className={`text-lg font-bold transition-colors duration-300 pr-4 ${activeIndex === index ? 'text-[#F47E4D]' : 'text-[#6D3078] group-hover:text-[#F47E4D]'}`}>
                                            {item.question}
                                        </span>
                                        <span className={`p-1 rounded-full border shrink-0 transition-all duration-300 ${activeIndex === index ? 'border-[#F47E4D] bg-[#F47E4D] text-white' : 'border-slate-300 text-slate-400 group-hover:border-[#F47E4D] group-hover:text-[#F47E4D]'}`}>
                                            {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                                        </span>
                                    </button>

                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pb-6 text-slate-600 leading-relaxed text-sm md:text-base">
                                                    {item.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>

                        {/* Optional CTA */}


                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default VehicleLoanInfo;