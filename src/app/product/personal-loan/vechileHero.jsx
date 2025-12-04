'use client';

import React from 'react';
import { motion } from 'framer-motion';

const VehicleLoanHero = () => {
    return (
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
                        Vehicle Loan
                    </h2>
                    <p className="text-lg text-[#6D3078] leading-relaxed font-medium">
                        Drive home your dream car today. Whether it&apos;s a new family car or a commercial vehicle for your business, we speed up your journey.
                    </p>
                    <div className="mt-6">
                        <button className="px-8 py-3 bg-[#F47E4D] text-white rounded-full font-semibold hover:bg-[#e06d3d] transition-all shadow-lg shadow-orange-200">
                            Apply Now
                        </button>
                    </div>
                </motion.div>

                {/* --- Right Side: Custom SVG for Vehicle Loan --- */}
                <motion.div
                    className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center"
                    initial={{ opacity: 0, x: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <svg
                        viewBox="0 0 600 500"
                        className="w-full h-full drop-shadow-md"
                        preserveAspectRatio="xMidYMid meet"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* --- Central Element: Stylized Car --- */}
                        <g transform="translate(100, 150)">
                            {/* Car Body Bottom */}
                            <path d="M 20 100 L 380 100 L 380 80 Q 380 50 350 50 L 280 50 L 230 10 L 120 10 L 80 50 L 20 50 Q 0 50 0 80 Z" fill="#F47E4D" stroke="#C2410C" strokeWidth="2" />
                            {/* Car Windows */}
                            <path d="M 90 50 L 125 15 L 225 15 L 270 50 Z" fill="#E2E8F0" stroke="#6D3078" strokeWidth="2" />

                            {/* Wheels */}
                            <circle cx="80" cy="100" r="35" fill="#1E293B" />
                            <circle cx="80" cy="100" r="15" fill="#94A3B8" />
                            <circle cx="320" cy="100" r="35" fill="#1E293B" />
                            <circle cx="320" cy="100" r="15" fill="#94A3B8" />

                            {/* Headlight */}
                            <path d="M 350 60 L 370 60 Q 380 60 380 75 L 350 75 Z" fill="#FEF08A" />
                        </g>

                        {/* --- Floating Icons representing Features --- */}

                        {/* Icon 1: Car Key (Ownership) - Top Left */}
                        <g transform="translate(50, 80)">
                            <circle cx="40" cy="40" r="45" fill="white" filter="url(#shadow)" />
                            {/* Key Head */}
                            <circle cx="30" cy="30" r="15" fill="none" stroke="#6D3078" strokeWidth="4" />
                            {/* Key Blade */}
                            <path d="M 40 40 L 65 65 L 70 60 L 60 50 L 65 45 L 55 35" stroke="#6D3078" strokeWidth="4" strokeLinecap="round" />
                        </g>

                        {/* Icon 2: Speedometer (Fast Processing) - Top Right */}
                        <g transform="translate(460, 60)">
                            <circle cx="40" cy="40" r="40" fill="white" filter="url(#shadow)" />
                            <path d="M 15 50 A 35 35 0 1 1 65 50" fill="none" stroke="#E2E8F0" strokeWidth="6" strokeLinecap="round" />
                            <path d="M 15 50 A 35 35 0 0 1 40 15" fill="none" stroke="#F47E4D" strokeWidth="6" strokeLinecap="round" />
                            {/* Needle */}
                            <path d="M 40 45 L 60 25" stroke="#6D3078" strokeWidth="3" strokeLinecap="round" />
                            <circle cx="40" cy="45" r="4" fill="#6D3078" />
                        </g>

                        {/* Icon 3: Percentage Tag (Interest Rate) - Bottom Right */}
                        <g transform="translate(420, 320)">
                            <circle cx="40" cy="40" r="45" fill="white" filter="url(#shadow)" />
                            {/* Tag Shape */}
                            <path d="M 25 20 L 55 20 L 65 35 L 55 50 L 25 50 Z" fill="#F47E4D" opacity="0.1" />
                            {/* % Text */}
                            <text x="40" y="45" textAnchor="middle" fill="#F47E4D" fontSize="32" fontWeight="bold" fontFamily="sans-serif">%</text>
                        </g>

                        {/* --- Decorative Elements --- */}
                        {/* Road Line */}
                        <path d="M 0 320 Q 300 350 600 320" stroke="#64748B" strokeWidth="2" strokeDasharray="10 10" opacity="0.3" />

                        {/* Connecting Dotted Lines */}
                        <path d="M 100 120 Q 80 150 120 180" stroke="#6D3078" strokeWidth="2" strokeDasharray="6 6" opacity="0.3" />
                        <path d="M 460 100 Q 400 150 380 180" stroke="#F47E4D" strokeWidth="2" strokeDasharray="6 6" opacity="0.3" />

                        {/* Definitions for Shadow */}
                        <defs>
                            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#64748b" floodOpacity="0.15" />
                            </filter>
                        </defs>
                    </svg>
                </motion.div>
            </div>
        </section>
    );
};

export default VehicleLoanHero;