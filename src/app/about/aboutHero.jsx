'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MaitriiAbout = () => {
    return (
        <section className="w-full min-h-[500px] bg-[#F8FAFC] flex items-center justify-center overflow-hidden relative">
            <div className="container mx-auto px-6 md:px-12 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* --- Left Side: Text Content --- */}
                {/* Isme entrance animation hai */}
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
                        Explore our journey, values, and commitment to Maitrii finance.
                    </p>
                </motion.div>

                {/* --- Right Side: Illustration --- */}
                {/* Container animate karega, lekin andar SVG normal hai */}
                <motion.div
                    className="relative w-full h-[300px] md:h-[400px] flex items-end justify-end"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <svg
                        viewBox="0 0 800 400"
                        className="w-full h-full drop-shadow-sm"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        {/* Background elements (Clouds) - STATIC */}
                        <circle cx="700" cy="150" r="20" fill="#E2E8F0" opacity="0.5" />
                        <circle cx="730" cy="160" r="25" fill="#E2E8F0" opacity="0.5" />

                        {/* Sun - STATIC */}
                        <circle cx="650" cy="100" r="25" fill="#FFD700" />

                        {/* The Winding Path (White Road) */}
                        <path
                            d="M 850 450 
                               C 700 450, 600 350, 450 350 
                               C 300 350, 200 250, 100 250 
                               L 100 450 Z"
                            fill="white"
                            className="drop-shadow-sm"
                        />
                        {/* Extended path for visual flow */}
                        <path
                            d="M 900 400 
                               C 750 400, 500 320, 550 220
                               S 800 180, 800 180"
                            fill="none"
                            stroke="white"
                            strokeWidth="60"
                            strokeLinecap="round"
                            className="opacity-90"
                        />

                        {/* Flags - STATIC (Normal groups) */}

                        {/* Flag 1 (Farthest) */}
                        <g transform="translate(680, 150) scale(0.6)">
                            <line x1="0" y1="0" x2="0" y2="60" stroke="#6D3078" strokeWidth="3" />
                            <path d="M 0 5 L 40 5 L 40 30 L 0 30" fill="#6D3078" />
                        </g>

                        {/* Flag 2 */}
                        <g transform="translate(750, 190) scale(0.7)">
                            <line x1="0" y1="0" x2="0" y2="70" stroke="#6D3078" strokeWidth="3" />
                            <path d="M 0 5 L 40 5 L 40 35 L 0 35" fill="#6D3078" />
                        </g>

                        {/* Flag 3 */}
                        <g transform="translate(580, 220) scale(0.8)">
                            <line x1="0" y1="0" x2="0" y2="80" stroke="#6D3078" strokeWidth="4" />
                            <path d="M 0 5 L 50 5 L 50 40 L 0 40" fill="#6D3078" />
                        </g>

                        {/* Flag 4 (Closest/Biggest) */}
                        <g transform="translate(450, 260) scale(1)">
                            <line x1="0" y1="0" x2="0" y2="100" stroke="#6D3078" strokeWidth="4" />
                            <path d="M 0 10 L 60 10 L 60 50 L 30 40 L 0 50 Z" fill="#6D3078" />
                        </g>
                    </svg>
                </motion.div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        </section>
    );
};

export default MaitriiAbout;