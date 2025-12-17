'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, AlertTriangle } from 'lucide-react';
import GrievanceRedressalGraphic from '@/components/GrievanceRedressalGraphic';

import GrievanceHero from './GrievanceHero';

const GrievancesRedressal = () => {
    return (
        <main className="w-full min-h-screen bg-slate-50 pb-20">
            <GrievanceHero />
                <div className="container mx-auto px-4 md:px-12 -mt-10 relative z-20">
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start relative">
                        
                        {/* Connecting Arrow for Desktop (Step 1 -> Step 2) */}
                        <div className="hidden lg:block absolute left-1/2 top-40 -translate-x-1/2 z-10 text-slate-300">
                             <div className="flex flex-col items-center gap-2">
                                <span className="text-xs font-bold uppercase tracking-widest text-[#F47E4D] bg-white px-2 py-1 rounded shadow-sm">Next Step</span>
                                <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 10H38M38 10L30 2M38 10L30 18" stroke="#F47E4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                             </div>
                        </div>

                        {/* STEP 1: Registration Channels (Parallel Nodes) */}
                        <div className="space-y-8 relative">
                            {/* Visual Line for Step 1 items (optional, implies group) */}
                            <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-slate-200 -z-10"></div>

                            {/* Step 1 Header */}
                            <div className="bg-white p-6 rounded-2xl shadow-md border-l-8 border-[#6D3078] relative">
                                <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                                    <span className="bg-[#6D3078] text-white text-sm font-bold px-3 py-1 rounded-full">STEP 1</span>
                                    Registration
                                </h2>
                                <p className="text-slate-500 text-sm mt-2 ml-14">Choose any channel to register complaint</p>
                            </div>

                             {/* Node 1: Branch */}
                             <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-slate-50 hover:border-purple-100 hover:shadow-md transition-all flex gap-4 items-center relative z-10">
                                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-[#6D3078] shrink-0 border border-purple-100">
                                    <MapPin size={22} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800 text-lg">Branch Visit</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Contact <strong>Branch Manager</strong> directly.
                                    </p>
                                </div>
                            </div>

                            {/* Node 2: Customer Care */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-slate-50 hover:border-purple-100 hover:shadow-md transition-all flex gap-4 items-center relative z-10">
                                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-[#6D3078] shrink-0 border border-purple-100">
                                    <Phone size={22} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800 text-lg">Customer Care</h3>
                                    <a href="tel:8946800600" className="block text-[#6D3078] font-bold text-lg hover:underline">+91 8946 800600</a>
                                    <p className="text-xs text-slate-400">Centralized Help Desk</p>
                                </div>
                            </div>

                            {/* Node 3: Email/Web */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-slate-50 hover:border-purple-100 hover:shadow-md transition-all flex gap-4 items-center relative z-10">
                                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-[#6D3078] shrink-0 border border-purple-100">
                                    <Mail size={22} />
                                </div>
                                <div className="w-full">
                                    <h3 className="font-bold text-slate-800 text-lg">Write to Us</h3>
                                    <div className="flex flex-col sm:flex-row sm:gap-4 mt-1 text-sm">
                                        <a href="mailto:info@maitrii.in" className="text-[#6D3078] font-medium hover:underline">info@maitrii.in</a>
                                        <span className="hidden sm:inline text-slate-300">|</span>
                                        <a href="https://www.skfin.in/contactus.php" target="_blank" className="text-[#6D3078] font-medium hover:underline">Web Portal</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* STEP 2: Escalation Mechanism (Vertical Flow) */}
                        <div className="space-y-0 relative">
                             {/* Central Flow Line */}
                             <div className="absolute left-8 lg:left-10 top-20 bottom-20 w-1 bg-gradient-to-b from-[#6D3078] via-[#F47E4D] to-slate-400 -z-10 opacity-30"></div>

                             {/* Step 2 Header */}
                             <div className="bg-white p-6 rounded-2xl shadow-md border-l-8 border-[#F47E4D] mb-12 relative z-10">
                                <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                                    <span className="bg-[#F47E4D] text-white text-sm font-bold px-3 py-1 rounded-full">STEP 2</span>
                                    Escalation
                                </h2>
                                <p className="text-slate-500 text-sm mt-2 ml-14">Follow this hierarchy for unresolved issues</p>
                            </div>

                            {/* Level 1 Node */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="pl-0 pb-12"
                            >
                                <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-[#6D3078]/10 relative ml-6">
                                    {/* Connector Dot */}
                                    <div className="absolute top-8 -left-[31px] w-4 h-4 bg-[#6D3078] rounded-full border-4 border-slate-50"></div>
                                    
                                    <span className="absolute top-0 right-0 bg-[#6D3078] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-lg tracking-widest uppercase">Level 1</span>
                                    
                                    <h3 className="font-bold text-slate-800 text-lg mb-1">Grievance Redressal Officer</h3>
                                    <p className="text-lg font-bold text-[#6D3078] mb-4">Mr. Chetan Gupta</p>
                                    
                                    <div className="flex flex-wrap gap-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl">
                                        <span className="flex items-center gap-1"><Phone size={14} className="text-[#6D3078]"/> 0141-4161551</span>
                                        <span className="flex items-center gap-1"><Mail size={14} className="text-[#6D3078]"/> customercare@skfin.in</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* CONDITION 1: Time Trigger */}
                             <div className="flex items-center gap-4 ml-2 pb-12 -mt-6">
                                <div className="bg-[#FFF1F2] border border-[#F47E4D] text-[#F47E4D] px-4 py-2 rounded-lg text-sm font-bold shadow-sm whitespace-nowrap z-20 flex items-center gap-2">
                                    <Clock size={16} />
                                    <span>If not resolved in 15 Days</span>
                                </div>
                                <div className="h-px bg-[#F47E4D] flex-1 opacity-30"></div>
                             </div>

                            {/* Level 2 Node */}
                             <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="pl-0 pb-12 -mt-6"
                            >
                                <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-[#F47E4D]/10 relative ml-6">
                                     {/* Connector Dot */}
                                     <div className="absolute top-8 -left-[31px] w-4 h-4 bg-[#F47E4D] rounded-full border-4 border-slate-50"></div>

                                    <span className="absolute top-0 right-0 bg-[#F47E4D] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-lg tracking-widest uppercase">Level 2</span>

                                    <h3 className="font-bold text-slate-800 text-lg mb-1">Principal Nodal Officer</h3>
                                    <p className="text-lg font-bold text-[#6D3078] mb-4">Ms. Anubha Khandelwal</p>

                                    <div className="flex flex-wrap gap-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl">
                                        <span className="flex items-center gap-1"><Phone size={14} className="text-[#F47E4D]"/> 0141-4161552</span>
                                        <span className="flex items-center gap-1"><Mail size={14} className="text-[#F47E4D]"/> pno@skfin.in</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* CONDITION 2: Time Trigger */}
                             <div className="flex items-center gap-4 ml-2 pb-12 -mt-6">
                                <div className="bg-slate-100 border border-slate-300 text-slate-600 px-4 py-2 rounded-lg text-sm font-bold shadow-sm whitespace-nowrap z-20 flex items-center gap-2">
                                    <Clock size={16} />
                                    <span>If not resolved in 1 Month</span>
                                </div>
                                <div className="h-px bg-slate-400 flex-1 opacity-30"></div>
                             </div>

                            {/* Level 3 Node */}
                             <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="pl-0 -mt-6"
                            >
                                <div className="bg-[#1E293B] text-white p-6 rounded-2xl shadow-xl relative ml-6 border-l-4 border-slate-500">
                                     {/* Connector Dot */}
                                     <div className="absolute top-8 -left-[31px] w-4 h-4 bg-slate-600 rounded-full border-4 border-slate-50"></div>

                                    <span className="absolute top-0 right-0 bg-slate-600 text-slate-200 text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-lg tracking-widest uppercase">Final Level</span>

                                    <h3 className="font-bold text-lg mb-2 text-[#F47E4D]">Appeal to RBI</h3>
                                    <p className="text-xs text-slate-300 mb-4 block">Officer-in-Charge of DNBS of RBI</p>

                                    <div className="text-xs text-slate-300 space-y-2 bg-slate-800/50 p-3 rounded-xl border border-slate-700">
                                        <p>RBI, Sector 17, Chandigarh - 160017</p>
                                        <div className="flex justify-between items-center">
                                            <span>Toll Free: 14448</span>
                                            <a href="https://cms.rbi.org.in" className="text-[#F47E4D] font-bold hover:underline" target="_blank">Portal Link ↗</a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>
        </main>
        
    );
};

export default GrievancesRedressal;