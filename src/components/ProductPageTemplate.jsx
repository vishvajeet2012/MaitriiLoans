'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, FileCheck, Calculator } from 'lucide-react';

const ProductPageTemplate = ({ hero, info, documents, whyChooseUs }) => {
    // --- Info Section State ---
    const [activeIndex, setActiveIndex] = useState(0);
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // --- Documents Section Animation Variants ---
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    };

    const handleNavigation = () => {
        window.location.href = '/emi-calculator';
    };

    return (
        <div className="w-full">
            {/* ==================== HERO SECTION ==================== */}
            <section className="w-full min-h-[500px] bg-[#F8FAFC] flex items-center justify-center overflow-hidden relative">
                {/* Subtle background shapes */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-5%] w-[300px] h-[300px] rounded-full bg-[#6D3078] opacity-[0.03] blur-3xl"></div>
                    <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[#F47E4D] opacity-[0.04] blur-3xl"></div>
                </div>

                <div className="container mx-auto px-6 md:px-12 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    {/* --- Left Side: Text --- */}
                    <motion.div
                        className="flex flex-col gap-4 max-w-lg"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#F47E4D]">
                            {hero.title}
                        </h2>
                        <p className="text-lg text-[#6D3078] leading-relaxed font-medium">
                            {hero.description}
                        </p>
                        <div className="mt-6">
                            <button className="px-8 py-3 bg-[#F47E4D] text-white rounded-full font-semibold hover:bg-[#e06d3d] transition-all shadow-lg shadow-orange-200">
                                Apply Now
                            </button>
                        </div>
                    </motion.div>

                    {/* --- Right Side: Graphic --- */}
                    <motion.div
                        className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center"
                        initial={{ opacity: 0, x: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {hero.Graphic ? <hero.Graphic /> : null}
                    </motion.div>
                </div>
            </section>

            {/* ==================== INFO SECTION ==================== */}
            <section className="w-full py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        {/* --- Left Side: Image --- */}
                        <motion.div
                            className="relative w-full h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <img
                                src={info.imageSrc}
                                alt={info.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#6D3078]/30 to-transparent"></div>
                        </motion.div>

                        {/* --- Right Side: Content & Accordion --- */}
                        <motion.div
                            className="flex flex-col gap-6"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div>
                                <h4 className="text-sm font-bold uppercase tracking-widest text-[#6D3078] mb-2">
                                    {info.subtitle}
                                </h4>
                                <h2 className="text-3xl md:text-4xl font-bold text-[#F47E4D] mb-6">
                                    {info.title}
                                </h2>
                                <p className="text-[#6D3078]/80 text-lg leading-relaxed mb-4">
                                    {info.intro}
                                </p>
                                <div className="w-20 h-1 bg-[#F47E4D] rounded-full mb-6"></div>
                                <p className="text-slate-600 leading-relaxed mb-8">
                                    {info.description}
                                </p>
                            </div>

                            <div className="w-full border-t border-slate-200">
                                {info.faqs.map((item, index) => (
                                    <div key={index} className="border-b border-slate-200">
                                        <button
                                            onClick={() => toggleAccordion(index)}
                                            className="w-full py-5 flex items-center justify-between group text-left focus:outline-none"
                                        >
                                            <span className={`text-lg font-bold transition-colors duration-300 ${activeIndex === index ? 'text-[#F47E4D]' : 'text-[#6D3078] group-hover:text-[#F47E4D]'}`}>
                                                {item.question}
                                            </span>
                                            <span className={`p-1 rounded-full border transition-all duration-300 ${activeIndex === index ? 'border-[#F47E4D] bg-[#F47E4D] text-white' : 'border-slate-300 text-slate-400 group-hover:border-[#F47E4D] group-hover:text-[#F47E4D]'}`}>
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
                                                    <div className="pb-6 text-slate-600 leading-relaxed">
                                                        {item.answer}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ==================== WHY CHOOSE US (Optional) ==================== */}
            {whyChooseUs && (
                <section className="w-full py-16 bg-[#F8FAFC] text-center">
                  
                   {whyChooseUs}
                </section>
            )}

             {/* ==================== DOCUMENTS REQUIRED SECTION where ecyer page document where page =========== */}
             <section className="w-full py-12 bg-white">
                <div className="container mx-auto px-4 md:px-12">
                    <motion.div
                        className="mb-10"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <FileCheck className="w-7 h-7 text-[#6D3078]" />
                            <h2 className="text-2xl md:text-3xl font-bold text-[#F47E4D] uppercase tracking-wide">
                                Documents Required
                            </h2>
                        </div>
                        <div className="w-full h-px bg-slate-200 mb-6"></div>
                        <p className="text-base text-slate-600 max-w-4xl leading-relaxed">
                             Please provide a self-attested copy of any one document from each category, from the list given below:
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-10"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {documents.map((doc, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex items-start gap-4 p-5 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#F47E4D] transition-colors duration-200"
                            >
                                <div className="shrink-0 mt-0.5 text-[#F47E4D]">
                                    {doc.icon}
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold text-[#6D3078] mb-1">
                                        {doc.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-snug">
                                        {doc.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-100"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <p className="text-xs text-slate-400 italic">
                            * Requirement of documents might vary from case to case.
                        </p>
                        <button
                            onClick={handleNavigation}
                            className="flex items-center gap-2 px-6 py-2.5 bg-[#6D3078] text-white text-sm font-semibold rounded-md hover:bg-[#5a2565] transition-colors shadow-sm"
                        >
                            <Calculator size={18} />
                            EMI Calculator
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ProductPageTemplate;
