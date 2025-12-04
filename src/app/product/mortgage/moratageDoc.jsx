'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, MapPin, Banknote, Briefcase, Calculator, FileCheck, GraduationCap, FileText, Calendar, Home, FileSpreadsheet } from 'lucide-react';
import { useRouter } from 'next/navigation';

const DocumentsRequired = () => {

    // Simplified Animation Variants (Subtle fade-in)
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

    // Document Data (Same as before)
    const documents = [
        {
            title: "Identity proof",
            icon: <UserCheck className="w-6 h-6" />
        },
        {
            title: "Address proof",
            icon: <MapPin className="w-6 h-6" />
        },
        {
            title: "Income proof",
            icon: <Banknote className="w-6 h-6" />
        },
        {
            title: "Proof of educational qualifications (where applicable)",
            icon: <GraduationCap className="w-6 h-6" />
        },
        {
            title: "Income tax returns, Balance Sheet and Profit and Loss Account Statement for past 2 years.",
            icon: <FileSpreadsheet className="w-6 h-6" />
        },
        {
            title: "Age proof",
            icon: <Calendar className="w-6 h-6" />
        },
        {
            title: "Employment details",
            icon: <Briefcase className="w-6 h-6" />
        },
        {
            title: "Bank statements",
            icon: <FileText className="w-6 h-6" />
        },
        {
            title: "Details about the property that is to be mortgaged",
            icon: <Home className="w-6 h-6" />
        },
        {
            title: "Bank Statements for the past 6 months",
            icon: <FileText className="w-6 h-6" />
        }
    ];
    const router = useRouter();
    return (
        <section className="w-full py-12 bg-white">
            <div className="container mx-auto px-4 md:px-12">

                {/* --- Header Section (Simplified) --- */}
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
                        In order for us to process your application, we require a number of documents. Some documents must be mandatorily provided as per the Reserve Bank of India (RBI) guidelines. The Mortgage Loan documents required are as follows:
                    </p>
                </motion.div>

                {/* --- Documents List (Clean Grid) --- */}
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
                            // Clean, minimal card style without heavy shadows
                            className="flex items-start gap-4 p-5 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#F47E4D] transition-colors duration-200"
                        >
                            {/* Simple Icon without background box */}
                            <div className="shrink-0 mt-0.5 text-[#F47E4D]">
                                {doc.icon}
                            </div>

                            {/* Text Content */}
                            <div>
                                <h3 className="text-base font-semibold text-[#6D3078] leading-tight">
                                    {doc.title}
                                </h3>
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

                    <button onClick={() => router.push('/emi-calculator')} className="flex items-center gap-2 px-6 py-2.5 bg-[#6D3078] text-white text-sm font-semibold rounded-md hover:bg-[#5a2565] transition-colors">
                        <Calculator size={18} />
                        EMI Calculator
                    </button>
                </motion.div>

            </div>
        </section>
    );
};

export default DocumentsRequired;