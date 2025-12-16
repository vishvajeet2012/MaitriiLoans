'use client';

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// --- Custom SVGs for each card ---

const FastApprovalIcon = () => (
  <svg viewBox="0 0 100 100" className="w-24 h-24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="#F3E8FF" stroke="#6D3078" strokeWidth="2" strokeDasharray="4 4" />
    {/* Rocket */}
    <path d="M50 20C50 20 30 50 30 65C30 75 40 80 50 80C60 80 70 75 70 65C70 50 50 20 50 20Z" fill="#6D3078" />
    <path d="M50 20C50 20 40 50 50 50C60 50 50 20 50 20" fill="#A855F7" opacity="0.5" />
    <circle cx="50" cy="55" r="8" fill="white" />
    {/* Flames */}
    <path d="M40 80L50 95L60 80" fill="#F47E4D" />
  </svg>
);

const EasyExperienceIcon = () => (
  <svg viewBox="0 0 100 100" className="w-24 h-24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="25" y="15" width="50" height="70" rx="8" fill="white" stroke="#6D3078" strokeWidth="3" />
    <rect x="30" y="20" width="40" height="50" rx="4" fill="#F8FAFC" />
    <circle cx="50" cy="78" r="4" fill="#F47E4D" />
    {/* Checkmark on screen */}
    <path d="M35 45L45 55L65 35" stroke="#F47E4D" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    {/* Sparkles */}
    <path d="M85 20L90 25L85 30L80 25Z" fill="#F47E4D" />
    <path d="M15 70L20 75L15 80L10 75Z" fill="#6D3078" />
  </svg>
);

const MinDocIcon = () => (
  <svg viewBox="0 0 100 100" className="w-24 h-24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Paper Stack */}
    <rect x="35" y="15" width="40" height="50" rx="2" fill="#E2E8F0" stroke="#64748B" strokeWidth="1" />
    <rect x="25" y="25" width="50" height="60" rx="4" fill="white" stroke="#6D3078" strokeWidth="3" />
    {/* Lines */}
    <line x1="35" y1="40" x2="65" y2="40" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" />
    <line x1="35" y1="50" x2="65" y2="50" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" />
    <line x1="35" y1="60" x2="55" y2="60" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" />
    {/* Check Seal */}
    <circle cx="65" cy="75" r="12" fill="#F47E4D" />
    <path d="M60 75L64 79L70 71" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LowInterestIcon = () => (
  <svg viewBox="0 0 100 100" className="w-24 h-24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="40" fill="#FEF3C7" opacity="0.5" />
    {/* Percentage Symbol */}
    <text x="50" y="65" textAnchor="middle" fontSize="50" fontWeight="bold" fill="#6D3078">%</text>
    {/* Down Arrow */}
    <path d="M80 50L70 65L60 50" stroke="#F47E4D" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="70" y1="30" x2="70" y2="65" stroke="#F47E4D" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const FlexibilityIcon = () => (
  <svg viewBox="0 0 100 100" className="w-24 h-24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Abstract Shapes */}
    <circle cx="30" cy="30" r="10" fill="#6D3078" />
    <circle cx="70" cy="30" r="10" fill="#F47E4D" />
    <circle cx="50" cy="70" r="10" fill="#6D3078" />
    {/* Connections */}
    <path d="M30 30 Q 50 50 70 30" stroke="#CBD5E1" strokeWidth="3" strokeDasharray="4 4" />
    <path d="M30 30 Q 20 60 50 70" stroke="#CBD5E1" strokeWidth="3" strokeDasharray="4 4" />
    <path d="M70 30 Q 80 60 50 70" stroke="#CBD5E1" strokeWidth="3" strokeDasharray="4 4" />
    {/* Arrows */}
    <path d="M 50 50 L 80 50 L 75 45 M 80 50 L 75 55" stroke="#F47E4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const RepaymentIcon = () => (
  <svg viewBox="0 0 100 100" className="w-24 h-24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Calendar/Wallet Hybrid */}
    <rect x="20" y="30" width="60" height="40" rx="5" fill="white" stroke="#6D3078" strokeWidth="3" />
    <path d="M20 45H80" stroke="#6D3078" strokeWidth="2" />
    {/* Coin */}
    <circle cx="50" cy="50" r="12" fill="#F47E4D" />
    <text x="50" y="55" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">₹</text>
    {/* Hand holding it */}
    <path d="M10 80 Q 50 90 90 80" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const businessLinesData = [
  {
    name: "Fast Approvals 🚀",
    href: "#",
    icon: <FastApprovalIcon />, // Using SVG Component
    data: [
      {
        paragraph: "In-principle sanction within 24-48 hours.",
        ul: [
          "Instant eligibility check",
          "Digital KYC & document upload",
          "Dedicated loan officer assigned",
          "Quick credit appraisal process"
        ]
      }
    ],
  },
  {
    name: "Easy Experience",
    href: "#",
    icon: <EasyExperienceIcon />,
    data: [
      {
        paragraph: "100% digital journey with doorstep support.",
        ul: [
          "No branch visits needed",
          "Free doorstep document collection",
          "Live application tracking",
          "24x7 customer support"
        ]
      }
    ],
  },
  {
    name: "Minimum Documentation",
    href: "#",
    icon: <MinDocIcon />,
    data: [
      {
        paragraph: "Simple documents, maximum approval chances.",
        ul: [
          "Only KYC + Income proof + Property docs",
          "ITR not mandatory in most cases",
          "Undocumented income proof options accepted ",
          "Flexible co-applicant and guarantor rules "
        ]
      }
    ],
  },
  {
    name: "Competitive Interest Rates",
    href: "#",
    icon: <LowInterestIcon />,
    data: [
      {
        paragraph: "Starting @ just 12%* p.a.",
        ul: [
          "Lowest rates based on profile",
          "Special rates for women applicants",
          "Balance transfer with rate reduction",
          "Foreclosure waiver in case of Top-Up"
        ]
      }
    ],
  },
  {
    name: "Flexibility in Loan Products",
    href: "#",
    icon: <FlexibilityIcon />,
    data: [
      {
        paragraph: "Home Loan, LAP, Plot Loan & Top-up – all in one place.",
        ul: [
          "Loan against residential & commercial property",
          "Plot purchase + construction loans",
          "Top-up on existing loans",
          "Overdraft facility available"
        ]
      }
    ],
  },
  {
    name: "Convenient Repayment Options",
    href: "#",
    icon: <RepaymentIcon />,
    data: [
      {
        paragraph: "Tenure up to 10 years with flexible EMIs.",
        ul: [
          "EMI / Step-up / Flexible repayment plans",
          "Longest tenure up to 10 years",
          "Multiple payment modes (UPI, Auto-debit)",
          "Part-prepayment without charges"
        ]
      }
    ],
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative bg-white py-20 overflow-hidden">
      
      {/* Background with slight tint instead of image */}
      <div className="absolute inset-0 z-0 bg-[#F8FAFC]"></div>

      <div className="relative z-10 container mx-auto px-5">
        <motion.div
          className="relative text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative inline-block">
          
            <h2 className="text-2xl md:text-5xl  text-[#6D3078]">
              Why Choose Maitrii Loans?
            </h2>
           
          </div>
        </motion.div>

        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" style={{ gridAutoRows: '1fr' }}>
            {businessLinesData.map((item, index) => (
              <BusinessCard key={item.name} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const BusinessCard = ({ item, index }) => {
  return (
    <motion.div
      className="group h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="block h-full no-underline cursor-default">
        <motion.div
          className="overflow-hidden rounded-xl shadow-md bg-white h-full flex flex-col border border-slate-100"
          whileHover={{
            scale: 1.02,
            boxShadow: "0 20px 30px -10px rgba(109, 48, 120, 0.15)", // Purple shadow on hover
            borderColor: "#F47E4D", // Orange border on hover
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Header Area with SVG Icon */}
          <div className="relative w-full h-40 flex items-center justify-center bg-gradient-to-br from-[#F3E8FF] to-[#FFF7ED]">
             {/* The SVG Icon */}
             {item.icon}
          </div>

          <div className="p-6 text-left flex flex-col flex-1">
            <h3 className="text-xl font-bold text-[#6D3078] mb-4 text-center group-hover:text-[#F47E4D] transition-colors duration-300">
              {item.name}
            </h3>

            <div className="space-y-3 flex-1">
              {item.data.map((content, idx) => (
                <div key={idx} className="space-y-3">
                  <p className="text-sm font-semibold text-slate-700 leading-relaxed text-center">
                    {content.paragraph}
                  </p>
                  <ul className="space-y-2 mt-4">
                    {content.ul.map((listItem, liIdx) => (
                      <li key={liIdx} className="flex items-start text-xs text-slate-500 leading-relaxed">
                        <span className="mr-2 text-[#F47E4D] mt-0.5 flex-shrink-0 font-bold">•</span>
                        <span>{listItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WhyChooseUs;