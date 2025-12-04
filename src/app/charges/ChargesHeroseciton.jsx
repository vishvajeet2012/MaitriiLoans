'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ChargesHeroSeciton = () => {
    return (
        <section className="w-full min-h-[500px] bg-[#F8FAFC] flex items-center justify-center overflow-hidden relative">
            {/* Subtle background shapes for depth */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-[300px] h-[300px] rounded-full bg-[#6D3078] opacity-[0.03] blur-3xl"></div>
                <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[#F47E4D] opacity-[0.04] blur-3xl"></div>
            </div>

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
                        CHARGES
                    </h2>
                    <p className="text-lg text-[#6D3078] leading-relaxed font-medium">
                        Empowering your dreams with secure, fast, and friendly financial solutions. Explore our journey and commitment to your growth.
                    </p>
                    {/* Optional CTA Button */}
                    <div className="mt-4">
                        <button className="px-6 py-3 bg-[#6D3078] text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-md shadow-[#6D3078]/20">
                            Explore Products
                        </button>
                    </div>
                </motion.div>

                {/* --- Right Side: New Illustration for Loans --- */}
                <motion.div
                    className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center"
                    initial={{ opacity: 0, x: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <svg
                        viewBox="0 0 600 500"
                        className="w-full h-full drop-shadow-sm"
                        preserveAspectRatio="xMidYMid meet"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Central Element: Smartphone with Success Screen */}
                        <g transform="translate(200, 50)">
                            {/* Phone Body */}
                            <rect x="0" y="0" width="200" height="400" rx="30" fill="white" stroke="#E2E8F0" strokeWidth="4" />
                            {/* Screen */}
                            <rect x="15" y="40" width="170" height="320" rx="15" fill="#F1F5F9" />
                            {/* Top Notch/Bar */}
                            <rect x="70" y="15" width="60" height="6" rx="3" fill="#CBD5E1" />

                            {/* Screen Content: Loan Approved UI */}
                            <g transform="translate(100, 140)">
                                {/* Success Icon Circle */}
                                <circle cx="0" cy="0" r="40" fill="#F47E4D" fillOpacity="0.15" />
                                <circle cx="0" cy="0" r="30" fill="#F47E4D" />
                                {/* Checkmark */}
                                <path d="M-15 0 L -5 10 L 15 -15" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <text x="100" y="210" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold" fontSize="18" fill="#6D3078">Loan Approved!</text>
                            <text x="100" y="235" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fill="#64748B">Amount Disbursed</text>
                            <rect x="40" y="260" width="120" height="10" rx="5" fill="#E2E8F0" />
                            <rect x="40" y="280" width="90" height="10" rx="5" fill="#E2E8F0" />
                        </g>

                        {/* Floating Element 1: Coins Stack (Wealth) - Left Side */}
                        <g transform="translate(80, 280)">
                            <circle cx="0" cy="0" r="60" fill="white" filter="url(#shadow)" />
                            {/* Stacked Coins */}
                            <ellipse cx="0" cy="25" rx="35" ry="12" fill="#F47E4D" stroke="#C2410C" strokeWidth="1" />
                            <ellipse cx="0" cy="12" rx="35" ry="12" fill="#F47E4D" stroke="#C2410C" strokeWidth="1" />
                            <ellipse cx="0" cy="-1" rx="35" ry="12" fill="#FB923C" stroke="#C2410C" strokeWidth="1" />
                            {/* Rupee Symbol */}
                            <text x="0" y="5" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold" fontSize="24" fill="white">₹</text>
                        </g>

                        {/* Floating Element 2: Security Shield - Top Right */}
                        <g transform="translate(480, 120)">
                            <circle cx="0" cy="0" r="50" fill="white" filter="url(#shadow)" />
                            {/* Shield Shape */}
                            <path d="M0 -25 C 15 -25, 25 -15, 25 5 C 25 20, 0 35, 0 35 C 0 35, -25 20, -25 5 C -25 -15, -15 -25, 0 -25 Z" fill="#6D3078" />
                            {/* Lock Icon inside */}
                            <rect x="-8" y="-2" width="16" height="14" rx="2" fill="white" />
                            <path d="M-5 -2 V -7 C -5 -10, 5 -10, 5 -7 V -2" stroke="white" strokeWidth="3" fill="none" />
                        </g>

                        {/* Floating Element 3: Growth Chart Arrow - Bottom Right */}
                        <g transform="translate(450, 350)">
                            <circle cx="0" cy="0" r="55" fill="white" filter="url(#shadow)" />
                            {/* Graph Line & Arrow */}
                            <path d="M-30 20 L -10 10 L 10 20 L 30 -15" stroke="#F47E4D" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            <path d="M30 -15 L 20 -15 L 30 -5 Z" fill="#F47E4D" stroke="#F47E4D" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        </g>

                        {/* Connecting decorative lines/dots */}
                        <circle cx="140" cy="150" r="5" fill="#6D3078" opacity="0.4" />
                        <circle cx="420" cy="80" r="8" fill="#F47E4D" opacity="0.3" />
                        <circle cx="520" cy="250" r="4" fill="#6D3078" opacity="0.4" />

                        {/* Definitions for drop shadows on floating elements */}
                        <defs>
                            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                                <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#64748b" floodOpacity="0.15" />
                            </filter>
                        </defs>
                    </svg>
                </motion.div>
            </div>
        </section>
    );
};

export default ChargesHeroSeciton;