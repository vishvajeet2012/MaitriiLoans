'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, MapPin, Banknote, Briefcase, Calculator, FileCheck, Car } from 'lucide-react';

const DocumentsRequired = () => {

    // Animation Variants (Simple Fade-in)
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

    // Document Data (As per your latest request)
    const documents = [
        {
            title: "Photo Identity Proof",
            desc: "Passport, PAN Card, Voter’s Identity Card, Driving License, Aadhaar Card.",
            icon: <UserCheck className="w-6 h-6" />
        },
        {
            title: "Address Proof",
            desc: "Ration Card, Passport, Driving License, Bank A/C Statement, Electricity/Telephone Bill, Aadhaar Card, Sale Deed/ Property Purchase Agreement (For Owned Properties).",
            icon: <MapPin className="w-6 h-6" />
        },
        {
            title: "Income Proof",
            desc: "For Salaried: Last 3-6 months’ bank statement showing salary credits, Latest Salary Slip. For Self-Employed: 2 years’ ITR, P&L and Balance Sheet, Last 6 Months’ Bank Statement.",
            icon: <Banknote className="w-6 h-6" />
        },
        {
            title: "Business Proof",
            desc: "Qualification Certificate/Certificate Of Practice (COP), Shop Act License/ MOA, AOA/ Sales Tax/ Vat Registration/ Partnership Deed.",
            icon: <Briefcase className="w-6 h-6" />
        },
        {
            title: "Vehicle Proof",
            desc: "Registration Certificate (RC), Vehicle Insurance Certificate, Pollution Under Control (PUC) Certificate, Road Tax Receipt, Chassis Number Imprint.",
            icon: <Car className="w-6 h-6" />
        }
    ];

    const handleNavigation = () => {
        window.location.href = '/emi-calculator';
    };

    return (
        <section className="w-full py-12 bg-white">
            <div className="container mx-auto px-4 md:px-12">

                {/* --- Header Section (Simple UI) --- */}
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
                    {/* Simple Line */}
                    <div className="w-full h-px bg-slate-200 mb-6"></div>

                    <p className="text-base text-slate-600 max-w-4xl leading-relaxed">
                        Maitrii Loan Pvt Ltd. has simplified the process of securing a Business Loan. Please provide a self-attested copy of any one document from each category, from the list given below:
                    </p>
                </motion.div>

                {/* --- Documents List (Simple Grid) --- */}
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
                            // Clean, minimal card style
                            className="flex items-start gap-4 p-5 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#F47E4D] transition-colors duration-200"
                        >
                            {/* Simple Icon */}
                            <div className="shrink-0 mt-0.5 text-[#F47E4D]">
                                {doc.icon}
                            </div>

                            {/* Text Content */}
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

                {/* --- Footer Note & Button --- */}
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
    );
};

export default DocumentsRequired;