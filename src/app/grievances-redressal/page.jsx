'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, AlertTriangle } from 'lucide-react';
import GrievanceRedressalGraphic from '@/components/GrievanceRedressalGraphic';

const GrievancesRedressal = () => {
    return (
        <main className="w-full min-h-screen bg-slate-50 pt-32 pb-20">
            <div className="container mx-auto px-6 md:px-12">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-5xl font-bold text-[#6D3078] mb-4">
                        Grievance Redressal Policy
                    </h1>
                    <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        We are committed to providing the best service. If you have any concerns or complaints, please follow our redressal mechanism.
                    </p>
                </div>

                {/* Visual Graphic Section */}
                <div className="mb-20 bg-white p-6 md:p-12 rounded-3xl shadow-xl shadow-purple-900/5">
                    <h2 className="text-2xl font-bold text-[#F47E4D] mb-8 text-center uppercase tracking-widest">
                        Redressal Mechanism Flow
                    </h2>
                    <GrievanceRedressalGraphic />
                </div>

                {/* Detailed Contact Information (Grid) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                    
                    {/* Level 1 Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-l-[#F47E4D]"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 bg-red-50 text-[#F47E4D] rounded-full text-xs font-bold uppercase">First Level</span>
                            <span className="text-slate-400 text-sm flex items-center gap-1"><Clock size={14}/> 15 Days</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#6D3078] mb-1">Grievance Redressal Officer</h3>
                        <p className="text-lg font-semibold text-slate-800 mb-4">Mr. Chetan Gupta</p>
                        
                        <div className="space-y-3 text-sm text-slate-600">
                             <div className="flex items-start gap-3">
                                <MapPin className="shrink-0 text-[#F47E4D] mt-1" size={18} />
                                <p>G1-2 Adarsh Plaza Building, Khasa Kothi Circle, Jaipur-302001</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="shrink-0 text-[#F47E4D]" size={18} />
                                <a href="mailto:customercare@skfin.in" className="hover:text-[#6D3078]">customercare@skfin.in</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="shrink-0 text-[#F47E4D]" size={18} />
                                <p>0141-4161551 | Toll Free: 1800-103-9039</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Level 2 Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-l-[#6D3078]"
                    >
                         <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 bg-purple-50 text-[#6D3078] rounded-full text-xs font-bold uppercase">Second Level</span>
                            <span className="text-slate-400 text-sm flex items-center gap-1"><Clock size={14}/> 30 Days</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#6D3078] mb-1">Principal Nodal Officer</h3>
                        <p className="text-lg font-semibold text-slate-800 mb-4">Ms. Anubha Khandelwal</p>
                        
                        <div className="space-y-3 text-sm text-slate-600">
                             <div className="flex items-start gap-3">
                                <MapPin className="shrink-0 text-[#6D3078] mt-1" size={18} />
                                <p>M-8, Adarsh Plaza, Khasa Kothi Circle, Jaipur-302001</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="shrink-0 text-[#6D3078]" size={18} />
                                <a href="mailto:pno@skfin.in" className="hover:text-[#6D3078]">pno@skfin.in</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="shrink-0 text-[#6D3078]" size={18} />
                                <p>0141-4161552 | Toll Free: 1800-103-9039</p>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Level 3: RBI Appeal */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="bg-[#1E293B] text-white p-8 md:p-12 rounded-3xl relative overflow-hidden mb-20"
                >
                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
                        <div className="max-w-xl">
                            <div className="flex items-center gap-3 mb-4">
                                <AlertTriangle className="text-[#F47E4D]" />
                                <span className="text-[#F47E4D] font-bold tracking-widest uppercase text-sm">Level 3 • Final Appeal</span>
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Reserve Bank of India (Ombudsman)</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                If the dispute/complaint is not redressed within one month, you may appeal to the Officer-in-Charge of the Regional Office of DNBS of RBI.
                            </p>
                            <div className="space-y-2 text-sm text-slate-300">
                                <p><strong>Address:</strong> General Manager, Centralised Receipt and Processing Centre, RBI, 4th Floor, Sector 17, Chandigarh - 160017</p>
                                <p><strong>Toll Free:</strong> 14448 (9:30 am to 5:15 pm)</p>
                            </div>
                        </div>
                        
                        <div className="shrink-0">
                            <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-[#F47E4D] hover:bg-[#D96333] text-white rounded-full font-bold transition-all shadow-lg shadow-orange-900/50">
                                Lodge Complaint on RBI CMS
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Additional Policy Info */}
                 <div className="prose prose-slate max-w-4xl mx-auto text-slate-600">
                    <h3 className="text-[#6D3078]">Complaints against Outsourced Vendors</h3>
                    <p>
                        Any complaint forwarded to the Company from an outsourced vendor or lodged by the customer regarding an outsourced vendor shall be handled in accordance with the terms of this policy document.
                    </p>
                </div>

            </div>
        </main>
    );
};

export default GrievancesRedressal;