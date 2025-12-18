"use client";

import React from "react";
import Image from "next/image";
import director1 from "../../../public/Director1.jpg";
import director2 from "../../../public/Director2.jpg";
import director3 from "../../../public/team/kanishksir.jpeg";
// Using director1 as placeholder for the 3rd person if no specific image exists

const directors = [
    {
        name: "Er. Basant Goyal",
        role: "Managing Director",
        description: "An engineer graduate from MIT Pune with 25 years of rich & varied experience in the Finance Industry and IT, Mr. Basant Kumar Goyal has enjoyed as Promoter & Whole time director at Genus Overseas Electronics Limited and Mentor Home Loans India Limited. With the commitment to bring Indians a quality Home finance service at reasonable cost & to ensure more rural and semi-urban Indians own their own house, Mr. Goyal started Housing Finance at Mentor Home Loans India Ltd, where he was a Promoter Director. In a span of only 4 years, he is proud to have helped around 15,000 families improve their standard of living across Rajasthan, MP, Gujarat, and Maharashtra. The AUM increased from 300 lacs in 2014 with 4 branches in Rajasthan to 48,000 lacs in Dec 2019 with 48 branches across 4 states. A true believer in the dreams of the common man, Basant's ambition is to provide maximum loans to those who are passionate about their goals.",
        image: director1,
    },
    {
        name: "Mrs. Anju Goyal",
        role: "director",
        description: "She is a MA graduate from Aligarh University & founder Director of Mentor Finmart Pvt. Ltd. having rich experience in the field of finance. She actively participates in strategic decisions of the company. She also keeps a keen interest in Education, Social Activity, and Environmental Stability. To fulfill her dream of providing better education to underprivileged children, she has started a CBSE school in the semi-rural area. She is also associated with many NGOs to provide necessary help & create awareness. She runs a Credit Co-operative Society to help the poor & unbanked part of society, helping small communities grow & create a better future. She has an uncanny ability to resolve complex business and social issues.",
        image: director2,
    },
    {
        name: "Kanishk Goyal",
        role: "director",
        description: "",
        image: director3, // Placeholder
    },
];

const DirectorCard = ({ name, role, description, image }) => {
    return (
        <div className="relative pt-24 pb-4 px-2 h-full">
            <div className="bg-[#6D3078] rounded-lg p-6 pt-24 text-center h-full flex flex-col items-center relative shadow-lg">
                {/* Overlapping Image */}
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full border-4 border-[#6D3078] overflow-hidden bg-white shadow-md">
                    <Image 
                        src={image} 
                        alt={name} 
                        fill 
                        className="object-cover object-top"
                    />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-1 mt-2">
                    {name}
                </h3>
                <p className="text-[#F47E4D] text-sm font-semibold uppercase tracking-wider mb-4">
                    {role}
                </p>
                <p className="text-white/90 text-xs leading-relaxed text-justify px-2">
                    {description}
                </p>
                
              
            </div>
        </div>
    );
};

export default function TeamCarouselSection() {
    return (
        <section className="bg-white py-16 md:py-24 relative overflow-hidden">
            {/* Decoration SVG Background */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-30">
                    <path d="M-100 0 C 100 200, 300 0, 500 100 S 800 0, 1000 50 S 1400 0, 1500 200" stroke="#6D3078" strokeWidth="2" fill="none" opacity="0.1"/>
                    <circle cx="50" cy="100" r="150" fill="#F47E4D" opacity="0.05" />
                    <circle cx="1300" cy="700" r="200" fill="#6D3078" opacity="0.05" />
                    <rect x="0" y="0" width="1440" height="800" fill="url(#dirGradient)" opacity="0.05" />
                    <defs>
                        <linearGradient id="dirGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#FFFFFF" />
                            <stop offset="100%" stopColor="#F3E8FF" />
                        </linearGradient>
                    </defs>
                    <path d="M1440 200 C 1300 400 1100 300 1000 500" stroke="#F47E4D" strokeWidth="2" strokeDasharray="10 10" opacity="0.1" />
                </svg>
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#2B3457] mb-2">
                        About The Management
                    </h2>
                    <p className="text-slate-500 font-medium tracking-wide uppercase">
                        Board of Directors
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {directors.map((director, index) => (
                        <DirectorCard 
                            key={index}
                            {...director}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}