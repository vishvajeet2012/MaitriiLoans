'use client';

import React from 'react';
import { motion } from 'framer-motion';
// import { useRouter } from 'next/navigation'; // Removing this to prevent build error
import { UserCheck, MapPin, Banknote, Briefcase, Calculator, FileCheck, Car, FileText, Camera } from 'lucide-react';

const VehicleLoanDocuments = () => {
    // const router = useRouter(); // Removing hook

    // Animation Variants
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

    // Document Data for Vehicle Loan
    const documents = [
        {
            title: "Identity Proof",
            desc: "PAN Card, Aadhaar Card, Passport, Voter ID, or Driving License.",
            icon: <UserCheck className="w-6 h-6" />
        },
        {
            title: "Address Proof",
            desc: "Electricity Bill, Ration Card, Passport, or Bank Statement.",
            icon: <MapPin className="w-6 h-6" />
        },
        {
            title: "Income Proof (Salaried)",
            desc: "Latest 3 months salary slips and Form 16.",
            icon: <Banknote className="w-6 h-6" />
        },
        {
            title: "Income Proof (Self-Employed)",
            desc: "Latest 2 years ITR with computation of income, P&L, and Balance Sheet.",
            icon: <Briefcase className="w-6 h-6" />
        },
        {
            title: "Bank Statements",
            desc: "Last 6 months bank statements showing salary credit or business transactions.",
            icon: <FileText className="w-6 h-6" />
        },
        {
            title: "Vehicle Documents (New Car)",
            desc: "Proforma Invoice (Quotation) from the dealer.",
            icon: <Car className="w-6 h-6" />
        },
        {
            title: "Vehicle Documents (Used/Refinance)",
            desc: "RC Copy, Insurance Copy, and Pollution Certificate.",
            icon: <Car className="w-6 h-6" />
        },
        {
            title: "Photographs",
            desc: "Recent passport-size photographs of the applicant and co-applicant.",
            icon: <Camera className="w-6 h-6" />
        }
    ];

    const handleNavigation = () => {
        // Standard JS navigation since Next.js router might not be available in preview
        window.location.href = '/emi-calculator';
    };

    return (
        <section className="w-full py-12 bg-white">
            <div className="container mx-auto px-4 md:px-12">

                {/* --- Header Section --- */}
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
                        To process your Vehicle Loan application smoothly, please provide self-attested copies of the following documents. The list may vary slightly based on the vehicle type (New vs. Used) and your employment type.
                    </p>
                </motion.div>

                {/* --- Documents List (Simple Grid) --- */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"
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

                {/* --- Footer Note & EMI Button --- */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-100"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <p className="text-xs text-slate-400 italic">
                        * Additional documents may be requested during credit assessment.
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

export default VehicleLoanDocuments;