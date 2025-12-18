'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MaitriiAbout = () => {
    return (
        <section className="w-full min-h-[500px] bg-[#F8FAFC] flex items-center justify-center overflow-hidden relative">
            <div className="container mx-auto px-6 md:px-12 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* --- Left Side: Text Content --- */}
                <motion.div
                    className="flex flex-col gap-4 max-w-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#F47E4D]">
                        About Maitrii
                    </h2>
                    <p className="text-lg text-[#6D3078] leading-relaxed font-medium">
                  In Sanskrit, "MAITRII" evokes friendship, goodwill, and kindness—timeless values that extend to prosperity and unwavering support. For MAITRII Loans, it symbolizes more than emotional bonds: it's the financial empowerment that unlocks opportunities, strengthens relationships, and drives real progress.
                    </p>


                    <p className="text-lg text-[#6D3078] leading-relaxed font-medium">
                   As your trusted NBFC partner, we uplift customers with quick, reliable loans that blend practical funding with personal support—helping you build a brighter, more prosperous future.

                    </p>
                    {/* <div className="mt-4 flex gap-4">
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-[#6D3078]">10k+</span>
                            <span className="text-sm text-slate-500">Happy Customers</span>
                        </div>
                        <div className="w-px h-12 bg-slate-300"></div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-[#F47E4D]">₹50Cr+</span>
                            <span className="text-sm text-slate-500">Disbursed</span>
                        </div>
                    </div> */}
                </motion.div>

                {/* --- Right Side: Loan Company Illustration --- */}
                <motion.div
                    className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <svg
                        viewBox="0 0 600 500"
                        className="w-full h-full drop-shadow-lg"
                        preserveAspectRatio="xMidYMid meet"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* --- Background Elements --- */}
                        <circle cx="300" cy="250" r="180" fill="white" opacity="0.5" />
                        <circle cx="300" cy="250" r="140" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="8 8" />

                        {/* --- Financial Growth Graph (The Bar Chart) --- */}
                        <g transform="translate(140, 100)">
                            {/* Bar 1 */}
                            <rect x="0" y="150" width="40" height="100" rx="4" fill="#6D3078" opacity="0.3" />
                            {/* Bar 2 */}
                            <rect x="60" y="100" width="40" height="150" rx="4" fill="#6D3078" opacity="0.5" />
                            {/* Bar 3 */}
                            <rect x="120" y="50" width="40" height="200" rx="4" fill="#6D3078" opacity="0.8" />
                            {/* Bar 4 (Highest) */}
                            <rect x="180" y="0" width="40" height="250" rx="4" fill="#6D3078" />

                            {/* Rising Arrow Line */}
                            <path d="M 20 140 L 80 90 L 140 40 L 200 -10" stroke="#F47E4D" strokeWidth="6" strokeLinecap="round" />
                            <path d="M 190 -10 L 200 -10 L 200 10" stroke="#F47E4D" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                        </g>

                        {/* --- Trust Shield Icon (Bottom Right) --- */}
                        <g transform="translate(380, 280)">
                            <path d="M 0 0 L 80 0 L 80 50 C 80 80 40 100 40 100 C 40 100 0 80 0 50 Z" fill="white" stroke="#F47E4D" strokeWidth="4" />
                            {/* Checkmark inside Shield */}
                            <path d="M 25 45 L 35 55 L 55 35" stroke="#6D3078" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                        </g>

                        {/* --- Handshake / Partnership (Abstract Bottom Left) --- */}
                        <g transform="translate(100, 320)">
                            <circle cx="50" cy="50" r="50" fill="white" filter="url(#shadow)" />
                            {/* Abstract Hands */}
                            <path d="M 25 50 C 25 50, 40 40, 50 50 C 60 60, 75 50, 75 50" stroke="#6D3078" strokeWidth="4" strokeLinecap="round" />
                            <path d="M 25 60 C 25 60, 40 50, 50 60 C 60 70, 75 60, 75 60" stroke="#F47E4D" strokeWidth="4" strokeLinecap="round" />
                            {/* Connection Dots */}
                            <circle cx="25" cy="50" r="4" fill="#6D3078" />
                            <circle cx="75" cy="50" r="4" fill="#6D3078" />
                            <circle cx="25" cy="60" r="4" fill="#F47E4D" />
                            <circle cx="75" cy="60" r="4" fill="#F47E4D" />
                        </g>

                        {/* --- Floating Coins (Prosperity) --- */}
                        <g transform="translate(420, 100)">
                            <circle cx="0" cy="0" r="25" fill="#FFD700" />
                            <text x="0" y="8" textAnchor="middle" fill="#B45309" fontSize="24" fontWeight="bold">₹</text>
                        </g>
                        <g transform="translate(460, 60)">
                            <circle cx="0" cy="0" r="15" fill="#F47E4D" opacity="0.6" />
                        </g>

                        {/* Definitions for Shadow */}
                        <defs>
                            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#64748b" floodOpacity="0.15" />
                            </filter>
                        </defs>
                    </svg>
                </motion.div>
            </div>

            {/* Optional: Bottom fade/curve overlay if needed */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        </section>
    );
};

export default MaitriiAbout;