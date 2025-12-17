'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, AlertTriangle, Send, User, MessageSquare } from 'lucide-react';
import GrievanceHero from './GrievanceHero';

const GrievancesRedressal = () => {
    return (
        <main className="w-full min-h-screen bg-slate-50 pb-20">
            <GrievanceHero />
            <div className="container mx-auto px-4 md:px-12 -mt-10 relative z-20">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* LEFT COLUMN: Steps 1 & 2 (Compact Timeline) */}
                    <div className="lg:col-span-8 space-y-8">
                        
                        {/* STEP 1: Registration */}
                        <div className="relative">
                            {/* Vertical Line Connector down to Step 2 */}
                            <div className="hidden lg:block absolute left-8 top-10 bottom-0 w-0.5 bg-slate-200 -z-10"></div>

                            <div className="bg-white p-5 rounded-2xl shadow-sm border-l-8 border-[#6D3078] mb-6">
                                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                                    <span className="bg-[#6D3078] text-white text-xs font-bold px-2 py-1 rounded-full">STEP 1</span>
                                    Registration
                                </h2>
                                <p className="text-slate-500 text-xs mt-1 ml-12">Choose any channel to register complaint</p>
                            </div>

                            <div className="grid grid-cols-2 gap-3 pl-0 lg:pl-16">
                                {/* Node 1 */}
                                <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 hover:border-purple-100 transition-all flex flex-col sm:flex-row gap-2 items-center text-center sm:text-left">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-50 rounded-full flex items-center justify-center text-[#6D3078] shrink-0">
                                        <MapPin size={16} />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="font-bold text-slate-800 text-xs sm:text-sm truncate">Branch</h3>
                                        <p className="text-slate-500 text-[10px] sm:text-xs truncate">Visit Manager</p>
                                    </div>
                                </div>
                                {/* Node 2 */}
                                <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 hover:border-purple-100 transition-all flex flex-col sm:flex-row gap-2 items-center text-center sm:text-left">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-50 rounded-full flex items-center justify-center text-[#6D3078] shrink-0">
                                        <Phone size={16} />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="font-bold text-slate-800 text-xs sm:text-sm truncate">Call Us</h3>
                                        <p className="text-slate-500 text-[10px] sm:text-xs font-bold text-[#6D3078] truncate">8946 800600</p>
                                    </div>
                                </div>
                                {/* Node 3 */}
                                <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 hover:border-purple-100 transition-all flex gap-3 items-center col-span-2">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-50 rounded-full flex items-center justify-center text-[#6D3078] shrink-0">
                                        <Mail size={16} />
                                    </div>
                                    <div className="flex justify-between w-full items-center gap-2">
                                        <div>
                                            <h3 className="font-bold text-slate-800 text-xs sm:text-sm">Write Us</h3>
                                            <p className="text-slate-500 text-[10px] sm:text-xs truncate">info@maitrii.in</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="h-8 w-px bg-slate-100"></div>
                                            <div>
                                                 <h3 className="font-bold text-slate-800 text-xs sm:text-sm">Web</h3>
                                                 <a href="https://www.skfin.in/contactus.php" target="_blank" className="text-[#6D3078] text-[10px] sm:text-xs underline font-bold whitespace-nowrap">Portal ↗</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* STEP 2: Escalation */}
                        <div className="relative pt-8">
                             {/* Connector from Step 1 */}
                             <div className="hidden lg:block absolute left-8 -top-4 h-12 w-0.5 bg-slate-200 -z-10"></div>
                             {/* Internal Timeline */}
                             <div className="absolute left-8 lg:left-[34px] top-12 bottom-12 w-0.5 bg-gradient-to-b from-[#F47E4D] to-slate-300 -z-10 opacity-30"></div>

                            <div className="bg-white p-5 rounded-2xl shadow-sm border-l-8 border-[#F47E4D] mb-8 relative z-10">
                                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                                    <span className="bg-[#F47E4D] text-white text-xs font-bold px-2 py-1 rounded-full">STEP 2</span>
                                    Escalation
                                </h2>
                                <p className="text-slate-500 text-xs mt-1 ml-12">Hierarchy for unresolved issues</p>
                            </div>

                            <div className="pl-4 lg:pl-12 space-y-6">
                                {/* Level 1 */}
                                <div className="relative pl-8">
                                    <div className="absolute left-0 top-4 w-3 h-3 bg-[#6D3078] rounded-full ring-4 ring-slate-50"></div>
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-purple-50">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="font-bold text-slate-800 text-sm">Grievance Redressal Officer</h3>
                                                <p className="text-sm font-bold text-[#6D3078]">Mr. Chetan Gupta</p>
                                            </div>
                                            <span className="bg-purple-100 text-[#6D3078] text-[10px] font-bold px-2 py-0.5 rounded">L1</span>
                                        </div>
                                        <div className="text-xs text-slate-500 flex gap-4">
                                            <span>0141-4161551</span>
                                            <span>customercare@skfin.in</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Timer */}
                                <div className="pl-8 flex items-center gap-2">
                                     <Clock size={14} className="text-[#F47E4D]"/> 
                                     <span className="text-xs font-medium text-[#F47E4D]">If unresolved in 15 days</span>
                                     <div className="h-px bg-[#F47E4D]/20 flex-1"></div>
                                </div>

                                {/* Level 2 */}
                                <div className="relative pl-8">
                                    <div className="absolute left-0 top-4 w-3 h-3 bg-[#F47E4D] rounded-full ring-4 ring-slate-50"></div>
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-orange-50">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="font-bold text-slate-800 text-sm">Principal Nodal Officer</h3>
                                                <p className="text-sm font-bold text-[#6D3078]">Ms. Anubha Khandelwal</p>
                                            </div>
                                            <span className="bg-orange-100 text-[#F47E4D] text-[10px] font-bold px-2 py-0.5 rounded">L2</span>
                                        </div>
                                        <div className="text-xs text-slate-500 flex gap-4">
                                            <span>0141-4161552</span>
                                            <span>pno@skfin.in</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Timer */}
                                <div className="pl-8 flex items-center gap-2">
                                     <Clock size={14} className="text-slate-400"/> 
                                     <span className="text-xs font-medium text-slate-500">If unresolved in 1 Month</span>
                                     <div className="h-px bg-slate-200 flex-1"></div>
                                </div>

                                {/* Level 3 (RBI) - Full Details */}
                                <div className="relative pl-8">
                                    <div className="absolute left-0 top-4 w-3 h-3 bg-slate-700 rounded-full ring-4 ring-slate-50"></div>
                                    <div className="bg-white p-5 rounded-xl shadow-sm border-2 border-slate-100">
                                        <div className="flex justify-between items-start mb-3">
                                            <div>
                                                <h3 className="font-bold text-sm text-[#F47E4D]">Appeal to RBI</h3>
                                                <p className="text-xs text-slate-700 font-bold mt-1">General Manager</p>
                                                <p className="text-[10px] text-slate-500 leading-tight">Centralised Receipt and<br/>Processing Centre</p>
                                            </div>
                                            <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded border border-slate-200">Final</span>
                                        </div>
                                        
                                        <div className="space-y-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                            {/* Address */}
                                            <div className="flex gap-2.5 items-start">
                                                <MapPin size={14} className="text-[#6D3078] shrink-0 mt-0.5"/>
                                                <p className="text-[10px] text-slate-600 leading-relaxed">
                                                    <strong>Reserve Bank of India</strong><br/>
                                                    4th Floor, Sector 17,<br/>
                                                    Chandigarh - 160017
                                                </p>
                                            </div>

                                            {/* Phone */}
                                            <div className="flex gap-2.5 items-start">
                                                <Phone size={14} className="text-[#6D3078] shrink-0 mt-0.5"/>
                                                <div>
                                                     <p className="text-[10px] text-slate-600 font-bold">Toll Free: 14448</p>
                                                     <p className="text-[9px] text-slate-400">(9:30 am to 5:15 pm)</p>
                                                </div>
                                            </div>

                                            {/* Portal Link */}
                                             <div className="flex gap-2.5 items-center pt-2 border-t border-slate-200">
                                                <div className="w-3.5 h-3.5 flex items-center justify-center">
                                                    <div className="w-1.5 h-1.5 bg-[#F47E4D] rounded-full"></div>
                                                </div>
                                                <a href="https://cms.rbi.org.in" target="_blank" className="text-[#F47E4D] text-[10px] font-bold hover:underline flex items-center gap-1">
                                                    Lodge Complaint on CMS Portal ↗
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN: Complaint Form (Sticky) */}
                    <div className="lg:col-span-4 relative">
                        <div className="sticky top-8">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100"
                            >
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-[#F47E4D]">Quick Complaint</h3>
                                    <p className="text-slate-400 text-xs mt-1">Submit your grievance here.</p>
                                </div>

                                <form className="space-y-4">
                                    <div className="relative">
                                        <User className="absolute left-3 top-3 text-slate-400 w-4 h-4" />
                                        <input type="text" placeholder="Your Name" className="w-full pl-9 pr-3 py-2.5 bg-slate-50 rounded-lg text-sm border border-slate-200 focus:border-[#F47E4D] outline-none" />
                                    </div>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-3 text-slate-400 w-4 h-4" />
                                        <input type="tel" placeholder="Mobile Number" className="w-full pl-9 pr-3 py-2.5 bg-slate-50 rounded-lg text-sm border border-slate-200 focus:border-[#F47E4D] outline-none" />
                                    </div>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-3 top-3 text-slate-400 w-4 h-4" />
                                        <textarea rows="3" placeholder="Describe your issue..." className="w-full pl-9 pr-3 py-2.5 bg-slate-50 rounded-lg text-sm border border-slate-200 focus:border-[#F47E4D] outline-none resize-none"></textarea>
                                    </div>
                                    <button className="w-full bg-[#6D3078] hover:bg-[#5a2565] text-white font-bold py-3 rounded-xl shadow-lg shadow-purple-900/10 transition-all flex items-center justify-center gap-2 text-sm">
                                        <span>Submit Complaint</span>
                                        <Send size={16} />
                                    </button>
                                </form>
                                
                                <div className="mt-4 pt-4 border-t border-slate-100 text-[10px] text-slate-400 text-center">
                                    By submitting, you agree to our privacy policy.
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default GrievancesRedressal;