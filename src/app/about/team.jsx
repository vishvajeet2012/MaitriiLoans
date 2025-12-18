"use client";

import React from "react";
import Image from "next/image";
import manish from "../../../public/team/mainshsir.jpeg"; // Reusing image as placeholder
import vijendra from "../../../public/team/vijaendra sir.jpeg";
import msJyoti from "../../../public/team/joyti.jpeg";
import utkarsh from "../../../public/team/utkarsh.jpeg"
// Placeholder for Team Members

const teamMembers = [
  {
    name: "Mr. Utkarsh Goyal",
    role: "Chief Executive Officer",
    experience: "15+ years",
    description:
      "A visionary leader driving Maitri Loans with a strong focus on innovation, ethical lending, and long-term growth. With deep industry insights and strategic decision-making, he plays a key role in shaping the company’s mission to make financial services accessible, transparent, and customer-centric.",
    image: utkarsh,
  },
  {
    name: "Mr. Bijendra Sharma",
    role: "VP – Business Development",
    experience: "25 years experience",
    description:
      "Brings over two decades of expertise in business expansion, market penetration, and strategic partnerships. Instrumental in strengthening Maitri Loans’ regional presence, building trusted customer relationships, and driving sustainable business growth across multiple districts.",
    image: vijendra,
  },
  {
    name: "Mr. Manish Jain",
    role: "Chief Operating Officer",
    experience: "20 years experience",
    description:
      "Oversees operational excellence at Maitri Loans with a strong background in financial operations and process optimization. His leadership ensures smooth internal workflows, regulatory compliance, and efficient service delivery to customers.",
    image: manish,
  },
  {
    name: "Ms. Jyoti Sharma",
    role: "Head of Operations",
    experience: "10 years experience",
    description:
      "Manages day-to-day operations with a sharp focus on efficiency, compliance, and customer satisfaction. She plays a critical role in streamlining loan processing, improving turnaround times, and maintaining high operational standards at Maitri Loans.",
    image: msJyoti,
  },
];

const TeamCard = ({ name, role, description, image }) => {
    return (
        <div className="relative pt-24 pb-4 px-2 h-full">
            <div className="bg-[#6D3078] rounded-lg p-6 pt-24 text-center h-full flex flex-col items-center relative shadow-lg">
                {/* Overlapping Image */}
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border-4 border-[#6D3078] overflow-hidden bg-white shadow-md">
                    <Image 
                        src={image} 
                        alt={name} 
                        fill 
                        className="object-cover object-top"
                    />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-1 ">
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

export default function TeamSection() {
    return (
        <section className="bg-slate-50 py-16 md:py-24 relative overflow-hidden">
            {/* Team Connection SVG Background */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                 <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-30">
                     <circle cx="200" cy="200" r="4" fill="#6D3078" opacity="0.4"/>
                     <circle cx="300" cy="100" r="6" fill="#F47E4D" opacity="0.4"/>
                     <circle cx="1240" cy="650" r="8" fill="#6D3078" opacity="0.4"/>
                     <line x1="200" y1="200" x2="300" y2="100" stroke="#6D3078" strokeWidth="1" strokeOpacity="0.1" />
                     <path d="M0 400 Q 300 300, 720 400 T 1440 400" stroke="#6D3078" strokeWidth="2" strokeOpacity="0.05" fill="none" />
                     <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                         <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#6D3078" strokeWidth="1" opacity="0.03"/>
                     </pattern>
                     <rect width="100%" height="100%" fill="url(#grid)" />
                 </svg>
            </div>
            <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
                
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#2B3457] mb-2">
                        Our Dedicated Team
                    </h2>
                    <p className="text-slate-500 font-medium tracking-wide uppercase">
                        The Backbone of our Success
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
                    {teamMembers.map((member, index) => (
                        <TeamCard 
                            key={index}
                            {...member}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
